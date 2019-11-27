function laatikkoFunktio(boxNumber) {


  if (boxNumber == 1) {
    document.getElementById("laatikko1").innerHTML = "<h1 class='uusiOtsikko1'>Tähän tulee uusi otsikko!</h1>" +
      "<p>Ja tähän tietysti jotain sisältöä...</p>";
    document.getElementById("laatikko1").style.lineHeight = "50px";
  }
  else if (boxNumber == 2) {
    document.getElementById("laatikko2").innerHTML = "<h2 class='> Tekstiä</h2>";


  }
  else if (boxNumber == 3) {
    document.getElementById("laatikko3").innerHTML = "<img src='kuva3.jpg'>";
  }
  else if (boxNumber == 4) {
    document.location.reload();
  }

}

function yhteystietoFunktio() {
  var x = document.getElementById("yhteystietolomake");
  var text = "";
  var i;
  for (i = x.length - 1; i >= 0; i--) {
    text += x.elements[i].name + ": " + x.elements[i].value + "<br>";
  }
  document.getElementById("yhteystiedotTuloste").innerHTML = text;
}

function diagrammiFunktio() {

  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();


  ctx.fillText("50", 0, -45);
  ctx.fillText("200", 20, -20);
  ctx.fillText("100", 80, 10);
  ctx.fillText("200", 160, -20);
  ctx.fillText("120", 220, 12);
  ctx.fillText("290", 280, -24);
  ctx.fillText("10", 340, 10);
  ctx.fillText("0", 400, 0);
  ctx.fillText("25", 460, 25);
  ctx.fillText("15", 520, 15);
  ctx.fillText("22", 580, 22);
  ctx.fillText("0", 640, 10);
  ctx.fillText("30", 700, 3);
  ctx.fillText("50", 760, -5);
  ctx.fillText("120", 820, -12);
  ctx.fillText("220", 880, -22);
  ctx.fillText("450", 940, -45);
  ctx.fillText("0", 1000, 0);
  ctx.fillText("10", 1060, -10);
  ctx.fillText("0", 1120, 0);

  ctx.moveTo(20, 200);
  ctx.lineTo(80, 100);
  ctx.lineTo(160, 200);
  ctx.lineTo(220, 120);
  ctx.lineTo(280, 290);
  ctx.lineTo(340, 10);
  ctx.lineTo(400, 0);
  ctx.lineTo(460, 25);
  ctx.lineTo(520, 15);
  ctx.lineTo(580, 22);
  ctx.lineTo(640, 0);
  ctx.lineTo(700, 30);
  ctx.lineTo(760, 50);
  ctx.lineTo(820, 120);
  ctx.lineTo(880, 220);
  ctx.lineTo(940, 450);
  ctx.lineTo(1000, 0);
  ctx.lineTo(1060, 10);
  ctx.lineTo(1120, 0);



  ctx.stroke();
} 