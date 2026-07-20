#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const repoRoot = path.resolve(__dirname, "..");
const mapsRoot = path.join(repoRoot, "maps");
const outputFile = path.join(repoRoot, "js", "maps.js");

function readJsonIfExists(filePath) {
  if (!fs.existsSync(filePath)) {
    return null;
  }

  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    throw new Error(`Failed to parse ${filePath}: ${error.message}`);
  }
}

function findFirstJsonFile(dirPath, fileName) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name));

  for (const entry of entries) {
    const entryPath = path.join(dirPath, entry.name);
    if (entry.isFile() && entry.name === fileName) {
      return entryPath;
    }

    if (entry.isDirectory()) {
      const match = findFirstJsonFile(entryPath, fileName);
      if (match) {
        return match;
      }
    }
  }

  return null;
}

function formatVersion(gameVersion) {
  if (!gameVersion) {
    return "";
  }

  return `v${gameVersion}`;
}

function formatTags(mapshotJson) {
  const mods = mapshotJson && mapshotJson.active_mods ? Object.keys(mapshotJson.active_mods) : [];
  if (!mods.length) {
    return "";
  }

  return mods.sort().join(", ");
}

function buildMapEntry(folderName) {
  const folderPath = path.join(mapsRoot, folderName);
  const indexPath = path.join(folderPath, "index.html");
  const thumbnailPath = path.join(folderPath, "thumbnail.png");
  const mapshotPath = findFirstJsonFile(folderPath, "mapshot.json");

  if (!fs.existsSync(indexPath) || !fs.existsSync(thumbnailPath)) {
    return null;
  }

  const mapshotJson = readJsonIfExists(mapshotPath);
  const displayName = mapshotJson && mapshotJson.savename ? mapshotJson.savename : folderName;
  const version = formatVersion(mapshotJson && mapshotJson.game_version);
  const tags = formatTags(mapshotJson);

  return {
    name: displayName,
    folder: folderName,
    version,
    url: `./maps/${folderName}/index.html`,
    thumbnail: `./maps/${folderName}/thumbnail.png`,
    tags,
  };
}

function generate() {
  const folders = fs.readdirSync(mapsRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));

  const mapData = folders
    .map(buildMapEntry)
    .filter(Boolean);

  const fileContents = `export const mapData = ${JSON.stringify(mapData, null, 2)};
`;

  fs.writeFileSync(outputFile, fileContents);
}

generate();
