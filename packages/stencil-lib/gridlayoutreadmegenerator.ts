import * as fs from 'fs';

let maingridStart = "<div className=\"be-main-grid subgrid\" style={{ \"border\": \"1px solid white\"}}>\n";
//passsing directoryPath and callback function
let readmeContent = "# `Layout`\n classNames defining the Innomotics page layout\n\n The grid layout system is using [CSS grid](https://drafts.csswg.org/css-grid/)\n";
readmeContent += "## 36 columns\n Use 'be-main-grid' className on the main container element. If this grid is not your main layout grid add the 'subgrid' class as well\n";
readmeContent += maingridStart;
for(let i = 0; i<35 ; i++){
  readmeContent += "<div style={{ \"borderLeft\":\"1px solid yellow\" }}>&nbsp;</div>\n"
}
readmeContent += "<div style={{ \"borderLeft\":\"1px solid yellow\", \"borderRight\":\"1px solid yellow\" }}>&nbsp;</div>\n"

readmeContent += "</div>\n";

readmeContent += "## 32 content column\n inside 'be-main-grid' use 'be-content-grid' to use the center 32 columns\n";
readmeContent += maingridStart;
readmeContent += "<div className=\"be-content-grid\">\n";
for(let i = 0; i<31 ; i++){
  readmeContent += "<div style={{ \"borderLeft\":\"1px solid yellow\" }}>&nbsp;</div>\n";
}
readmeContent += "<div style={{ \"borderLeft\":\"1px solid yellow\", \"borderRight\":\"1px solid yellow\" }}>&nbsp;</div>\n";
readmeContent += "</div>\n";
readmeContent += "</div>\n";
readmeContent += "## Targeting columns for placement\n";
readmeContent += "direct child elements of 'be-main-grid' and 'be-content grid' can be placed using\n";
readmeContent += "'be-columns-[start]-[end]' \n";
readmeContent += "<div>[start] - inclusive, the starting column number</div>\n";
readmeContent += "<div>[end] - exclusive, the ending column number </div>\n";

readmeContent += maingridStart;
readmeContent += "<div className=\"be-columns-1-37\"><div>Main grid</div></div>\n"
readmeContent += "<div className=\"be-columns-1-20\" style={{ \"border\": \"1px solid yellow\", \"display\": \"grid\"}}><div>be-columns-1-20</div></div>\n"
readmeContent += "<div className=\"be-columns-7-27\" style={{ \"border\": \"1px solid yellow\", \"display\": \"grid\"}}><div>be-columns-7-27</div></div>\n"
readmeContent += "<div className=\"be-columns-1-37\" style={{ \"border\": \"1px solid yellow\", \"display\": \"grid\"}}><div>Full width of main gridwith be-columns-1-37</div></div>\n"
readmeContent += "<div className=\"be-content-grid\" style={{ \"border\": \"1px solid yellow\"}}>\n";
readmeContent += "<div className=\"be-columns-1-33\" >Content grid</div>\n";
readmeContent += "<div className=\"be-columns-1-20\" style={{ \"border\": \"1px solid yellow\"}}>be-columns-1-20</div>\n";
readmeContent += "<div className=\"be-columns-7-27\" style={{ \"border\": \"1px solid yellow\"}}>be-columns-7-27</div>\n";
readmeContent += "<div className=\"be-columns-1-33\" style={{ \"border\": \"1px solid yellow\"}}>Full width of content grid with be-columns-1-33</div>\n";
readmeContent += "</div>\n";
readmeContent += "</div>\n";


fs.writeFileSync('./readmes/layout/readme.md', readmeContent);
