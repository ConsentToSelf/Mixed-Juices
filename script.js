function timeToMixJuice(name) {
  switch (name) {
    case "Pure Strawberry Joy":
      return 0.5;
    case "Energizer":
    case "Green Garden":
      return 1.5;
    case "Tropical Island":
      return 3;
    case "All or Nothing":
      return 5;
    default:
      return 2.5;
  }
}

function limesToCut(wedgesNeeded, limes) {
  let count = 0;
  for (let i = 0; i < limes.length; i++) {
    switch (limes[i]) {
      case "small":
        limes[i] = 6;
        break;
      case "medium":
        limes[i] = 8;
        break;
      case "large":
        limes[i] = 10;
        break;
    }
    if (wedgesNeeded >= 0) {
      count++;
      wedgesNeeded -= limes[i];
      if (wedgesNeeded - limes[i] < 0) {
        break;
      }
    }
  }
  return count;
}

console.log(limesToCut(25, ["small", "small", "large", "medium", "small"]));
