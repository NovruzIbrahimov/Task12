function promptAge() {
    let age = parseInt(prompt("Zəhmət olmasa yaşınızı daxil edin:"));

    if (age < 18) {
        alert("Diqqət!Siz 18 yaşından kiçiksiniz!");
    }
}

promptAge();