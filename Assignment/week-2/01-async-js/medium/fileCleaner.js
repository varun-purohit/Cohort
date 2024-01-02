let fs = require("fs");

fs.readFile("./a.txt", "utf-8", function (err, data) {
  console.log(data);
  let value = data
    .split(" ")
    .filter((i) => i)
    .join(" ");
  fs.writeFile("./a.txt", value, "utf-8", function (err) {
    if (err) throw err;
    console.log("Replaced!");
  });
});
