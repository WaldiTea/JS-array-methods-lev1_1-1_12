// -----lev1_1_1-----
console.log('-----lev1_1_1-----');
let adress = ['Muster Str 123', '12345', 'Musterstadt', 'Deutsches Land'];
let friends = ['Thomas', 'Peter', 'Erika', 'Brunhilde'];
let person = ['Maximilian', 'Mustermann', 'Max', '25', 'Coden', 'Deutschland', 'SuperCode'];

console.log('This is the array adress: ' + adress);
console.log('This is the array friends: ' + friends);
console.log('This is the array person: ' + person);

let allInOne = person + ', ' + adress + ', ' + friends;
console.log(allInOne);


// -----lev1_1_2-----
console.log('-----lev1_1_2-----');
console.log('This is the array length of person: ' + person.length);
console.log('This is the array length of friends: ' + friends.length);
console.log('This is the array length of adress: ' + adress.length);


// -----lev1_2-----
console.log('-----lev1_2-----');
let meineTrainer1 = ['Eric', 'Steffen', 'Simon', 'Ahmed']
console.log(meineTrainer1);

let meineTrainer2 = new Array('Eric', 'Steffen', 'Simon', 'Ahmed');
console.log(meineTrainer2);

let meineTrainer3 = new Array();
meineTrainer3[0] = 'Eric';
meineTrainer3[1] = 'Steffen';
meineTrainer3[2] = 'Simon';
meineTrainer3[3] = 'Ahmed';
console.log(meineTrainer3);


// -----lev1_3-----
console.log('-----lev1_3-----');
let numberArray = [5, 6, 7, 8, 9, 10];
console.log(numberArray);

console.log(numberArray[4]);
console.log(numberArray[0]);
console.log(numberArray[5]);


// -----lev1_4-----
console.log('-----lev1_4-----');
let meinText1 = 'Hallo Welt. Ich wünsche euch allen einen guten Arbeitstag.';
let meinText2 = 'Wie geht es dir heute?';
let meinText3 = 'Heute ist ein großer Tag für uns.';

let split1Text1 = meinText1.split();
console.log(split1Text1);
let split2Text1 = meinText1.split("");
console.log(split2Text1);
let split3Text1 = meinText1.split(" ");
console.log(split3Text1);

let split1Text2 = meinText2.split();
console.log(split1Text2);
let split2Text2 = meinText2.split("");
console.log(split2Text2);
let split3Text2 = meinText2.split(" ");
console.log(split3Text2);

let split1Text3 = meinText3.split();
console.log(split1Text3);
let split2Text3 = meinText3.split("");
console.log(split2Text3);
let split3Text3 = meinText3.split(" ");
console.log(split3Text3);


// -----lev1_5_1-----
console.log('-----lev1_5_1-----');
let songs = [
  'Bohemian Rhapsody',
  'Stairway to Heaven',
  'Hotel California'
];
console.log(songs);

songs.push("Sweet Child O'Mine", "Hey Jude", "Smells Like Teen Spirit");

let totalSongs = songs;
console.log(totalSongs);

let bestFootballPlayers = [
  'Lionel Messi',
  'Pelé',
  'Diego Armando Maradona',
  'Cristiano Ronaldo',
  'Zinedine Zidane'
];
console.log(bestFootballPlayers);

bestFootballPlayers.push('Gianluigi Buffon', 'Oliver Kahn', 'Iker Casillas');

let totalFootballPlayers = bestFootballPlayers;
console.log(totalFootballPlayers);

const artists = ['michael', 'elvis'];
artists.push('justin', 'charlie');
console.log(artists);
artists.push('Baby', 'Rollin', 'Ice Ice Baby');
artists.push('Otto Rehhagel', 'Dettmar Cramer', 'Hennes Weisweiler');
console.log(artists);


// -----lev1_5_2-----
console.log('-----lev1_5_2-----');
let heroAndEnemy = [
  ['Batman', 'The Joker'],
  ['Professor X', 'Magneto'],
  ['Thor', 'Loki']
]
console.log(heroAndEnemy);

heroAndEnemy.push(
  ['Superman', 'Lex Luthor'],
  ['Wolverine', 'Sabretooth'],
  ['Ghost Rider', 'Mephisto']
);
console.log(heroAndEnemy);


// -----lev1_6-----
console.log('-----lev1_6-----');
let removedSong = totalSongs.pop();
console.log(removedSong);
console.log(totalSongs);

let removedFootballPlayer = totalFootballPlayers.pop();
console.log(removedFootballPlayer);
console.log(totalFootballPlayers);

totalFootballPlayers.pop();
totalFootballPlayers.pop();
totalFootballPlayers.pop();
console.log(totalFootballPlayers);


// -----lev1_7-----
console.log('-----lev1_7-----');
let deutscheGerichte = [
  'Speckkuchen',
  'Thüringer Rostbratwurst',
  'Quarkkeulchen',
  'Sauerbraten'
];
deutscheGerichte.unshift(
  'Linseneintopf',
  'Pinkel mit Grünkohl',
  'Bremer Knipp',
  'Rinderbrateneintopf',
  'Königsberger Klopse'
);
console.log(deutscheGerichte);


// -----lev1_8-----
console.log('-----lev1_8-----');
deutscheGerichte.shift();
deutscheGerichte.shift();
deutscheGerichte.shift();
console.log(deutscheGerichte);


// -----lev1_9-----
console.log('-----lev1_9-----');
let numbers = [23, 54, 75];
console.log(numbers);
numbers.push(11, 32, 42, 5, 71);
console.log(numbers);
numbers.unshift(1, 3, 7, 8, 14);
console.log(numbers);
numbers.pop();
numbers.pop();
console.log(numbers);
numbers.shift();
numbers.shift();
console.log(numbers);


// -----lev1_10-----
console.log('-----lev1_10-----');
let array = [
  "imageTeilnehmer000supercode.jpg",
  "imageTeilnehmer001supercode.jpg",
  "imageTeilnehmer002supercode.jpg",
  "imageTeilnehmer003supercode.jpg",
  "imageTeilnehmer004supercode.jpg",
  "imageTeilnehmer005supercode.jpg",
  "imageTeilnehmer006supercode.jpg",
  "imageTeilnehmer007supercode.jpg",
  "imageTeilnehmer008supercode.jpg",
  "imageTeilnehmer009supercode.jpg",
  "imageTeilnehmer010supercode.jpg",
  "imageTeilnehmer011supercode.jpg",
  "imageTeilnehmer012supercode.jpg",
  "imageTeilnehmer013supercode.jpg",
  "imageTeilnehmer014supercode.jpg",
  "imageTeilnehmer015supercode.jpg",
  "imageTeilnehmer016supercode.jpg",
  "imageTeilnehmer017supercode.jpg",
  "imageTeilnehmer018supercode.jpg",
  "imageTeilnehmer019supercode.jpg"
];

let delImg1 = array.splice(4, 4);
console.log(delImg1);
console.log(array);

let delImg2 = array.splice(6, 5);
console.log(delImg2);
console.log(array);

let delImg3 = array.splice(2);
console.log(delImg3);
console.log(array);


// -----lev1_11-----
console.log('-----lev1_11-----');
var array2 = [
  "imageTeilnehmer000supercode.jpg",
  "imageTeilnehmer001supercode.jpg"
];

array2.splice(2, 0, 'imageTeilnehmer008supercode.jpg', 'imageTeilnehmer009supercode.jpg', 'imageTeilnehmer010supercode.jpg');
console.log(array2);

array2.splice(5, 0, 'imageTeilnehmer014supercode.jpg', 'imageTeilnehmer015supercode.jpg', 'imageTeilnehmer016supercode.jpg', 'imageTeilnehmer017supercode.jpg', 'imageTeilnehmer018supercode.jpg', 'imageTeilnehmer019supercode.jpg');
console.log(array2);

array2.splice(2, 0, 'imageTeilnehmer002supercode.jpg', 'imageTeilnehmer003supercode.jpg', 'imageTeilnehmer004supercode.jpg', 'imageTeilnehmer005supercode.jpg', 'imageTeilnehmer006supercode.jpg', 'imageTeilnehmer007supercode.jpg')
console.log(array2);

array2.splice(5, 0, 'imageTeilnehmer011supercode.jpg', 'imageTeilnehmer012supercode.jpg', 'imageTeilnehmer013supercode.jpg');
console.log(array2);


// -----lev1_12-----
console.log('-----lev1_12-----');
let array3 = [
  "imageTeilnehmer000supercode.jpg",
  "imageTeilnehmer001supercode.jpg",
  "imageTeilnehmer002supercode.jpg",
  "imageTeilnehmer003supercode.jpg",
  "imageTeilnehmer004supercode.jpg",
  "imageTeilnehmer005supercode.jpg",
  "imageTeilnehmer006supercode.jpg",
  "imageTeilnehmer007supercode.jpg",
  "imageTeilnehmer008supercode.jpg",
  "imageTeilnehmer009supercode.jpg",
  "imageTeilnehmer010supercode.jpg",
  "imageTeilnehmer011supercode.jpg",
  "imageTeilnehmer012supercode.jpg",
  "imageTeilnehmer013supercode.jpg",
  "imageTeilnehmer014supercode.jpg",
  "imageTeilnehmer015supercode.jpg",
  "imageTeilnehmer016supercode.jpg",
  "imageTeilnehmer017supercode.jpg",
  "imageTeilnehmer018supercode.jpg",
  "imageTeilnehmer019supercode.jpg"
];

let copyImg1 = array3.slice(7, 15);
console.log(copyImg1);

let copyImg2 = array3.slice(6, 12);
console.log(copyImg2);
