const mainFlex = document.querySelector(".main-flex");
const header = document.querySelector(".header-title");
var entries = document.querySelectorAll(".entry");
var lastEntry = document.querySelector(".entry:last-child");


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function()
{
	if (this.readyState == 4 && this.status == 200)
	{
		var data = JSON.parse(xhttp.responseText);
		for(entry of data.entries)
		{
			var newEntry = document.createElement("div");
			newEntry.classList.add("entry");
			newEntry.innerHTML = `
				<span>${entry.name}</span>
				<span>${entry.concept}</span>
				<span>${entry.practice}</span>
				<span>${entry.date}</span>
				<span>${entry.notes}</span>`;

			newEntry.innerHTML = newEntry.innerHTML.replace(/done/g,
				"<div style=\"color:green\">done</div>");

			newEntry.innerHTML = newEntry.innerHTML.replace(/todo/g,
				"<div style=\"color:red\">todo</div>");

			console.log(newEntry.innerHTML);

			mainFlex.insertBefore(newEntry, mainFlex.children[1]);

			console.log(mainFlex);
		}
	}
};
xhttp.open("GET", "log/data.json", true);
xhttp.send();


// ~~ Remove margins on shrink ~~ //

let minOptimalPageWidth = 800;

function updateMargins()
{
	if(document.body.clientWidth < 800)
	{
		mainFlex.classList.add("expanded");
		header.classList.add("expanded");
		console.log(mainFlex.width);
	}
	else
	{
		mainFlex.classList.remove("expanded");
		header.classList.remove("expanded");
	}
}

document.defaultView.addEventListener("resize", updateMargins, true);


