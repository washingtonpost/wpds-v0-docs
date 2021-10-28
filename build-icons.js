const fs = require("fs");

const path = require("path").resolve;


const IconJsonPath = "./iconData/icon-data.json";
const stream = fs.createWriteStream(IconJsonPath);

CrawlPaths();

//Reads all the files in 
async function ReadCreateData() {
  processing = true;
  let dirname = "./node_modules/@washingtonpost/icon-tokens/dist/16/";
  fs.readdir(dirname, async function (err, filenames) {
    if (err) {
      console.log(err);
    } 

    stream.write("[");
    for(let i=0;i<filenames.length;i++){
      //Sometimes it doesnt wait till the end to write the ] and makes the json invalid. 
      await fs.readFile(dirname + filenames[i], "utf-8", async function (err, content) {
        if (err) {
          console.log(err);
          return;
        }
        // const d=JSON.stringify(`"${filenames[i].split(".")[0]}":"${content}"` );
        const d=`{"${filenames[i].split('.svg')[0]}":"${dirname + filenames[i]}"}`

        stream.write(
          (`${d}${i==filenames.length-1?"]":","}\n`)
        );
      })
    }
    console.log("Created Data File")
  })  
}

async function CrawlPaths() {
  await ReadCreateData();
  // createFile();
}
