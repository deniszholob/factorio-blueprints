// Imports
import { DataRenderService } from './Services/data-render.service.js';
import { LinkRenderService } from './Services/link-render.service.js';
import { blueprintData } from './blueprints.js';
import { linksData } from './links.js';

// Constants
const elBlueprintList = document.getElementById("Blueprint_List");
const elLinkList = document.getElementById("Link_List");
const dataRenderService = new DataRenderService(elBlueprintList);
const linkRenderService = new LinkRenderService(elLinkList);

// Expose global funcitons
window.filterBlueprints = filterBlueprints;


function onInit() {
  renderData();
  renderLinks();
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
      const tag = data.isBook ? 'book' : 'blueprint';
      if (
        !filterString ||
        data.name.toLowerCase().indexOf(filterString) > -1 ||
        tag.toLowerCase().indexOf(filterString) > -1
      ) {
        dataRenderService.renderDataPoint(data);
      }
    });
  }
}

function renderLinks() {
  if (typeof linksData === 'undefined' || linksData === null) {
    console.error("Error: linksData is null...");
  } else {
    // Clear list
    elLinkList.innerHTML = "";
    // Generate list
    linksData.forEach(data => {
      linkRenderService.renderLink(data);
    });
  }
}

onInit();
