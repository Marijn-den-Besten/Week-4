alert('Welkom bij Pick a Door');
var begin = prompt('Kies een deur 1 tot en met 5');

if (begin == '1') {
	alert('Je hebt deur 1 gekozen');
	alert('Hier staat een fiets');
	document.location.reload(); 
}

else if (begin == '2') {
	alert('Je hebt deur 2 gekozen');
	alert('Hier staat een hark');
	document.location.reload();
}

else if (begin == '3') {
	alert('Je hebt deur 3 gekozen');
	var volgendekamer = prompt('Dit is de deur naar de volgende kamer. \nHeb je alles gehad.  (Ja of Nee)');

if (volgendekamer.toLowerCase() == 'ja') {
	var vraag1 = prompt('Achter welke deur ligt/staat: een rol tape');

	if (vraag1 == '4') {
		alert('Goed!');
		var vraag2 = prompt('Achter welke deur ligt/staat: een fiets');
	
		if (vraag2 == '1') {
			alert('Goed!');
			var vraag3 = prompt('Achter welke deur ligt/staat: een tablet');

			if (vraag3 == '5') {
				alert('Goed!');
				var vraag4 = prompt('Achter welke deur ligt/staat: een hark');

				if (vraag4 == '2') {
					alert('Goed!');
					document.write('Je hebt alles goed!')
				}
				else if (vraag4 == '1'||'3'||'4'||'5') {
					alert('Fout');
					document.location.reload();
				}
			}
			else if (vraag3 == '1'||'2'||'3'||'4') {
				alert('Fout');
				document.location.reload();
			}
		}
		else if (vraag2 == '2'||'3'||'4'||'5') {
			alert('Fout');
			document.location.reload();
		}
}
else if (vraag1 == '1'||'2'||'3'||'5') {
	alert('Fout');
	document.location.reload();
}

}

else if (volgendekamer.toLowerCase() == 'nee') {
	document.location.reload();
}
}

else if (begin == '4') {
	alert('Je hebt deur 4 gekozen');
	alert('Hier ligt een rol tape');
	document.location.reload();
}

else if (begin == '5') {
	alert('Je hebt deur 5 gekozen');
	alert('Hier ligt een tablet');
	document.location.reload();
}