/*
var motto = 'Never do give up on what you really want to do';
var mottoCharsAfter = motto.replace('do', 'have');

console.log(mottoCharsAfter);
var keywords = 'red, green, blue, yellow, pink, orange, white';
var keywordsArray = keywords.split(', ');
keywordsArray.map( function(element) {
console.log('#tag-' + element);
} );
*/
var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
dinosaur = dinosaur.toUpperCase();
var textEdited = text.replace('Velociraptor', dinosaur);
console.log(textEdited.slice(0,textEdited.length/2));