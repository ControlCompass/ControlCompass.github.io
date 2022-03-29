const buttonsForRefresh = ["indexCol", "sumField", "avgField", "nestCol"];

$(document).ready(function(){

    var arrayCvc = [];

	$.ajax({
		url: "https://raw.githubusercontent.com/ControlCompass/ControlCompass.github.io/main/cvc.json",
		async: true,
		dataType: 'json',
		success: function (data) {
			for (var i = 0, len = data.length; i < len; i++) {
				arrayCvc.push({'value' : data[i].technique,
				                  'techID' : data[i].techID,
				              	  'techName' : data[i].techName,
                              	  'tactics' : data[i].tactics,
                              	  'url' : data[i].url,
                              	  'lowestLevel' : data[i].lowestLevel,
                              	  'splunk' : data[i].splunk,
                              	  'splunk_threatHunting' : data[i].splunk_threatHunting,
                              	  'elastic' : data[i].elastic,
                              	  'eql_analytics' : data[i].eql_analytics,
                              	  'azure_fullStack' : data[i].azure_fullStack,
                              	  'azure_sentinel' : data[i].azure_sentinel,
                              	  'logpoint' : data[i].logpoint,
                              	  'proofpoint_emergingThreats' : data[i].proofpoint_emergingThreats,
                              	  'tanium_threatResponse' : data[i].tanium_threatResponse,
                              	  'aws' : data[i].aws,
                              	  'gcp' : data[i].gcp,
                              	  'car' : data[i].car,
                              	  'atc' : data[i].atc,
                              	  'sigma' : data[i].sigma,
                              	  'th_playbook' : data[i].th_playbook,
                              	  'art' : data[i].art,
                              	  'car_red' : data[i].car_red,
                              	  'rta' : data[i].rta,
                              	  'prelude' : data[i].prelude,
                              	  'stockpile' : data[i].stockpile,
                              	  'scythe' : data[i].scythe,
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

        for (i in arrayCvc) {

            var techObj = {};

            if ($('#splunk').is(":checked")) {
                splunk = arrayCvc[i].splunk;
                splunkDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#splunk">Splunk</a>: ' + arrayCvc[i].splunk + '<br>';
            } else {
                splunk = 0;
                splunkDetails = ""
            };

            if ($('#splunk_threatHunting').is(":checked")) {
                splunk_threatHunting = arrayCvc[i].splunk_threatHunting;
                splunk_threatHuntingDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#splunk_threatHunting">ThreatHunting Splunk app</a>: ' + arrayCvc[i].splunk_threatHunting + '<br>';
            } else {
                splunk_threatHunting = 0;
                splunk_threatHuntingDetails = "";
            };

            if ($('#elastic').is(":checked")) {
                elastic = arrayCvc[i].elastic;
                elasticDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#elastic">Elastic Stack</a>: ' + arrayCvc[i].elastic + '<br>';
            } else {
                elastic = 0;
                elasticDetails = "";
            };

            if ($('#eql_analytics').is(":checked")) {
                eql_analytics = arrayCvc[i].eql_analytics;
                eql_analyticsDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#eql_analytics">EQL Analytics Library</a>: ' + arrayCvc[i].eql_analytics + '<br>';
            } else {
                eql_analytics = 0;
                eql_analyticsDetails = "";
            };

            if ($('#azure_fullStack').is(":checked")) {
                azure_fullStack = arrayCvc[i].azure_fullStack;
                azure_fullStackDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#azure_fullStack">Azure full stack mappings</a>: ' + arrayCvc[i].azure_fullStack + '<br>';
            } else {
                azure_fullStack = 0;
                azure_fullStackDetails = "";
            };

            if ($('#azure_sentinel').is(":checked")) {
                azure_sentinel = arrayCvc[i].azure_sentinel;
                azure_sentinelDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#azure_sentinel">Sentinel detection mappings</a>: ' + arrayCvc[i].azure_sentinel + '<br>';
            } else {
                azure_sentinel = 0;
                azure_sentinelDetails = "";
            };

            if ($('#logpoint').is(":checked")) {
                logpoint = arrayCvc[i].logpoint;
                logpointDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#logpoint">LogPoint</a>: ' + arrayCvc[i].logpoint + '<br>';
            } else {
                logpoint = 0;
                logpointDetails = "";
            };

            if ($('#proofpoint_emergingThreats').is(":checked")) {
                proofpoint_emergingThreats = arrayCvc[i].proofpoint_emergingThreats;
                proofpoint_emergingThreatsDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#proofpoint_emergingThreats">Network Security Monitoring rule mappings</a>: ' + arrayCvc[i].proofpoint_emergingThreats + '<br>';
            } else {
                proofpoint_emergingThreats = 0;
                proofpoint_emergingThreatsDetails = "";
            };

            if ($('#tanium_threatResponse').is(":checked")) {
                tanium_threatResponse = arrayCvc[i].tanium_threatResponse;
                tanium_threatResponseDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#tanium_threatResponse">Tanium Threat Response</a>: ' + arrayCvc[i].tanium_threatResponse + '<br>';
            } else {
                tanium_threatResponse = 0;
                tanium_threatResponseDetails = "";
            };

            if ($('#aws').is(":checked")) {
                aws = arrayCvc[i].aws;
                awsDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#aws">AWS security control mappings</a>: ' + arrayCvc[i].aws + '<br>';
            } else {
                aws = 0;
                awsDetails = "";
            };

            if ($('#gcp').is(":checked")) {
                gcp = arrayCvc[i].gcp;
                gcpDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#gcp">GCP Community Security Analytics</a>: ' + arrayCvc[i].gcp + '<br>';
            } else {
                gcp = 0;
                gcpDetails = "";
            };

            if ($('#car').is(":checked")) {
                car = arrayCvc[i].car;
                carDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#car">Cyber Analytics Repository</a>: ' + arrayCvc[i].car + '<br>';
            } else {
                car = 0;
                carDetails = "";
            };

            if ($('#atc').is(":checked")) {
                atc = arrayCvc[i].atc;
                atcDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#atc">Atomic Threat Coverage</a>: ' + arrayCvc[i].atc + '<br>';
            } else {
                atc = 0;
                atcDetails = "";
            };

            if ($('#sigma').is(":checked")) {
                sigma = arrayCvc[i].sigma;
                sigmaDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#sigma">Sigma rules public repository</a>: ' + arrayCvc[i].sigma + '<br>';
            } else {
                sigma = 0;
                sigmaDetails = "";
            };

            if ($('#th_playbook').is(":checked")) {
                th_playbook = arrayCvc[i].th_playbook;
                th_playbookDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#th_playbook">ThreatHunter Playbook</a>: ' + arrayCvc[i].th_playbook + '<br>';
            } else {
                th_playbook = 0;
                th_playbookDetails = "";
            };

            if ($('#art').is(":checked")) {
                art = arrayCvc[i].art;
                artDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#art">Atomic Red Team</a>: ' + arrayCvc[i].art + '<br>';
            } else {
                art = 0;
                artDetails = "";
            };

            if ($('#car_red').is(":checked")) {
                car_red = arrayCvc[i].car_red;
                car_redDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#car_red">Cyber Analytics Repository</a>: ' + arrayCvc[i].car + '<br>';
            } else {
                car_red = 0;
                car_redDetails = "";
            };

            if ($('#rta').is(":checked")) {
                rta = arrayCvc[i].rta;
                rtaDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#rta">Red Team Automation</a>: ' + arrayCvc[i].rta + '<br>';
            } else {
                rta = 0;
                rtaDetails = "";
            };

            if ($('#prelude').is(":checked")) {
                prelude = arrayCvc[i].prelude;
                preludeDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#prelude">Prelude Community TTPs</a>: ' + arrayCvc[i].prelude + '<br>';
            } else {
                prelude = 0;
                preludeDetails = "";
            };

            if ($('#stockpile').is(":checked")) {
                stockpile = arrayCvc[i].stockpile;
                stockpileDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#stockpile">CALDERA Stockpile</a>: ' + arrayCvc[i].stockpile + '<br>';
            } else {
                stockpile = 0;
                stockpileDetails = "";
            };

            if ($('#scythe').is(":checked")) {
                scythe = arrayCvc[i].scythe;
                scytheDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#scythe">Scythe</a>: ' + arrayCvc[i].scythe + '<br>';
            } else {
                scythe = 0;
                scytheDetails = "";
            };

            techObj.value = arrayCvc[i].technique
            techObj.techID = arrayCvc[i].techID
            techObj.techName = arrayCvc[i].techName
            techObj.tactics = arrayCvc[i].tactics
            techObj.url = arrayCvc[i].url
            techObj.lowestLevel = arrayCvc[i].lowestLevel

            techObj.splunk = arrayCvc[i].splunk
            techObj.splunk_threatHunting = arrayCvc[i].splunk_threatHunting
            techObj.elastic = arrayCvc[i].elastic
            techObj.eql_analytics = arrayCvc[i].eql_analytics
            techObj.azure_fullStack = arrayCvc[i].azure_fullStack
            techObj.azure_sentinel = arrayCvc[i].azure_sentinel
            techObj.logpoint = arrayCvc[i].logpoint
            techObj.proofpoint_emergingThreats = arrayCvc[i].proofpoint_emergingThreats
            techObj.tanium_threatResponse = arrayCvc[i].tanium_threatResponse
            techObj.aws = arrayCvc[i].aws
            techObj.gcp = arrayCvc[i].gcp
            techObj.car = arrayCvc[i].car
            techObj.atc = arrayCvc[i].atc
            techObj.sigma = arrayCvc[i].sigma
            techObj.th_playbook = arrayCvc[i].th_playbook
            techObj.splunkDetails = splunkDetails
            techObj.splunk_threatHuntingDetails = splunk_threatHuntingDetails
            techObj.elasticDetails = elasticDetails
            techObj.eql_analyticsDetails = eql_analyticsDetails
            techObj.azure_fullStackDetails = azure_fullStackDetails
            techObj.azure_sentinelDetails = azure_sentinelDetails
            techObj.logpointDetails = logpointDetails
            techObj.proofpoint_emergingThreatsDetails = proofpoint_emergingThreatsDetails
            techObj.tanium_threatResponseDetails = tanium_threatResponseDetails
            techObj.awsDetails = awsDetails
            techObj.gcpDetails = gcpDetails
            techObj.carDetails = carDetails
            techObj.atcDetails = atcDetails
            techObj.sigmaDetails = sigmaDetails
            techObj.th_playbookDetails = th_playbookDetails

            techObj.art = arrayCvc[i].art
            techObj.car_red = arrayCvc[i].car_red
            techObj.rta = arrayCvc[i].rta
            techObj.prelude = arrayCvc[i].prelude
            techObj.stockpile = arrayCvc[i].stockpile
            techObj.scythe = arrayCvc[i].scythe
            techObj.artDetails = artDetails
            techObj.car_redDetails = car_redDetails
            techObj.rtaDetails = rtaDetails
            techObj.preludeDetails = preludeDetails
            techObj.stockpileDetails = stockpileDetails
            techObj.scytheDetails = scytheDetails

            techObj.validate_potential = arrayCvc[i].validate_potential

            techObj.rule_total = splunk + splunk_threatHunting + elastic + eql_analytics + azure_fullStack + azure_sentinel + logpoint + proofpoint_emergingThreats + tanium_threatResponse + aws + gcp + car + atc + sigma + th_playbook
            techObj.detect_volume = arrayCvc[i].detect_volume

            techObj.test_total = art + car_red + rta + prelude + stockpile + scythe
            techObj.test_volume = arrayCvc[i].test_volume

            techObj.ruleTest_total = splunk + splunk_threatHunting + elastic + eql_analytics + azure_fullStack + azure_sentinel + logpoint + proofpoint_emergingThreats + tanium_threatResponse + aws + gcp + car + atc + sigma + th_playbook + art + car_red + rta + prelude + stockpile + scythe

            allTech.push(
                techObj
            );

        };

        allTech.sort((a, b) => b.ruleTest_total - a.ruleTest_total);

        tactics = []

        if ($('#reconnaissance').is(":checked")) {
            reconnaissance = 'Reconnaissance';
        } else {
            reconnaissance = 'noTactic';
        };

        if ($('#resourceDevelopment').is(":checked")) {
            resourceDevelopment = 'Resource Development';
        } else {
            resourceDevelopment = 'noTactic';
        };

        if ($('#initialAccess').is(":checked")) {
            initialAccess = 'Initial Access';
        } else {
            initialAccess = 'noTactic';
        };

        if ($('#defenseEvasion').is(":checked")) {
            defenseEvasion = 'Defense Evasion';
        } else {
            defenseEvasion = 'noTactic';
        };

        if ($('#commandAndControl').is(":checked")) {
            commandAndControl = 'Command and Control';
        } else {
            commandAndControl = 'noTactic';
        };

        if ($('#discovery').is(":checked")) {
            discovery = 'Discovery';
        } else {
            discovery = 'noTactic';
        };

        if ($('#collection').is(":checked")) {
            collection = 'Collection';
        } else {
            collection = 'noTactic';
        };
        if ($('#persistence').is(":checked")) {
            persistence = 'Persistence';
        } else {
            persistence = 'noTactic';
        };
        if ($('#credentialAccess').is(":checked")) {
            credentialAccess = 'Credential Access';
        } else {
            credentialAccess = 'noTactic';
        };
        if ($('#privilegeEscalation').is(":checked")) {
            privilegeEscalation = 'Privilege Escalation';
        } else {
            privilegeEscalation = 'noTactic';
        };
        if ($('#lateralMovement').is(":checked")) {
            lateralMovement = 'Lateral Movement';
        } else {
            lateralMovement = 'noTactic';
        };
        if ($('#execution').is(":checked")) {
            execution = 'Execution';
        } else {
            execution = 'noTactic';
        };
        if ($('#exfiltration').is(":checked")) {
            exfiltration = 'Exfiltration';
        } else {
            exfiltration = 'noTactic';
        };
        if ($('#impact').is(":checked")) {
            impact = 'Impact';
        } else {
            impact = 'noTactic';
        };

        arrayTech_blue_ll = []
        arrayTech_red_ll = []

        arrayTech_blue_ll.push('<h4 style="color:#1565c0;text-align:center"><strong>Detection Rules</strong></h4>')
        arrayTech_red_ll.push('<h4 style="color:#bf2026ff;text-align:center"><strong>Offensive Tests</strong></h4>')

        arrayTech_blue = []
        arrayTech_red = []

        arrayTech_blue.push('<h4 style="color:#1565c0;text-align:center"><strong>Detection Rules</strong></h4>')
        arrayTech_red.push('<h4 style="color:#bf2026ff;text-align:center"><strong>Offensive Tests</strong></h4>')

        for (item in allTech) {
            if (allTech[item].tactics.includes(reconnaissance) || allTech[item].tactics.includes(resourceDevelopment) || allTech[item].tactics.includes(initialAccess) || allTech[item].tactics.includes(defenseEvasion) || allTech[item].tactics.includes(commandAndControl) || allTech[item].tactics.includes(discovery) || allTech[item].tactics.includes(collection) || allTech[item].tactics.includes(persistence) || allTech[item].tactics.includes(credentialAccess) || allTech[item].tactics.includes(privilegeEscalation) || allTech[item].tactics.includes(lateralMovement) || allTech[item].tactics.includes(execution) || allTech[item].tactics.includes(exfiltration) || allTech[item].tactics.includes(impact)) {
                if (allTech[item].lowestLevel == 'y') {

                    rulesDetails = []
                    testDetails = []

                    rulesDetails.push('<p style="margin-left:24px;padding:6px 6px 6px 150px">' +
                                      allTech[item].splunkDetails +
                                      allTech[item].splunk_threatHuntingDetails +
                                      allTech[item].elasticDetails +
                                      allTech[item].eql_analyticsDetails +
                                      allTech[item].azure_sentinelDetails +
                                      allTech[item].logpointDetails +
                                      allTech[item].proofpoint_emergingThreatsDetails +
                                      allTech[item].tanium_threatResponseDetails +
                                      allTech[item].azure_fullStackDetails +
                                      allTech[item].awsDetails +
                                      allTech[item].gcpDetails +
                                      allTech[item].carDetails +
                                      allTech[item].atcDetails +
                                      allTech[item].sigmaDetails +
                                      allTech[item].th_playbookDetails +
                                      '</p>'
                    )

                    testDetails.push('<p style="margin-left:24px;padding:6px 6px 6px 150px">' +
                                      allTech[item].artDetails +
                                      allTech[item].car_redDetails +
                                      allTech[item].rtaDetails +
                                      allTech[item].preludeDetails +
                                      allTech[item].stockpileDetails +
                                      allTech[item].scytheDetails +
                                      '</p>'
                    )

                    arrayTech_blue_ll.push(
                        '<details><summary class="summary output_blue" style="padding:3px 3px 3px 150px"><a target="_blank" style="color:#1565c0;text-decoration:underline" href="' +
                        allTech[item].url + '">' +
                        allTech[item].techID +
                        ' (' + allTech[item].techName +
                        ')</a>' + ': ' +
                        allTech[item].rule_total +
                        '</summary>' +
                        rulesDetails +
                        '</details>'
                    )

                    arrayTech_red_ll.push(
                        '<details><summary class="summary output_red" style="padding:3px 3px 3px 150px"><a target="_blank" style="color:#bf2026ff;text-decoration:underline" href="' +
                        allTech[item].url + '">' +
                        allTech[item].techID +
                        ' (' + allTech[item].techName +
                        ')</a>' + ': ' +
                        allTech[item].test_total +
                        '</summary>' +
                        testDetails +
                        '</details>'
                    )

                }

                rulesDetails = []
                testDetails = []

                rulesDetails.push('<p style="margin-left:24px;padding:6px 6px 6px 150px">' +
                                  allTech[item].splunkDetails +
                                  allTech[item].splunk_threatHuntingDetails +
                                  allTech[item].elasticDetails +
                                  allTech[item].eql_analyticsDetails +
                                  allTech[item].azure_sentinelDetails +
                                  allTech[item].logpointDetails +
                                  allTech[item].proofpoint_emergingThreatsDetails +
                                  allTech[item].tanium_threatResponseDetails +
                                  allTech[item].azure_fullStackDetails +
                                  allTech[item].awsDetails +
                                  allTech[item].gcpDetails +
                                  allTech[item].carDetails +
                                  allTech[item].atcDetails +
                                  allTech[item].sigmaDetails +
                                  allTech[item].th_playbookDetails +
                                  '</p>'
                )

                testDetails.push('<p style="margin-left:24px;padding:6px 6px 6px 150px">' +
                                  allTech[item].artDetails +
                                  allTech[item].car_redDetails +
                                  allTech[item].rtaDetails +
                                  allTech[item].preludeDetails +
                                  allTech[item].stockpileDetails +
                                  allTech[item].scytheDetails +
                                  '</p>'
                )

                arrayTech_blue.push(
                    '<details><summary class="summary output_blue" style="padding:3px 3px 3px 150px"><a target="_blank" style="color:#1565c0;text-decoration:underline" href="' +
                    allTech[item].url + '">' +
                    allTech[item].techID +
                    ' (' + allTech[item].techName +
                    ')</a>' + ': ' +
                    allTech[item].rule_total +
                    '</summary>' +
                    rulesDetails +
                    '</details>'
                )

                arrayTech_red.push(
                    '<details><summary class="summary output_red" style="padding:3px 3px 3px 150px"><a target="_blank" style="color:#bf2026ff;text-decoration:underline" href="' +
                    allTech[item].url + '">' +
                    allTech[item].techID +
                    ' (' + allTech[item].techName +
                    ')</a>' + ': ' +
                    allTech[item].test_total +
                    '</summary>' +
                    testDetails +
                    '</details>'
                )

            }
        }

        unique_blue_ll = arrayTech_blue_ll.filter(onlyUnique)
        unique_red_ll = arrayTech_red_ll.filter(onlyUnique)

        let techList_blue_ll  = unique_blue_ll.join('<br>');
        let techList_red_ll  = unique_red_ll.join('<br>');

        unique_blue = arrayTech_blue.filter(onlyUnique)
        unique_red = arrayTech_red.filter(onlyUnique)

        let techList_blue  = unique_blue.join('<br>');
        let techList_red  = unique_red.join('<br>');

        document.getElementById("sort-buttons1").style.visibility = "visible";
        document.getElementById("sort-buttons2").style.visibility = "visible";

        $('#cvc-output_header').html("The following volume of detections & tests are available from the selected control sets. If you haven't already, <b>consider implementing detections or validation tests for the controls at the top of the list</b> - these are the techniques that have the largest volume of readily-available detections and/or tests.");

        if ($('#lowestLevel').is(":checked")) {
            $('#cvc-output_blue').html(techList_blue_ll);
            $('#cvc-output_red').html(techList_red_ll);
        } else {
            $('#cvc-output_blue').html(techList_blue);
            $('#cvc-output_red').html(techList_red);
        };

    });

	$('#totalLow').click(function(){

        var allTech = [];
    	var arrayReturn = [];

    	function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        };

        for (i in arrayCvc) {

            var techObj = {};

            if ($('#splunk').is(":checked")) {
                splunk = arrayCvc[i].splunk;
                splunkDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#splunk">Splunk</a>: ' + arrayCvc[i].splunk + '<br>';
            } else {
                splunk = 0;
                splunkDetails = ""
            };

            if ($('#splunk_threatHunting').is(":checked")) {
                splunk_threatHunting = arrayCvc[i].splunk_threatHunting;
                splunk_threatHuntingDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#splunk_threatHunting">ThreatHunting Splunk app</a>: ' + arrayCvc[i].splunk_threatHunting + '<br>';
            } else {
                splunk_threatHunting = 0;
                splunk_threatHuntingDetails = "";
            };

            if ($('#elastic').is(":checked")) {
                elastic = arrayCvc[i].elastic;
                elasticDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#elastic">Elastic Stack</a>: ' + arrayCvc[i].elastic + '<br>';
            } else {
                elastic = 0;
                elasticDetails = "";
            };

            if ($('#eql_analytics').is(":checked")) {
                eql_analytics = arrayCvc[i].eql_analytics;
                eql_analyticsDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#eql_analytics">EQL Analytics Library</a>: ' + arrayCvc[i].eql_analytics + '<br>';
            } else {
                eql_analytics = 0;
                eql_analyticsDetails = "";
            };

            if ($('#azure_fullStack').is(":checked")) {
                azure_fullStack = arrayCvc[i].azure_fullStack;
                azure_fullStackDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#azure_fullStack">Azure full stack mappings</a>: ' + arrayCvc[i].azure_fullStack + '<br>';
            } else {
                azure_fullStack = 0;
                azure_fullStackDetails = "";
            };

            if ($('#azure_sentinel').is(":checked")) {
                azure_sentinel = arrayCvc[i].azure_sentinel;
                azure_sentinelDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#azure_sentinel">Sentinel detection mappings</a>: ' + arrayCvc[i].azure_sentinel + '<br>';
            } else {
                azure_sentinel = 0;
                azure_sentinelDetails = "";
            };

            if ($('#logpoint').is(":checked")) {
                logpoint = arrayCvc[i].logpoint;
                logpointDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#logpoint">LogPoint</a>: ' + arrayCvc[i].logpoint + '<br>';
            } else {
                logpoint = 0;
                logpointDetails = "";
            };

            if ($('#proofpoint_emergingThreats').is(":checked")) {
                proofpoint_emergingThreats = arrayCvc[i].proofpoint_emergingThreats;
                proofpoint_emergingThreatsDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#proofpoint_emergingThreats">Network Security Monitoring rule mappings</a>: ' + arrayCvc[i].proofpoint_emergingThreats + '<br>';
            } else {
                proofpoint_emergingThreats = 0;
                proofpoint_emergingThreatsDetails = "";
            };

            if ($('#tanium_threatResponse').is(":checked")) {
                tanium_threatResponse = arrayCvc[i].tanium_threatResponse;
                tanium_threatResponseDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#tanium_threatResponse">Tanium Threat Response</a>: ' + arrayCvc[i].tanium_threatResponse + '<br>';
            } else {
                tanium_threatResponse = 0;
                tanium_threatResponseDetails = "";
            };

            if ($('#aws').is(":checked")) {
                aws = arrayCvc[i].aws;
                awsDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#aws">AWS security control mappings</a>: ' + arrayCvc[i].aws + '<br>';
            } else {
                aws = 0;
                awsDetails = "";
            };

            if ($('#gcp').is(":checked")) {
                gcp = arrayCvc[i].gcp;
                gcpDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#gcp">GCP Community Security Analytics</a>: ' + arrayCvc[i].gcp + '<br>';
            } else {
                gcp = 0;
                gcpDetails = "";
            };

            if ($('#car').is(":checked")) {
                car = arrayCvc[i].car;
                carDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#car">Cyber Analytics Repository</a>: ' + arrayCvc[i].car + '<br>';
            } else {
                car = 0;
                carDetails = "";
            };

            if ($('#atc').is(":checked")) {
                atc = arrayCvc[i].atc;
                atcDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#atc">Atomic Threat Coverage</a>: ' + arrayCvc[i].atc + '<br>';
            } else {
                atc = 0;
                atcDetails = "";
            };

            if ($('#sigma').is(":checked")) {
                sigma = arrayCvc[i].sigma;
                sigmaDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#sigma">Sigma rules public repository</a>: ' + arrayCvc[i].sigma + '<br>';
            } else {
                sigma = 0;
                sigmaDetails = "";
            };

            if ($('#th_playbook').is(":checked")) {
                th_playbook = arrayCvc[i].th_playbook;
                th_playbookDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#th_playbook">ThreatHunter Playbook</a>: ' + arrayCvc[i].th_playbook + '<br>';
            } else {
                th_playbook = 0;
                th_playbookDetails = "";
            };

            if ($('#art').is(":checked")) {
                art = arrayCvc[i].art;
                artDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#art">Atomic Red Team</a>: ' + arrayCvc[i].art + '<br>';
            } else {
                art = 0;
                artDetails = "";
            };

            if ($('#car_red').is(":checked")) {
                car_red = arrayCvc[i].car_red;
                car_redDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#car_red">Cyber Analytics Repository</a>: ' + arrayCvc[i].car + '<br>';
            } else {
                car_red = 0;
                car_redDetails = "";
            };

            if ($('#rta').is(":checked")) {
                rta = arrayCvc[i].rta;
                rtaDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#rta">Red Team Automation</a>: ' + arrayCvc[i].rta + '<br>';
            } else {
                rta = 0;
                rtaDetails = "";
            };

            if ($('#prelude').is(":checked")) {
                prelude = arrayCvc[i].prelude;
                preludeDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#prelude">Prelude Community TTPs</a>: ' + arrayCvc[i].prelude + '<br>';
            } else {
                prelude = 0;
                preludeDetails = "";
            };

            if ($('#stockpile').is(":checked")) {
                stockpile = arrayCvc[i].stockpile;
                stockpileDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#stockpile">CALDERA Stockpile</a>: ' + arrayCvc[i].stockpile + '<br>';
            } else {
                stockpile = 0;
                stockpileDetails = "";
            };

            if ($('#scythe').is(":checked")) {
                scythe = arrayCvc[i].scythe;
                scytheDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#scythe">Scythe</a>: ' + arrayCvc[i].scythe + '<br>';
            } else {
                scythe = 0;
                scytheDetails = "";
            };

            techObj.value = arrayCvc[i].technique
            techObj.techID = arrayCvc[i].techID
            techObj.techName = arrayCvc[i].techName
            techObj.tactics = arrayCvc[i].tactics
            techObj.url = arrayCvc[i].url
            techObj.lowestLevel = arrayCvc[i].lowestLevel

            techObj.splunk = arrayCvc[i].splunk
            techObj.splunk_threatHunting = arrayCvc[i].splunk_threatHunting
            techObj.elastic = arrayCvc[i].elastic
            techObj.eql_analytics = arrayCvc[i].eql_analytics
            techObj.azure_fullStack = arrayCvc[i].azure_fullStack
            techObj.azure_sentinel = arrayCvc[i].azure_sentinel
            techObj.logpoint = arrayCvc[i].logpoint
            techObj.proofpoint_emergingThreats = arrayCvc[i].proofpoint_emergingThreats
            techObj.tanium_threatResponse = arrayCvc[i].tanium_threatResponse
            techObj.aws = arrayCvc[i].aws
            techObj.gcp = arrayCvc[i].gcp
            techObj.car = arrayCvc[i].car
            techObj.atc = arrayCvc[i].atc
            techObj.sigma = arrayCvc[i].sigma
            techObj.th_playbook = arrayCvc[i].th_playbook
            techObj.splunkDetails = splunkDetails
            techObj.splunk_threatHuntingDetails = splunk_threatHuntingDetails
            techObj.elasticDetails = elasticDetails
            techObj.eql_analyticsDetails = eql_analyticsDetails
            techObj.azure_fullStackDetails = azure_fullStackDetails
            techObj.azure_sentinelDetails = azure_sentinelDetails
            techObj.logpointDetails = logpointDetails
            techObj.proofpoint_emergingThreatsDetails = proofpoint_emergingThreatsDetails
            techObj.tanium_threatResponseDetails = tanium_threatResponseDetails
            techObj.awsDetails = awsDetails
            techObj.gcpDetails = gcpDetails
            techObj.carDetails = carDetails
            techObj.atcDetails = atcDetails
            techObj.sigmaDetails = sigmaDetails
            techObj.th_playbookDetails = th_playbookDetails

            techObj.art = arrayCvc[i].art
            techObj.car_red = arrayCvc[i].car_red
            techObj.rta = arrayCvc[i].rta
            techObj.prelude = arrayCvc[i].prelude
            techObj.stockpile = arrayCvc[i].stockpile
            techObj.scythe = arrayCvc[i].scythe
            techObj.artDetails = artDetails
            techObj.car_redDetails = car_redDetails
            techObj.rtaDetails = rtaDetails
            techObj.preludeDetails = preludeDetails
            techObj.stockpileDetails = stockpileDetails
            techObj.scytheDetails = scytheDetails

            techObj.validate_potential = arrayCvc[i].validate_potential

            techObj.rule_total = splunk + splunk_threatHunting + elastic + eql_analytics + azure_fullStack + azure_sentinel + logpoint + proofpoint_emergingThreats + tanium_threatResponse + aws + gcp + car + atc + sigma + th_playbook
            techObj.detect_volume = arrayCvc[i].detect_volume

            techObj.test_total = art + car_red + rta + prelude + stockpile + scythe
            techObj.test_volume = arrayCvc[i].test_volume

            techObj.ruleTest_total = splunk + splunk_threatHunting + elastic + eql_analytics + azure_fullStack + azure_sentinel + logpoint + proofpoint_emergingThreats + tanium_threatResponse + aws + gcp + car + atc + sigma + th_playbook + art + car_red + rta + prelude + stockpile + scythe

            allTech.push(
                techObj
            );

        };

        allTech.sort((a, b) => a.ruleTest_total - b.ruleTest_total);

        tactics = []

        if ($('#reconnaissance').is(":checked")) {
            reconnaissance = 'Reconnaissance';
        } else {
            reconnaissance = 'noTactic';
        };

        if ($('#resourceDevelopment').is(":checked")) {
            resourceDevelopment = 'Resource Development';
        } else {
            resourceDevelopment = 'noTactic';
        };

        if ($('#initialAccess').is(":checked")) {
            initialAccess = 'Initial Access';
        } else {
            initialAccess = 'noTactic';
        };

        if ($('#defenseEvasion').is(":checked")) {
            defenseEvasion = 'Defense Evasion';
        } else {
            defenseEvasion = 'noTactic';
        };

        if ($('#commandAndControl').is(":checked")) {
            commandAndControl = 'Command and Control';
        } else {
            commandAndControl = 'noTactic';
        };

        if ($('#discovery').is(":checked")) {
            discovery = 'Discovery';
        } else {
            discovery = 'noTactic';
        };

        if ($('#collection').is(":checked")) {
            collection = 'Collection';
        } else {
            collection = 'noTactic';
        };
        if ($('#persistence').is(":checked")) {
            persistence = 'Persistence';
        } else {
            persistence = 'noTactic';
        };
        if ($('#credentialAccess').is(":checked")) {
            credentialAccess = 'Credential Access';
        } else {
            credentialAccess = 'noTactic';
        };
        if ($('#privilegeEscalation').is(":checked")) {
            privilegeEscalation = 'Privilege Escalation';
        } else {
            privilegeEscalation = 'noTactic';
        };
        if ($('#lateralMovement').is(":checked")) {
            lateralMovement = 'Lateral Movement';
        } else {
            lateralMovement = 'noTactic';
        };
        if ($('#execution').is(":checked")) {
            execution = 'Execution';
        } else {
            execution = 'noTactic';
        };
        if ($('#exfiltration').is(":checked")) {
            exfiltration = 'Exfiltration';
        } else {
            exfiltration = 'noTactic';
        };
        if ($('#impact').is(":checked")) {
            impact = 'Impact';
        } else {
            impact = 'noTactic';
        };

        arrayTech_blue_ll = []
        arrayTech_red_ll = []

        arrayTech_blue_ll.push('<h4 style="color:#1565c0;text-align:center"><strong>Detection Rules</strong></h4>')
        arrayTech_red_ll.push('<h4 style="color:#bf2026ff;text-align:center"><strong>Offensive Tests</strong></h4>')

        arrayTech_blue = []
        arrayTech_red = []

        arrayTech_blue.push('<h4 style="color:#1565c0;text-align:center"><strong>Detection Rules</strong></h4>')
        arrayTech_red.push('<h4 style="color:#bf2026ff;text-align:center"><strong>Offensive Tests</strong></h4>')

        for (item in allTech) {
            if (allTech[item].tactics.includes(reconnaissance) || allTech[item].tactics.includes(resourceDevelopment) || allTech[item].tactics.includes(initialAccess) || allTech[item].tactics.includes(defenseEvasion) || allTech[item].tactics.includes(commandAndControl) || allTech[item].tactics.includes(discovery) || allTech[item].tactics.includes(collection) || allTech[item].tactics.includes(persistence) || allTech[item].tactics.includes(credentialAccess) || allTech[item].tactics.includes(privilegeEscalation) || allTech[item].tactics.includes(lateralMovement) || allTech[item].tactics.includes(execution) || allTech[item].tactics.includes(exfiltration) || allTech[item].tactics.includes(impact)) {
                if (allTech[item].lowestLevel == 'y') {

                    rulesDetails = []
                    testDetails = []

                    rulesDetails.push('<p style="margin-left:24px;padding:6px 6px 6px 150px">' +
                                      allTech[item].splunkDetails +
                                      allTech[item].splunk_threatHuntingDetails +
                                      allTech[item].elasticDetails +
                                      allTech[item].eql_analyticsDetails +
                                      allTech[item].azure_sentinelDetails +
                                      allTech[item].logpointDetails +
                                      allTech[item].proofpoint_emergingThreatsDetails +
                                      allTech[item].tanium_threatResponseDetails +
                                      allTech[item].azure_fullStackDetails +
                                      allTech[item].awsDetails +
                                      allTech[item].gcpDetails +
                                      allTech[item].carDetails +
                                      allTech[item].atcDetails +
                                      allTech[item].sigmaDetails +
                                      allTech[item].th_playbookDetails +
                                      '</p>'
                    )

                    testDetails.push('<p style="margin-left:24px;padding:6px 6px 6px 150px">' +
                                      allTech[item].artDetails +
                                      allTech[item].car_redDetails +
                                      allTech[item].rtaDetails +
                                      allTech[item].preludeDetails +
                                      allTech[item].stockpileDetails +
                                      allTech[item].scytheDetails +
                                      '</p>'
                    )

                    arrayTech_blue_ll.push(
                        '<details><summary class="summary output_blue" style="padding:3px 3px 3px 150px"><a target="_blank" style="color:#1565c0;text-decoration:underline" href="' +
                        allTech[item].url + '">' +
                        allTech[item].techID +
                        ' (' + allTech[item].techName +
                        ')</a>' + ': ' +
                        allTech[item].rule_total +
                        '</summary>' +
                        rulesDetails +
                        '</details>'
                    )

                    arrayTech_red_ll.push(
                        '<details><summary class="summary output_red" style="padding:3px 3px 3px 150px"><a target="_blank" style="color:#bf2026ff;text-decoration:underline" href="' +
                        allTech[item].url + '">' +
                        allTech[item].techID +
                        ' (' + allTech[item].techName +
                        ')</a>' + ': ' +
                        allTech[item].test_total +
                        '</summary>' +
                        testDetails +
                        '</details>'
                    )

                }

                rulesDetails = []
                testDetails = []

                rulesDetails.push('<p style="margin-left:24px;padding:6px 6px 6px 150px">' +
                                  allTech[item].splunkDetails +
                                  allTech[item].splunk_threatHuntingDetails +
                                  allTech[item].elasticDetails +
                                  allTech[item].eql_analyticsDetails +
                                  allTech[item].azure_sentinelDetails +
                                  allTech[item].logpointDetails +
                                  allTech[item].proofpoint_emergingThreatsDetails +
                                  allTech[item].tanium_threatResponseDetails +
                                  allTech[item].azure_fullStackDetails +
                                  allTech[item].awsDetails +
                                  allTech[item].gcpDetails +
                                  allTech[item].carDetails +
                                  allTech[item].atcDetails +
                                  allTech[item].sigmaDetails +
                                  allTech[item].th_playbookDetails +
                                  '</p>'
                )

                testDetails.push('<p style="margin-left:24px;padding:6px 6px 6px 150px">' +
                                  allTech[item].artDetails +
                                  allTech[item].car_redDetails +
                                  allTech[item].rtaDetails +
                                  allTech[item].preludeDetails +
                                  allTech[item].stockpileDetails +
                                  allTech[item].scytheDetails +
                                  '</p>'
                )

                arrayTech_blue.push(
                    '<details><summary class="summary output_blue" style="padding:3px 3px 3px 150px"><a target="_blank" style="color:#1565c0;text-decoration:underline" href="' +
                    allTech[item].url + '">' +
                    allTech[item].techID +
                    ' (' + allTech[item].techName +
                    ')</a>' + ': ' +
                    allTech[item].rule_total +
                    '</summary>' +
                    rulesDetails +
                    '</details>'
                )

                arrayTech_red.push(
                    '<details><summary class="summary output_red" style="padding:3px 3px 3px 150px"><a target="_blank" style="color:#bf2026ff;text-decoration:underline" href="' +
                    allTech[item].url + '">' +
                    allTech[item].techID +
                    ' (' + allTech[item].techName +
                    ')</a>' + ': ' +
                    allTech[item].test_total +
                    '</summary>' +
                    testDetails +
                    '</details>'
                )

            }
        }

        unique_blue_ll = arrayTech_blue_ll.filter(onlyUnique)
        unique_red_ll = arrayTech_red_ll.filter(onlyUnique)

        let techList_blue_ll  = unique_blue_ll.join('<br>');
        let techList_red_ll  = unique_red_ll.join('<br>');

        unique_blue = arrayTech_blue.filter(onlyUnique)
        unique_red = arrayTech_red.filter(onlyUnique)

        let techList_blue  = unique_blue.join('<br>');
        let techList_red  = unique_red.join('<br>');

        $('#cvc-output_header').html("The following volume of detections & tests are available from the selected control sets. If you haven't already, <b>consider implementing detections or validation tests for the controls at the top of the list</b> - these are the techniques that have the largest volume of readily-available detections and/or tests.");

        if ($('#lowestLevel').is(":checked")) {
            $('#cvc-output_blue').html(techList_blue_ll);
            $('#cvc-output_red').html(techList_red_ll);
        } else {
            $('#cvc-output_blue').html(techList_blue);
            $('#cvc-output_red').html(techList_red);
        };

    });

	$('#totalHigh').click(function(){

        var allTech = [];
    	var arrayReturn = [];

    	function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        };

        for (i in arrayCvc) {

            var techObj = {};

            if ($('#splunk').is(":checked")) {
                splunk = arrayCvc[i].splunk;
                splunkDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#splunk">Splunk</a>: ' + arrayCvc[i].splunk + '<br>';
            } else {
                splunk = 0;
                splunkDetails = ""
            };

            if ($('#splunk_threatHunting').is(":checked")) {
                splunk_threatHunting = arrayCvc[i].splunk_threatHunting;
                splunk_threatHuntingDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#splunk_threatHunting">ThreatHunting Splunk app</a>: ' + arrayCvc[i].splunk_threatHunting + '<br>';
            } else {
                splunk_threatHunting = 0;
                splunk_threatHuntingDetails = "";
            };

            if ($('#elastic').is(":checked")) {
                elastic = arrayCvc[i].elastic;
                elasticDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#elastic">Elastic Stack</a>: ' + arrayCvc[i].elastic + '<br>';
            } else {
                elastic = 0;
                elasticDetails = "";
            };

            if ($('#eql_analytics').is(":checked")) {
                eql_analytics = arrayCvc[i].eql_analytics;
                eql_analyticsDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#eql_analytics">EQL Analytics Library</a>: ' + arrayCvc[i].eql_analytics + '<br>';
            } else {
                eql_analytics = 0;
                eql_analyticsDetails = "";
            };

            if ($('#azure_fullStack').is(":checked")) {
                azure_fullStack = arrayCvc[i].azure_fullStack;
                azure_fullStackDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#azure_fullStack">Azure full stack mappings</a>: ' + arrayCvc[i].azure_fullStack + '<br>';
            } else {
                azure_fullStack = 0;
                azure_fullStackDetails = "";
            };

            if ($('#azure_sentinel').is(":checked")) {
                azure_sentinel = arrayCvc[i].azure_sentinel;
                azure_sentinelDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#azure_sentinel">Sentinel detection mappings</a>: ' + arrayCvc[i].azure_sentinel + '<br>';
            } else {
                azure_sentinel = 0;
                azure_sentinelDetails = "";
            };

            if ($('#logpoint').is(":checked")) {
                logpoint = arrayCvc[i].logpoint;
                logpointDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#logpoint">LogPoint</a>: ' + arrayCvc[i].logpoint + '<br>';
            } else {
                logpoint = 0;
                logpointDetails = "";
            };

            if ($('#proofpoint_emergingThreats').is(":checked")) {
                proofpoint_emergingThreats = arrayCvc[i].proofpoint_emergingThreats;
                proofpoint_emergingThreatsDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#proofpoint_emergingThreats">Network Security Monitoring rule mappings</a>: ' + arrayCvc[i].proofpoint_emergingThreats + '<br>';
            } else {
                proofpoint_emergingThreats = 0;
                proofpoint_emergingThreatsDetails = "";
            };

            if ($('#tanium_threatResponse').is(":checked")) {
                tanium_threatResponse = arrayCvc[i].tanium_threatResponse;
                tanium_threatResponseDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#tanium_threatResponse">Tanium Threat Response</a>: ' + arrayCvc[i].tanium_threatResponse + '<br>';
            } else {
                tanium_threatResponse = 0;
                tanium_threatResponseDetails = "";
            };

            if ($('#aws').is(":checked")) {
                aws = arrayCvc[i].aws;
                awsDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#aws">AWS security control mappings</a>: ' + arrayCvc[i].aws + '<br>';
            } else {
                aws = 0;
                awsDetails = "";
            };

            if ($('#gcp').is(":checked")) {
                gcp = arrayCvc[i].gcp;
                gcpDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#gcp">GCP Community Security Analytics</a>: ' + arrayCvc[i].gcp + '<br>';
            } else {
                gcp = 0;
                gcpDetails = "";
            };

            if ($('#car').is(":checked")) {
                car = arrayCvc[i].car;
                carDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#car">Cyber Analytics Repository</a>: ' + arrayCvc[i].car + '<br>';
            } else {
                car = 0;
                carDetails = "";
            };

            if ($('#atc').is(":checked")) {
                atc = arrayCvc[i].atc;
                atcDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#atc">Atomic Threat Coverage</a>: ' + arrayCvc[i].atc + '<br>';
            } else {
                atc = 0;
                atcDetails = "";
            };

            if ($('#sigma').is(":checked")) {
                sigma = arrayCvc[i].sigma;
                sigmaDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#sigma">Sigma rules public repository</a>: ' + arrayCvc[i].sigma + '<br>';
            } else {
                sigma = 0;
                sigmaDetails = "";
            };

            if ($('#th_playbook').is(":checked")) {
                th_playbook = arrayCvc[i].th_playbook;
                th_playbookDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#th_playbook">ThreatHunter Playbook</a>: ' + arrayCvc[i].th_playbook + '<br>';
            } else {
                th_playbook = 0;
                th_playbookDetails = "";
            };

            if ($('#art').is(":checked")) {
                art = arrayCvc[i].art;
                artDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#art">Atomic Red Team</a>: ' + arrayCvc[i].art + '<br>';
            } else {
                art = 0;
                artDetails = "";
            };

            if ($('#car_red').is(":checked")) {
                car_red = arrayCvc[i].car_red;
                car_redDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#car_red">Cyber Analytics Repository</a>: ' + arrayCvc[i].car + '<br>';
            } else {
                car_red = 0;
                car_redDetails = "";
            };

            if ($('#rta').is(":checked")) {
                rta = arrayCvc[i].rta;
                rtaDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#rta">Red Team Automation</a>: ' + arrayCvc[i].rta + '<br>';
            } else {
                rta = 0;
                rtaDetails = "";
            };

            if ($('#prelude').is(":checked")) {
                prelude = arrayCvc[i].prelude;
                preludeDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#prelude">Prelude Community TTPs</a>: ' + arrayCvc[i].prelude + '<br>';
            } else {
                prelude = 0;
                preludeDetails = "";
            };

            if ($('#stockpile').is(":checked")) {
                stockpile = arrayCvc[i].stockpile;
                stockpileDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#stockpile">CALDERA Stockpile</a>: ' + arrayCvc[i].stockpile + '<br>';
            } else {
                stockpile = 0;
                stockpileDetails = "";
            };

            if ($('#scythe').is(":checked")) {
                scythe = arrayCvc[i].scythe;
                scytheDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#scythe">Scythe</a>: ' + arrayCvc[i].scythe + '<br>';
            } else {
                scythe = 0;
                scytheDetails = "";
            };

            techObj.value = arrayCvc[i].technique
            techObj.techID = arrayCvc[i].techID
            techObj.techName = arrayCvc[i].techName
            techObj.tactics = arrayCvc[i].tactics
            techObj.url = arrayCvc[i].url
            techObj.lowestLevel = arrayCvc[i].lowestLevel

            techObj.splunk = arrayCvc[i].splunk
            techObj.splunk_threatHunting = arrayCvc[i].splunk_threatHunting
            techObj.elastic = arrayCvc[i].elastic
            techObj.eql_analytics = arrayCvc[i].eql_analytics
            techObj.azure_fullStack = arrayCvc[i].azure_fullStack
            techObj.azure_sentinel = arrayCvc[i].azure_sentinel
            techObj.logpoint = arrayCvc[i].logpoint
            techObj.proofpoint_emergingThreats = arrayCvc[i].proofpoint_emergingThreats
            techObj.tanium_threatResponse = arrayCvc[i].tanium_threatResponse
            techObj.aws = arrayCvc[i].aws
            techObj.gcp = arrayCvc[i].gcp
            techObj.car = arrayCvc[i].car
            techObj.atc = arrayCvc[i].atc
            techObj.sigma = arrayCvc[i].sigma
            techObj.th_playbook = arrayCvc[i].th_playbook
            techObj.splunkDetails = splunkDetails
            techObj.splunk_threatHuntingDetails = splunk_threatHuntingDetails
            techObj.elasticDetails = elasticDetails
            techObj.eql_analyticsDetails = eql_analyticsDetails
            techObj.azure_fullStackDetails = azure_fullStackDetails
            techObj.azure_sentinelDetails = azure_sentinelDetails
            techObj.logpointDetails = logpointDetails
            techObj.proofpoint_emergingThreatsDetails = proofpoint_emergingThreatsDetails
            techObj.tanium_threatResponseDetails = tanium_threatResponseDetails
            techObj.awsDetails = awsDetails
            techObj.gcpDetails = gcpDetails
            techObj.carDetails = carDetails
            techObj.atcDetails = atcDetails
            techObj.sigmaDetails = sigmaDetails
            techObj.th_playbookDetails = th_playbookDetails

            techObj.art = arrayCvc[i].art
            techObj.car_red = arrayCvc[i].car_red
            techObj.rta = arrayCvc[i].rta
            techObj.prelude = arrayCvc[i].prelude
            techObj.stockpile = arrayCvc[i].stockpile
            techObj.scythe = arrayCvc[i].scythe
            techObj.artDetails = artDetails
            techObj.car_redDetails = car_redDetails
            techObj.rtaDetails = rtaDetails
            techObj.preludeDetails = preludeDetails
            techObj.stockpileDetails = stockpileDetails
            techObj.scytheDetails = scytheDetails

            techObj.validate_potential = arrayCvc[i].validate_potential

            techObj.rule_total = splunk + splunk_threatHunting + elastic + eql_analytics + azure_fullStack + azure_sentinel + logpoint + proofpoint_emergingThreats + tanium_threatResponse + aws + gcp + car + atc + sigma + th_playbook
            techObj.detect_volume = arrayCvc[i].detect_volume

            techObj.test_total = art + car_red + rta + prelude + stockpile + scythe
            techObj.test_volume = arrayCvc[i].test_volume

            techObj.ruleTest_total = splunk + splunk_threatHunting + elastic + eql_analytics + azure_fullStack + azure_sentinel + logpoint + proofpoint_emergingThreats + tanium_threatResponse + aws + gcp + car + atc + sigma + th_playbook + art + car_red + rta + prelude + stockpile + scythe

            allTech.push(
                techObj
            );

        };

        allTech.sort((a, b) => b.ruleTest_total - a.ruleTest_total);

        tactics = []

        if ($('#reconnaissance').is(":checked")) {
            reconnaissance = 'Reconnaissance';
        } else {
            reconnaissance = 'noTactic';
        };

        if ($('#resourceDevelopment').is(":checked")) {
            resourceDevelopment = 'Resource Development';
        } else {
            resourceDevelopment = 'noTactic';
        };

        if ($('#initialAccess').is(":checked")) {
            initialAccess = 'Initial Access';
        } else {
            initialAccess = 'noTactic';
        };

        if ($('#defenseEvasion').is(":checked")) {
            defenseEvasion = 'Defense Evasion';
        } else {
            defenseEvasion = 'noTactic';
        };

        if ($('#commandAndControl').is(":checked")) {
            commandAndControl = 'Command and Control';
        } else {
            commandAndControl = 'noTactic';
        };

        if ($('#discovery').is(":checked")) {
            discovery = 'Discovery';
        } else {
            discovery = 'noTactic';
        };

        if ($('#collection').is(":checked")) {
            collection = 'Collection';
        } else {
            collection = 'noTactic';
        };
        if ($('#persistence').is(":checked")) {
            persistence = 'Persistence';
        } else {
            persistence = 'noTactic';
        };
        if ($('#credentialAccess').is(":checked")) {
            credentialAccess = 'Credential Access';
        } else {
            credentialAccess = 'noTactic';
        };
        if ($('#privilegeEscalation').is(":checked")) {
            privilegeEscalation = 'Privilege Escalation';
        } else {
            privilegeEscalation = 'noTactic';
        };
        if ($('#lateralMovement').is(":checked")) {
            lateralMovement = 'Lateral Movement';
        } else {
            lateralMovement = 'noTactic';
        };
        if ($('#execution').is(":checked")) {
            execution = 'Execution';
        } else {
            execution = 'noTactic';
        };
        if ($('#exfiltration').is(":checked")) {
            exfiltration = 'Exfiltration';
        } else {
            exfiltration = 'noTactic';
        };
        if ($('#impact').is(":checked")) {
            impact = 'Impact';
        } else {
            impact = 'noTactic';
        };

        arrayTech_blue_ll = []
        arrayTech_red_ll = []

        arrayTech_blue_ll.push('<h4 style="color:#1565c0;text-align:center"><strong>Detection Rules</strong></h4>')
        arrayTech_red_ll.push('<h4 style="color:#bf2026ff;text-align:center"><strong>Offensive Tests</strong></h4>')

        arrayTech_blue = []
        arrayTech_red = []

        arrayTech_blue.push('<h4 style="color:#1565c0;text-align:center"><strong>Detection Rules</strong></h4>')
        arrayTech_red.push('<h4 style="color:#bf2026ff;text-align:center"><strong>Offensive Tests</strong></h4>')

        for (item in allTech) {
            if (allTech[item].tactics.includes(reconnaissance) || allTech[item].tactics.includes(resourceDevelopment) || allTech[item].tactics.includes(initialAccess) || allTech[item].tactics.includes(defenseEvasion) || allTech[item].tactics.includes(commandAndControl) || allTech[item].tactics.includes(discovery) || allTech[item].tactics.includes(collection) || allTech[item].tactics.includes(persistence) || allTech[item].tactics.includes(credentialAccess) || allTech[item].tactics.includes(privilegeEscalation) || allTech[item].tactics.includes(lateralMovement) || allTech[item].tactics.includes(execution) || allTech[item].tactics.includes(exfiltration) || allTech[item].tactics.includes(impact)) {
                if (allTech[item].lowestLevel == 'y') {

                    rulesDetails = []
                    testDetails = []

                    rulesDetails.push('<p style="margin-left:24px;padding:6px 6px 6px 150px">' +
                                      allTech[item].splunkDetails +
                                      allTech[item].splunk_threatHuntingDetails +
                                      allTech[item].elasticDetails +
                                      allTech[item].eql_analyticsDetails +
                                      allTech[item].azure_sentinelDetails +
                                      allTech[item].logpointDetails +
                                      allTech[item].proofpoint_emergingThreatsDetails +
                                      allTech[item].tanium_threatResponseDetails +
                                      allTech[item].azure_fullStackDetails +
                                      allTech[item].awsDetails +
                                      allTech[item].gcpDetails +
                                      allTech[item].carDetails +
                                      allTech[item].atcDetails +
                                      allTech[item].sigmaDetails +
                                      allTech[item].th_playbookDetails +
                                      '</p>'
                    )

                    testDetails.push('<p style="margin-left:24px;padding:6px 6px 6px 150px">' +
                                      allTech[item].artDetails +
                                      allTech[item].car_redDetails +
                                      allTech[item].rtaDetails +
                                      allTech[item].preludeDetails +
                                      allTech[item].stockpileDetails +
                                      allTech[item].scytheDetails +
                                      '</p>'
                    )

                    arrayTech_blue_ll.push(
                        '<details><summary class="summary output_blue" style="padding:3px 3px 3px 150px"><a target="_blank" style="color:#1565c0;text-decoration:underline" href="' +
                        allTech[item].url + '">' +
                        allTech[item].techID +
                        ' (' + allTech[item].techName +
                        ')</a>' + ': ' +
                        allTech[item].rule_total +
                        '</summary>' +
                        rulesDetails +
                        '</details>'
                    )

                    arrayTech_red_ll.push(
                        '<details><summary class="summary output_red" style="padding:3px 3px 3px 150px"><a target="_blank" style="color:#bf2026ff;text-decoration:underline" href="' +
                        allTech[item].url + '">' +
                        allTech[item].techID +
                        ' (' + allTech[item].techName +
                        ')</a>' + ': ' +
                        allTech[item].test_total +
                        '</summary>' +
                        testDetails +
                        '</details>'
                    )

                }

                rulesDetails = []
                testDetails = []

                rulesDetails.push('<p style="margin-left:24px;padding:6px 6px 6px 150px">' +
                                  allTech[item].splunkDetails +
                                  allTech[item].splunk_threatHuntingDetails +
                                  allTech[item].elasticDetails +
                                  allTech[item].eql_analyticsDetails +
                                  allTech[item].azure_sentinelDetails +
                                  allTech[item].logpointDetails +
                                  allTech[item].proofpoint_emergingThreatsDetails +
                                  allTech[item].tanium_threatResponseDetails +
                                  allTech[item].azure_fullStackDetails +
                                  allTech[item].awsDetails +
                                  allTech[item].gcpDetails +
                                  allTech[item].carDetails +
                                  allTech[item].atcDetails +
                                  allTech[item].sigmaDetails +
                                  allTech[item].th_playbookDetails +
                                  '</p>'
                )

                testDetails.push('<p style="margin-left:24px;padding:6px 6px 6px 150px">' +
                                  allTech[item].artDetails +
                                  allTech[item].car_redDetails +
                                  allTech[item].rtaDetails +
                                  allTech[item].preludeDetails +
                                  allTech[item].stockpileDetails +
                                  allTech[item].scytheDetails +
                                  '</p>'
                )

                arrayTech_blue.push(
                    '<details><summary class="summary output_blue" style="padding:3px 3px 3px 150px"><a target="_blank" style="color:#1565c0;text-decoration:underline" href="' +
                    allTech[item].url + '">' +
                    allTech[item].techID +
                    ' (' + allTech[item].techName +
                    ')</a>' + ': ' +
                    allTech[item].rule_total +
                    '</summary>' +
                    rulesDetails +
                    '</details>'
                )

                arrayTech_red.push(
                    '<details><summary class="summary output_red" style="padding:3px 3px 3px 150px"><a target="_blank" style="color:#bf2026ff;text-decoration:underline" href="' +
                    allTech[item].url + '">' +
                    allTech[item].techID +
                    ' (' + allTech[item].techName +
                    ')</a>' + ': ' +
                    allTech[item].test_total +
                    '</summary>' +
                    testDetails +
                    '</details>'
                )

            }
        }

        unique_blue_ll = arrayTech_blue_ll.filter(onlyUnique)
        unique_red_ll = arrayTech_red_ll.filter(onlyUnique)

        let techList_blue_ll  = unique_blue_ll.join('<br>');
        let techList_red_ll  = unique_red_ll.join('<br>');

        unique_blue = arrayTech_blue.filter(onlyUnique)
        unique_red = arrayTech_red.filter(onlyUnique)

        let techList_blue  = unique_blue.join('<br>');
        let techList_red  = unique_red.join('<br>');

        $('#cvc-output_header').html("The following volume of detections & tests are available from the selected control sets. If you haven't already, <b>consider implementing detections or validation tests for the controls at the top of the list</b> - these are the techniques that have the largest volume of readily-available detections and/or tests.");

        if ($('#lowestLevel').is(":checked")) {
            $('#cvc-output_blue').html(techList_blue_ll);
            $('#cvc-output_red').html(techList_red_ll);
        } else {
            $('#cvc-output_blue').html(techList_blue);
            $('#cvc-output_red').html(techList_red);
        };

    });

	$('#rulesLow').click(function(){

        var allTech = [];
    	var arrayReturn = [];

    	function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        };

        for (i in arrayCvc) {

            var techObj = {};

            if ($('#splunk').is(":checked")) {
                splunk = arrayCvc[i].splunk;
                splunkDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#splunk">Splunk</a>: ' + arrayCvc[i].splunk + '<br>';
            } else {
                splunk = 0;
                splunkDetails = ""
            };

            if ($('#splunk_threatHunting').is(":checked")) {
                splunk_threatHunting = arrayCvc[i].splunk_threatHunting;
                splunk_threatHuntingDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#splunk_threatHunting">ThreatHunting Splunk app</a>: ' + arrayCvc[i].splunk_threatHunting + '<br>';
            } else {
                splunk_threatHunting = 0;
                splunk_threatHuntingDetails = "";
            };

            if ($('#elastic').is(":checked")) {
                elastic = arrayCvc[i].elastic;
                elasticDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#elastic">Elastic Stack</a>: ' + arrayCvc[i].elastic + '<br>';
            } else {
                elastic = 0;
                elasticDetails = "";
            };

            if ($('#eql_analytics').is(":checked")) {
                eql_analytics = arrayCvc[i].eql_analytics;
                eql_analyticsDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#eql_analytics">EQL Analytics Library</a>: ' + arrayCvc[i].eql_analytics + '<br>';
            } else {
                eql_analytics = 0;
                eql_analyticsDetails = "";
            };

            if ($('#azure_fullStack').is(":checked")) {
                azure_fullStack = arrayCvc[i].azure_fullStack;
                azure_fullStackDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#azure_fullStack">Azure full stack mappings</a>: ' + arrayCvc[i].azure_fullStack + '<br>';
            } else {
                azure_fullStack = 0;
                azure_fullStackDetails = "";
            };

            if ($('#azure_sentinel').is(":checked")) {
                azure_sentinel = arrayCvc[i].azure_sentinel;
                azure_sentinelDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#azure_sentinel">Sentinel detection mappings</a>: ' + arrayCvc[i].azure_sentinel + '<br>';
            } else {
                azure_sentinel = 0;
                azure_sentinelDetails = "";
            };

            if ($('#logpoint').is(":checked")) {
                logpoint = arrayCvc[i].logpoint;
                logpointDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#logpoint">LogPoint</a>: ' + arrayCvc[i].logpoint + '<br>';
            } else {
                logpoint = 0;
                logpointDetails = "";
            };

            if ($('#proofpoint_emergingThreats').is(":checked")) {
                proofpoint_emergingThreats = arrayCvc[i].proofpoint_emergingThreats;
                proofpoint_emergingThreatsDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#proofpoint_emergingThreats">Network Security Monitoring rule mappings</a>: ' + arrayCvc[i].proofpoint_emergingThreats + '<br>';
            } else {
                proofpoint_emergingThreats = 0;
                proofpoint_emergingThreatsDetails = "";
            };

            if ($('#tanium_threatResponse').is(":checked")) {
                tanium_threatResponse = arrayCvc[i].tanium_threatResponse;
                tanium_threatResponseDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#tanium_threatResponse">Tanium Threat Response</a>: ' + arrayCvc[i].tanium_threatResponse + '<br>';
            } else {
                tanium_threatResponse = 0;
                tanium_threatResponseDetails = "";
            };

            if ($('#aws').is(":checked")) {
                aws = arrayCvc[i].aws;
                awsDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#aws">AWS security control mappings</a>: ' + arrayCvc[i].aws + '<br>';
            } else {
                aws = 0;
                awsDetails = "";
            };

            if ($('#gcp').is(":checked")) {
                gcp = arrayCvc[i].gcp;
                gcpDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#gcp">GCP Community Security Analytics</a>: ' + arrayCvc[i].gcp + '<br>';
            } else {
                gcp = 0;
                gcpDetails = "";
            };

            if ($('#car').is(":checked")) {
                car = arrayCvc[i].car;
                carDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#car">Cyber Analytics Repository</a>: ' + arrayCvc[i].car + '<br>';
            } else {
                car = 0;
                carDetails = "";
            };

            if ($('#atc').is(":checked")) {
                atc = arrayCvc[i].atc;
                atcDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#atc">Atomic Threat Coverage</a>: ' + arrayCvc[i].atc + '<br>';
            } else {
                atc = 0;
                atcDetails = "";
            };

            if ($('#sigma').is(":checked")) {
                sigma = arrayCvc[i].sigma;
                sigmaDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#sigma">Sigma rules public repository</a>: ' + arrayCvc[i].sigma + '<br>';
            } else {
                sigma = 0;
                sigmaDetails = "";
            };

            if ($('#th_playbook').is(":checked")) {
                th_playbook = arrayCvc[i].th_playbook;
                th_playbookDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#th_playbook">ThreatHunter Playbook</a>: ' + arrayCvc[i].th_playbook + '<br>';
            } else {
                th_playbook = 0;
                th_playbookDetails = "";
            };

            if ($('#art').is(":checked")) {
                art = arrayCvc[i].art;
                artDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#art">Atomic Red Team</a>: ' + arrayCvc[i].art + '<br>';
            } else {
                art = 0;
                artDetails = "";
            };

            if ($('#car_red').is(":checked")) {
                car_red = arrayCvc[i].car_red;
                car_redDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#car_red">Cyber Analytics Repository</a>: ' + arrayCvc[i].car + '<br>';
            } else {
                car_red = 0;
                car_redDetails = "";
            };

            if ($('#rta').is(":checked")) {
                rta = arrayCvc[i].rta;
                rtaDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#rta">Red Team Automation</a>: ' + arrayCvc[i].rta + '<br>';
            } else {
                rta = 0;
                rtaDetails = "";
            };

            if ($('#prelude').is(":checked")) {
                prelude = arrayCvc[i].prelude;
                preludeDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#prelude">Prelude Community TTPs</a>: ' + arrayCvc[i].prelude + '<br>';
            } else {
                prelude = 0;
                preludeDetails = "";
            };

            if ($('#stockpile').is(":checked")) {
                stockpile = arrayCvc[i].stockpile;
                stockpileDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#stockpile">CALDERA Stockpile</a>: ' + arrayCvc[i].stockpile + '<br>';
            } else {
                stockpile = 0;
                stockpileDetails = "";
            };

            if ($('#scythe').is(":checked")) {
                scythe = arrayCvc[i].scythe;
                scytheDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#scythe">Scythe</a>: ' + arrayCvc[i].scythe + '<br>';
            } else {
                scythe = 0;
                scytheDetails = "";
            };

            techObj.value = arrayCvc[i].technique
            techObj.techID = arrayCvc[i].techID
            techObj.techName = arrayCvc[i].techName
            techObj.tactics = arrayCvc[i].tactics
            techObj.url = arrayCvc[i].url
            techObj.lowestLevel = arrayCvc[i].lowestLevel

            techObj.splunk = arrayCvc[i].splunk
            techObj.splunk_threatHunting = arrayCvc[i].splunk_threatHunting
            techObj.elastic = arrayCvc[i].elastic
            techObj.eql_analytics = arrayCvc[i].eql_analytics
            techObj.azure_fullStack = arrayCvc[i].azure_fullStack
            techObj.azure_sentinel = arrayCvc[i].azure_sentinel
            techObj.logpoint = arrayCvc[i].logpoint
            techObj.proofpoint_emergingThreats = arrayCvc[i].proofpoint_emergingThreats
            techObj.tanium_threatResponse = arrayCvc[i].tanium_threatResponse
            techObj.aws = arrayCvc[i].aws
            techObj.gcp = arrayCvc[i].gcp
            techObj.car = arrayCvc[i].car
            techObj.atc = arrayCvc[i].atc
            techObj.sigma = arrayCvc[i].sigma
            techObj.th_playbook = arrayCvc[i].th_playbook
            techObj.splunkDetails = splunkDetails
            techObj.splunk_threatHuntingDetails = splunk_threatHuntingDetails
            techObj.elasticDetails = elasticDetails
            techObj.eql_analyticsDetails = eql_analyticsDetails
            techObj.azure_fullStackDetails = azure_fullStackDetails
            techObj.azure_sentinelDetails = azure_sentinelDetails
            techObj.logpointDetails = logpointDetails
            techObj.proofpoint_emergingThreatsDetails = proofpoint_emergingThreatsDetails
            techObj.tanium_threatResponseDetails = tanium_threatResponseDetails
            techObj.awsDetails = awsDetails
            techObj.gcpDetails = gcpDetails
            techObj.carDetails = carDetails
            techObj.atcDetails = atcDetails
            techObj.sigmaDetails = sigmaDetails
            techObj.th_playbookDetails = th_playbookDetails

            techObj.art = arrayCvc[i].art
            techObj.car_red = arrayCvc[i].car_red
            techObj.rta = arrayCvc[i].rta
            techObj.prelude = arrayCvc[i].prelude
            techObj.stockpile = arrayCvc[i].stockpile
            techObj.scythe = arrayCvc[i].scythe
            techObj.artDetails = artDetails
            techObj.car_redDetails = car_redDetails
            techObj.rtaDetails = rtaDetails
            techObj.preludeDetails = preludeDetails
            techObj.stockpileDetails = stockpileDetails
            techObj.scytheDetails = scytheDetails

            techObj.validate_potential = arrayCvc[i].validate_potential

            techObj.rule_total = splunk + splunk_threatHunting + elastic + eql_analytics + azure_fullStack + azure_sentinel + logpoint + proofpoint_emergingThreats + tanium_threatResponse + aws + gcp + car + atc + sigma + th_playbook
            techObj.detect_volume = arrayCvc[i].detect_volume

            techObj.test_total = art + car_red + rta + prelude + stockpile + scythe
            techObj.test_volume = arrayCvc[i].test_volume

            techObj.ruleTest_total = splunk + splunk_threatHunting + elastic + eql_analytics + azure_fullStack + azure_sentinel + logpoint + proofpoint_emergingThreats + tanium_threatResponse + aws + gcp + car + atc + sigma + th_playbook + art + car_red + rta + prelude + stockpile + scythe

            allTech.push(
                techObj
            );

        };

        allTech.sort((a, b) => a.rule_total - b.rule_total);

        tactics = []

        if ($('#reconnaissance').is(":checked")) {
            reconnaissance = 'Reconnaissance';
        } else {
            reconnaissance = 'noTactic';
        };

        if ($('#resourceDevelopment').is(":checked")) {
            resourceDevelopment = 'Resource Development';
        } else {
            resourceDevelopment = 'noTactic';
        };

        if ($('#initialAccess').is(":checked")) {
            initialAccess = 'Initial Access';
        } else {
            initialAccess = 'noTactic';
        };

        if ($('#defenseEvasion').is(":checked")) {
            defenseEvasion = 'Defense Evasion';
        } else {
            defenseEvasion = 'noTactic';
        };

        if ($('#commandAndControl').is(":checked")) {
            commandAndControl = 'Command and Control';
        } else {
            commandAndControl = 'noTactic';
        };

        if ($('#discovery').is(":checked")) {
            discovery = 'Discovery';
        } else {
            discovery = 'noTactic';
        };

        if ($('#collection').is(":checked")) {
            collection = 'Collection';
        } else {
            collection = 'noTactic';
        };
        if ($('#persistence').is(":checked")) {
            persistence = 'Persistence';
        } else {
            persistence = 'noTactic';
        };
        if ($('#credentialAccess').is(":checked")) {
            credentialAccess = 'Credential Access';
        } else {
            credentialAccess = 'noTactic';
        };
        if ($('#privilegeEscalation').is(":checked")) {
            privilegeEscalation = 'Privilege Escalation';
        } else {
            privilegeEscalation = 'noTactic';
        };
        if ($('#lateralMovement').is(":checked")) {
            lateralMovement = 'Lateral Movement';
        } else {
            lateralMovement = 'noTactic';
        };
        if ($('#execution').is(":checked")) {
            execution = 'Execution';
        } else {
            execution = 'noTactic';
        };
        if ($('#exfiltration').is(":checked")) {
            exfiltration = 'Exfiltration';
        } else {
            exfiltration = 'noTactic';
        };
        if ($('#impact').is(":checked")) {
            impact = 'Impact';
        } else {
            impact = 'noTactic';
        };

        arrayTech_blue_ll = []
        arrayTech_red_ll = []

        arrayTech_blue_ll.push('<h4 style="color:#1565c0;text-align:center"><strong>Detection Rules</strong></h4>')
        arrayTech_red_ll.push('<h4 style="color:#bf2026ff;text-align:center"><strong>Offensive Tests</strong></h4>')

        arrayTech_blue = []
        arrayTech_red = []

        arrayTech_blue.push('<h4 style="color:#1565c0;text-align:center"><strong>Detection Rules</strong></h4>')
        arrayTech_red.push('<h4 style="color:#bf2026ff;text-align:center"><strong>Offensive Tests</strong></h4>')

        for (item in allTech) {
            if (allTech[item].tactics.includes(reconnaissance) || allTech[item].tactics.includes(resourceDevelopment) || allTech[item].tactics.includes(initialAccess) || allTech[item].tactics.includes(defenseEvasion) || allTech[item].tactics.includes(commandAndControl) || allTech[item].tactics.includes(discovery) || allTech[item].tactics.includes(collection) || allTech[item].tactics.includes(persistence) || allTech[item].tactics.includes(credentialAccess) || allTech[item].tactics.includes(privilegeEscalation) || allTech[item].tactics.includes(lateralMovement) || allTech[item].tactics.includes(execution) || allTech[item].tactics.includes(exfiltration) || allTech[item].tactics.includes(impact)) {
                if (allTech[item].lowestLevel == 'y') {

                    rulesDetails = []
                    testDetails = []

                    rulesDetails.push('<p style="margin-left:24px;padding:6px 6px 6px 150px">' +
                                      allTech[item].splunkDetails +
                                      allTech[item].splunk_threatHuntingDetails +
                                      allTech[item].elasticDetails +
                                      allTech[item].eql_analyticsDetails +
                                      allTech[item].azure_sentinelDetails +
                                      allTech[item].logpointDetails +
                                      allTech[item].proofpoint_emergingThreatsDetails +
                                      allTech[item].tanium_threatResponseDetails +
                                      allTech[item].azure_fullStackDetails +
                                      allTech[item].awsDetails +
                                      allTech[item].gcpDetails +
                                      allTech[item].carDetails +
                                      allTech[item].atcDetails +
                                      allTech[item].sigmaDetails +
                                      allTech[item].th_playbookDetails +
                                      '</p>'
                    )

                    testDetails.push('<p style="margin-left:24px;padding:6px 6px 6px 150px">' +
                                      allTech[item].artDetails +
                                      allTech[item].car_redDetails +
                                      allTech[item].rtaDetails +
                                      allTech[item].preludeDetails +
                                      allTech[item].stockpileDetails +
                                      allTech[item].scytheDetails +
                                      '</p>'
                    )

                    arrayTech_blue_ll.push(
                        '<details><summary class="summary output_blue" style="padding:3px 3px 3px 150px"><a target="_blank" style="color:#1565c0;text-decoration:underline" href="' +
                        allTech[item].url + '">' +
                        allTech[item].techID +
                        ' (' + allTech[item].techName +
                        ')</a>' + ': ' +
                        allTech[item].rule_total +
                        '</summary>' +
                        rulesDetails +
                        '</details>'
                    )

                    arrayTech_red_ll.push(
                        '<details><summary class="summary output_red" style="padding:3px 3px 3px 150px"><a target="_blank" style="color:#bf2026ff;text-decoration:underline" href="' +
                        allTech[item].url + '">' +
                        allTech[item].techID +
                        ' (' + allTech[item].techName +
                        ')</a>' + ': ' +
                        allTech[item].test_total +
                        '</summary>' +
                        testDetails +
                        '</details>'
                    )

                }

                rulesDetails = []
                testDetails = []

                rulesDetails.push('<p style="margin-left:24px;padding:6px 6px 6px 150px">' +
                                  allTech[item].splunkDetails +
                                  allTech[item].splunk_threatHuntingDetails +
                                  allTech[item].elasticDetails +
                                  allTech[item].eql_analyticsDetails +
                                  allTech[item].azure_sentinelDetails +
                                  allTech[item].logpointDetails +
                                  allTech[item].proofpoint_emergingThreatsDetails +
                                  allTech[item].tanium_threatResponseDetails +
                                  allTech[item].azure_fullStackDetails +
                                  allTech[item].awsDetails +
                                  allTech[item].gcpDetails +
                                  allTech[item].carDetails +
                                  allTech[item].atcDetails +
                                  allTech[item].sigmaDetails +
                                  allTech[item].th_playbookDetails +
                                  '</p>'
                )

                testDetails.push('<p style="margin-left:24px;padding:6px 6px 6px 150px">' +
                                  allTech[item].artDetails +
                                  allTech[item].car_redDetails +
                                  allTech[item].rtaDetails +
                                  allTech[item].preludeDetails +
                                  allTech[item].stockpileDetails +
                                  allTech[item].scytheDetails +
                                  '</p>'
                )

                arrayTech_blue.push(
                    '<details><summary class="summary output_blue" style="padding:3px 3px 3px 150px"><a target="_blank" style="color:#1565c0;text-decoration:underline" href="' +
                    allTech[item].url + '">' +
                    allTech[item].techID +
                    ' (' + allTech[item].techName +
                    ')</a>' + ': ' +
                    allTech[item].rule_total +
                    '</summary>' +
                    rulesDetails +
                    '</details>'
                )

                arrayTech_red.push(
                    '<details><summary class="summary output_red" style="padding:3px 3px 3px 150px"><a target="_blank" style="color:#bf2026ff;text-decoration:underline" href="' +
                    allTech[item].url + '">' +
                    allTech[item].techID +
                    ' (' + allTech[item].techName +
                    ')</a>' + ': ' +
                    allTech[item].test_total +
                    '</summary>' +
                    testDetails +
                    '</details>'
                )

            }
        }

        unique_blue_ll = arrayTech_blue_ll.filter(onlyUnique)
        unique_red_ll = arrayTech_red_ll.filter(onlyUnique)

        let techList_blue_ll  = unique_blue_ll.join('<br>');
        let techList_red_ll  = unique_red_ll.join('<br>');

        unique_blue = arrayTech_blue.filter(onlyUnique)
        unique_red = arrayTech_red.filter(onlyUnique)

        let techList_blue  = unique_blue.join('<br>');
        let techList_red  = unique_red.join('<br>');

        $('#cvc-output_header').html("The following volume of detections & tests are available from the selected control sets. If you haven't already, <b>consider implementing detections or validation tests for the controls at the top of the list</b> - these are the techniques that have the largest volume of readily-available detections and/or tests.");

        if ($('#lowestLevel').is(":checked")) {
            $('#cvc-output_blue').html(techList_blue_ll);
            $('#cvc-output_red').html(techList_red_ll);
        } else {
            $('#cvc-output_blue').html(techList_blue);
            $('#cvc-output_red').html(techList_red);
        };

    });

	$('#rulesHigh').click(function(){

        var allTech = [];
    	var arrayReturn = [];

    	function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        };

        for (i in arrayCvc) {

            var techObj = {};

            if ($('#splunk').is(":checked")) {
                splunk = arrayCvc[i].splunk;
                splunkDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#splunk">Splunk</a>: ' + arrayCvc[i].splunk + '<br>';
            } else {
                splunk = 0;
                splunkDetails = ""
            };

            if ($('#splunk_threatHunting').is(":checked")) {
                splunk_threatHunting = arrayCvc[i].splunk_threatHunting;
                splunk_threatHuntingDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#splunk_threatHunting">ThreatHunting Splunk app</a>: ' + arrayCvc[i].splunk_threatHunting + '<br>';
            } else {
                splunk_threatHunting = 0;
                splunk_threatHuntingDetails = "";
            };

            if ($('#elastic').is(":checked")) {
                elastic = arrayCvc[i].elastic;
                elasticDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#elastic">Elastic Stack</a>: ' + arrayCvc[i].elastic + '<br>';
            } else {
                elastic = 0;
                elasticDetails = "";
            };

            if ($('#eql_analytics').is(":checked")) {
                eql_analytics = arrayCvc[i].eql_analytics;
                eql_analyticsDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#eql_analytics">EQL Analytics Library</a>: ' + arrayCvc[i].eql_analytics + '<br>';
            } else {
                eql_analytics = 0;
                eql_analyticsDetails = "";
            };

            if ($('#azure_fullStack').is(":checked")) {
                azure_fullStack = arrayCvc[i].azure_fullStack;
                azure_fullStackDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#azure_fullStack">Azure full stack mappings</a>: ' + arrayCvc[i].azure_fullStack + '<br>';
            } else {
                azure_fullStack = 0;
                azure_fullStackDetails = "";
            };

            if ($('#azure_sentinel').is(":checked")) {
                azure_sentinel = arrayCvc[i].azure_sentinel;
                azure_sentinelDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#azure_sentinel">Sentinel detection mappings</a>: ' + arrayCvc[i].azure_sentinel + '<br>';
            } else {
                azure_sentinel = 0;
                azure_sentinelDetails = "";
            };

            if ($('#logpoint').is(":checked")) {
                logpoint = arrayCvc[i].logpoint;
                logpointDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#logpoint">LogPoint</a>: ' + arrayCvc[i].logpoint + '<br>';
            } else {
                logpoint = 0;
                logpointDetails = "";
            };

            if ($('#proofpoint_emergingThreats').is(":checked")) {
                proofpoint_emergingThreats = arrayCvc[i].proofpoint_emergingThreats;
                proofpoint_emergingThreatsDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#proofpoint_emergingThreats">Network Security Monitoring rule mappings</a>: ' + arrayCvc[i].proofpoint_emergingThreats + '<br>';
            } else {
                proofpoint_emergingThreats = 0;
                proofpoint_emergingThreatsDetails = "";
            };

            if ($('#tanium_threatResponse').is(":checked")) {
                tanium_threatResponse = arrayCvc[i].tanium_threatResponse;
                tanium_threatResponseDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#tanium_threatResponse">Tanium Threat Response</a>: ' + arrayCvc[i].tanium_threatResponse + '<br>';
            } else {
                tanium_threatResponse = 0;
                tanium_threatResponseDetails = "";
            };

            if ($('#aws').is(":checked")) {
                aws = arrayCvc[i].aws;
                awsDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#aws">AWS security control mappings</a>: ' + arrayCvc[i].aws + '<br>';
            } else {
                aws = 0;
                awsDetails = "";
            };

            if ($('#gcp').is(":checked")) {
                gcp = arrayCvc[i].gcp;
                gcpDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#gcp">GCP Community Security Analytics</a>: ' + arrayCvc[i].gcp + '<br>';
            } else {
                gcp = 0;
                gcpDetails = "";
            };

            if ($('#car').is(":checked")) {
                car = arrayCvc[i].car;
                carDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#car">Cyber Analytics Repository</a>: ' + arrayCvc[i].car + '<br>';
            } else {
                car = 0;
                carDetails = "";
            };

            if ($('#atc').is(":checked")) {
                atc = arrayCvc[i].atc;
                atcDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#atc">Atomic Threat Coverage</a>: ' + arrayCvc[i].atc + '<br>';
            } else {
                atc = 0;
                atcDetails = "";
            };

            if ($('#sigma').is(":checked")) {
                sigma = arrayCvc[i].sigma;
                sigmaDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#sigma">Sigma rules public repository</a>: ' + arrayCvc[i].sigma + '<br>';
            } else {
                sigma = 0;
                sigmaDetails = "";
            };

            if ($('#th_playbook').is(":checked")) {
                th_playbook = arrayCvc[i].th_playbook;
                th_playbookDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#th_playbook">ThreatHunter Playbook</a>: ' + arrayCvc[i].th_playbook + '<br>';
            } else {
                th_playbook = 0;
                th_playbookDetails = "";
            };

            if ($('#art').is(":checked")) {
                art = arrayCvc[i].art;
                artDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#art">Atomic Red Team</a>: ' + arrayCvc[i].art + '<br>';
            } else {
                art = 0;
                artDetails = "";
            };

            if ($('#car_red').is(":checked")) {
                car_red = arrayCvc[i].car_red;
                car_redDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#car_red">Cyber Analytics Repository</a>: ' + arrayCvc[i].car + '<br>';
            } else {
                car_red = 0;
                car_redDetails = "";
            };

            if ($('#rta').is(":checked")) {
                rta = arrayCvc[i].rta;
                rtaDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#rta">Red Team Automation</a>: ' + arrayCvc[i].rta + '<br>';
            } else {
                rta = 0;
                rtaDetails = "";
            };

            if ($('#prelude').is(":checked")) {
                prelude = arrayCvc[i].prelude;
                preludeDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#prelude">Prelude Community TTPs</a>: ' + arrayCvc[i].prelude + '<br>';
            } else {
                prelude = 0;
                preludeDetails = "";
            };

            if ($('#stockpile').is(":checked")) {
                stockpile = arrayCvc[i].stockpile;
                stockpileDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#stockpile">CALDERA Stockpile</a>: ' + arrayCvc[i].stockpile + '<br>';
            } else {
                stockpile = 0;
                stockpileDetails = "";
            };

            if ($('#scythe').is(":checked")) {
                scythe = arrayCvc[i].scythe;
                scytheDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#scythe">Scythe</a>: ' + arrayCvc[i].scythe + '<br>';
            } else {
                scythe = 0;
                scytheDetails = "";
            };

            techObj.value = arrayCvc[i].technique
            techObj.techID = arrayCvc[i].techID
            techObj.techName = arrayCvc[i].techName
            techObj.tactics = arrayCvc[i].tactics
            techObj.url = arrayCvc[i].url
            techObj.lowestLevel = arrayCvc[i].lowestLevel

            techObj.splunk = arrayCvc[i].splunk
            techObj.splunk_threatHunting = arrayCvc[i].splunk_threatHunting
            techObj.elastic = arrayCvc[i].elastic
            techObj.eql_analytics = arrayCvc[i].eql_analytics
            techObj.azure_fullStack = arrayCvc[i].azure_fullStack
            techObj.azure_sentinel = arrayCvc[i].azure_sentinel
            techObj.logpoint = arrayCvc[i].logpoint
            techObj.proofpoint_emergingThreats = arrayCvc[i].proofpoint_emergingThreats
            techObj.tanium_threatResponse = arrayCvc[i].tanium_threatResponse
            techObj.aws = arrayCvc[i].aws
            techObj.gcp = arrayCvc[i].gcp
            techObj.car = arrayCvc[i].car
            techObj.atc = arrayCvc[i].atc
            techObj.sigma = arrayCvc[i].sigma
            techObj.th_playbook = arrayCvc[i].th_playbook
            techObj.splunkDetails = splunkDetails
            techObj.splunk_threatHuntingDetails = splunk_threatHuntingDetails
            techObj.elasticDetails = elasticDetails
            techObj.eql_analyticsDetails = eql_analyticsDetails
            techObj.azure_fullStackDetails = azure_fullStackDetails
            techObj.azure_sentinelDetails = azure_sentinelDetails
            techObj.logpointDetails = logpointDetails
            techObj.proofpoint_emergingThreatsDetails = proofpoint_emergingThreatsDetails
            techObj.tanium_threatResponseDetails = tanium_threatResponseDetails
            techObj.awsDetails = awsDetails
            techObj.gcpDetails = gcpDetails
            techObj.carDetails = carDetails
            techObj.atcDetails = atcDetails
            techObj.sigmaDetails = sigmaDetails
            techObj.th_playbookDetails = th_playbookDetails

            techObj.art = arrayCvc[i].art
            techObj.car_red = arrayCvc[i].car_red
            techObj.rta = arrayCvc[i].rta
            techObj.prelude = arrayCvc[i].prelude
            techObj.stockpile = arrayCvc[i].stockpile
            techObj.scythe = arrayCvc[i].scythe
            techObj.artDetails = artDetails
            techObj.car_redDetails = car_redDetails
            techObj.rtaDetails = rtaDetails
            techObj.preludeDetails = preludeDetails
            techObj.stockpileDetails = stockpileDetails
            techObj.scytheDetails = scytheDetails

            techObj.validate_potential = arrayCvc[i].validate_potential

            techObj.rule_total = splunk + splunk_threatHunting + elastic + eql_analytics + azure_fullStack + azure_sentinel + logpoint + proofpoint_emergingThreats + tanium_threatResponse + aws + gcp + car + atc + sigma + th_playbook
            techObj.detect_volume = arrayCvc[i].detect_volume

            techObj.test_total = art + car_red + rta + prelude + stockpile + scythe
            techObj.test_volume = arrayCvc[i].test_volume

            techObj.ruleTest_total = splunk + splunk_threatHunting + elastic + eql_analytics + azure_fullStack + azure_sentinel + logpoint + proofpoint_emergingThreats + tanium_threatResponse + aws + gcp + car + atc + sigma + th_playbook + art + car_red + rta + prelude + stockpile + scythe

            allTech.push(
                techObj
            );

        };

        allTech.sort((a, b) => b.rule_total - a.rule_total);

        tactics = []

        if ($('#reconnaissance').is(":checked")) {
            reconnaissance = 'Reconnaissance';
        } else {
            reconnaissance = 'noTactic';
        };

        if ($('#resourceDevelopment').is(":checked")) {
            resourceDevelopment = 'Resource Development';
        } else {
            resourceDevelopment = 'noTactic';
        };

        if ($('#initialAccess').is(":checked")) {
            initialAccess = 'Initial Access';
        } else {
            initialAccess = 'noTactic';
        };

        if ($('#defenseEvasion').is(":checked")) {
            defenseEvasion = 'Defense Evasion';
        } else {
            defenseEvasion = 'noTactic';
        };

        if ($('#commandAndControl').is(":checked")) {
            commandAndControl = 'Command and Control';
        } else {
            commandAndControl = 'noTactic';
        };

        if ($('#discovery').is(":checked")) {
            discovery = 'Discovery';
        } else {
            discovery = 'noTactic';
        };

        if ($('#collection').is(":checked")) {
            collection = 'Collection';
        } else {
            collection = 'noTactic';
        };
        if ($('#persistence').is(":checked")) {
            persistence = 'Persistence';
        } else {
            persistence = 'noTactic';
        };
        if ($('#credentialAccess').is(":checked")) {
            credentialAccess = 'Credential Access';
        } else {
            credentialAccess = 'noTactic';
        };
        if ($('#privilegeEscalation').is(":checked")) {
            privilegeEscalation = 'Privilege Escalation';
        } else {
            privilegeEscalation = 'noTactic';
        };
        if ($('#lateralMovement').is(":checked")) {
            lateralMovement = 'Lateral Movement';
        } else {
            lateralMovement = 'noTactic';
        };
        if ($('#execution').is(":checked")) {
            execution = 'Execution';
        } else {
            execution = 'noTactic';
        };
        if ($('#exfiltration').is(":checked")) {
            exfiltration = 'Exfiltration';
        } else {
            exfiltration = 'noTactic';
        };
        if ($('#impact').is(":checked")) {
            impact = 'Impact';
        } else {
            impact = 'noTactic';
        };

        arrayTech_blue_ll = []
        arrayTech_red_ll = []

        arrayTech_blue_ll.push('<h4 style="color:#1565c0;text-align:center"><strong>Detection Rules</strong></h4>')
        arrayTech_red_ll.push('<h4 style="color:#bf2026ff;text-align:center"><strong>Offensive Tests</strong></h4>')

        arrayTech_blue = []
        arrayTech_red = []

        arrayTech_blue.push('<h4 style="color:#1565c0;text-align:center"><strong>Detection Rules</strong></h4>')
        arrayTech_red.push('<h4 style="color:#bf2026ff;text-align:center"><strong>Offensive Tests</strong></h4>')

        for (item in allTech) {
            if (allTech[item].tactics.includes(reconnaissance) || allTech[item].tactics.includes(resourceDevelopment) || allTech[item].tactics.includes(initialAccess) || allTech[item].tactics.includes(defenseEvasion) || allTech[item].tactics.includes(commandAndControl) || allTech[item].tactics.includes(discovery) || allTech[item].tactics.includes(collection) || allTech[item].tactics.includes(persistence) || allTech[item].tactics.includes(credentialAccess) || allTech[item].tactics.includes(privilegeEscalation) || allTech[item].tactics.includes(lateralMovement) || allTech[item].tactics.includes(execution) || allTech[item].tactics.includes(exfiltration) || allTech[item].tactics.includes(impact)) {
                if (allTech[item].lowestLevel == 'y') {

                    rulesDetails = []
                    testDetails = []

                    rulesDetails.push('<p style="margin-left:24px;padding:6px 6px 6px 150px">' +
                                      allTech[item].splunkDetails +
                                      allTech[item].splunk_threatHuntingDetails +
                                      allTech[item].elasticDetails +
                                      allTech[item].eql_analyticsDetails +
                                      allTech[item].azure_sentinelDetails +
                                      allTech[item].logpointDetails +
                                      allTech[item].proofpoint_emergingThreatsDetails +
                                      allTech[item].tanium_threatResponseDetails +
                                      allTech[item].azure_fullStackDetails +
                                      allTech[item].awsDetails +
                                      allTech[item].gcpDetails +
                                      allTech[item].carDetails +
                                      allTech[item].atcDetails +
                                      allTech[item].sigmaDetails +
                                      allTech[item].th_playbookDetails +
                                      '</p>'
                    )

                    testDetails.push('<p style="margin-left:24px;padding:6px 6px 6px 150px">' +
                                      allTech[item].artDetails +
                                      allTech[item].car_redDetails +
                                      allTech[item].rtaDetails +
                                      allTech[item].preludeDetails +
                                      allTech[item].stockpileDetails +
                                      allTech[item].scytheDetails +
                                      '</p>'
                    )

                    arrayTech_blue_ll.push(
                        '<details><summary class="summary output_blue" style="padding:3px 3px 3px 150px"><a target="_blank" style="color:#1565c0;text-decoration:underline" href="' +
                        allTech[item].url + '">' +
                        allTech[item].techID +
                        ' (' + allTech[item].techName +
                        ')</a>' + ': ' +
                        allTech[item].rule_total +
                        '</summary>' +
                        rulesDetails +
                        '</details>'
                    )

                    arrayTech_red_ll.push(
                        '<details><summary class="summary output_red" style="padding:3px 3px 3px 150px"><a target="_blank" style="color:#bf2026ff;text-decoration:underline" href="' +
                        allTech[item].url + '">' +
                        allTech[item].techID +
                        ' (' + allTech[item].techName +
                        ')</a>' + ': ' +
                        allTech[item].test_total +
                        '</summary>' +
                        testDetails +
                        '</details>'
                    )

                }

                rulesDetails = []
                testDetails = []

                rulesDetails.push('<p style="margin-left:24px;padding:6px 6px 6px 150px">' +
                                  allTech[item].splunkDetails +
                                  allTech[item].splunk_threatHuntingDetails +
                                  allTech[item].elasticDetails +
                                  allTech[item].eql_analyticsDetails +
                                  allTech[item].azure_sentinelDetails +
                                  allTech[item].logpointDetails +
                                  allTech[item].proofpoint_emergingThreatsDetails +
                                  allTech[item].tanium_threatResponseDetails +
                                  allTech[item].azure_fullStackDetails +
                                  allTech[item].awsDetails +
                                  allTech[item].gcpDetails +
                                  allTech[item].carDetails +
                                  allTech[item].atcDetails +
                                  allTech[item].sigmaDetails +
                                  allTech[item].th_playbookDetails +
                                  '</p>'
                )

                testDetails.push('<p style="margin-left:24px;padding:6px 6px 6px 150px">' +
                                  allTech[item].artDetails +
                                  allTech[item].car_redDetails +
                                  allTech[item].rtaDetails +
                                  allTech[item].preludeDetails +
                                  allTech[item].stockpileDetails +
                                  allTech[item].scytheDetails +
                                  '</p>'
                )

                arrayTech_blue.push(
                    '<details><summary class="summary output_blue" style="padding:3px 3px 3px 150px"><a target="_blank" style="color:#1565c0;text-decoration:underline" href="' +
                    allTech[item].url + '">' +
                    allTech[item].techID +
                    ' (' + allTech[item].techName +
                    ')</a>' + ': ' +
                    allTech[item].rule_total +
                    '</summary>' +
                    rulesDetails +
                    '</details>'
                )

                arrayTech_red.push(
                    '<details><summary class="summary output_red" style="padding:3px 3px 3px 150px"><a target="_blank" style="color:#bf2026ff;text-decoration:underline" href="' +
                    allTech[item].url + '">' +
                    allTech[item].techID +
                    ' (' + allTech[item].techName +
                    ')</a>' + ': ' +
                    allTech[item].test_total +
                    '</summary>' +
                    testDetails +
                    '</details>'
                )

            }
        }

        unique_blue_ll = arrayTech_blue_ll.filter(onlyUnique)
        unique_red_ll = arrayTech_red_ll.filter(onlyUnique)

        let techList_blue_ll  = unique_blue_ll.join('<br>');
        let techList_red_ll  = unique_red_ll.join('<br>');

        unique_blue = arrayTech_blue.filter(onlyUnique)
        unique_red = arrayTech_red.filter(onlyUnique)

        let techList_blue  = unique_blue.join('<br>');
        let techList_red  = unique_red.join('<br>');

        $('#cvc-output_header').html("The following volume of detections & tests are available from the selected control sets. If you haven't already, <b>consider implementing detections or validation tests for the controls at the top of the list</b> - these are the techniques that have the largest volume of readily-available detections and/or tests.");

        if ($('#lowestLevel').is(":checked")) {
            $('#cvc-output_blue').html(techList_blue_ll);
            $('#cvc-output_red').html(techList_red_ll);
        } else {
            $('#cvc-output_blue').html(techList_blue);
            $('#cvc-output_red').html(techList_red);
        };

    });

	$('#testsLow').click(function(){

        var allTech = [];
    	var arrayReturn = [];

    	function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        };

        for (i in arrayCvc) {

            var techObj = {};

            if ($('#splunk').is(":checked")) {
                splunk = arrayCvc[i].splunk;
                splunkDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#splunk">Splunk</a>: ' + arrayCvc[i].splunk + '<br>';
            } else {
                splunk = 0;
                splunkDetails = ""
            };

            if ($('#splunk_threatHunting').is(":checked")) {
                splunk_threatHunting = arrayCvc[i].splunk_threatHunting;
                splunk_threatHuntingDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#splunk_threatHunting">ThreatHunting Splunk app</a>: ' + arrayCvc[i].splunk_threatHunting + '<br>';
            } else {
                splunk_threatHunting = 0;
                splunk_threatHuntingDetails = "";
            };

            if ($('#elastic').is(":checked")) {
                elastic = arrayCvc[i].elastic;
                elasticDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#elastic">Elastic Stack</a>: ' + arrayCvc[i].elastic + '<br>';
            } else {
                elastic = 0;
                elasticDetails = "";
            };

            if ($('#eql_analytics').is(":checked")) {
                eql_analytics = arrayCvc[i].eql_analytics;
                eql_analyticsDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#eql_analytics">EQL Analytics Library</a>: ' + arrayCvc[i].eql_analytics + '<br>';
            } else {
                eql_analytics = 0;
                eql_analyticsDetails = "";
            };

            if ($('#azure_fullStack').is(":checked")) {
                azure_fullStack = arrayCvc[i].azure_fullStack;
                azure_fullStackDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#azure_fullStack">Azure full stack mappings</a>: ' + arrayCvc[i].azure_fullStack + '<br>';
            } else {
                azure_fullStack = 0;
                azure_fullStackDetails = "";
            };

            if ($('#azure_sentinel').is(":checked")) {
                azure_sentinel = arrayCvc[i].azure_sentinel;
                azure_sentinelDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#azure_sentinel">Sentinel detection mappings</a>: ' + arrayCvc[i].azure_sentinel + '<br>';
            } else {
                azure_sentinel = 0;
                azure_sentinelDetails = "";
            };

            if ($('#logpoint').is(":checked")) {
                logpoint = arrayCvc[i].logpoint;
                logpointDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#logpoint">LogPoint</a>: ' + arrayCvc[i].logpoint + '<br>';
            } else {
                logpoint = 0;
                logpointDetails = "";
            };

            if ($('#proofpoint_emergingThreats').is(":checked")) {
                proofpoint_emergingThreats = arrayCvc[i].proofpoint_emergingThreats;
                proofpoint_emergingThreatsDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#proofpoint_emergingThreats">Network Security Monitoring rule mappings</a>: ' + arrayCvc[i].proofpoint_emergingThreats + '<br>';
            } else {
                proofpoint_emergingThreats = 0;
                proofpoint_emergingThreatsDetails = "";
            };

            if ($('#tanium_threatResponse').is(":checked")) {
                tanium_threatResponse = arrayCvc[i].tanium_threatResponse;
                tanium_threatResponseDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#tanium_threatResponse">Tanium Threat Response</a>: ' + arrayCvc[i].tanium_threatResponse + '<br>';
            } else {
                tanium_threatResponse = 0;
                tanium_threatResponseDetails = "";
            };

            if ($('#aws').is(":checked")) {
                aws = arrayCvc[i].aws;
                awsDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#aws">AWS security control mappings</a>: ' + arrayCvc[i].aws + '<br>';
            } else {
                aws = 0;
                awsDetails = "";
            };

            if ($('#gcp').is(":checked")) {
                gcp = arrayCvc[i].gcp;
                gcpDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#gcp">GCP Community Security Analytics</a>: ' + arrayCvc[i].gcp + '<br>';
            } else {
                gcp = 0;
                gcpDetails = "";
            };

            if ($('#car').is(":checked")) {
                car = arrayCvc[i].car;
                carDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#car">Cyber Analytics Repository</a>: ' + arrayCvc[i].car + '<br>';
            } else {
                car = 0;
                carDetails = "";
            };

            if ($('#atc').is(":checked")) {
                atc = arrayCvc[i].atc;
                atcDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#atc">Atomic Threat Coverage</a>: ' + arrayCvc[i].atc + '<br>';
            } else {
                atc = 0;
                atcDetails = "";
            };

            if ($('#sigma').is(":checked")) {
                sigma = arrayCvc[i].sigma;
                sigmaDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#sigma">Sigma rules public repository</a>: ' + arrayCvc[i].sigma + '<br>';
            } else {
                sigma = 0;
                sigmaDetails = "";
            };

            if ($('#th_playbook').is(":checked")) {
                th_playbook = arrayCvc[i].th_playbook;
                th_playbookDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#th_playbook">ThreatHunter Playbook</a>: ' + arrayCvc[i].th_playbook + '<br>';
            } else {
                th_playbook = 0;
                th_playbookDetails = "";
            };

            if ($('#art').is(":checked")) {
                art = arrayCvc[i].art;
                artDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#art">Atomic Red Team</a>: ' + arrayCvc[i].art + '<br>';
            } else {
                art = 0;
                artDetails = "";
            };

            if ($('#car_red').is(":checked")) {
                car_red = arrayCvc[i].car_red;
                car_redDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#car_red">Cyber Analytics Repository</a>: ' + arrayCvc[i].car + '<br>';
            } else {
                car_red = 0;
                car_redDetails = "";
            };

            if ($('#rta').is(":checked")) {
                rta = arrayCvc[i].rta;
                rtaDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#rta">Red Team Automation</a>: ' + arrayCvc[i].rta + '<br>';
            } else {
                rta = 0;
                rtaDetails = "";
            };

            if ($('#prelude').is(":checked")) {
                prelude = arrayCvc[i].prelude;
                preludeDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#prelude">Prelude Community TTPs</a>: ' + arrayCvc[i].prelude + '<br>';
            } else {
                prelude = 0;
                preludeDetails = "";
            };

            if ($('#stockpile').is(":checked")) {
                stockpile = arrayCvc[i].stockpile;
                stockpileDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#stockpile">CALDERA Stockpile</a>: ' + arrayCvc[i].stockpile + '<br>';
            } else {
                stockpile = 0;
                stockpileDetails = "";
            };

            if ($('#scythe').is(":checked")) {
                scythe = arrayCvc[i].scythe;
                scytheDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#scythe">Scythe</a>: ' + arrayCvc[i].scythe + '<br>';
            } else {
                scythe = 0;
                scytheDetails = "";
            };

            techObj.value = arrayCvc[i].technique
            techObj.techID = arrayCvc[i].techID
            techObj.techName = arrayCvc[i].techName
            techObj.tactics = arrayCvc[i].tactics
            techObj.url = arrayCvc[i].url
            techObj.lowestLevel = arrayCvc[i].lowestLevel

            techObj.splunk = arrayCvc[i].splunk
            techObj.splunk_threatHunting = arrayCvc[i].splunk_threatHunting
            techObj.elastic = arrayCvc[i].elastic
            techObj.eql_analytics = arrayCvc[i].eql_analytics
            techObj.azure_fullStack = arrayCvc[i].azure_fullStack
            techObj.azure_sentinel = arrayCvc[i].azure_sentinel
            techObj.logpoint = arrayCvc[i].logpoint
            techObj.proofpoint_emergingThreats = arrayCvc[i].proofpoint_emergingThreats
            techObj.tanium_threatResponse = arrayCvc[i].tanium_threatResponse
            techObj.aws = arrayCvc[i].aws
            techObj.gcp = arrayCvc[i].gcp
            techObj.car = arrayCvc[i].car
            techObj.atc = arrayCvc[i].atc
            techObj.sigma = arrayCvc[i].sigma
            techObj.th_playbook = arrayCvc[i].th_playbook
            techObj.splunkDetails = splunkDetails
            techObj.splunk_threatHuntingDetails = splunk_threatHuntingDetails
            techObj.elasticDetails = elasticDetails
            techObj.eql_analyticsDetails = eql_analyticsDetails
            techObj.azure_fullStackDetails = azure_fullStackDetails
            techObj.azure_sentinelDetails = azure_sentinelDetails
            techObj.logpointDetails = logpointDetails
            techObj.proofpoint_emergingThreatsDetails = proofpoint_emergingThreatsDetails
            techObj.tanium_threatResponseDetails = tanium_threatResponseDetails
            techObj.awsDetails = awsDetails
            techObj.gcpDetails = gcpDetails
            techObj.carDetails = carDetails
            techObj.atcDetails = atcDetails
            techObj.sigmaDetails = sigmaDetails
            techObj.th_playbookDetails = th_playbookDetails

            techObj.art = arrayCvc[i].art
            techObj.car_red = arrayCvc[i].car_red
            techObj.rta = arrayCvc[i].rta
            techObj.prelude = arrayCvc[i].prelude
            techObj.stockpile = arrayCvc[i].stockpile
            techObj.scythe = arrayCvc[i].scythe
            techObj.artDetails = artDetails
            techObj.car_redDetails = car_redDetails
            techObj.rtaDetails = rtaDetails
            techObj.preludeDetails = preludeDetails
            techObj.stockpileDetails = stockpileDetails
            techObj.scytheDetails = scytheDetails

            techObj.validate_potential = arrayCvc[i].validate_potential

            techObj.rule_total = splunk + splunk_threatHunting + elastic + eql_analytics + azure_fullStack + azure_sentinel + logpoint + proofpoint_emergingThreats + tanium_threatResponse + aws + gcp + car + atc + sigma + th_playbook
            techObj.detect_volume = arrayCvc[i].detect_volume

            techObj.test_total = art + car_red + rta + prelude + stockpile + scythe
            techObj.test_volume = arrayCvc[i].test_volume

            techObj.ruleTest_total = splunk + splunk_threatHunting + elastic + eql_analytics + azure_fullStack + azure_sentinel + logpoint + proofpoint_emergingThreats + tanium_threatResponse + aws + gcp + car + atc + sigma + th_playbook + art + car_red + rta + prelude + stockpile + scythe

            allTech.push(
                techObj
            );

        };

        allTech.sort((a, b) => a.test_total - b.test_total);

        tactics = []

        if ($('#reconnaissance').is(":checked")) {
            reconnaissance = 'Reconnaissance';
        } else {
            reconnaissance = 'noTactic';
        };

        if ($('#resourceDevelopment').is(":checked")) {
            resourceDevelopment = 'Resource Development';
        } else {
            resourceDevelopment = 'noTactic';
        };

        if ($('#initialAccess').is(":checked")) {
            initialAccess = 'Initial Access';
        } else {
            initialAccess = 'noTactic';
        };

        if ($('#defenseEvasion').is(":checked")) {
            defenseEvasion = 'Defense Evasion';
        } else {
            defenseEvasion = 'noTactic';
        };

        if ($('#commandAndControl').is(":checked")) {
            commandAndControl = 'Command and Control';
        } else {
            commandAndControl = 'noTactic';
        };

        if ($('#discovery').is(":checked")) {
            discovery = 'Discovery';
        } else {
            discovery = 'noTactic';
        };

        if ($('#collection').is(":checked")) {
            collection = 'Collection';
        } else {
            collection = 'noTactic';
        };
        if ($('#persistence').is(":checked")) {
            persistence = 'Persistence';
        } else {
            persistence = 'noTactic';
        };
        if ($('#credentialAccess').is(":checked")) {
            credentialAccess = 'Credential Access';
        } else {
            credentialAccess = 'noTactic';
        };
        if ($('#privilegeEscalation').is(":checked")) {
            privilegeEscalation = 'Privilege Escalation';
        } else {
            privilegeEscalation = 'noTactic';
        };
        if ($('#lateralMovement').is(":checked")) {
            lateralMovement = 'Lateral Movement';
        } else {
            lateralMovement = 'noTactic';
        };
        if ($('#execution').is(":checked")) {
            execution = 'Execution';
        } else {
            execution = 'noTactic';
        };
        if ($('#exfiltration').is(":checked")) {
            exfiltration = 'Exfiltration';
        } else {
            exfiltration = 'noTactic';
        };
        if ($('#impact').is(":checked")) {
            impact = 'Impact';
        } else {
            impact = 'noTactic';
        };

        arrayTech_blue_ll = []
        arrayTech_red_ll = []

        arrayTech_blue_ll.push('<h4 style="color:#1565c0;text-align:center"><strong>Detection Rules</strong></h4>')
        arrayTech_red_ll.push('<h4 style="color:#bf2026ff;text-align:center"><strong>Offensive Tests</strong></h4>')

        arrayTech_blue = []
        arrayTech_red = []

        arrayTech_blue.push('<h4 style="color:#1565c0;text-align:center"><strong>Detection Rules</strong></h4>')
        arrayTech_red.push('<h4 style="color:#bf2026ff;text-align:center"><strong>Offensive Tests</strong></h4>')

        for (item in allTech) {
            if (allTech[item].tactics.includes(reconnaissance) || allTech[item].tactics.includes(resourceDevelopment) || allTech[item].tactics.includes(initialAccess) || allTech[item].tactics.includes(defenseEvasion) || allTech[item].tactics.includes(commandAndControl) || allTech[item].tactics.includes(discovery) || allTech[item].tactics.includes(collection) || allTech[item].tactics.includes(persistence) || allTech[item].tactics.includes(credentialAccess) || allTech[item].tactics.includes(privilegeEscalation) || allTech[item].tactics.includes(lateralMovement) || allTech[item].tactics.includes(execution) || allTech[item].tactics.includes(exfiltration) || allTech[item].tactics.includes(impact)) {
                if (allTech[item].lowestLevel == 'y') {

                    rulesDetails = []
                    testDetails = []

                    rulesDetails.push('<p style="margin-left:24px;padding:6px 6px 6px 150px">' +
                                      allTech[item].splunkDetails +
                                      allTech[item].splunk_threatHuntingDetails +
                                      allTech[item].elasticDetails +
                                      allTech[item].eql_analyticsDetails +
                                      allTech[item].azure_sentinelDetails +
                                      allTech[item].logpointDetails +
                                      allTech[item].proofpoint_emergingThreatsDetails +
                                      allTech[item].tanium_threatResponseDetails +
                                      allTech[item].azure_fullStackDetails +
                                      allTech[item].awsDetails +
                                      allTech[item].gcpDetails +
                                      allTech[item].carDetails +
                                      allTech[item].atcDetails +
                                      allTech[item].sigmaDetails +
                                      allTech[item].th_playbookDetails +
                                      '</p>'
                    )

                    testDetails.push('<p style="margin-left:24px;padding:6px 6px 6px 150px">' +
                                      allTech[item].artDetails +
                                      allTech[item].car_redDetails +
                                      allTech[item].rtaDetails +
                                      allTech[item].preludeDetails +
                                      allTech[item].stockpileDetails +
                                      allTech[item].scytheDetails +
                                      '</p>'
                    )

                    arrayTech_blue_ll.push(
                        '<details><summary class="summary output_blue" style="padding:3px 3px 3px 150px"><a target="_blank" style="color:#1565c0;text-decoration:underline" href="' +
                        allTech[item].url + '">' +
                        allTech[item].techID +
                        ' (' + allTech[item].techName +
                        ')</a>' + ': ' +
                        allTech[item].rule_total +
                        '</summary>' +
                        rulesDetails +
                        '</details>'
                    )

                    arrayTech_red_ll.push(
                        '<details><summary class="summary output_red" style="padding:3px 3px 3px 150px"><a target="_blank" style="color:#bf2026ff;text-decoration:underline" href="' +
                        allTech[item].url + '">' +
                        allTech[item].techID +
                        ' (' + allTech[item].techName +
                        ')</a>' + ': ' +
                        allTech[item].test_total +
                        '</summary>' +
                        testDetails +
                        '</details>'
                    )

                }

                rulesDetails = []
                testDetails = []

                rulesDetails.push('<p style="margin-left:24px;padding:6px 6px 6px 150px">' +
                                  allTech[item].splunkDetails +
                                  allTech[item].splunk_threatHuntingDetails +
                                  allTech[item].elasticDetails +
                                  allTech[item].eql_analyticsDetails +
                                  allTech[item].azure_sentinelDetails +
                                  allTech[item].logpointDetails +
                                  allTech[item].proofpoint_emergingThreatsDetails +
                                  allTech[item].tanium_threatResponseDetails +
                                  allTech[item].azure_fullStackDetails +
                                  allTech[item].awsDetails +
                                  allTech[item].gcpDetails +
                                  allTech[item].carDetails +
                                  allTech[item].atcDetails +
                                  allTech[item].sigmaDetails +
                                  allTech[item].th_playbookDetails +
                                  '</p>'
                )

                testDetails.push('<p style="margin-left:24px;padding:6px 6px 6px 150px">' +
                                  allTech[item].artDetails +
                                  allTech[item].car_redDetails +
                                  allTech[item].rtaDetails +
                                  allTech[item].preludeDetails +
                                  allTech[item].stockpileDetails +
                                  allTech[item].scytheDetails +
                                  '</p>'
                )

                arrayTech_blue.push(
                    '<details><summary class="summary output_blue" style="padding:3px 3px 3px 150px"><a target="_blank" style="color:#1565c0;text-decoration:underline" href="' +
                    allTech[item].url + '">' +
                    allTech[item].techID +
                    ' (' + allTech[item].techName +
                    ')</a>' + ': ' +
                    allTech[item].rule_total +
                    '</summary>' +
                    rulesDetails +
                    '</details>'
                )

                arrayTech_red.push(
                    '<details><summary class="summary output_red" style="padding:3px 3px 3px 150px"><a target="_blank" style="color:#bf2026ff;text-decoration:underline" href="' +
                    allTech[item].url + '">' +
                    allTech[item].techID +
                    ' (' + allTech[item].techName +
                    ')</a>' + ': ' +
                    allTech[item].test_total +
                    '</summary>' +
                    testDetails +
                    '</details>'
                )

            }
        }

        unique_blue_ll = arrayTech_blue_ll.filter(onlyUnique)
        unique_red_ll = arrayTech_red_ll.filter(onlyUnique)

        let techList_blue_ll  = unique_blue_ll.join('<br>');
        let techList_red_ll  = unique_red_ll.join('<br>');

        unique_blue = arrayTech_blue.filter(onlyUnique)
        unique_red = arrayTech_red.filter(onlyUnique)

        let techList_blue  = unique_blue.join('<br>');
        let techList_red  = unique_red.join('<br>');

        $('#cvc-output_header').html("The following volume of detections & tests are available from the selected control sets. If you haven't already, <b>consider implementing detections or validation tests for the controls at the top of the list</b> - these are the techniques that have the largest volume of readily-available detections and/or tests.");

        if ($('#lowestLevel').is(":checked")) {
            $('#cvc-output_blue').html(techList_blue_ll);
            $('#cvc-output_red').html(techList_red_ll);
        } else {
            $('#cvc-output_blue').html(techList_blue);
            $('#cvc-output_red').html(techList_red);
        };

    });

	$('#testsHigh').click(function(){

        var allTech = [];
    	var arrayReturn = [];

    	function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        };

        for (i in arrayCvc) {

            var techObj = {};

            if ($('#splunk').is(":checked")) {
                splunk = arrayCvc[i].splunk;
                splunkDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#splunk">Splunk</a>: ' + arrayCvc[i].splunk + '<br>';
            } else {
                splunk = 0;
                splunkDetails = ""
            };

            if ($('#splunk_threatHunting').is(":checked")) {
                splunk_threatHunting = arrayCvc[i].splunk_threatHunting;
                splunk_threatHuntingDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#splunk_threatHunting">ThreatHunting Splunk app</a>: ' + arrayCvc[i].splunk_threatHunting + '<br>';
            } else {
                splunk_threatHunting = 0;
                splunk_threatHuntingDetails = "";
            };

            if ($('#elastic').is(":checked")) {
                elastic = arrayCvc[i].elastic;
                elasticDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#elastic">Elastic Stack</a>: ' + arrayCvc[i].elastic + '<br>';
            } else {
                elastic = 0;
                elasticDetails = "";
            };

            if ($('#eql_analytics').is(":checked")) {
                eql_analytics = arrayCvc[i].eql_analytics;
                eql_analyticsDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#eql_analytics">EQL Analytics Library</a>: ' + arrayCvc[i].eql_analytics + '<br>';
            } else {
                eql_analytics = 0;
                eql_analyticsDetails = "";
            };

            if ($('#azure_fullStack').is(":checked")) {
                azure_fullStack = arrayCvc[i].azure_fullStack;
                azure_fullStackDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#azure_fullStack">Azure full stack mappings</a>: ' + arrayCvc[i].azure_fullStack + '<br>';
            } else {
                azure_fullStack = 0;
                azure_fullStackDetails = "";
            };

            if ($('#azure_sentinel').is(":checked")) {
                azure_sentinel = arrayCvc[i].azure_sentinel;
                azure_sentinelDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#azure_sentinel">Sentinel detection mappings</a>: ' + arrayCvc[i].azure_sentinel + '<br>';
            } else {
                azure_sentinel = 0;
                azure_sentinelDetails = "";
            };

            if ($('#logpoint').is(":checked")) {
                logpoint = arrayCvc[i].logpoint;
                logpointDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#logpoint">LogPoint</a>: ' + arrayCvc[i].logpoint + '<br>';
            } else {
                logpoint = 0;
                logpointDetails = "";
            };

            if ($('#proofpoint_emergingThreats').is(":checked")) {
                proofpoint_emergingThreats = arrayCvc[i].proofpoint_emergingThreats;
                proofpoint_emergingThreatsDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#proofpoint_emergingThreats">Network Security Monitoring rule mappings</a>: ' + arrayCvc[i].proofpoint_emergingThreats + '<br>';
            } else {
                proofpoint_emergingThreats = 0;
                proofpoint_emergingThreatsDetails = "";
            };

            if ($('#tanium_threatResponse').is(":checked")) {
                tanium_threatResponse = arrayCvc[i].tanium_threatResponse;
                tanium_threatResponseDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#tanium_threatResponse">Tanium Threat Response</a>: ' + arrayCvc[i].tanium_threatResponse + '<br>';
            } else {
                tanium_threatResponse = 0;
                tanium_threatResponseDetails = "";
            };

            if ($('#aws').is(":checked")) {
                aws = arrayCvc[i].aws;
                awsDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#aws">AWS security control mappings</a>: ' + arrayCvc[i].aws + '<br>';
            } else {
                aws = 0;
                awsDetails = "";
            };

            if ($('#gcp').is(":checked")) {
                gcp = arrayCvc[i].gcp;
                gcpDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#gcp">GCP Community Security Analytics</a>: ' + arrayCvc[i].gcp + '<br>';
            } else {
                gcp = 0;
                gcpDetails = "";
            };

            if ($('#car').is(":checked")) {
                car = arrayCvc[i].car;
                carDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#car">Cyber Analytics Repository</a>: ' + arrayCvc[i].car + '<br>';
            } else {
                car = 0;
                carDetails = "";
            };

            if ($('#atc').is(":checked")) {
                atc = arrayCvc[i].atc;
                atcDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#atc">Atomic Threat Coverage</a>: ' + arrayCvc[i].atc + '<br>';
            } else {
                atc = 0;
                atcDetails = "";
            };

            if ($('#sigma').is(":checked")) {
                sigma = arrayCvc[i].sigma;
                sigmaDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#sigma">Sigma rules public repository</a>: ' + arrayCvc[i].sigma + '<br>';
            } else {
                sigma = 0;
                sigmaDetails = "";
            };

            if ($('#th_playbook').is(":checked")) {
                th_playbook = arrayCvc[i].th_playbook;
                th_playbookDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#th_playbook">ThreatHunter Playbook</a>: ' + arrayCvc[i].th_playbook + '<br>';
            } else {
                th_playbook = 0;
                th_playbookDetails = "";
            };

            if ($('#art').is(":checked")) {
                art = arrayCvc[i].art;
                artDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#art">Atomic Red Team</a>: ' + arrayCvc[i].art + '<br>';
            } else {
                art = 0;
                artDetails = "";
            };

            if ($('#car_red').is(":checked")) {
                car_red = arrayCvc[i].car_red;
                car_redDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#car_red">Cyber Analytics Repository</a>: ' + arrayCvc[i].car + '<br>';
            } else {
                car_red = 0;
                car_redDetails = "";
            };

            if ($('#rta').is(":checked")) {
                rta = arrayCvc[i].rta;
                rtaDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#rta">Red Team Automation</a>: ' + arrayCvc[i].rta + '<br>';
            } else {
                rta = 0;
                rtaDetails = "";
            };

            if ($('#prelude').is(":checked")) {
                prelude = arrayCvc[i].prelude;
                preludeDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#prelude">Prelude Community TTPs</a>: ' + arrayCvc[i].prelude + '<br>';
            } else {
                prelude = 0;
                preludeDetails = "";
            };

            if ($('#stockpile').is(":checked")) {
                stockpile = arrayCvc[i].stockpile;
                stockpileDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#stockpile">CALDERA Stockpile</a>: ' + arrayCvc[i].stockpile + '<br>';
            } else {
                stockpile = 0;
                stockpileDetails = "";
            };

            if ($('#scythe').is(":checked")) {
                scythe = arrayCvc[i].scythe;
                scytheDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#scythe">Scythe</a>: ' + arrayCvc[i].scythe + '<br>';
            } else {
                scythe = 0;
                scytheDetails = "";
            };

            techObj.value = arrayCvc[i].technique
            techObj.techID = arrayCvc[i].techID
            techObj.techName = arrayCvc[i].techName
            techObj.tactics = arrayCvc[i].tactics
            techObj.url = arrayCvc[i].url
            techObj.lowestLevel = arrayCvc[i].lowestLevel

            techObj.splunk = arrayCvc[i].splunk
            techObj.splunk_threatHunting = arrayCvc[i].splunk_threatHunting
            techObj.elastic = arrayCvc[i].elastic
            techObj.eql_analytics = arrayCvc[i].eql_analytics
            techObj.azure_fullStack = arrayCvc[i].azure_fullStack
            techObj.azure_sentinel = arrayCvc[i].azure_sentinel
            techObj.logpoint = arrayCvc[i].logpoint
            techObj.proofpoint_emergingThreats = arrayCvc[i].proofpoint_emergingThreats
            techObj.tanium_threatResponse = arrayCvc[i].tanium_threatResponse
            techObj.aws = arrayCvc[i].aws
            techObj.gcp = arrayCvc[i].gcp
            techObj.car = arrayCvc[i].car
            techObj.atc = arrayCvc[i].atc
            techObj.sigma = arrayCvc[i].sigma
            techObj.th_playbook = arrayCvc[i].th_playbook
            techObj.splunkDetails = splunkDetails
            techObj.splunk_threatHuntingDetails = splunk_threatHuntingDetails
            techObj.elasticDetails = elasticDetails
            techObj.eql_analyticsDetails = eql_analyticsDetails
            techObj.azure_fullStackDetails = azure_fullStackDetails
            techObj.azure_sentinelDetails = azure_sentinelDetails
            techObj.logpointDetails = logpointDetails
            techObj.proofpoint_emergingThreatsDetails = proofpoint_emergingThreatsDetails
            techObj.tanium_threatResponseDetails = tanium_threatResponseDetails
            techObj.awsDetails = awsDetails
            techObj.gcpDetails = gcpDetails
            techObj.carDetails = carDetails
            techObj.atcDetails = atcDetails
            techObj.sigmaDetails = sigmaDetails
            techObj.th_playbookDetails = th_playbookDetails

            techObj.art = arrayCvc[i].art
            techObj.car_red = arrayCvc[i].car_red
            techObj.rta = arrayCvc[i].rta
            techObj.prelude = arrayCvc[i].prelude
            techObj.stockpile = arrayCvc[i].stockpile
            techObj.scythe = arrayCvc[i].scythe
            techObj.artDetails = artDetails
            techObj.car_redDetails = car_redDetails
            techObj.rtaDetails = rtaDetails
            techObj.preludeDetails = preludeDetails
            techObj.stockpileDetails = stockpileDetails
            techObj.scytheDetails = scytheDetails

            techObj.validate_potential = arrayCvc[i].validate_potential

            techObj.rule_total = splunk + splunk_threatHunting + elastic + eql_analytics + azure_fullStack + azure_sentinel + logpoint + proofpoint_emergingThreats + tanium_threatResponse + aws + gcp + car + atc + sigma + th_playbook
            techObj.detect_volume = arrayCvc[i].detect_volume

            techObj.test_total = art + car_red + rta + prelude + stockpile + scythe
            techObj.test_volume = arrayCvc[i].test_volume

            techObj.ruleTest_total = splunk + splunk_threatHunting + elastic + eql_analytics + azure_fullStack + azure_sentinel + logpoint + proofpoint_emergingThreats + tanium_threatResponse + aws + gcp + car + atc + sigma + th_playbook + art + car_red + rta + prelude + stockpile + scythe

            allTech.push(
                techObj
            );

        };

        allTech.sort((a, b) => b.test_total - a.test_total);

        tactics = []

        if ($('#reconnaissance').is(":checked")) {
            reconnaissance = 'Reconnaissance';
        } else {
            reconnaissance = 'noTactic';
        };

        if ($('#resourceDevelopment').is(":checked")) {
            resourceDevelopment = 'Resource Development';
        } else {
            resourceDevelopment = 'noTactic';
        };

        if ($('#initialAccess').is(":checked")) {
            initialAccess = 'Initial Access';
        } else {
            initialAccess = 'noTactic';
        };

        if ($('#defenseEvasion').is(":checked")) {
            defenseEvasion = 'Defense Evasion';
        } else {
            defenseEvasion = 'noTactic';
        };

        if ($('#commandAndControl').is(":checked")) {
            commandAndControl = 'Command and Control';
        } else {
            commandAndControl = 'noTactic';
        };

        if ($('#discovery').is(":checked")) {
            discovery = 'Discovery';
        } else {
            discovery = 'noTactic';
        };

        if ($('#collection').is(":checked")) {
            collection = 'Collection';
        } else {
            collection = 'noTactic';
        };
        if ($('#persistence').is(":checked")) {
            persistence = 'Persistence';
        } else {
            persistence = 'noTactic';
        };
        if ($('#credentialAccess').is(":checked")) {
            credentialAccess = 'Credential Access';
        } else {
            credentialAccess = 'noTactic';
        };
        if ($('#privilegeEscalation').is(":checked")) {
            privilegeEscalation = 'Privilege Escalation';
        } else {
            privilegeEscalation = 'noTactic';
        };
        if ($('#lateralMovement').is(":checked")) {
            lateralMovement = 'Lateral Movement';
        } else {
            lateralMovement = 'noTactic';
        };
        if ($('#execution').is(":checked")) {
            execution = 'Execution';
        } else {
            execution = 'noTactic';
        };
        if ($('#exfiltration').is(":checked")) {
            exfiltration = 'Exfiltration';
        } else {
            exfiltration = 'noTactic';
        };
        if ($('#impact').is(":checked")) {
            impact = 'Impact';
        } else {
            impact = 'noTactic';
        };

        arrayTech_blue_ll = []
        arrayTech_red_ll = []

        arrayTech_blue_ll.push('<h4 style="color:#1565c0;text-align:center"><strong>Detection Rules</strong></h4>')
        arrayTech_red_ll.push('<h4 style="color:#bf2026ff;text-align:center"><strong>Offensive Tests</strong></h4>')

        arrayTech_blue = []
        arrayTech_red = []

        arrayTech_blue.push('<h4 style="color:#1565c0;text-align:center"><strong>Detection Rules</strong></h4>')
        arrayTech_red.push('<h4 style="color:#bf2026ff;text-align:center"><strong>Offensive Tests</strong></h4>')

        for (item in allTech) {
            if (allTech[item].tactics.includes(reconnaissance) || allTech[item].tactics.includes(resourceDevelopment) || allTech[item].tactics.includes(initialAccess) || allTech[item].tactics.includes(defenseEvasion) || allTech[item].tactics.includes(commandAndControl) || allTech[item].tactics.includes(discovery) || allTech[item].tactics.includes(collection) || allTech[item].tactics.includes(persistence) || allTech[item].tactics.includes(credentialAccess) || allTech[item].tactics.includes(privilegeEscalation) || allTech[item].tactics.includes(lateralMovement) || allTech[item].tactics.includes(execution) || allTech[item].tactics.includes(exfiltration) || allTech[item].tactics.includes(impact)) {
                if (allTech[item].lowestLevel == 'y') {

                    rulesDetails = []
                    testDetails = []

                    rulesDetails.push('<p style="margin-left:24px;padding:6px 6px 6px 150px">' +
                                      allTech[item].splunkDetails +
                                      allTech[item].splunk_threatHuntingDetails +
                                      allTech[item].elasticDetails +
                                      allTech[item].eql_analyticsDetails +
                                      allTech[item].azure_sentinelDetails +
                                      allTech[item].logpointDetails +
                                      allTech[item].proofpoint_emergingThreatsDetails +
                                      allTech[item].tanium_threatResponseDetails +
                                      allTech[item].azure_fullStackDetails +
                                      allTech[item].awsDetails +
                                      allTech[item].gcpDetails +
                                      allTech[item].carDetails +
                                      allTech[item].atcDetails +
                                      allTech[item].sigmaDetails +
                                      allTech[item].th_playbookDetails +
                                      '</p>'
                    )

                    testDetails.push('<p style="margin-left:24px;padding:6px 6px 6px 150px">' +
                                      allTech[item].artDetails +
                                      allTech[item].car_redDetails +
                                      allTech[item].rtaDetails +
                                      allTech[item].preludeDetails +
                                      allTech[item].stockpileDetails +
                                      allTech[item].scytheDetails +
                                      '</p>'
                    )

                    arrayTech_blue_ll.push(
                        '<details><summary class="summary output_blue" style="padding:3px 3px 3px 150px"><a target="_blank" style="color:#1565c0;text-decoration:underline" href="' +
                        allTech[item].url + '">' +
                        allTech[item].techID +
                        ' (' + allTech[item].techName +
                        ')</a>' + ': ' +
                        allTech[item].rule_total +
                        '</summary>' +
                        rulesDetails +
                        '</details>'
                    )

                    arrayTech_red_ll.push(
                        '<details><summary class="summary output_red" style="padding:3px 3px 3px 150px"><a target="_blank" style="color:#bf2026ff;text-decoration:underline" href="' +
                        allTech[item].url + '">' +
                        allTech[item].techID +
                        ' (' + allTech[item].techName +
                        ')</a>' + ': ' +
                        allTech[item].test_total +
                        '</summary>' +
                        testDetails +
                        '</details>'
                    )

                }

                rulesDetails = []
                testDetails = []

                rulesDetails.push('<p style="margin-left:24px;padding:6px 6px 6px 150px">' +
                                  allTech[item].splunkDetails +
                                  allTech[item].splunk_threatHuntingDetails +
                                  allTech[item].elasticDetails +
                                  allTech[item].eql_analyticsDetails +
                                  allTech[item].azure_sentinelDetails +
                                  allTech[item].logpointDetails +
                                  allTech[item].proofpoint_emergingThreatsDetails +
                                  allTech[item].tanium_threatResponseDetails +
                                  allTech[item].azure_fullStackDetails +
                                  allTech[item].awsDetails +
                                  allTech[item].gcpDetails +
                                  allTech[item].carDetails +
                                  allTech[item].atcDetails +
                                  allTech[item].sigmaDetails +
                                  allTech[item].th_playbookDetails +
                                  '</p>'
                )

                testDetails.push('<p style="margin-left:24px;padding:6px 6px 6px 150px">' +
                                  allTech[item].artDetails +
                                  allTech[item].car_redDetails +
                                  allTech[item].rtaDetails +
                                  allTech[item].preludeDetails +
                                  allTech[item].stockpileDetails +
                                  allTech[item].scytheDetails +
                                  '</p>'
                )

                arrayTech_blue.push(
                    '<details><summary class="summary output_blue" style="padding:3px 3px 3px 150px"><a target="_blank" style="color:#1565c0;text-decoration:underline" href="' +
                    allTech[item].url + '">' +
                    allTech[item].techID +
                    ' (' + allTech[item].techName +
                    ')</a>' + ': ' +
                    allTech[item].rule_total +
                    '</summary>' +
                    rulesDetails +
                    '</details>'
                )

                arrayTech_red.push(
                    '<details><summary class="summary output_red" style="padding:3px 3px 3px 150px"><a target="_blank" style="color:#bf2026ff;text-decoration:underline" href="' +
                    allTech[item].url + '">' +
                    allTech[item].techID +
                    ' (' + allTech[item].techName +
                    ')</a>' + ': ' +
                    allTech[item].test_total +
                    '</summary>' +
                    testDetails +
                    '</details>'
                )

            }
        }

        unique_blue_ll = arrayTech_blue_ll.filter(onlyUnique)
        unique_red_ll = arrayTech_red_ll.filter(onlyUnique)

        let techList_blue_ll  = unique_blue_ll.join('<br>');
        let techList_red_ll  = unique_red_ll.join('<br>');

        unique_blue = arrayTech_blue.filter(onlyUnique)
        unique_red = arrayTech_red.filter(onlyUnique)

        let techList_blue  = unique_blue.join('<br>');
        let techList_red  = unique_red.join('<br>');

        $('#cvc-output_header').html("The following volume of detections & tests are available from the selected control sets. If you haven't already, <b>consider implementing detections or validation tests for the controls at the top of the list</b> - these are the techniques that have the largest volume of readily-available detections and/or tests.");

        if ($('#lowestLevel').is(":checked")) {
            $('#cvc-output_blue').html(techList_blue_ll);
            $('#cvc-output_red').html(techList_red_ll);
        } else {
            $('#cvc-output_blue').html(techList_blue);
            $('#cvc-output_red').html(techList_red);
        };

    });

	$('#alphaLow').click(function(){

        var allTech = [];
    	var arrayReturn = [];

    	function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        };

        for (i in arrayCvc) {

            var techObj = {};

            if ($('#splunk').is(":checked")) {
                splunk = arrayCvc[i].splunk;
                splunkDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#splunk">Splunk</a>: ' + arrayCvc[i].splunk + '<br>';
            } else {
                splunk = 0;
                splunkDetails = ""
            };

            if ($('#splunk_threatHunting').is(":checked")) {
                splunk_threatHunting = arrayCvc[i].splunk_threatHunting;
                splunk_threatHuntingDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#splunk_threatHunting">ThreatHunting Splunk app</a>: ' + arrayCvc[i].splunk_threatHunting + '<br>';
            } else {
                splunk_threatHunting = 0;
                splunk_threatHuntingDetails = "";
            };

            if ($('#elastic').is(":checked")) {
                elastic = arrayCvc[i].elastic;
                elasticDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#elastic">Elastic Stack</a>: ' + arrayCvc[i].elastic + '<br>';
            } else {
                elastic = 0;
                elasticDetails = "";
            };

            if ($('#eql_analytics').is(":checked")) {
                eql_analytics = arrayCvc[i].eql_analytics;
                eql_analyticsDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#eql_analytics">EQL Analytics Library</a>: ' + arrayCvc[i].eql_analytics + '<br>';
            } else {
                eql_analytics = 0;
                eql_analyticsDetails = "";
            };

            if ($('#azure_fullStack').is(":checked")) {
                azure_fullStack = arrayCvc[i].azure_fullStack;
                azure_fullStackDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#azure_fullStack">Azure full stack mappings</a>: ' + arrayCvc[i].azure_fullStack + '<br>';
            } else {
                azure_fullStack = 0;
                azure_fullStackDetails = "";
            };

            if ($('#azure_sentinel').is(":checked")) {
                azure_sentinel = arrayCvc[i].azure_sentinel;
                azure_sentinelDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#azure_sentinel">Sentinel detection mappings</a>: ' + arrayCvc[i].azure_sentinel + '<br>';
            } else {
                azure_sentinel = 0;
                azure_sentinelDetails = "";
            };

            if ($('#logpoint').is(":checked")) {
                logpoint = arrayCvc[i].logpoint;
                logpointDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#logpoint">LogPoint</a>: ' + arrayCvc[i].logpoint + '<br>';
            } else {
                logpoint = 0;
                logpointDetails = "";
            };

            if ($('#proofpoint_emergingThreats').is(":checked")) {
                proofpoint_emergingThreats = arrayCvc[i].proofpoint_emergingThreats;
                proofpoint_emergingThreatsDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#proofpoint_emergingThreats">Network Security Monitoring rule mappings</a>: ' + arrayCvc[i].proofpoint_emergingThreats + '<br>';
            } else {
                proofpoint_emergingThreats = 0;
                proofpoint_emergingThreatsDetails = "";
            };

            if ($('#tanium_threatResponse').is(":checked")) {
                tanium_threatResponse = arrayCvc[i].tanium_threatResponse;
                tanium_threatResponseDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#tanium_threatResponse">Tanium Threat Response</a>: ' + arrayCvc[i].tanium_threatResponse + '<br>';
            } else {
                tanium_threatResponse = 0;
                tanium_threatResponseDetails = "";
            };

            if ($('#aws').is(":checked")) {
                aws = arrayCvc[i].aws;
                awsDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#aws">AWS security control mappings</a>: ' + arrayCvc[i].aws + '<br>';
            } else {
                aws = 0;
                awsDetails = "";
            };

            if ($('#gcp').is(":checked")) {
                gcp = arrayCvc[i].gcp;
                gcpDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#gcp">GCP Community Security Analytics</a>: ' + arrayCvc[i].gcp + '<br>';
            } else {
                gcp = 0;
                gcpDetails = "";
            };

            if ($('#car').is(":checked")) {
                car = arrayCvc[i].car;
                carDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#car">Cyber Analytics Repository</a>: ' + arrayCvc[i].car + '<br>';
            } else {
                car = 0;
                carDetails = "";
            };

            if ($('#atc').is(":checked")) {
                atc = arrayCvc[i].atc;
                atcDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#atc">Atomic Threat Coverage</a>: ' + arrayCvc[i].atc + '<br>';
            } else {
                atc = 0;
                atcDetails = "";
            };

            if ($('#sigma').is(":checked")) {
                sigma = arrayCvc[i].sigma;
                sigmaDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#sigma">Sigma rules public repository</a>: ' + arrayCvc[i].sigma + '<br>';
            } else {
                sigma = 0;
                sigmaDetails = "";
            };

            if ($('#th_playbook').is(":checked")) {
                th_playbook = arrayCvc[i].th_playbook;
                th_playbookDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#th_playbook">ThreatHunter Playbook</a>: ' + arrayCvc[i].th_playbook + '<br>';
            } else {
                th_playbook = 0;
                th_playbookDetails = "";
            };

            if ($('#art').is(":checked")) {
                art = arrayCvc[i].art;
                artDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#art">Atomic Red Team</a>: ' + arrayCvc[i].art + '<br>';
            } else {
                art = 0;
                artDetails = "";
            };

            if ($('#car_red').is(":checked")) {
                car_red = arrayCvc[i].car_red;
                car_redDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#car_red">Cyber Analytics Repository</a>: ' + arrayCvc[i].car + '<br>';
            } else {
                car_red = 0;
                car_redDetails = "";
            };

            if ($('#rta').is(":checked")) {
                rta = arrayCvc[i].rta;
                rtaDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#rta">Red Team Automation</a>: ' + arrayCvc[i].rta + '<br>';
            } else {
                rta = 0;
                rtaDetails = "";
            };

            if ($('#prelude').is(":checked")) {
                prelude = arrayCvc[i].prelude;
                preludeDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#prelude">Prelude Community TTPs</a>: ' + arrayCvc[i].prelude + '<br>';
            } else {
                prelude = 0;
                preludeDetails = "";
            };

            if ($('#stockpile').is(":checked")) {
                stockpile = arrayCvc[i].stockpile;
                stockpileDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#stockpile">CALDERA Stockpile</a>: ' + arrayCvc[i].stockpile + '<br>';
            } else {
                stockpile = 0;
                stockpileDetails = "";
            };

            if ($('#scythe').is(":checked")) {
                scythe = arrayCvc[i].scythe;
                scytheDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#scythe">Scythe</a>: ' + arrayCvc[i].scythe + '<br>';
            } else {
                scythe = 0;
                scytheDetails = "";
            };

            techObj.value = arrayCvc[i].technique
            techObj.techID = arrayCvc[i].techID
            techObj.techName = arrayCvc[i].techName
            techObj.tactics = arrayCvc[i].tactics
            techObj.url = arrayCvc[i].url
            techObj.lowestLevel = arrayCvc[i].lowestLevel

            techObj.splunk = arrayCvc[i].splunk
            techObj.splunk_threatHunting = arrayCvc[i].splunk_threatHunting
            techObj.elastic = arrayCvc[i].elastic
            techObj.eql_analytics = arrayCvc[i].eql_analytics
            techObj.azure_fullStack = arrayCvc[i].azure_fullStack
            techObj.azure_sentinel = arrayCvc[i].azure_sentinel
            techObj.logpoint = arrayCvc[i].logpoint
            techObj.proofpoint_emergingThreats = arrayCvc[i].proofpoint_emergingThreats
            techObj.tanium_threatResponse = arrayCvc[i].tanium_threatResponse
            techObj.aws = arrayCvc[i].aws
            techObj.gcp = arrayCvc[i].gcp
            techObj.car = arrayCvc[i].car
            techObj.atc = arrayCvc[i].atc
            techObj.sigma = arrayCvc[i].sigma
            techObj.th_playbook = arrayCvc[i].th_playbook
            techObj.splunkDetails = splunkDetails
            techObj.splunk_threatHuntingDetails = splunk_threatHuntingDetails
            techObj.elasticDetails = elasticDetails
            techObj.eql_analyticsDetails = eql_analyticsDetails
            techObj.azure_fullStackDetails = azure_fullStackDetails
            techObj.azure_sentinelDetails = azure_sentinelDetails
            techObj.logpointDetails = logpointDetails
            techObj.proofpoint_emergingThreatsDetails = proofpoint_emergingThreatsDetails
            techObj.tanium_threatResponseDetails = tanium_threatResponseDetails
            techObj.awsDetails = awsDetails
            techObj.gcpDetails = gcpDetails
            techObj.carDetails = carDetails
            techObj.atcDetails = atcDetails
            techObj.sigmaDetails = sigmaDetails
            techObj.th_playbookDetails = th_playbookDetails

            techObj.art = arrayCvc[i].art
            techObj.car_red = arrayCvc[i].car_red
            techObj.rta = arrayCvc[i].rta
            techObj.prelude = arrayCvc[i].prelude
            techObj.stockpile = arrayCvc[i].stockpile
            techObj.scythe = arrayCvc[i].scythe
            techObj.artDetails = artDetails
            techObj.car_redDetails = car_redDetails
            techObj.rtaDetails = rtaDetails
            techObj.preludeDetails = preludeDetails
            techObj.stockpileDetails = stockpileDetails
            techObj.scytheDetails = scytheDetails

            techObj.validate_potential = arrayCvc[i].validate_potential

            techObj.rule_total = splunk + splunk_threatHunting + elastic + eql_analytics + azure_fullStack + azure_sentinel + logpoint + proofpoint_emergingThreats + tanium_threatResponse + aws + gcp + car + atc + sigma + th_playbook
            techObj.detect_volume = arrayCvc[i].detect_volume

            techObj.test_total = art + car_red + rta + prelude + stockpile + scythe
            techObj.test_volume = arrayCvc[i].test_volume

            techObj.ruleTest_total = splunk + splunk_threatHunting + elastic + eql_analytics + azure_fullStack + azure_sentinel + logpoint + proofpoint_emergingThreats + tanium_threatResponse + aws + gcp + car + atc + sigma + th_playbook + art + car_red + rta + prelude + stockpile + scythe

            allTech.push(
                techObj
            );

        };

        allTech.sort((a, b) => a.technique - b.technique);

        tactics = []

        if ($('#reconnaissance').is(":checked")) {
            reconnaissance = 'Reconnaissance';
        } else {
            reconnaissance = 'noTactic';
        };

        if ($('#resourceDevelopment').is(":checked")) {
            resourceDevelopment = 'Resource Development';
        } else {
            resourceDevelopment = 'noTactic';
        };

        if ($('#initialAccess').is(":checked")) {
            initialAccess = 'Initial Access';
        } else {
            initialAccess = 'noTactic';
        };

        if ($('#defenseEvasion').is(":checked")) {
            defenseEvasion = 'Defense Evasion';
        } else {
            defenseEvasion = 'noTactic';
        };

        if ($('#commandAndControl').is(":checked")) {
            commandAndControl = 'Command and Control';
        } else {
            commandAndControl = 'noTactic';
        };

        if ($('#discovery').is(":checked")) {
            discovery = 'Discovery';
        } else {
            discovery = 'noTactic';
        };

        if ($('#collection').is(":checked")) {
            collection = 'Collection';
        } else {
            collection = 'noTactic';
        };
        if ($('#persistence').is(":checked")) {
            persistence = 'Persistence';
        } else {
            persistence = 'noTactic';
        };
        if ($('#credentialAccess').is(":checked")) {
            credentialAccess = 'Credential Access';
        } else {
            credentialAccess = 'noTactic';
        };
        if ($('#privilegeEscalation').is(":checked")) {
            privilegeEscalation = 'Privilege Escalation';
        } else {
            privilegeEscalation = 'noTactic';
        };
        if ($('#lateralMovement').is(":checked")) {
            lateralMovement = 'Lateral Movement';
        } else {
            lateralMovement = 'noTactic';
        };
        if ($('#execution').is(":checked")) {
            execution = 'Execution';
        } else {
            execution = 'noTactic';
        };
        if ($('#exfiltration').is(":checked")) {
            exfiltration = 'Exfiltration';
        } else {
            exfiltration = 'noTactic';
        };
        if ($('#impact').is(":checked")) {
            impact = 'Impact';
        } else {
            impact = 'noTactic';
        };

        arrayTech_blue_ll = []
        arrayTech_red_ll = []

        arrayTech_blue_ll.push('<h4 style="color:#1565c0;text-align:center"><strong>Detection Rules</strong></h4>')
        arrayTech_red_ll.push('<h4 style="color:#bf2026ff;text-align:center"><strong>Offensive Tests</strong></h4>')

        arrayTech_blue = []
        arrayTech_red = []

        arrayTech_blue.push('<h4 style="color:#1565c0;text-align:center"><strong>Detection Rules</strong></h4>')
        arrayTech_red.push('<h4 style="color:#bf2026ff;text-align:center"><strong>Offensive Tests</strong></h4>')

        for (item in allTech) {
            if (allTech[item].tactics.includes(reconnaissance) || allTech[item].tactics.includes(resourceDevelopment) || allTech[item].tactics.includes(initialAccess) || allTech[item].tactics.includes(defenseEvasion) || allTech[item].tactics.includes(commandAndControl) || allTech[item].tactics.includes(discovery) || allTech[item].tactics.includes(collection) || allTech[item].tactics.includes(persistence) || allTech[item].tactics.includes(credentialAccess) || allTech[item].tactics.includes(privilegeEscalation) || allTech[item].tactics.includes(lateralMovement) || allTech[item].tactics.includes(execution) || allTech[item].tactics.includes(exfiltration) || allTech[item].tactics.includes(impact)) {
                if (allTech[item].lowestLevel == 'y') {

                    rulesDetails = []
                    testDetails = []

                    rulesDetails.push('<p style="margin-left:24px;padding:6px 6px 6px 150px">' +
                                      allTech[item].splunkDetails +
                                      allTech[item].splunk_threatHuntingDetails +
                                      allTech[item].elasticDetails +
                                      allTech[item].eql_analyticsDetails +
                                      allTech[item].azure_sentinelDetails +
                                      allTech[item].logpointDetails +
                                      allTech[item].proofpoint_emergingThreatsDetails +
                                      allTech[item].tanium_threatResponseDetails +
                                      allTech[item].azure_fullStackDetails +
                                      allTech[item].awsDetails +
                                      allTech[item].gcpDetails +
                                      allTech[item].carDetails +
                                      allTech[item].atcDetails +
                                      allTech[item].sigmaDetails +
                                      allTech[item].th_playbookDetails +
                                      '</p>'
                    )

                    testDetails.push('<p style="margin-left:24px;padding:6px 6px 6px 150px">' +
                                      allTech[item].artDetails +
                                      allTech[item].car_redDetails +
                                      allTech[item].rtaDetails +
                                      allTech[item].preludeDetails +
                                      allTech[item].stockpileDetails +
                                      allTech[item].scytheDetails +
                                      '</p>'
                    )

                    arrayTech_blue_ll.push(
                        '<details><summary class="summary output_blue" style="padding:3px 3px 3px 150px"><a target="_blank" style="color:#1565c0;text-decoration:underline" href="' +
                        allTech[item].url + '">' +
                        allTech[item].techID +
                        ' (' + allTech[item].techName +
                        ')</a>' + ': ' +
                        allTech[item].rule_total +
                        '</summary>' +
                        rulesDetails +
                        '</details>'
                    )

                    arrayTech_red_ll.push(
                        '<details><summary class="summary output_red" style="padding:3px 3px 3px 150px"><a target="_blank" style="color:#bf2026ff;text-decoration:underline" href="' +
                        allTech[item].url + '">' +
                        allTech[item].techID +
                        ' (' + allTech[item].techName +
                        ')</a>' + ': ' +
                        allTech[item].test_total +
                        '</summary>' +
                        testDetails +
                        '</details>'
                    )

                }

                rulesDetails = []
                testDetails = []

                rulesDetails.push('<p style="margin-left:24px;padding:6px 6px 6px 150px">' +
                                  allTech[item].splunkDetails +
                                  allTech[item].splunk_threatHuntingDetails +
                                  allTech[item].elasticDetails +
                                  allTech[item].eql_analyticsDetails +
                                  allTech[item].azure_sentinelDetails +
                                  allTech[item].logpointDetails +
                                  allTech[item].proofpoint_emergingThreatsDetails +
                                  allTech[item].tanium_threatResponseDetails +
                                  allTech[item].azure_fullStackDetails +
                                  allTech[item].awsDetails +
                                  allTech[item].gcpDetails +
                                  allTech[item].carDetails +
                                  allTech[item].atcDetails +
                                  allTech[item].sigmaDetails +
                                  allTech[item].th_playbookDetails +
                                  '</p>'
                )

                testDetails.push('<p style="margin-left:24px;padding:6px 6px 6px 150px">' +
                                  allTech[item].artDetails +
                                  allTech[item].car_redDetails +
                                  allTech[item].rtaDetails +
                                  allTech[item].preludeDetails +
                                  allTech[item].stockpileDetails +
                                  allTech[item].scytheDetails +
                                  '</p>'
                )

                arrayTech_blue.push(
                    '<details><summary class="summary output_blue" style="padding:3px 3px 3px 150px"><a target="_blank" style="color:#1565c0;text-decoration:underline" href="' +
                    allTech[item].url + '">' +
                    allTech[item].techID +
                    ' (' + allTech[item].techName +
                    ')</a>' + ': ' +
                    allTech[item].rule_total +
                    '</summary>' +
                    rulesDetails +
                    '</details>'
                )

                arrayTech_red.push(
                    '<details><summary class="summary output_red" style="padding:3px 3px 3px 150px"><a target="_blank" style="color:#bf2026ff;text-decoration:underline" href="' +
                    allTech[item].url + '">' +
                    allTech[item].techID +
                    ' (' + allTech[item].techName +
                    ')</a>' + ': ' +
                    allTech[item].test_total +
                    '</summary>' +
                    testDetails +
                    '</details>'
                )

            }
        }

        unique_blue_ll = arrayTech_blue_ll.filter(onlyUnique)
        unique_red_ll = arrayTech_red_ll.filter(onlyUnique)

        let techList_blue_ll  = unique_blue_ll.join('<br>');
        let techList_red_ll  = unique_red_ll.join('<br>');

        unique_blue = arrayTech_blue.filter(onlyUnique)
        unique_red = arrayTech_red.filter(onlyUnique)

        let techList_blue  = unique_blue.join('<br>');
        let techList_red  = unique_red.join('<br>');

        $('#cvc-output_header').html("The following volume of detections & tests are available from the selected control sets. If you haven't already, <b>consider implementing detections or validation tests for the controls at the top of the list</b> - these are the techniques that have the largest volume of readily-available detections and/or tests.");

        if ($('#lowestLevel').is(":checked")) {
            $('#cvc-output_blue').html(techList_blue_ll);
            $('#cvc-output_red').html(techList_red_ll);
        } else {
            $('#cvc-output_blue').html(techList_blue);
            $('#cvc-output_red').html(techList_red);
        };

    });

	$('#alphaHigh').click(function(){

        var allTech = [];
    	var arrayReturn = [];

    	function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        };

        for (i in arrayCvc) {

            var techObj = {};

            if ($('#splunk').is(":checked")) {
                splunk = arrayCvc[i].splunk;
                splunkDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#splunk">Splunk</a>: ' + arrayCvc[i].splunk + '<br>';
            } else {
                splunk = 0;
                splunkDetails = ""
            };

            if ($('#splunk_threatHunting').is(":checked")) {
                splunk_threatHunting = arrayCvc[i].splunk_threatHunting;
                splunk_threatHuntingDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#splunk_threatHunting">ThreatHunting Splunk app</a>: ' + arrayCvc[i].splunk_threatHunting + '<br>';
            } else {
                splunk_threatHunting = 0;
                splunk_threatHuntingDetails = "";
            };

            if ($('#elastic').is(":checked")) {
                elastic = arrayCvc[i].elastic;
                elasticDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#elastic">Elastic Stack</a>: ' + arrayCvc[i].elastic + '<br>';
            } else {
                elastic = 0;
                elasticDetails = "";
            };

            if ($('#eql_analytics').is(":checked")) {
                eql_analytics = arrayCvc[i].eql_analytics;
                eql_analyticsDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#eql_analytics">EQL Analytics Library</a>: ' + arrayCvc[i].eql_analytics + '<br>';
            } else {
                eql_analytics = 0;
                eql_analyticsDetails = "";
            };

            if ($('#azure_fullStack').is(":checked")) {
                azure_fullStack = arrayCvc[i].azure_fullStack;
                azure_fullStackDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#azure_fullStack">Azure full stack mappings</a>: ' + arrayCvc[i].azure_fullStack + '<br>';
            } else {
                azure_fullStack = 0;
                azure_fullStackDetails = "";
            };

            if ($('#azure_sentinel').is(":checked")) {
                azure_sentinel = arrayCvc[i].azure_sentinel;
                azure_sentinelDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#azure_sentinel">Sentinel detection mappings</a>: ' + arrayCvc[i].azure_sentinel + '<br>';
            } else {
                azure_sentinel = 0;
                azure_sentinelDetails = "";
            };

            if ($('#logpoint').is(":checked")) {
                logpoint = arrayCvc[i].logpoint;
                logpointDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#logpoint">LogPoint</a>: ' + arrayCvc[i].logpoint + '<br>';
            } else {
                logpoint = 0;
                logpointDetails = "";
            };

            if ($('#proofpoint_emergingThreats').is(":checked")) {
                proofpoint_emergingThreats = arrayCvc[i].proofpoint_emergingThreats;
                proofpoint_emergingThreatsDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#proofpoint_emergingThreats">Network Security Monitoring rule mappings</a>: ' + arrayCvc[i].proofpoint_emergingThreats + '<br>';
            } else {
                proofpoint_emergingThreats = 0;
                proofpoint_emergingThreatsDetails = "";
            };

            if ($('#tanium_threatResponse').is(":checked")) {
                tanium_threatResponse = arrayCvc[i].tanium_threatResponse;
                tanium_threatResponseDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#tanium_threatResponse">Tanium Threat Response</a>: ' + arrayCvc[i].tanium_threatResponse + '<br>';
            } else {
                tanium_threatResponse = 0;
                tanium_threatResponseDetails = "";
            };

            if ($('#aws').is(":checked")) {
                aws = arrayCvc[i].aws;
                awsDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#aws">AWS security control mappings</a>: ' + arrayCvc[i].aws + '<br>';
            } else {
                aws = 0;
                awsDetails = "";
            };

            if ($('#gcp').is(":checked")) {
                gcp = arrayCvc[i].gcp;
                gcpDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#gcp">GCP Community Security Analytics</a>: ' + arrayCvc[i].gcp + '<br>';
            } else {
                gcp = 0;
                gcpDetails = "";
            };

            if ($('#car').is(":checked")) {
                car = arrayCvc[i].car;
                carDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#car">Cyber Analytics Repository</a>: ' + arrayCvc[i].car + '<br>';
            } else {
                car = 0;
                carDetails = "";
            };

            if ($('#atc').is(":checked")) {
                atc = arrayCvc[i].atc;
                atcDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#atc">Atomic Threat Coverage</a>: ' + arrayCvc[i].atc + '<br>';
            } else {
                atc = 0;
                atcDetails = "";
            };

            if ($('#sigma').is(":checked")) {
                sigma = arrayCvc[i].sigma;
                sigmaDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#sigma">Sigma rules public repository</a>: ' + arrayCvc[i].sigma + '<br>';
            } else {
                sigma = 0;
                sigmaDetails = "";
            };

            if ($('#th_playbook').is(":checked")) {
                th_playbook = arrayCvc[i].th_playbook;
                th_playbookDetails = '<a target="_blank" style="color:#1565c0" href="https://controlcompass.github.io/resources#th_playbook">ThreatHunter Playbook</a>: ' + arrayCvc[i].th_playbook + '<br>';
            } else {
                th_playbook = 0;
                th_playbookDetails = "";
            };

            if ($('#art').is(":checked")) {
                art = arrayCvc[i].art;
                artDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#art">Atomic Red Team</a>: ' + arrayCvc[i].art + '<br>';
            } else {
                art = 0;
                artDetails = "";
            };

            if ($('#car_red').is(":checked")) {
                car_red = arrayCvc[i].car_red;
                car_redDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#car_red">Cyber Analytics Repository</a>: ' + arrayCvc[i].car + '<br>';
            } else {
                car_red = 0;
                car_redDetails = "";
            };

            if ($('#rta').is(":checked")) {
                rta = arrayCvc[i].rta;
                rtaDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#rta">Red Team Automation</a>: ' + arrayCvc[i].rta + '<br>';
            } else {
                rta = 0;
                rtaDetails = "";
            };

            if ($('#prelude').is(":checked")) {
                prelude = arrayCvc[i].prelude;
                preludeDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#prelude">Prelude Community TTPs</a>: ' + arrayCvc[i].prelude + '<br>';
            } else {
                prelude = 0;
                preludeDetails = "";
            };

            if ($('#stockpile').is(":checked")) {
                stockpile = arrayCvc[i].stockpile;
                stockpileDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#stockpile">CALDERA Stockpile</a>: ' + arrayCvc[i].stockpile + '<br>';
            } else {
                stockpile = 0;
                stockpileDetails = "";
            };

            if ($('#scythe').is(":checked")) {
                scythe = arrayCvc[i].scythe;
                scytheDetails = '<a target="_blank" style="color:#bf2026ff" href="https://controlcompass.github.io/resources#scythe">Scythe</a>: ' + arrayCvc[i].scythe + '<br>';
            } else {
                scythe = 0;
                scytheDetails = "";
            };

            techObj.value = arrayCvc[i].technique
            techObj.techID = arrayCvc[i].techID
            techObj.techName = arrayCvc[i].techName
            techObj.tactics = arrayCvc[i].tactics
            techObj.url = arrayCvc[i].url
            techObj.lowestLevel = arrayCvc[i].lowestLevel

            techObj.splunk = arrayCvc[i].splunk
            techObj.splunk_threatHunting = arrayCvc[i].splunk_threatHunting
            techObj.elastic = arrayCvc[i].elastic
            techObj.eql_analytics = arrayCvc[i].eql_analytics
            techObj.azure_fullStack = arrayCvc[i].azure_fullStack
            techObj.azure_sentinel = arrayCvc[i].azure_sentinel
            techObj.logpoint = arrayCvc[i].logpoint
            techObj.proofpoint_emergingThreats = arrayCvc[i].proofpoint_emergingThreats
            techObj.tanium_threatResponse = arrayCvc[i].tanium_threatResponse
            techObj.aws = arrayCvc[i].aws
            techObj.gcp = arrayCvc[i].gcp
            techObj.car = arrayCvc[i].car
            techObj.atc = arrayCvc[i].atc
            techObj.sigma = arrayCvc[i].sigma
            techObj.th_playbook = arrayCvc[i].th_playbook
            techObj.splunkDetails = splunkDetails
            techObj.splunk_threatHuntingDetails = splunk_threatHuntingDetails
            techObj.elasticDetails = elasticDetails
            techObj.eql_analyticsDetails = eql_analyticsDetails
            techObj.azure_fullStackDetails = azure_fullStackDetails
            techObj.azure_sentinelDetails = azure_sentinelDetails
            techObj.logpointDetails = logpointDetails
            techObj.proofpoint_emergingThreatsDetails = proofpoint_emergingThreatsDetails
            techObj.tanium_threatResponseDetails = tanium_threatResponseDetails
            techObj.awsDetails = awsDetails
            techObj.gcpDetails = gcpDetails
            techObj.carDetails = carDetails
            techObj.atcDetails = atcDetails
            techObj.sigmaDetails = sigmaDetails
            techObj.th_playbookDetails = th_playbookDetails

            techObj.art = arrayCvc[i].art
            techObj.car_red = arrayCvc[i].car_red
            techObj.rta = arrayCvc[i].rta
            techObj.prelude = arrayCvc[i].prelude
            techObj.stockpile = arrayCvc[i].stockpile
            techObj.scythe = arrayCvc[i].scythe
            techObj.artDetails = artDetails
            techObj.car_redDetails = car_redDetails
            techObj.rtaDetails = rtaDetails
            techObj.preludeDetails = preludeDetails
            techObj.stockpileDetails = stockpileDetails
            techObj.scytheDetails = scytheDetails

            techObj.validate_potential = arrayCvc[i].validate_potential

            techObj.rule_total = splunk + splunk_threatHunting + elastic + eql_analytics + azure_fullStack + azure_sentinel + logpoint + proofpoint_emergingThreats + tanium_threatResponse + aws + gcp + car + atc + sigma + th_playbook
            techObj.detect_volume = arrayCvc[i].detect_volume

            techObj.test_total = art + car_red + rta + prelude + stockpile + scythe
            techObj.test_volume = arrayCvc[i].test_volume

            techObj.ruleTest_total = splunk + splunk_threatHunting + elastic + eql_analytics + azure_fullStack + azure_sentinel + logpoint + proofpoint_emergingThreats + tanium_threatResponse + aws + gcp + car + atc + sigma + th_playbook + art + car_red + rta + prelude + stockpile + scythe

            allTech.push(
                techObj
            );

        };

        allTech.sort().reverse();

        tactics = []

        if ($('#reconnaissance').is(":checked")) {
            reconnaissance = 'Reconnaissance';
        } else {
            reconnaissance = 'noTactic';
        };

        if ($('#resourceDevelopment').is(":checked")) {
            resourceDevelopment = 'Resource Development';
        } else {
            resourceDevelopment = 'noTactic';
        };

        if ($('#initialAccess').is(":checked")) {
            initialAccess = 'Initial Access';
        } else {
            initialAccess = 'noTactic';
        };

        if ($('#defenseEvasion').is(":checked")) {
            defenseEvasion = 'Defense Evasion';
        } else {
            defenseEvasion = 'noTactic';
        };

        if ($('#commandAndControl').is(":checked")) {
            commandAndControl = 'Command and Control';
        } else {
            commandAndControl = 'noTactic';
        };

        if ($('#discovery').is(":checked")) {
            discovery = 'Discovery';
        } else {
            discovery = 'noTactic';
        };

        if ($('#collection').is(":checked")) {
            collection = 'Collection';
        } else {
            collection = 'noTactic';
        };
        if ($('#persistence').is(":checked")) {
            persistence = 'Persistence';
        } else {
            persistence = 'noTactic';
        };
        if ($('#credentialAccess').is(":checked")) {
            credentialAccess = 'Credential Access';
        } else {
            credentialAccess = 'noTactic';
        };
        if ($('#privilegeEscalation').is(":checked")) {
            privilegeEscalation = 'Privilege Escalation';
        } else {
            privilegeEscalation = 'noTactic';
        };
        if ($('#lateralMovement').is(":checked")) {
            lateralMovement = 'Lateral Movement';
        } else {
            lateralMovement = 'noTactic';
        };
        if ($('#execution').is(":checked")) {
            execution = 'Execution';
        } else {
            execution = 'noTactic';
        };
        if ($('#exfiltration').is(":checked")) {
            exfiltration = 'Exfiltration';
        } else {
            exfiltration = 'noTactic';
        };
        if ($('#impact').is(":checked")) {
            impact = 'Impact';
        } else {
            impact = 'noTactic';
        };

        arrayTech_blue_ll = []
        arrayTech_red_ll = []

        arrayTech_blue_ll.push('<h4 style="color:#1565c0;text-align:center"><strong>Detection Rules</strong></h4>')
        arrayTech_red_ll.push('<h4 style="color:#bf2026ff;text-align:center"><strong>Offensive Tests</strong></h4>')

        arrayTech_blue = []
        arrayTech_red = []

        arrayTech_blue.push('<h4 style="color:#1565c0;text-align:center"><strong>Detection Rules</strong></h4>')
        arrayTech_red.push('<h4 style="color:#bf2026ff;text-align:center"><strong>Offensive Tests</strong></h4>')

        for (item in allTech) {
            if (allTech[item].tactics.includes(reconnaissance) || allTech[item].tactics.includes(resourceDevelopment) || allTech[item].tactics.includes(initialAccess) || allTech[item].tactics.includes(defenseEvasion) || allTech[item].tactics.includes(commandAndControl) || allTech[item].tactics.includes(discovery) || allTech[item].tactics.includes(collection) || allTech[item].tactics.includes(persistence) || allTech[item].tactics.includes(credentialAccess) || allTech[item].tactics.includes(privilegeEscalation) || allTech[item].tactics.includes(lateralMovement) || allTech[item].tactics.includes(execution) || allTech[item].tactics.includes(exfiltration) || allTech[item].tactics.includes(impact)) {
                if (allTech[item].lowestLevel == 'y') {

                    rulesDetails = []
                    testDetails = []

                    rulesDetails.push('<p style="margin-left:24px;padding:6px 6px 6px 150px">' +
                                      allTech[item].splunkDetails +
                                      allTech[item].splunk_threatHuntingDetails +
                                      allTech[item].elasticDetails +
                                      allTech[item].eql_analyticsDetails +
                                      allTech[item].azure_sentinelDetails +
                                      allTech[item].logpointDetails +
                                      allTech[item].proofpoint_emergingThreatsDetails +
                                      allTech[item].tanium_threatResponseDetails +
                                      allTech[item].azure_fullStackDetails +
                                      allTech[item].awsDetails +
                                      allTech[item].gcpDetails +
                                      allTech[item].carDetails +
                                      allTech[item].atcDetails +
                                      allTech[item].sigmaDetails +
                                      allTech[item].th_playbookDetails +
                                      '</p>'
                    )

                    testDetails.push('<p style="margin-left:24px;padding:6px 6px 6px 150px">' +
                                      allTech[item].artDetails +
                                      allTech[item].car_redDetails +
                                      allTech[item].rtaDetails +
                                      allTech[item].preludeDetails +
                                      allTech[item].stockpileDetails +
                                      allTech[item].scytheDetails +
                                      '</p>'
                    )

                    arrayTech_blue_ll.push(
                        '<details><summary class="summary output_blue" style="padding:3px 3px 3px 150px"><a target="_blank" style="color:#1565c0;text-decoration:underline" href="' +
                        allTech[item].url + '">' +
                        allTech[item].techID +
                        ' (' + allTech[item].techName +
                        ')</a>' + ': ' +
                        allTech[item].rule_total +
                        '</summary>' +
                        rulesDetails +
                        '</details>'
                    )

                    arrayTech_red_ll.push(
                        '<details><summary class="summary output_red" style="padding:3px 3px 3px 150px"><a target="_blank" style="color:#bf2026ff;text-decoration:underline" href="' +
                        allTech[item].url + '">' +
                        allTech[item].techID +
                        ' (' + allTech[item].techName +
                        ')</a>' + ': ' +
                        allTech[item].test_total +
                        '</summary>' +
                        testDetails +
                        '</details>'
                    )

                }

                rulesDetails = []
                testDetails = []

                rulesDetails.push('<p style="margin-left:24px;padding:6px 6px 6px 150px">' +
                                  allTech[item].splunkDetails +
                                  allTech[item].splunk_threatHuntingDetails +
                                  allTech[item].elasticDetails +
                                  allTech[item].eql_analyticsDetails +
                                  allTech[item].azure_sentinelDetails +
                                  allTech[item].logpointDetails +
                                  allTech[item].proofpoint_emergingThreatsDetails +
                                  allTech[item].tanium_threatResponseDetails +
                                  allTech[item].azure_fullStackDetails +
                                  allTech[item].awsDetails +
                                  allTech[item].gcpDetails +
                                  allTech[item].carDetails +
                                  allTech[item].atcDetails +
                                  allTech[item].sigmaDetails +
                                  allTech[item].th_playbookDetails +
                                  '</p>'
                )

                testDetails.push('<p style="margin-left:24px;padding:6px 6px 6px 150px">' +
                                  allTech[item].artDetails +
                                  allTech[item].car_redDetails +
                                  allTech[item].rtaDetails +
                                  allTech[item].preludeDetails +
                                  allTech[item].stockpileDetails +
                                  allTech[item].scytheDetails +
                                  '</p>'
                )

                arrayTech_blue.push(
                    '<details><summary class="summary output_blue" style="padding:3px 3px 3px 150px"><a target="_blank" style="color:#1565c0;text-decoration:underline" href="' +
                    allTech[item].url + '">' +
                    allTech[item].techID +
                    ' (' + allTech[item].techName +
                    ')</a>' + ': ' +
                    allTech[item].rule_total +
                    '</summary>' +
                    rulesDetails +
                    '</details>'
                )

                arrayTech_red.push(
                    '<details><summary class="summary output_red" style="padding:3px 3px 3px 150px"><a target="_blank" style="color:#bf2026ff;text-decoration:underline" href="' +
                    allTech[item].url + '">' +
                    allTech[item].techID +
                    ' (' + allTech[item].techName +
                    ')</a>' + ': ' +
                    allTech[item].test_total +
                    '</summary>' +
                    testDetails +
                    '</details>'
                )

            }
        }

        unique_blue_ll = arrayTech_blue_ll.filter(onlyUnique)
        unique_red_ll = arrayTech_red_ll.filter(onlyUnique)

        let techList_blue_ll  = unique_blue_ll.join('<br>');
        let techList_red_ll  = unique_red_ll.join('<br>');

        unique_blue = arrayTech_blue.filter(onlyUnique)
        unique_red = arrayTech_red.filter(onlyUnique)

        let techList_blue  = unique_blue.join('<br>');
        let techList_red  = unique_red.join('<br>');

        $('#cvc-output_header').html("The following volume of detections & tests are available from the selected control sets. If you haven't already, <b>consider implementing detections or validation tests for the controls at the top of the list</b> - these are the techniques that have the largest volume of readily-available detections and/or tests.");

        if ($('#lowestLevel').is(":checked")) {
            $('#cvc-output_blue').html(techList_blue_ll);
            $('#cvc-output_red').html(techList_red_ll);
        } else {
            $('#cvc-output_blue').html(techList_blue);
            $('#cvc-output_red').html(techList_red);
        };

    });

});
