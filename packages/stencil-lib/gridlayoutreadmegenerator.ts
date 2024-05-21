import * as fs from 'fs';

let maingridStart = "<div className=\"inno-main-grid\" style={{ \"border\": \"1px solid white\"}}>\n";
//passsing directoryPath and callback function
let readmeContent = "# `Layout`\n classNames defining the Innomotics page layout\n\n The grid layout system is using [CSS grid](https://drafts.csswg.org/css-grid/)\n";
readmeContent += "## 36 columns\n use 'inno-main-grid' className on the main container element\n";
readmeContent += maingridStart;
for(let i = 0; i<35 ; i++){
  readmeContent += "<div style={{ \"borderLeft\":\"1px solid yellow\" }}>&nbsp;</div>\n"
}
readmeContent += "<div style={{ \"borderLeft\":\"1px solid yellow\", \"borderRight\":\"1px solid yellow\" }}>&nbsp;</div>\n"

readmeContent += "</div>\n";

readmeContent += "## 33 content columns\n use 'inno-content-grid' className inside the 'inno-main-grid' container element\n";
readmeContent += maingridStart;
readmeContent += "<div className=\"inno-content-grid\">\n";
for(let i = 0; i<31 ; i++){
  readmeContent += "<div style={{ \"borderLeft\":\"1px solid yellow\" }}>&nbsp;</div>\n";
}
readmeContent += "<div style={{ \"borderLeft\":\"1px solid yellow\", \"borderRight\":\"1px solid yellow\" }}>&nbsp;</div>\n";
readmeContent += "</div>\n";
readmeContent += "</div>\n";
readmeContent += "## using the full width of the container\n";
readmeContent += "use 'inno-full-content' inside the 'inno-main-grid' or 'inno-content-grid' elements\n";

readmeContent += maingridStart;
readmeContent += "<div className=\"inno-full-content\" style={{ \"border\": \"1px solid yellow\"}}><div style={{ \"justifySelf\": \"center\"}}>Full width used of main grid</div></div>\n"
readmeContent += "<div className=\"inno-content-grid\" style={{ \"border\": \"1px solid yellow\"}}>\n";
readmeContent += "<div className=\"inno-full-content\" style={{ \"justifySelf\": \"center\"}}>Full width used of content grid</div>\n";
readmeContent += "</div>\n";
readmeContent += "</div>\n";


fs.writeFileSync('./readmes/layout/readme.md', readmeContent);
