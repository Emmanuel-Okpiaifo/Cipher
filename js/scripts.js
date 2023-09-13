// Business Logic
function firstNLast(sentence) {
    const firstLetter = sentence.charAt(0);
    const lastLetter = sentence.charAt(sentence.length - 1);
    const firstNLast = firstLetter.concat(lastLetter).toUpperCase();
    return firstNLast;
}

function reverseStr(str) {
    const letter = str.split("").reverse().join("");
    return letter;
}

function newSentence(sentence) {
    const firstAndLast = firstNLast(sentence);
    const reverse = reverseStr(firstAndLast);
    const newSentence = sentence.concat(reverse)
    return newSentence;
}

function thirdSentence(sentence) {
    let index = parseInt(sentence.length / 2);
    let oldSentence = newSentence(sentence);
    let middleChar = sentence.charAt(index);
    let originalSentence = middleChar.concat(oldSentence);
    return originalSentence;
}

function cipher(sentence) {
    let existingSentence = thirdSentence(sentence);
    let cipherMessage = existingSentence.split("").reverse().join("");
    return cipherMessage;
}

//User Interface Logic
$(document).ready(function() {
  $("#cipher").submit(function(e) {
    e.preventDefault();

    const sentence = $("#sentence").val();
    const cipheredSentence = cipher(sentence); 


    $(".output1").html(sentence);
    $(".output").html(cipheredSentence);

    $("#original").click(function() {
      console.log();
      $(".output1").toggle();
    })

    $("#cipherSentence").click(function() {
      $(".output").toggle();
    })
  })
})