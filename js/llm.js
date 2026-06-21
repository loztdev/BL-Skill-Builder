/* Direct browser-to-provider calls for build advice. Keys live only in localStorage.
   Some providers (notably OpenAI) reject cross-origin browser requests; see README for a
   tiny local proxy you can run if a provider blocks the direct call. */
const BLLLM = (() => {
  const STORAGE_PREFIX = "bl_skill_builder_llm_";

  const PROVIDERS = {
    anthropic: {
      label: "Anthropic (Claude)",
      defaultModel: "claude-sonnet-4-6",
      buildRequest(apiKey, model, prompt) {
        return {
          url: "https://api.anthropic.com/v1/messages",
          options: {
            method: "POST",
            headers: {
              "content-type": "application/json",
              "x-api-key": apiKey,
              "anthropic-version": "2023-06-01",
              "anthropic-dangerous-direct-browser-access": "true",
            },
            body: JSON.stringify({
              model,
              max_tokens: 1024,
              messages: [{ role: "user", content: prompt }],
            }),
          },
        };
      },
      parseResponse(json) {
        return json?.content?.[0]?.text || JSON.stringify(json);
      },
    },
    openai: {
      label: "OpenAI (GPT)",
      defaultModel: "gpt-4o",
      buildRequest(apiKey, model, prompt) {
        return {
          url: "https://api.openai.com/v1/chat/completions",
          options: {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
              model,
              messages: [{ role: "user", content: prompt }],
            }),
          },
        };
      },
      parseResponse(json) {
        return json?.choices?.[0]?.message?.content || JSON.stringify(json);
      },
    },
    google: {
      label: "Google (Gemini)",
      defaultModel: "gemini-2.0-flash",
      buildRequest(apiKey, model, prompt) {
        return {
          url: `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
          options: {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              contents: [{ parts: [{ text: prompt }] }],
            }),
          },
        };
      },
      parseResponse(json) {
        return json?.candidates?.[0]?.content?.parts?.[0]?.text || JSON.stringify(json);
      },
    },
    xai: {
      label: "xAI (Grok)",
      defaultModel: "grok-2-latest",
      buildRequest(apiKey, model, prompt) {
        return {
          url: "https://api.x.ai/v1/chat/completions",
          options: {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
              model,
              messages: [{ role: "user", content: prompt }],
            }),
          },
        };
      },
      parseResponse(json) {
        return json?.choices?.[0]?.message?.content || JSON.stringify(json);
      },
    },
    mistral: {
      label: "Mistral",
      defaultModel: "mistral-large-latest",
      buildRequest(apiKey, model, prompt) {
        return {
          url: "https://api.mistral.ai/v1/chat/completions",
          options: {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
              model,
              messages: [{ role: "user", content: prompt }],
            }),
          },
        };
      },
      parseResponse(json) {
        return json?.choices?.[0]?.message?.content || JSON.stringify(json);
      },
    },
  };

  function saveCreds(providerId, apiKey, model) {
    localStorage.setItem(STORAGE_PREFIX + providerId + "_key", apiKey || "");
    localStorage.setItem(STORAGE_PREFIX + providerId + "_model", model || "");
  }

  function loadCreds(providerId) {
    return {
      apiKey: localStorage.getItem(STORAGE_PREFIX + providerId + "_key") || "",
      model: localStorage.getItem(STORAGE_PREFIX + providerId + "_model") || "",
    };
  }

  async function ask(providerId, apiKey, model, prompt) {
    const provider = PROVIDERS[providerId];
    if (!provider) throw new Error(`Unknown provider: ${providerId}`);
    const useModel = model || provider.defaultModel;
    const { url, options } = provider.buildRequest(apiKey, useModel, prompt);

    let res;
    try {
      res = await fetch(url, options);
    } catch (err) {
      throw new Error(
        `Network/CORS error calling ${provider.label}. This provider may block direct browser requests — try a local proxy (see README). (${err.message})`
      );
    }

    const json = await res.json().catch(() => null);
    if (!res.ok) {
      const msg = json?.error?.message || json?.error || res.statusText;
      throw new Error(`${provider.label} returned ${res.status}: ${msg}`);
    }
    return provider.parseResponse(json);
  }

  return { PROVIDERS, saveCreds, loadCreds, ask };
})();
