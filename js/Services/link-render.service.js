// Imports
import { UtilService } from './util.service.js';

/** Renders out the blueprint entries in a list */
export class LinkRenderService {
  /**
   * @param {HTMLElement} rootElement Root element to add the generated html to
   */
  constructor(rootElement) {
    this.elRoot = rootElement;
  }

  /**
   * @returns a list tag item containing an "a" tag external link
   * @param {*} data Link Data
   */
  renderLink(data) {
    // Do not render empty values
    if (data.name && data.url) {
      const elLiListItem = document.createElement("li");
      const elLink = UtilService.getExternalLinkEl(data.url);
      const elTextNode = document.createTextNode(data.name);
      elLink.appendChild(elTextNode);
      elLiListItem.appendChild(elLink);
      this.elRoot.appendChild(elLiListItem);
    }
  }

}
