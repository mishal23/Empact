//
// var i=0;
// var thumbs;
// function getFrame() {
//     var browser = document.querySelector('iframe');
//     var request = browser.getScreenshot(100, 100);
//
//     video.addEventListener('seeked', function () {
//         // now video has seeked and current frames will show
//         // at the time as we expect
//         generateThumbnail(i);
//
//         // when frame is captured, increase
//         i++;
//
//         // if we are not passed end, seek to next interval
//         if (i <= video.duration) {
//             // this will trigger another seeked event
//             video.currentTime = i;
//         }
//         else {
//             // DONE!, next action
//             alert("done!");
//         }
//
//     }, false);
//
//     function generateThumbnail() {
//         var c = document.createElement("canvas");
//         var ctx = c.getContext("2d");
//         c.width = 160;
//         c.height = 90;
//         ctx.drawImage(video, 0, 0, 160, 90);
//         var can = c;
//         console.log(can);
//         var url = can.toDataURL();
//
//         console.log("END HERE");
//
//         $.ajax({
//             type: "POST",
//             url: "/users",
//             data: {
//                 imgBase64: url
//             }
//         }).done(function (response) {
//             console.log(response);
//         });
//
//         thumbs.appendChild(c);
//     }
// }
//
