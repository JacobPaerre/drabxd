var av;
var bv;
var cv;
var D;
var Dsqrt;
var x1;
var x2;

function ArealUdregn() {
    var answer = document.getElementById("hareal").value * document.getElementById('lareal').value + " cm^2";
    console.log("STATUS: H: " + document.getElementById('hareal').value + " - L: " + document.getElementById('lareal').value);

    document.getElementById('arealresultat').value = answer;
}

function Calculate2nd() {
    av = document.getElementById('a1').value;
    bv = document.getElementById('b1').value;
    cv = document.getElementById('c1').value;
    
    var D = (bv * bv) - 4 * av * cv;
    if (D < 0) {
        var x1 = "Diskriminant er i minus";
        var x2 = "Diskriminant er i minus";
        document.title = "x1: Fejl, x2: Fejl";
    }
    else if (D > 0) {
        var Dsqrt = Math.sqrt(D);
        var x1 = (-bv - Dsqrt) / 2*av;
        var x2 = (-bv + Dsqrt) / 2*av;
        document.title = "x1: " + x1 + ", x2: " + x2;
    }
    else {
        var x1 = "Fejl, D er 0";
        var Dsqrt = Math.sqrt(D);
        var x2 = (-bv + Dsqrt) / (2*av);
        document.title = "x1: Fejl, x2: " + x2;
    }
    
    document.getElementById('Diskriminant').innerHTML = "Diskriminaten er: <strong>" + D + "</strong>";
    document.getElementById('xv1').innerHTML = "Rod 1 er: <strong>" + x1 + "</strong>";
    document.getElementById('xv2').innerHTML = "Rod 2 er: <strong>" + x2 + "</strong>";
}