$(document).ready(function(){
    const req = new XMLHttpRequest();
    req.open("GET",'https://raw.githubusercontent.com/tropChaud/Categorized-Adversary-TTPs/main/docs/heatmaps/all_adversaries/Categorized_Adversary_TTPs_CVC.json',true);
    req.send();
    req.onload = function(){

        const data = JSON.parse(req.responseText);

        adversary_list = []
        for (var x = 0; x < data.length; x++) {
            adversary_list.push(
                {
                    'merged_name' : data[x].merged_name,
                    'mitre_attack_name' : data[x].mitre_attack_name
                }
            )
        };

        adversary_list.sort()
        adversary_list_string = ''
        for (var y = 0; y < adversary_list.length; y++) {
            adversary_list_string += '<br><input type="radio" class="adversary_selection" name="adversary_selection" style="margin-right:0.3rem" id="' + adversary_list[y].mitre_attack_name + '_radio" onclick="loadHeatmap_risk2()" value="' + adversary_list[y].mitre_attack_name + '"><label for="' + adversary_list[y].mitre_attack_name + '_radio">' + adversary_list[y].merged_name + '</label>'
        }

        if (adversary_list.length > 0) {
            document.getElementById("adversary_list").innerHTML = adversary_list_string
            document.getElementById("adversary_list").style.padding = '0px 10px 15px 10px'
            document.getElementById("adversary_list").style.backgroundColor = '#efc9d0'
        } else {
            document.getElementById("adversary_list").innerHTML = '<em>No adversaries match selected criteria</em>'
            document.getElementById("adversary_list").style.padding = '15px'
            document.getElementById("adversary_list").style.backgroundColor = '#e7e7e7'
        }

        document.getElementById("adversaryResults").innerHTML = 'Or, select a relevant adversary / grouping from the following ' + adversary_list.length + ' option(s):'
    }
})
