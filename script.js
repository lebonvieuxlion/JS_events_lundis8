
//------------------------------Exo 1----------------------------------------------------------------------

var footer = document.querySelector("footer");
var numberOfClick = 1;

var sayClick = function(){
	console.log(`clique n°${numberOfClick}`)
	numberOfClick++
};

footer.addEventListener("click", sayClick);




//------------------------------Exo 2----------------------------------------------------------------------

var hamburgerMenu = document.getElementById("navbarHeader");
hamburgerMenu.classList.remove("collapse");

var collapseHamburger = function(){
	this.classList.add("collapse");
};

hamburgerMenu.addEventListener("click", collapseHamburger);



//------------------------------Exo 3----------------------------------------------------------------------

var firstBtnEdit = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0]

var changeColorBtn = function() {
	this.style.color = "red"
}

firstBtnEdit.addEventListener("click", changeColorBtn)





//------------------------------Exo 4----------------------------------------------------------------------
var secondBtnEdit = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1]


var toggleBtnColor = function() {
	if(this.style.color === "red"){
		this.style.color =  ""
	}
	else{
		this.style.color = "red"
	}
};

secondBtnEdit.addEventListener("click", toggleBtnColor);


//------------------------------Exo 5----------------------------------------------------------------------

var linkBootstrap = document.getElementsByTagName("link")[0];
var header = document.getElementsByTagName("header")[0];

var toggleBootstrap = function() {

	if(linkBootstrap.href === "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"){
		linkBootstrap.href =  ""
	}
	else{
		linkBootstrap.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
	}
};

header.addEventListener("dblclick", toggleBootstrap)


//------------------------------Exo 6----------------------------------------------------------------------

var arrayViews = document.getElementsByClassName("btn btn-sm btn-success");
var arrayCards = document.getElementsByClassName("col-md-4");
var arrayImg = document.getElementsByClassName("card-img-top");
var arrayParagraphs = document.getElementsByClassName("card-text");

var mouseOverView = function(){
	for (let i = 0; i < arrayCards.length; i++) {

		if (arrayParagraphs[i].style.display === "none"){

		arrayImg[i].style.width = "";
		arrayImg[i].style.height = "";
		arrayParagraphs[i].style.display = "block";
		}

		else{

		arrayImg[i].style.width = "20%";
		arrayImg[i].style.height = "20%";
		arrayParagraphs[i].style.display = "none";

		}
	}
};


Array.prototype.forEach.call(arrayViews, element => {

	element.addEventListener("mouseover", mouseOverView)

});

//------------------------------Exo 7----------------------------------------------------------------------

