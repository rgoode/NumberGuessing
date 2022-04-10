function getRandomResult(){

    const question = response("Choose a number between 1 and 10");

    const randomNum = Math.floor(Math.random()*11);

    const guessing = true;

    while(guessing) {
        if(question < randomNum){
            question = response("Not a Match. Try guessing a Higher Number.");
     }

        else if(question > randomNumber){
          question = response("Not a Match. Try guessing a Lower Number");
     }

        else if(question == randomNum){
          question = response("Good Work!");
          guessing = false;
     }

    }
}

console.log(getRandomResult());