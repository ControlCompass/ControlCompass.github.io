function loadHeatmap_risk2() {

    const req2 = new XMLHttpRequest();
    req2.open("GET",'https://raw.githubusercontent.com/tropChaud/Categorized-Adversary-TTPs/main/docs/heatmaps/all_adversaries/Categorized_Adversary_TTPs_CVC.json',true);
    req2.send();
    req2.onload = function(){

        const data = JSON.parse(req2.responseText);

        const category_selection = document.querySelectorAll(".category_selection");
        for (var a = 0; a < category_selection.length; a++) {
            if (category_selection[a].checked) {
                category_selection[a].checked = false
            }
        }

        const selections = document.querySelectorAll(".adversary_selection");
        selections_array = []
        adversary_list = []
        for (var i = 0; i < selections.length; i++) {
            if (selections[i].checked) {
                selections_array.push(selections[i].value)
            }
        }

        for (var x = 0; x < selections_array.length; x++) {

            for (var y = 0; y < data.length; y++) {

                if (selections_array[x] == data[y].mitre_attack_name) {

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

                    url = data[y].heatmap_url

                    const req = new XMLHttpRequest();
                    req.open("GET",url,true);
                    req.send();
                    req.onload = function(){
                        document.getElementById("JSONinput").textContent = req.responseText;
                    }

                    url_nav = url
                    url_nav = url_nav.replace(":", "%3A")
                    url_nav = url_nav.replace("/", "%2F")
                    const threat_intelligence_out = document.getElementById("threat_intelligence_out")
                    threat_intelligence_out.style.visibility = "visible"
                    const output_threat = document.getElementById("output_threat")
                    output_threat.innerHTML = data[y].merged_name

                }

            }

        }

        window.location.href = '#threat_intelligence_out'
        document.getElementById("Skip").checked = false;
    }

  }
