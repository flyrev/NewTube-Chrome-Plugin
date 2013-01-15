// Change this to chrome.storage.local if you don't want your stuff to be synced.
const storage = chrome.storage.sync;



function null_function() { }
var v_id = $('input[name="video_id"]').val();

var array = [];

storage.get('array', function(r) {
		array = r['array'];
		if (array == undefined)
			array = [];
			
		var index = array.indexOf(v_id);
		if (index != -1) {
			document.getElementById("seen_checkbox").checked = true;
		}

		console.log("Fetched data");
		console.log(array);
		
		var links = document.links;
		var removed=0;
		for (var i = 0; i<array.length; i++) {
			// var lookup = 'a[href^="/watch?v=' + array[i] + '"]'; // ^ is "starts with"
			// $(lookup).innerHTML = "BOGUS" + $(lookup).innerHTML;
			
			var full_url = 'http://www.youtube.com/watch?v=' + array[i];
			var view = 'v=' + array[i];
			
			
			for (var j=0; j<links.length; j++) {
				if (links[j].href.indexOf(view) != -1) {
					//console.log(links[j].href + " removed!");
					links[j].innerHTML="";
					removed++;
				}
				
			}
		}
		console.log(removed + " videos removed");
});

function toggle_change(){
	if (array == undefined)
			array = [];
		
	var index = array.indexOf(v_id);

	if(document.getElementById("seen_checkbox").checked) {
	  if (index == -1) {
		array.push(v_id);
	  } 
	}
	
	else{
	  if (index != -1) {
		array.splice(index, 1);
	  }
	}

   storage.set({'array': array}, function() {
   			console.log("Saved data");
			console.log(array);
   });
}

var input = document.createElement("have_seen_it");
input.type = "checkbox";

var cb = document.createElement( "input" );
cb.type = "checkbox";
cb.id = "seen_checkbox";

if (array.indexOf(v_id) == -1)
	cb.checked = false;
else
	cb.checked = true;
	
var text = document.createTextNode( "I've seen this: " );
document.getElementById( 'watch7-headline' ).appendChild( text );
document.getElementById( 'watch7-headline' ).appendChild( cb );
cb.onclick = toggle_change;