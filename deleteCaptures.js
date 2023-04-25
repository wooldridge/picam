const fs = require("node:fs/promises");
const path = require("node:path");

const directory = "captures";
const filter = /.*\.jpg$/;

async function deleteFiles () {
  for (const file of await fs.readdir(directory)) {
    if (filter.test(file)) {
      await fs.unlink(path.join(directory, file));
    }
  }
}

deleteFiles();


