// Imports
import { DataRenderService } from './Services/data-render.service.js';
import { MapRenderService } from './Services/map-render.service.js';
import { LinkRenderService } from './Services/link-render.service.js';
import { blueprintData } from './blueprints.js';
import { mapData } from './maps.js';
import { linksData } from './links.js';

// Constants
const elBlueprintList = document.getElementById("Blueprint_List");
const elBlueprintCount = document.getElementById("Blueprint_Count");
const elBlueprintEmpty = document.getElementById("Blueprint_Empty");
const elClearBlueprintSearch = document.getElementById("ClearBlueprintSearch");
const elClearBlueprintSearchInline = document.getElementById("ClearBlueprintSearchInline");
const elMapsList = document.getElementById("Maps_List");
const elMapsCount = document.getElementById("Maps_Count");
const elMapsEmpty = document.getElementById("Maps_Empty");
const elClearMapSearch = document.getElementById("ClearMapSearch");
const elClearMapSearchInline = document.getElementById("ClearMapSearchInline");
const elLinkList = document.getElementById("Link_List");
const dataRenderService = new DataRenderService(elBlueprintList);
const mapRenderService = new MapRenderService(elMapsList);
const linkRenderService = new LinkRenderService(elLinkList);

// Expose global functions
window.filterBlueprints = filterBlueprints;
window.filterMaps = filterMaps;


function onInit() {
  elClearBlueprintSearch.addEventListener("click", () => clearSearch("InputSearch"));
  elClearBlueprintSearchInline.addEventListener("click", () => clearSearch("InputSearch"));
  elClearMapSearch.addEventListener("click", () => clearSearch("InputSearchMaps"));
  elClearMapSearchInline.addEventListener("click", () => clearSearch("InputSearchMaps"));
  renderData();
  renderMaps();
  renderLinks();
}

function filterBlueprints(elId) {
  const elInputFilter = document.getElementById(elId);
  const filterString = elInputFilter.value.toLowerCase();
  renderData(filterString);
}

function filterMaps(elId) {
  const elInputFilter = document.getElementById(elId);
  const filterString = elInputFilter.value.toLowerCase();
  renderMaps(filterString);
}

function renderData(filterString) {
  let inverse = false;
  if (filterString && filterString.startsWith('!')) {
    inverse = true;
    filterString = filterString.slice(1);
  }

  if (typeof blueprintData === 'undefined' || blueprintData === null) {
    console.error("Error: blueprintData is null...");
  } else {
    const totalCount = blueprintData.length;
    let matchCount = 0;
    // Clear list
    elBlueprintList.innerHTML = "";
    // Generate list
    blueprintData.forEach(data => {
      const tag = data.isBook ? 'book' : 'blueprint';

      let render = (
        !filterString ||
        data.name.toLowerCase().indexOf(filterString) > -1 ||
        tag.toLowerCase().indexOf(filterString) > -1 ||
        data.tags.toLowerCase().indexOf(filterString) > -1 ||
        data.version.indexOf(filterString) > -1
        // indexOfStringArray(data.tags, filterString) > -1
      );

      render = inverse ? !render : render;

      if (render) {
        dataRenderService.renderDataPoint(data);
        matchCount += 1;
      }
    });
    updateSectionState(elBlueprintCount, elBlueprintEmpty, matchCount, totalCount, "No blueprints match this search.");
  }
}

function renderMaps(filterString) {
  if (typeof mapData === 'undefined' || mapData === null) {
    console.error("Error: mapData is null...");
  } else {
    const totalCount = mapData.length;
    let matchCount = 0;
    // Clear list
    elMapsList.innerHTML = "";
    // Generate list
    mapData.forEach(data => {
      const render = (
        !filterString ||
        data.name.toLowerCase().indexOf(filterString) > -1 ||
        data.folder.toLowerCase().indexOf(filterString) > -1 ||
        data.tags.toLowerCase().indexOf(filterString) > -1 ||
        data.version.toLowerCase().indexOf(filterString) > -1
      );

      if (render) {
        mapRenderService.renderMapPoint(data);
        matchCount += 1;
      }
    });
    updateSectionState(elMapsCount, elMapsEmpty, matchCount, totalCount, "No maps match this search.");
  }
}

function clearSearch(inputId) {
  const elInput = document.getElementById(inputId);
  elInput.value = "";
  if (inputId === "InputSearch") {
    renderData();
  } else if (inputId === "InputSearchMaps") {
    renderMaps();
  }
}

function updateSectionState(countEl, emptyEl, matchCount, totalCount, message) {
  countEl.textContent = `${matchCount}/${totalCount}`;
  emptyEl.hidden = matchCount !== 0;
  if (matchCount === 0) {
    const messageEl = emptyEl.querySelector("div");
    if (messageEl) {
      messageEl.textContent = message;
    }
  }
}

// function indexOfStringArray(tags, filterString) {
//   if(tags){
//     for(let i = 0; i < tags.length; i++){
//       if(tags[i].toLowerCase().indexOf(filterString) > -1){
//         return i;
//       }
//     }
//   }
//   return -1;
// }

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

// Run script
onInit();
