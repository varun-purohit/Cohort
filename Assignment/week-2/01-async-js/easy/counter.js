function counter() {
  setInterval(function () {
    let date = new Date();
    let timer = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} `;
    console.log(timer);
  }, 1000);
}

counter();
