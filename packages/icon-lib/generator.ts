import * as fs from "fs";
import * as path from "path";

const directoryPath = "./lib/svg";

const whiteSpaceFixRegex: RegExp = /(?<=((\s+d=.+)|(\s+points=.+)))\s*(\r|\n)\s{2,}(?=.*")/g;

const standardRegexes: RegExp[] = [
  /\r|\n|\s{2,}/g,
  /<!--.*-->/g,
  /stroke="[^\s]*/g,
  //replace fill attribute 
  /fill="[^\/ | ^\s | ^>]*/g,
  /fill:[^;]*;/g
];

const styleRegexes: RegExp[] = [
  /<style.*\/style>/g,
  /class="[^\s]*/g,
]

// these files are using explicitly style to achive the effects
const passModifications: string[] = [
  "globe",
  "Worldwide",
  "sort-down2",
  "sort-up-down2",
  "sort-up2",
  "trash"
];

//passsing directoryPath and callback function
let moduleContent = "";

let readmeContent = "# `Icons`\nimport {InnoIcon} from '@innomotics/brand-experience-react-lib';\n\n> Innomotics icons for inno-icon component\n\n<div className='icon-wrapper'>";

let clearName = (name: string) => {
  return name.replace(/\-{1,}|\s{1,}/g, "").toLowerCase();
};

/**
 * in some svgs there is a new line char followed by 2 white spaces while within a d="..." or points="...", 
 * optimizeSvg() would replace it with an empty string but that is incorrect as it would change the points/numbers
 */
let fixWhiteSpacesBeforeOptimization = (content: string) => {
  return content.replace(whiteSpaceFixRegex, " ");
}

let optimizeSvg = (content: string, regexes: RegExp[]) => {
  for (let regex in regexes) {
    content = content.replace(regexes[regex], "");
  }
  //replace style infos
  return content.replace(/"/g, "'");
};

//generate ts module for dataurl-s
fs.readdir(directoryPath, (err, files) => {
  //handling error
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  files.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  //listing all files using forEach
  files.forEach((file) => {

    let name = path.parse(path.join(directoryPath, file)).name;

    // Do whatever you want to do with the file
    let content = fs.readFileSync(path.join(directoryPath, file));
    let optimizedContent = content.toString();

    optimizedContent = fixWhiteSpacesBeforeOptimization(optimizedContent);

    if (!passModifications.includes(name)) {
      optimizedContent = optimizeSvg(optimizedContent, standardRegexes.concat(styleRegexes));
    }
    else {
      optimizedContent = optimizeSvg(optimizedContent, standardRegexes);
    }
    let clearedName = clearName(name);
    moduleContent += `export const inno_${clearedName} = "${optimizedContent}";\n`;
    readmeContent += `<div className="icon-item"><InnoIcon icon="${clearedName}" size="64"></InnoIcon><div>${clearedName}</div></div>`;
  });
  fs.writeFileSync("./lib/inno-icons.ts", moduleContent);
  readmeContent += "</div>";
  fs.writeFileSync("./readme.md", readmeContent);
});
