import fs from "fs";

fs.writeFileSync("self.js", "Hello World", "utf8");
const data = fs.readFileSync("self.js", "utf8");
console.log(data);

fs.appendFileSync("self.js", "This is an appended file ", "utf8");
const update = fs.readFileSync("self.js", "utf8");
console.log(update);

fs.renameSync("self.js", "fs.js");
