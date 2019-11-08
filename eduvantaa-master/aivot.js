function laatikkoFunktio(boxNumber){
    alert("Nyt vaihdetaan laatikko"+ boxNumber + ":n sisältöä!");

    if (boxNumber == 1){
        document.getElementById("laatikko1").innerHTML = "<h1 class='uusiOtsikko1'>Tähän tulee uusi otsikko!</h1>" + 
        "<p>Ja tähän tietysti jotain sisältöä...</p>";
        document.getElementById("laatikko1").style.lineHeight = "50px";
    }
    else if (boxNumber == 2){
      document.getElementById("laatikko2").innerHTML = "<table>"+
      
      "<tr>"+
        "<th>Company</th>"+
        "<th>Contact</th>"+
       "<th>Country</th>"+
      "</tr>"+
     "<tr>"+
        "<td>Alfreds Futterkiste</td>"+
        "<td>Maria Anders</td>"+
        "<td>Germany</td>"+
      "</tr>"+
      "<tr>"+
        "<td>Centro comercial Moctezuma</td>"+
        "<td>Francisco Chang</td>"+
        "<td>Mexico</td>"+
      "</tr>"+
      "<tr>"+
        "<td>Ernst Handel</td>"+
        "<td>Roland Mendel</td>"+
        "<td>Austria</td>"+
      "</tr>"+
      "<tr>"+
        "<td>Island Trading</td>"+
        "<td>Helen Bennett</td>"+
        "<td>UK</td>"+
      "</tr>"+
      "<tr>"+
        "<td>Laughing Bacchus Winecellars</td>"+
        "<td>Yoshi Tannamuri</td>"+
       "<td>Canada</td>"+
      "</tr>"+
      "<tr>"+
        "<td>Magazzini Alimentari Riuniti</td>"+
        "<td>Giovanni Rovelli</td>"+
        "<td>Italy</td>"+
      "</tr>"+
    "</table>";

    }
    else if(boxNumber == 3){
      document.getElementById("laatikko3").innerHTML = "<img src='kuva3.jpg'>"; 
    }
    else if (boxNumber == 4){
      document.location.reload();
    }
    
}
function yhteystietoFunktio() {
    var x = document.getElementById("yhteystietolomake");
    var text = "";
    var i;
    for (i = x.length -1; i >= 0 ; i--) {
      text +=x.elements[i].name + ": " + x.elements[i].value + "<br>";
    }
    document.getElementById("yhteystiedotTuloste").innerHTML = text;
  }

function diagrammiFunktio(){
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    
    
    ctx.fillText("50", 0, 450);
    
    
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