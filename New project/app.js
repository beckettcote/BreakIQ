const STORAGE_KEY = "breakiq-data-v1";
const MORNING_HOURS = [6, 7, 8, 9];
const METERS_TO_FEET = 3.28084;

const builtInSpots = [
  {
    id: "crescent-beach",
    name: "Crescent Beach",
    bestTide: "mid",
    latitude: 43.5634,
    longitude: -70.2004,
    builtIn: true,
    description: "Remote and fickle. Best on strong E swells in winter when energy pushes through Fishermans Island Passage and lights up lippy rights and lefts in the bay.",
    profileDefaults: {
      "Best swell": "Strong E swell",
      "Best size": "4-6 ft",
      "Best wind": "Light W-NW or low wind",
      "Best tide": "mid"
    }
  },
  {
    id: "reid-state-park",
    name: "Reid State Park",
    bestTide: "mid",
    latitude: 43.8188,
    longitude: -69.7342,
    builtIn: true,
    description: "South-east facing stretch that likes winter ESE swell. Usually a bit messy but can offer good lefts and rights over shifting banks away from bigger Southern Maine crowds.",
    profileDefaults: {
      "Best swell": "ESE swell",
      "Best size": "3-5 ft",
      "Best wind": "Light W-NW",
      "Best tide": "mid"
    }
  },
  {
    id: "popham-beach",
    name: "Popham Beach",
    bestTide: "mid",
    latitude: 43.7563,
    longitude: -69.7869,
    builtIn: true,
    description: "Rivermouths and sandbars positioned for fall and winter hurricane swell. Best around chest to head high, with occasional empty barrels when the banks line up.",
    profileDefaults: {
      "Best swell": "Fall and winter hurricane swell",
      "Best size": "Chest to head high",
      "Best wind": "W-NW offshore",
      "Best tide": "mid"
    }
  },
  {
    id: "higgins-beach",
    name: "Higgins Beach",
    bestTide: "low",
    latitude: 43.5478,
    longitude: -70.2903,
    builtIn: true,
    description: "Open south-facing bay that can light up on hurricane swell. Usually sloppy, but when it turns on it can handle serious size and long walls.",
    profileDefaults: {
      "Best swell": "S hurricane swell",
      "Best size": "Head high to triple overhead",
      "Best wind": "Light W-NW offshore",
      "Best tide": "low"
    }
  },
  {
    id: "scarborough-beach",
    name: "Scarborough Beach",
    bestTide: "mid",
    latitude: 43.5465,
    longitude: -70.3334,
    builtIn: true,
    description: "Likes summer E and ESE swell for friendly A-frame peaks. Usually a good beginner option and less reliable on straight south swell.",
    profileDefaults: {
      "Best swell": "E to ESE swell",
      "Best size": "2-4 ft",
      "Best wind": "Light W-NW",
      "Best tide": "mid"
    }
  },
  {
    id: "fortunes-rocks",
    name: "Fortunes Rocks",
    bestTide: "mid",
    latitude: 43.4766,
    longitude: -70.3652,
    builtIn: true,
    description: "Winter spot that can throw curling A-frames in the 6-8 ft range. The right is generally better and it wants a proper offshore to clean up.",
    profileDefaults: {
      "Best swell": "Winter ESE swell",
      "Best size": "6-8 ft",
      "Best wind": "Strong offshore W-NW",
      "Best tide": "mid"
    }
  },
  {
    id: "goochs-beach",
    name: "Gooch's Beach",
    bestTide: "mid",
    latitude: 43.3508,
    longitude: -70.4742,
    builtIn: true,
    description: "Main Kennebunk beach. Winter NW offshores can groom mid-Atlantic south swell into fast, challenging drops and hollow sections.",
    profileDefaults: {
      "Best swell": "S swell",
      "Best size": "3-6 ft",
      "Best wind": "NW offshore",
      "Best tide": "mid"
    }
  },
  {
    id: "wells-beach",
    name: "Wells Beach",
    bestTide: "mid",
    latitude: 43.3166,
    longitude: -70.5702,
    builtIn: true,
    description: "Beginner-friendly stretch that likes S and SSE swell, especially near the north-end breakwater. Further south can stay empty with peaks of all shapes.",
    profileDefaults: {
      "Best swell": "S to SSE swell",
      "Best size": "2-4 ft",
      "Best wind": "W offshore",
      "Best tide": "mid"
    }
  },
  {
    id: "ogunquit-beach",
    name: "Ogunquit Beach",
    bestTide: "mid",
    latitude: 43.2522,
    longitude: -70.5963,
    builtIn: true,
    description: "Long sandy stretch with shifting banks. Medium fall swell can turn it into a playful all-level beachbreak when the sand is cooperating.",
    profileDefaults: {
      "Best swell": "Medium fall swell",
      "Best size": "2-4 ft",
      "Best wind": "Light W-NW",
      "Best tide": "mid"
    }
  },
  {
    id: "ogunquit-rivermouth",
    name: "Ogunquit Rivermouth",
    bestTide: "mid",
    latitude: 43.2488,
    longitude: -70.5979,
    builtIn: true,
    description: "Point-style rivermouth setup that loves S-SE winter swell. Left is quick and steep, while the right can run a long way into the estuary.",
    profileDefaults: {
      "Best swell": "S-SE winter swell",
      "Best size": "3-6 ft",
      "Best wind": "W-NW offshore",
      "Best tide": "mid"
    }
  },
  {
    id: "long-sands",
    name: "Long Sands",
    bestTide: "mid",
    latitude: 43.1432,
    longitude: -70.6334,
    builtIn: true,
    description: "Classic exposed New England beachbreak. Best on storm-driven east swell, fun on a longer board, but prone to closeouts and wind.",
    profileDefaults: {
      "Best swell": "Storm-driven E swell",
      "Best size": "2-5 ft",
      "Best wind": "Light W-NW",
      "Best tide": "mid"
    }
  }
];

const seedSessions = [
  {
    date: "2026-04-07",
    spot: "Higgins Beach",
    rating: 8,
    waveType: "peeling",
    size: "chest",
    crowd: "few",
    notes: "Lefts lined up on the inside bar.",
    conditions: { swellDirection: 124, swellHeight: 4.3, period: 11, windDirection: 320, windSpeed: 5, tide: "mid" }
  },
  {
    date: "2026-04-03",
    spot: "Popham Beach",
    rating: 7,
    waveType: "clean",
    size: "waist",
    crowd: "empty",
    notes: "Smaller but organized, better on the push.",
    conditions: { swellDirection: 118, swellHeight: 3.2, period: 10, windDirection: 305, windSpeed: 4, tide: "mid" }
  },
  {
    date: "2026-04-11",
    spot: "Ogunquit Rivermouth",
    rating: 8,
    waveType: "clean",
    size: "head",
    crowd: "crowded",
    notes: "Long walls if you got one early.",
    conditions: { swellDirection: 145, swellHeight: 5.5, period: 12, windDirection: 295, windSpeed: 7, tide: "low" }
  }
];

const form = document.querySelector("#session-form");
const spotForm = document.querySelector("#spot-form");
const forecastGrid = document.querySelector("#forecast-grid");
const currentGrid = document.querySelector("#current-grid");
const forecastToggle = document.querySelector("#forecast-toggle");
const currentToggle = document.querySelector("#current-toggle");
const profilesContainer = document.querySelector("#spot-profiles");
const sessionsContainer = document.querySelector("#session-list");
const heroSpot = document.querySelector("#hero-best-spot");
const heroSummary = document.querySelector("#hero-best-summary");
const ratingInput = form.elements.rating;
const ratingValue = document.querySelector("#rating-value");
const spotSelect = form.elements.spot;
const refreshButton = document.querySelector("#refresh-button");
const forecastStatus = document.querySelector("#forecast-status");
const currentStatus = document.querySelector("#current-status");
const sessionStatus = document.querySelector("#session-status");
const geocodeQuery = document.querySelector("#geocode-query");
const geocodeResults = document.querySelector("#geocode-results");
const searchSpotButton = document.querySelector("#search-spot-button");
const mapStatus = document.querySelector("#map-status");

let state = loadState();
let forecasts = {};
let currentConditions = {};
let showAllForecasts = false;
let showAllCurrent = false;
let map;
let customMarker;
let spotMarkers = [];

function getSessionId(session) {
  return [
    session.date,
    session.time || "",
    session.spot,
    session.rating,
    session.waveType,
    session.size,
    session.crowd,
    session.notes || ""
  ].join("|");
}

function loadState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return {
        sessions: Array.isArray(parsed.sessions) ? parsed.sessions : [...seedSessions],
        customSpots: Array.isArray(parsed.customSpots) ? parsed.customSpots : []
      };
    }
  } catch (error) {
    console.warn("Unable to load saved surf data, resetting.", error);
  }

  return { sessions: [...seedSessions], customSpots: [] };
}

function persistState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getAllSpots() {
  return [...builtInSpots, ...state.customSpots];
}

function slugify(value) {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function formatDirection(degrees) {
  const compass = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  return compass[Math.round((((degrees % 360) + 360) % 360) / 45) % 8];
}

function average(values) {
  if (!values.length) return 0;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function averageDirection(values) {
  if (!values.length) return 0;
  const radians = values.map((value) => (value * Math.PI) / 180);
  const sin = average(radians.map(Math.sin));
  const cos = average(radians.map(Math.cos));
  return (((Math.atan2(sin, cos) * 180) / Math.PI) + 360) % 360;
}

function angularDifference(a, b) {
  const diff = Math.abs(a - b) % 360;
  return diff > 180 ? 360 - diff : diff;
}

function mostCommon(items) {
  const counts = new Map();
  items.forEach((item) => counts.set(item, (counts.get(item) || 0) + 1));
  return [...counts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? "n/a";
}

function directionBand(degrees) {
  if (degrees >= 45 && degrees < 135) return "E";
  if (degrees >= 135 && degrees < 225) return "S";
  if (degrees >= 225 && degrees < 315) return "W";
  return "N";
}

function getSpotFacing(spot) {
  const text = `${spot.description || ""}`.toLowerCase();
  if (text.includes("south-east") || text.includes("southeast") || text.includes("se ")) return 135;
  if (text.includes("south-facing") || text.includes("faces almost plum south") || text.includes("faces almost directly south")) return 180;
  if (text.includes("east")) return 90;
  if (text.includes("south")) return 180;
  return 135;
}

function getOffshoreDirection(spot) {
  return (getSpotFacing(spot) + 180) % 360;
}

function classifySurfaceQuality(spot, forecast) {
  const offshoreDirection = getOffshoreDirection(spot);
  const offshoreDifference = angularDifference(forecast.windDirection, offshoreDirection);

  if (forecast.windSpeed <= 8 && offshoreDifference <= 45) return "clean";
  if (forecast.windSpeed <= 12 && offshoreDifference <= 75) return "clean";
  if (forecast.windSpeed <= 14) return "surfable_messy";
  return "not_surfable_messy";
}

function scoreByWaveHeightAndCleanliness(spot, forecast) {
  const surfaceQuality = classifySurfaceQuality(spot, forecast);
  const height = forecast.swellHeight;

  if (height < 1) {
    if (surfaceQuality === "clean") {
      return { baseScore: 1, maxScore: 1, surfaceQuality, reason: "Too small even though it looks clean" };
    }
    return { baseScore: 0, maxScore: 0, surfaceQuality, reason: "Too small and messy" };
  }

  if (height < 3) {
    if (surfaceQuality === "clean") {
      return { baseScore: 2, maxScore: 2, surfaceQuality, reason: "Clean but still on the smaller side" };
    }
    if (surfaceQuality === "surfable_messy") {
      return { baseScore: 1, maxScore: 1, surfaceQuality, reason: "Rideable but messy small surf" };
    }
    return { baseScore: 0, maxScore: 0, surfaceQuality, reason: "Small and not really surfable" };
  }

  if (height < 5) {
    if (surfaceQuality === "clean") {
      return { baseScore: 4, maxScore: 4, surfaceQuality, reason: "Good size and clean shape" };
    }
    if (surfaceQuality === "surfable_messy") {
      return { baseScore: 2, maxScore: 2, surfaceQuality, reason: "Messy but surfable mid-sized surf" };
    }
    return { baseScore: 0.5, maxScore: 1, surfaceQuality, reason: "Mid-sized but pretty junky" };
  }

  if (height <= 10) {
    if (surfaceQuality === "clean") {
      return { baseScore: 5, maxScore: 5, surfaceQuality, reason: "Solid size and clean" };
    }
    if (surfaceQuality === "surfable_messy") {
      return { baseScore: 2, maxScore: 2, surfaceQuality, reason: "Powerful but messy and harder to enjoy" };
    }
    return { baseScore: 1, maxScore: 1, surfaceQuality, reason: "Big but not really surfable" };
  }

  if (surfaceQuality === "clean") {
    return { baseScore: 4.5, maxScore: 5, surfaceQuality, reason: "Very large but still organized" };
  }
  if (surfaceQuality === "surfable_messy") {
    return { baseScore: 1.5, maxScore: 2, surfaceQuality, reason: "Oversized and messy" };
  }
  return { baseScore: 0, maxScore: 0, surfaceQuality, reason: "Too wild and disorganized" };
}

function getTomorrowDateString() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const year = tomorrow.getFullYear();
  const month = String(tomorrow.getMonth() + 1).padStart(2, "0");
  const day = String(tomorrow.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getTodayDateString() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getCurrentTimeString() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}

function dayDifferenceFromToday(dateString) {
  const today = new Date(`${getTodayDateString()}T00:00:00`);
  const target = new Date(`${dateString}T00:00:00`);
  return Math.round((today.getTime() - target.getTime()) / 86400000);
}

function getSpotSessions(spotName) {
  return state.sessions.filter((session) => session.spot === spotName);
}

function getGoodSessions(spotName) {
  return getSpotSessions(spotName).filter((session) => session.rating >= 7);
}

function buildSpotProfile(spotName) {
  const spot = getAllSpots().find((entry) => entry.name === spotName);
  const goodSessions = getGoodSessions(spotName);
  const source = goodSessions.length ? goodSessions : getSpotSessions(spotName);

  if (!source.length) {
    if (spot?.profileDefaults) {
      return {
        summary: spot.description || "Starter profile based on local spot notes.",
        metrics: spot.profileDefaults
      };
    }
    return {
      summary: "No sessions yet. Start logging and the pattern will tighten up fast.",
      metrics: { "Best swell": "Need data", "Best size": "Need data", "Best wind": "Need data", "Best tide": "Need data" }
    };
  }

  const swellDirections = source.map((session) => session.conditions.swellDirection);
  const windDirections = source.map((session) => session.conditions.windDirection);
  const swellHeights = source.map((session) => session.conditions.swellHeight);
  const tides = source.map((session) => session.conditions.tide);
  const sizes = source.map((session) => session.size);
  const avgSwellDir = Math.round(averageDirection(swellDirections));
  const avgWindDir = Math.round(averageDirection(windDirections));

  return {
    summary: `${spotName} gets better when the swell stays ${formatDirection(avgSwellDir)}-leaning and the wind doesn't ruin it.`,
    metrics: {
      "Best swell": `${formatDirection(avgSwellDir)} (${directionBand(avgSwellDir)} quadrant)`,
      "Best size": `${average(swellHeights).toFixed(1)} ft with ${mostCommon(sizes)} surf`,
      "Best wind": `${formatDirection(avgWindDir)} at lighter speeds`,
      "Best tide": mostCommon(tides)
    }
  };
}

function computeForecastScore(spotName) {
  const spot = getAllSpots().find((entry) => entry.name === spotName);
  const forecast = forecasts[spotName];
  return computeForecastScoreForSpot(spot, forecast);
}

function computeForecastScoreForSpot(spot, forecast) {
  const spotName = spot?.name;
  const profileSessions = getGoodSessions(spotName);

  if (!forecast) return { score: null, label: "Live forecast unavailable", why: ["Waiting for live weather data."] };
  if (!spot) return { score: 0, label: "No spot", why: [] };

  const surfability = scoreByWaveHeightAndCleanliness(spot, forecast);
  const preferredTide = spot.bestTide && spot.bestTide !== "unknown" ? spot.bestTide : null;

  if (!profileSessions.length) {
    const tideAdjustedBase = preferredTide && forecast.tide === preferredTide
      ? Math.min(surfability.maxScore, surfability.baseScore + 0.5)
      : surfability.baseScore;
    const learningScore = Math.max(0, Math.min(surfability.maxScore, Math.round(tideAdjustedBase)));
    const reasons = [surfability.reason];
    if (preferredTide && forecast.tide === preferredTide) {
      reasons.push(`Hits ${preferredTide} tide, which suits this spot`);
    } else if (preferredTide && forecast.tide !== preferredTide) {
      reasons.push(`Best on ${preferredTide} tide, but forecast is ${forecast.tide}`);
    }
    return {
      score: learningScore,
      label: scoreLabel(learningScore),
      why: [...reasons, "Still learning this spot from your logs."]
    };
  }

  const avgSwellDirection = averageDirection(profileSessions.map((session) => session.conditions.swellDirection));
  const avgSwellHeight = average(profileSessions.map((session) => session.conditions.swellHeight));
  const avgWindSpeed = average(profileSessions.map((session) => session.conditions.windSpeed));
  const avgWindDirection = averageDirection(profileSessions.map((session) => session.conditions.windDirection));
  const loggedTide = mostCommon(profileSessions.map((session) => session.conditions.tide));
  const targetTide = preferredTide || loggedTide;

  let matchBonus = 0;
  const why = [];

  if (angularDifference(forecast.swellDirection, avgSwellDirection) <= 20) {
    matchBonus += 0.75;
    why.push("Swell direction matches your good sessions");
  }
  if (Math.abs(forecast.swellHeight - avgSwellHeight) <= 1.5) {
    matchBonus += 0.5;
    why.push("Swell height is in the zone");
  }
  if (forecast.windSpeed <= avgWindSpeed + 3 && angularDifference(forecast.windDirection, avgWindDirection) <= 35) {
    matchBonus += 0.5;
    why.push("Wind looks friendly");
  }
  if (targetTide && forecast.tide === targetTide) {
    matchBonus += 0.5;
    why.push(`Tide lines up (${forecast.tide})`);
  } else if (targetTide && forecast.tide !== targetTide) {
    why.push(`Best on ${targetTide} tide, but forecast is ${forecast.tide}`);
  }

  why.unshift(surfability.reason);
  const boostedScore = surfability.baseScore + matchBonus;
  const score = Math.max(0, Math.min(surfability.maxScore, Math.round(boostedScore)));
  return { score, label: scoreLabel(score), why };
}

function scoreLabel(score) {
  const labels = { 5: "Firing", 4: "Very good", 3: "Worth checking", 2: "Maybe", 1: "Marginal", 0: "Probably off" };
  return labels[score] || "Probably off";
}

function formatBestTide(bestTide) {
  if (!bestTide || bestTide === "unknown") return "best tide unknown";
  return `best at ${bestTide} tide`;
}

function describeWaveFace(heightFeet) {
  if (!Number.isFinite(heightFeet) || heightFeet <= 0) {
    return "~0 ft face - Unknown";
  }
  if (heightFeet < 1.5) {
    return "~1 ft face - Ankle-shin high";
  }
  if (heightFeet < 2.5) {
    return "~2 ft face - Knee-thigh high";
  }
  if (heightFeet < 4) {
    return "~3 ft face - Waist-belly high";
  }
  if (heightFeet < 6.5) {
    return "~5 ft face - Head high";
  }
  if (heightFeet < 9) {
    return "~7 ft face - Overhead";
  }
  return "~10 ft face - Double overhead";
}

function formatHourRange(startDate, endDate) {
  const start = startDate.toLocaleTimeString("en-US", { hour: "numeric" });
  const end = endDate.toLocaleTimeString("en-US", { hour: "numeric" });
  return `${start}-${end}`;
}

function buildBestTomorrowWindow(spot, hourlyForecasts) {
  const preferredTide = spot.bestTide && spot.bestTide !== "unknown" ? spot.bestTide : null;
  const scored = hourlyForecasts
    .map((entry) => ({
      ...entry,
      prediction: computeForecastScoreForSpot(spot, entry.forecast)
    }))
    .filter((entry) => entry.prediction.score !== null);

  if (!scored.length) {
    return "Tomorrow window unavailable";
  }

  const tideMatched = preferredTide
    ? scored.filter((entry) => entry.forecast.tide === preferredTide && entry.prediction.score > 0)
    : scored;

  const pool = tideMatched.length ? tideMatched : scored;

  const bestScore = Math.max(...pool.map((entry) => entry.prediction.score));
  const bestEntries = pool.filter((entry) => entry.prediction.score === bestScore);
  const windows = [];
  let currentWindow = [bestEntries[0]];

  for (let index = 1; index < bestEntries.length; index += 1) {
    const previous = new Date(bestEntries[index - 1].time);
    const current = new Date(bestEntries[index].time);
    const hourGap = (current.getTime() - previous.getTime()) / 3600000;

    if (hourGap === 1) {
      currentWindow.push(bestEntries[index]);
    } else {
      windows.push(currentWindow);
      currentWindow = [bestEntries[index]];
    }
  }

  windows.push(currentWindow);
  const longestWindow = windows.sort((a, b) => b.length - a.length)[0];
  const startDate = new Date(longestWindow[0].time);
  const endDate = new Date(longestWindow[longestWindow.length - 1].time);
  endDate.setHours(endDate.getHours() + 1);
  const tideLabel = longestWindow[0].forecast.tide;
  const hasPreferredWindow = !preferredTide || tideMatched.length > 0;
  const windowLabel = longestWindow.length === 1
    ? `Best around ${startDate.toLocaleTimeString("en-US", { hour: "numeric" })}`
    : `Best ${formatHourRange(startDate, endDate)}`;

  if (preferredTide && !hasPreferredWindow) {
    return `No ideal ${preferredTide}-tide window tomorrow`;
  }

  return preferredTide
    ? `${windowLabel} on ${preferredTide} tide`
    : `${windowLabel} on ${tideLabel} tide`;
}

function renderForecasts() {
  forecastGrid.innerHTML = "";
  const template = document.querySelector("#forecast-card-template");

  const results = getAllSpots()
    .map((spot) => ({ spot, forecast: forecasts[spot.name], prediction: computeForecastScore(spot.name) }))
    .sort((a, b) => (b.prediction.score ?? -1) - (a.prediction.score ?? -1));

  const visibleResults = showAllForecasts ? results : results.slice(0, 4);

  visibleResults.forEach(({ spot, forecast, prediction }) => {
    const node = template.content.firstElementChild.cloneNode(true);
    node.querySelector(".forecast-spot").textContent = spot.name;
    node.querySelector(".forecast-score").textContent = prediction.score === null ? "-/5" : `${prediction.score}/5`;
    node.querySelector(".forecast-window").textContent = prediction.score === null ? "Live forecast unavailable" : (forecast?.bestWindow || "Best window loading");
    node.querySelector(".forecast-details").textContent = forecast
      ? `${forecast.swellHeight.toFixed(1)} ft @ ${forecast.period.toFixed(1)}s from ${formatDirection(forecast.swellDirection)} with ${forecast.windSpeed.toFixed(0)} mph ${formatDirection(forecast.windDirection)} wind on a ${forecast.tide} tide.`
      : "Waiting for live marine and weather data for this spot.";

    const tagContainer = node.querySelector(".forecast-tags");
    const faceTag = document.createElement("span");
    faceTag.className = "tag";
    faceTag.textContent = describeWaveFace(forecast.swellHeight);
    tagContainer.append(faceTag);

    prediction.why.forEach((reason) => {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = reason;
      tagContainer.append(tag);
    });

    if (forecast?.source) {
      const sourceTag = document.createElement("span");
      sourceTag.className = "tag";
      sourceTag.textContent = forecast.source;
      tagContainer.append(sourceTag);
    }

    if (!prediction.why.length && prediction.score !== null) {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = "Needs more matching sessions";
      tagContainer.append(tag);
    }

    forecastGrid.append(node);
  });

  forecastToggle.textContent = results.length > 4 && !showAllForecasts ? "See all spots" : "Show fewer";
  forecastToggle.hidden = results.length <= 4;

  const top = results[0];
  if (top) {
    heroSpot.textContent = top.prediction.score === null ? "Live forecast loading" : `${top.spot.name} ${top.prediction.score}/5`;
    heroSummary.textContent = top.prediction.score === null
      ? "Waiting for live marine and weather data before ranking tomorrow's spots."
      : `${top.prediction.label}. ${top.prediction.why[0] || "Still learning this spot from your logs."}`;
  }
}

function renderCurrentConditions() {
  currentGrid.innerHTML = "";
  const template = document.querySelector("#current-card-template");

  const results = getAllSpots().map((spot) => ({ spot, current: currentConditions[spot.name] || null }))
    .sort((a, b) => {
      const aScore = a.current ? scoreByWaveHeightAndCleanliness(a.spot, a.current).baseScore : -1;
      const bScore = b.current ? scoreByWaveHeightAndCleanliness(b.spot, b.current).baseScore : -1;
      return bScore - aScore;
    });

  const visibleResults = showAllCurrent ? results : results.slice(0, 4);

  visibleResults.forEach(({ spot, current }) => {
    const currentData = current || null;
    const surfability = currentData ? scoreByWaveHeightAndCleanliness(spot, currentData) : null;
    const node = template.content.firstElementChild.cloneNode(true);
    node.querySelector(".forecast-spot").textContent = spot.name;
    node.querySelector(".forecast-score").textContent = surfability ? `${Math.round(surfability.baseScore)}/5` : "-/5";
    node.querySelector(".forecast-window").textContent = currentData ? `Observed around ${currentData.observedAt}` : "Current conditions unavailable";
    node.querySelector(".forecast-details").textContent = currentData
      ? `${currentData.swellHeight.toFixed(1)} ft @ ${currentData.period.toFixed(1)}s from ${formatDirection(currentData.swellDirection)} with ${currentData.windSpeed.toFixed(0)} mph ${formatDirection(currentData.windDirection)} wind on a ${currentData.tide} tide.`
      : "Waiting for live marine and weather data for this spot.";

    const tagContainer = node.querySelector(".forecast-tags");
    if (currentData) {
      const faceTag = document.createElement("span");
      faceTag.className = "tag";
      faceTag.textContent = describeWaveFace(currentData.swellHeight);
      tagContainer.append(faceTag);
    }

    (currentData ? [surfability.reason, currentData.source] : ["Waiting for live weather data."]).forEach((text) => {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = text;
      tagContainer.append(tag);
    });

    currentGrid.append(node);
  });

  currentToggle.textContent = results.length > 4 && !showAllCurrent ? "See all spots" : "Show fewer";
  currentToggle.hidden = results.length <= 4;
}

function renderProfiles() {
  profilesContainer.innerHTML = "";
  const template = document.querySelector("#profile-card-template");

  getAllSpots().forEach((spot) => {
    const profile = buildSpotProfile(spot.name);
    const node = template.content.firstElementChild.cloneNode(true);
    node.querySelector(".profile-spot").textContent = spot.name;
    node.querySelector(".profile-summary").textContent = profile.summary;
    const removeButton = node.querySelector(".profile-remove-button");

    if (!spot.builtIn) {
      removeButton.hidden = false;
      removeButton.dataset.removeSpotId = spot.id;
    }

    const metrics = node.querySelector(".profile-metrics");
    Object.entries(profile.metrics).forEach(([label, value]) => {
      const row = document.createElement("div");
      const dt = document.createElement("dt");
      const dd = document.createElement("dd");
      dt.textContent = label;
      dd.textContent = value;
      row.append(dt, dd);
      metrics.append(row);
    });

    profilesContainer.append(node);
  });
}

function renderSessions() {
  sessionsContainer.innerHTML = "";
  const template = document.querySelector("#session-card-template");
  const sessions = [...state.sessions].sort((a, b) => new Date(`${b.date}T12:00:00`) - new Date(`${a.date}T12:00:00`));

  if (!sessions.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "No sessions logged yet.";
    sessionsContainer.append(empty);
    return;
  }

  sessions.forEach((session) => {
    const node = template.content.firstElementChild.cloneNode(true);
    const dateLabel = new Date(`${session.date}T12:00:00`).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
    node.querySelector(".session-date").textContent = session.time ? `${dateLabel} • ${session.time}` : dateLabel;
    node.querySelector(".session-spot").textContent = session.spot;
    node.querySelector(".session-rating").textContent = `${session.rating}/10`;
    node.querySelector(".session-meta").textContent = `${session.waveType} • ${session.size} • ${session.crowd}`;
    node.querySelector(".session-notes").textContent = session.notes || "No notes";

    const container = node.querySelector(".session-conditions");
    [
      `${session.conditions.swellHeight} ft @ ${session.conditions.period}s`,
      `${formatDirection(session.conditions.swellDirection)} swell`,
      `${formatDirection(session.conditions.windDirection)} wind ${session.conditions.windSpeed} mph`,
      `${session.conditions.tide} tide`
    ].forEach((item) => {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = item;
      container.append(tag);
    });

    node.querySelector(".session-delete-button").dataset.sessionId = getSessionId(session);

    sessionsContainer.append(node);
  });
}

function renderSpotOptions() {
  spotSelect.innerHTML = "";
  getAllSpots().forEach((spot) => {
    const option = document.createElement("option");
    option.value = spot.name;
    option.textContent = spot.builtIn ? `${spot.name} (built-in)` : `${spot.name} (custom)`;
    spotSelect.append(option);
  });
}

function render() {
  renderSpotOptions();
  renderForecasts();
  renderCurrentConditions();
  renderProfiles();
  renderSessions();
  redrawSpotMarkers();
}

function resetSessionForm() {
  form.reset();
  form.elements.date.value = new Date().toISOString().slice(0, 10);
  form.elements.time.value = "07:00";
  form.elements.spot.value = getAllSpots()[0]?.name || "";
  form.elements.rating.value = "7";
  ratingValue.textContent = "7 / 10";
}

function resetSpotForm() {
  spotForm.reset();
  spotForm.elements.bestTide.value = "unknown";
}

function pickWindowIndices(times, hours = MORNING_HOURS) {
  const tomorrow = getTomorrowDateString();
  const indices = times.reduce((matches, time, index) => {
    const [datePart, hourPart] = time.split("T");
    const hour = Number(hourPart.slice(0, 2));
    if (datePart === tomorrow && hours.includes(hour)) matches.push(index);
    return matches;
  }, []);

  if (indices.length) return indices;

  return times
    .map((time, index) => ({ time, index }))
    .filter(({ time }) => time.startsWith(tomorrow))
    .slice(0, 4)
    .map(({ index }) => index);
}

function pickNearestTimeIndex(times, dateString, timeString) {
  const target = new Date(`${dateString}T${timeString}:00`);
  let closestIndex = -1;
  let closestDistance = Infinity;

  times.forEach((time, index) => {
    const candidate = new Date(time);
    const distance = Math.abs(candidate.getTime() - target.getTime());
    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  });

  return closestIndex;
}

function categorizeTide(windowLevels, allLevels) {
  if (!windowLevels.length || !allLevels.length) return "mid";
  const minimum = Math.min(...allLevels);
  const maximum = Math.max(...allLevels);
  const spread = maximum - minimum;
  if (spread < 0.15) return "mid";

  const position = (average(windowLevels) - minimum) / spread;
  if (position <= 0.33) return "low";
  if (position >= 0.66) return "high";
  return "mid";
}

function buildMarineUrl(spot) {
  const params = new URLSearchParams({
    latitude: String(spot.latitude),
    longitude: String(spot.longitude),
    hourly: "wave_height,wave_direction,wave_period,sea_level_height_msl",
    timezone: "auto",
    forecast_days: "3"
  });
  return `https://marine-api.open-meteo.com/v1/marine?${params.toString()}`;
}

function buildWeatherUrl(spot) {
  const params = new URLSearchParams({
    latitude: String(spot.latitude),
    longitude: String(spot.longitude),
    hourly: "wind_speed_10m,wind_direction_10m",
    wind_speed_unit: "mph",
    timezone: "auto",
    forecast_days: "3"
  });
  return `https://api.open-meteo.com/v1/forecast?${params.toString()}`;
}

function buildHistoricalMarineUrl(spot, dateString) {
  const daysBack = Math.max(0, dayDifferenceFromToday(dateString)) + 1;
  const params = new URLSearchParams({
    latitude: String(spot.latitude),
    longitude: String(spot.longitude),
    hourly: "wave_height,wave_direction,wave_period,sea_level_height_msl",
    timezone: "auto",
    past_days: String(daysBack),
    forecast_days: "1"
  });
  return `https://marine-api.open-meteo.com/v1/marine?${params.toString()}`;
}

function buildHistoricalWeatherUrl(spot, dateString) {
  const params = new URLSearchParams({
    latitude: String(spot.latitude),
    longitude: String(spot.longitude),
    hourly: "wind_speed_10m,wind_direction_10m",
    wind_speed_unit: "mph",
    start_date: dateString,
    end_date: dateString,
    timezone: "auto"
  });
  return `https://archive-api.open-meteo.com/v1/archive?${params.toString()}`;
}

async function fetchSpotForecast(spot) {
  const [marineResponse, weatherResponse] = await Promise.all([fetch(buildMarineUrl(spot)), fetch(buildWeatherUrl(spot))]);
  if (!marineResponse.ok || !weatherResponse.ok) throw new Error(`Forecast request failed for ${spot.name}`);

  const marineData = await marineResponse.json();
  const weatherData = await weatherResponse.json();
  const marineIndices = pickWindowIndices(marineData.hourly?.time ?? []);
  const weatherIndices = pickWindowIndices(weatherData.hourly?.time ?? []);
  const tomorrow = getTomorrowDateString();

  const waveHeights = marineIndices.map((index) => marineData.hourly.wave_height[index]).filter(Number.isFinite);
  const waveDirections = marineIndices.map((index) => marineData.hourly.wave_direction[index]).filter(Number.isFinite);
  const wavePeriods = marineIndices.map((index) => marineData.hourly.wave_period[index]).filter(Number.isFinite);
  const seaLevels = marineIndices.map((index) => marineData.hourly.sea_level_height_msl[index]).filter(Number.isFinite);
  const allSeaLevels = (marineData.hourly?.sea_level_height_msl ?? []).filter(Number.isFinite);
  const windSpeeds = weatherIndices.map((index) => weatherData.hourly.wind_speed_10m[index]).filter(Number.isFinite);
  const windDirections = weatherIndices.map((index) => weatherData.hourly.wind_direction_10m[index]).filter(Number.isFinite);

  if (!waveHeights.length || !waveDirections.length || !wavePeriods.length || !windSpeeds.length || !windDirections.length) {
    throw new Error(`Incomplete forecast data for ${spot.name}`);
  }

  const tomorrowTimes = marineData.hourly?.time ?? [];
  const hourlyForecasts = tomorrowTimes
    .map((time, index) => ({ time, index }))
    .filter(({ time }) => time.startsWith(tomorrow))
    .map(({ time, index }) => {
      const matchingWeatherIndex = pickNearestTimeIndex(weatherData.hourly?.time ?? [], time.slice(0, 10), time.slice(11, 16));
      const seaLevel = marineData.hourly?.sea_level_height_msl?.[index];
      const allSeaLevels = (marineData.hourly?.sea_level_height_msl ?? []).filter(Number.isFinite);
      const forecast = {
        swellDirection: Number(marineData.hourly?.wave_direction?.[index]),
        swellHeight: Number(marineData.hourly?.wave_height?.[index]) * METERS_TO_FEET,
        period: Number(marineData.hourly?.wave_period?.[index]),
        windDirection: Number(weatherData.hourly?.wind_direction_10m?.[matchingWeatherIndex]),
        windSpeed: Number(weatherData.hourly?.wind_speed_10m?.[matchingWeatherIndex]),
        tide: Number.isFinite(seaLevel) ? categorizeTide([seaLevel], allSeaLevels) : "mid",
        source: "Live Open-Meteo forecast"
      };
      return { time, forecast };
    })
    .filter((entry) =>
      [entry.forecast.swellDirection, entry.forecast.swellHeight, entry.forecast.period, entry.forecast.windDirection, entry.forecast.windSpeed]
        .every(Number.isFinite)
    );

  return {
    swellDirection: Math.round(averageDirection(waveDirections)),
    swellHeight: average(waveHeights) * METERS_TO_FEET,
    period: average(wavePeriods),
    windDirection: Math.round(averageDirection(windDirections)),
    windSpeed: average(windSpeeds),
    tide: categorizeTide(seaLevels, allSeaLevels),
    bestWindow: buildBestTomorrowWindow(spot, hourlyForecasts),
    source: "Live Open-Meteo forecast"
  };
}

async function fetchCurrentSpotConditions(spot) {
  const [marineResponse, weatherResponse] = await Promise.all([fetch(buildMarineUrl(spot)), fetch(buildWeatherUrl(spot))]);
  if (!marineResponse.ok || !weatherResponse.ok) throw new Error(`Current condition request failed for ${spot.name}`);

  const marineData = await marineResponse.json();
  const weatherData = await weatherResponse.json();
  const dateString = getTodayDateString();
  const timeString = getCurrentTimeString();
  const marineTimes = marineData.hourly?.time ?? [];
  const weatherTimes = weatherData.hourly?.time ?? [];
  const marineIndex = pickNearestTimeIndex(marineTimes, dateString, timeString);
  const weatherIndex = pickNearestTimeIndex(weatherTimes, dateString, timeString);

  if (marineIndex < 0 || weatherIndex < 0) {
    throw new Error(`No current hourly condition found for ${spot.name}`);
  }

  const seaLevels = (marineData.hourly?.sea_level_height_msl ?? []).filter(Number.isFinite);
  const currentSeaLevel = marineData.hourly?.sea_level_height_msl?.[marineIndex];
  const swellHeightMeters = marineData.hourly?.wave_height?.[marineIndex];
  const swellDirection = marineData.hourly?.wave_direction?.[marineIndex];
  const period = marineData.hourly?.wave_period?.[marineIndex];
  const windSpeed = weatherData.hourly?.wind_speed_10m?.[weatherIndex];
  const windDirection = weatherData.hourly?.wind_direction_10m?.[weatherIndex];

  if (![swellHeightMeters, swellDirection, period, windSpeed, windDirection].every(Number.isFinite)) {
    throw new Error(`Incomplete current conditions for ${spot.name}`);
  }

  const observedDate = new Date(marineTimes[marineIndex]);
  const observedAt = observedDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit"
  });

  return {
    swellDirection: Number(swellDirection),
    swellHeight: Number(swellHeightMeters) * METERS_TO_FEET,
    period: Number(period),
    windDirection: Number(windDirection),
    windSpeed: Number(windSpeed),
    tide: Number.isFinite(currentSeaLevel) ? categorizeTide([currentSeaLevel], seaLevels) : "mid",
    observedAt,
    source: "Live Open-Meteo current hour"
  };
}

async function fetchSessionConditions(spot, dateString, timeString) {
  const dayDiff = dayDifferenceFromToday(dateString);
  const marineUrl = dayDiff >= 0 ? buildHistoricalMarineUrl(spot, dateString) : buildMarineUrl(spot);
  const weatherUrl = dayDiff >= 0 ? buildHistoricalWeatherUrl(spot, dateString) : buildWeatherUrl(spot);

  const [marineResponse, weatherResponse] = await Promise.all([fetch(marineUrl), fetch(weatherUrl)]);
  if (!marineResponse.ok || !weatherResponse.ok) {
    throw new Error(`Condition lookup failed for ${spot.name}`);
  }

  const marineData = await marineResponse.json();
  const weatherData = await weatherResponse.json();
  const marineTimes = marineData.hourly?.time ?? [];
  const weatherTimes = weatherData.hourly?.time ?? [];
  const marineIndex = pickNearestTimeIndex(marineTimes, dateString, timeString);
  const weatherIndex = pickNearestTimeIndex(weatherTimes, dateString, timeString);

  if (marineIndex < 0 || weatherIndex < 0) {
    throw new Error(`No matching hourly condition found for ${spot.name}`);
  }

  const seaLevels = (marineData.hourly?.sea_level_height_msl ?? []).filter(Number.isFinite);
  const currentSeaLevel = marineData.hourly?.sea_level_height_msl?.[marineIndex];
  const swellHeightMeters = marineData.hourly?.wave_height?.[marineIndex];
  const swellDirection = marineData.hourly?.wave_direction?.[marineIndex];
  const period = marineData.hourly?.wave_period?.[marineIndex];
  const windSpeed = weatherData.hourly?.wind_speed_10m?.[weatherIndex];
  const windDirection = weatherData.hourly?.wind_direction_10m?.[weatherIndex];

  if (![swellHeightMeters, swellDirection, period, windSpeed, windDirection].every(Number.isFinite)) {
    throw new Error(`Incomplete session conditions for ${spot.name}`);
  }

  return {
    swellDirection: Number(swellDirection),
    swellHeight: Number(swellHeightMeters) * METERS_TO_FEET,
    period: Number(period),
    windDirection: Number(windDirection),
    windSpeed: Number(windSpeed),
    tide: Number.isFinite(currentSeaLevel) ? categorizeTide([currentSeaLevel], seaLevels) : "mid"
  };
}

async function refreshForecasts() {
  const spots = getAllSpots();
  forecastStatus.textContent = "Loading live marine forecast...";
  currentStatus.textContent = "Loading current marine conditions...";
  refreshButton.disabled = true;

  try {
    const results = await Promise.all(
      spots.map(async (spot) => {
        const [forecast, current] = await Promise.all([fetchSpotForecast(spot), fetchCurrentSpotConditions(spot)]);
        return [spot.name, { forecast, current }];
      })
    );
    const merged = Object.fromEntries(results);
    forecasts = Object.fromEntries(Object.entries(merged).map(([name, value]) => [name, value.forecast]));
    currentConditions = Object.fromEntries(Object.entries(merged).map(([name, value]) => [name, value.current]));
    forecastStatus.textContent = `Live forecast loaded for ${getTomorrowDateString()} across ${spots.length} spots.`;
    currentStatus.textContent = `Current conditions updated around ${getCurrentTimeString()} across ${spots.length} spots.`;
  } catch (error) {
    console.error(error);
    forecasts = {};
    currentConditions = {};
    forecastStatus.textContent = "Live forecast failed to load.";
    currentStatus.textContent = "Current conditions failed to load.";
  } finally {
    refreshButton.disabled = false;
    renderForecasts();
    renderCurrentConditions();
  }
}

async function searchLocation() {
  const query = geocodeQuery.value.trim();
  geocodeResults.innerHTML = "";
  if (!query) return;

  searchSpotButton.disabled = true;
  try {
    const params = new URLSearchParams({ name: query, count: "5", language: "en", format: "json" });
    const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?${params.toString()}`);
    if (!response.ok) throw new Error("Geocoding failed");

    const data = await response.json();
    const results = data.results ?? [];

    if (!results.length) {
      geocodeResults.textContent = "No places found.";
      return;
    }

    results.forEach((result) => {
      const row = document.createElement("div");
      row.className = "search-result";

      const meta = document.createElement("div");
      const title = document.createElement("strong");
      title.textContent = result.name;
      const copy = document.createElement("div");
      copy.className = "search-meta";
      copy.textContent = `${result.admin1 || result.country} • ${Number(result.latitude).toFixed(4)}, ${Number(result.longitude).toFixed(4)}`;
      meta.append(title, copy);

      const button = document.createElement("button");
      button.className = "ghost-button";
      button.type = "button";
      button.textContent = "Use";
      button.addEventListener("click", () => {
        spotForm.elements.name.value = spotForm.elements.name.value || result.name;
        spotForm.elements.latitude.value = Number(result.latitude).toFixed(6);
        spotForm.elements.longitude.value = Number(result.longitude).toFixed(6);
        centerMap(Number(result.latitude), Number(result.longitude), `${result.name}`);
        mapStatus.textContent = `Using coordinates from search result: ${result.name}.`;
      });

      row.append(meta, button);
      geocodeResults.append(row);
    });
  } catch (error) {
    console.error(error);
    geocodeResults.textContent = "Search failed. Try again.";
  } finally {
    searchSpotButton.disabled = false;
  }
}

function centerMap(latitude, longitude, label) {
  if (!map) return;

  map.setView([latitude, longitude], 10);
  if (customMarker) {
    customMarker.setLatLng([latitude, longitude]).bindPopup(label);
  } else {
    customMarker = L.marker([latitude, longitude]).addTo(map).bindPopup(label);
  }
}

function redrawSpotMarkers() {
  if (!map) return;

  spotMarkers.forEach((marker) => marker.remove());
  spotMarkers = getAllSpots().map((spot) =>
    L.circleMarker([spot.latitude, spot.longitude], {
      radius: spot.builtIn ? 7 : 6,
      weight: 1,
      color: spot.builtIn ? "#bff25f" : "#7ce3cf",
      fillOpacity: 0.8
    })
      .addTo(map)
      .bindPopup(`${spot.name} • ${formatBestTide(spot.bestTide)}`)
  );
}

function initializeMap() {
  if (!window.L) {
    mapStatus.textContent = "Map library failed to load.";
    return;
  }

  map = L.map("spot-map").setView([43.8, -69.8], 7);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  map.on("click", (event) => {
    const { lat, lng } = event.latlng;
    spotForm.elements.latitude.value = lat.toFixed(6);
    spotForm.elements.longitude.value = lng.toFixed(6);
    centerMap(lat, lng, spotForm.elements.name.value || "New custom spot");
    mapStatus.textContent = `Picked coordinates ${lat.toFixed(4)}, ${lng.toFixed(4)} from the map.`;
  });

  redrawSpotMarkers();
}

function removeCustomSpot(spotId) {
  const target = state.customSpots.find((spot) => spot.id === spotId);
  if (!target) return;

  state.customSpots = state.customSpots.filter((spot) => spot.id !== spotId);
  state.sessions = state.sessions.filter((session) => session.spot !== target.name);
  delete forecasts[target.name];
  persistState();
  render();
}

function removeSession(sessionId) {
  state.sessions = state.sessions.filter((session) => getSessionId(session) !== sessionId);
  persistState();
  render();
  sessionStatus.textContent = "Session deleted.";
}

ratingInput.addEventListener("input", () => {
  ratingValue.textContent = `${ratingInput.value} / 10`;
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const spotName = formData.get("spot");
  const date = formData.get("date");
  const time = formData.get("time");
  const spot = getAllSpots().find((entry) => entry.name === spotName);
  if (!spot) return;

  sessionStatus.textContent = `Looking up conditions for ${spotName} on ${date} at ${time}...`;

  try {
    const conditions = await fetchSessionConditions(spot, date, time);

    state.sessions.push({
      date,
      time,
      spot: spotName,
      rating: Number(formData.get("rating")),
      waveType: formData.get("waveType"),
      size: formData.get("size"),
      crowd: formData.get("crowd"),
      notes: formData.get("notes").trim(),
      conditions
    });

    persistState();
    render();
    resetSessionForm();
    sessionStatus.textContent = `Saved session with auto-filled conditions for ${spotName}.`;
  } catch (error) {
    console.error(error);
    sessionStatus.textContent = "Could not pull conditions for that session. Try a recent date or a different time.";
  }
});

spotForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = spotForm.elements.name.value.trim();
  const latitude = Number(spotForm.elements.latitude.value);
  const longitude = Number(spotForm.elements.longitude.value);
  const bestTide = spotForm.elements.bestTide.value || "unknown";

  if (!name || !Number.isFinite(latitude) || !Number.isFinite(longitude)) return;
  if (getAllSpots().some((spot) => spot.name.toLowerCase() === name.toLowerCase())) {
    mapStatus.textContent = "That spot name already exists.";
    return;
  }

    state.customSpots.push({
      id: `${slugify(name)}-${Date.now()}`,
      name,
      latitude,
      longitude,
      bestTide,
      builtIn: false
    });

  persistState();
  render();
  resetSpotForm();
  mapStatus.textContent = `Added ${name}. Refreshing live forecast for the new spot...`;
  await refreshForecasts();
});

searchSpotButton.addEventListener("click", () => {
  searchLocation();
});

geocodeQuery.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    searchLocation();
  }
});

profilesContainer.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove-spot-id]");
  if (button) {
    event.preventDefault();
    removeCustomSpot(button.dataset.removeSpotId);
  }
});

sessionsContainer.addEventListener("click", (event) => {
  const button = event.target.closest(".session-delete-button");
  if (button) {
    removeSession(button.dataset.sessionId);
  }
});

forecastToggle.addEventListener("click", () => {
  showAllForecasts = !showAllForecasts;
  renderForecasts();
});

currentToggle.addEventListener("click", () => {
  showAllCurrent = !showAllCurrent;
  renderCurrentConditions();
});

refreshButton.addEventListener("click", () => {
  refreshForecasts();
});

initializeMap();
resetSessionForm();
resetSpotForm();
render();
refreshForecasts();
