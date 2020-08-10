function formatRaw(name) {
  return "./blueprint-data/" + name + ".txt";
}

function formatIcon(name, hasIcon, isBook) {
  if (hasIcon) {
    return "./blueprint-icons/" + name + ".png";
  }
  return isBook ? "./blueprint-icons/Blueprint_book.png" : "./blueprint-icons/Blueprint.png";
}

function formatUrl(name) {
  return "https://github.com/deniszholob/factorio-blueprints/blob/master/blueprint-data/" + name + ".txt";
}

function formatName(version, name) {
  // return formatVersion(version) + " - " + name;
  return name;
}

function formatVersion(version) {
  // return "Factorio v" + version;
  return "v" + version;
}

function blueprintEntry(version, isBook, hasIcon, name, fileName, tags) {
  return {
    "name": formatName(version, name),
    "version": formatVersion(version),
    "isBook": isBook,
    "url": formatUrl(fileName),
    "raw": formatRaw(fileName),
    "icon": formatIcon(fileName, hasIcon, isBook),
    "tags": tags ? tags : "",
  };
}

// version, isBook, hasIcon, name, fileName, tags
export const blueprintData = [
  blueprintEntry("1.0", false, true, "Belt Balancer: 4x4", "bp-balancer-4x4"),
  blueprintEntry("1.0", false, true, "Belt Balancer: 8x8", "bp-balancer-8x8"),
  blueprintEntry("1.0", false, true, "Train/Station Colors", "bp-train-station-colors"),
  blueprintEntry("1.0", true, false, "Starter: Burner/Basics", "book-starter-basics", "belt"),
  blueprintEntry("0.18", true, false, "Starter: MEF/Science", "book-starter-mef-science", "belt"),
  blueprintEntry("0.17", true, false, "Starter: Mini MEF/Mall (OLD)", "factorio-017-book-starter-mini-mef", "belt"),
  blueprintEntry("1.0", true, false, "Smelting", "book-smelting", "furnace"),
  blueprintEntry("1.0", true, false, "Mining", "book-mining"),
  blueprintEntry("1.0", true, false, "Defence", "book-defence", "wall, turrets"),
  blueprintEntry("1.0", true, false, "Science: Belt", "book-science-belt", "research"),
  blueprintEntry("1.0", true, false, "Power: Steam", "book-power-steam", "boiler"),
  blueprintEntry("1.0", true, false, "Power: Solar", "book-power-solar", "accumulator"),
  blueprintEntry("1.0", true, false, "Power: Nuclear", "book-power-nuclear"),
  blueprintEntry("1.0", true, false, "Builds: Belt Bus", "book-builds-belt-bus", "circuits, gears, LDS, logistics"),
  blueprintEntry("0.18", true, false, "Builds: Belt Beaconed", "book-builds-belt-beaconed", "circuits, gears, LDS, logistics"),
  blueprintEntry("0.18", true, false, "Builds: Oil", "book-builds-oil", "petrol, sulfur, acid, plastic"),
  blueprintEntry("0.17", true, false, "Builds: Oil (OLD)", "factorio-017-book-builds-oil", "petrol, sulfur, acid, plastic"),
  blueprintEntry("1.0", true, false, "Builds: Military", "book-builds-military"),
  blueprintEntry("0.18", true, false, "Builds: Bots + Beacons", "book-builds-bot-beaconed", "circuits, gears, smelting"),
  blueprintEntry("0.18", true, false, "Builds: Bots + Beacons + Trains", "book-builds-train-super-bot", "circuits, gears, smelting, super, mega, giga"),
  blueprintEntry("0.18", true, true, "Bot MEF/Mall (MojoD + Rain Remix)", "book-mef-bot-mall", "make everything factory, logic, circuits, shopping"),
  blueprintEntry("0.17", true, false, "Bot MEF/Mall (MojoD ME3 Remix) (OLD)", "factorio-017-book-mef-mojod-me3-remix", "make everything factory, logic, circuits, shopping"),
  blueprintEntry("0.17", true, false, "Bot MSF (WIP)", "factorio-017-book-msf", "make science factory, logic, shopping, research"),
  blueprintEntry("0.18", true, false, "Rails 2 Lane RHD (MojoD Remix)", "book-rails-2-lane-rhd-mojod-remix", "train, intersection"),
  blueprintEntry("0.18", true, false, "PAX Stations", "book-pax-stations", "player access, "),
  blueprintEntry("1.0", true, false, "Spawn Area", "book-spawn"),
  blueprintEntry("1.0", true, false, "Path Segments", "bp-path-segments", "tile, concrete, brick"),
  blueprintEntry("1.0", true, false, "Game", "book-game"),
  // blueprintEntry("0.18", true, false, "Name", "Filename", "Search, Tags"),
  // version, isBook, hasIcon, name, fileName, tags
];
