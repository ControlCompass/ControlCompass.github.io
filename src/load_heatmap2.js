function loadHeatmap2() {

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
                    const diamond_graphic = document.getElementById("diamond_graphic")
                    adversary_meta.style.width = "33%"
                    div_JSONinput.style.width = "33%"
                    diamond_graphic.style.width = "33%"

                    const JSONinput = document.getElementById("JSONinput")
                    const JSONinput_header_get = document.getElementById("JSONinput_header")
                    const adversary_meta_header_get = document.getElementById("adversary_meta_header")
                    const diamond_graphic_header_get = document.getElementById("diamond_graphic_header")
                    const adversary_meta_para_get = document.getElementById("adversary_meta_para")
                    const mitre_url_get = document.getElementById("mitre_url")
                    const etda_url_get = document.getElementById("etda_url")

                    if (JSONinput) {
                        JSONinput.remove()
                    }
                    if (JSONinput_header_get) {
                        JSONinput_header_get.remove()
                    }
                    if (adversary_meta_header_get) {
                        adversary_meta_header_get.remove()
                    }
                    if (diamond_graphic_header_get) {
                        diamond_graphic_header_get.remove()
                    }
                    if (adversary_meta_para_get) {
                        adversary_meta_para_get.remove()
                    }
                    if (mitre_url_get) {
                        mitre_url_get.remove()
                    }
                    if (etda_url_get) {
                        etda_url_get.remove()
                    }

                    const adversary_meta_header = document.createElement("h4")
                    adversary_meta_header.id = "adversary_meta_header"
                    adversary_meta_header.innerHTML = "Adversary Profile"
                    adversary_meta.appendChild(adversary_meta_header)

                    const adversary_meta_para = document.createElement("p")
                    adversary_meta_para.id = "adversary_meta_para"
                    adversary_meta_para.innerHTML = data[y].etda_description
                    adversary_meta.appendChild(adversary_meta_para)

                    const mitre_url = document.createElement("p")
                    mitre_url.id = "mitre_url"
                    mitre_url.innerHTML = "ATT&CK Profile: " + data[y].mitre_url
                    adversary_meta.appendChild(mitre_url)

                    const etda_url = document.createElement("p")
                    etda_url.id = "etda_url"
                    etda_url.innerHTML = "ETDA Profile: " + data[y].etda_url
                    adversary_meta.appendChild(etda_url)

                    const diamond_graphic_header = document.createElement("h4")
                    diamond_graphic_header.id = "diamond_graphic_header"
                    diamond_graphic_header.innerHTML = "(Modified) Diamond Model (right-click to open larger in new tab)"
                    diamond_graphic_header.style.textAlign = "center"
                    diamond_graphic.appendChild(diamond_graphic_header)

                    const JSONinput_header = document.createElement("h4")
                    JSONinput_header.id = "JSONinput_header"
                    JSONinput_header.innerHTML = "ATT&CK Navigator Layer (TTPs)"
                    JSONinput_header.style.textAlign = "center"
                    div_JSONinput.appendChild(JSONinput_header)

                    const textarea = document.createElement("textarea")
                    textarea.className = "form-control"
                    textarea.id = "JSONinput"
                    textarea.rows = "13"
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
                    url_svg = url.replace("heatmaps/all_adversaries", "diamond_models")
                    url_svg = url_svg.replace(".json", ".svg")
                    const threat_intelligence_out = document.getElementById("threat_intelligence_out")
                    threat_intelligence_out.style.visibility = "visible"
                    const output_threat = document.getElementById("output_threat")
                    output_threat.innerHTML = data[y].merged_name
                    const div_diamond_get = document.getElementById("div_diamond")
                    const div_nav_get = document.getElementById("div_nav")

                    // Check for diamond model graphic - if yes, remove & create new one; if no, create one
                    if (div_diamond_get) {

                        div_diamond_get.remove()

                        const diamond = document.createElement("img")
                        diamond.id ="div_diamond"
                        diamond.src = url_svg
                        diamond_graphic.appendChild(diamond)

                    } else {

                        const diamond = document.createElement("img")
                        diamond.id ="div_diamond"
                        diamond.src = url_svg
                        diamond_graphic.appendChild(diamond)

                    }

                    if (div_nav_get) {

                        div_nav_get.remove()

                        const div_nav = document.createElement("div")
                        div_nav.id = "div_nav"
                        div_nav.className = "wrap"

                        const iframe = document.createElement("iframe");
                        iframe.id = "nav_frame"
                        iframe.title = data[y].mitre_attack_name
                        iframe.src = "https://mitre-attack.github.io/attack-navigator/#leave_site_dialog=false&layerURL=" + url_nav
                        iframe.style = "border:none;"
                        iframe.width = "100%"
                        iframe.height = "750px"
                        div_nav.appendChild(iframe)
                        threat_intelligence_out.appendChild(div_nav)

                    } else {

                        const div_nav = document.createElement("div")
                        div_nav.id = "div_nav"
                        div_nav.className = "wrap"

                        const iframe = document.createElement("iframe");
                        iframe.id = "nav_frame"
                        iframe.title = data[y].mitre_attack_name
                        iframe.src = "https://mitre-attack.github.io/attack-navigator/#leave_site_dialog=false&layerURL=" + url_nav
                        iframe.style = "border:none;"
                        iframe.width = "100%"
                        iframe.height = "750px"
                        div_nav.appendChild(iframe)
                        threat_intelligence_out.appendChild(div_nav)

                    }

                }

            }

        }

        window.location.href = '#threat_intelligence_out'

    }

  }
