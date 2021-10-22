const fs = require("fs");

const path = require("path").resolve;

let dataArray = [];
const IconJsonPath = "./iconData/component-data.json";
const stream = fs.createWriteStream(IconJsonPath);

CrawlPaths();

async function createFile() {
  try {
    fs.mkdir(path(__dirname, "./iconData"), (err, data) => {
      const componentJsonArray = JSON.stringify(dataArray, null, 2);

      fs.writeFile(
        path(__dirname, IconJsonPath),
        componentJsonArray,
        "utf8",
        (err, data) => {
          console.log("Created component file");
        }
      );
    });
  } catch (error) {
    throw error;
  }
}

async function readFiles(dirname, onFileContent, onError) {
  processing = true;
  dirname = "./node_modules/@washingtonpost/icon-tokens/dist/16/";
  fs.readdir(dirname, async function (err, filenames) {
    if (err) {
      console.log(err);
    } 
    stream.write("[");
    for(let i=0;i<filenames.length;i++){
      fs.readFile(dirname + filenames[i], "utf-8", function (err, content) {
        if (err) {
          console.log(err);
          return;
        }
        const d=JSON.stringify({ name: filenames[i].split(".")[0], data: content } );
        stream.write(
          (`${d}${i==filenames.length?"]":","}\n`)
        );
        
      })

    }
  })  
}

async function CrawlPaths() {
  await readFiles();
  // createFile();
}
