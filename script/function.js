function getjsonfile(wx){var jfile=new XMLHttpRequest();jfile.open("GET",wx,false);jfile.send();return JSON.parse(jfile.responseText);}
