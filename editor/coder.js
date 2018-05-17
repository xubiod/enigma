document.getElementById("editor").innerHTML = `{
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

var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/json");
editor.on("change", function() {
    loaded();
});