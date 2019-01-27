function add(a, b) {
    return a + b;
}
var x = 0;
var i = 0;
var welcome = 'Welcome. I am an Automated Isogram Test. An isogram, also known as a nonpattern word, is a logological term for a word or phrase without a repeating letter. Enter your favorite word and I will tell you if it is an isogram or not. ';
var results = '';
var blinkingCursor = ' | ';
var speed = 50;


function start() {
  if (i < welcome.length) {
    document.getElementById("welcome").innerHTML += welcome.charAt(i);
    i++;
    setTimeout(start, speed);
  }

  if (i === welcome.length) {
    document.getElementById("blinking-cursor").innerHTML = blinkingCursor;
    }
  

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
        var resultsYes = 'Yes, ' + word + ' is an isogram.';
        function resultsTypeYes() {
            if (x < resultsYes.length) {
                document.getElementById("results").innerHTML += resultsYes.charAt(x);
                x++;
                setTimeout(resultsTypeYes, speed);
            }      
        }
        resultsTypeYes();
    }   


    if (sum !== wordArray.length) {
        var resultsNo = 'No, ' + word + ' is not an isogram.';
        function resultsTypeNo() {
            if (x < resultsNo.length) {
                document.getElementById("results").innerHTML += resultsNo.charAt(x);
                x++;
                setTimeout(resultsTypeNo, speed);
            }      
        }
        resultsTypeNo();
    }
}
