import { HttpClient } from './HttpClient.class.js';

function onInit() {
  const endpoint = "https://api.spacexdata.com/v3/launches/latest";
  HttpClient.get(endpoint).then(
    (response) => {
      console.log("Success");
      console.log(response);
    },
    (err) => {
      console.log("Error");
      console.log(err);
    }
  );
}

onInit();
