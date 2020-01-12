// Imports
import { Clipboard } from '../Classes/Clipboard.class.js';
import { HttpClient } from '../Classes/HttpClient.class.js';

/** Renders out the blueprint entries in a list */
export class DataRenderService {

  /**
   * @param {HTMLElement} rootElement Root element to add the generated html to
   */
  constructor(rootElement) {
    this.elRoot = rootElement;
  }

  /**
   * Adds the bplueprint entry to the list display
   * @param {*} data Blueprint data to display, should contain name, url, raw and isBook fields
   */
  renderDataPoint(data) {
    if (data.name && data.url) {
      const elDivListItem = document.createElement("div");
      elDivListItem.classList = "list-group-item";

      elDivListItem.appendChild(getElLeft(data));
      elDivListItem.appendChild(getElRight(data));

      this.elRoot.appendChild(elDivListItem);
    }
  }

}

/**
 * Left Element contains the Blueprint icon and text with a tooltip
 * Also contains logic for click-to-copy event
 * @param {*} data Blueprint data
 */
function getElLeft(data) {
  const elDivListItemLeft = document.createElement("div");
  elDivListItemLeft.classList = "list-group-left tool-tip";

  // Blueprint Name Text
  const elSpanText = document.createElement("span");
  elSpanText.classList = "bp-txt";
  const elTextNode = document.createTextNode(" " + data.name);
  elSpanText.appendChild(elTextNode);

  // Logic for changing tooltip text
  // Logic for clipboard copy
  const elDivTooltip = getElTooltip("Click to copy Blueprint");
  elDivListItemLeft.onclick = () => {
    // Get request to get the blueprint string
    HttpClient.get(data.raw).then(
      (response) => {
        // Copy bp string to clipboard
        Clipboard.copyExec(response);
        elDivTooltip.innerText = "BP string copied";
      },
      (err) => {
        console.error("Error: " + err);
        elDivTooltip.innerText = "Error copying BP string";
      }
    );
  }

  // When moving mouse away change tooltip text to default
  elDivListItemLeft.onmouseout = () => {
    elDivTooltip.innerText = "Click to copy Blueprint";
  }

  // Add all the elements to the left side
  elDivListItemLeft.appendChild(elDivTooltip);
  elDivListItemLeft.appendChild(getElBlueprintImage(data.isBook));
  elDivListItemLeft.appendChild(elSpanText);

  return elDivListItemLeft;

}

/**
 * Right Element is a link to the external source with a tooltip
 * @param {*} data Blueprint data
 */
function getElRight(data) {
  const elDivListItemRight = getExternalLinkEl(data.url);
  elDivListItemRight.classList = "list-group-right tool-tip txt-muted";

  elDivListItemRight.appendChild(getIcon("external-link-alt"));
  elDivListItemRight.appendChild(getElTooltip("Source"));

  return elDivListItemRight;
}

/**
 * Simple div containing text with appripriate classes assigned
 * @param {String} text
 */
function getElTooltip(text) {
  const elDivTooltip = document.createElement("div");
  elDivTooltip.classList = "tool-tip-text";

  const elTextNode = document.createTextNode(text);
  elDivTooltip.appendChild(elTextNode);

  return elDivTooltip;
}

/**
 * <a href="url" rel="noopener" target="_blank"></a>
 * @param {String} url
 */
function getExternalLinkEl(url) {
  const elLink = document.createElement("a");
  elLink.href = url;
  elLink.rel = "noopener";
  elLink.target = "_blank";
  return elLink;
}

/**
 * <i class="fas fa-id"></i>
 * @param {String} id of the Font Awesome Icon
 */
function getIcon(id) {
  const elIcon = document.createElement("i");
  elIcon.classList = "fas fa-" + id;
  return elIcon;
}

/**
 * @returns Image of a book or blueprint depending on the boolean input
 * @param {Boolean} isBook
 */
function getElBlueprintImage(isBook) {
  const elImage = document.createElement("img");
  elImage.src = isBook ? "https://wiki.factorio.com/images/Blueprint_book.png" : "https://wiki.factorio.com/images/Blueprint.png";
  elImage.alt = isBook ? "Blueprint Book" : "Blueprint";
  return elImage;
}
