/**
 * Handles Http Requests with Promises
 * @see https://developers.google.com/web/fundamentals/primers/promises
 * @usage get(url).then((response)=>{console.log("Success");}, (err)=>{console.log("Error");});
 */
export class HttpClient {

  /**
   * @returns a Promise of GET request data
   * @param {String} url
   */
  static get(url) {
    return new Promise((resolve, reject) => {
      // Plain JS Http call
      const req = new XMLHttpRequest();
      req.open("GET", url, true);

      req.onload = () => {
        // This is called even on 404 etc
        // so check the status
        if (req.status == 200) {
          // Resolve the promise with the response text
          resolve(req.response);
        }
        // if(req.status == 404){
        //   resolve(req.statusText);
        // }
        else {
          // Otherwise reject with the status text
          // which will hopefully be a meaningful error
          reject(Error(req.statusText));
        }
      };

      // Handle network errors
      req.onerror = () => {
        reject(Error("Network Error"));
      };

      // Make the request
      try {
        req.send();
      } catch (error) {
        reject(error);
      }
    });
  }

}
