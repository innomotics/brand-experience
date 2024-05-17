# `Layout`
 classNamees defining the Innomotics page layout

 The grid layout system is using [CSS grid](https://drafts.csswg.org/css-grid/)
## 36 columns
 use 'inno-main-grid' className on the main container element
<div className="inno-main-grid" style={{ "border": "1px solid white"}}>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow", "borderRight":"1px solid yellow" }}>&nbsp;</div>
</div>
## 33 content columns
 use 'inno-content-grid' className inside the 'inno-main-grid' container element
<div className="inno-main-grid" style={{ "border": "1px solid white"}}>
<div className="inno-content-grid">
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "borderLeft":"1px solid yellow", "borderRight":"1px solid yellow" }}>&nbsp;</div>
</div>
</div>
## using the full width of the container
use 'inno-full-content' inside the 'inno-main-grid' or 'inno-content-grid' elements
<div className="inno-main-grid" style={{ "border": "1px solid white"}}>
<div className="inno-full-content" style={{ "border": "1px solid yellow"}}><div style={{ "justifySelf": "center"}}>Full width used of main grid</div></div>
<div className="inno-content-grid" style={{ "border": "1px solid yellow"}}>
<div className="inno-full-content" style={{ "justifySelf": "center"}}>Full width used of content grid</div>
</div>
</div>
