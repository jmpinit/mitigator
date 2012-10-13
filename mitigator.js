//<script>

var mock_summary;
var pool;

function initialize() {
	pool = document.getElementById('pool');
	
	var src = document.getElementById('mock_summary');
	mock_summary = src.cloneNode(true);
	pool.removeChild(src);
}

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

function getChildById(node, id) {
	if(node!=null &&
	!(typeof node === "undefined") &&
	!(typeof node.hasChildNodes === "undefined") &&
	node.hasChildNodes()) {
		if(!(typeof node.attributes.id === "undefined") && node.attributes.id.value===id) { return node; }
		
		for(var i in node.childNodes) {
			var child = node.childNodes[i];
			var result = getChildById(child, id);
			if(result!=false) { return result; }
		}
		
		return false;
	} else {
		return false;
	}
}

function summarize(name, due, desc) {
	var new_summary = mock_summary.cloneNode(true);
	
	getChildById(new_summary, 'name').innerHTML = name;
	getChildById(new_summary, 'due').innerHTML = due;
	getChildById(new_summary, 'desc').innerHTML = desc;
	
	pool.appendChild(new_summary);
}

function makeSummary(name, due, desc) {
	var task = document.createElement('div');
	task.setAttribute('class', 'content-bubble');
	
	var table = document.createElement('table');
	table.setAttribute('style', 'width: 100%;');
	task.appendChild(table);
	
	var icol = document.createElement('td');
	var dcol = document.createElement('td');
	table.appendChild(icol);
	table.appendChild(dcol);
	
	//create info section
	var info = document.createElement('table');
	
	var name_row = document.createElement('tr');
	name_row.appendChild(document.createElement('td').appendChild(document.createTextNode("name:")));
	name_row.appendChild(document.createElement('td').appendChild(document.createTextNode(name)));
	info.appendChild(name_row);
	
	var due_row = document.createElement('tr');
	due_row.appendChild(document.createElement('td').appendChild(document.createTextNode("due date:")));
	due_row.appendChild(document.createElement('td').appendChild(document.createTextNode(due)));
	info.appendChild(due_row);
	
	icol.appendChild(info);
	
	//create description section
	dcol.appendChild(document.createTextNode(desc));
	
	document.getElementById('pool').appendChild(task);
}
//</script>
