import { DRINKS, TEXTS, THRESHOLDS } from "./data.js";

const createInitialState = () => ({
  mood: 30,
  glow: 0,
  storyUnlocked: false,
  soothed: false,
  storyText: TEXTS.intro,
});

export function createGame() {
  let state = createInitialState();

  function getState() {
    return { ...state };
  }

  function applyDrink(drinkKey) {
    const drink = DRINKS[drinkKey];
    if (!drink) return getState();

    state.mood = Math.min(100, state.mood + drink.moodGain);

    if (!state.storyUnlocked && state.mood >= THRESHOLDS.storyUnlock) {
      state.storyUnlocked = true;
      state.storyText = TEXTS.storyUnlocked;
    }

    if (!state.soothed && state.mood >= THRESHOLDS.sootheComplete) {
      state.soothed = true;
      state.glow += 1;
      state.storyText = TEXTS.soothed;
    }

    return getState();
  }

  function resetDay() {
    state = createInitialState();
    return getState();
  }

  return {
    getState,
    applyDrink,
    resetDay,
  };
}
