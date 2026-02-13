// dreameditor.js localStorage data
console.log("dreameditor.js:/>_ loading session settings.");
localStorage.setItem("appname", "DreamEditor")
localStorage.setItem("appversion", "6.0.2")
localStorage.setItem("patchdate", "2-12-26")
// user localStorage_settings
function userthemesettings(){
  console.log("Checking website localstorage for user theme settings");
  const displaystate = localStorage.getItem("displaymode");
  let viewengine = "darkmode";
  if (viewengine === displaystate) {
     document.getElementById("themesettings").setAttribute("href", "dreameditorengine/theme2.css");
     console.log("dark-mode enabled");
   } else {
	 console.log("light-mode enabled");
     return;
}}
// user syntax_settings
function syntaxsettings(){
  console.log("loading user syntax settings");
  console.log("Checking website localstorage for user syntax settings");
  const syntaxstate = localStorage.getItem("syntaxmode")
  if (syntaxstate === "text") {
     editorcanvasengine.setOption("mode", "");
     document.getElementById("syntaxmodestatus").innerText = syntaxstate;
     console.log("text mode enabled");
   } else if (syntaxstate === "html") {
     editorcanvasengine.setOption("mode", "xml");
     document.getElementById("syntaxmodestatus").innerText = syntaxstate;
	 console.log("html-mode enabled");
   } else if (syntaxstate === "javascript") {
     editorcanvasengine.setOption("mode", "javascript");
     document.getElementById("syntaxmodestatus").innerText = syntaxstate;
	 console.log("javascript-mode enabled");
   } else if (syntaxstate === "css") {
     editorcanvasengine.setOption("mode", "css");
     document.getElementById("syntaxmodestatus").innerText = syntaxstate;
	 console.log("css-mode enabled");
   } else if (syntaxstate === "php") {
     editorcanvasengine.setOption("mode", "php");
     document.getElementById("syntaxmodestatus").innerText = syntaxstate;
	 console.log("php-mode enabled");
   } else if (syntaxstate === "python") {
     editorcanvasengine.setOption("mode", "python");
     document.getElementById("syntaxmodestatus").innerText = syntaxstate;
	 console.log("python-mode enabled");
   } else if (syntaxstate === "pearl") {
     editorcanvasengine.setOption("mode", "pearl");
     document.getElementById("syntaxmodestatus").innerText = syntaxstate;
	 console.log("pearl-mode enabled");
   } else if (syntaxstate === "rust") {
     editorcanvasengine.setOption("mode", "rust");
     document.getElementById("syntaxmodestatus").innerText = syntaxstate;
	 console.log("rust-mode enabled");
   } else if (syntaxstate === "c") {
     editorcanvasengine.setOption("mode", "text/x-csrc");
     document.getElementById("syntaxmodestatus").innerText = syntaxstate;
	 console.log("c-mode enabled");
   } else if (syntaxstate === "shell") {
     editorcanvasengine.setOption("mode", "shell");
     document.getElementById("syntaxmodestatus").innerText = syntaxstate;
	 console.log("shell-mode enabled");
   } else if (syntaxstate === "powershell") {
     editorcanvasengine.setOption("mode", "powershell");
     document.getElementById("syntaxmodestatus").innerText = syntaxstate;
	 console.log("powershell-mode enabled");
   } else if (syntaxstate === "vbnet") {
     editorcanvasengine.setOption("mode", "vb");
     document.getElementById("syntaxmodestatus").innerText = syntaxstate;
	 console.log("vbnet-mode enabled");
   } else if (syntaxstate === "vbscript") {
     editorcanvasengine.setOption("mode", "vbscript");
     document.getElementById("syntaxmodestatus").innerText = syntaxstate;
	 console.log("vbscript-mode enabled");
   } else if (syntaxstate === "swift") {
     editorcanvasengine.setOption("mode", "swift");
     document.getElementById("syntaxmodestatus").innerText = syntaxstate;
	 console.log("swift-mode enabled");
   } else if (syntaxstate === "go") {
     editorcanvasengine.setOption("mode", "go");
     document.getElementById("syntaxmodestatus").innerText = syntaxstate;
	 console.log("go-mode enabled");
   } else if (syntaxstate === "c++") {
     editorcanvasengine.setOption("mode", "text/x-c++src");
     document.getElementById("syntaxmodestatus").innerText = syntaxstate;
	 console.log("c++-mode enabled");
   } else if (syntaxstate === "c#") {
     editorcanvasengine.setOption("mode", "text/x-csharp");
     document.getElementById("syntaxmodestatus").innerText = syntaxstate;
	 console.log("c#-mode enabled");
   } else if (syntaxstate === "objective-c") {
     editorcanvasengine.setOption("mode", "text/x-objectivec");
     document.getElementById("syntaxmodestatus").innerText = syntaxstate;
	 console.log("objectivec-mode enabled");
   } else if (syntaxstate === "ruby") {
     editorcanvasengine.setOption("mode", "ruby");
     document.getElementById("syntaxmodestatus").innerText = syntaxstate;
	 console.log("ruby-mode enabled");
   } else if (syntaxstate === "xquery") {
     editorcanvasengine.setOption("mode", "xquery");
     document.getElementById("syntaxmodestatus").innerText = syntaxstate;
	 console.log("xquery-mode enabled");
   } else {
	 console.log("syntax engine could not find user syntax settings. Text mode enabled by default.");
}}
// user linenumber_settings
function linenumbersettings(){
  console.log("Checking website localstorage for user line number settings");
  const linenumbertoogle = localStorage.getItem("linenumbers")
  let linenumberstatus1 = "on";
  let linenumberstatus2 = "off";
  if (linenumbertoogle === linenumberstatus1) {
     editorcanvasengine.setOption("lineNumbers", true);
     console.log("line numbers enabled");
   } else if (linenumbertoogle === linenumberstatus2) {
     editorcanvasengine.setOption("lineNumbers", false);
	 console.log("line-numbers disabled");
   } else {
	 console.log("line-numbers enabled");
}}
// user highlight_settings
function highlightlinesettings(){
  console.log("Checking website localstorage for user highlight active line settings");
  const highlighttoogle = localStorage.getItem("highlightline")
  let highlightstatus1 = "on";
  let highlightstatus2 = "off";
  if (highlighttoogle === highlightstatus1) {
     editorcanvasengine.setOption("styleActiveLine", true);
     console.log("highlight active line enabled");
   } else if (highlighttoogle === highlightstatus2) {
     editorcanvasengine.setOption("styleActiveLine", false);
	 console.log("highlight active line disabled");
   } else {
	 console.log("highlight active line enabled");
}}
userthemesettings();
syntaxsettings();
linenumbersettings();
highlightlinesettings();
