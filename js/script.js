var url = "https://data.cityofboston.gov/resource/4swk-wcg8.json";

$("button").click(function()
{
$.get( url, function( data ) {
  $( ".result" ).html( data );
  console.log( "Load was performed." );
});
});