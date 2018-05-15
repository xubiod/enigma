var totalFakes = 0;
var _dwnld = `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#fff" d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
</svg>`;

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    throw "Query var not found";
}


function generateFakes(amt) {
  for (q = 0; q < amt; q++) {
    totalFakes++;
    document.getElementById("list").innerHTML = document.getElementById("list").innerHTML + `<div class="item">
      Fake Item ` + totalFakes + `
    </div>`;
  }
}

function load() {
  //handle query
  var url = getQueryVariable('src');
  
  //read from json
  var _list = document.getElementById("list");
  _list.innerHTML = "";
  //var _json;
  var _res;
  
  fetch(url, {
      method: 'get'
    }).then((resp) => resp.json())
    .then(function(data) {
    
    var _newhtml = "";
    
      for (q = 0; q < data.results.length; q++) {
        if (data.results[q].run === true) { _newhtml += `<div class="item"><a href="` + data.results[q].goto + `" target="_blank">` + data.results[q].name + " (" + data.results[q].file + `)</a><span title="Download" style="position: absolute; right: 4px;">` + _dwnld + `</span></div>`;}
        else {_newhtml += `<div class="item" onclick="` + data.results[q].run + `">` + data.results[q].name + " (" + data.results[q].file + `)</div>`;}
      }
       
      _list.innerHTML = _newhtml;
        
    }).catch(function(err) {
      var _newhtml = `<div class="item">Invaild item: ` + err.name + ` => ` + err.message + `</div>`;
      _list.innerHTML = _newhtml;
    });

  //loading done!
  var kill = document.getElementById("loadingscreen");
  kill.parentNode.removeChild(kill);
}
