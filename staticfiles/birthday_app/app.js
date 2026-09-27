const questions = [
    {
        q: "Do you know the FIRST thing I love the most? 👀",
        a: ["Food", "You", "Sleep", "My phone"],
        c: 1
    },
    {
        q: "Okay… and the SECOND thing I love the most? 🤭",
        a: ["Also you 😂", "Food", "My bed", "Your birthday"],
        c: 0
    },
    {
        q: "What do I feel naturally when I am around you?",
        a: ["Stressed and confused", "Relaxed, comfortable and protected", "Ready to run away", "Like I'm in an exam"],
        c: 1
    },
    {
        q: "What has become a little daily habit for me? 🥹",
        a: ["Missing you every day", "Ignoring your messages", "Forgetting your name 😂", "Counting traffic lights"],
        c: 0
    },
    {
        q: "Which combination sounds most like the birthday boy?",
        a: ["Calm + angry + cute + serious + quiet — all of you 😂", "Only loud and dramatic", "Only serious and quiet", "Only cute, never angry 😌"],
        c: 0
    },
    {
        q: "What tiny moment made me think 'yrrr, ye kitna pyara h'? 🥹",
        a: ["When you bought me flowers", "When you picked up the fallen cloth AND put a cloth pin on it", "When you won an argument", "When you stole my food"],
        c: 1
    },
    {
        q: "And finally… what am I trying to say with this whole website?",
        a: ["Happy birthday, I tolerate you", "Please buy me food", "I miss you daily, you are my happiest memories, and I LOVE YOU", "Nothing. Surprise! 😂"],
        c: 2
    }
];

const pickupLines = [
    "Are you Deepak? Because apparently my heart forgot how to act normal around you. 😌",
    "Baby, are you Wi‑Fi? Because my mood gets better the moment you're around. 📶❤️",
    "I was going to write a clever pickup line… then I remembered I already got the guy. 😏",
    "Are you a plot twist? Because I absolutely did NOT see us coming. 🌙",
    "Baby, you're dangerously good at turning my 'I'm angry' into 'okay fine, come here.' 😂",
    "If being this lovable was illegal, I'd be your accomplice. 🫡💗"
];

document.getElementById("startBtn").addEventListener("click", () => {
    document.getElementById("surprise").scrollIntoView({behavior:"smooth"});
});

document.querySelectorAll(".love-card").forEach(card => {
    card.addEventListener("click", () => {
        const box = document.getElementById("loveReveal");
        box.textContent = card.dataset.message;
        box.classList.remove("hidden");
    });
});

let current = 0;
let score = 0;

function renderQuestion() {
    const q = questions[current];
    document.getElementById("questionNumber").textContent = `Question ${current + 1}/${questions.length}`;
    document.getElementById("scoreText").textContent = `Score: ${score}`;
    document.getElementById("question").textContent = q.q;
    const answers = document.getElementById("answers");
    answers.innerHTML = "";
    q.a.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.className = "answer";
        btn.textContent = answer;
        btn.addEventListener("click", () => chooseAnswer(index, btn));
        answers.appendChild(btn);
    });
    document.getElementById("nextBtn").classList.add("hidden");
}

function chooseAnswer(index, btn) {
    const q = questions[current];
    document.querySelectorAll(".answer").forEach((b, i) => {
        b.disabled = true;
        if (i === q.c) b.classList.add("correct");
    });
    if (index === q.c) {
        score++;
    } else {
        btn.classList.add("wrong");
    }
    document.getElementById("scoreText").textContent = `Score: ${score}`;
    document.getElementById("nextBtn").classList.remove("hidden");
}

document.getElementById("nextBtn").addEventListener("click", () => {
    current++;
    if (current < questions.length) {
        renderQuestion();
    } else {
        document.getElementById("question").textContent = "Okay Baby… results are in. 👀";
        document.getElementById("answers").innerHTML = "";
        document.getElementById("nextBtn").classList.add("hidden");
        const result = document.getElementById("quizResult");
        result.classList.remove("hidden");
        result.innerHTML = `<h3>${score}/${questions.length} 💗</h3><p>${score === questions.length ? "PERFECT. You know me, you know us… and yes, I LOVE YOU. 🥹💗" : score >= 4 ? "Okayyy, you know your girlfriend pretty well. 😌❤️" : "Hmmmm… birthday boy needs another round of studying. 😂💗"}</p>`;
    }
});

renderQuestion();

let pickupIndex = 0;
document.getElementById("pickupBtn").addEventListener("click", () => {
    pickupIndex = (pickupIndex + 1) % pickupLines.length;
    document.getElementById("pickupLine").textContent = pickupLines[pickupIndex];
});

document.getElementById("celebrateBtn").addEventListener("click", () => {
    for (let i = 0; i < 90; i++) {
        const piece = document.createElement("div");
        piece.className = "confetti";
        piece.style.left = Math.random() * 100 + "vw";
        piece.style.setProperty("--x", (Math.random() * 240 - 120) + "px");
        piece.style.animationDelay = Math.random() * .8 + "s";
        piece.style.transform = `rotate(${Math.random() * 360}deg)`;
        piece.style.background = ["#ff6f91", "#ffd166", "#7bdff2", "#b8f2e6", "#cdb4db"][Math.floor(Math.random()*5)];
        document.body.appendChild(piece);
        setTimeout(() => piece.remove(), 4500);
    }
    const modal = document.getElementById("messageModal");
    document.getElementById("modalText").textContent = "HAPPY BIRTHDAY, MY BABY DEEPAK! 💗 Now go smile like the very cute, sometimes angry, sometimes serious, sometimes quiet human I fell for. And yes… you owe me a birthday hug. I LOVE YOU. 🥹💗";
    modal.classList.remove("hidden");
});

document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("messageModal").classList.add("hidden");
});
document.getElementById("messageModal").addEventListener("click", (e) => {
    if (e.target.id === "messageModal") e.currentTarget.classList.add("hidden");
});
