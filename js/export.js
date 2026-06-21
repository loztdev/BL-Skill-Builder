/* Two export formats: compact (names + point counts) and full (with descriptions). */
const BLExport = (() => {
  function header() {
    const g = BLState.getCurrentGame();
    const ch = BLState.getCurrentCharacter();
    const lines = [`${g.gameName} — ${ch.name}`, `Total Points Spent: ${BLState.totalPointsSpent()}`, ""];
    return lines;
  }

  function compact() {
    const ch = BLState.getCurrentCharacter();
    if (!ch) return "";
    const lines = header();

    ch.trees.forEach((tree) => {
      lines.push(`== ${tree.name} (${BLState.pointsInTree(tree)} pts) ==`);
      tree.skills
        .slice()
        .sort((a, b) => a.tier - b.tier || (a.col || 0) - (b.col || 0))
        .forEach((skill) => {
          const pts = BLState.getPoints(skill.id);
          lines.push(`${skill.name} [${pts}/${skill.maxPoints}]`);
        });
      lines.push("");
    });

    return lines.join("\n").trim() + "\n";
  }

  function full() {
    const ch = BLState.getCurrentCharacter();
    if (!ch) return "";
    const lines = header();

    ch.trees.forEach((tree) => {
      lines.push(`== ${tree.name} (${BLState.pointsInTree(tree)} pts) ==`);
      tree.skills
        .slice()
        .sort((a, b) => a.tier - b.tier || (a.col || 0) - (b.col || 0))
        .forEach((skill) => {
          const pts = BLState.getPoints(skill.id);
          lines.push(`${skill.name} [${pts}/${skill.maxPoints}]`);
          if (skill.description) lines.push(`  ${skill.description}`);
          (skill.ranks || []).forEach((text, i) => {
            const marker = i < pts ? "x" : " ";
            lines.push(`  [${marker}] Rank ${i + 1}: ${text}`);
          });
          lines.push("");
        });
    });

    return lines.join("\n").trim() + "\n";
  }

  function download(text, filename) {
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  return { compact, full, download };
})();
