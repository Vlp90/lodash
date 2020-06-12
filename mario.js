const _ = require("lodash");

var mItems = [
  ["Banana", "Blooper", "Bob-omb", "Boomerang Flower", "Bullet Bill"],
  ["Coin", "Crazy 8"],
  ["Fire Flower"],
  ["Golden Mushroom", "Green Shell"],
  ["Item Box"],
  ["Lightning"],
  ["Mushroom"],
  ["Piranha Plant"],
  ["Red Shell"],
  ["Spiny Shell/Blue Shell", "Star", "Super Horn"],
  [
    "Triple Bananas",
    "Triple Green Shells",
    "Triple Mushrooms",
    "Triple Red Shells",
  ],
];

var mCharacters = [
  { name: "Baby Daisy" },
  { name: "Baby Luigi" },
  { name: "Baby Mario" },
  { name: "Baby Peach" },
  { name: "Baby Rosalina" },
  { name: "Bowser" },
  { name: "Daisy" },
  { name: "Donkey Kong" },
  { name: "Iggy" },
  { name: "Koopa Troopa" },
  { name: "Lakitu" },
  { name: "Larry" },
  { name: "Lemmy" },
  { name: "Ludwig" },
  { name: "Luigi" },
  { name: "Mario" },
  { name: "Metal Mario" },
  { name: "Mii" },
  { name: "Morton" },
  { name: "Peach" },
  { name: "Pink Gold Peach" },
  { name: "Rosalina" },
  { name: "Roy" },
  { name: "Shy Guy" },
  { name: "Toad" },
  { name: "Toadette" },
  { name: "Waluigi" },
  { name: "Wario" },
  { name: "Wendy" },
  { name: "Yoshi" },
];

var mKarts = [
  { name: "Standard Kart", type: "Kart" },
  { name: "Pipe Frame", type: "Kart" },
  { name: "Mach 8", type: "Kart" },
  { name: "Steel Driver", type: "Kart" },
  { name: "Cat Cruiser", type: "Kart" },
  { name: "Circuit Special", type: "Kart" },
  { name: "Tri-Speeder", type: "Kart" },
  { name: "Badwagon", type: "Kart" },
  { name: "Prancer", type: "Kart" },
  { name: "Biddybuggy", type: "Kart" },
  { name: "Landship", type: "Kart" },
  { name: "Sneeker", type: "Kart" },
  { name: "Sports Coupe", type: "Kart" },
  { name: "Gold Standard", type: "Kart" },
  { name: "GLA", type: "Kart" },
  { name: "W 25 Silver Arrow", type: "Kart" },
  { name: "300 SL Roadster", type: "Kart" },
  { name: "The Blue Falcon", type: "Kart" },
  { name: "B-Dasher", type: "Kart" },
  { name: "Tanooki Kart", type: "Kart" },
  { name: "Streetle", type: "Kart" },
  { name: "Standard Bike", type: "Bike" },
  { name: "Comet", type: "Bike" },
  { name: "Sport Bike", type: "Bike" },
  { name: "The Duke", type: "Bike" },
  { name: "Flame Rider", type: "Bike" },
  { name: "Varmint", type: "Bike" },
  { name: "Mr. Scooty", type: "Bike" },
  { name: "Jet Bike", type: "Bike" },
  { name: "Yoshi Bike", type: "Bike" },
  { name: "The Master Cycle", type: "Bike" },
  { name: "City Tripper", type: "Bike" },
  { name: "Standard ATV", type: "ATV" },
  { name: "Wild Wiggler", type: "ATV" },
  { name: "Teddy Buggy", type: "ATV" },
];

var player = {};

var member = {
  name: 'John Meyer',
  age: 42,
  children: [
    { name: 'Lori', age: 15 },
    { name: 'Frank', age: 12 }
  ],
  wife: 'Anna'
};

var users = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
  { user: 'pebbles', age: 1, active: true }
];

// LODASH COMMANDS

//Réduit un tableau à une dimension
console.log( _.flatten(mKarts))

// Renvoie un tableau unidimensionnel avec les éléments initiaux
console.log( _.flattenDeep(mKarts))

// 	Aplatit un tableau jusqu'à une profondeur donnée
console.log( _.flattenDepth(mKarts, [depth=1]))

// Renvoie la dernière entrée du tableau donné
console.log( _.last(mItems))
console.log( _.last(mCharacters))
console.log( _.last(mKarts))

// Renvoie l'index de la dernière valeur trouvée dans le tableau      //   _.lastIndexOf(array, value, [fromIndex=array.length-1])
console.log( _.lastIndexOf(mItems))
console.log( _.lastIndexOf(mCharacters))
console.log( _.lastIndexOf(mKarts))

//Définit la valeur d'une propriété dans un objet
console.log(_.set(member, 'children[1].age', 13));


// Supprime la propriété d'un objet sur un chemin donné
console.log(_.unset(member, 'wife'));
console.log(member)

// Vérifie si un chemin est une propriété d'un objet. Il renvoie un booléen trues'il trouve la propriété et falsesinon.
console.log(_.has(member, 'children'));
console.log(_.has(member, 'potes'));
console.log(member)

//Renvoie un tableau multidimensionnel avec des paires valeur / clé pour les propriétés d'objet. Si un objet est une carte ou un ensemble, ses entrées sont renvoyées.
console.log(_.toPairs(member));
console.log(member)

// Trouvez le premier élément avec la valeur donnée dans chaque élément de collection
console.log(users)
console.log(_.find(users, function (o) {
  return o.age < 50;
}));

console.log(_.find(users, { age: 1, active: true }))
console.log(_.find(users, ['active', false]))
console.log(_.find(users, 'active'))

// Renvoie un tableau de valeurs mélangées, à l'aide d'une version du mélange Fisher-Yates.
console.log(_.shuffle(users))

// Vérifie si la valeur est dans la collection et renvoie true si la valeur est trouvée et false si elle n'est pas trouvée.
console.log(_.includes(member, 'John Meyer'));
console.log(_.includes(member, 'Vlad'));

// Crée un objet avec des valeurs groupées
console.log(_.groupBy([6.1, 4.2, 6.3], Math.floor))
console.log(_.groupBy(['one', 'two', 'three'], 'length'));


// Obtient un élément aléatoire de la collection.
console.log(_.sample([1, 2, 3, 4]))

// Obtient la taille de la collection en renvoyant sa longueur pour les valeurs de type tableau ou le nombre de propres propriétés de chaîne à énumération pour les objets.
console.log(_.size([1, 2, 3]));
console.log(_.size({ a: 1, b: 2, c:3 }))
console.log(_.size('pebbles'))
