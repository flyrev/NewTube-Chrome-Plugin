// Change this to chrome.storage.local if you don't want your stuff to be synced.
const storage = chrome.storage.sync;

console.log("Mainpage script starting");

storage.get('array', function(r) {
		var array = r['array'];
		
		var links = document.links;
		var removed=0;
		for (var i = 0; i<array.length; i++) {			
			var full_url = 'http://www.youtube.com/watch?v=' + array[i];
			var view = 'v=' + array[i];
			
			for (var j=0; j<links.length; j++) {
				if (links[j].href.indexOf(view) != -1) {
					console.log(links[j].href + " removed!");
					links[j].innerHTML="";
					removed++;
				}
				
			}
		}

		console.log(removed + " videos removed");
});