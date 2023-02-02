function requiredReading(numberOfPages, pagesPerHour, daysToFinishBook) {
  let timeNeeded = numberOfPages / pagesPerHour;
  let hoursNeeded = timeNeeded / daysToFinishBook;

  console.log(hoursNeeded);
}

requiredReading(212, 20, 2);
