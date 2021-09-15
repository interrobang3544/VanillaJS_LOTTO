const result = document.getElementById('result');
var pickedNum = [];
var bonusNum = [];
var newDiv = [];
var a = 5;

for (let i=0; i<a; i++){
  newDiv.push(document.createElement('div'));
  newDiv[i].className = `result${i}`;
  newDiv[i].id = `result${i}`;
  result.appendChild(newDiv[i]);

  var candidates = Array(45)
  .fill()
  .map(function (element, index) {
    return index + 1;
  });
  
  var shuffle = [];
  while (candidates.length > 0) {
    var value = candidates.splice(Math.floor(Math.random() * candidates.length), 1)[0];
    shuffle.push(value);
  }
  var bonus = shuffle[shuffle.length - 1];
  var picked = shuffle
    .slice(0, 6)
    .sort(function (p, c) {
      return p - c;
    });

  bonusNum[i] = bonus;
  pickedNum[i] = picked;

  function painting(number, resultN) {
    var ball = document.createElement('div');
    var ballSticker  = document.createElement('div');
    var ballNumber = document.createElement('div');
    
    ball.className = 'ball';
    ballSticker.className = 'sticker';
    ballNumber.className = 'num';
    ballNumber.textContent = number;

    var ballColor;
    if (number <= 10) {
      ballColor = 'red';
    } else if (number <= 20) {
      ballColor = 'orange';
    } else if (number <= 30) {
      ballColor = 'yellow';
    } else if (number <= 40) {
      ballColor = 'blue';
    } else {
      ballColor = 'green';
    }
    ball.style.background = ballColor;
    
    resultN.appendChild(ball);
    ball.appendChild(ballSticker);
    ball.appendChild(ballNumber);
  }

  function texting(addText, resultN) {
    var textBonus = document.createElement('div');
    textBonus.textContent = addText;
    textBonus.className = 'text';
    resultN.appendChild(textBonus);
  }
  
  for (let j = 0; j < picked.length; j++) {
    setTimeout(() => {
      painting(pickedNum[i][j], newDiv[i]);
    }, (j + 1) * 100);
  }

  setTimeout(() => {
    console.log(i);
    console.log(newDiv[i]);
    texting('Bonus!', newDiv[i]);
    painting(bonusNum[i], newDiv[i]);
  }, 900);
}