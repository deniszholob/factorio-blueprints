// Imports
import { Clipboard } from '../Classes/Clipboard.class.js';
import { HttpClient } from '../Classes/HttpClient.class.js';
import { UtilService } from './util.service.js';

/** Renders out the blueprint entries in a list */
export class DataRenderService {

  /**
   * @param {HTMLElement} rootElement Root element to add the generated html to
   */
  constructor(rootElement) {
    this.elRoot = rootElement;
  }

  /**
   * Adds the blueprint entry to the list display
   * @param {*} data Blueprint data to display, should contain name, url, raw and isBook fields
   */
  renderDataPoint(data) {
    if (data.name && data.url) {
      const elDivListItem = document.createElement("div");
      elDivListItem.classList = "list-group-item align-items-center";
      const prefix = getNamePrefix(data.name);
      console.log(prefix);
      if (prefix) { elDivListItem.classList.add(`bp-group-${prefix}`); }
      elDivListItem.appendChild(getElLeft(data));
      elDivListItem.appendChild(getElMid(data));
      elDivListItem.appendChild(getElRight(data));

      this.elRoot.appendChild(elDivListItem);
    }
  }

}

// ===== Helper Functions ===== //

function getNamePrefix(name) {
  const prefix = name.match(/(.*?):/);
  if (prefix && prefix[1]) {
    return prefix[1].toLowerCase();
  }
  return null;
}

/**
 * Center Element shows the factorio version
 * @param {*} data Blueprint data
 */
function getElMid(data) {
  const elDivListItemCenter = document.createElement("div");
  elDivListItemCenter.classList = "list-group-center txt-muted";

  elDivListItemCenter.innerHTML = data.version

  return elDivListItemCenter;
}

/**
 * Left Element contains the Blueprint icon and text with a tooltip
 * Also contains logic for click-to-copy event
 * @param {*} data Blueprint data
 */
function getElLeft(data) {
  const elDivListItemLeft = document.createElement("div");
  elDivListItemLeft.classList = "list-group-left tool-tip align-items-center";

  // Blueprint Name Text
  const elSpanText = document.createElement("span");
  elSpanText.classList = "bp-txt";
  const elTextNode = document.createTextNode(" " + data.name);
  elSpanText.appendChild(UtilService.getIcon("paste"));
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
  const elIcon = data.icon ? UtilService.getElBlueprintIcon(data.isBook, data.icon) : UtilService.getElBlueprintImage(data.isBook);
  elDivListItemLeft.appendChild(elIcon);
  elDivListItemLeft.appendChild(elSpanText);

  return elDivListItemLeft;
}

/**
 * Right Element is a link to the external source with a tooltip
 * @param {*} data Blueprint data
 */
function getElRight(data) {
  const elDivListItemRight = UtilService.getExternalLinkEl(data.url);
  elDivListItemRight.classList = "list-group-right tool-tip txt-muted";

  elDivListItemRight.appendChild(UtilService.getIcon("external-link-alt"));
  elDivListItemRight.appendChild(getElTooltip("Source"));

  return elDivListItemRight;
}

/**
 * Simple div containing text with appropriate classes assigned
 * @param {String} text
 */
function getElTooltip(text) {
  const elDivTooltip = document.createElement("div");
  elDivTooltip.classList = "tool-tip-text";

  const elTextNode = document.createTextNode(text);
  elDivTooltip.appendChild(elTextNode);

  return elDivTooltip;
}

