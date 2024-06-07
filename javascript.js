function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateQuestion() {
    const operators = ['+', '-', '*', '/'];
    let question = '';
    let answer = 0;
    let mark;
    // Randomly choose the number of operations (between 2 and 4)
    const numOperations = generateRandomNumber(2, 5);

    for (let i = 0; i < numOperations; i++) {
        const num = generateRandomNumber(1, 100);
        const operator = operators[generateRandomNumber(1, operators.length)];
        if (i === 0) {
            question += num;
            answer = num;
        } 
        else {
            question += ` ${operator} ${num}`;

            switch (operator) {
                case '+':
                    answer += num;
                    break;
                case '-':
                    answer -= num;
                    break;
                case '*':
                    answer *= num;
                    break;
                case '/':
                    answer /= num;
                    break;
            }
        }
    }
    document.getElementById('question').textContent = question;
    document.getElementById('answer').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('question').dataset.answer = answer;
    
}

function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById('answer').value);
    const correctAnswer = parseFloat(document.getElementById('question').dataset.answer);

    if (userAnswer === correctAnswer) {
        document.getElementById('result').textContent = 'Correct!';
        document.getElementById('result').style.color = 'green';
    } else {
        document.getElementById('result').textContent = `Incorrect!Answer= ${correctAnswer}.`;
        document.getElementById('result').style.color = 'red';
    }
}

// Generate the first question on page load
generateQuestion();
