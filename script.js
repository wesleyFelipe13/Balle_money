function typewrite (target, text, speed) {
  // SET DEFAULT OPTIONS
  target = document.getElementById(target);
  if (speed === undefined) { speed = 200; }

  // DRAW TYPEWRITER
  let pointer = 0;
  let timer = setInterval(function(){
    pointer++;
    if (pointer <= text.length) {
      target.innerHTML = text.substring(0, pointer);
    }else { clearInterval(timer); }
  }, speed);
}

function moneyChange() {
  var price = document.getElementById('price').value;
  var amount = document.getElementById('amount').value;
  var txt;
  var cent5, cent50, real;
  price *= 100;
  amount *= 100;
  parseInt(price);
  parseInt(amount);

  var money = amount - price; 
  if (money <= 0) {
    txt = "R$ 0,00";
  }else {
    cent50 = Math.floor((money%100)/50);
    cent5 = Math.ceil((money%100)/5);
    cent5 -= 10;
    if (cent5 < 0) {
      cent5 = 0;
    }
    real = parseInt(money/100);
    txt = "RS 1,00 x " + real + "<br>R$ 0,50 x " + cent50 + "<br>R$ 0,05 x " + cent5; 
  }
  typewrite('moneyTxt', txt, 100);
}