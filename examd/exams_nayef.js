{ // ************************* begin graphics_2021 *************************

const correct_answer = {
    answer1: 'a',
    answer2: 'a',
    answer3: 'a',
    answer4: 'a',
    answer5: 'a',
    answer6: 'a',
}

function calculateScore(answers, correct_answers) {
    let score = 0;
    for(const i in correct_answer) {
        if(answers[i] === correct_answers[i]) {
            score++;
        }
    }
    return score;
}

let number_of_questions = 10;
let sum_of_correct_answer = 0;

function calculate_result() {

}

let graphics_2021_start = document.getElementById('graphics_2021_start');
let graphics_2021_info = document.getElementById('graphics_2021_info');
let graphics_2021 = document.getElementById('graphics_2021');


// graphics_2021.style.display = 'none';
// graphics_2021_start.onclick = function() {
//     graphics_2021_info.style.display = 'none';
//     graphics_2021.style.display = 'block';

// }

// that are four variable to catch the butttons, question, next and previous elements
let graphics_2021_button = document.querySelectorAll('.graphics_2021_button');
let graphics_2021_question = document.querySelectorAll('.graphics_2021_question');
let graphics_2021_next = document.getElementById('graphics_2021_next');
let graphics_2021_previous = document.getElementById('graphics_2021_previous');
let send_button = document.getElementById('send_button');

// 8888888888


// this function check if element is hidden or not
function isHidden(element) {
    if (element) {
        var displayStyle = window.getComputedStyle(element).getPropertyValue('display');
        return displayStyle === 'none';
    }
    return false; // Return false if the element doesn't exist
}

// function next when click the next question appear
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
send_button.onclick = function() {
    console.log(calculateScore(graphics_2021_question, correct_answer));
}

// Loop through each list item
graphics_2021_question.forEach(function(listItem) {
    // Select all radio buttons within the current list item
    var radioButtons = listItem.querySelectorAll('input[type="radio"]');

    // Loop through each radio button
    radioButtons.forEach(function(radioButton) {
        // Add event listener to each radio button
        radioButton.addEventListener('change', function() {
            // Check if the radio button is checked
            if (this.checked == ) {
                // Capture the value of the selected radio button
                var selectedValue = this.value;
                console.log('Selected value:', selectedValue);
            }
        });
    });
});

function calc(questions, correct_ans) {
    let score = 0;
    // Loop through each question
    for (const i in correct_ans) {
        // Get the selected answer for the current question
        const selectedAnswer = document.querySelector('input[name="' + i + '"]:checked');
        if (selectedAnswer) {
            // Compare the selected answer with the correct answer
            if (selectedAnswer.value === correctAnswers[i]) {
                // Increment score if the answer is correct
                score++;
            }
        }
    }
    return score;
}
} // ************************* end graphics_2021 *************************