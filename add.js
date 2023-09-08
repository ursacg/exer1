function displaySum() {
    let firstNum = Number(document.getElementById('firstNum').innerHTML)
    let secondNum = Number(document.getElementById('secondNum').innerHTML)
    
    let total = firstNum + secondNum;
    document.getElementById("answer").innerHTML = ` ${firstNum} + ${secondNum}, equals to ${total}` ;
  }

  function displayQuotient(){
    let firstDivideNum = Number(document.getElementById('firstNum').innerHTML)
    let secondDivideNum = Number(document.getElementById('secondNum').innerHTML)

    let quotient = firstDivideNum / secondDivideNum;
    document.getElementById("answerDivide").innerHTML = ` ${firstDivideNum} / ${secondDivideNum}, equals to ${quotient}`;
  }

  document.getElementById("sumButton").addEventListener("click", displaySum);
  document.getElementById("divideButton").addEventListener("click", displayQuotient);
