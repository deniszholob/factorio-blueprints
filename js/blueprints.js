function getRaw(name) {
  return "./blueprint-data/" + name + ".txt";
}

function getIcon(name, hasIcon, isBook) {
  if (hasIcon) {
    return "./blueprint-icons/" + name + ".png";
  }
  return isBook ? "./blueprint-icons/Blueprint_book.png" : "./blueprint-icons/Blueprint.png";
}

function getUrl(name) {
  return "https://github.com/deniszholob/factorio-blueprints/blob/master/blueprint-data/" + name + ".txt";
}

function getName(version, name) {
  return "Factorio v" + version + " - " + name;
}

function blueprintEntry(version, isBook, hasIcon, name, fileName, tags) {
  return {
    "name": getName(version, name),
    "isBook": isBook,
    "url": getUrl(fileName),
    "raw": getRaw(fileName),
    "icon": getIcon(fileName, hasIcon, isBook),
    "tags": tags ? tags : "",
  };
}

export const blueprintData = [
  blueprintEntry("0.18", false, true, "Belt Balancer: 4x4", "factorio-018-bp-balancer-4x4"),
  blueprintEntry("0.18", false, true, "Belt Balancer: 8x8", "factorio-018-bp-balancer-8x8"),
  blueprintEntry("0.17", true, false, "Builds: Starter/Mini MEF/Mall", "factorio-017-book-builds-starter-mini-mef", "belt"),
  blueprintEntry("0.17", true, false, "Smelting", "factorio-017-book-smelting", "furnace"),
  blueprintEntry("0.17", true, false, "Mining", "factorio-017-book-mining"),
  blueprintEntry("0.17", true, false, "Defence", "factorio-017-book-defence", "wall, turrets"),
  blueprintEntry("0.17", true, false, "Science", "factorio-017-book-science", "research"),
  blueprintEntry("0.17", true, false, "Power: Steam", "factorio-017-book-power-steam", "boiler"),
  blueprintEntry("0.17", true, false, "Power: Solar", "factorio-017-book-power-solar", "accumulator"),
  blueprintEntry("0.17", true, false, "Power: Nuclear", "factorio-017-book-power-nuclear"),
  blueprintEntry("0.17", true, false, "Builds: Belt Bus (WIP)", "factorio-017-book-builds-bus", "circuits, gears, "),
  blueprintEntry("0.17", true, false, "Builds: Oil", "factorio-017-book-builds-oil", "petrol, sulfur, acid, plastic"),
  blueprintEntry("0.17", true, false, "Builds: Military", "factorio-017-book-builds-military"),
  blueprintEntry("0.17", true, false, "Builds: Bots + Beacons", "factorio-017-book-builds-bot-beaconed", "circuits, gears, smelting"),
  blueprintEntry("0.18", true, true, "Bot MEF/Mall (MojoD ME3 Remix)", "factorio-018-book-mef", "make everything factory, logic, circuits, shopping"),
  blueprintEntry("0.17", true, false, "Bot MEF/Mall (MojoD ME3 Remix)", "factorio-017-book-mef-mojod-me3-remix", "make everything factory, logic, circuits, shopping"),
  blueprintEntry("0.17", true, false, "Bot MSF (WIP)", "factorio-017-book-msf", "make science factory, logic, shopping, research"),
  blueprintEntry("0.17", true, false, "Rails 2 Lane RHD (MojoD Remix)", "factorio-017-book-rails-2-lane-rhd-mojod-remix", "train, intersection"),
  blueprintEntry("0.17", true, false, "PAX Stations", "factorio-017-book-pax-stations", "player access, "),
  blueprintEntry("0.17", true, false, "Spawn Area", "factorio-017-book-spawn"),
  // blueprintEntry("0.18", true, false, "Name", "Filename", "Search, Tags"),
];
