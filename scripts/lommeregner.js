function ArealUdregn() {
    var answer = document.getElementById("hareal").value * document.getElementById('lareal').value + " cm^2";
    document.getElementById('arealresultat').value = answer;
}

function AndengradsUdregn() {
    // RESET
    document.getElementById('andengradsresultat_x1').style.display = "block";
    document.getElementById('andengradsresultat_x2').style.display = "block";



    var a = document.getElementById('atal').value;
    var b = document.getElementById('btal').value;
    var c = document.getElementById('ctal').value;

    console.log(a, b, c);

    
    var D = (b*b) - 4*a*c
    document.getElementById('andengradsdiskriminant').value = D;
    // Hvis D er 0
    if (D === 0) {
        // Fjerner 1 rod, da diskriminanten er 0
        document.getElementById('andengradsresultat_x2').style.display = "none"; 

        // Regner roden ud
        var rod = -b / (a*2)
        document.getElementById('andengradsresultat_x1').value = rod;

    }
    // Hvis D er mindre end 0
    else if (D < 0) {
        // Fjerner røderne, da diskriminaten er i minus
        document.getElementById('andengradsresultat_x1').style.display = "none"; 
        document.getElementById('andengradsresultat_x2').style.display = "none"; 
    }
    // Hvis D er mere end 0
    else if (D > 0) {
        // Regner røderne ud
        var Dk = Math.sqrt(D);
        var rod_1 = (-b - Dk) / (2*a);
        var rod_2 = (-b - Dk) / (2*a);

        document.getElementById('andengradsresultat_x1').value = rod_1; 
        document.getElementById('andengradsresultat_x2').value = rod_2; 
    }
}




document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        var title = document.title;
        if (title === "Lommeregner - andengradsligning") {
            AndengradsUdregn();
        }
        else if (title === "Lommeregner - areal") {
            ArealUdregn();
        }
    }
});