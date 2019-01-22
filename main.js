function add(a, b) {
    return a + b;
}


function isIsogram(){
    var word = document.getElementById('word').value; 
    var array = word.split('');
    console.log(array);
    // console.log(word);

    // var regex1 = RegExp(array[1]);


    // console.log(regex1);

    var total = [];
    for (var i = 0; i < array.length; i++) {

        var re = new RegExp(array[i], 'g');
        // console.log(re);

        var test = ((word.match(re) || []).length);
        console.log(test);
        var isogram = 'That is an isogram';
        var notIsogram = 'That is not an isogram';

        console.log(word.length);

        total.push(test);

        // console.log(array[i]);

        // if (test != 1) {
        //     console.log(notIsogram);
        // }
        // else (console.log(isogram));

    
    }
 
    console.log(total);
    
    var sum = total.reduce(add, 0);


    if (sum === array.length) {
        console.log("that's an isogram");
        var resultsYes = document.getElementById('results');
        resultsYes.innerHTML = 'Yes, that is an isogram!';


    }
    if (sum !== array.length) {

         var resultsNo = document.getElementById('results');
        resultsNo.innerHTML = 'No, that is not an isogram!';
    }
    //get string input from user
    //test it using isIsogram function
    //display yes or no on screen to user




}

// isIsogram();