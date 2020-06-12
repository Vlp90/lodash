const _ = require('lodash');

var mItems = [
    ['Banana', 'Blooper', 'Bob-omb', 'Boomerang Flower', 'Bullet Bill'],
    ['Coin', 'Crazy 8'],
    ['Fire Flower'],
    ['Golden Mushroom', 'Green Shell'],
    ['Item Box'],
    ['Lightning'],
    ['Mushroom'],
    ['Piranha Plant'],
    ['Red Shell'],
    ['Spiny Shell/Blue Shell', 'Star', 'Super Horn'],
    ['Triple Bananas', 'Triple Green Shells', 'Triple Mushrooms', 'Triple Red Shells']
  ];
   
  var mCharacters = [
    { name: 'Baby Daisy' },
    { name: 'Baby Luigi' },
    { name: 'Baby Mario' },
    { name: 'Baby Peach' },
    { name: 'Baby Rosalina' },
    { name: 'Bowser' },
    { name: 'Daisy' },
    { name: 'Donkey Kong' },
    { name: 'Iggy' },
    { name: 'Koopa Troopa' },
    { name: 'Lakitu' },
    { name: 'Larry' },
    { name: 'Lemmy' },
    { name: 'Ludwig' },
    { name: 'Luigi' },
    { name: 'Mario' },
    { name: 'Metal Mario' },
    { name: 'Mii' },
    { name: 'Morton' },
    { name: 'Peach' },
    { name: 'Pink Gold Peach' },
    { name: 'Rosalina' },
    { name: 'Roy' },
    { name: 'Shy Guy' },
    { name: 'Toad' },
    { name: 'Toadette' },
    { name: 'Waluigi' },
    { name: 'Wario' },
    { name: 'Wendy' },
    { name: 'Yoshi' }
  ];
   
  var mKarts = [
    { name: 'Standard Kart', type: 'Kart' },
    { name: 'Pipe Frame', type: 'Kart' },
    { name: 'Mach 8', type: 'Kart' },
    { name: 'Steel Driver', type: 'Kart' },
    { name: 'Cat Cruiser', type: 'Kart' },
    { name: 'Circuit Special', type: 'Kart' },
    { name: 'Tri-Speeder', type: 'Kart' },
    { name: 'Badwagon', type: 'Kart' },
    { name: 'Prancer', type: 'Kart' },
    { name: 'Biddybuggy', type: 'Kart' },
    { name: 'Landship', type: 'Kart' },
    { name: 'Sneeker', type: 'Kart' },
    { name: 'Sports Coupe', type: 'Kart' },
    { name: 'Gold Standard', type: 'Kart' },
    { name: 'GLA', type: 'Kart' },
    { name: 'W 25 Silver Arrow', type: 'Kart' },
    { name: '300 SL Roadster', type: 'Kart' },
    { name: 'The Blue Falcon', type: 'Kart' },
    { name: 'B-Dasher', type: 'Kart' },
    { name: 'Tanooki Kart', type: 'Kart' },
    { name: 'Streetle', type: 'Kart' },
    { name: 'Standard Bike', type: 'Bike' },
    { name: 'Comet', type: 'Bike' },
    { name: 'Sport Bike', type: 'Bike' },
    { name: 'The Duke', type: 'Bike' },
    { name: 'Flame Rider', type: 'Bike' },
    { name: 'Varmint', type: 'Bike' },
    { name: 'Mr. Scooty', type: 'Bike' },
    { name: 'Jet Bike', type: 'Bike' },
    { name: 'Yoshi Bike', type: 'Bike' },
    { name: 'The Master Cycle', type: 'Bike' },
    { name: 'City Tripper', type: 'Bike' },
    { name: 'Standard ATV', type: 'ATV' },
    { name: 'Wild Wiggler', type: 'ATV' },
    { name: 'Teddy Buggy', type: 'ATV' }
  ];
   
  var player = {};


  // LODASH COMMANDS

  console.log( _.flatten(mItems) )

//   _.flatten(mKarts);


//   console.log(mCharacters)
//   console.log(mKarts)

