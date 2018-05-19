document.getElementById("editor-text").innerHTML = `{
    "titlecard": "Your title here", 
    "results": [ 
        { 
            "title": "Unload", 
            "des": "Unloads the current item", 
            "utility": true, 
            "func": true, 
            "run": "unload();" 
        }
    ]
}`

document.getElementById("force-font-picker").value = "monospace";

var editor;
var _editing = true;
var _config = false;

/*
function ace() {
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/json");
    editor.setOptions({
        foldStyle: "markbeginend"
    });

    var ele = document.getElementsByClassName("ace_content")
    for (var q = 0; q < ele.length; q++) {
        var _ele = ele.item(q);
        ele.style.fontFamily = "monospace";
    }
}
*/

function codemirror() {
    editor = CodeMirror.fromTextArea(document.getElementById("editor-text"), {
        mode: "javascript",
        theme: document.getElementById("theme-picker").value + " forcefont",
        lineNumbers: document.getElementById('lineNumbers').checked,
        tabSize: document.getElementById('tabSize').value,
        indentUnit: document.getElementById('indentUnit').value,
        keyMap: document.getElementById('binding-picker').value,
        cursorHeight: document.getElementById('cursorHeight').value,
    });

    editor.setSize(null, "92.5vh");
}

function changeTheme() {
    editor.setOption('theme', document.getElementById('theme-picker').value + " forcefont");
}

function saveSettings() {
    editor.toTextArea();
    codemirror();
}

function forcefont() {
    //div.CodeMirror-code div pre.CodeMirror-line span
    var ele = document.getElementsByClassName("cm-s-forcefont");

    for (var q = 0; q < ele.length; q++) {
        ele[q].style.fontFamily = document.getElementById("force-font-picker").value;
    }
}

codemirror();