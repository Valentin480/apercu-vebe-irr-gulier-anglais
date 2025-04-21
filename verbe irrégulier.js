window.addEventListener("DOMContentLoaded", function () {
    // Variables globales
    let lives = 3;
    let score = 0;
    let currentQuestionIndex = 0;
    let streak = 0;
    let gameModes = [];
    let questionCount = 10;
    let questions = [ 
        { verb: "let", past: "let", participle: "let", translation: "laisser" },
        { verb: "set", past: "set", participle: "set", translation: "régler" },
        { verb: "cut", past: "cut", participle: "cut", translation: "couper" },
        { verb: "hurt", past: "hurt", participle: "hurt", translation: "faire mal" },
        { verb: "put", past: "put", participle: "put", translation: "mettre" },
        { verb: "shut", past: "shut", participle: "shut", translation: "fermer" },
        { verb: "burst", past: "burst", participle: "burst", translation: "éclater" },
        { verb: "hit", past: "hit", participle: "hit", translation: "frapper" },
        { verb: "cost", past: "cost", participle: "cost", translation: "coûter" },
        { verb: "spread", past: "spread", participle: "spread", translation: "étaler" },
        { verb: "read", past: "read", participle: "read", translation: "lire" },
        { verb: "begin", past: "began", participle: "begun", translation: "commencer" },
        { verb: "drink", past: "drank", participle: "drunk", translation: "boire" },
        { verb: "ring", past: "rang", participle: "rung", translation: "sonner" },
        { verb: "shrink", past: "shrank", participle: "shrunk", translation: "rétrécir" },
        { verb: "sing", past: "sang", participle: "sung", translation: "chanter" },
        { verb: "spring", past: "sprang", participle: "sprung", translation: "sauter" },
        { verb: "sink", past: "sank", participle: "sunk", translation: "couler" },
        { verb: "swim", past: "swam", participle: "swum", translation: "nager" },
        { verb: "build", past: "built", participle: "built", translation: "construire" },
        { verb: "lend", past: "lent", participle: "lent", translation: "prêter" },
        { verb: "send", past: "sent", participle: "sent", translation: "envoyer" },
        { verb: "spend", past: "spent", participle: "spent", translation: "dépenser" },
        { verb: "learn", past: "learnt", participle: "learnt", translation: "apprendre" },
        { verb: "burn", past: "burnt", participle: "burnt", translation: "brûler" },
        { verb: "buy", past: "bought", participle: "bought", translation: "acheter" },
        { verb: "bring", past: "brought", participle: "brought", translation: "apporter" },
        { verb: "fight", past: "fought", participle: "fought", translation: "se battre" },
        { verb: "seek", past: "sought", participle: "sought", translation: "chercher" },
        { verb: "think", past: "thought", participle: "thought", translation: "penser" },
        { verb: "catch", past: "caught", participle: "caught", translation: "attraper" },
        { verb: "teach", past: "taught", participle: "taught", translation: "enseigner" },
        { verb: "lay", past: "laid", participle: "laid", translation: "poser" },
        { verb: "pay", past: "paid", participle: "paid", translation: "payer" },
        { verb: "say", past: "said", participle: "said", translation: "dire" },
        { verb: "bleed", past: "bled", participle: "bled", translation: "saigner" },
        { verb: "creep", past: "crept", participle: "crept", translation: "ramper" },
        { verb: "feed", past: "fed", participle: "fed", translation: "nourrir" },
        { verb: "feel", past: "felt", participle: "felt", translation: "sentir" },
        { verb: "keep", past: "kept", participle: "kept", translation: "garder" },
        { verb: "kneel", past: "knelt", participle: "knelt", translation: "s'agenouiller" },
        { verb: "speed", past: "sped", participle: "sped", translation: "aller vite" },
        { verb: "meet", past: "met", participle: "met", translation: "rencontrer" },
        { verb: "sleep", past: "slept", participle: "slept", translation: "dormir" },
        { verb: "sweep", past: "swept", participle: "swept", translation: "balayer" },
        { verb: "weep", past: "wept", participle: "wept", translation: "pleurer" },
        { verb: "dream", past: "dreamt", participle: "dreamt", translation: "rêver" },
        { verb: "lean", past: "leant", participle: "leant", translation: "se pencher" },
        { verb: "mean", past: "meant", participle: "meant", translation: "signifier" },
        { verb: "lead", past: "led", participle: "led", translation: "mener" },
        { verb: "leave", past: "left", participle: "left", translation: "quitter" },
        { verb: "bear", past: "bore", participle: "borne", translation: "supporter" },
        { verb: "born", past: "born", participle: "born", translation: "mettre au monde" },
        { verb: "wear", past: "wore", participle: "worn", translation: "porter" },
        { verb: "tear", past: "tore", participle: "torn", translation: "déchirer" },
        { verb: "swear", past: "swore", participle: "sworn", translation: "jurer" },
        { verb: "beat", past: "beat", participle: "beaten", translation: "battre" },
        { verb: "eat", past: "ate", participle: "eaten", translation: "manger" },
        { verb: "drive", past: "drove", participle: "driven", translation: "conduire" },
        { verb: "ride", past: "rode", participle: "ridden", translation: "faire du cheval" },
        { verb: "rise", past: "rose", participle: "risen", translation: "s'élever" },
        { verb: "write", past: "wrote", participle: "written", translation: "écrire" },
        { verb: "hide", past: "hid", participle: "hidden", translation: "cacher" },
        { verb: "bite", past: "bit", participle: "bitten", translation: "mordre" },
        { verb: "take", past: "took", participle: "taken", translation: "prendre" },
        { verb: "shake", past: "shook", participle: "shaken", translation: "secouer" },
        { verb: "break", past: "broke", participle: "broken", translation: "casser" },
        { verb: "wake", past: "woke", participle: "woken", translation: "s'éveiller" },
        { verb: "freeze", past: "froze", participle: "frozen", translation: "geler" },
        { verb: "speak", past: "spoke", participle: "spoken", translation: "parler" },
        { verb: "steal", past: "stole", participle: "stolen", translation: "dérober" },
        { verb: "give", past: "gave", participle: "given", translation: "donner" },
        { verb: "forgive", past: "forgave", participle: "forgiven", translation: "pardonner" },
        { verb: "forbid", past: "forbade", participle: "forbidden", translation: "interdire" },
        { verb: "choose", past: "chose", participle: "chosen", translation: "choisir" },
        { verb: "fall", past: "fell", participle: "fallen", translation: "tomber" },
        { verb: "forget", past: "forgot", participle: "forgotten", translation: "oublier" },
        { verb: "be", past: "was/were", participle: "been", translation: "être" },
        { verb: "see", past: "saw", participle: "seen", translation: "voir" },
        { verb: "go", past: "went", participle: "gone", translation: "aller" },
        { verb: "undergo", past: "underwent", participle: "undergone", translation: "subir" },
        { verb: "do", past: "did", participle: "done", translation: "faire" },
        { verb: "lie", past: "lay", participle: "lain", translation: "s'allonger" },
        { verb: "spit", past: "spat", participle: "spat", translation: "cracher" },
        { verb: "dig", past: "dug", participle: "dug", translation: "creuser" },
        { verb: "hang", past: "hung", participle: "hung", translation: "suspendre" },
        { verb: "stick", past: "stuck", participle: "stuck", translation: "coller" },
        { verb: "sting", past: "stung", participle: "stung", translation: "piquer" },
        { verb: "swing", past: "swung", participle: "swung", translation: "se balancer" },
        { verb: "blow", past: "blew", participle: "blown", translation: "souffler" },
        { verb: "fly", past: "flew", participle: "flown", translation: "voler" },
        { verb: "grow", past: "grew", participle: "grown", translation: "grandir" },
        { verb: "know", past: "knew", participle: "known", translation: "savoir" },
        { verb: "throw", past: "threw", participle: "thrown", translation: "jeter" },
        { verb: "draw", past: "drew", participle: "drawn", translation: "dessiner" },
        { verb: "sew", past: "sewed", participle: "sewn", translation: "coudre" },
        { verb: "mow", past: "mowed", participle: "mown", translation: "tondre" },
        { verb: "show", past: "showed", participle: "shown", translation: "montrer" },
        { verb: "get", past: "got", participle: "got", translation: "obtenir" },
        { verb: "lose", past: "lost", participle: "lost", translation: "perdre" },
        { verb: "shoot", past: "shot", participle: "shot", translation: "tirer au fusil" },
        { verb: "deal", past: "dealt", participle: "dealt", translation: "distribuer, traiter un sujet" },
        { verb: "shine", past: "shone", participle: "shone", translation: "briller" },
        { verb: "have", past: "had", participle: "had", translation: "avoir" },
        { verb: "hear", past: "heard", participle: "heard", translation: "entendre" },
        { verb: "make", past: "made", participle: "made", translation: "faire" },
        { verb: "sow", past: "sowed", participle: "sown", translation: "semer" },
        { verb: "swear", past: "swore", participle: "sworn", translation: "jurer" },
        { verb: "win", past: "won", participle: "won", translation: "gagner" },
    ];

    let startTime;

    // UI helpers
    function toggleScreens(hideId, showId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove("active");
        });
        document.getElementById(showId).classList.add("active");
    }

    function updateLivesDisplay() {
        document.getElementById("lives-count").textContent = lives;
    }

    function resetProgressBar() {
        const progressBar = document.getElementById("progress-bar");
        if (progressBar) {
            progressBar.style.width = "0%";
        }
    }

    function updateProgressBar() {
        const progressBar = document.getElementById("progress-bar");
        if (progressBar) {
            const progress = Math.min((streak / questionCount) * 100, 100);
            progressBar.style.width = `${progress}%`;
        }
    }

    function showNextQuestion() {
        const questionEl = document.getElementById("question");
        const answerButtons = document.getElementById("answer-buttons");
        answerButtons.innerHTML = "";

        if (currentQuestionIndex >= questionCount || lives <= 0) {
            if (lives <= 0) {
                toggleScreens("game-container", "death-screen");
            } else {
                const endTime = Date.now();
                const timeTaken = Math.floor((endTime - startTime) / 1000);
                document.getElementById("victory-message").textContent = `Bravo ! Tu as terminé en ${timeTaken} secondes avec un score de ${score}/${questionCount}.`;
                toggleScreens("game-container", "victory-screen");
            }
            return;
        }

        const current = questions[currentQuestionIndex];
        let mode = gameModes[Math.floor(Math.random() * gameModes.length)];
        let questionText = "";
        let correctAnswer = "";

        if (mode === "translation") {
            questionText = `Que signifie : ${current.verb} ?`;
            correctAnswer = current.translation;
        } else if (mode === "base") {
            questionText = `Quelle est la base verbale de : ${current.past} ?`;
            correctAnswer = current.verb;
        } else if (mode === "past") {
            questionText = `Quel est le participe passé de : ${current.verb} ?`;
            correctAnswer = current.participle;
        }

        questionEl.textContent = questionText;

        const options = [correctAnswer];
        while (options.length < 4) {
            const random = questions[Math.floor(Math.random() * questions.length)];
            const wrongAnswer = mode === "translation" ? random.translation
                                : (mode === "base" ? random.verb : random.participle);
            if (!options.includes(wrongAnswer)) options.push(wrongAnswer);
        }

        options.sort(() => Math.random() - 0.5);

        options.forEach(option => {
            const btn = document.createElement("button");
            btn.textContent = option;
            btn.classList.add("answer-btn");
            btn.addEventListener("click", function () {
                if (option === correctAnswer) {
                    score++;
                    streak++;
                    updateProgressBar();
                } else {
                    lives--;
                    streak = 0;
                    resetProgressBar();
                }
                currentQuestionIndex++;
                updateLivesDisplay();
                showNextQuestion();
            });
            answerButtons.appendChild(btn);
        });
    }

    // Démarrage du jeu
    function startGame() {
        gameModes = [];
        if (document.getElementById("mode-translation").classList.contains("selected")) gameModes.push("translation");
        if (document.getElementById("mode-base").classList.contains("selected")) gameModes.push("base");
        if (document.getElementById("mode-past").classList.contains("selected")) gameModes.push("past");

        if (gameModes.length === 0) {
            alert("Sélectionne au moins un mode !");
            return;
        }

        questionCount = parseInt(document.getElementById("question-count").value);
        lives = 3;
        score = 0;
        streak = 0;
        currentQuestionIndex = 0;
        updateLivesDisplay();
        resetProgressBar();
        startTime = Date.now();
        toggleScreens("mode-select-screen", "game-container");
        showNextQuestion();
    }

    function restartGame() {
        location.reload();
    }

    // Event listeners
    document.getElementById("play-button").addEventListener("click", startGame);
    document.getElementById("restart-button").addEventListener("click", restartGame);
    document.getElementById("death-restart-button").addEventListener("click", restartGame);

    const victoryRestartButton = document.getElementById("victory-restart-button");
    if (victoryRestartButton) {
        victoryRestartButton.addEventListener("click", restartGame);
    } else {
        console.error("Le bouton 'victory-restart-button' est introuvable.");
    }

    document.querySelectorAll(".mode-button").forEach(button => {
        button.addEventListener("click", () => {
            button.classList.toggle("selected");
            if (button.classList.contains("selected")) {
                button.style.backgroundColor = "green";
            } else {
                button.style.backgroundColor = "#2196F3";
            }
        });
    });

    document.getElementById("question-count").addEventListener("input", function () {
        document.getElementById("question-count-display").textContent = this.value;
    });
});
