$(document).ready(function(){
    const req = new XMLHttpRequest();
    req.open("GET",'https://raw.githubusercontent.com/ControlCompass/ControlCompass.github.io/main/docs/TrickBot.json',true);
    req.send();
    req.onload = function(){

        document.getElementById("JSONinput").textContent = req.responseText;
    }
})
