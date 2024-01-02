function getCurrentTime() {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const amOrPm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;

  const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(
    seconds
  )}`;

  console.log(formattedTime);
}

function padZero(number) {
  return number < 10 ? "0" + number : number;
}

setInterval(getCurrentTime, 1000);

getCurrentTime();
