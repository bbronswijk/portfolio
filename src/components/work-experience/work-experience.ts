const containerEl = document.querySelector('.js-client-illustration') as HTMLElement;

const observer = new IntersectionObserver(
  ([{target, isIntersecting}]: IntersectionObserverEntry[]) => {
    if (!(target instanceof HTMLElement)) {
      return;
    }

    isIntersecting
      ? target.classList.add('active')
      : target.classList.remove('active');

    containerEl.dataset.active = isIntersecting
      ? target.dataset.client
      : target.dataset.prev;
  }, {
    rootMargin: '300% 0% -50% 0%'
  });

document
  .querySelectorAll('.js-client-period')
  .forEach((i: Element) => observer.observe(i));