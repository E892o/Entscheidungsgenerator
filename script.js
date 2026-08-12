function auslosen() {

    let name1 = document.getElementById("name1").value.trim();
    let name2 = document.getElementById("name2").value.trim();

    if (name1 === "" || name2 === "") {
        document.getElementById("ergebnis").textContent =
            "Bitte beide Namen eingeben!";
        return;
    }

    // Zufällig eine Zahl zwischen 0 und 1 erzeugen
    let zufallszahl = Math.random();

    if (zufallszahl < 0.5) {

        document.getElementById("ergebnis").textContent =
            name1 + " muss entscheiden!";

    } else {

        document.getElementById("ergebnis").textContent =
            name2 + " muss entscheiden!";
    }
}
