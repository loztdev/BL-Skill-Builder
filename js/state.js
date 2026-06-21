/* Central state: current selection + allocated points, keyed by skill id. */
const BLState = (() => {
  const GAME_ORDER = ["bl1", "bl2", "blps", "bl3", "wonderlands", "bl4"];

  let currentGameId = null;
  let currentCharId = null;
  let points = {}; // skillId -> number of points allocated

  function games() {
    return GAME_ORDER
      .map((id) => window.BL_DATA && window.BL_DATA[id])
      .filter(Boolean);
  }

  function game(gameId) {
    return window.BL_DATA && window.BL_DATA[gameId];
  }

  function character(gameId, charId) {
    const g = game(gameId);
    if (!g) return null;
    return g.characters.find((c) => c.id === charId) || null;
  }

  function setCurrent(gameId, charId) {
    currentGameId = gameId;
    currentCharId = charId;
    points = {};
  }

  function getCurrentGame() {
    return game(currentGameId);
  }

  function getCurrentCharacter() {
    return character(currentGameId, currentCharId);
  }

  function findSkill(skillId) {
    const ch = getCurrentCharacter();
    if (!ch) return null;
    for (const tree of ch.trees) {
      const skill = tree.skills.find((s) => s.id === skillId);
      if (skill) return { skill, tree };
    }
    return null;
  }

  function pointsInTree(tree) {
    return tree.skills.reduce((sum, s) => sum + (points[s.id] || 0), 0);
  }

  function isTierUnlocked(tree, tier) {
    if (tier === 0) return true;
    const threshold = tree.tierThresholds[tier];
    if (threshold === undefined) return true;
    return pointsInTree(tree) >= threshold;
  }

  function getPoints(skillId) {
    return points[skillId] || 0;
  }

  function canIncrement(skillId) {
    const found = findSkill(skillId);
    if (!found) return false;
    const { skill, tree } = found;
    const current = getPoints(skillId);
    if (current >= skill.maxPoints) return false;
    return isTierUnlocked(tree, skill.tier);
  }

  function canDecrement(skillId) {
    return getPoints(skillId) > 0;
  }

  function increment(skillId) {
    if (!canIncrement(skillId)) return false;
    points[skillId] = getPoints(skillId) + 1;
    return true;
  }

  function decrement(skillId) {
    if (!canDecrement(skillId)) return false;
    const found = findSkill(skillId);
    points[skillId] = getPoints(skillId) - 1;
    // Cascade: zero out points in lower tiers that are now locked, and any skill points that exceed unlock state.
    if (found) {
      const { tree } = found;
      let changed = true;
      while (changed) {
        changed = false;
        tree.skills.forEach((s) => {
          if (getPoints(s.id) > 0 && !isTierUnlocked(tree, s.tier)) {
            points[s.id] = 0;
            changed = true;
          }
        });
      }
    }
    return true;
  }

  function reset() {
    points = {};
  }

  function totalPointsSpent() {
    return Object.values(points).reduce((a, b) => a + b, 0);
  }

  return {
    games,
    game,
    character,
    setCurrent,
    getCurrentGame,
    getCurrentCharacter,
    findSkill,
    pointsInTree,
    isTierUnlocked,
    getPoints,
    canIncrement,
    canDecrement,
    increment,
    decrement,
    reset,
    totalPointsSpent,
  };
})();
