const currentDay = new Date();

// 1
const tomorrow = new Date(currentDay);

tomorrow.setDate(tomorrow.getDate() + 1);

console.log(currentDay.getDate(), currentDay.getMonth(), currentDay.getFullYear());

const days = document.querySelectorAll('.day');
console.log(days);

for (let index = 0; index < days.length; index++) {
  const currentDay = new Date();
  let tomorrow = new Date(currentDay);
  tomorrow.setDate(tomorrow.getDate() + index);
  console.log(tomorrow.getDate(), tomorrow.getMonth(), tomorrow.getFullYear());
  days[index].textContent = `${tomorrow.getDate()} - ${tomorrow.getMonth()} - ${tomorrow.getFullYear()}`;
}