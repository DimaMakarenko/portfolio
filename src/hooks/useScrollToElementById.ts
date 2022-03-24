interface ScrollToElementByIdReturn {
  handleScroll: (idName: string) => void;
}

export function useScrollToElementById(): ScrollToElementByIdReturn {
  const handleScroll = (idName: string) => {
    const element = document.querySelector(`#${idName}`);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return { handleScroll };
}
