const form = document.querySelector(".form"),
  input = form.querySelector("input"),
  userInput = document.querySelector(".user-input");
 
function askForNum() {
  form.addEventListener("submit", handleSubmit)
}

function handleSubmit(event) {
    event.preventDefault();
    paintInput(input.value);
    generateBalls(input.value);
}
  
function paintInput(text){
  userInput.classList.remove('hide');
  form.classList.add('hide');
  userInput.innerText = `${text}개 구매하셨습니다.
  *다시 하시려면 새로고침 해주세요.`
}

askForNum();


const result = document.getElementById('result');
let pickedNum = [];
let bonusNum = [];
let newDiv = [];

function generateBalls(input) {
  for (let i=0; i<input; i++){
    newDiv.push(document.createElement('div'));
    newDiv[i].className = `result${i}`;
    newDiv[i].id = `result${i}`;
    result.appendChild(newDiv[i]);
  
    let candidates = Array(45)
    .fill()
    .map(function (element, index) {
      return index + 1;
    });
    
    let shuffle = [];
    while (candidates.length > 0) {
      let value = candidates.splice(Math.floor(Math.random() * candidates.length), 1)[0];
      shuffle.push(value);
    }
    let bonus = shuffle[shuffle.length - 1];
    let picked = shuffle
      .slice(0, 6)
      .sort(function (p, c) {
        return p - c;
      });
  
    bonusNum[i] = bonus;
    pickedNum[i] = picked;
  
    function painting(number, resultN) {
      let ball = document.createElement('div');
      let ballNumber = document.createElement('div');
      
      ball.className = 'ball';
      ballNumber.className = 'num';
      ballNumber.textContent = number;
  
      let ballColor;
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
      ball.appendChild(ballNumber);
    }
  
    function texting(addText, resultN) {
      let textBonus = document.createElement('div');
      textBonus.textContent = addText;
      textBonus.className = 'textBonus';
      resultN.appendChild(textBonus);
    }
    
    for (let j = 0; j < picked.length; j++) {
      setTimeout(() => {
        painting(pickedNum[i][j], newDiv[i]);
      }, i*1000 + (j + 1) * 100);
    }
  
    setTimeout(() => {
      texting('Bonus!', newDiv[i]);
      }, i*1000 + 800);

    setTimeout(() => {
      painting(bonusNum[i], newDiv[i]);
    }, i*1000 + 900);
  }  
}
