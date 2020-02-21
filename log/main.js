const mainFlex = document.querySelector(".main-flex");
const header = document.querySelector(".header-title");
var entries = document.querySelectorAll(".entry");
var lastEntry = document.querySelector(".entry:last-child");


// Read data from log/data.json and deploy it
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function()
{
	if (this.readyState == 4 && this.status == 200)
	{
		var data = JSON.parse(xhttp.responseText);
		for(entry of data.entries)
		{
			// Create the new entry
			var newEntry = document.createElement("div"); 
			newEntry.classList.add("entry");
			
			// Write the entry's HTML
			newEntry.innerHTML = `
				<span>${entry.name}</span>
				<span>${entry.concept}</span>
				<span>${entry.practice}</span>
				<span>${entry.notes}</span>`;

			// Highlight the words 'done' and 'todo'
			newEntry.innerHTML = newEntry.innerHTML.replace(/done/g,
				"<label style=\"color:#7F7\">done</label>");

			newEntry.innerHTML = newEntry.innerHTML.replace(/todo/g,
				"<span style=\"color:#F77\">todo</span>");

			// Insert the entry at the top of the table
			mainFlex.insertBefore(newEntry, mainFlex.children[1]);
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


