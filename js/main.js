// Imports
import { DataRenderService } from './services/data-render.service.js';
import { blueprintData } from './blueprints.js';

// Constants
const elBlueprintList = document.getElementById("Blueprint_List");
const dataRenderService = new DataRenderService(elBlueprintList);


function onInit() {
  if (typeof blueprintData === 'undefined' || blueprintData === null) {
    console.error("Error: blueprintData is null...");
  } else {
    blueprintData.forEach(data => {
      dataRenderService.renderDataPoint(data)
    });
  }
}

onInit();
