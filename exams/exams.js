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
console.log(web_2021_previous_next_send);
// web_2021_previous_next_send.style.display = 'none';
for(let i=0; i<web_2021_question.length; i++) {
  web_2021_question[i].style.display = 'none';
}

// when click on (begin) button will start the exam
web_2021_begin.onclick = function() {
  web_2021_info.style.display = 'none';
  web_2021_begin.style.display = 'none';

  web_2021_buttons.style.display = 'block';
// web_2021_previous_next_send.style.display = 'block';
web_2021_question[0].style.display = 'block';
}

// function show take a button and make the question that related to button to appear
function show(button, question) {
  button.onclick = function() {
      for(var i=0; i<web_2021_question.length; i++) {
          web_2021_question[i].style.display = 'none';
      }
      question.style.display = 'block';
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
web_2021_send.onclick = function() {
  let it = 1;
  for(const i in web_2021_correct_anwer) {
      if(getSelectedRadioValue(`web_2021_question${toString(it)}`) == i) {
          web_2021_number_of_correct_answer++;
          it++;
      }
      console.log("web_2021_question" + toString(i));
  }
  console.log(web_2021_number_of_correct_answer);
}
// let x = getSelectedRadioValue("web_2021_question1");
// console.log(x);



} // ************************* end web_2021 *************************