// 🎯 QUIZUPNOW! — Final Optimized Version (with Randomization & Sound Fix)

//  SOUND SETUP
const soundClick = document.getElementById("sound-click");
const soundCorrect = document.getElementById("sound-correct");
const soundWrong = document.getElementById("sound-wrong");
const soundFinish = document.getElementById("sound-finish");

//  SECTIONS
const homeScreen = document.getElementById("home-screen");
const selectionDashboard = document.getElementById("selection-dashboard");
const quizArea = document.getElementById("quiz-area");
const resultsScreen = document.getElementById("results-screen");
const reviewScreen = document.getElementById("review-screen");

//  BUTTONS
const startBtn = document.getElementById("start-btn");
const goBtn = document.getElementById("go-btn");
const backToHomeBtn = document.getElementById("back-to-home-btn");
const reviewBtn = document.getElementById("review-btn");
const restartBtn = document.getElementById("restart-btn");
const backToResultsBtn = document.getElementById("back-to-results-btn");

//  QUIZ ELEMENTS
const categorySelect = document.getElementById("category-select");
const difficultySelect = document.getElementById("difficulty-select");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const progressBar = document.getElementById("progress-bar");

//  VARIABLES
let filteredQuizData = [];
let currentQuestionIndex = 0;
let score = 0;
let mistakes = [];

//  FUNCTION TO GET RANDOM QUESTIONS BASED ON TOPIC & DIFFICULTY
function getRandomQuestions(topic, difficulty) {
  const filtered = ALL_QUIZ_DATA.filter(
    q => q.topic === topic && q.difficulty === difficulty
  );
  if (filtered.length === 0) return [];

  // Shuffle and take first 5
  return filtered.sort(() => Math.random() - 0.5).slice(0, 5);
}


//  FUNCTION TO PLAY SOUND
function playSound(sound) {
  if (sound && typeof sound.play === "function") {
    sound.currentTime = 0;
    sound.play().catch(() => {}); // prevent autoplay errors
  }
}

// START BUTTON → DASHBOARD
startBtn.addEventListener("click", () => {
  playSound(soundClick);
  homeScreen.classList.add("hidden");
  selectionDashboard.classList.remove("hidden");
});



// GO BUTTON → START QUIZ
goBtn.addEventListener("click", () => {
  playSound(soundClick);
  const topic = categorySelect.value;
  const difficulty = difficultySelect.value;

  filteredQuizData = getRandomQuestions(topic, difficulty);

  if (filteredQuizData.length === 0) {
    alert("No questions found for this selection!");
    return;
  }

  selectionDashboard.classList.add("hidden");
  quizArea.classList.remove("hidden");

  currentQuestionIndex = 0;
  score = 0;
  mistakes = [];
  progressBar.style.width = "0%";

  loadQuestion();
});

// LOAD QUESTION
function loadQuestion() {
  const q = filteredQuizData[currentQuestionIndex];
  questionText.textContent = `Q${currentQuestionIndex + 1}. ${q.question}`;
  optionsContainer.innerHTML = "";

  q.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.classList.add("option-btn");
    btn.textContent = option;
const correct = q.answer; // snapshot the correct answer for this question
btn.addEventListener("click", () => checkAnswer(btn, correct));
    optionsContainer.appendChild(btn);
  });


 progressBar.style.width = `${((currentQuestionIndex + 1) / filteredQuizData.length) * 100}%`;

}

// CHECK ANSWER
function checkAnswer(selectedBtn, correctAnswer) {
  const selectedAnswer = selectedBtn.textContent?.trim() || "Not selected";

  // Ensure correctAnswer is valid
  if (!correctAnswer) {
    console.warn("⚠️ Missing correct answer for question:", filteredQuizData[currentQuestionIndex]);
    correctAnswer = filteredQuizData[currentQuestionIndex].answer || "N/A";
  }

  if (selectedAnswer === correctAnswer) {
    selectedBtn.classList.add("correct");
    playSound(soundCorrect);
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
    playSound(soundWrong);
    mistakes.push({
      question: `Q${currentQuestionIndex + 1}. ${filteredQuizData[currentQuestionIndex].question}`,
      yourAnswer: selectedAnswer,
      correctAnswer: correctAnswer,
    });
  }

  document.querySelectorAll(".option-btn").forEach((btn) => (btn.disabled = true));

  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < filteredQuizData.length) loadQuestion();
    else showResults();
  }, 1200);
}

//  SHOW RESULTS
function showResults() {
  quizArea.classList.add("hidden");
  resultsScreen.classList.remove("hidden");

  playSound(soundFinish);
  triggerCelebration();

  const finalScore = document.getElementById("final-score");
  const totalQuestions = document.getElementById("total-questions");
  const feedbackMsg = document.getElementById("feedback-message");

  finalScore.textContent = score;
  totalQuestions.textContent = filteredQuizData.length;

  const percent = (score / filteredQuizData.length) * 100;
  let feedback = "";

  if (percent === 100) feedback = "🎯 Perfect score! You nailed it!";
  else if (percent >= 80) feedback = "💪 Excellent! Great job!";
  else if (percent >= 50) feedback = "👍 Good effort! Keep practicing.";
  else feedback = "📚 Don’t worry! Try again and you’ll improve.";

  feedbackMsg.textContent = feedback;

  reviewBtn.style.display = mistakes.length > 0 ? "block" : "none";
}

// REVIEW MISTAKES
reviewBtn.addEventListener("click", () => {
  playSound(soundClick);
  resultsScreen.classList.add("hidden");
  reviewScreen.classList.remove("hidden");

  const list = document.getElementById("mistake-list");
  list.innerHTML = "";

  mistakes.forEach((m) => {
    const div = document.createElement("div");
    div.classList.add("mistake-item");
    div.innerHTML = `
  <p><strong>${m.question}</strong></p>
  <p><strong>Your Answer:</strong> ${m.yourAnswer}</p>
  <p><strong>Correct Answer:</strong> ${m.correctAnswer}</p>
`;
    list.appendChild(div);
  });
});

// BACK TO RESULTS
backToResultsBtn.addEventListener("click", () => {
  playSound(soundClick);
  reviewScreen.classList.add("hidden");
  resultsScreen.classList.remove("hidden");
});

// RESTART QUIZ
restartBtn.addEventListener("click", () => {
  playSound(soundClick);
  resultsScreen.classList.add("hidden");
  homeScreen.classList.remove("hidden");
  document.querySelectorAll(".emoji").forEach((e) => e.remove());
});

// BACK TO HOME FROM DASHBOARD
backToHomeBtn.addEventListener("click", () => {
  playSound(soundClick);
  selectionDashboard.classList.add("hidden");
  homeScreen.classList.remove("hidden");
});

// CELEBRATION ANIMATION 🎉
function triggerCelebration() {
  const emojis = ["🎉", "🥳", "🎊", "✨", "🌟"];
  for (let i = 0; i < 20; i++) {
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.textContent =
      emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = `${Math.random() * 100}vw`;
    emoji.style.animationDelay = `${Math.random()}s`;
    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 3000);
  }
}
