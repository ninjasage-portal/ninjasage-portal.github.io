/**
 * Media & CDN Routing Configuration for Ninja Sage Public Portal.
 * Seamlessly supports local preview servers AND multi-repo GitHub Pages hosting
 * (same-origin github.io sibling repos) or an optional external R2/CDN URL.
 */
(function () {
  const host = (typeof location !== "undefined" && location.hostname) ? location.hostname.toLowerCase() : "";
  const isLocal = !host || host === "localhost" || host === "127.0.0.1" || host.startsWith("192.168.") || host.startsWith("10.");

  // Optional override when migrating media assets to Cloudflare R2 or custom CDN domain:
  // e.g. window.NS_CUSTOM_CDN = { all: "https://cdn.example.com/previews/" };
  const custom = (typeof window !== "undefined" && window.NS_CUSTOM_CDN) || {};

  const ORIGIN = (typeof location !== "undefined" && location.origin && location.origin !== "null") ? location.origin : "";
  const DEFAULT_REPOS = {
    skills_pets: "/ninjasage-media-skills/previews/",
    bosses: "/ninjasage-media-bosses/previews/",
    bosses_2: "/ninjasage-media-bosses-2/previews/",
  };

  window.NS_MEDIA_CONFIG = {
    isLocal: isLocal,
    manifestUrl: "./assets/data/previews_manifest.json",
    nsAssetsBase: "./assets/ns/",
    itemIconsBase: "./assets/item_icons/",
    itemRigsBase: "./assets/item_rigs/",
    studioPetsBase: "./assets/studio_pets/",
    resolveNsAsset: function (relPath) {
      return "./assets/ns/" + String(relPath || "").replace(/^\/+assets\/ns\//, "").replace(/^\/+/, "");
    },
    resolvePreviewUrl: function (key) {
      const cleanKey = String(key || "").trim();
      if (!cleanKey) return "";
      if (custom.all) return `${custom.all}${encodeURIComponent(cleanKey)}.webp`;
      if (isLocal) {
        return `./previews/${encodeURIComponent(cleanKey)}.webp`;
      }
      const man = window.NS_PREVIEWS_MANIFEST;
      const shard = (man && man.shards && man.shards[cleanKey])
        || (cleanKey.startsWith("ene_") ? "bosses" : "skills_pets");
      const base = custom[shard] || (ORIGIN + (DEFAULT_REPOS[shard] || DEFAULT_REPOS.skills_pets));
      return `${base}${encodeURIComponent(cleanKey)}.webp`;
    },
    resolveStudioPetUrl: function (reqKey) {
      const cleanKey = String(reqKey || "").trim();
      if (!cleanKey) return "";
      const man = window.NS_PREVIEWS_MANIFEST;
      if (man && man.studio_pets && man.studio_pets[cleanKey]) {
        return `./assets/studio_pets/${encodeURIComponent(cleanKey)}.png`;
      }
      return this.resolvePreviewUrl(cleanKey);
    },
  };
})();
