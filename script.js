function processEntries() {
    var cents = document.getElementById("cents").value;
    if(cents >=0 && cents <=Infinity){
 makeChange(cents);
    }
    else{
document.getElementById("quarters").value = "";
 document.getElementById("dimes").value = "";
 document.getElementById("nickels").value = "";
 document.getElementById("pennies").value = "";
    }
 }
 
 function makeChange (cents) {
    var quarters = parseInt(cents / 25);
    cents = cents % 25;
    var dimes = parseInt(cents / 10);
        cents = cents % 10;
    var nickels = parseInt(cents / 5);
        cents = cents % 5;
    var pennies = parseInt(cents / 1);
 document.getElementById("quarters").value = quarters;
 document.getElementById("dimes").value = dimes;
 document.getElementById("nickels").value = nickels;
 document.getElementById("pennies").value = pennies;
 }

 document.getElementById("clearBtn").onclcik = function() {
    clearResults()
       }

 function clearResults() {
    document.getElementById("quarters").value = "";
    document.getElementById("dimes").value = "";
    document.getElementById("nickels").value = "";
    document.getElementById("pennies").value = "";
}

