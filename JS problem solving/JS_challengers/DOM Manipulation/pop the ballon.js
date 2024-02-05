//Make the balloons pop by hovering over them.Extend the JavaScript code below to interact with the displayed HTML elements. Every time you hover over a balloon, it should become invisible. (Instead of hovering, we use here click event!)
//Your goal is to pop all the balloons one after the other.

<html>
  <ul
    class="cursor-pointer flex justify-center items-center flex-wrap"
    id="list"
    data-dom="true"
  >
    <li class="w-12 h-12 bg-red-500 rounded-full m-4"></li>
    <li class="w-12 h-12 bg-red-500 rounded-full m-4"></li>
    <li class="w-12 h-12 bg-red-500 rounded-full m-4"></li>
    <li class="w-12 h-12 bg-red-500 rounded-full m-4"></li>
    <li class="w-12 h-12 bg-red-500 rounded-full m-4"></li>
    <li class="w-12 h-12 bg-red-500 rounded-full m-4"></li>
    <li class="w-12 h-12 bg-red-500 rounded-full m-4"></li>
    <li class="w-12 h-12 bg-red-500 rounded-full m-4"></li>
    <li class="w-12 h-12 bg-red-500 rounded-full m-4"></li>
    <li class="w-12 h-12 bg-red-500 rounded-full m-4"></li>
  </ul>
</html>;

const allList = list.getElementsByTagName("li");

console.log(allList.length);
for (let i = 0; i < allList.length; i++) {
  allList[i].id = i;
  document.getElementById(i).addEventListener("click", function () {
    console.log(i);
    document.getElementById(i).remove();
  });
}
