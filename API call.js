/*
    
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49", false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
    var response = JSON.parse(xhttp.responseText);
    console.log(response);
    //document.writeln(response);
   /* fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(json => console.log(json))
  */


function DysplayMovieInConsole(){
var x= filmApiCall("58611129-2dbc-4a81-a72f-77ddfc1b1b49");
console.log(x);
}

function filmApiCall(id) {
var movie = GETAPICall("https://ghibliapi.herokuapp.com/films/" + id);
return movie;
}


function GETAPICall(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
    var response = JSON.parse(xhttp.responseText);
	return response;
};
    
    
 /*
function ApiCall1() {
    var xhttp1 = new XMLHttpRequest();
    xhttp1.open("POST", "https://reqres.in/api/register ", false);
    xhttp1.setRequestHeader("Content-type", "application/json");
    xhttp1.send(JSON.stringify({"email": "sydney@fife", "password": "pistol"}));
    console.log(xhttp1.status);  
}
*/   
    
    
    
function POSTAPICall(url, body) {
    var xhttp1 = new XMLHttpRequest();
    xhttp1.open("POST", url, false);
    xhttp1.setRequestHeader("Content-type", "application/json");
    xhttp1.send(body);
    return xhttp1;
    
}

function determinatePOSTUrlAndBody() {
var newUser = POSTAPICall("https://reqres.in/api/register",'{"email": "sydney@fife", "password": "pistol"}');
console.log(newUser.status);
}
