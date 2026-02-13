// DreamEditor hosted by blountmedia.net
// document data
var currentdocument = "";
var documentsize = "";
console.log("dreameditor.js");
// filemenu_controller
function menucontroller() {
document.getElementById("dropdown2").classList.toggle("show");
}
// settingsmenu_controller
window.onclick = function(event) {
  if (!event.target.matches('.settingsbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-options2");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
// load_file
function loadfile(){
  console.log("dreameditor.js:/>_ loading selected file.");
  var fileToLoad = document.getElementById("localfile").files[0];
  var fileReader = new FileReader();
  fileReader.onload = function(fileLoadedEvent){
      var textFromFileLoaded = fileLoadedEvent.target.result;
      editorcanvasengine.setValue(textFromFileLoaded);
  };
  fileReader.readAsText(fileToLoad, "UTF-8");
  currentdocument = document.getElementById("localfile").files[0].name;
  var documentsize = document.getElementById("localfile").files[0].size;
  console.log(currentdocument);
  console.log("File size: " + documentsize);
  console.log("dreameditor.js:/>_ file loaded");
}
// save_file
function savefile(){
  var newfile = "";
  console.log(currentdocument);
  if (currentdocument === newfile) {
     let newname = prompt("New File:", "newdocument.txt"); 
	  if (newname === null){
     return;
     }
     var textdata = editorcanvasengine.getValue();
     textdata = textdata.replace(/\n/g, "\r\n");
     var blob = new Blob([textdata], { type: "text/plain"});
     var anchor = document.createElement("a");
     anchor.download = newname;
     anchor.href = window.URL.createObjectURL(blob);
     anchor.target ="_blank";
     anchor.style.display = "none";
     document.body.appendChild(anchor);
     anchor.click();
     document.body.removeChild(anchor);
     currentdocument = newname;
   } else {
     let newname = prompt("New File:", currentdocument); 
	  if (newname === null){
     return;
     }
	  var textdata = editorcanvasengine.getValue();
      textdata = textdata.replace(/\n/g, "\r\n");
      var blob = new Blob([textdata], { type: "text/plain"});
      var anchor = document.createElement("a");
      anchor.download = newname;
      anchor.href = window.URL.createObjectURL(blob);
      anchor.target ="_blank";
      anchor.style.display = "none";
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      currentdocument = newname;
}}
// clear_workspace
function cleardata() {
  if (confirm("Clear Workspace? Unsaved data will be lost.")) {
    editorcanvasengine.setValue("");
    var resetlocalfile = ""
    document.getElementById("localfile").value = resetlocalfile;
    currentdocument = "";
    documentsize = "";
    console.log("dreameditor.js:/>_ workspace cleared.");
  } else {
    console.log("dreameditor.js:/>_ clear workspace operation stopped.");
}}
// restore_settings
function clearuserdata() {
  if (confirm("Reset all settings? This will also clear current workspace!")) {
    localStorage.clear();
    console.log("dreameditor.js:/>_ all settings reset.");
    location.reload();
  } else {
    console.log("settings restore canceled");
}}
// about_prompt
function aboutde() {
  alert("DreamEditor open source version 6.0.2 Created & hosted by blountmedia.net | For patch notes or more information visit dreameditor.org");
}
// theme_controller
function themecontrollerdarkon() {
  document.getElementById("themesettings").setAttribute("href", "dreameditorengine/theme2.css");
  localStorage.setItem("displaymode", "darkmode");
  console.log("dark mode on.");
}
function themecontrollerdarkoff() {
  document.getElementById("themesettings").setAttribute("href", "dreameditorengine/theme1.css");
  localStorage.setItem("displaymode", "defaultstyle");
  console.log("dark mode off.");
}
// syntax_controller
function syntaxcontrollertext() {
  editorcanvasengine.setOption("mode", "");
  localStorage.setItem("syntaxmode", "text");
  let syntaxengine = localStorage.getItem("syntaxmode")
  document.getElementById("syntaxmodestatus").innerText = syntaxengine;
  console.log("syntax mode changed to text.");
}
function syntaxcontrollerhtml() {
  editorcanvasengine.setOption("mode", "xml");
  localStorage.setItem("syntaxmode", "html");
  let syntaxengine = localStorage.getItem("syntaxmode")
  document.getElementById("syntaxmodestatus").innerText = syntaxengine;
  console.log("syntax mode changed to html.");
}
function syntaxcontrollerjavascript() {
  editorcanvasengine.setOption("mode", "javascript");
  localStorage.setItem("syntaxmode", "javascript");
  let syntaxengine = localStorage.getItem("syntaxmode")
  document.getElementById("syntaxmodestatus").innerText  = syntaxengine;
  console.log("syntax mode changed to javascript.");
}
function syntaxcontrollercss() {
  editorcanvasengine.setOption("mode", "css");
  localStorage.setItem("syntaxmode", "css");
  let syntaxengine = localStorage.getItem("syntaxmode")
  document.getElementById("syntaxmodestatus").innerText  = syntaxengine;
  console.log("syntax mode changed to css.");
}
function syntaxcontrollerphp() {
  editorcanvasengine.setOption("mode", "php");
  localStorage.setItem("syntaxmode", "php");
  let syntaxengine = localStorage.getItem("syntaxmode")
  document.getElementById("syntaxmodestatus").innerText = syntaxengine;
  console.log("syntax mode changed to php.");
}
function syntaxcontrollerpython() {
  editorcanvasengine.setOption("mode", "python");
  localStorage.setItem("syntaxmode", "python");
  let syntaxengine = localStorage.getItem("syntaxmode")
  document.getElementById("syntaxmodestatus").innerText = syntaxengine;
  console.log("syntax mode changed to python.");
}
function syntaxcontrollerpearl() {
  editorcanvasengine.setOption("mode", "pearl");
  localStorage.setItem("syntaxmode", "pearl");
  let syntaxengine = localStorage.getItem("syntaxmode")
  document.getElementById("syntaxmodestatus").innerText = syntaxengine;
  console.log("syntax mode changed to pearl.");
}
function syntaxcontrollerrust() {
  editorcanvasengine.setOption("mode", "rust");
  localStorage.setItem("syntaxmode", "rust");
  let syntaxengine = localStorage.getItem("syntaxmode")
  document.getElementById("syntaxmodestatus").innerText = syntaxengine;
  console.log("syntax mode changed to rust.");
}
function syntaxcontrollerc() {
  editorcanvasengine.setOption("mode", "text/x-csrc");
  localStorage.setItem("syntaxmode", "c");
  let syntaxengine = localStorage.getItem("syntaxmode")
  document.getElementById("syntaxmodestatus").innerText = syntaxengine;
  console.log("syntax mode changed to c.");
}
function syntaxcontrollershell() {
  editorcanvasengine.setOption("mode", "shell");
  localStorage.setItem("syntaxmode", "shell");
  let syntaxengine = localStorage.getItem("syntaxmode")
  document.getElementById("syntaxmodestatus").innerText = syntaxengine;
  console.log("syntax mode changed to shell.");
}
function syntaxcontrollerpowershell() {
  editorcanvasengine.setOption("mode", "powershell");
  localStorage.setItem("syntaxmode", "powershell");
  let syntaxengine = localStorage.getItem("syntaxmode")
  document.getElementById("syntaxmodestatus").innerText = syntaxengine;
  console.log("syntax mode changed to powershell.");
}
function syntaxcontrollervbnet() {
  editorcanvasengine.setOption("mode", "vb");
  localStorage.setItem("syntaxmode", "vbnet");
  let syntaxengine = localStorage.getItem("syntaxmode")
  document.getElementById("syntaxmodestatus").innerText = syntaxengine;
  console.log("syntax mode changed to vbnet.");
}
function syntaxcontrollervbscript() {
  editorcanvasengine.setOption("mode", "vbscript");
  localStorage.setItem("syntaxmode", "vbscript");
  let syntaxengine = localStorage.getItem("syntaxmode")
  document.getElementById("syntaxmodestatus").innerText = syntaxengine;
  console.log("syntax mode changed to vbscript.");
}
function syntaxcontrollerswift() {
  editorcanvasengine.setOption("mode", "swift");
  localStorage.setItem("syntaxmode", "swift");
  let syntaxengine = localStorage.getItem("syntaxmode")
  document.getElementById("syntaxmodestatus").innerText = syntaxengine;
  console.log("syntax mode changed to swift.");
}
function syntaxcontrollergo() {
  editorcanvasengine.setOption("mode", "go");
  localStorage.setItem("syntaxmode", "go");
  let syntaxengine = localStorage.getItem("syntaxmode")
  document.getElementById("syntaxmodestatus").innerText = syntaxengine;
  console.log("syntax mode changed to go.");
}
function syntaxcontrollerjava() {
  editorcanvasengine.setOption("mode", "text/x-java");
  localStorage.setItem("syntaxmode", "java");
  let syntaxengine = localStorage.getItem("syntaxmode")
  document.getElementById("syntaxmodestatus").innerText = syntaxengine;
  console.log("syntax mode changed to java.");
}
function syntaxcontrollersql() {
  editorcanvasengine.setOption("mode", "sql");
  localStorage.setItem("syntaxmode", "sql");
  let syntaxengine = localStorage.getItem("syntaxmode")
  document.getElementById("syntaxmodestatus").innerText = syntaxengine;
  console.log("syntax mode changed to sql.");
}
function syntaxcontrollercoffescript() {
  editorcanvasengine.setOption("mode", "coffescript");
  localStorage.setItem("syntaxmode", "coffescript");
  let syntaxengine = localStorage.getItem("syntaxmode")
  document.getElementById("syntaxmodestatus").innerText = syntaxengine;
  console.log("syntax mode changed to coffescript.");
}
function syntaxcontrollerlivescript() {
  editorcanvasengine.setOption("mode", "livescript");
  localStorage.setItem("syntaxmode", "livescript");
  let syntaxengine = localStorage.getItem("syntaxmode")
  document.getElementById("syntaxmodestatus").innerText = syntaxengine;
  console.log("syntax mode changed to livescript.");
}
function syntaxcontrollerlua() {
  editorcanvasengine.setOption("mode", "lua");
  localStorage.setItem("syntaxmode", "lua");
  let syntaxengine = localStorage.getItem("syntaxmode")
  document.getElementById("syntaxmodestatus").innerText = syntaxengine;
  console.log("syntax mode changed to lua.");
}
function syntaxcontrollercplusplus() {
  editorcanvasengine.setOption("mode", "text/x-c++src");
  localStorage.setItem("syntaxmode", "c++");
  let syntaxengine = localStorage.getItem("syntaxmode")
  document.getElementById("syntaxmodestatus").innerText = syntaxengine;
  console.log("syntax mode changed to c++.");
}
function syntaxcontrollercsharp() {
  editorcanvasengine.setOption("mode", "text/x-csharp");
  localStorage.setItem("syntaxmode", "c#");
  let syntaxengine = localStorage.getItem("syntaxmode")
  document.getElementById("syntaxmodestatus").innerText = syntaxengine;
  console.log("syntax mode changed to c#.");
}
function syntaxcontrollerobjectivec() {
  editorcanvasengine.setOption("mode", "text/x-objectivec");
  localStorage.setItem("syntaxmode", "objective-c");
  let syntaxengine = localStorage.getItem("syntaxmode")
  document.getElementById("syntaxmodestatus").innerText = syntaxengine;
  console.log("syntax mode changed to objective-c.");
}
function syntaxcontrollerxquery() {
  editorcanvasengine.setOption("mode", "xquery");
  localStorage.setItem("syntaxmode", "xquery");
  let syntaxengine = localStorage.getItem("syntaxmode")
  document.getElementById("syntaxmodestatus").innerText = syntaxengine;
  console.log("syntax mode changed to xquery.");
}
function syntaxcontrollerruby() {
  editorcanvasengine.setOption("mode", "ruby");
  localStorage.setItem("syntaxmode", "ruby");
  let syntaxengine = localStorage.getItem("syntaxmode")
  document.getElementById("syntaxmodestatus").innerText = syntaxengine;
  console.log("syntax mode changed to ruby.");
}
// Settings/options
function highlightlineon() {
  editorcanvasengine.setOption("styleActiveLine", true);
  localStorage.setItem("highlightline", "on");
  console.log("highlight active line turned on.");
}
function highlightlineoff() {
  editorcanvasengine.setOption("styleActiveLine", false);
  localStorage.setItem("highlightline", "off");
  console.log("highlight active line turned off.");
}
function checkbugNotification(){
  console.log("dreameditor.js:/>_ Checking website localstorage to see if user has been alerted about current bugs.");
  const Notificationstatus = localStorage.getItem("bugalert");
  let notifyengine = "completed";
  if (notifyengine === Notificationstatus) {
     console.log("dreameditor.js detected that the most recent bug notification was already sent.");
   } else {
	 viewbugalert()
}}
function viewbugalert() { 
  alert("Line numbers are currently unstable on Android devices using on screen keyboard. Backspace key will sometimes fail to remove emty lines.");
  localStorage.setItem("bugalert", "completed");
  console.log("User was alerted most recent bug report.");
}
function linenumberson() { 
  editorcanvasengine.setOption("lineNumbers", true);
  localStorage.setItem("linenumbers", "on");
  console.log("line numbers turned on.");
  checkbugNotification();
}
function linenumbersoff() {
  editorcanvasengine.setOption("lineNumbers", false);
  localStorage.setItem("linenumbers", "off");
  console.log("line numbers turned off.");
}
// workspace
var editorcanvasengine = CodeMirror(document.getElementById("editorcanvas"), {
	mode: "",
	theme: "nord",
	lineNumbers: false,
	lineWrapping: true,
        viewportMargin: Infinity,
	spellcheck: false,
	autocorrect: false,
	autocapitalize: false,
	undoDepth: 256,
	styleActiveLine: { nonEmpty: true },
	indentUnit: 0
});
// window controller
window.onbeforeunload = function() {
    console.log("Are you sure you want to close dreameditor.js?");
    return"";
}
// event_services
var darkmodeon = document.getElementById( "darkmodeonb");
darkmodeon.addEventListener("click", themecontrollerdarkon);

var darkmodeoff = document.getElementById( "darkmodeoffb");
darkmodeoff.addEventListener("click", themecontrollerdarkoff);

var clearcmd = document.getElementById( "clearb" );
clearcmd.addEventListener("click", cleardata);

var highlightonmode = document.getElementById( "highlightonb");
highlightonmode.addEventListener("click", highlightlineon);

var highlightoffmode = document.getElementById( "highlightoffb");
highlightoffmode.addEventListener("click", highlightlineoff);

var linenumbersoffmode = document.getElementById( "linenumbersoffb");
linenumbersoffmode.addEventListener("click", linenumbersoff);

var linenumbersonmode = document.getElementById( "linenumbersonb" );
linenumbersonmode.addEventListener("click", linenumberson);

var pythonmode = document.getElementById( "pythonb");
pythonmode.addEventListener("click", syntaxcontrollerpython);

var cssmode = document.getElementById( "cssb");
cssmode.addEventListener("click", syntaxcontrollercss);

var htmlmode = document.getElementById( "htmlb" );
htmlmode.addEventListener("click", syntaxcontrollerhtml);

var javascriptmode = document.getElementById( "javascriptb" );
javascriptmode.addEventListener("click", syntaxcontrollerjavascript);

var pearlmode = document.getElementById( "pearlb" );
pearlmode.addEventListener("click", syntaxcontrollerpearl);

var rustmode = document.getElementById( "rustb" );
rustmode.addEventListener("click", syntaxcontrollerrust);

var cmode = document.getElementById( "cb" );
cmode.addEventListener("click", syntaxcontrollerc);

var shellmode = document.getElementById( "shellb" );
shellmode.addEventListener("click", syntaxcontrollershell);

var powershellmode = document.getElementById( "powershellb" );
powershellmode.addEventListener("click", syntaxcontrollerpowershell);

var vbnetmode = document.getElementById( "vbnetb" );
vbnetmode.addEventListener("click", syntaxcontrollervbnet);

var vbscriptmode = document.getElementById( "vbscriptb" );
vbscriptmode.addEventListener("click", syntaxcontrollervbscript);

var swiftmode = document.getElementById( "swiftb" );
swiftmode.addEventListener("click", syntaxcontrollerswift);

var gomode = document.getElementById( "gob" );
gomode.addEventListener("click", syntaxcontrollergo);

var textmode = document.getElementById( "textb" );
textmode.addEventListener("click", syntaxcontrollertext);

var settingsctrl = document.getElementById( "settingsb" );
settingsctrl.addEventListener("click", menucontroller);

var savecmd = document.getElementById( "saveb" );
savecmd.addEventListener("click", savefile);

var aboutcmd = document.getElementById( "aboutb" );
aboutcmd.addEventListener("click", aboutde);

var loadcmd = document.getElementById( "localfile" );
loadcmd.addEventListener("change", loadfile);

var resetcmd = document.getElementById( "resetb" );
resetcmd.addEventListener("click", clearuserdata);

var sqlmode = document.getElementById( "sqlb" );
sqlmode.addEventListener("click", syntaxcontrollersql);

var javamode = document.getElementById( "javab" );
javamode.addEventListener("click", syntaxcontrollerjava);

var coffescriptmode = document.getElementById( "coffescriptb" );
coffescriptmode.addEventListener("click", syntaxcontrollercoffescript);

var livescriptmode = document.getElementById( "livescriptb" );
livescriptmode.addEventListener("click", syntaxcontrollerlivescript);

var luamode = document.getElementById( "luab" );
luamode.addEventListener("click", syntaxcontrollerlua);

var cplusplusmode = document.getElementById( "cplusplusb" );
cplusplusmode.addEventListener("click", syntaxcontrollercplusplus);

var csharpmode = document.getElementById( "csharpb" );
csharpmode.addEventListener("click", syntaxcontrollercsharp);

var objectivecmode = document.getElementById( "objectivecb" );
objectivecmode.addEventListener("click", syntaxcontrollerobjectivec);

var rubymode = document.getElementById( "rubyb" );
rubymode.addEventListener("click", syntaxcontrollerruby);

var xquerymode = document.getElementById( "xqueryb" );
xquerymode.addEventListener("click", syntaxcontrollerxquery);

