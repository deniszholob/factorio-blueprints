// Imports
import { UtilService } from './util.service.js';

/** Renders out the map entries in a list */
export class MapRenderService {
  /**
   * @param {HTMLElement} rootElement Root element to add the generated html to
   */
  constructor(rootElement) {
    this.elRoot = rootElement;
  }

  /**
   * Adds the map entry to the list display
   * @param {*} data Map data to display, should contain name, url, thumbnail, version and tags fields
   */
  renderMapPoint(data) {
    if (data.name && data.url) {
      const elDivListItem = document.createElement("div");
      elDivListItem.className = "list-group-item align-items-center map-group";
      elDivListItem.id = UtilService.strongToIdString(data.name);

      elDivListItem.appendChild(getElLeft(data));
      elDivListItem.appendChild(getElMid(data));
      elDivListItem.appendChild(getElRight(data));

      this.elRoot.appendChild(elDivListItem);
    }
  }
}

/**
 * Center element shows the map version
 * @param {*} data Map data
 */
function getElMid(data) {
  const elDivListItemCenter = document.createElement("div");
  elDivListItemCenter.className = "list-group-center txt-muted";

  elDivListItemCenter.innerHTML = data.version;

  return elDivListItemCenter;
}

/**
 * Left element contains the map thumbnail and text
 * Clicking it opens the mapshot viewer
 * @param {*} data Map data
 */
function getElLeft(data) {
  const elLinkListItemLeft = UtilService.getExternalLinkEl(data.url, false);
  elLinkListItemLeft.className = "list-group-left tool-tip align-items-center";

  const elSpanText = document.createElement("span");
  elSpanText.className = "bp-txt";
  const elTextNode = document.createTextNode(" " + data.name);
  elSpanText.appendChild(UtilService.getIcon("map"));
  elSpanText.appendChild(elTextNode);

  const elDivTooltip = getElTooltip("Click to open map");
  elLinkListItemLeft.appendChild(elDivTooltip);
  const elImage = document.createElement("img");
  elImage.src = data.thumbnail;
  elImage.alt = data.name + " thumbnail";
  elLinkListItemLeft.appendChild(elImage);
  elLinkListItemLeft.appendChild(elSpanText);

  return elLinkListItemLeft;
}

/**
 * Right element is a link to open the mapshot viewer again with a tooltip
 * @param {*} data Map data
 */
function getElRight(data) {
  const elDivListItemRight = UtilService.getExternalLinkEl(data.url, false);
  elDivListItemRight.className = "list-group-right tool-tip txt-muted";

  elDivListItemRight.appendChild(UtilService.getIcon("external-link-alt"));
  elDivListItemRight.appendChild(getElTooltip("Open map"));

  return elDivListItemRight;
}

/**
 * Simple div containing text with appropriate classes assigned
 * @param {String} text
 */
function getElTooltip(text) {
  const elDivTooltip = document.createElement("div");
  elDivTooltip.className = "tool-tip-text";

  const elTextNode = document.createTextNode(text);
  elDivTooltip.appendChild(elTextNode);

  return elDivTooltip;
}
