import * as fs from 'fs';
import * as path from 'path';

const directoryPath = './lib/svg';
//passsing directoryPath and callback function
let moduleContent = ""; 
let clearName = (name: string) =>{
    return name.replace(/\-{1,}|\s{1,}/g,'').toLowerCase();
}

let optimizeSvg = (content: Buffer) =>{
    let stringified = content.toString();
    stringified = stringified.replace(/\r|\n|\s{2,}/g,'');
    return stringified.replace(/"/g,'\'');
}

//generate ts module for dataurl-s
fs.readdir(directoryPath, (err, files) => {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach((file) => {
        // Do whatever you want to do with the file
        let content = fs.readFileSync(path.join(directoryPath,file));
        let name = path.parse(path.join(directoryPath,file)).name;
        moduleContent += `export const inno_${clearName(name)} = "${optimizeSvg(content)}";\n`; 
    });
    fs.writeFileSync('./lib/inno-icons.ts',moduleContent);
});