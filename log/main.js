const mainFlex = document.querySelector(".main-flex");
const header = document.querySelector(".header-title");
var entries = document.querySelectorAll(".entry");
var lastEntry = document.querySelector(".entry:last-child");


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function()
{
	if (this.readyState == 4 && this.status == 200)
	{
		var response = JSON.parse(xhttp.responseText);
		console.log(xttp.responseText);
	}
};
xhttp.open("GET", "data.json", true);
xhttp.send();


// ~~ Remove margins on shrink ~~ //

let minOptimalPageWidth = 800;

function updateMargins()
{
	if(document.body.clientWidth <= minOptimalPageWidth)
	{
		mainFlex.classList.add("expanded");
		header.classList.add("expanded");
	}
	else
	{
		mainFlex.classList.remove("expanded");
		header.classList.remove("expanded");
	}
}

document.defaultView.addEventListener("resize", updateMargins, true);


