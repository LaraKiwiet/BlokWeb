// JavaScript Document
console.log('bladeren js');

var fotos = ['slide1.jpeg','slide2.jpeg', 'slide3.jpeg'];

var fotoImg = document.querySelector('#foto');
var huidigNrSpan = document.querySelector('#huidigeFotoNr');
var laatsteNrSpan = document.querySelector('#laatsteFotoNr');
var vooruitButton = document.querySelector('#vooruit');
var achteruitButton = document.querySelector('#terug');

var huidigFotoNr = 0 ; // initieel op 0
toonHuidigeFoto();	

function toonHuidigeFoto() {
	console.log('bladeren ' + huidigFotoNr);
	fotoImg.src = 'images/' + fotos[huidigFotoNr];
	huidigNrSpan.textContent = huidigFotoNr ;
	laatsteNrSpan.textContent = fotos.length - 1;
}


function bladerVooruit() {
	huidigFotoNr = huidigFotoNr + 1 ;
	if ( huidigFotoNr > fotos.length -1 ) { // voorbij het einde 
		huidigFotoNr = 1 ; // terug naar begin
	}
	toonHuidigeFoto();	
}

function bladerAchteruit() {
	huidigFotoNr = huidigFotoNr - 1 ;
	if ( huidigFotoNr < 1 ) { // voorbij het begin 
		huidigFotoNr = fotos.length -1 ; // terug naar einde
	}
	toonHuidigeFoto();
}

vooruitButton.addEventListener('click' , bladerVooruit );
achteruitButton.addEventListener('click' , bladerAchteruit );