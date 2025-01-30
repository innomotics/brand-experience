import * as fs from "fs";
import { importDirectorySync } from '@iconify/tools/lib/import/directory';
import { cleanupSVG } from '@iconify/tools/lib/svg/cleanup';
import { runSVGO } from '@iconify/tools/lib/optimise/svgo';
import { parseColors } from '@iconify/tools/lib/colors/parse';
import { SVG } from '@iconify/tools';
import * as JSZip from 'jszip';

const directoryPath = "./svg";

//passsing directoryPath and callback function
let moduleContent = "";


let readmeContent = "import DownloadableIcon from '@site/src/components/DownloadableIcon/DownloadableIcon'\n\n# `Icons`\n\n> Innomotics icons for inno-icon component\n\n";

let themes = [{ set: 'white', color: '#ffffff' }, { set: 'powergrey', color: '#08191f' }, { set: 'lime', color: '#e1f000' }];
let bundles = [{ set: 'white', zip: new JSZip() }, { set: 'powergrey', zip: new JSZip() }, { set: 'lime', zip: new JSZip() }];

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
            //large icons are specified with not transparent bg so fill attribute shoud not be changed;
            if(name.includes("large")){
              switch(attr){
                case "fill":
                  {
                    return "none";
                  }
                  default:{
                    return "currentColor";
                  }
              }
              }
            return "currentColor";
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
      let bundle = bundles.find(z=> z.set == theme.set);

      const svgColor = iconSet.toSVG(name);
      if (!svgColor) {
        return;
      }
      parseColors(svgColor, {
        defaultColor: theme.color,
        callback: (attr, colorStr, color) => {
          //large icons are specified with not transparent bg so fill attribute shoud not be changed;
          if(name.includes("large")){
            switch(attr){
              case "fill":
                {
                  return "none";
                }
                default:{
                  return theme.color;
                }
            }
            }
          return theme.color;
        },
      });
      // Save to file
      bundle.zip = bundle.zip.file(`${tsCompatibleName}.svg`, svgColor.toString());
      fs.writeFileSync(`../webdocs/static/svg/${theme.set}/${tsCompatibleName}.svg`, svgColor.toString());
    });
  });

  bundles.forEach(async (z)=>{
    await z.zip.generateAsync({type:'arraybuffer'}).then(content=>{
        fs.writeFileSync(`../webdocs/static/svg/${z.set}/innoicons_${z.set}.zip`, Buffer.from(new Uint8Array(content)));
    });
  })

  fs.writeFileSync("./inno-icons.ts", moduleContent);
  readmeContent += `<DownloadableIcon iconnames={['${names.join('\',\'')}']} bicolor={false}></DownloadableIcon>`;
  fs.writeFileSync("./svg/readme.md", readmeContent);
})();