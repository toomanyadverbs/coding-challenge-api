var url = "https://data.cityofboston.gov/resource/4swk-wcg8.json";

//GET all Data
// $("button").click(function(){
// 	$.get( url, function(response) {
//   		$(".result" ).text(response);
//   		console.log( "Load was performed. Data: " + response);
// 	});
// });

//GET just some Data
var urlForTitle = url + "?title=" + "Intern I"

$("button").click(function(){
	$.get( urlForTitle, function(response) {
  		$(".result" ).text(response);
  		console.log( "Load was performed. Data: " + response);
	});
});