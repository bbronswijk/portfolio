const containerEl = document.querySelector('.js-client-illustration') as HTMLElement;

const callBackFunction = ([{target, isIntersecting}]: IntersectionObserverEntry[]) => {
  if (!(target instanceof HTMLElement)) {
    return;
  }

  isIntersecting
    ? target.classList.add('active')
    : target.classList.remove('active');

  containerEl.dataset.active = isIntersecting
    ? target.dataset.client
    : target.dataset.prev;
};

const observer = new IntersectionObserver(callBackFunction, {
  rootMargin: '300% 0% -50% 0%'
});

document
  .querySelectorAll('small:first-child')
  .forEach((i: Element) => observer.observe(i));