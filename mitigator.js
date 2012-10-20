//<script>

//UI
var mock_summary;
var mock_collection;
var ui_pool;
var ui_collections;

//USER DATA
var collections = [];
var current_collection = "development";

var tasks = [];

function initialize() {
	ui_pool = document.getElementById('pool');
	
	var src = document.getElementById('mock_summary');
	mock_summary = src.cloneNode(true);
	ui_pool.removeChild(src);
	
	ui_collections = document.getElementById('collections');
	var src = document.getElementById('mock_collection');
	mock_collection = src.cloneNode(true);
	ui_collections.removeChild(src);
}

function updateTasks() {
	if(current_collection) {
		xmlhttp = new XMLHttpRequest();
		
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState==4 && xmlhttp.status==200) {
				//store the data
				var parts = xmlhttp.responseText.split(";");
				parts.splice(-1, 1);
				tasks = parts;
				
				//clear
				while (ui_pool.hasChildNodes()) {
					ui_pool.removeChild(ui_pool.lastChild);
				}
				
				//update the UI
				summarize("a task", "---", tasks[0]);
			}
		}
		
		xmlhttp.open("GET","getinfo.php?q=tasks&c="+current_collection, true);
		xmlhttp.send();
	}
}

function updateCollections() {
	xmlhttp = new XMLHttpRequest();
	
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			//store the data
			var parts = xmlhttp.responseText.split(",");
			parts.splice(-1, 1);
			collections = parts;
			
			//clear
			while (ui_collections.hasChildNodes()) {
				ui_collections.removeChild(ui_collections.lastChild);
			}
			
			//update the UI
			for(var i in collections) {
				var new_collection = mock_collection.cloneNode(true);
				new_collection.innerHTML = collections[i];
				ui_collections.appendChild(new_collection);
			}
		}
	}
	
	xmlhttp.open("GET","getinfo.php?q=collections", true);
	xmlhttp.send();
}

function makeRequest(request) {
	xmlhttp = new XMLHttpRequest();
	
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			//do something with the response
			alert(xmlhttp.responseText);
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
//</script>
