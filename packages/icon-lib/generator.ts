import * as fs from "fs";
import { importDirectorySync } from '@iconify/tools/lib/import/directory';
import { cleanupSVG } from '@iconify/tools/lib/svg/cleanup';
import { runSVGO } from '@iconify/tools/lib/optimise/svgo';
import { parseColors } from '@iconify/tools/lib/colors/parse';


const directoryPath = "./lib/svg";

//passsing directoryPath and callback function
let moduleContent = "";


let readmeContent = "import DownloadableIcon from '@site/src/components/DownloadableIcon/DownloadableIcon'\n\n# `Icons`\n\n> Innomotics icons for inno-icon component\n\n";

let themes = [{ set: 'white', color: '#ffffff' }, { set: 'grey', color: '#aaaaaa' }, { set: 'lime', color: '#e1f000' }];

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
      parseColors(svg, {
        defaultColor: "#ffffff",
        callback: (attr, colorStr, color) => {
          return "unset";
        },
      });
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
    moduleContent += `export const inno_${tsCompatibleName} = "${iconSet.toString(name).replace(/"/g, "'")}";\n`;
    names.push(tsCompatibleName);

    themes.forEach(theme => {

      const svgColor = iconSet.toSVG(name);
      if (!svgColor) {
        return;
      }
      parseColors(svgColor, {
        defaultColor: theme.color,
        callback: (attr, colorStr, color) => {
          return theme.color;
        },
      });
      // Save to file
      fs.writeFileSync(`./downloadoutput/${theme.set}/${name}.svg`, svgColor.toString());
    });
  });

  fs.writeFileSync("./lib/inno-icons.ts", moduleContent);
  readmeContent += `<DownloadableIcon iconnames={['${names.join('\',\'')}']}></DownloadableIcon>`;
  fs.writeFileSync("./readme.md", readmeContent);
})();