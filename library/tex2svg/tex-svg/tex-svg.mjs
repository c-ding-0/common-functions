import { Tex2Svg, Tex2SvgFile, Tex2SvgImgTag } from "../node_modules/tex2svg/lib/index.js";
 
// The basic compiler
const basicCompiler = new Tex2Svg({
  tmpdir: "/tmp", // the dir for temporary files
  precision: 2, // the integer from 1 to 6, defines the number of digits after the comma
  inline: true, // generate inline SVG code
  minifyids: false, // minify IDs, use carefully when having several inline SVGs on one page
  prefixids: false, // prefix function for IDs
  preamble: ["\\usepackage{tikz-cd}"], // additional preamble, e.g. "\usepackage{cmbright}"
  dvisvgm: "dvisvgm", // dvisvgm command, e.g. "dvisvgm --optimize=remove-clippath --exact-bbox"
});

import { math, tikz } from "../node_modules/tex2svg/lib/index.js";
 
// math for using as inline element
const inlineMath = math(
  "\\zeta(s) = \\sum\\limits_{n=1}^\\infty 1 / n^s",
  true
);
// math for using as block element
const displaystyleMath = math(
  "\\zeta(s) = \\sum\\limits_{n=1}^\\infty 1 / n^s"
);
// tikz with basic macros only
const basicTikz = tikz(
  "\\node (a) {A}; \\node (b) at (1,0) {B};\\draw [<->] (a) -- (b);"
);
// tikz with arrows library
const extraLibraryTikz = tikz(
  "\\node (a) {A}; \\node (b) at (1,0) {B};\\draw [open triangle 45-triangle 45] (a) -- (b);",
  ["arrows"]
);
// custom block
const formula={
 code: '\\begin{align} s  \\end{align}',
depth:true,
};
const simpleTextBlock = {
  code: '$\\begin{tikzcd} A \\arrow[rd] \\arrow[r, "\\phi"] & B \\\\ & C\\end{tikzcd}$ \\begin{align} s  \\end{align}',
  depth: true, // the block with depth can be vertically aligned
};

basicCompiler.compile([
  //inlineMath,
  //displaystyleMath,
  //basicTikz,
  //extraLibraryTikz,
  simpleTextBlock,
  
]);//.then((svg)=>console.log(svg));
const fileCompiler = new Tex2SvgFile({
  tmpdir: "../../../data/tmpdir",
  preamble: ["\\usepackage{tikz-cd}"], // additional preamble, e.g. "\usepackage{cmbright}"
  outdir:"../../../data/tmpdir",
  //name:function(){return "out";},
});
fileCompiler.compile([inlineMath,simpleTextBlock,]).then((svg)=>console.log(svg[0]));