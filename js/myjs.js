// var m1 = '';
// function max(){
// 	 m1 = document.getElementById("max").value();
   
// }
var submit = function()
{
	var urlBase = "https://gateway-a.watsonplatform.net/calls/text/TextGetRankedKeywords?";
	var apiKey = "8b211baeffef9b29cb2a5cae03d76f0f09435f83";
	urlBase = urlBase+"apikey="+apiKey;
	var inputText = $("#exemplar").val();
	urlBase = urlBase+"&text="+encodeURIComponent(inputText);
	urlBase = urlBase+"&outputMode=json";
	
	
	 $.ajax({
		url: urlBase,
		type: 'POST',
		success: function(data){
			console.log(data);
			 var m1 = document.getElementById("maxField").submit();
			 console.log(m1);
			var str=inputText;
			//var ans = '';
			var ans = str.replace(data['keywords'][0]['text'] ,"______");
			for(var i=1; i<5;i++) {
				//var ans=data['keywords'][i]['text'];
				//console.log();
				// console.log(ans);
				// console.log(data['keywords'][0]['relevance']);
				// console.log(inputText);
				// var str=inputText;
				ans.replace(data['keywords'][i]['text'] ,"______");
				// console.log(n);
				// document.getElementById("result").innerHTML = n;	
			}
			console.log(ans);
			document.getElementById("result").innerHTML = ans;

}

	 });

	//  $("#maximum").click(function(){
	// 			console.log(document.getElementById("max").value);
	// });

}
