function add(a, b) {
    return a + b;
}

var x = 0;
var i = 0;
var speed = 50;

function isIsogram(){   
    var word = document.getElementById('word').value; 
    var wordArray = word.split('');
    var total = [];
    
    for (var i = 0; i < wordArray.length; i++) {
        var re = new RegExp(wordArray[i], 'g');
        var test = ((word.match(re) || []).length);
        total.push(test);
    }
     
    var sum = total.reduce(add, 0);

    if (sum === wordArray.length) {
        var resultsYes = 'Yes, ' + word + ' is an isogram.';
        function resultsTypeYes() {
            if (x < resultsYes.length) {
                document.getElementById("results").innerHTML += resultsYes.charAt(x);
                x++;
                setTimeout(resultsTypeYes, speed);
            }  
            if (x === resultsYes.length) {
                document.getElementById("blinking-cursor").innerHTML = '|';
                }    
        }
        resultsTypeYes();

    }   

    if (sum !== wordArray.length) {
        var resultsNo = 'Sorry, ' + word + ' is not an isogram.';
        function resultsTypeNo() {
            if (x < resultsNo.length) {
                document.getElementById("results").innerHTML += resultsNo.charAt(x);
                x++;
                setTimeout(resultsTypeNo, speed);
            }  
            if (i === txt.length) {
                document.getElementById("blinking-cursor").innerHTML = ' | ';
                }     
        }
        resultsTypeNo();
    }
}

function clearField() {
    location.reload();
}
