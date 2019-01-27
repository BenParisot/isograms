function add(a, b) {
    return a + b;
}

var i = 0;
var welcome = 'Welcome. I am an Automated Isogram Test. ';
var definition = 'An isogram (also known as a "nonpattern word") is a logological term for a word or phrase without a repeating letter. ';
var offer = 'Enter your favorite word and I will tell you if it is an isogram or not. ';
var results = '';
// var blinkingCursor = ' | ';
var speed = 50;


function start() {
  if (i < welcome.length) {
    document.getElementById("welcome").innerHTML += welcome.charAt(i);
    i++;
    setTimeout(start, speed);
  }

  if (i < definition.length) {
    document.getElementById("definition").innerHTML += definition.charAt(i);
    i++;
    setTimeout(start, speed);
  }

  if (i < offer.length) {
    document.getElementById("offer").innerHTML += offer.charAt(i);
    i++;
    setTimeout(start, speed);
  }
  
//   if (i === welcome.length) {
//   document.getElementById("blinking-cursor").innerHTML = blinkingCursor;
//   }
}





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
        var resultsYes = document.getElementById('results');
        resultsYes.innerHTML = 'Yes, that is an isogram!';
    }

    if (sum !== wordArray.length) {
        var resultsNo = document.getElementById('results');
        resultsNo.innerHTML = 'No, that is not an isogram!';
    }
}
