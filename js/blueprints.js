function getRaw(name) {
  return "./blueprint-data/" + name + ".txt";
}

function getUrl(name) {
  return "https://github.com/deniszholob/factorio-blueprints/blob/master/blueprint-data/" + name + ".txt";
}

function getName(version, name) {
  return "Factorio v" + version + " - " + name;

}

function blueprintEntry(version, isBook, name, fileName) {
  return {
    "name": getName(version, name),
    "isBook": isBook,
    "url": getUrl(fileName),
    "raw": getRaw(fileName),
  };
}

export const blueprintData = [
  blueprintEntry("0.17", true, "Smelting", "factorio-017-book-smelting"),
  blueprintEntry("0.17", true, "Mining", "factorio-017-book-mining"),
  blueprintEntry("0.17", true, "Defence", "factorio-017-book-defence"),
  blueprintEntry("0.17", true, "Power: Steam", "factorio-017-book-power-steam"),
  blueprintEntry("0.17", true, "Power: Solar", "factorio-017-book-power-solar"),
  blueprintEntry("0.17", true, "Power: Nuclear", "factorio-017-book-power-nuclear"),
  blueprintEntry("0.17", true, "Builds: Starter/Mini MEF", "factorio-017-book-builds-starter-mini-mef"),
  blueprintEntry("0.17", true, "Builds: Bots + Beacons", "factorio-017-book-builds-bot-beaconed"),
  blueprintEntry("0.17", true, "Builds: Oil", "factorio-017-book-builds-oil"),
  blueprintEntry("0.17", true, "Builds: Military", "factorio-017-book-builds-military"),
  blueprintEntry("0.17", true, "MEF (MojoD ME3 Remix)", "factorio-017-book-mef-mojod-me3-remix"),
  blueprintEntry("0.17", true, "MSF (WIP)", "factorio-017-book-msf"),
  blueprintEntry("0.17", true, "Rails 2 Lane RHD (MojoD Remix)", "factorio-017-book-rails-2-lane-rhd-mojod-remix"),
  blueprintEntry("0.17", true, "PAX Stations", "factorio-017-book-pax-stations"),
  // blueprintEntry("0.17", true, "Name", "Filename"),
];
