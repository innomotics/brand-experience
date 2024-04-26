import * as fs from 'fs';

let maingridStart = "<div class=\"inno-main-grid\" style={{ \"border\": \"1px solid white\"}}>\n";
//passsing directoryPath and callback function
let readmeContent = "# `Layout`\n Classes defining the Innomotics page layout\n\n The grid layout system is using [CSS grid](https://drafts.csswg.org/css-grid/)\n";
readmeContent += "## 36 columns\n use 'inno-main-grid' class on the main container element\n";
readmeContent += maingridStart;
for(let i = 0; i<35 ; i++){
  readmeContent += "<div style={{ \"border-left\":\"1px solid yellow\" }}>&nbsp;</div>\n"
}
readmeContent += "<div style={{ \"border-left\":\"1px solid yellow\", \"border-right\":\"1px solid yellow\" }}>&nbsp;</div>\n"

readmeContent += "</div>\n";

readmeContent += "## 33 content columns\n use 'inno-content-grid' class inside the 'inno-main-grid' container element\n";
readmeContent += maingridStart;
readmeContent += "<div class=\"inno-content-grid\">\n";
for(let i = 0; i<31 ; i++){
  readmeContent += "<div style={{ \"border-left\":\"1px solid yellow\" }}>&nbsp;</div>\n";
}
readmeContent += "<div style={{ \"border-left\":\"1px solid yellow\", \"border-right\":\"1px solid yellow\" }}>&nbsp;</div>\n";
readmeContent += "</div>\n";
readmeContent += "</div>\n";
readmeContent += "## using the full width of the container\n";
readmeContent += "use 'inno-full-content' inside the 'inno-main-grid' or 'inno-content-grid' elements\n";

readmeContent += maingridStart;
readmeContent += "<div class=\"inno-full-content\" style={{ \"border\": \"1px solid yellow\"}}><div style={{ \"justify-self\": \"center\"}}>Full width used of main grid</div></div>\n"
readmeContent += "<div class=\"inno-content-grid\" style={{ \"border\": \"1px solid yellow\"}}>\n";
readmeContent += "<div class=\"inno-full-content\" style={{ \"justify-self\": \"center\"}}>Full width used of content grid</div>\n";
readmeContent += "</div>\n";
readmeContent += "</div>\n";


fs.writeFileSync('./readmes/layout/readme.md', readmeContent);
