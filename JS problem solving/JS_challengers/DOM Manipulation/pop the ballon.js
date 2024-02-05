//Make the balloons pop by hovering over them.Extend the JavaScript code below to interact with the displayed HTML elements. Every time you hover over a balloon, it should become invisible. (Instead of hovering, we use here click event!)
//Your goal is to pop all the balloons one after the other.

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <link rel="stylesheet" href="styles.css">
//   <title>Your Page Title</title>
// </head>
// <body>
//   <ul class="cursor-pointer flex justify-center items-center flex-wrap" id="list" data-dom="true">
//     <li></li>
//     <li></li>
//     <li></li>
//     <li></li>
//     <li></li>
//     <li></li>
//     <li></li>
//     <li></li>
//     <li></li>
//     <li></li>
//   </ul>
// </body>
// </html>

// CSS
// ul#list {
//   list-style: none;
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;
// }

// ul#list li {
//   width: 12px;
//   height: 12px;
//   background-color: #ff0000; /* Red color */
//   border-radius: 50%;
//   margin: 4px;
// }

const list = document.getElementById("list");
const allList = list.getElementsByTagName("li");
for (let i = 0; i < allList.length; i++) {
  allList[i].addEventListener("mouseover", (event) => {
    event.target.style.visibility = "hidden";
  });
}
