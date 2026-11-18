
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
            "2 × 50 m ryggsim enarm",
            "2 × 50 m ryggsim med 6 bensparkar per armtag",
            "100 m ryggsim med fokus på rotation"
        ]
    },
    {
        titel: "Uthållighet",
        innehall: [
            "5 × 200 m ryggsim, jämn fart och bra teknik",
            "Starttid: 3:30 / 4:00 / 4:30 / 5:00",
            "100 m bad"
        ]
    },
    {
        titel: "Snabbhet",
        innehall: [
            "4 × 50 m ryggsim @ 55 s / 1:05 / 1:15 / 1:25",
            "4 × 50 m frisim @ 50 s / 1:00 / 1:10 / 1:20",
            "8 × 25 m ryggsim @ 30 s / 35 s / 40 s / 45 s"
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
