/* Renders game tabs, character tabs, skill trees, and the points summary. */
const BLRender = (() => {
  function renderGameTabs(onSelect) {
    const wrap = document.getElementById("gameTabs");
    wrap.innerHTML = "";
    BLState.games().forEach((g) => {
      const btn = document.createElement("button");
      btn.className = "tab-btn";
      btn.textContent = g.gameName;
      btn.dataset.gameId = g.gameId;
      btn.addEventListener("click", () => onSelect(g.gameId));
      wrap.appendChild(btn);
    });
  }

  function highlightActiveGameTab(gameId) {
    document.querySelectorAll("#gameTabs .tab-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.gameId === gameId);
    });
  }

  function renderCharTabs(gameId, onSelect) {
    const wrap = document.getElementById("charTabs");
    wrap.innerHTML = "";
    const g = BLState.game(gameId);
    if (!g) return;
    g.characters.forEach((c) => {
      const btn = document.createElement("button");
      btn.className = "tab-btn";
      btn.textContent = c.name;
      btn.dataset.charId = c.id;
      btn.addEventListener("click", () => onSelect(c.id));
      wrap.appendChild(btn);
    });
  }

  function highlightActiveCharTab(charId) {
    document.querySelectorAll("#charTabs .tab-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.charId === charId);
    });
  }

  function skillTypeClass(skill) {
    if (skill.type === "action") return "action-skill";
    return "";
  }

  function renderTrees(onSkillClick, onIncrement, onDecrement) {
    const wrap = document.getElementById("treesWrap");
    wrap.innerHTML = "";
    const ch = BLState.getCurrentCharacter();
    if (!ch) return;

    ch.trees.forEach((tree) => {
      const col = document.createElement("div");
      col.className = "tree-col";

      const h3 = document.createElement("h3");
      h3.textContent = tree.name;
      col.appendChild(h3);

      const ptsLine = document.createElement("div");
      ptsLine.className = "tree-points";
      ptsLine.textContent = `${BLState.pointsInTree(tree)} points spent`;
      col.appendChild(ptsLine);

      const tierCount = tree.tierThresholds.length;
      for (let tier = 0; tier < tierCount; tier++) {
        const tierBlock = document.createElement("div");
        tierBlock.className = "tier-block";

        const unlocked = BLState.isTierUnlocked(tree, tier);
        if (tier > 0) {
          const lockNote = document.createElement("div");
          lockNote.className = "tier-lock-note";
          lockNote.textContent = unlocked
            ? "Unlocked"
            : `Requires ${tree.tierThresholds[tier]} points in tree`;
          tierBlock.appendChild(lockNote);
        }

        const row = document.createElement("div");
        row.className = "skill-row";

        const skillsInTier = tree.skills
          .filter((s) => s.tier === tier)
          .sort((a, b) => (a.col || 0) - (b.col || 0));

        skillsInTier.forEach((skill) => {
          row.appendChild(renderSkillCard(skill, tree, unlocked, onSkillClick, onIncrement, onDecrement));
        });

        tierBlock.appendChild(row);
        col.appendChild(tierBlock);
      }

      wrap.appendChild(col);
    });
  }

  function renderSkillCard(skill, tree, unlocked, onSkillClick, onIncrement, onDecrement) {
    const current = BLState.getPoints(skill.id);
    const card = document.createElement("div");
    card.className = "skill-card " + skillTypeClass(skill);
    if (!unlocked) card.classList.add("locked");
    if (current >= skill.maxPoints) card.classList.add("maxed");

    const name = document.createElement("div");
    name.className = "skill-name";
    name.textContent = skill.name;
    card.appendChild(name);

    const pts = document.createElement("div");
    pts.className = "skill-points";
    pts.textContent = `[${current}/${skill.maxPoints}]`;
    card.appendChild(pts);

    const controls = document.createElement("div");
    controls.className = "skill-controls";

    const minusBtn = document.createElement("button");
    minusBtn.textContent = "-";
    minusBtn.disabled = !BLState.canDecrement(skill.id);
    minusBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      onDecrement(skill.id);
    });

    const plusBtn = document.createElement("button");
    plusBtn.textContent = "+";
    plusBtn.disabled = !BLState.canIncrement(skill.id);
    plusBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      onIncrement(skill.id);
    });

    controls.appendChild(minusBtn);
    controls.appendChild(plusBtn);
    card.appendChild(controls);

    card.addEventListener("click", () => onSkillClick(skill, tree));

    return card;
  }

  function renderPointsSummary() {
    const wrap = document.getElementById("pointsSummary");
    const ch = BLState.getCurrentCharacter();
    wrap.innerHTML = "";
    if (!ch) return;

    const h3 = document.createElement("h3");
    h3.textContent = "Points Allocated";
    wrap.appendChild(h3);

    ch.trees.forEach((tree) => {
      const row = document.createElement("div");
      row.className = "tree-tally";
      const label = document.createElement("span");
      label.textContent = tree.name;
      const value = document.createElement("b");
      value.textContent = BLState.pointsInTree(tree);
      row.appendChild(label);
      row.appendChild(value);
      wrap.appendChild(row);
    });

    const total = document.createElement("div");
    total.className = "total-tally";
    total.textContent = `Total: ${BLState.totalPointsSpent()}`;
    wrap.appendChild(total);
  }

  function renderSkillModal(skill, tree) {
    const modal = document.getElementById("skillModal");
    modal.innerHTML = "";

    const h2 = document.createElement("h2");
    h2.textContent = skill.name;
    modal.appendChild(h2);

    const meta = document.createElement("div");
    meta.className = "modal-meta";
    meta.textContent = `${tree.name} — Tier ${skill.tier + 1} — Max ${skill.maxPoints} points`;
    modal.appendChild(meta);

    if (skill.description) {
      const desc = document.createElement("p");
      desc.textContent = skill.description;
      modal.appendChild(desc);
    }

    (skill.ranks || []).forEach((text, i) => {
      const line = document.createElement("div");
      line.className = "rank-line";
      const b = document.createElement("b");
      b.textContent = `Rank ${i + 1}: `;
      line.appendChild(b);
      line.appendChild(document.createTextNode(text));
      modal.appendChild(line);
    });

    const closeBtn = document.createElement("button");
    closeBtn.className = "btn btn-ghost modal-close";
    closeBtn.textContent = "Close";
    closeBtn.addEventListener("click", () => {
      document.getElementById("skillModalBackdrop").classList.remove("open");
    });
    modal.appendChild(closeBtn);

    document.getElementById("skillModalBackdrop").classList.add("open");
  }

  return {
    renderGameTabs,
    highlightActiveGameTab,
    renderCharTabs,
    highlightActiveCharTab,
    renderTrees,
    renderPointsSummary,
    renderSkillModal,
  };
})();
