//variable declaration
var totalFakes = 0;
if (true) {var approveSVG = `<span title="Verified"><svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#fff" d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" />
</svg></span>`;
var anvilSVG = `<span title="Clientside Utility"><svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#fff" d="M9,5V10C13.03,12.47 8.44,14.97 6,16V19H21V16C14.59,13.27 17.47,9 22,8V5H9M2,6C2.81,8.13 4.42,9.5 7,10V6H2Z" />
</svg></span>`;
var hiddenSVG = `<span title="Private"><svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#fff" d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z" />
</svg></span>`;
var domainSVG = `<span title="Undetermined"><svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#fff" d="M18,15H16V17H18M18,11H16V13H18M20,19H12V17H14V15H12V13H14V11H12V9H20M10,7H8V5H10M10,11H8V9H10M10,15H8V13H10M10,19H8V17H10M6,7H4V5H6M6,11H4V9H6M6,15H4V13H6M6,19H4V17H6M12,7V3H2V21H22V7H12Z" />
</svg></span>`;
var packageSVG = `<span title="Package"><svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#fff" d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L5,8.09V15.91L12,19.85L19,15.91V8.09L12,4.15M12,6.23L16.9,9.06L12,11.89L7.1,9.06L12,6.23M17,14.89L13,17.2V13.62L17,11.31V14.89M11,17.2L7,14.89V11.31L11,13.62V17.2Z" />
</svg></span>`;
var functionSVG = `<span title="Function"><svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#fff" d="M19,4C20.11,4 21,4.9 21,6V18A2,2 0 0,1 19,20H5C3.89,20 3,19.1 3,18V6A2,2 0 0,1 5,4H19M19,18V8H5V18H19Z" />
</svg></span>`;
var proSVG = `<span title="Professional"><svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#fff" d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M5,9V15H6.25V13H7A2,2 0 0,0 9,11A2,2 0 0,0 7,9H5M6.25,12V10H6.75A1,1 0 0,1 7.75,11A1,1 0 0,1 6.75,12H6.25M9.75,9V15H11V13H11.75L12.41,15H13.73L12.94,12.61C13.43,12.25 13.75,11.66 13.75,11A2,2 0 0,0 11.75,9H9.75M11,12V10H11.5A1,1 0 0,1 12.5,11A1,1 0 0,1 11.5,12H11M17,9C15.62,9 14.5,10.34 14.5,12C14.5,13.66 15.62,15 17,15C18.38,15 19.5,13.66 19.5,12C19.5,10.34 18.38,9 17,9M17,10.25C17.76,10.25 18.38,11.03 18.38,12C18.38,12.97 17.76,13.75 17,13.75C16.24,13.75 15.63,12.97 15.63,12C15.63,11.03 16.24,10.25 17,10.25Z" />
</svg></span>`;
var teachSVG = `<span title="Learning Resource"><svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#fff" d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
</svg></span>`;
var chiliSVG = {
  mild: `<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#fff" d="M13.75,9L14.95,8.24C15.58,8.58 16,9.24 16,10V21.75C16,21.75 8,20 8,11V10C8,9.27 8.39,8.63 8.97,8.28L10.43,9L12,8L13.75,9M10,2C11.53,2 12.8,3.15 13,4.64C14,4.93 14.81,5.67 15.22,6.63L13.75,7.5L12,6.5L10.43,7.5L8.76,6.67C9.15,5.72 9.95,5 10.94,4.66C10.8,4.28 10.43,4 10,4V2Z" /></svg>`,
  medium: `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#fff" d="M15.75,9L16.95,8.24C17.58,8.58 18,9.24 18,10V21.75C18,21.75 10,20 10,11V10C10,9.27 10.39,8.63 10.97,8.28L12.43,9L14,8L15.75,9M12,2C13.53,2 14.8,3.15 15,4.64C16,4.93 16.81,5.67 17.22,6.63L15.75,7.5L14,6.5L12.43,7.5L10.76,6.67C11.15,5.72 11.95,5 12.94,4.66C12.8,4.28 12.43,4 12,4V2M8,10C8,18 11.63,19.84 14,21.75C14,21.75 6,20 6,11V10C6,9.27 6.39,8.63 6.97,8.28L8.3,8.94C8.11,9.25 8,9.61 8,10M8.43,7.5L6.76,6.67C7.15,5.72 7.95,5 8.94,4.66C8.8,4.28 8.43,4 8,4V2C8.77,2 9.47,2.29 10,2.76V4C10.43,4 10.8,4.28 10.94,4.66C9.95,5 9.15,5.72 8.43,7.5Z" />
</svg>`,
  hot: `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#fff" d="M17.75,9L18.95,8.24C19.58,8.58 20,9.24 20,10V21.75C20,21.75 12,20 12,11V10C12,9.27 12.39,8.63 12.97,8.28L14.43,9L16,8L17.75,9M14,2C15.53,2 16.8,3.15 17,4.64C18,4.93 18.81,5.67 19.22,6.63L17.75,7.5L16,6.5L14.43,7.5L12.76,6.67C13.15,5.72 13.95,5 14.94,4.66C14.8,4.28 14.43,4 14,4V2M10,10C10,18 13.63,19.84 16,21.75C16,21.75 8,20 8,11V10C8,9.27 8.39,8.63 8.97,8.28L10.3,8.94C10.11,9.25 10,9.61 10,10M10.43,7.5L8.76,6.67C9.15,5.72 9.95,5 10.94,4.66C10.8,4.28 10.43,4 10,4V2C10.77,2 11.47,2.29 12,2.76V4C12.43,4 12.8,4.28 12.94,4.66C11.95,5 11.15,5.72 10.43,7.5M6,10C6,18 9.63,19.84 12,21.75C12,21.75 4,20 4,11V10C4,9.27 4.39,8.63 4.97,8.28L6.3,8.94C6.11,9.25 6,9.61 6,10M6.43,7.5L4.76,6.67C5.15,5.72 5.95,5 6.94,4.66C6.8,4.28 6.43,4 6,4V2C6.77,2 7.47,2.29 8,2.76V4C8.43,4 8.8,4.28 8.94,4.66C7.95,5 7.15,5.72 6.43,7.5Z" />
</svg>`
}
}

//functions
function change(link) {
  document.getElementById("workspace").innerHTML = "<iframe src=\"" + link + "\"></iframe>";
}
function unload() {
  document.getElementById("workspace").innerHTML = "<span style=\"opacity: 50%\">(No item selected)</span>";
}
function generateFakes(amt) {
  for (q = 0; q < amt; q++) {
    totalFakes++;
    document.getElementById("list").innerHTML = document.getElementById("list").innerHTML + `<div class="item" onclick="unload();">
      <span class="title">Fake Item ` + totalFakes + `</span>
      <br>
      Unloads the current item.
    </div>`;
  }
}

//the goooooood stuff
function loadDone(url) {
  //loadSVG();
  document.getElementById("loadingscreen").style.display = "inital";
  
  //read from json
  var _list = document.getElementById("list");
  _list.innerHTML = `<div style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100vh;">Loading your repo...</div>`;
  //var _json;
  var _res;
  
  fetch(url, {
      method: 'get'
    }).then((resp) => resp.json())
    .then(function(data) {
      var __newhtml = `<div class="titlecard"><div id="titletext" style="` + data.titlestyle + `">` + data.titlecard + `</div></div>`;
        
      for (q = 0; q < data.results.length; q++) {
        _newhtml += `<div class="item" onclick="` + data.results[q].run + `"><span class="title">` + data.results[q].title + "<div class=\"badges\">";
        
        if (data.results[q].func === true) {
          _newhtml += functionSVG; 
        }
        
        if (data.results[q].approve === true) {
          _newhtml += approveSVG; 
        }
        
        if (data.results[q].utility === true) {
          _newhtml += anvilSVG; 
        }
        
        if (data.results[q].secure === true) {
          _newhtml += hiddenSVG; 
        }
        
        if (data.results[q].domain === true) {
          _newhtml += domainSVG; 
        }
        
        if (data.results[q].group === true) {
          _newhtml += packageSVG; 
        }
        
        if (data.results[q].learn === true) {
          _newhtml += teachSVG; 
        }
        
        if (data.results[q].pro === true) {
          _newhtml += proSVG; 
        }
        
         _newhtml += "</div></span><br><span style=\"font-weight: 400;\">" + data.results[q].des + `</span></div>`;
      }
       
      _newhtml += `<div class="item" onclick="loadDone(prompt('new url'))"><span class="title">Load another Repository<div class="badges">` + functionSVG + `</div></span></div>`;
      _list.innerHTML = _newhtml;
        
    }).catch(function(err) {
      var _newhtml = `<div class="titlecard"><div id="titletext">Error Encountered</div></div>`;
      _newhtml += `<div class="item"><span class="title">` + err.name + `</span><br>` + err.message + `</div>`;
      _newhtml += `<div class="item" onclick="loadDone(prompt('new url'))"><span class="title">Load another Repository</span></div>`;
      _list.innerHTML = _newhtml;
    });

  //loading done!
  //but delay a bit to have message readable
  setTimeout(function() {
    document.getElementById("loadingscreen").innerHTML = "Loading your repo...";
    document.getElementById("loadingscreen").style.display = "none";
  }, 2000);
}
