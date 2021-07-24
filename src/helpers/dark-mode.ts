const LS_DARK_MODE_KEY = "KyeSmith.me-darkModeEnabled";
const DARK_MODE_CLASS = "dark";

export function init() {
  const darkModeState = getState();
  applyDarkModeState(darkModeState);
}

export function getState(): boolean {
  if (!window.localStorage) return false;

  const storedDarkModeState = window.localStorage.getItem(LS_DARK_MODE_KEY);
  return storedDarkModeState ? JSON.parse(storedDarkModeState) : false;
}

export function setState(newDarkModeState: boolean): void {
  if (!window.localStorage) return;
  window.localStorage.setItem(
    LS_DARK_MODE_KEY,
    JSON.stringify(newDarkModeState)
  );
  applyDarkModeState(newDarkModeState);
}

export function toggleState(): boolean {
  const state = getState();
  setState(!state);
  applyDarkModeState(!state);

  return !state;
}

export function applyDarkModeState(darkModeState: boolean) {
  if (!document) return;

  const { body } = document;
  if (darkModeState) body.classList.add(DARK_MODE_CLASS);
  else body.classList.remove(DARK_MODE_CLASS);
}
