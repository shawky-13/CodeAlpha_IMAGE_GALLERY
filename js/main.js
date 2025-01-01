// get the image boxes element
let imagesBox = document.querySelectorAll(".images-box");
// looping on it to add to it an eventlistener
imagesBox.forEach((image) => {
  image.addEventListener("click", popup);
});

// create a function that make a popup from the image
function popup(e) {
  let image = e.target;
  // create the div of popup
  let div = document.createElement("div");
  // add class to it
  div.className = "popup_div";
  // add exit icon to the div
  let exit = document.createElement("span");
  exit.textContent = "x";
  exit.className = "exit";
  div.appendChild(exit);
  // adding event to the exit span to exit from popup
  exit.addEventListener("click", () => {
    div.remove();
    blurDiv.remove();
    image.classList.remove("popup_image");
    document.querySelector(".images-box").append(image);
  });
  // add the image into the div
  // adding class to the image
  image.className = "popup_image";
  div.append(image);
  // create blur div
  let blurDiv = document.createElement("div");
  blurDiv.className = "blur_div";
  document.body.append(blurDiv);
  // appending div into the body
  document.body.append(div);
}
