var people = [];//create an array called people
function add() {
    
    // fetch the elements that have id name and amount in the form and assign them to n and a
    const n = document.getElementById('fullname');
    const a = document.getElementById('amount');

    // fetch the values of n and a
    fname = n.value;
    amt = a.value;

    //add the values to the table
    if (fname != '' && amt != '') {//check if the field is empty
        var table = document.getElementById("usertable");// fetch the table having id as usertable set it to variable table
        var r = document.getElementById("usertable").rows.length - 1;// fetch the number of rows set to var r
        var row = table.insertRow(0); // set to variable row the command to insert a row into the table
        var cell1 = row.insertCell(0); // set to variable cell1 the command to insert first cell in the new row
        var cell2 = row.insertCell(1); // set to variable cell2 the command to insert second cell in the new row
        cell1.innerHTML = fname; //use command insert first cell to a row to add the name into table in html
        cell1.colSpan = "2"; // add colspan=2 in html to the first cell
        people[r] = fname; // record the name to the array people setting the current row as its index
        cell1.type = "text"; //add type="text" to the first cell in current row in html
        cell2.innerHTML = amt; //record amount to the second cell in current row in the html
        n.value = ''; // set the form fields to empty
        a.value = '';
    }
    
    
}

//function to pick a random person

function pick() {
    var row = document.getElementById("usertable").rows.length - 1; //set row length of the table "usertable " to var row
    if (row != 0){ // check if row is not empty
        let a = Math.floor(Math.random() * row) + 1; //select a random number between 1 and the length of the row
        document.getElementById("congrats").innerHTML = "equb winner is";  //print out a message to the <h1> element with id="congrats"
        document.getElementById("lucky").innerHTML = people[a-1]; //print out the name of the lucky winner sellected by the random row number print it to <h2> element with id="lucky"
    }
}