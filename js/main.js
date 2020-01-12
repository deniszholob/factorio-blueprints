// Imports
import { DataRenderService } from './Services/data-render.service.js';
import { blueprintData } from './blueprints.js';

// Constants
const elBlueprintList = document.getElementById("Blueprint_List");
const dataRenderService = new DataRenderService(elBlueprintList);

// Expose global funcitons
window.filterBlueprints = filterBlueprints;


function onInit() {
  renderData();
}

function filterBlueprints(elId) {
  const elInputFilter = document.getElementById(elId);
  const filterString = elInputFilter.value.toLowerCase();
  renderData(filterString);
}

function renderData(filterString) {
  if (typeof blueprintData === 'undefined' || blueprintData === null) {
    console.error("Error: blueprintData is null...");
  } else {
    // Clear list
    elBlueprintList.innerHTML = "";
    // Generate list
    blueprintData.forEach(data => {
      if(!filterString || data.name.toLowerCase().indexOf(filterString) > -1) {
        dataRenderService.renderDataPoint(data);
      }
    });
  }
}

onInit();
