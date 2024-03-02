function mouseOver(id) {
  var img = id.src;
  if(img.includes("mn-cons1")) {
    id.src = "images/mn-cons2.png";
  }
  else if(img.includes("a-cons1")) {
    id.src = "images/a-cons2.png";
  }
  else if(img.includes("p-cons1")) {
    id.src = "images/p-cons2.png";
  }
  else if(img.includes("v-cons1")) {
    id.src = "images/v-cons2.png";
  }
  else if(img.includes("r1d11")) {
    id.src = "images/r1d12.png";
  }
  else if(img.includes("r1d21")) {
    id.src = "images/r1d22.png";
  }
  else if(img.includes("r1d31")) {
    id.src = "images/r1d32.png";
  }
  else if(img.includes("r2d11")) {
    id.src = "images/r2d12.png";
  }
  else if(img.includes("r2d21")) {
    id.src = "images/r2d22.png";
  }
  else if(img.includes("r2d31")) {
    id.src = "images/r2d32.png";
  }
  else if(img.includes("r4d11")) {
    id.src = "images/r4d12.png";
  }
}

function mouseOut(id) {
  var img = id.src;
  if(img.includes("mn-cons2")) {
    id.src = "images/mn-cons1.png";
  }
  else if(img.includes("a-cons2")) {
    id.src = "images/a-cons1.png";
  }
  else if(img.includes("p-cons2")) {
    id.src = "images/p-cons1.png";
  }
  else if(img.includes("v-cons2")) {
    id.src = "images/v-cons1.png";
  }
  else if(img.includes("r1d12")) {
    id.src = "images/r1d11.png";
  }
  else if(img.includes("r1d22")) {
    id.src = "images/r1d21.png";
  }
  else if(img.includes("r1d32")) {
    id.src = "images/r1d31.png";
  }
  else if(img.includes("r2d12")) {
    id.src = "images/r2d11.png";
  }
  else if(img.includes("r2d22")) {
    id.src = "images/r2d21.png";
  }
  else if(img.includes("r2d32")) {
    id.src = "images/r2d31.png";
  }
  else if(img.includes("r4d12")) {
    id.src = "images/r4d11.png";
  }
}