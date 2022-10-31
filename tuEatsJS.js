function validForm() { //test both password and referral code, reject if either are invalid
    if(validPass() == refCodeInval()){
        return true;
    }
    else{
        return false;
    }
}

function validPass() { //test password and confirm password fields, return false and alert if invalid
    var pass = document.getElementById("pWord")
    var pass2 = document.getElementById("veriPass")
    if(pass.value === pass2.value){
        return true;
    }
    else{
        alert("Passwords do not match, please try again.")
        return false;
    }
}

function refCodeInval() {//test referral code on keystroke, return false if invalid
    var refCodeT = document.getElementById("refCode");
    var refCodeC = refCodeT.value;

    if(refCodeC.toLowerCase() === "tucis"){
        alert("Invalid, please enter a new code");
        return false;
    }
    if(refCodeC.toLowerCase() === "bogo"){
        alert("Invalid, please enter a new code");
        return false;
    }
    if(refCodeC.toLowerCase() === "eatgood"){
        alert("Invalid, please enter a new code");
        return false;
    }
    else{
        return true;
    }

}

function refCode() { //test referral code on keystroke, returns false if invalid 
    var refCode = document.getElementById("refCode")
    var refCodeSwitch = refCode.value;
    switch (refCodeSwitch.toLowerCase()){
        case "tucis":
            refCode.title = "Invalid";
            break;
        case "bogo":
            refCode.title = 'Invalid';
            break;
        case "eatgood":
            refCode.title = "Invalid";
            break;
        default:
            refCode.title = "N/A";
    }       
}

function refCodeReward() { //test which code entered, and provide what the code rewards the user
    var refCode = document.getElementById("refCode");
    var refCodeT = refCode.value;
    if(refCodeT.toLowerCase === "test123"){
        document.getElementById("refCodeCheck").innerHTML = "Referral Code Reward: Free Meal!";
    }
    else{
        document.getElementById("refCodeCheck").innerHTML = "Referral Code Reward: N/A";
    }
}

function putFormData() {
    let params = new URLSearchParams(location.search);
    var uName = params.get('uName');
    var email = params.get('email');
    var pWord = params.get('pWord');
    var veriPass = params.get('veriPass');
    var checkbox = params.get('newsCheck');
    var refCode = params.get('refCode');
    //var refCodeRew = refCodeReward();
    document.getElementById("dispUN").innerHTML = "Hello " +uName;

    document.getElementById('username').innerHTML = "Username: " +uName;
    document.getElementById('email').innerHTML = "Email: " +email;
    document.getElementById('password').innerHTML = "Password: " +pWord;
    document.getElementById('passwordVeri').innerHTML = "Password Verify: " +veriPass;
    document.getElementById('newsCheckbox').innerHTML = "Newsletter: " +checkbox;
    document.getElementById('refCodeGet').innerHTML = "Referral Code Entered: " +refCode;
    //document.getElementById('refCodeCheck').innerHTML = "Referral Code Reward: " +refCodeRew;

    if(refCode.toLowerCase() === "test123"){
        document.getElementById("refCodeCheck").innerHTML = "Referral Code Reward: Free Meal!";
    }
    else{
        document.getElementById("refCodeCheck").innerHTML = "Referral Code Reward: N/A";
    }
}