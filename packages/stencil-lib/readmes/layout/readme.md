# `Layout`
 Classes defining the Innomotics page layout

 The grid layout system is using [CSS grid](https://drafts.csswg.org/css-grid/)
## 36 columns
 use 'inno-main-grid' class on the main container element
<div class="inno-main-grid" style={{ "border": "1px solid white"}}>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow", "border-right":"1px solid yellow" }}>&nbsp;</div>
</div>
## 33 content columns
 use 'inno-content-grid' class inside the 'inno-main-grid' container element
<div class="inno-main-grid" style={{ "border": "1px solid white"}}>
<div class="inno-content-grid">
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow" }}>&nbsp;</div>
<div style={{ "border-left":"1px solid yellow", "border-right":"1px solid yellow" }}>&nbsp;</div>
</div>
</div>
## using the full width of the container
use 'inno-full-content' inside the 'inno-main-grid' or 'inno-content-grid' elements
<div class="inno-main-grid" style={{ "border": "1px solid white"}}>
<div class="inno-full-content" style={{ "border": "1px solid yellow"}}><div style={{ "justify-self": "center"}}>Full width used of main grid</div></div>
<div class="inno-content-grid" style={{ "border": "1px solid yellow"}}>
<div class="inno-full-content" style={{ "justify-self": "center"}}>Full width used of content grid</div>
</div>
</div>
