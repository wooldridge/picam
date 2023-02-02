const raspicam = require("raspicam");

const opts = {
  mode: "photo",
  preview: "0,0,640,480",
  encoding: "jpg",
  timeout: 1000,
  verbose: true,
  //output: "./captures/" + Date.now() + ".jpg"
};

setInterval(() => {
  const camera = new raspicam({
  mode: "photo",
  preview: "0,0,640,480",
  encoding: "jpg",
  timeout: 1000,
  verbose: true,
  output: "./captures/" + Date.now() + ".jpg",
  awb: "sun"
});
  //camera.set("output", "./captures/" + Date.now() + ".jpg");
  console.dir(camera);
  camera.start();
}, 10000);



//to take a snapshot, start a timelapse or video recording
//camera.start();
