export function getDaysLeft(targetDate, locale) {
  const today = new Date();
  const target = new Date(targetDate);

  const difference = target - today;

  const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));

  // Return the result
  if (daysLeft <= 0) {
    if (locale === "ru") {
      return "Завершено";
    } else {
      return "Аяқталды";
    }
  } else {
    if (locale === "ru") {
      return `${daysLeft} дней осталось`;
    } else {
      return `${daysLeft} күн қалды`;
    }
  }
}

export function formatNumberWithSpaces(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
