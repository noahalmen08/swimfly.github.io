const steg = [
    {
        titel: "Insim",
        innehall: [
            "200 m valfritt simsätt",
            "4 × 50 m medley-ordning @ 1:00 / 1:10 / 1:20 / 1:30"
        ]
    },
    {
        titel: "Teknik",
        innehall: [
            "4 × 25 m skovel",
            "4 × 25 m bröstsim accelererande",
            "4 × 50 m bröstsim, två bensparkar per armtag"
        ]
    },
    {
        titel: "Uthållighet",
        innehall: [
            "2 varv av följande:",
            "2 × 200 m bröstsim",
            "200 m frisim",
            "100 m bad"
        ]
    },
    {
        titel: "Snabbhet",
        innehall: [
            "6 × 50 m bröstsim @ 1:00 / 1:10 / 1:20 / 1:30",
            "8 × 25 m medley-ordning @ 30 s / 35 s / 40 s / 45 s"
        ]
    },
    {
        titel: "Avsim",
        innehall: [
            "200 m valfritt"
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