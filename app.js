/*'use strict';
var name = prompt('If you are going to learn about me, I would like to know your name, please tell me!');
console.log(name);

var birth = prompt("Was I born in Washington State?");
console.log(birth);
  
if (birth.toLowerCase() === 'yes'){
  alert ('Incorrect! Hint Hint, it is the state that pirates seek to plunder!');
    }
    else {
        alert ('Correct! I was born and raised in Montana, the Treasure State!');
    }

var school = prompt('Did I finish High School?');
    console.log(school);
    if (school.toLowerCase() === 'yes'){
        alert ('Correct! I finished early with a below 3.0 GPA, and was in the ARMY 4 days later.');
    }
    else {
        alert ('oh yee of little faith...');
    }
var bones = prompt(name + ', Do you think I have ever broken a bone?');
   // console.log(bones);
    //if (bones.toLowerCase() === 'yes'){
    //    alert ('Correct! I broke a single bone in 9 places! Titanium fixes everything.');
    //}
    /*else {
        alert ('I would not say I am accident prone, but i have been wreckless on a few of life\'s occassions...');
    }
var years = prompt('How many years have I been at my current employer? Please spell out your answer.');
    console.log(years);
    if (years.toLowerCase() === 'ten'){
        alert ('That\'s right! Approaching Eleven very soon!');
    }
    else {
        alert ('If you answered less than Ten, now you know I am a loyal employee!');
    }
var genius = prompt('Do I know what I am doing?');
    console.log(genius);
    if (genius.toLowerCase() === 'no'){
        alert ('Great Answer! Of course not, that\'s why I am here!');
    }
    else {
        alert ('I could sell you a pen for \$100 all day!');
    }*/


var count = prompt('How many tattoos do I have?');
for (var i = 0; i < 2; i++){
  if (count === '5'){
    alert('correct');
    break;

  } else {
    alert ('wrong');
  }
  count = prompt('Try again');
}
