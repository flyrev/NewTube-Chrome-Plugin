function changeHandler(){
alert("ding");
   //Do Something...maybe another function showAlert(), for instance
   if(document.getElementById("seen_checkbox".checked)) {
      alert("checked");
   }
   else{
      alert("unchecked");
   }
}

document.getElementById("watch-headline-title").innerHTML += "flyrev";
document.getElementById("watch-headline-title").innerHTML += ":)";

var input = document.createElement("have_seen_it");
input.type = "checkbox";

var cb = document.createElement( "input" );
cb.type = "checkbox";
cb.id = "seen_checkbox";
cb.checked = false; // WELL THAT DEPENDS DOESN'T IT.
var text = document.createTextNode( "checkbox" );
document.getElementById( 'watch7-headline' ).appendChild( text );
document.getElementById( 'watch7-headline' ).appendChild( cb );

document.getElementById("seen_checkbox").addEventListener('change', 'changeHandler');