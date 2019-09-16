const sharp = require('sharp');

let inputFile  = "icon.png";
let targetSizes = [24,32,48,72,96]
// Guide: https://documentation.onesignal.com/docs/customize-notification-icons

targetSizes.forEach(function(targetSize) {
  sharp(inputFile).resize({ width: targetSize }).toFile(targetSize+'.png')
      .then(function(newFileInfo) {
        console.log(targetSize + "... done.");
      })
      .catch(function(err) {
        console.warn(targetSize + "... fail.");
      });
});
