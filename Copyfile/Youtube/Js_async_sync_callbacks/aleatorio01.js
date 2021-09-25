
// set variable with array value

const namesparents = [
    "Rafael",
    "Amanda",
    "Helena",
    "Jonice",
    "Renata"
];

// Show amount characters

console.log(namesparents.map( namesparent => namesparent.length ));

console.log('Or using function on the code...')

var names = [
    'Rafael',
    'Goncalves',
    'Matos'
];

names.map(function(name) {
    return name.length;
});


var marcas = [ 
    'nike',
    'adidas'
]

marcas.map(function(marcas){
    return marcas.length
})