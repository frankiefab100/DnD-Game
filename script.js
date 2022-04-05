const rowElem = document.querySelectorAll(".row");
const boxElem = document.querySelectorAll(".box");

boxElem.forEach((elem) => {
  elem.addEventListener("dragstart", handleDragStart);
  elem.addEventListener("dragend", handleDragEnd);
});

function handleDragStart(e) {
  e.dataTransfer.setData("id", e.target.id);
  e.currentTarget.style.opacity = "0.3";
  console.log("drag started");
}

function handleDragEnd(e) {
  e.currentTarget.style.opacity = "1";
  console.log("drag ended");
}

rowElem.forEach((elem) => {
  elem.addEventListener("dragenter", handleDragEnter);
  elem.addEventListener("dragleave", handleDragLeave);
  elem.addEventListener("dragover", handleDragOver);
  elem.addEventListener("drop", handleDrop);
});

function handleDragEnter(e) {
  e.target.style.border = "1px dashed #ccc";
  console.log("drag entered");
}

function handleDragOver(e) {
  e.preventDefault();
  console.log("Item is being held within target region");
}

function handleDragLeave(e) {
  e.target.style.border = "none";
  console.log("Item is taken out of target area");
}

function handleDrop(e) {
  e.preventDefault();
  handleDragLeave(e);

  const draggedBox = document.getElementById(e.dataTransfer.getData("id"));
  e.target.appendChild(draggedBox);
  console.log("Item dropped");
}
