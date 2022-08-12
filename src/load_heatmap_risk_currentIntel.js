  $(document).ready(function(){
	var arrayReturn = [];
	$.ajax({
		url: "https://raw.githubusercontent.com/tropChaud/Cyber-Adversary-Heatmaps/main/Current%20Intelligence%20Reports/current_intel_index.json",
		async: true,
		dataType: 'json',
		success: function (data) {
			for (var i = 0, len = data.length; i < len; i++) {
				arrayReturn.push({'value' : data[i].title,
				                  'url' : data[i].url
							  	  });
			};
			loadSuggestions(arrayReturn);
			console.log(arrayReturn);
		}
	});
	function loadSuggestions(options) {
		$('#current_intelligence').autocomplete({
		    minChars: 0,
			lookup: options,
			onSelect: function (suggestion) {

			    const req = new XMLHttpRequest();
                req.open("GET",suggestion.url,true);
                req.send();
                req.onload = function(){

                    $("input[id='Skip']:checked").prop("checked", false);

                    const adversary_meta = document.getElementById("adversary_meta")
                    const div_JSONinput = document.getElementById("div_JSONinput")

                    const JSONinput = document.getElementById("JSONinput")
                    const JSONinput_header_get = document.getElementById("JSONinput_header")
                    const adversary_meta_header_get = document.getElementById("adversary_meta_header")
                    const adversary_meta_para_get = document.getElementById("adversary_meta_para")

                    if (JSONinput) {
                        JSONinput.remove()
                    }
                    if (JSONinput_header_get) {
                        JSONinput_header_get.remove()
                    }
                    if (adversary_meta_header_get) {
                        adversary_meta_header_get.remove()
                    }
                    if (adversary_meta_para_get) {
                        adversary_meta_para_get.remove()
                    }

                    const adversary_meta_header = document.createElement("h4")
                    adversary_meta.appendChild(adversary_meta_header)

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

                    const threat_intelligence_out = document.getElementById("threat_intelligence_out")
                    threat_intelligence_out.style.visibility = "visible"
                    const output_threat = document.getElementById("output_threat")
                    output_threat.innerHTML = suggestion.value

                    window.location.href = '#threat_intelligence_out'
                };
			}
		});
	}
  })
