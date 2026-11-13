let genderType = "female";

function printGender() {
    let color = "brown";

    if (genderType.startsWith("female")) {
        var age = 30;
        let color = "pink";

        console.log("Inside block:", color);
    }

    console.log("Outside block:", color);
    console.log("Age:", age);
}

printGender();
console.log("Global gender:", genderType);