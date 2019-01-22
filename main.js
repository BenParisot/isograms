function add(a, b) {
    return a + b;
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
