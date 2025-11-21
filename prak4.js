const facts = [
  "Aphrodite adalah dewi cinta dan kecantikan yang dipercaya lahir dari buih laut.",
  "Hera adalah ratu para dewa dan pelindung pernikahan serta keluarga.",
  "Artemis adalah dewi perburuan yang dikenal selalu membawa busur peraknya.",
  "Athena adalah dewi kebijaksanaan dan strategi perang, lahir dari kepala Zeus.",
  "Demeter adalah dewi kesuburan dan panen yang mengendalikan musim.",
  "Cupid (Eros) adalah dewa cinta yang memanah seseorang agar jatuh cinta."
];

const factText = document.getElementById("fact-text");
const button = document.getElementById("fact-btn");

button.addEventListener("click", function() {
  factText.textContent = "Loading . . .";
  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[randomIndex];
    factText.textContent = randomFact;
  }, 700);
});
