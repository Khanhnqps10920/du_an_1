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


// slider coming-soon


const comingSoonSliderItems = document.querySelectorAll('.coming-soon__slider-item');
const comingSoonItem = document.querySelector('.coming-soon__item');

const activeSliderItem = () => {


  if (comingSoonSliderItems && comingSoonItem) {
    let activeItem;
    for (const item of comingSoonSliderItems) {
      if (item.classList.contains('active')) {
        activeItem = item;
      }
    }

    //get soon item element
    const soonCategory = comingSoonItem.querySelector('#soonCategory');

    const soonName = comingSoonItem.querySelector('#soonName')

    const soonDate = comingSoonItem.querySelector('#soonDate');

    const soonDes = comingSoonItem.querySelector('#soonDes');

    const soonImg = comingSoonItem.querySelector('#soonImg');

    const activeItemName = activeItem.querySelector('#sliderName');

    const activeItemImg = activeItem.querySelector('#sliderImgsrc');

    const activeItemDate = activeItem.querySelector('#sliderDate');

    const activeItemStar = activeItem.querySelector('#sliderStar');

    const activeItemDes = activeItem.querySelector('#sliderDes');

    const activeItemCategory = activeItem.querySelector('#sliderCategory');

    soonCategory.textContent = activeItemCategory.textContent;

    soonName.textContent = activeItemName.textContent;

    soonDate.textContent = activeItemDate.textContent;

    soonDes.textContent = activeItemDes.textContent;

    soonImg.src = activeItemImg.src;
  }

}

activeSliderItem();


const handleSliderItemClick = (e, item) => {

  e.preventDefault();

  for (const sliderItem of comingSoonSliderItems) {
    if (sliderItem.classList.contains('active')) {
      sliderItem.classList.remove('active');
    }
  }

  item.classList.add('active');

  activeSliderItem();

}

for (const item of comingSoonSliderItems) {
  item.addEventListener('click', (e) => handleSliderItemClick(e, item));
}


//booking
const handlebookingItemClick = (e, bookingItems, bookingTabs, itemId) => {
  console.log('1111', bookingTabs);
  //get activeItem
  for (let index = 0; index < bookingItems.length; index++) {
    if (bookingItems[index].classList.contains('active')) {
      bookingItems[index].classList.remove('active');
    }
  }
  e.target.classList.add('active');

  for (const tab of bookingTabs) {
    if (tab.classList.contains('active')) {
      tab.classList.remove('active');
    }
  }

  // active tab 
  const tabId = e.target.textContent.toLowerCase();

  const activeTab = document.querySelector(`.movie-tabs__fast-booking[data-item-id="${itemId}"] #${tabId}`)
  console.log(activeTab);

  activeTab.classList.add('active');
}


//time + seats
const handleBookingTimeClick = (e, time, movieTimes, bookingSeats) => {
  for (const time of movieTimes) {
    if (time.classList.contains('active')) time.classList.remove('active');
  }
  const timeId = time.getAttribute('data-time-id');

  for (const seat of bookingSeats) {
    const seatId = seat.getAttribute('data-time-id');

    if (seatId === timeId) {
      seat.classList.add('active');
    } else {
      seat.classList.remove('active');
    }
  }

  time.classList.add('active');


}

//handle booking
const movieTabItems = document.querySelectorAll('.movie-tabs');
for (const item of movieTabItems) {
  if (item.hasAttribute('data-item-id')) {
    //get item id
    const itemId = item.getAttribute('data-item-id');
    const bookingItems = item.querySelectorAll(`.movie-tabs__fast-booking[data-item-id="${itemId}"] .movie-tabs__fast-booking-tabsinfo > p`);
    const bookingTabs = item.querySelectorAll(`.movie-tabs__fast-booking[data-item-id="${itemId}"] .movie-tabs__fast-booking-tabs`);



    //handle booking tab 
    for (const item of bookingItems) {
      item.addEventListener('click', (e) => {
        handlebookingItemClick(e, bookingItems, bookingTabs, itemId);
      })
    }

    //handle movie time
    const movieTimes = item.querySelectorAll(`.movie-tabs__fast-booking[data-item-id="${itemId}"] .movie-tabs__fast-booking-tabs-time-time`);

    const bookingSeats = item.querySelectorAll(`.movie-tabs__fast-booking[data-item-id="${itemId}"] .movie-tabs__fast-booking-tabs-seatnumber`);

    for (const time of movieTimes) {
      time.addEventListener('click', (e) => {
        handleBookingTimeClick(e, time, movieTimes, bookingSeats);
      });
    }
  }
}