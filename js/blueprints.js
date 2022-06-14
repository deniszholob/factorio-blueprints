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
  blueprintEntry("1.0", false, true, "Util: Belt Balancer: 4x4", "bp-balancer-4x4"),
  blueprintEntry("1.0", false, true, "Util: Belt Balancer: 8x8", "bp-balancer-8x8"),
  blueprintEntry("1.0", false, true, "Util: Train/Station Colors", "bp-train-station-colors", "train, rail, track"),
  blueprintEntry("1.0", true, false, "Starter: Burner City", "book-starter-burner-city", "drill"),
  blueprintEntry("1.0", true, false, "Starter: Burner/Basics", "book-starter-basics", "belt"),
  blueprintEntry("0.18", true, false, "Starter: MEF/Science", "book-starter-mef-science", ""),
  blueprintEntry("1.0", true, false, "Util: Smelting", "book-smelting", "furnace"),
  blueprintEntry("1.0", true, false, "Util: Mining", "book-mining"),
  blueprintEntry("1.0", true, false, "Util: Defense", "book-defense", "wall, turrets"),
  blueprintEntry("1.0", true, false, "Science: Belt", "book-science-belt", "research"),
  blueprintEntry("1.0", true, false, "Power: Steam", "book-power-steam", "boiler"),
  blueprintEntry("1.1.60", true, false, "Power: Solar", "book-power-solar", "accumulator"),
  blueprintEntry("1.0", true, false, "Power: Nuclear", "book-power-nuclear"),
  blueprintEntry("1.0", true, false, "Builds: Belt Bus", "book-builds-belt-bus", "circuits, gears, LDS, logistics"),
  blueprintEntry("0.18", true, false, "Builds: Belt Beaconed", "book-builds-belt-beaconed", "circuits, gears, LDS, logistics"),
  blueprintEntry("0.18", true, false, "Builds: Oil", "book-builds-oil", "petrol, sulfur, acid, plastic"),
  blueprintEntry("1.0", true, false, "Builds: Military", "book-builds-military"),
  blueprintEntry("0.18", true, false, "Builds: Bots + Beacons", "book-builds-bot-beaconed", "circuits, gears, smelting"),
  blueprintEntry("1.0", true, false, "Builds: Bots + Beacons + Trains (Super)", "book-builds-train-bot-super", "train, rail, track, circuits, gears, smelting, super, mega, giga"),
  blueprintEntry("1.1.60", true, true, "Bot MEF/Mall (MojoD + Rain9441 Remix)", "book-mef-bot-not-a-mall", "make everything factory, logic, circuits, shopping, science"),
  blueprintEntry("1.0", true, false, "Rails: 2 Lane RHD (MojoD Remix)", "book-rails-2-lane-rhd-mojod-remix", "train, rail, track, intersection"),
  blueprintEntry("1.0", true, false, "Rails: PAX Stations", "book-pax-stations", "player, access, train, rail, track, taxi"),
  blueprintEntry("1.0", true, false, "Rails: Outpost Stations", "book-rail-outpost-stations", "train, rail, track, taxi, mine, mining, ore"),
  blueprintEntry("1.0", true, false, "Util: Spawn Area", "book-spawn"),
  blueprintEntry("1.0", true, false, "Util: Tile Path Segments", "bp-path-segments", "tile, concrete, brick, walk"),
  blueprintEntry("1.0", true, false, "Game in a Book (Big, loads slow)", "book-gib-game-in-book", "GiB, factory"),
  blueprintEntry("1.0", true, false, "Game in a Book Progressions", "book-gib-progression", "GiB, factory"),
  blueprintEntry("0.17", true, false, "OLD: Builds: Oil", "factorio-017-book-builds-oil", "petrol, sulfur, acid, plastic"),
  blueprintEntry("0.17", true, false, "OLD: Bot MEF/Mall (MojoD ME3 Remix)", "factorio-017-book-mef-mojod-me3-remix", "make everything factory, logic, circuits, shopping"),
  blueprintEntry("0.17", true, false, "OLD: Bot MEF Science (WIP)", "factorio-017-book-msf", "make science factory, logic, shopping, research"),
  blueprintEntry("0.17", true, false, "OLD: Starter: Mini MEF/Mall", "factorio-017-book-starter-mini-mef", "belt"),
  // blueprintEntry("0.18",  true,   false,   "Name", "Filename", "Search, Tags"),
  //                version, isBook, hasIcon, name,   fileName,   tags
];
