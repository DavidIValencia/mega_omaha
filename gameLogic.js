function NewGame(){
  //these aren't working quite yet
  this.playerOne = [];
  this.playerTwo = [];
  this.board = [];
  this.deck = [];
};

var cardMap = ['2c','3c','4c','5c','6c','7c','8c','9c','Tc','Jc',
'Qc','Kc','Ac','2h','3h','4h','5h','6h','7h','8h','9h','Th','Jh',
'Qh','Kh','Ah','2s','3s','4s','5s','6s','7s','8s','9s','Ts','Js',
'Qs','Ks','As','2d','3d','4d','5d','6d','7d','8d','9d','Td','Jd',
'Qd','Kd','Ad'];

function Card(cardValue){
  this.value = cardValue
};

NewGame.prototype.makeDeck = function(){
  for(i in cardMap)
  {
    this.deck.push(new Card(cardMap[i]));
  }
};

NewGame.prototype.shuffleDeck = function(){
    var j, x, i;
    for (i = this.deck.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = this.deck[i - 1];
        this.deck[i - 1] = this.deck[j];
        this.deck[j] = x;
    }
};

//need to fix arrays
NewGame.prototype.dealStartingHands = function(){
  for(var j = 0; j < 4; j++){
    this.playerOne.push(this.deck.splice(0,4));
    this.playerTwo.push(this.deck.splice(0,4));
  };
}

NewGame.prototype.dealToBoard = function(){
  this.board.push(this.deck.shift());
};

