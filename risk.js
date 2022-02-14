const buttonsForRefresh = ["indexCol", "sumField", "avgField", "nestCol"];

$(document).ready(function(){

    var arrayCvc = [];

	$.ajax({
		url: "https://gist.githubusercontent.com/MetaOSINT/67e6987080d1a8bec47b48f00c4caec5/raw/d30078ff4c9fe94b3145a1838fe1fc7f983ca257/cvc2.json",
		async: true,
		dataType: 'json',
		success: function (data) {
			for (var i = 0, len = data.length; i < len; i++) {
				arrayCvc.push({'value' : data[i].technique,
				                  'techID' : data[i].techID,
				              	  'techName' : data[i].techName,
                              	  'tactics' : data[i].tactics,
                              	  'url' : data[i].url,
                              	  'splunk' : data[i].splunk,
                              	  'splunk_threatHunting' : data[i].splunk_threatHunting,
                              	  'elastic' : data[i].elastic,
                              	  'eql_analytics' : data[i].eql_analytics,
                              	  'azure_fullStack' : data[i].azure_fullStack,
                              	  'azure_sentinel' : data[i].azure_sentinel,
                              	  'proofpoint_emergingThreats' : data[i].proofpoint_emergingThreats,
                              	  'tanium_threatResponse' : data[i].tanium_threatResponse,
                              	  'aws' : data[i].aws,
                              	  'car' : data[i].car,
                              	  'atc' : data[i].atc,
                              	  'sigma' : data[i].sigma,
                              	  'th_playbook' : data[i].th_playbook,
                              	  'art' : data[i].art,
                              	  'rta' : data[i].rta,
                              	  'prelude' : data[i].prelude,
                              	  'stockpile' : data[i].stockpile,
							  	  'detect_volume' : data[i].detect_volume,
							  	  'test_volume' : data[i].test_volume,
							  	  'validate_potential' : data[i].validate_potential
				    }
				);
			};
		}
	});

	$('#process-data').click(function(){

        var allTech = [];
    	var arrayReturn = [];

    	function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        };

		let jsonData = $('#JSONinput').val();

		inParse = JSON.parse(jsonData);

        for (item in inParse.techniques) {
        	arrayReturn.push(inParse.techniques[item].techniqueID
        	);
        };

        arrayTech = []

        for (i in arrayCvc) {

            var techObj = {};

            if ($('#splunk').is(":checked")) {
            splunk = arrayCvc[i].splunk;
            } else {
                splunk = 0;
            };

            if ($('#splunk_threatHunting').is(":checked")) {
            splunk_threatHunting = arrayCvc[i].splunk_threatHunting;
            } else {
                splunk_threatHunting = 0;
            };

            if ($('#elastic').is(":checked")) {
                elastic = arrayCvc[i].elastic;
            } else {
                elastic = 0;
            };

            if ($('#eql_analytics').is(":checked")) {
                eql_analytics = arrayCvc[i].eql_analytics;
            } else {
                eql_analytics = 0;
            };

            if ($('#azure_fullStack').is(":checked")) {
            azure_fullStack = arrayCvc[i].azure_fullStack;
            } else {
                azure_fullStack = 0;
            };

            if ($('#azure_sentinel').is(":checked")) {
                azure_sentinel = arrayCvc[i].azure_sentinel;
            } else {
                azure_sentinel = 0;
            };

            if ($('#proofpoint_emergingThreats').is(":checked")) {
            proofpoint_emergingThreats = arrayCvc[i].proofpoint_emergingThreats;
            } else {
                proofpoint_emergingThreats = 0;
            };

            if ($('#tanium_threatResponse').is(":checked")) {
                tanium_threatResponse = arrayCvc[i].tanium_threatResponse;
            } else {
                tanium_threatResponse = 0;
            };

            if ($('#aws').is(":checked")) {
            aws = arrayCvc[i].aws;
            } else {
                aws = 0;
            };

            if ($('#car').is(":checked")) {
                car = arrayCvc[i].car;
            } else {
                car = 0;
            };

            if ($('#atc').is(":checked")) {
                atc = arrayCvc[i].atc;
            } else {
                atc = 0;
            };

            if ($('#sigma').is(":checked")) {
                sigma = arrayCvc[i].sigma;
            } else {
                sigma = 0;
            };

            if ($('#th_playbook').is(":checked")) {
                th_playbook = arrayCvc[i].th_playbook;
            } else {
                th_playbook = 0;
            };

            if ($('#art').is(":checked")) {
                art = arrayCvc[i].art;
            } else {
                art = 0;
            };

            if ($('#rta').is(":checked")) {
                rta = arrayCvc[i].rta;
            } else {
                rta = 0;
            };

            if ($('#prelude').is(":checked")) {
                prelude = arrayCvc[i].prelude;
            } else {
                prelude = 0;
            };

            if ($('#stockpile').is(":checked")) {
                stockpile = arrayCvc[i].stockpile;
            } else {
                stockpile = 0;
            };

            techObj.value = arrayCvc[i].technique
            techObj.techID = arrayCvc[i].techID
            techObj.techName = arrayCvc[i].techName
            techObj.tactics = arrayCvc[i].tactics
            techObj.url = arrayCvc[i].url

            techObj.splunk = arrayCvc[i].splunk
            techObj.splunk_threatHunting = arrayCvc[i].splunk_threatHunting
            techObj.elastic = arrayCvc[i].elastic
            techObj.eql_analytics = arrayCvc[i].eql_analytics
            techObj.azure_fullStack = arrayCvc[i].azure_fullStack
            techObj.azure_sentinel = arrayCvc[i].azure_sentinel
            techObj.proofpoint_emergingThreats = arrayCvc[i].proofpoint_emergingThreats
            techObj.tanium_threatResponse = arrayCvc[i].tanium_threatResponse
            techObj.aws = arrayCvc[i].aws
            techObj.car = arrayCvc[i].car
            techObj.atc = arrayCvc[i].atc
            techObj.sigma = arrayCvc[i].sigma
            techObj.th_playbook = arrayCvc[i].th_playbook

            techObj.art = arrayCvc[i].art
            techObj.rta = arrayCvc[i].rta
            techObj.prelude = arrayCvc[i].prelude
            techObj.stockpile = arrayCvc[i].stockpile

            techObj.validate_potential = arrayCvc[i].validate_potential

            techObj.rule_total = splunk + splunk_threatHunting + elastic + eql_analytics + azure_fullStack + azure_sentinel + proofpoint_emergingThreats + tanium_threatResponse + aws + car + atc + sigma + th_playbook
            techObj.detect_volume = arrayCvc[i].detect_volume

            techObj.test_total = art + rta + prelude + stockpile
            techObj.test_volume = arrayCvc[i].test_volume

            techObj.stockpile = arrayCvc[i].stockpile

            allTech.push(
                techObj
            );

        };

        allTech.sort((a, b) => b.rule_total - a.rule_total);

        for (item in allTech) {
            if (arrayReturn.includes(allTech[item].techID) && allTech[item].rule_total > 0) {
                arrayTech.push(
                    '<a style="text-decoration:underline" target="_blank" href="' + allTech[item].url + '">' + allTech[item].techID + ' (' + allTech[item].techName + ')</a>' + ': ' + allTech[item].rule_total
                )
            }
        }

        unique = arrayTech.filter(onlyUnique)

        let techList  = unique.join('<br>');

        $('#csv-output').html(techList);

    });
});
