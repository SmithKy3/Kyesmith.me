export const lightModeKey = `Dude, where's my light mode`;
export const lightModeClass = 'light-mode';

// get darkMode selection from localStorage. If it doesn't exist, set it to false and return that
export function getLightModeState(): boolean {
  const storedLightModeState = localStorage.getItem(lightModeKey);

  if (!storedLightModeState) {
    setLightMode(false);
    return false;
  }

  return JSON.parse(storedLightModeState);
}

export function setLightMode(state: boolean): void {
  state
    ? document.body.classList.add(lightModeClass)
    : document.body.classList.remove(lightModeClass);
  localStorage.setItem(lightModeKey, JSON.stringify(state));
}
