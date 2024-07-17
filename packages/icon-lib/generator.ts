import * as fs from "fs";
import * as path from "path";

const directoryPath = "./lib/svg";
const regexes: RegExp[] = [
  /\r|\n|\s{2,}/g,
  /<!--.*-->/g,
  ///<style.*\/style>/g,
  ///class="[^\s]*/g,
  /stroke="[^\s]*/g,
  /stroke-width:\d{1,2}px;/g,
  //replace fill attribute 
  /fill="[^\/ | ^\s]*/g,
  /fill:[^;]*;/g
];
//passsing directoryPath and callback function
let moduleContent = "";

let readmeContent = "# `Icons`\nimport {InnoIcon} from '@innomotics/brand-experience-react-lib';\n\n> Innomotics icons for inno-icon component\n\n<div class='icon-wrapper'>";

let clearName = (name: string) => {
  return name.replace(/\-{1,}|\s{1,}/g, "").toLowerCase();
};

let optimizeSvg = (content: Buffer) => {
  let stringified = content.toString();
  for (let regex in regexes) {
    stringified = stringified.replace(regexes[regex], "");
  }
  //remove style infos
  return stringified.replace(/"/g, "'");
};

//generate ts module for dataurl-s
fs.readdir(directoryPath, (err, files) => {
  //handling error
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  //listing all files using forEach
  files.forEach((file) => {
    // Do whatever you want to do with the file
    let content = fs.readFileSync(path.join(directoryPath, file));
    let name = path.parse(path.join(directoryPath, file)).name;
    let clearedName = clearName(name);
    moduleContent += `export const inno_${clearedName} = "${optimizeSvg(content)}";\n`;
    readmeContent += `<div className="icon-item"><InnoIcon icon="${clearedName}" size="64"></InnoIcon><div>${clearedName}</div></div>`;
  });
  fs.writeFileSync("./lib/inno-icons.ts", moduleContent);
  readmeContent += "</div>";
  fs.writeFileSync("./readme.md",readmeContent);
});
