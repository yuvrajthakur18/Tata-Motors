export const scrollToCard = (cardId) => {
  const cardElement = document.getElementById(cardId);
  if (cardElement) {
    cardElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }
};
