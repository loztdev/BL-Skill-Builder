/* Wires together state, render, export, and the AI panel. */
(function () {
  function selectGame(gameId) {
    const g = BLState.game(gameId);
    if (!g || !g.characters.length) return;
    selectCharacter(gameId, g.characters[0].id);
    BLRender.highlightActiveGameTab(gameId);
  }

  function selectCharacter(gameId, charId) {
    BLState.setCurrent(gameId, charId);
    BLRender.renderCharTabs(gameId, (cid) => {
      selectCharacter(gameId, cid);
    });
    BLRender.highlightActiveCharTab(charId);
    refresh();
  }

  function refresh() {
    BLRender.renderTrees(onSkillClick, onIncrement, onDecrement);
    BLRender.renderPointsSummary();
  }

  function onSkillClick(skill, tree) {
    BLRender.renderSkillModal(skill, tree);
  }

  function onIncrement(skillId) {
    BLState.increment(skillId);
    refresh();
  }

  function onDecrement(skillId) {
    BLState.decrement(skillId);
    refresh();
  }

  function init() {
    BLRender.renderGameTabs(selectGame);
    const firstGame = BLState.games()[0];
    if (firstGame) selectGame(firstGame.gameId);

    document.getElementById("resetBtn").addEventListener("click", () => {
      BLState.reset();
      refresh();
    });

    document.getElementById("skillModalBackdrop").addEventListener("click", (e) => {
      if (e.target.id === "skillModalBackdrop") {
        e.target.classList.remove("open");
      }
    });

    document.getElementById("exportCompactBtn").addEventListener("click", () => {
      document.getElementById("exportOutput").value = BLExport.compact();
    });

    document.getElementById("exportFullBtn").addEventListener("click", () => {
      document.getElementById("exportOutput").value = BLExport.full();
    });

    document.getElementById("copyExportBtn").addEventListener("click", async () => {
      const text = document.getElementById("exportOutput").value;
      if (!text) return;
      await navigator.clipboard.writeText(text);
    });

    document.getElementById("downloadExportBtn").addEventListener("click", () => {
      const text = document.getElementById("exportOutput").value;
      if (!text) return;
      const ch = BLState.getCurrentCharacter();
      BLExport.download(text, `${ch ? ch.name.toLowerCase() : "build"}-skill-build.txt`);
    });

    initAiPanel();
  }

  function initAiPanel() {
    const panel = document.getElementById("aiPanel");
    const backdrop = document.getElementById("aiPanelBackdrop");
    const providerSelect = document.getElementById("aiProviderSelect");
    const modelInput = document.getElementById("aiModelInput");
    const keyInput = document.getElementById("aiKeyInput");
    const questionInput = document.getElementById("aiQuestionInput");
    const responseBox = document.getElementById("aiResponse");
    const sendBtn = document.getElementById("aiSendBtn");

    function loadProviderFields() {
      const providerId = providerSelect.value;
      const creds = BLLLM.loadCreds(providerId);
      keyInput.value = creds.apiKey;
      modelInput.value = creds.model || BLLLM.PROVIDERS[providerId].defaultModel;
    }

    providerSelect.addEventListener("change", loadProviderFields);
    loadProviderFields();

    function openPanel() {
      panel.classList.add("open");
      backdrop.classList.add("open");
    }
    function closePanel() {
      panel.classList.remove("open");
      backdrop.classList.remove("open");
    }

    document.getElementById("aiToggleBtn").addEventListener("click", openPanel);
    document.getElementById("aiCloseBtn").addEventListener("click", closePanel);
    backdrop.addEventListener("click", closePanel);

    sendBtn.addEventListener("click", async () => {
      const providerId = providerSelect.value;
      const apiKey = keyInput.value.trim();
      const model = modelInput.value.trim();
      const question = questionInput.value.trim();

      if (!apiKey) {
        responseBox.textContent = "Enter an API key for this provider first.";
        responseBox.classList.add("error");
        return;
      }

      BLLLM.saveCreds(providerId, apiKey, model);

      const buildSummary = BLExport.compact();
      const prompt = [
        "You are a Borderlands build advisor. Here is the player's current skill tree allocation:",
        "",
        buildSummary,
        "",
        question || "Give feedback on this build and suggest improvements.",
      ].join("\n");

      responseBox.classList.remove("error");
      responseBox.textContent = "Thinking...";
      sendBtn.disabled = true;
      try {
        const text = await BLLLM.ask(providerId, apiKey, model, prompt);
        responseBox.textContent = text;
      } catch (err) {
        responseBox.classList.add("error");
        responseBox.textContent = err.message;
      } finally {
        sendBtn.disabled = false;
      }
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
