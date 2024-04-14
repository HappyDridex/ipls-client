export const useClickOutside = (
  selector: string,
  callback: () => void,
  destroyAfterCall = true
) => {
  const handlerCallback = function (event: Event) {
    const target = event.target as Node;
    const element = document.querySelector(selector);

    let isClickOutside = false;

    if (element) {
      isClickOutside = !element.contains(target);
    } else {
      console.warn(`[DEBUG] useClickOutside: no element with selector ${selector}`);
    }

    if (isClickOutside) {
      callback();

      if (destroyAfterCall) {
        document.removeEventListener('pointerdown', handlerCallback);
      }
    }
  };

  if (window) {
    document.addEventListener('pointerdown', handlerCallback);
  }
};
