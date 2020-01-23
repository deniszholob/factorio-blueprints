
/** Common functions for links */
export class UtilService {
  /**
   * <a href="url" rel="noopener" target="_blank"></a>
   * @param {String} url
   */
  static getExternalLinkEl(url) {
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
  static getIcon(id) {
    const elIcon = document.createElement("i");
    elIcon.classList = "fas fa-xs fa-" + id;
    return elIcon;
  }

  /**
   * @returns Image of a book or blueprint depending on the boolean input
   * @param {Boolean} isBook
   */
  static getElBlueprintImage(isBook) {
    const elImage = document.createElement("img");
    elImage.src = isBook ? "https://wiki.factorio.com/images/Blueprint_book.png" : "https://wiki.factorio.com/images/Blueprint.png";
    elImage.alt = isBook ? "Blueprint Book" : "Blueprint";
    return elImage;
  }

}
