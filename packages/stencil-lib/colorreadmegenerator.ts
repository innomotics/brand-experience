import * as fs from 'fs';

const filePath = './styles/_colors.scss';
const cleanerregex = /\r|\n|\s{1,}|;/g;
//passsing directoryPath and callback function
let readmeContent = "# `Colors`\n Available Innomotics colors'\n\n<div className='color-wrapper'>\n";

//listing all files using forEach
// Do whatever you want to do with the file
let content = fs.readFileSync(filePath);
let lines = content.toString().split('\n');
let dict = {};

function replace(variable: string): string {
  let variableregex = /\$.*\-\d{2,3}/g;
  let finds; 
  if ((finds = variableregex.exec(variable)) !== null) {
    if (finds !== null) {
      variable = dict[finds[0]];
    }
  }
  return variable;
}

lines.forEach(line => {
  line = line.replace(cleanerregex, '').toLowerCase();
  if (line.length !== 0) {
    let splittedVariable = line.split(':');
    splittedVariable[1] = splittedVariable[1].replace(' ', '');
    let hasopacity = splittedVariable[1].includes("rgba(");
    let opacityValue = "1";
    if(hasopacity){
      let opacityRegex = /\d\.\d{1,2}/g;
      let opacity = opacityRegex.exec(splittedVariable[1]);
      if(opacity != null){
        opacityValue = opacity[0].toString();
      }
    }

    splittedVariable[1] = replace(splittedVariable[1]);

    dict[splittedVariable[0]] = splittedVariable[1];
    let islight = splittedVariable[0].includes("-light") || !splittedVariable[0].includes("-dark");
    readmeContent += `<div className="color-item ${islight?'light':'dark'}"><div id="colorcube" style={{"backgroundColor": "${dict[splittedVariable[0]]}" `;
    if(hasopacity){
      readmeContent += `,"opacity": "${opacityValue}"`;
    }
    readmeContent += `}}></div><div id="name">${splittedVariable[0]}</div></div>\n`;
  }
});
readmeContent += '</div>\n\n ## Usage \nImport the colors either by \n```@use @innomotics/brand-experience/styles/colors; ```\n or \n``` @use @innomotics/brand-experience/styles/innomotics; ```';
fs.writeFileSync('./readmes/colors/readme.md', readmeContent);
