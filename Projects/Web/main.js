var imgContainers = document.querySelectorAll(".container");
var count;


for(count = 0; count < imgContainers.length; count++)
{
    imgContainers[count].addEventListener("mouseover", function(){

        this.style.transition = "all 0.5s";
        this.style.flexGrow = 1.5;

        this.querySelector(".prev-text").classList.toggle("expanded");
        this.querySelector(".p-text").classList.toggle("expanded");
    });

    imgContainers[count].addEventListener("mouseout", function(){

        this.style.flexGrow = 1;

        this.querySelector(".prev-text").classList.toggle("expanded");
        this.querySelector(".p-text").classList.toggle("expanded");
    });

    imgContainers[count].addEventListener("click", function(){

        console.log("click");
    });

	/* Background movement */
	imgContainers[count].addEventListener("mousemove", function(e){
		moveBackground(e, this);
	});
}

function moveBackground(e, element)
{
	
}
