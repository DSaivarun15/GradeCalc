function calgrade() {
    let hindi = document.getElementById('Hindi').value
    let telugu = document.getElementById('Telugu').value
    let english = document.getElementById('English').value
    let maths = document.getElementById('Maths').value
    let science = document.getElementById('Science').value
    let social = document.getElementById('Social').value

    hindi = parseInt(hindi)
    telugu = parseInt(telugu)
    english = parseInt(english)
    maths = parseInt(maths)
    science = parseInt(science)
    social = parseInt(social)

    if (hindi,telugu,english,maths,science,social>100) {
        alert("invalid input.")
    }
    else{
    let Total = hindi + telugu + english + maths + science + social;
    let Percentage = (Total / 600) * 100;

    let Grade
    if (Percentage >= 91) {
        Grade = "A1"
    }
    if (Percentage >= 81 && Percentage <= 90) {
        Grade = "A2"
    }
    if (Percentage >= 71 && Percentage <= 80) {
        Grade = "B1"
    }
    if (Percentage >= 61 && Percentage <= 70) {
        Grade = "B2"
    }
    if (Percentage >= 51 && Percentage <= 60) {
        Grade = "C1"
    }
    if (Percentage >= 41 && Percentage <= 50) {
        Grade = "C2"
    }
    if (Percentage >= 33 && Percentage <= 40) {
        Grade = "D"
    }
    if (Percentage >= 21 && Percentage <= 32) {
        Grade = "E1"
    }
    if (Percentage >= 0 && Percentage <= 20) {
        Grade = "E2"
    }

    let pof;
    if (Percentage >= 91) {
        pof = "you are pass";
    } else if (Percentage >= 81 && Percentage <= 90) {
        pof = "you are pass";
    } else if (Percentage >= 71 && Percentage <= 80) {
        pof = "you are pass";
    } else if (Percentage >= 61 && Percentage <= 70) {
        pof = "you are pass";
    } else if (Percentage >= 51 && Percentage <= 60) {
        pof = "you are pass";
    } else if (Percentage >= 40 && Percentage <= 50) {
        pof = "you are pass";
    } else if (Percentage >= 33 && Percentage <= 39) {
        pof = "you are fail";
    } else if (Percentage >= 21 && Percentage <= 30) {
        pof = "you are fail";
    } else if (Percentage >= 0 && Percentage <= 20) {
        pof = "you are fail";
    }

    document.getElementById('percentage').innerHTML = "Percentage:" + Percentage + ""
    document.getElementById('total').innerHTML = "Total:" + Total + ""
    document.getElementById('grade').innerHTML = "Grade:" + Grade + ""
    document.getElementById("POF").innerHTML = "" + pof + "";
}
}