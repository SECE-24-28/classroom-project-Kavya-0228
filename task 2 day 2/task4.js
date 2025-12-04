const questions = [
  {
    text: "Which keyword declares a constant in JavaScript?",
    options: ["var", "let", "const", "static"],
    correctIndex: 2
  },
  {
    text: "Which method is used to log to the console?",
    options: ["print()", "log()", "console()", "console.log()"],
    correctIndex: 3
  },
  {
    text: "Which of these is NOT a JavaScript data type?",
    options: ["number", "string", "boolean", "character"],
    correctIndex: 3
  }
];

let currentIndex = 0;
let score = 0;

const qNumber = document.getElementById("questionNumber");
const qText = document.getElementById("questionText");
const optionsDiv = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const quizBox = document.getElementById("quizBox");

function loadQuestion() {
  nextBtn.disabled = true;
  const q = questions[currentIndex];

  qNumber.innerText = `Question ${currentIndex + 1} of ${questions.length}`;
  qText.innerText = q.text;

  optionsDiv.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerText = opt;

    btn.onclick = () => {
      nextBtn.disabled = false;

     
      if (i === q.correctIndex) {
        score++;
      }

      const all = optionsDiv.querySelectorAll("button");
      all.forEach((b) => b.classList.add("pointer-events-none"));

      btn.classList.add("bg-emerald-500");
    };

    optionsDiv.appendChild(btn);
  });
}

nextBtn.onclick = () => {
  currentIndex++;

  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    quizBox.innerHTML = `
      <h2 class="text-2xl font-bold text-center mb-4">Quiz Completed 🎉</h2>
      <p class="text-center text-xl">Your Score: 
        <span class="font-semibold">${score}</span> / ${questions.length}
      </p>
    `;
  }
};


loadQuestion();
