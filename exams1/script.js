let info = document.getElementById('info');
// let questions = document.getElementById('questions');
let buttons = document.getElementById('buttons');

// ************************* a *************************
// Function to format time as HH:MM:SS
function formatTimeHours(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return `${padZero(hours)}:${padZero(minutes)}:${padZero(remainingSeconds)}`;
}
// Set the duration of the exam in seconds
const examDuration = 5; // 5 minutes

// Get the timer element
const timerElement = document.getElementById('timer');

// Initialize the timer display
timerElement.textContent = formatTimeHours(examDuration);

// Start the countdown timer
let timeRemaining = examDuration;
const timerInterval = setInterval(() => {
  timeRemaining--;
  if (timeRemaining >= 0) {
    timerElement.textContent = formatTimeHours(timeRemaining);
  } else {
    clearInterval(timerInterval);
    timerElement.textContent = 'Time is up!';
    // Add any additional actions to perform when the time is up
  }
}, 1000);
let xx = 5;




// Function to format time as MM:SS
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${padZero(minutes)}:${padZero(remainingSeconds)}`;
}

// Function to pad single digit numbers with zero
function padZero(number) {
  return number < 10 ? '0' + number : number;
}
// ************************* a *************************

// for(const i in web_2021.questions) {
  
let web_2021 = {
  info: {
    name: "web_2021",
    number_of_correct_answer: 0,
    time: 120,
  },
  correct_answer: {

  },
  questions: {
    1: {
      // qestion
      q:"question1",
      // answers
      a:"answer a",
      b:"answer b",
      c:"answer c",
      d:"answer d",
      // correct answer
      e:"answer a",
    },
    2: {
      // qestion
      q:"question2",
      // answers
      a:"answer a",
      b:"answer b",
      c:"answer c",
      d:"answer d",
      // correct answer
      e:"answer a",
    },
    3: {
      // qestion
      q:"question3",
      // answers
      a:"answer a",
      b:"answer b",
      c:"answer c",
      d:"answer d",
      // correct answer
      e:"answer a",
    },
    4: {
      // qestion
      q:"question4",
      // answers
      a:"answer a",
      b:"answer b",
      c:"answer c",
      d:"answer d",
      // correct answer
      e:"answer a",
    },
    5: {
      // qestion
      q:"question5",
      // answers
      a:"answer a",
      b:"answer b",
      c:"answer c",
      d:"answer d",
      // correct answer
      e:"answer a",
    },
    6: {
      // qestion
      q:"question6",
      // answers
      a:"answer a",
      b:"answer b",
      c:"answer c",
      d:"answer d",
      // correct answer
      e:"answer a",
    },
    7: {
      // qestion
      q:"question7",
      // answers
      a:"answer a",
      b:"answer b",
      c:"answer c",
      d:"answer d",
      // correct answer
      e:"answer a",
    },
    8: {
      // qestion
      q:"question8",
      // answers
      a:"answer a",
      b:"answer b",
      c:"answer c",
      d:"answer d",
      // correct answer
      e:"answer a",
    },
    9: {
      // qestion
      q:"question9",
      // answers
      a:"answer a",
      b:"answer b",
      c:"answer c",
      d:"answer d",
      // correct answer
      e:"answer d",
    },
  },
  buttons: {

  },
};

// let web_2022 = {
//   info: {
//     numberOfQuestions: 3,
//     name: "web_2021",
//     correct_answer:0,
//   },
//   questions: {
//     1: {
//       q:"question1",
//       a:"a",
//       b:"b",
//       c:"c",
//       d:"answerd",
//       e:"a",
//     },
//     2: {
//       q:"question2",
//       a:"answera",
//       b:"b",
//       c:"c",
//       d:"answerd",
//       e:"a",
//     },
//     3: {
//       q:"question3",
//       a:"answera",
//       b:"b",
//       c:"c",
//       d:"answerd",
//       e:"a",
//     },
//     4: {
//       q:"question4",
//       a:"answera",
//       b:"b",
//       c:"c",
//       d:"answerd",
//       e:"a",
//     },
//     5: {
//       q:"question5",
//       a:"answera",
//       b:"b",
//       c:"c",
//       d:"answerd",
//       e:"a",
//     },
//     6: {
//       q:"question6",
//       a:"answera",
//       b:"b",
//       c:"c",
//       d:"answerd",
//       e:"correct_answer",
//     },
//     6: {
//       q:"question6",
//       a:"answera",
//       b:"answerb",
//       c:"c",
//       d:"answerd",
//       e:"correct_answer",
//     },
//     7: {
//       q:"question7",
//       a:"answera",
//       b:"answerb",
//       c:"answerc",
//       d:"answerd",
//       e:"correct_answer",
//     },
//     8: {
//       q:"question8",
//       a:"answera",
//       b:"answerb",
//       c:"answerc",
//       d:"answerd",
//       e:"correct_answer",
//     },
//     9: {
//       q:"question9",
//       a:"answera",
//       b:"answerb",
//       c:"answerc",
//       d:"answerd",
//       e:"correct_answer",
//     },
//   },
//   buttons: {

//   },
// };

// { // create a html content of exam
//   // Access the element where you want to insert the content
// var questions = document.getElementById("questions");

// // Loop to create the list items
// console.log(Object.keys(web_2021.questions).length);
// for(let i = 0; i < Object.keys(web_2021.questions).length; i++) {
//   // Create a list item
//   var listItem = document.createElement('li');
//   listItem.setAttribute('class', 'question');

//   // Create and append the heading element
//   var heading = document.createElement('h1');
  
//   const keys = Object.keys(web_2021.questions);

//   // Loop through the keys array
//   const key = keys[i];
//   const value = web_2021.questions[key];
//   console.log(web_2021.questions[key].q);


//   heading.textContent = web_2021.questions[key].q;
  
//   listItem.appendChild(heading);

//   // Create and append radio buttons with labels
//   var options = ['answera', 'b', 'c', 'd'];
//   for(let j = 0; j < options.length; j++) {
//     var radioButton = document.createElement('input');
//     radioButton.setAttribute('type', 'radio');
//     radioButton.setAttribute('id', 'question' + (i + 1) + options[j]);
//     radioButton.setAttribute('name', 'question' + (i + 1));
//     radioButton.setAttribute('value', options[j]);

//     var label = document.createElement('label');
//     label.setAttribute('for', 'question' + (i + 1) + options[j]);
//     label.textContent = options[j];

//     // Append the radio button and label to the list item
//     listItem.appendChild(radioButton);
//     listItem.appendChild(label);
//   }

//   // Append the list item to the questions list
//   questions.appendChild(listItem);
// }

// }

function create_exam(exam) {
  var questions = document.getElementById("questions");

  // Loop to create the list items
  // console.log(Object.keys(exam.questions).length);
  for(let i = 0; i < Object.keys(exam.questions).length; i++) {
    // Create a list item
    var listItem = document.createElement('li');
    listItem.setAttribute('class', 'question');

    // Create and append the heading element
    var heading = document.createElement('h1');
    
    const keys = Object.keys(exam.questions);

    // Loop through the keys array
    const key = keys[i];
    const value = exam.questions[key];
    // console.log(exam.questions[key].q);


    heading.textContent = exam.questions[key].q;
    
    listItem.appendChild(heading);

    // Create and append radio buttons with labels
    var options = ['a', 'b', 'c', 'd'];
    for(let j = 0; j < options.length; j++) {
      
      var radioButton = document.createElement('input');
      radioButton.setAttribute('type', 'radio');
      radioButton.setAttribute('id', 'question' + (i + 1) + options[j]);
      radioButton.setAttribute('name', 'question' + (i + 1));
      radioButton.setAttribute('value', options[j]);

      var label = document.createElement('label');
      label.setAttribute('for', 'question' + (i + 1) + options[j]);
      label.textContent = options[j];

      // Append the radio button and label to the list item
      // listItem.appendChild(radioButton);
      // listItem.appendChild(label);

      var div_answer = document.createElement('div');
      div_answer.appendChild(radioButton);
      div_answer.appendChild(label);
      listItem.appendChild(div_answer)

      div_answer.setAttribute('class','answer');
    }

    // Append the list item to the questions list
    questions.appendChild(listItem);
    let ol = document.getElementById('ol');
    ol.appendChild(listItem);
  }
}

create_exam(web_2021);


{ // control of exams buttons by js
  let question = document.querySelectorAll('.question');
  
  // console.log('1');
  for(let i=0; i<question.length; i++) {
    question[i].style.display = 'none';
  }
  question[0].style.display = 'block';

  let previous = document.getElementById('previous');
  previous.onclick = function() {
    for(let i=1; i<question.length; i++) {
      if(question[i].style.display == 'block') {
        question[i].style.display = 'none';
        question[i-1].style.display = 'block';
        break;
      }
    }
  }
  let next = document.getElementById('next');
  next.onclick = function() {
    for(let i=0; i<question.length-1; i++) {
      if(question[i].style.display == 'block') {
        question[i].style.display = 'none';
        question[i+1].style.display = 'block';
        break;
      }
    }
  }
}



function getSelectedRadioValue(radioGroupName) {
  // Get all radio inputs within the specified radio group name
  var radioInputs = document.getElementById('questions').querySelectorAll('input[type="radio"][name="' + radioGroupName + '"]');
  // console.log(radioInputs);
  // console.log(radioInputs.length);
  // Iterate through each radio input
  let property_name = object.keys(web_2021.questions);
  console.log(property_name);
  
  for (var i = 0; i < radioInputs.length; i++) {
      // Check if the radio input is checked
      if (radioInputs[i].checked) {
          // Return the value of the checked radio input
          // return radioInputs[i].value;
          return property_name[i+1];
      }
  }
  
  // If no radio input is checked, return null or any default value you prefer
  return "not_selected";
}
// setInterval(() => {
//   console.log(getSelectedRadioValue('question1'));
// }, 3000);


let send = document.getElementById('send');



send.onclick = function() {
  let it = 1;
  let x = document.getElementById('questions');
  const inputs = x.querySelectorAll('input[type="radio"]');

  for(const i in web_2021.questions) {
    // console.log(getSelectedRadioValue(`question${String(it++)}`));
    // console.log(web_2021.questions[`${i}`]['e']);

      if(getSelectedRadioValue(`question${String(it++)}`) === web_2021.questions[`${i}`]['e']) {
      // if(getSelectedRadioValue('question'+ String(it)) == web_2021.questions[`${i}`]['e']) {
          web_2021.info.number_of_correct_answer++;
          console.log('hre');
      }
  }
  console.log(`no.of correct ans=>${web_2021.info.number_of_correct_answer}`);
}