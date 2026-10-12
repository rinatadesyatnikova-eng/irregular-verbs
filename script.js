// ==============================
// ELEMENTS
// ==============================

const startScreen = document.querySelector(".start-screen");
const setupScreen = document.getElementById("setupScreen");

const startButton = document.getElementById("startButton");
const backToStart = document.getElementById("backToStart");

const setButtons = document.querySelectorAll("[data-set]");
const modeButtons = document.querySelectorAll("[data-mode]");

const sessionSummary = document.getElementById("sessionSummary");

const verbPicker = document.getElementById("verbPicker");
const verbList = document.getElementById("verbList");

const verbSearch = document.getElementById("verbSearch");

const selectedCount = document.getElementById("selectedCount");

const selectAllButton =
    document.getElementById("selectAllButton");

const clearButton =
    document.getElementById("clearButton");
    const trainingScreen =
    document.getElementById("trainingScreen");

const continueButton =
    document.getElementById("continueButton");

const exitTraining =
    document.getElementById("exitTraining");

const trainingModeLabel =
    document.getElementById("trainingModeLabel");

const questionCounter =
    document.getElementById("questionCounter");

const progressFill =
    document.getElementById("progressFill");

const questionLabel =
    document.getElementById("questionLabel");

const verbQuestion =
    document.getElementById("verbQuestion");

const answerArea =
    document.getElementById("answerArea");

const checkButton =
    document.getElementById("checkButton");

const feedback =
    document.getElementById("feedback");

const feedbackMark =
    document.getElementById("feedbackMark");

const feedbackTitle =
    document.getElementById("feedbackTitle");

const feedbackText =
    document.getElementById("feedbackText");
    const resultsScreen =
    document.getElementById("resultsScreen");

const resultsTitle =
    document.getElementById("resultsTitle");

const resultsScore =
    document.getElementById("resultsScore");

const resultsFraction =
    document.getElementById("resultsFraction");

const perfectResult =
    document.getElementById("perfectResult");

const mistakesResult =
    document.getElementById("mistakesResult");

const mistakesCount =
    document.getElementById("mistakesCount");

const mistakesList =
    document.getElementById("mistakesList");

const retryMistakesButton =
    document.getElementById("retryMistakesButton");

const newSessionButton =
    document.getElementById("newSessionButton");

const resultMode =
    document.getElementById("resultMode");
    const amountBlock =
    document.getElementById("amountBlock");

const amountButtons =
    document.querySelectorAll("[data-amount]");
// ==============================
// SESSION SETTINGS
// ==============================

let selectedSet = "all";
let selectedMode = "v2";
let selectedAmount = 10;
let appMode = "practice";

// ==============================
// VERB BANK
// ==============================

const verbs = [

    { v1: "arise", v2: "arose", v3: "arisen" },
    { v1: "awake", v2: "awoke", v3: "awoken" },

    { v1: "be", v2: "was / were", v3: "been" },
    { v1: "bear", v2: "bore", v3: "borne / born" },
    { v1: "beat", v2: "beat", v3: "beaten" },
    { v1: "become", v2: "became", v3: "become" },
    { v1: "begin", v2: "began", v3: "begun" },
    { v1: "bend", v2: "bent", v3: "bent" },
    { v1: "bet", v2: "bet", v3: "bet" },
    { v1: "bind", v2: "bound", v3: "bound" },
    { v1: "bite", v2: "bit", v3: "bitten" },
    { v1: "bleed", v2: "bled", v3: "bled" },
    { v1: "blow", v2: "blew", v3: "blown" },
    { v1: "break", v2: "broke", v3: "broken" },
    { v1: "breed", v2: "bred", v3: "bred" },
    { v1: "bring", v2: "brought", v3: "brought" },
    { v1: "broadcast", v2: "broadcast", v3: "broadcast" },
    { v1: "build", v2: "built", v3: "built" },
    { v1: "burn", v2: "burnt / burned", v3: "burnt / burned" },
    { v1: "burst", v2: "burst", v3: "burst" },
    { v1: "buy", v2: "bought", v3: "bought" },

    { v1: "catch", v2: "caught", v3: "caught" },
    { v1: "choose", v2: "chose", v3: "chosen" },
    { v1: "come", v2: "came", v3: "come" },
    { v1: "cost", v2: "cost", v3: "cost" },
    { v1: "creep", v2: "crept", v3: "crept" },
    { v1: "cut", v2: "cut", v3: "cut" },

    { v1: "deal", v2: "dealt", v3: "dealt" },
    { v1: "dig", v2: "dug", v3: "dug" },
    { v1: "do", v2: "did", v3: "done" },
    { v1: "draw", v2: "drew", v3: "drawn" },
    { v1: "dream", v2: "dreamt / dreamed", v3: "dreamt / dreamed" },
    { v1: "drink", v2: "drank", v3: "drunk" },
    { v1: "drive", v2: "drove", v3: "driven" },

    { v1: "eat", v2: "ate", v3: "eaten" },

    { v1: "fall", v2: "fell", v3: "fallen" },
    { v1: "feed", v2: "fed", v3: "fed" },
    { v1: "feel", v2: "felt", v3: "felt" },
    { v1: "fight", v2: "fought", v3: "fought" },
    { v1: "find", v2: "found", v3: "found" },
    { v1: "flee", v2: "fled", v3: "fled" },
    { v1: "fly", v2: "flew", v3: "flown" },
    { v1: "forbid", v2: "forbade", v3: "forbidden" },
    { v1: "forget", v2: "forgot", v3: "forgotten" },
    { v1: "forgive", v2: "forgave", v3: "forgiven" },
    { v1: "freeze", v2: "froze", v3: "frozen" },

    { v1: "get", v2: "got", v3: "got" },
    { v1: "give", v2: "gave", v3: "given" },
    { v1: "go", v2: "went", v3: "gone" },
    { v1: "grow", v2: "grew", v3: "grown" },

    { v1: "hang", v2: "hung", v3: "hung" },
    { v1: "have", v2: "had", v3: "had" },
    { v1: "hear", v2: "heard", v3: "heard" },
    { v1: "hide", v2: "hid", v3: "hidden" },
    { v1: "hit", v2: "hit", v3: "hit" },
    { v1: "hold", v2: "held", v3: "held" },
    { v1: "hurt", v2: "hurt", v3: "hurt" },

    { v1: "keep", v2: "kept", v3: "kept" },
    { v1: "kneel", v2: "knelt / kneeled", v3: "knelt / kneeled" },
    { v1: "know", v2: "knew", v3: "known" },

    { v1: "lay", v2: "laid", v3: "laid" },
    { v1: "lead", v2: "led", v3: "led" },
    { v1: "lean", v2: "leant / leaned", v3: "leant / leaned" },
    { v1: "leap", v2: "leapt / leaped", v3: "leapt / leaped" },
    { v1: "learn", v2: "learnt / learned", v3: "learnt / learned" },
    { v1: "leave", v2: "left", v3: "left" },
    { v1: "lend", v2: "lent", v3: "lent" },
    { v1: "let", v2: "let", v3: "let" },
    { v1: "lie", v2: "lay", v3: "lain" },
    { v1: "light", v2: "lit / lighted", v3: "lit / lighted" },
    { v1: "lose", v2: "lost", v3: "lost" },

    { v1: "make", v2: "made", v3: "made" },
    { v1: "mean", v2: "meant", v3: "meant" },
    { v1: "meet", v2: "met", v3: "met" },

    { v1: "pay", v2: "paid", v3: "paid" },
    { v1: "prove", v2: "proved", v3: "proved / proven" },
    { v1: "put", v2: "put", v3: "put" },

    { v1: "quit", v2: "quit", v3: "quit" },

    { v1: "read", v2: "read", v3: "read" },
    { v1: "ride", v2: "rode", v3: "ridden" },
    { v1: "ring", v2: "rang", v3: "rung" },
    { v1: "rise", v2: "rose", v3: "risen" },
    { v1: "run", v2: "ran", v3: "run" },

    { v1: "say", v2: "said", v3: "said" },
    { v1: "see", v2: "saw", v3: "seen" },
    { v1: "seek", v2: "sought", v3: "sought" },
    { v1: "sell", v2: "sold", v3: "sold" },
    { v1: "send", v2: "sent", v3: "sent" },
    { v1: "set", v2: "set", v3: "set" },
    { v1: "sew", v2: "sewed", v3: "sewn / sewed" },
    { v1: "shake", v2: "shook", v3: "shaken" },
    { v1: "shine", v2: "shone", v3: "shone" },
    { v1: "shoot", v2: "shot", v3: "shot" },
    { v1: "show", v2: "showed", v3: "shown" },
    { v1: "shrink", v2: "shrank", v3: "shrunk" },
    { v1: "shut", v2: "shut", v3: "shut" },
    { v1: "sing", v2: "sang", v3: "sung" },
    { v1: "sink", v2: "sank", v3: "sunk" },
    { v1: "sit", v2: "sat", v3: "sat" },
    { v1: "sleep", v2: "slept", v3: "slept" },
    { v1: "slide", v2: "slid", v3: "slid" },
    { v1: "smell", v2: "smelt / smelled", v3: "smelt / smelled" },
    { v1: "sow", v2: "sowed", v3: "sown / sowed" },
    { v1: "speak", v2: "spoke", v3: "spoken" },
    { v1: "speed", v2: "sped", v3: "sped" },
    { v1: "spell", v2: "spelt / spelled", v3: "spelt / spelled" },
    { v1: "spend", v2: "spent", v3: "spent" },
    { v1: "spill", v2: "spilt / spilled", v3: "spilt / spilled" },
    { v1: "spin", v2: "spun", v3: "spun" },
    { v1: "spit", v2: "spat", v3: "spat" },
    { v1: "split", v2: "split", v3: "split" },
    { v1: "spoil", v2: "spoilt / spoiled", v3: "spoilt / spoiled" },
    { v1: "spread", v2: "spread", v3: "spread" },
    { v1: "spring", v2: "sprang", v3: "sprung" },
    { v1: "stand", v2: "stood", v3: "stood" },
    { v1: "steal", v2: "stole", v3: "stolen" },
    { v1: "stick", v2: "stuck", v3: "stuck" },
    { v1: "sting", v2: "stung", v3: "stung" },
    { v1: "stink", v2: "stank", v3: "stunk" },
    { v1: "strike", v2: "struck", v3: "struck" },
    { v1: "swear", v2: "swore", v3: "sworn" },
    { v1: "sweep", v2: "swept", v3: "swept" },
    { v1: "swim", v2: "swam", v3: "swum" },
    { v1: "swing", v2: "swung", v3: "swung" },

    { v1: "take", v2: "took", v3: "taken" },
    { v1: "teach", v2: "taught", v3: "taught" },
    { v1: "tear", v2: "tore", v3: "torn" },
    { v1: "tell", v2: "told", v3: "told" },
    { v1: "think", v2: "thought", v3: "thought" },
    { v1: "throw", v2: "threw", v3: "thrown" },

    { v1: "understand", v2: "understood", v3: "understood" },

    { v1: "wake", v2: "woke", v3: "woken" },
    { v1: "wear", v2: "wore", v3: "worn" },
    { v1: "weep", v2: "wept", v3: "wept" },
    { v1: "win", v2: "won", v3: "won" },
    { v1: "wind", v2: "wound", v3: "wound" },
    { v1: "write", v2: "wrote", v3: "written" }

];

let selectedVerbs = [];

// ==============================
// TRAINING SESSION
// ==============================

let sessionVerbs = [];
let currentQuestion = 0;

let currentVerb = null;
let currentTask = null;

let answerChecked = false;
let sessionResults = [];
// ==============================
// START TRAINING
// ==============================

continueButton.addEventListener("click", async () => {

    if (
        selectedSet === "custom" &&
        selectedVerbs.length === 0
    ) {
        alert("Choose at least one verb.");
        return;
    }


    if (selectedSet === "custom") {

        sessionVerbs = verbs.filter(verb =>
            selectedVerbs.includes(verb.v1)
        );

    } else {

        sessionVerbs = [...verbs];

    }


    // Random order
    sessionVerbs.sort(() => Math.random() - 0.5);
// Limit session size for ALL VERBS

if (
    selectedSet === "all" &&
    selectedAmount !== "all"
) {
    sessionVerbs =
        sessionVerbs.slice(0, selectedAmount);
}

    currentQuestion = 0;
    sessionResults = [];

    setupScreen.classList.add("hidden");
    trainingScreen.classList.remove("hidden");


    showQuestion();

});
// ==============================
// SHOW QUESTION
// ==============================

function showQuestion() {

    answerChecked = false;

    feedback.classList.add("hidden");
    feedback.classList.remove("wrong");

    checkButton.innerHTML =
        `CHECK <span>→</span>`;


    currentVerb =
        sessionVerbs[currentQuestion % sessionVerbs.length];


    // Decide task
    if (selectedMode === "mixed") {

        const mixedModes = ["v2", "v3", "both"];

        currentTask =
            mixedModes[
                Math.floor(Math.random() * mixedModes.length)
            ];

    } else {

        currentTask = selectedMode;

    }


    verbQuestion.textContent =
        currentVerb.v1;


    createAnswerFields();


    const total = sessionVerbs.length;

    questionCounter.textContent =
        `${String(currentQuestion + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;


    progressFill.style.width =
        `${((currentQuestion + 1) / total) * 100}%`;


    updateTrainingLabels();


    const firstInput =
        answerArea.querySelector(".answer-input");

    if (firstInput) {
        firstInput.focus();
    }

}
// ==============================
// ANSWER FIELDS
// ==============================

function createAnswerFields() {

    answerArea.innerHTML = "";


    if (currentTask === "v2") {

        questionLabel.textContent =
            "GIVE THE PAST SIMPLE FORM";

        createInput("V2", "v2Answer");

    }


    if (currentTask === "v3") {

        questionLabel.textContent =
            "GIVE THE PAST PARTICIPLE";

        createInput("V3", "v3Answer");

    }


    if (currentTask === "both") {

        questionLabel.textContent =
            "COMPLETE THE VERB FORMS";

        createInput("V2", "v2Answer");
        createInput("V3", "v3Answer");

    }

}


function createInput(label, id) {

    const wrapper =
        document.createElement("div");

    wrapper.classList.add("answer-field");


    const fieldLabel =
        document.createElement("label");

    fieldLabel.textContent = label;


    const input =
        document.createElement("input");

    input.type = "text";
    input.id = id;

    input.classList.add("answer-input");

    input.placeholder = "Type your answer...";
    input.autocomplete = "off";


    input.addEventListener("keydown", event => {

        if (event.key === "Enter") {

            handleCheck();

        }

    });


    wrapper.appendChild(fieldLabel);
    wrapper.appendChild(input);

    answerArea.appendChild(wrapper);

}
// ==============================
// CHECK ANSWER
// ==============================

checkButton.addEventListener("click", handleCheck);


function handleCheck() {

    if (answerChecked) {
        nextQuestion();
        return;
    }


    const inputs =
        answerArea.querySelectorAll(".answer-input");


    let allCorrect = true;

    const answers = [];


    inputs.forEach(input => {

        const property =
            input.id === "v2Answer"
                ? "v2"
                : "v3";


        const correctAnswer =
            currentVerb[property];


        const userAnswer =
            normalizeAnswer(input.value);


        const acceptedAnswers =
            correctAnswer
                .split("/")
                .map(answer =>
                    normalizeAnswer(answer)
                );


        const isCorrect =
            acceptedAnswers.includes(userAnswer);


        if (isCorrect) {

            input.classList.add("correct");

        } else {

            input.classList.add("wrong");
            allCorrect = false;

        }


        answers.push({
            form: property.toUpperCase(),
            userAnswer: input.value.trim(),
            correctAnswer: correctAnswer,
            correct: isCorrect
        });


        input.disabled = true;

    });


    sessionResults.push({

        verb: currentVerb,
        task: currentTask,
        correct: allCorrect,
        answers: answers

    });


    answerChecked = true;

    showFeedback(allCorrect);


    checkButton.innerHTML =
        `NEXT <span>→</span>`;

}
function normalizeAnswer(answer) {

    return answer
        .trim()
        .toLowerCase();

}
// ==============================
// FEEDBACK
// ==============================

function showFeedback(correct) {

    feedback.classList.remove("hidden");


    if (correct) {

        feedback.classList.remove("wrong");

        feedbackMark.textContent = "✓";

        feedbackTitle.textContent = "NICE.";

        feedbackText.textContent =
            `${currentVerb.v1} · ${currentVerb.v2} · ${currentVerb.v3}`;

    } else {

        feedback.classList.add("wrong");

        feedbackMark.textContent = "×";

        feedbackTitle.textContent = "NOT QUITE.";

        feedbackText.textContent =
            `${currentVerb.v1} · ${currentVerb.v2} · ${currentVerb.v3}`;

    }

}
// ==============================
// NEXT QUESTION
// ==============================

function nextQuestion() {

    currentQuestion++;


    if (currentQuestion >= sessionVerbs.length) {

        showResults();
        return;

    }


    showQuestion();

}
// ==============================
// RESULTS
// ==============================

function showResults() {
    renderResults();
}

function renderResults() {

    trainingScreen.classList.add("hidden");
    resultsScreen.classList.remove("hidden");


    const total =
        sessionResults.length;


    const correct =
        sessionResults.filter(
            result => result.correct
        ).length;


    const mistakes =
        sessionResults.filter(
            result => !result.correct
        );


    const percentage =
        Math.round((correct / total) * 100);


    resultsScore.textContent =
        `${percentage}%`;


    resultsFraction.textContent =
        `${correct} / ${total} CORRECT`;


    const labels = {
        v2: "V1 → V2",
        v3: "V1 → V3",
        both: "V1 → V2 + V3",
        mixed: "MIXED"
    };


    resultMode.textContent =
        labels[selectedMode];


    // PERFECT

    if (mistakes.length === 0) {

        resultsTitle.textContent =
            "PERFECT.";

        perfectResult.classList.remove("hidden");

        mistakesResult.classList.add("hidden");

        retryMistakesButton.classList.add("hidden");

    }

    // HAS MISTAKES

    else {

        resultsTitle.textContent =
            "KEEP GOING.";

        perfectResult.classList.add("hidden");

        mistakesResult.classList.remove("hidden");

        retryMistakesButton.classList.remove("hidden");


        mistakesCount.textContent =
            mistakes.length === 1
                ? "1 VERB"
                : `${mistakes.length} VERBS`;


        renderMistakes(mistakes);

    }

}
function renderMistakes(mistakes) {

    mistakesList.innerHTML = "";


    mistakes.forEach(result => {

        const row =
            document.createElement("div");

        row.classList.add("mistake-row");


        const wrongAnswers =
            result.answers
                .filter(answer => !answer.correct)
                .map(answer =>
                    `${answer.form}: ${answer.userAnswer || "—"}`
                )
                .join(" · ");


        const correctAnswers =
            result.answers
                .filter(answer => !answer.correct)
                .map(answer =>
                    `${answer.form}: ${answer.correctAnswer}`
                )
                .join(" · ");


        const name = document.createElement("strong");
        name.textContent = result.verb.v1;
        const wrong = document.createElement("span");
        wrong.textContent = wrongAnswers;
        const correct = document.createElement("span");
        correct.classList.add("mistake-correct");
        correct.textContent = correctAnswers;
        row.appendChild(name); row.appendChild(wrong); row.appendChild(correct);

        mistakesList.appendChild(row);

    });

}
newSessionButton.addEventListener("click", () => {

    resultsScreen.classList.add("hidden");
    setupScreen.classList.remove("hidden");

});
retryMistakesButton.addEventListener("click", () => {

    const mistakeVerbs =
        sessionResults
            .filter(result => !result.correct)
            .map(result => result.verb);


    sessionVerbs = [...mistakeVerbs];

    sessionResults = [];

    currentQuestion = 0;


    resultsScreen.classList.add("hidden");
    trainingScreen.classList.remove("hidden");


    showQuestion();

});
// ==============================
// EXIT TRAINING
// ==============================

exitTraining.addEventListener("click", () => {

    trainingScreen.classList.add("hidden");
    setupScreen.classList.remove("hidden");

});
function updateTrainingLabels() {

    const labels = {

        v2: "V1 → V2",
        v3: "V1 → V3",
        both: "V1 → V2 + V3",
        mixed: "MIXED"

    };


    trainingModeLabel.textContent =
        `IRREGULAR VERBS · ${labels[selectedMode]}`;

}

// ==============================
// NAVIGATION
// ==============================

startButton.addEventListener("click", () => {

    appMode = "practice";

    continueButton.innerHTML =
        `CONTINUE <span>→</span>`;

    startScreen.classList.add("hidden");
    setupScreen.classList.remove("hidden");

});


backToStart.addEventListener("click", () => {
    setupScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
});
// ==============================
// SET SELECTION
// ==============================

setButtons.forEach(button => {

    button.addEventListener("click", () => {

        setButtons.forEach(btn =>
            btn.classList.remove("selected")
        );

        button.classList.add("selected");

        selectedSet = button.dataset.set;


        if (selectedSet === "custom") {

    verbPicker.classList.remove("hidden");
    amountBlock.classList.add("hidden");

    renderVerbs();

} else {

    verbPicker.classList.add("hidden");
    amountBlock.classList.remove("hidden");

}


        updateSummary();

    });

});


// ==============================
// MODE SELECTION
// ==============================

modeButtons.forEach(button => {

    button.addEventListener("click", () => {

        modeButtons.forEach(btn =>
            btn.classList.remove("selected")
        );

        button.classList.add("selected");

        selectedMode = button.dataset.mode;

        updateSummary();

    });

});

// ==============================
// SESSION SIZE
// ==============================

amountButtons.forEach(button => {

    button.addEventListener("click", () => {

        amountButtons.forEach(btn =>
            btn.classList.remove("selected")
        );

        button.classList.add("selected");

        selectedAmount =
            button.dataset.amount === "all"
                ? "all"
                : Number(button.dataset.amount);

        updateSummary();

    });

});

// ==============================
// VERB PICKER
// ==============================

function renderVerbs(search = "") {

    verbList.innerHTML = "";

    const filteredVerbs = verbs.filter(verb =>
        verb.v1.toLowerCase().includes(search.toLowerCase())
    );


    filteredVerbs.forEach(verb => {

        const button = document.createElement("button");

        button.classList.add("verb-chip");

        button.textContent = verb.v1;

        button.dataset.verb = verb.v1;


        if (selectedVerbs.includes(verb.v1)) {
            button.classList.add("selected");
        }


        button.addEventListener("click", () => {

            toggleVerb(verb.v1);

        });


        verbList.appendChild(button);

    });

}


function toggleVerb(verb) {

    if (selectedVerbs.includes(verb)) {

        selectedVerbs =
            selectedVerbs.filter(item => item !== verb);

    } else {

        selectedVerbs.push(verb);

    }

    renderVerbs(verbSearch.value);

    updateSelectedCount();

}


function updateSelectedCount() {

    selectedCount.textContent = selectedVerbs.length;

}
// ==============================
// VERB PICKER CONTROLS
// ==============================

verbSearch.addEventListener("input", () => {

    renderVerbs(verbSearch.value);

});


selectAllButton.addEventListener("click", () => {

    selectedVerbs = verbs.map(verb => verb.v1);

    renderVerbs(verbSearch.value);

    updateSelectedCount();

});


clearButton.addEventListener("click", () => {

    selectedVerbs = [];

    renderVerbs(verbSearch.value);

    updateSelectedCount();

});

// ==============================
// SUMMARY
// ==============================

function updateSummary() {

    const setNames = {
        all: "ALL VERBS",
        custom: "MY SET"
    };

    const modeNames = {
        v2: "V1 → V2",
        v3: "V1 → V3",
        both: "V1 → V2 + V3",
        mixed: "MIXED"
    };

    sessionSummary.textContent =
        `${setNames[selectedSet]} · ${modeNames[selectedMode]}`;

}
// Teacher Mode is disabled. Old assignment links open ordinary practice.
if (new URLSearchParams(location.search).has("assignment") ||
    new URLSearchParams(location.hash.slice(1)).has("results")) {
    history.replaceState(null, "", location.pathname);
}
