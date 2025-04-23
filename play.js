let episodes = [];
let allQuestions = [];
let currentQuestion = null;
let timer = null;
let timeLeft = 45;
let frozen = false;

function loadEpisodes() {
    fetch('episodes.json')
        .then(response => response.json())
        .then(data => {
            episodes = data;
            allQuestions = [];
            episodes.forEach((ep, epIdx) => {
                ep.questions.forEach((q, qIdx) => {
                    allQuestions.push({
                        ...q,
                        episodeName: ep.name,
                        episodeIndex: epIdx,
                        questionIndex: qIdx
                    });
                });
            });
            nextQuestion();
        })
        .catch(error => {
            document.getElementById('question-text').textContent = 'Failed to load questions.';
            console.error('Failed to load episodes:', error);
        });
}

function nextQuestion() {
    document.getElementById('answer-text').style.display = 'none';
    if (allQuestions.length === 0) {
        document.getElementById('question-text').textContent = 'No questions available.';
        document.getElementById('question-image').style.display = 'none';
        return;
    }
    currentQuestion = allQuestions[Math.floor(Math.random() * allQuestions.length)];
    document.getElementById('question-title').textContent =
        `${currentQuestion.episodeName} - שאלה ${currentQuestion.questionIndex + 1}`;
    document.getElementById('question-text').textContent = currentQuestion.question;

    // Handle images
    const imgContainer = document.getElementById('question-img-container');
    imgContainer.innerHTML = '';
    const imgSrc = currentQuestion.imgSrc || currentQuestion.image;
    if (Array.isArray(imgSrc)) {
        imgSrc.forEach((src, idx) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = `שאלה ${currentQuestion.questionIndex + 1} תמונה ${idx + 1}`;
            img.loading = 'lazy';
            img.classList.add('question-img');
            img.addEventListener('click', function() {
                img.classList.toggle('zoomed');
            });
            imgContainer.appendChild(img);
        });
    } else if (imgSrc) {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = `שאלה ${currentQuestion.questionIndex + 1}`;
        img.loading = 'lazy';
        img.classList.add('question-img');
        img.addEventListener('click', function() {
            img.classList.toggle('zoomed');
        });
        imgContainer.appendChild(img);
    }

    // Handle answer (show only when requested)
    const answerDiv = document.getElementById('answer-text');
    answerDiv.innerHTML = ''; // Always clear previous
    const showAnswerBtn = document.getElementById('show-answer-btn');
    showAnswerBtn.textContent = 'הצג תשובה';

    function createAnswerNode(answer) {
        if (!answer) return document.createTextNode('');
        if (typeof answer === 'string') {
            return document.createTextNode(answer);
        }
        if (typeof answer === 'object') {
            // Image answer
            if (answer.img) {
                const ansImg = document.createElement('img');
                ansImg.src = answer.img;
                ansImg.alt = 'תשובה';
                ansImg.className = 'answer-img';
                ansImg.style.cursor = 'zoom-in';
                ansImg.addEventListener('click', function() {
                    ansImg.classList.toggle('zoomed');
                    // Optionally: show overlay logic here
                });
                return ansImg;
            }
            // Array answer
            if (Array.isArray(answer)) {
                const wrapper = document.createElement('div');
                answer.forEach(item => wrapper.appendChild(createAnswerNode(item)));
                return wrapper;
            }
            // Other object: pretty print
            return document.createTextNode(JSON.stringify(answer, null, 2));
        }
        return document.createTextNode(String(answer));
    }
    answerDiv.appendChild(createAnswerNode(currentQuestion.answer));

    resetTimer();
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 45;
    frozen = false;
    document.getElementById('timer').textContent = timeLeft;
    document.getElementById('freeze-btn').disabled = false;
    timer = setInterval(() => {
        if (!frozen) {
            timeLeft--;
            document.getElementById('timer').textContent = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(timer);
                document.getElementById('timer').textContent = 'Time\'s up!';
            }
        }
    }, 1000);
}

document.getElementById('freeze-btn').addEventListener('click', () => {
    frozen = true;
    document.getElementById('freeze-btn').disabled = true;
});

const showAnswerBtn = document.getElementById('show-answer-btn');
const answerDiv = document.getElementById('answer-text');

showAnswerBtn.textContent = 'הצג תשובה'; // Set initial text
showAnswerBtn.addEventListener('click', function() {
    const isShown = answerDiv.style.display === 'block';
    answerDiv.style.display = isShown ? 'none' : 'block';
    showAnswerBtn.textContent = isShown ? 'הצג תשובה' : 'הסתר תשובה';
});

document.getElementById('next-question-btn').addEventListener('click', () => {
    nextQuestion();
});

window.onload = loadEpisodes;