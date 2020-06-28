export const darkModeKey = `Dude, where's my dark mode`;
const darkModeClass = "dark-mode";

// get darkMode selection from localStorage. If it doesn't exist, set it to false and return that
export function getDarkModeState(): boolean {
  const storedDarkMode = localStorage.getItem(darkModeKey);

  if (!storedDarkMode) {
    setDarkMode(false);
    return false;
  }

  return JSON.parse(storedDarkMode);
}

export function setDarkMode(state: boolean): void {
  state
    ? document.body.classList.add(darkModeClass)
    : document.body.classList.remove(darkModeClass);
  localStorage.setItem(darkModeKey, JSON.stringify(state));
}
