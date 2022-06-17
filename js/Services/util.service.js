
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

  /**
   * @returns Image of a book or blueprint depending on the boolean input
   * @param {Boolean} isBook
   * @param {String} img path of blueprint icon
   */
  static getElBlueprintIcon(isBook, img) {
    const elImage = document.createElement("img");
    elImage.src = img;
    elImage.alt = isBook ? "Blueprint Book" : "Blueprint";
    return elImage;
  }

  static strongToIdString(s){
    let str = s.toLowerCase();
    str = str.replace(/:\s/g, '_');
    str = str.replace(/\s/g, '-');
    str = str.replace(/:/g, '_');
    str = str.replace(/\//g, '-');
    str = str.replace(/\(.*\)/g, '');
    str = str.replace(/-$/, '');
    return str;
  }
}
