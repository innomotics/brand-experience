# `Layout`
 classNames defining the Innomotics page layout

 The grid layout system is using [CSS grid](https://drafts.csswg.org/css-grid/)
## 36 columns
 Use 'be-main-grid' className on the main container element. If this grid is not your main layout grid add the 'subgrid' class as well
<div className="be-main-grid subgrid" style={{ "border": "1px solid white"}}>
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
## 32 content column
 inside 'be-main-grid' use 'be-content-grid' to use the center 32 columns
<div className="be-main-grid subgrid" style={{ "border": "1px solid white"}}>
<div className="be-content-grid">
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
## Targeting columns for placement
direct child elements of 'be-main-grid' and 'be-content grid' can be placed using
'be-columns-[start]-[end]' 
<div>[start] - inclusive, the starting column number</div>
<div>[end] - exclusive, the ending column number </div>
<div className="be-main-grid subgrid" style={{ "border": "1px solid white"}}>
<div className="be-columns-1-37"><div>Main grid</div></div>
<div className="be-columns-1-20" style={{ "border": "1px solid yellow", "display": "grid"}}><div>be-columns-1-20</div></div>
<div className="be-columns-7-27" style={{ "border": "1px solid yellow", "display": "grid"}}><div>be-columns-7-27</div></div>
<div className="be-columns-1-37" style={{ "border": "1px solid yellow", "display": "grid"}}><div>Full width of main gridwith be-columns-1-37</div></div>
<div className="be-content-grid" style={{ "border": "1px solid yellow"}}>
<div className="be-columns-1-33" >Content grid</div>
<div className="be-columns-1-20" style={{ "border": "1px solid yellow"}}>be-columns-1-20</div>
<div className="be-columns-7-27" style={{ "border": "1px solid yellow"}}>be-columns-7-27</div>
<div className="be-columns-1-33" style={{ "border": "1px solid yellow"}}>Full width of content grid with be-columns-1-33</div>
</div>
</div>
