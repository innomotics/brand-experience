import * as fs from 'fs';

const filePath = './styles/_colors.scss';
const cleanerregex = /\r|\n|\s{1,}|;/g;
//passsing directoryPath and callback function
let readmeContent = "# `Colors`\n Available Innomotics colors'\n\n<div class='color-wrapper'>\n";

//listing all files using forEach
// Do whatever you want to do with the file
let content = fs.readFileSync(filePath);
let lines = content.toString().split('\n');
let dict = {};

function replace(variable: string): string {
  let variableregex = /\$.*\-\d{2,3}/g;
  let finds; 
  if ((finds = variableregex.exec(variable)) !== null) {
    console.log("Testing is positive on "+ variable + " found "+ finds?.length);
    if (finds !== null) {
      console.log("variable found "+ finds[0] + " in "+variable);
      variable = dict[finds[0]];
    }
  }
  console.log("After replace: "+ variable);
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
    readmeContent += `<div class="color-item ${islight?'light':'dark'}"><div id="colorcube" style={{"background-color": "${dict[splittedVariable[0]]}" `;
    if(hasopacity){
      readmeContent += `,"opacity": "${opacityValue}"`;
    }
    readmeContent += `}}></div><div id="name">${splittedVariable[0]}</div></div>\n`;
//    console.log(line);
  }
});
readmeContent += '</div>\n\n ## Usage \nImport the colors either by \n```@use @innomotics/ix/dist/styles/colors; ```\n or \n``` @use @innomotics/ix/dist/styles/innomotics; ```';
fs.writeFileSync('./styles/readme.md', readmeContent);
