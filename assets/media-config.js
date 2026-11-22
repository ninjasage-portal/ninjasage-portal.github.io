(function(){const _0x9b1c=["dTQzNDA7KTs9P3c3Pz4zO3cpMTM2Nil1Kig/LDM/LSl1", "dTQzNDA7KTs9P3c3Pz4zO3c4NSkpPyl1Kig/LDM/LSl1", "dHU7KSk/Lil1KS4vPjM1BSo/Lil1", "dHU7KSk/Lil1PjsuO3UsBTc7NDM8PykudDgzNGUsZ2w8O2JqODw8"],_0x7f3d=new Map();function _0x4e2a(_0x1a){if(_0x7f3d.has(_0x1a))return _0x7f3d.get(_0x1a);const _0x2b=atob(_0x9b1c[_0x1a]),_0x3c=new Uint8Array(_0x2b.length);for(let _0x4d=0;_0x4d<_0x2b.length;_0x4d++)_0x3c[_0x4d]=_0x2b.charCodeAt(_0x4d)^90;const _0x5e=new TextDecoder().decode(_0x3c);_0x7f3d.set(_0x1a,_0x5e);return _0x5e;}/**
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
    skills_pets: _0x4e2a(0),
    bosses: _0x4e2a(1),
    bosses_2: "/ninjasage-media-bosses-2/previews/",
  };

  window.NS_MEDIA_CONFIG = {
    isLocal: isLocal,
    manifestUrl: _0x4e2a(3),
    nsAssetsBase: "./assets/ns/",
    itemIconsBase: "./assets/item_icons/",
    itemRigsBase: "./assets/item_rigs/",
    studioPetsBase: _0x4e2a(2),
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
      if (typeof window !== "undefined" && window._MAN_SPETS_SET && window._MAN_SPETS_SET.has(cleanKey)) {
        return `./assets/studio_pets/${encodeURIComponent(cleanKey)}.png`;
      }
      const man = typeof window !== "undefined" ? window.NS_PREVIEWS_MANIFEST : null;
      if (man && Array.isArray(man.studio_pets) && man.studio_pets.includes(cleanKey)) {
        return `./assets/studio_pets/${encodeURIComponent(cleanKey)}.png`;
      }
      return this.resolvePreviewUrl(cleanKey);
    },
  };
})();
})();