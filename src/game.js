import { DRINKS, THRESHOLDS, VISITORS } from "./data.js";

function pickVisitor(previousVisitorId = null) {
  if (VISITORS.length === 0) {
    throw new Error("VISITORS must contain at least one visitor.");
  }

  if (VISITORS.length === 1) {
    return VISITORS[0];
  }

  const candidates = VISITORS.filter((visitor) => visitor.id !== previousVisitorId);
  const index = Math.floor(Math.random() * candidates.length);

  return candidates[index];
}

function createInitialState(previousVisitorId = null) {
  const visitor = pickVisitor(previousVisitorId);

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
  let state = createInitialState();

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
    state = createInitialState(state.visitor.id);
    return getState();
  }

  return {
    getState,
    applyDrink,
    resetDay,
  };
}
