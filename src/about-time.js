// const fs = require('fs')
import fs from "fs";

// demoSync()
demoAsync();

function demoAsync() {
  fs.readFile("data/data.txt", "utf8", (err, contents) => {
    if (err) return console.log("Cannot read file");
    console.log(contents);
  });
  console.log("after calling readFile");
}
