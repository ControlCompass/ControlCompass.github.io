function selectionReview() {

    const selections2 = document.querySelectorAll(".adversary_select");
    adversary_list2 = []
    for (var i = 0; i < selections2.length; i++) {
        if (selections2[i].checked) {
            adversary_list2.push(selections2[i].id)
        }
    }

//        if (! adversary_list2.includes(data2[x].heatmap_url)) {
//            adversary_list2.push(data2[x].mitre_attack_name)
//        }

    adversary_list2.sort()
    adversary_list2_string = ''
    for (var y = 0; y < adversary_list2.length; y++) {
        adversary_list2_string += '<br><input type="radio" class="category_selection" name="category_selection" style="margin-right:0.3rem" id="' + adversary_list2[y] + '_radio" onclick="loadHeatmap_risk1()" value="' + adversary_list2[y] + '"><label for="' + adversary_list2[y] + '_radio">' + adversary_list2[y] + ' (All adversaries)' + '</label>'
    }

    if (adversary_list2.length > 0) {
        document.getElementById("category_list").innerHTML = adversary_list2_string
        document.getElementById("category_list").style.padding = '0px 10px 15px 10px'
        document.getElementById("category_list").style.backgroundColor = '#efc9d0'
    } else {
        document.getElementById("category_list").innerHTML = '<em>No adversaries match selected criteria</em>'
        document.getElementById("category_list").style.padding = '15px'
        document.getElementById("category_list").style.backgroundColor = '#e7e7e7'
    }

    const req = new XMLHttpRequest();
    req.open("GET",'https://raw.githubusercontent.com/tropChaud/Categorized-Adversary-TTPs/main/docs/heatmaps/all_adversaries/Categorized_Adversary_TTPs_CVC.json',true);
    req.send();
    req.onload = function(){

        const data = JSON.parse(req.responseText);

        const selections = document.querySelectorAll(".adversary_select");
        selections_array = []
        adversary_list = []
        for (var i = 0; i < selections.length; i++) {
            if (selections[i].checked) {
                selections_array.push(selections[i].id)
            }
        }

        if (selections_array.length > 0) {

            for (var x = 0; x < data.length; x++) {

                category_list = []
                category_list.push(data[x].country)
                motivations = data[x].motivation
                for (var motivation = 0; motivation < motivations.length; motivation++)
                    category_list.push(motivations[motivation])
                victim_industries = data[x].victim_industries
                for (var industry = 0; industry < victim_industries.length; industry++)
                    category_list.push(victim_industries[industry])
                victim_countries = data[x].victim_countries
                for (var victim_country = 0; victim_country < victim_countries.length; victim_country++)
                    category_list.push(victim_countries[victim_country])

                checkSelection_result = selections_array.every(checkSelection)
                function checkSelection(match) {
                    return category_list.includes(match)
                }
                if (checkSelection_result) {
                    adversary_list.push(
                        {
                            'merged_name' : data[x].merged_name,
                            'mitre_attack_name' : data[x].mitre_attack_name
                        }
                    )
                }
            };

        } else {

            for (var x = 0; x < data.length; x++) {
                adversary_list.push(
                    {
                        'merged_name' : data[x].merged_name,
                        'mitre_attack_name' : data[x].mitre_attack_name
                    }
                )
            };

        }

//        if (! adversary_list.includes(data[x].heatmap_url)) {
//            adversary_list.push(data[x].mitre_attack_name)
//        }

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
}
