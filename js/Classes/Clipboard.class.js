/** Copies data to clipboard */
export class Clipboard {

  /**
   * Puts the msg parameter into the copy clipboard
   * Note: Limitation using inside http requests (and more)
   * @param {String} msg Message string to copy to clipboard
   */
  static copyExec(msg) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = msg;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    // console.log("Copied");
  }

  /**
   * Future way of using clipboard, overcomes old limitations
   * Note: Only works on latest Chrome versions as of Jan 2019
   * @param {String} msg Message string to copy to clipboard
   */
  static copyNavigator(msg) {
    navigator.clipboard.writeText(msg)
      .then(() => {
        console.log('Text copied to clipboard');
      })
      .catch(err => {
        // This can happen if the user denies clipboard permissions:
        console.error('Could not copy text: ', err);
      });
  }
}
