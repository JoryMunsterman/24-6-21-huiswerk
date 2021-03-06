// ==========================================
// Opdracht 1
// Schrijf een script dat iedere naam in bovenstaande array vervangt door een koosnaampje, door er -"je" achter te plakken.
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 namen zou bevatten!
// ==========================================

const names = ["Henk", "Piet", "Fred", "Joop"];
result = names.map(x => x + "je ").join('');
console.log(result) //ik heb niet de uitkomst met console.log(names) kunnen krijgen. wel met (result)

// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(names) geeft: ["Henk", "Piet", "Fred", "Joop"]
// Na jouw script zie je de aangepaste waardes:
// console.log(names) geeft: ["Henkje", "Pietje", "Fredje", "Joopje"]


// ==========================================
// Opdracht 2
// Schrijf een script dat ieder getal in bovenstaande array met 3 vermenigvuldigd.
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!
// ==========================================

const numbers = [2, 4, 5, 29, 38];
const multiplier = 3;
results = numbers.map( x => x * multiplier);
console.log(results) //geeft de juiste antwoorden maar ook hier niet gelukt om console.log(numbers) te gebruiken

// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(numbers) geeft: [2, 4, 5, 29, 38];
// Na jouw script zie je de aangepaste waardes:
// console.log(numbers) geeft: [ 6, 12, 15, 87, 114 ];


// ==========================================
// Opdracht 3
// Schrijf een script dat voor de maat van ieder vierkant in onderstaande array het volume uitrekent.
// Het volume is lengte x breedte x hoogte
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!
// ==========================================

const squares = [30, 2, 8, 24, 11];
const volume = 3;
results = squares.map( y => y ** volume);
console.log(results) //ook hier niet resultaat met console.log(numbers) gehaald. Wel juiste uitkomst qua cijfers


// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(numbers) geeft: [30, 2, 8, 24, 11];
// Na jouw script zie je de aangepaste waardes:
// console.log(numbers) geeft: [27000, 8, 512, 13824, 1331];
