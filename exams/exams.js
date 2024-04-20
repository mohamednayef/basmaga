{ // ************************* begin web_2021 *************************
const web_2021_correct_anwer = {
  1: 'a',
  2: 'a',
  3: 'a',
  4: 'a',
  5: 'a',
  6: 'a',
  7: 'a',
  8: 'a',
  9: 'a',
  10: 'a',
  11: 'a',
  12: 'a',
  13: 'a',
  14: 'a',
  15: 'a',
  16: 'a',
  17: 'a',
  18: 'a',
  19: 'a',
  20: 'a',
  21: 'a',
  22: 'a',
  23: 'a',
  24: 'a',
  25: 'a',
  26: 'a',
  27: 'a',
  28: 'a',
  29: 'a',
  30: 'a',
  31: 'a',
  32: 'a',
  33: 'a',
  34: 'a',
  35: 'a',
  36: 'a',
  37: 'a',
  38: 'a',
  39: 'a',
  40: 'a',
}

// variables
let web_2021 = document.getElementById('web_2021');
let web_2021_info = document.getElementById('web_2021_info');
let web_2021_begin = document.getElementById('web_2021_begin');

let web_2021_number_of_correct_answer = 0;
let web_2021_button = document.querySelectorAll('.web_2021_button');
let web_2021_question = document.querySelectorAll('.web_2021_question');

let web_2021_buttons = document.getElementById('web_2021_buttons');
let web_2021_questions = document.getElementById('web_2021_questions');
let web_2021_previous_next_send = document.getElementById('web_2021_previous_next_send');
let web_2021_next = document.getElementById('web_2021_next');
let web_2021_previous = document.getElementById('web_2021_previous');
let web_2021_send = document.getElementById('web_2021_send'); 

web_2021_buttons.style.display = 'none';
web_2021_previous_next_send.style.display = 'none';
for(let i=0; i<web_2021_question.length; i++) {
  web_2021_question[i].style.display = 'none';
}

// when click on (begin) button will start the exam
web_2021_begin.onclick = function() {
  web_2021_info.style.display = 'none';
  web_2021_begin.style.display = 'none';

  web_2021_buttons.style.display = 'block';
web_2021_previous_next_send.style.display = 'block';
web_2021_question[0].style.display = 'block';
}

// function show take a button and make the question that related to button to appear
function show(button, question) {
  button.onclick = function() {
      for(var i=0; i<web_2021_question.length; i++) {
          web_2021_question[i].style.display = 'none';
          web_2021_button[i].style.backgroundColor = 'gray';
      }
      question.style.display = 'block';
      button.style.backgroundColor = 'red';
  }
}
// this (for loop) for excute all buttons
for(let i=0; i<web_2021_question.length; i++) {
  show(web_2021_button[i], web_2021_question[i]);
}



// this function check if element is hidden or not
function isHidden(element) {
  if (element) {
      var displayStyle = window.getComputedStyle(element).getPropertyValue('display');
      return displayStyle === 'none';
  }
  return false; // Return false if the element doesn't exist
}

// function previous when click the previous question appear
function previous(button, elements) {
  button.onclick = function() {
      for (var i = 1; i <= elements.length - 1; i++) {
          if (!isHidden(elements[i])) {
              elements[i].style.display = 'none';
              elements[i - 1].style.display = 'block';

              web_2021_button[i].style.backgroundColor = 'gray';
              web_2021_button[i-1].style.backgroundColor = 'red';
              break; // Exit loop after the first visible element is found and handled
          }
      }
  }
}
// excute the functoin
previous(web_2021_previous, web_2021_question);


// function (next), when click, the next question appear
function next(button, elements) {
  button.onclick = function() {
      for (var i = 0; i < elements.length - 1; i++) {
          if (!isHidden(elements[i])) {
              elements[i].style.display = 'none';
              elements[i + 1].style.display = 'block';

              web_2021_button[i].style.backgroundColor = 'gray';
              web_2021_button[i+1].style.backgroundColor = 'red';
              break; // Exit loop after the first visible element is found and handled
          }
      }
  }
}
// excute function next
next(web_2021_next, web_2021_question);

function getSelectedRadioValue(radioGroupName) {
  // Get all radio inputs within the specified radio group name
  var radioInputs = document.querySelectorAll('input[type="radio"][name="' + radioGroupName + '"]');
  
  // Iterate through each radio input
  for (var i = 0; i < radioInputs.length; i++) {
      // Check if the radio input is checked
      if (radioInputs[i].checked) {
          // Return the value of the checked radio input
          return radioInputs[i].value;
      }
  }
  
  // If no radio input is checked, return null or any default value you prefer
  return null;
}

// for(let i=0; i<web_2021_question; i++) {
//   if(getSelectedRadioValue())
// }

web_2021_send.onclick = function() {
  // Select all radio buttons within the specified container
let radioButtons = document.querySelectorAll('#web_2021_questions input[type="radio"]');

// Array to store the values of all radio buttons
let radioValues = [];

// Loop through each radio button
let flag = 0;
  let c = 0;
radioButtons.forEach(radioButton => {
  c++;
    // Check if the radio button is checked
    if (radioButton.checked) {
        // Push the value of the checked radio button into the array
        radioValues.push(radioButton.value);
        flag = 1;
    }
    if(c==4) {
      if(flag == 0) {
        radioValues.push('e');
      }
      c=0;
      flag = 0;
    }
  }
  // console.log(radioValues[1]);
  
);
for(let i=0; i<web_2021_question.length; i++) {
  for(const j in web_2021_correct_anwer) {
    if(radioValues[i++] == web_2021_correct_anwer[j]) {
      web_2021_number_of_correct_answer++;
    }
  }
  console.log((web_2021_number_of_correct_answer/web_2021_question.length * 100)+"%");
}
}








} // ************************* end web_2021 *************************

{ // ************************* model of class questoin *************************
  let web_2021 = {
    q1: {
      q: 'questoin1',
      a: 'answer1',
      b: 'answer1',
      c: 'answer1',
      d: 'answer1'
      },
      q2: {
      q: 'questoin2',
      a: 'answer2',
      b: 'answer2',
      c: 'answer2',
      d: 'answer2'
      },
      q3: {
      q: 'questoin3',
      a: 'answer3',
      b: 'answer3',
      c: 'answer3',
      d: 'answer3'
      },
      q4: {
      q: 'questoin4',
      a: 'answer4',
      b: 'answer4',
      c: 'answer4',
      d: 'answer4'
      },
      q5: {
      q: 'questoin5',
      a: 'answer5',
      b: 'answer5',
      c: 'answer5',
      d: 'answer5'
      },
      q6: {
      q: 'questoin6',
      a: 'answer6',
      b: 'answer6',
      c: 'answer6',
      d: 'answer6'
      },
      q7: {
      q: 'questoin7',
      a: 'answer7',
      b: 'answer7',
      c: 'answer7',
      d: 'answer7'
      },
      q8: {
      q: 'questoin8',
      a: 'answer8',
      b: 'answer8',
      c: 'answer8',
      d: 'answer8'
      },
      q9: {
      q: 'questoin9',
      a: 'answer9',
      b: 'answer9',
      c: 'answer9',
      d: 'answer9'
      },
      q10: {
      q: 'questoin10',
      a: 'answer10',
      b: 'answer10',
      c: 'answer10',
      d: 'answer10'
      },
      q11: {
      q: 'questoin11',
      a: 'answer11',
      b: 'answer11',
      c: 'answer11',
      d: 'answer11'
      },
      q12: {
      q: 'questoin12',
      a: 'answer12',
      b: 'answer12',
      c: 'answer12',
      d: 'answer12'
      },
      q13: {
      q: 'questoin13',
      a: 'answer13',
      b: 'answer13',
      c: 'answer13',
      d: 'answer13'
      },
      q14: {
      q: 'questoin14',
      a: 'answer14',
      b: 'answer14',
      c: 'answer14',
      d: 'answer14'
      },
      q15: {
      q: 'questoin15',
      a: 'answer15',
      b: 'answer15',
      c: 'answer15',
      d: 'answer15'
      },
      q16: {
      q: 'questoin16',
      a: 'answer16',
      b: 'answer16',
      c: 'answer16',
      d: 'answer16'
      },
      q17: {
      q: 'questoin17',
      a: 'answer17',
      b: 'answer17',
      c: 'answer17',
      d: 'answer17'
      },
      q18: {
      q: 'questoin18',
      a: 'answer18',
      b: 'answer18',
      c: 'answer18',
      d: 'answer18'
      },
      q19: {
      q: 'questoin19',
      a: 'answer19',
      b: 'answer19',
      c: 'answer19',
      d: 'answer19'
      },
      q20: {
      q: 'questoin20',
      a: 'answer20',
      b: 'answer20',
      c: 'answer20',
      d: 'answer20'
      },
      q21: {
      q: 'questoin21',
      a: 'answer21',
      b: 'answer21',
      c: 'answer21',
      d: 'answer21'
      },
      q22: {
      q: 'questoin22',
      a: 'answer22',
      b: 'answer22',
      c: 'answer22',
      d: 'answer22'
      },
      q23: {
      q: 'questoin23',
      a: 'answer23',
      b: 'answer23',
      c: 'answer23',
      d: 'answer23'
      },
      q24: {
      q: 'questoin24',
      a: 'answer24',
      b: 'answer24',
      c: 'answer24',
      d: 'answer24'
      },
      q25: {
      q: 'questoin25',
      a: 'answer25',
      b: 'answer25',
      c: 'answer25',
      d: 'answer25'
      },
      q26: {
      q: 'questoin26',
      a: 'answer26',
      b: 'answer26',
      c: 'answer26',
      d: 'answer26'
      },
      q27: {
      q: 'questoin27',
      a: 'answer27',
      b: 'answer27',
      c: 'answer27',
      d: 'answer27'
      },
      q28: {
      q: 'questoin28',
      a: 'answer28',
      b: 'answer28',
      c: 'answer28',
      d: 'answer28'
      },
      q29: {
      q: 'questoin29',
      a: 'answer29',
      b: 'answer29',
      c: 'answer29',
      d: 'answer29'
      },
      q30: {
      q: 'questoin30',
      a: 'answer30',
      b: 'answer30',
      c: 'answer30',
      d: 'answer30'
      },
      q31: {
      q: 'questoin31',
      a: 'answer31',
      b: 'answer31',
      c: 'answer31',
      d: 'answer31'
      },
      q32: {
      q: 'questoin32',
      a: 'answer32',
      b: 'answer32',
      c: 'answer32',
      d: 'answer32'
      },
      q33: {
      q: 'questoin33',
      a: 'answer33',
      b: 'answer33',
      c: 'answer33',
      d: 'answer33'
      },
      q34: {
      q: 'questoin34',
      a: 'answer34',
      b: 'answer34',
      c: 'answer34',
      d: 'answer34'
      },
      q35: {
      q: 'questoin35',
      a: 'answer35',
      b: 'answer35',
      c: 'answer35',
      d: 'answer35'
      },
      q36: {
      q: 'questoin36',
      a: 'answer36',
      b: 'answer36',
      c: 'answer36',
      d: 'answer36'
      },
      q37: {
      q: 'questoin37',
      a: 'answer37',
      b: 'answer37',
      c: 'answer37',
      d: 'answer37'
      },
      q38: {
      q: 'questoin38',
      a: 'answer38',
      b: 'answer38',
      c: 'answer38',
      d: 'answer38'
      },
      q39: {
      q: 'questoin39',
      a: 'answer39',
      b: 'answer39',
      c: 'answer39',
      d: 'answer39'
      },
      q40: {
      q: 'questoin40',
      a: 'answer40',
      b: 'answer40',
      c: 'answer40',
      d: 'answer40'
      },
  };
  // for(let i=1; i<40; i++) {
  //   console.log(web_2021['q'+i].q);
  //   console.log(web_2021['q'+i].a);
  //   console.log(web_2021['q'+i].b);
  //   console.log(web_2021['q'+i].c);
  //   console.log(web_2021['q'+i].d);
  // }
}

