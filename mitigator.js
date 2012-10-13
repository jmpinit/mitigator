//<script>
function makeRequest(request) {
	document.getElementById("title").innerHTML = "getting task...";
	
	xmlhttp = new XMLHttpRequest();
	
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			//do something with the response
			document.getElementById("title").innerHTML = xmlhttp.responseText;
		}
	}
	
	xmlhttp.open("GET","getinfo.php?q="+request, true);
	xmlhttp.send();
}
//</script>
