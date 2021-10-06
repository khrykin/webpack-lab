const path = require("path");
const fs = require("fs");
const crypto = require("crypto");

const filePath = process.argv[2];
const filename = path.parse(filePath).name;
const size = Number(process.argv[3]);

const stream = fs.createWriteStream(filePath);

stream.write(`const ${filename} = "`);

for (let i = 0; i < size / 2; i++) {
  stream.write(crypto.randomBytes(1).toString('hex'));
}

stream.write(`";\n`);
stream.write(`console.log("${filename} executed");\n`);
stream.write(`export default ${filename};`);
stream.end();