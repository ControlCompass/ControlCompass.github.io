function skipCTI() {

	const req = new XMLHttpRequest();
    req.open("GET",'https://gist.githubusercontent.com/ControlCompass/da98f63af81c831d15cb794ab8646038/raw/5cd4465769dd5a2b316261f60d2bae26c6cc7bec/All_v11_Techniques.json',true);
    req.send();
    req.onload = function(){
		const div_JSONinput = document.getElementById("div_JSONinput")
		const JSONinput = document.getElementById("JSONinput")
		const JSONinput_header_get = document.getElementById("JSONinput_header")

		if (JSONinput) {
			JSONinput.remove()
		}
		if (JSONinput_header_get) {
			JSONinput_header_get.remove()
		}

		const JSONinput_header = document.createElement("h4")
		JSONinput_header.id = "JSONinput_header"
		JSONinput_header.innerHTML = "ATT&CK Navigator Layer (TTPs)"
		JSONinput_header.style.textAlign = "center"
		div_JSONinput.appendChild(JSONinput_header)

		const textarea = document.createElement("textarea")
		textarea.className = "form-control"
		textarea.id = "JSONinput"
		textarea.rows = "10"
		div_JSONinput.appendChild(textarea)

		const JSONinput_final = document.getElementById("JSONinput")
		JSONinput_final.textContent = req.responseText;

		window.location.href = 'https://controlcompass.github.io/risk#controls'
	};
};
$('#Skip').on('click', skipCTI)