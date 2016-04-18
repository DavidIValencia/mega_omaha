function NewGame(){
  //these aren't working quite yet
  this.playerOne = new Array(4).fill(0).map(function(row){[]});
  this.playerTwo = new Array(4).fill(0).map(function(row){[]});
  this.board = [];
  this.deck = [];
};

var cardMap = ['2c','3c','4c','5c','6c','7c','8c','9c','Tc','Jc','Qc','Kc','Ac','2h','3h','4h','5h','6h','7h','8h','9h','Th','Jh','Qh','Kh','Ah','2s',
'3s','4s','5s','6s','7s','8s','9s','Ts','Js','Qs','Ks','As','2d','3d','4d','5d','6d','7d','8d','9d','Td','Jd','Qd','Kd','Ad'
  ];

function Card(cardValue){
  this.value = cardValue
};

NewGame.prototype.makeDeck = function(){
  for(i in cardMap)
  {
    this.deck.push(new Card(cardMap[i]));
  }
};

NewGame.prototype.shuffleDeck = function(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
};

//need to fix arrays
NewGame.prototype.dealStartingHands = function(){
  for(var j = 0; j < 4; j++){
    for(var i = 0; i < 4; i++){
    this.playerOne[i].push(this.deck.pop());
    this.playerTwo[i].push(this.deck.pop());
    }
  }
};

NewGame.prototype.dealToBoard = function(){
  this.board.push(this.deck.pop);
};

