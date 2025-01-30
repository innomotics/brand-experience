import * as fs from "fs";
import { importDirectorySync } from '@iconify/tools/lib/import/directory';
import { cleanupSVG } from '@iconify/tools/lib/svg/cleanup';
import { runSVGO } from '@iconify/tools/lib/optimise/svgo';
import * as JSZip from 'jszip';

const directoryPath = "./bicolor";

let readmeContent = "import DownloadableIcon from '@site/src/components/DownloadableIcon/DownloadableIcon'\n\n# `Bicolor Icons`\n\n> Innomotics bicolor icons\n\n";

let bundles = [{ set: 'bicolor', zip: new JSZip() }];

(() => {

  const iconSet = importDirectorySync(directoryPath);

  iconSet.forEach((name, type) => {
    console.log(`${name} - ${type} processing`);
    if (type !== 'icon') {
      console.log(`${name} - ${type} is not icon`);
      return;
    }

    const svg = iconSet.toSVG(name);
    if (!svg) {
      // Invalid icon
      console.log(`${name} - ${type} is invalid`);
      iconSet.remove(name);
      return;
    }

    // Clean up and optimise icons
    try {
      cleanupSVG(svg);
      runSVGO(svg);
    } catch (err) {
      // Invalid icon
      console.error(`Error parsing ${name}:`, err);
      iconSet.remove(name);
      return;
    }
    // Update icon
    iconSet.fromSVG(name, svg);
  });

  let names = [];

  iconSet.forEach(name => {
    let tsCompatibleName = name.replace(/-/g, "_");
    names.push(tsCompatibleName);

    let bundle = bundles[0];
    const svgColor = iconSet.toSVG(name);
    if (!svgColor) {
      return;
    }
    // Save to file
    bundle.zip = bundle.zip.file(`${tsCompatibleName}.svg`, svgColor.toString());
    fs.writeFileSync(`../webdocs/static/svg/bicolor/${tsCompatibleName}.svg`, svgColor.toString());
  });

  bundles.forEach(async (z) => {
    await z.zip.generateAsync({ type: 'arraybuffer' }).then(content => {
      fs.writeFileSync(`../webdocs/static/svg/bicolor/innoicons_${z.set}.zip`, Buffer.from(new Uint8Array(content)));
    });
  })

  readmeContent += `<DownloadableIcon iconnames={['${names.join('\',\'')}']} bicolor={true}></DownloadableIcon>`;
  fs.writeFileSync("./bicolor/readme.md", readmeContent);
})();