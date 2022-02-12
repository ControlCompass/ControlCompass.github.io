const buttonsForRefresh = ["indexCol", "sumField", "avgField", "nestCol"];

$(document).ready(function(){

    var arrayCvc = [];

	$.ajax({
		url: "cvc.json",
		async: true,
		dataType: 'json',
		success: function (data) {
			for (var i = 0, len = data.length; i < len; i++) {
				arrayCvc.push({'value' : data[i].techID,
				               'technique' : data[i].technique,
				               'url' : data[i].url,
				               'validate_potential' : data[i].validate_potential
				    }
				);
			};
		}
	});

	$('#process-data').click(function(){

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
            if (arrayReturn.includes(arrayCvc[i].value) && arrayCvc[i].validate_potential < 3) {
                arrayTech.push('<a style="text-decoration:underline" target="_blank" href="' + arrayCvc[i].url + '">' + arrayCvc[i].technique + '</a>'
                );
            };
        };

        unique = arrayTech.filter(onlyUnique)

        let techList  = unique.join('<br>');

        $('#csv-output').html(techList);

    });
});
