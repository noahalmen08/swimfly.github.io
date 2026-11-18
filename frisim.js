const steg = [
    {
        titel: "Insim",
        innehall: [
            "200 m valfritt simsätt",
            "4 × 25 m frisim accelererande",
            "4 × 25 m special accelererande"
        ]
    },
    {
        titel: "Teknik",
        innehall: [
            "2 × 50 m frisim enarm, byt arm efter 25 m",
            "2 × 50 m catch up",
            "2 × 50 m frisim, minst 6 kickar efter start och vändning"
        ]
    },
    {
        titel: "Uthållighet",
        innehall: [
            "Varv 1: Sammansatt",
            "Varv 2: Fenor",
            "Varv 3: Paddlar och dolme",
            "",
            "Varje varv:",
            "2 × 100 m frisim i jämn fart, vila 15 s",
            "2 × 200 m frisim i jämn fart, vila 15 s"
        ]
    },
    {
        titel: "Snabbhet",
        innehall: [
            "10 × 50 m frisim F3–F4 @ 50 s / 1:00 / 1:10 / 1:20",
            "100 m bad"
        ]
    },
    {
        titel: "Avslutande serie",
        innehall: [
            "6 × 25 m frisim F4 @ 30 s / 35 s / 40 s / 45 s",
            "2 × 25 m frisim F5 håll andan hela vägen @ 30 s / 35 s / 40 s / 45 s"
        ]
    },
    {
        titel: "Avsim",
        innehall: [
            "Minst 200 m valfritt simsätt"
        ]
    }
];

let aktuelltSteg = 0;

const serieTitel = document.getElementById("serieTitel");
const serieInnehall = document.getElementById("serieInnehall");
const stegNummer = document.getElementById("stegNummer");
const forraKnapp = document.getElementById("forraKnapp");
const nastaKnapp = document.getElementById("nastaKnapp");

function visaSteg() {
    const serie = steg[aktuelltSteg];

    serieTitel.textContent = serie.titel;

    stegNummer.textContent =
        `Steg ${aktuelltSteg + 1} av ${steg.length}`;

    serieInnehall.innerHTML = "";

    serie.innehall.forEach(function(rad) {
        const punkt = document.createElement("p");
        punkt.textContent = rad;
        serieInnehall.appendChild(punkt);
    });

    forraKnapp.disabled = aktuelltSteg === 0;

    nastaKnapp.disabled = false;

    nastaKnapp.textContent =
        aktuelltSteg === steg.length - 1
            ? "Avsluta passet"
            : "Nästa";
}

nastaKnapp.addEventListener("click", function() {
    if (aktuelltSteg < steg.length - 1) {
        aktuelltSteg++;
        visaSteg();
    } else {
        serieTitel.textContent = "Passet är klart, bra simmat!";
        serieInnehall.innerHTML = "";
        stegNummer.textContent = "Bra jobbat!";

        forraKnapp.disabled = true;
        nastaKnapp.disabled = true;
    }
});

forraKnapp.addEventListener("click", function() {
    if (aktuelltSteg > 0) {
        aktuelltSteg--;
        visaSteg();
    }
});

visaSteg();