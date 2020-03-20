const dayList = document.querySelectorAll('.movie-by-week__tabs-daylist-day');
const tabsContent = document.querySelectorAll('.movie-by-week__movie-tabscontent');
const day = new Date();
const today = day.getDay();

dayList[today].classList.add('active');

tabsContent[today].classList.add('active');

for (const day of dayList) {
  day.addEventListener('click', (e) => {
    for (const anotherDay of dayList) {
      if (anotherDay.classList.contains('active')) {
        anotherDay.classList.remove('active');
      }
    }
    e.target.classList.add('active');
    const dayPicker = e.target.getAttribute('data-day');
    for (const tab of tabsContent) {
      if (tab.classList.contains('active')) {
        tab.classList.remove('active');
      }
    }

    const activeTab = document.getElementById(dayPicker).classList.add('active');

  })
}