{ // ************************* begin graphics_2021 *************************
const graphics_2021_correct_answer = {
    1: 'a',
    2: 'a',
    3: 'b',
    4: 'a',
    5: 'a',
    6: 'b',
};
let graphics_2021_number_of_correct_answer = 0;

for(const i in graphics_2021_correct_answer) {
    if(graphics_2021_correct_answer[i] == 'a') {
        graphics_2021_number_of_correct_answer++;
    }
}

// const correct_answer = {
//     answer1: 'a',
//     answer2: 'a',
//     answer3: 'a',
//     answer4: 'a',
//     answer5: 'a',
//     answer6: 'a',
// }

// function calculateScore(answers, correct_answers) {
//     let score = 0;
//     for(const i in correct_answer) {
//         if(answers[i] === correct_answers[i]) {
//             score++;
//         }
//     }
//     return score;
// }

// let number_of_questions = 10;
// let sum_of_correct_answer = 0;

// function calculate_result() {

// }

// that are variable to catch the butttons, question, next and previous elements
let graphics_2021_button   = document.querySelectorAll('.graphics_2021_button');
let graphics_2021_question = document.querySelectorAll('.graphics_2021_question');
let graphics_2021_next     = document.getElementById('graphics_2021_next');
let graphics_2021_previous = document.getElementById('graphics_2021_previous');
let send_button            = document.getElementById('send_button');
let graphics_2021_start    = document.getElementById('graphics_2021_start');
let graphics_2021_info     = document.getElementById('graphics_2021_info');
let graphics_2021          = document.getElementById('graphics_2021');

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
send_button.onclick = function() {
    for(const i in graphics_2021_correct_answer) {
        if(getSelectedRadioValue("graphics_2021_question" + toString(i)) == i) {
            graphics_2021_number_of_correct_answer++;
        }
    }
    console.log(graphics_2021_number_of_correct_answer);
}
let x = getSelectedRadioValue("graphics_2021_question1");
console.log(x);

{ // when click on start button will start the exam 
    graphics_2021.style.display = 'none';
    document.getElementById('send_button').style.display = 'none';

    graphics_2021_start.onclick = function() {
        graphics_2021_info.style.display = 'none';
        graphics_2021.style.display = 'block';
        document.getElementById('send_button').style.display = 'block';
    }
}

// this function check if element is hidden or not
function isHidden(element) {
    if (element) {
        var displayStyle = window.getComputedStyle(element).getPropertyValue('display');
        return displayStyle === 'none';
    }
    return false; // Return false if the element doesn't exist
}

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
next(graphics_2021_next, graphics_2021_question);

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
// excute the function 
previous(graphics_2021_previous, graphics_2021_question);

// function show take a button and make the question that related to button to appear
function show(button, question) {
    button.onclick = function() {
        for(var i=0; i<6; i++) {
            graphics_2021_question[i].style.display = 'none';
        }
        question.style.display = 'block';
    }
}
// this (for loop) for excute all buttons
for(let i=0; i<6; i++) {
    show(graphics_2021_button[i], graphics_2021_question[i]);
}

// console.log(graphics_2021_question);

// send button
// send_button.onclick = function() {
//     console.log(calculateScore(graphics_2021_question, correct_answer));
// }

// Loop through each list item
// graphics_2021_question.forEach(function(listItem) {
//     // Select all radio buttons within the current list item
//     var radioButtons = listItem.querySelectorAll('input[type="radio"]');

//     // Loop through each radio button
//     radioButtons.forEach(function(radioButton) {
//         // Add event listener to each radio button
//         radioButton.addEventListener('change', function() {
//             // Check if the radio button is checked
//             if (this.checked == ) {
//                 // Capture the value of the selected radio button
//                 var selectedValue = this.value;
//                 console.log('Selected value:', selectedValue);
//             }
//         });
//     });
// });

// function calc(questions, correct_ans) {
//     let score = 0;
//     // Loop through each question
//     for (const i in correct_ans) {
//         // Get the selected answer for the current question
//         const selectedAnswer = document.querySelector('input[name="' + i + '"]:checked');
//         if (selectedAnswer) {
//             // Compare the selected answer with the correct answer
//             if (selectedAnswer.value === correctAnswers[i]) {
//                 // Increment score if the answer is correct
//                 score++;
//             }
//         }
//     }
//     return score;
// }
} // ************************* end graphics_2021 *************************