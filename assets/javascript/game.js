// the array of words
    const countries = ['china', 'india','united states', 'indoesoa', 'brazil', 'pakistan', 'nigeria', 'bangladesh', 'russia', 'mexico', 'japan', 'ethiopia', 'philippians', 'eygpt', 'germany', 'iran', 'thailand', 'france', 'turkey', 'spain', 'canada', 'ghana', 'chad', 'cuba', 'poland', 'sweden', 'hong kong', 'el salvador', 'costa rica', 'new zealand', 'puerto rico', 'trinidad', 'fiji', 'bahamas', 'mongolia']
 
// choose word randomly
  var genNum = Math.floor(Math.random()* countries.length);
  var chosenWord = countries[genNum];
  var rightWord = [];
  var wrongWord = [];
  var underScore = [];

  var docUnderScore = document.getElementsByClassName('underscore');
  var docRightGuess = document.getElementsByClassName('rightGuess');
  var docWrongGuess = document.getElementsByClassName('wrongGuess');

   
  console.log(chosenWord);

// underscores based on length of word
  var generateUnderscore =  () => {
       for(var i = 0; i < chosenWord.length ; i++) {
            underScore.push('_');
            
       }
       return underScore;
  }

// users guess
  document.addEventListener('keypress', (event) => {
    var keyword = String.fromCharCode(event.keycode);
  
// if user guess is right
     if(chosenWord.indexOf(keyword) > -1){

    // if right push to right array    
        rightWord.push(keyword);
    // replace underscore with the right letter
        underScore[chosenWord.indexOf(keyword)] = keyword;
        docnderScore =[0].innerHTML = underScore.join(' ');
        docRightGuess =[0].innerHTML = rightWord;

    // Checks to see if user word matches the right country
        if(underScore.join('') === choosenWord){
            alert('You guess the right country');
        }
     }
        else{
    // if wrong push to wrong array     
                wrongWord.push(keyword);
                docWrongGuess[0].innerHTML = wrongWord;
            }

        underScore[0].innerHTML = generateUnderscore().join(' ');
  });
