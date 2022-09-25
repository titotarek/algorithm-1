function longest_word(sentence){
    var longest_word = '';
    var arr_sentence = my_sentence.split(' ');
    for (var i = 0; i < arr_sentence.length; i++){
        if (arr_sentence[i].length > longest_word.length){
        longest_word = arr_sentence[i];
        }
    }
    return 'The longest word is \"' + longest_word + '\" and its length is = ' + longest_word.length;
    }


var my_sentence = "The quick brown fox jumped over the lazy dog, and was good.";
console.log(longest_word(my_sentence));
