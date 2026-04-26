import { createGame } from "./game.js";
import { THRESHOLDS } from "./data.js";

const game = createGame();

const moodEl = document.querySelector("#moodValue");
const glowEl = document.querySelector("#glowValue");
const visitorNameEl = document.querySelector("#visitorName");
const storyEl = document.querySelector("#storyText");
const hintEl = document.querySelector("#statusHint");
const resetBtn = document.querySelector("#resetBtn");
const drinkButtons = document.querySelectorAll("button[data-drink]");

function render(state) {
  moodEl.textContent = String(state.mood);
  glowEl.textContent = String(state.glow);
  visitorNameEl.textContent = state.visitor.name;
  storyEl.textContent = state.storyText;

  const reachedStory = state.mood >= THRESHOLDS.storyUnlock;
  const reachedSoothe = state.mood >= THRESHOLDS.sootheComplete;

  if (reachedSoothe) {
    glowEl.classList.add("good");
    hintEl.textContent = "你完成了本日安抚，访客安心离站。可点击“重新开始一天”继续。";
  } else if (reachedStory) {
    glowEl.classList.remove("good");
    hintEl.textContent = "故事已解锁，继续提供饮品将帮助访客彻底平静。";
  } else {
    glowEl.classList.remove("good");
    hintEl.textContent = "提示：情绪达到 60 解锁故事，达到 90 获得 1 点微光。";
  }
}

drinkButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const drinkKey = button.dataset.drink;
    const nextState = game.applyDrink(drinkKey);
    render(nextState);
  });
});

resetBtn.addEventListener("click", () => {
  const nextState = game.resetDay();
  render(nextState);
});

render(game.getState());
