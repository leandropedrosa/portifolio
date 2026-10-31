const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");
const ideaButton = document.querySelector("#idea-button");
const ideaOutput = document.querySelector("#idea-output");

const ideas = [
  "Crie uma página que apresente um lugar especial para você.",
  "Desenhe um botão tão interessante que dê vontade de clicar.",
  "Escolha três cores e transforme-as na identidade de um site.",
  "Que tal criar um cartão digital para alguém importante?",
  "Faça uma página que responda a uma pergunta curiosa.",
  "Imagine um site para resolver um pequeno problema do dia a dia."
];

let previousIdeaIndex = -1;

function closeMenu() {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  navLinks.classList.toggle("open", !isOpen);
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
});

navLinks.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    closeMenu();
    menuToggle.focus();
  }
});

ideaButton.addEventListener("click", () => {
  let nextIdeaIndex = Math.floor(Math.random() * ideas.length);

  if (ideas.length > 1) {
    while (nextIdeaIndex === previousIdeaIndex) {
      nextIdeaIndex = Math.floor(Math.random() * ideas.length);
    }
  }

  previousIdeaIndex = nextIdeaIndex;
  ideaOutput.textContent = ideas[nextIdeaIndex];
});
