import { DRINKS, THRESHOLDS, VISITORS } from "./data.js";

function pickRandomVisitor(excludeVisitorId) {
  const candidates =
    VISITORS.length > 1 ? VISITORS.filter((visitor) => visitor.id !== excludeVisitorId) : VISITORS;
  const randomIndex = Math.floor(Math.random() * candidates.length);
  return candidates[randomIndex];
}

function createInitialState(visitor) {
  return {
    visitor,
    mood: visitor.initialMood,
    glow: 0,
    storyUnlocked: false,
    soothed: false,
    storyText: visitor.intro,
  };
}

export function createGame() {
  let currentVisitor = pickRandomVisitor();
  let state = createInitialState(currentVisitor);

  function getState() {
    return {
      ...state,
      visitor: { ...state.visitor },
    };
  }

  function applyDrink(drinkKey) {
    const drink = DRINKS[drinkKey];
    if (!drink) return getState();

    state.mood = Math.min(100, state.mood + drink.moodGain);

    if (!state.storyUnlocked && state.mood >= THRESHOLDS.storyUnlock) {
      state.storyUnlocked = true;
      state.storyText = state.visitor.storyUnlocked;
    }

    if (!state.soothed && state.mood >= THRESHOLDS.sootheComplete) {
      state.soothed = true;
      state.glow += 1;
      state.storyText = state.visitor.soothed;
    }

    return getState();
  }

  function resetDay() {
    currentVisitor = pickRandomVisitor(currentVisitor.id);
    state = createInitialState(currentVisitor);
    return getState();
  }

  return {
    getState,
    applyDrink,
    resetDay,
  };
}
