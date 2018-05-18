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

var editor;
var _editing = true;

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

function codemirror() {
    editor = CodeMirror.fromTextArea(document.getElementById("editor-text"), {
        lineNumbers: true,
        mode: "javascript",
        theme: document.getElementById("theme-picker").value
    });

    editor.setSize(null, "92.5vh");
}

function changeTheme() {
    editor.setOption('theme', document.getElementById('theme-picker').value);
}

function changeKeyBinds() {
    editor.setOption('keyMap', document.getElementById('binding-picker').value);
}

codemirror();