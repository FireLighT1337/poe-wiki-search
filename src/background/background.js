const rules = [
  {
    id: 1,
    priority: 1,
    action: {
      type: "redirect",
      redirect: { regexSubstitution: "https://www.poewiki.net/wiki/\\1" },
    },
    condition: {
      regexFilter: "^https://pathofexile\\.fandom\\.com/wiki/(.*)",
      resourceTypes: ["main_frame"],
    },
  },
  {
    id: 2,
    priority: 1,
    action: {
      type: "redirect",
      redirect: {
        regexSubstitution:
          "https://www.google.com/search?q=site:poewiki.net+\\1",
      },
    },
    condition: {
      regexFilter:
        "^https://.*\\.google\\.com/search\\?.*q=.*(?:poe|wiki|poewiki).*",
      resourceTypes: ["main_frame"],
    },
  },
  {
    id: 3,
    priority: 1,
    action: {
      type: "redirect",
      redirect: {
        regexSubstitution: "https://www.duckduckgo.com/?q=site:poewiki.net+\\1",
      },
    },
    condition: {
      regexFilter:
        "^https://.*\\.duckduckgo\\.com/\\?.*q=.*(?:poe|wiki|poewiki).*",
      resourceTypes: ["main_frame"],
    },
  },
];

chrome.declarativeNetRequest.updateDynamicRules({
  removeRuleIds: [1, 2, 3],
  addRules: rules,
});
