// Constants
const elBlueprintList = document.getElementById("Blueprint_List");


function onLoad() {
  if (blueprintData) {
    blueprintData.forEach(element => {
      addLinkToList(element);
      // addToList(element);
    });
  } else {
    console.log("blueprintData is null..." + blueprintData)
  }
}

function addLinkToList(element) {
  if (element.name && element.url) {
    const elLink = getExternalLinkEl(element.url);
    const elTextNode = document.createTextNode(" " + element.name);

    elLink.appendChild(getBlueprintImageEl(element.book));
    elLink.appendChild(elTextNode);
    elLink.classList = "list-group-item";

    elBlueprintList.appendChild(elLink);
  }
}

// TODO: Needs to add copy to clipboard functionality
function addToList(element) {
  if (element.name && element.url) {
    const elDivListItem = document.createElement("div");
    const elButtonCopy = document.createElement("button");
    const elLink = getExternalLinkEl(element.url);
    const elSpanText = document.createElement("span");
    const elTextNode = document.createTextNode(" " + element.name);

    elDivListItem.classList = "list-group-item";

    elButtonCopy.classList = "btn btn-link";
    elButtonCopy.appendChild(getIcon("book"));

    elLink.appendChild(getIcon("external-link-alt"));

    elSpanText.appendChild(elTextNode);

    elDivListItem.appendChild(elButtonCopy);
    elDivListItem.appendChild(elLink);
    elDivListItem.appendChild(elSpanText);

    elBlueprintList.appendChild(elDivListItem);
  }
}


function getExternalLinkEl(url) {
  const elLink = document.createElement("a");
  elLink.href = url;
  elLink.rel = "noopener";
  elLink.target = "_blank";
  return elLink;
}

function getIcon(id) {
  const elIcon = document.createElement("i");
  elIcon.classList = "fas fa-" + id;
  return elIcon;
}

function getBlueprintImageEl(isBook) {
  const elImage = document.createElement("img");
  elImage.src = isBook ? "https://wiki.factorio.com/images/Blueprint_book.png" : "https://wiki.factorio.com/images/Blueprint.png";
  elImage.alt = isBook ? "Blueprint Book" : "Blueprint";
  return elImage;
}

