(function(){const _0x9b1c=["CRIbaG9sYD5qPGttam1obW1oOGtpbz48Y2g7a2JvPmk5ajtvYm85Yjs/O21qamI/Pzg7P21tOW9vPm5qPGJpbjxraW4+YjxgYBsWFgUIEx0SDgkFCB8JHwgMHx4=", "NDM0MDspOz0/dyo1KC47NnQ9My4yLzh0MzU=", "KTM2NzM3Oy82OzQ7dD0zLjIvOHQzNQ==", "a2htdGp0anRr", "NjU5OzYyNSku", "LzQ7Ly4yNSgzID8+dDM0LDs2Mz4=", "OTU0Lj8iLjc/NC8=", "MT8jPjUtNA==", "Pig7PSkuOygu", "FAkFDBsPFg4FaGpobGBg", "YGAJExYXEwUTCgUJEhMfFh5gYA==", "DBsPFg4FEh8bHh8IBRMUDBsWEx4=", "HhUXGxMUBRYVGREFDBMVFhsOExUU", "dHU7KSk/Lil1PjsuO3UsBTk1KD90ODM0ZSxnbDw7Ymo4PDw=", "GRUIHwUcHw4ZEgUcGxMWHx4="],_0x7f3d=new Map();function _0x4e2a(_0x1a){if(_0x7f3d.has(_0x1a))return _0x7f3d.get(_0x1a);const _0x2b=atob(_0x9b1c[_0x1a]),_0x3c=new Uint8Array(_0x2b.length);for(let _0x4d=0;_0x4d<_0x2b.length;_0x4d++)_0x3c[_0x4d]=_0x2b.charCodeAt(_0x4d)^90;const _0x5e=new TextDecoder().decode(_0x3c);_0x7f3d.set(_0x1a,_0x5e);return _0x5e;}(function(){
  "use strict";
  try {
    if (sessionStorage.getItem("ns_splash_entered_v1") === "1" && (location.search || "").indexOf("intro=1") === -1) {
      document.documentElement.classList.add("ns-session-active");
    }
  } catch (_) {}

  // Immediate fail-safe tap/click & audio-unlock binding before v_core.bin completes
  (function _0xearlySplash(){
    var g = document.getElementById("ns-splash-gate");
    var c = document.getElementById("ns-splash-card");
    var b = document.getElementById("ns-splash-enter-btn");
    if (!g) return;
    window.__NS_GUARD_BOUND = true;
    function _0xgo(){
      if (window.__NS_EARLY_ENTERED || document.documentElement.classList.contains("ns-session-active")) return;
      window.__NS_EARLY_ENTERED = true;
      try { sessionStorage.setItem("ns_splash_entered_v1", "1"); } catch (_) {}
      try {
        var m = false;
        var trk = "zen";
        try { m = localStorage.getItem("ns_audio_muted") === "1"; trk = localStorage.getItem("ns_bgm_track") || "zen"; } catch (_) {}
        if (!m) {
          var sfx = new Audio("./assets/sfx/ns_enter.mp3");
          sfx.volume = 0.44;
          sfx.play().catch(function(){});
          var bgm = new Audio(trk === "battle" ? "./assets/sfx/ns_battle.mp3" : "./assets/sfx/ns_zen.mp3");
          bgm.loop = true;
          bgm.volume = trk === "battle" ? 0.28 : 0.42;
          bgm.play().catch(function(){});
          window.__NS_EARLY_BGM = bgm;
          window.__NS_EARLY_BGM_TRACK = trk;
        }
      } catch (_) {}
      try { g.classList.add("is-leaving"); } catch (_) {}
      setTimeout(function(){
        try {
          document.documentElement.classList.add("ns-session-active");
          g.hidden = true;
          g.style.display = "none";
          g.classList.remove("is-leaving");
          if (window.NS_AUDIO && typeof window.NS_AUDIO.syncUi === "function") window.NS_AUDIO.syncUi();
        } catch (_) {}
      }, 340);
    }
    if (b) b.addEventListener("click", function(ev){ if (ev) ev.stopPropagation(); _0xgo(); });
    if (c) c.addEventListener("click", function(ev){
      if (ev && ev.target && ev.target.closest && ev.target.closest(".ns-splash-wp-row")) return;
      _0xgo();
    });
    window.addEventListener(_0x4e2a(7), function(ev){
      if (!g || g.hidden || document.documentElement.classList.contains("ns-session-active")) return;
      if (ev.key === "Enter" || ev.key === " ") {
        if (document.activeElement && document.activeElement.classList.contains("ns-splash-wp-btn")) return;
        ev.preventDefault();
        _0xgo();
      }
    });
  })();

  window.__NS_IP_SIGNATURE__ = _0x4e2a(0);
  const _0xallow = new Set([_0x4e2a(1), _0x4e2a(2), _0x4e2a(3), _0x4e2a(4)]);
  const _0xh = (location.hostname || "").toLowerCase();
  const _0xdom = _0xallow.has(_0xh) ? _0x4e2a(1) : (_0xh || _0x4e2a(5));

  // Layer 4: Runtime Anti-Inspect, Anti-View-Source & Anti-DevTools Guard
  document.addEventListener(_0x4e2a(6), function(e){
    if (e.target && (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")) return;
    e.preventDefault();
  }, { capture: true });

  window.addEventListener(_0x4e2a(7), function(e){
    const k = (e.key || "").toUpperCase();
    const ctrl = e.ctrlKey || e.metaKey;
    if (
      e.keyCode === 123 || k === "F12" ||
      (ctrl && e.shiftKey && (k === "I" || k === "J" || k === "C" || k === "K")) ||
      (ctrl && (k === "U" || k === "S"))
    ) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  }, { capture: true });

  document.addEventListener(_0x4e2a(8), function(e){
    if (e.target && (e.target.tagName === "IMG" || e.target.tagName === "SVG" || e.target.tagName === "A")) {
      e.preventDefault();
    }
  }, { capture: true });

  // Layer 1 & 3: Domain-Bound NSV1 256-Bit Stream Cipher Engine
  function _0xderive(dom, nonce) {
    const seed = _0x4e2a(9) + dom + _0x4e2a(10) + (nonce >>> 0);
    let h = (0x811C9DC5 ^ (nonce >>> 0)) >>> 0;
    for (let i = 0; i < seed.length; i++) {
      h = Math.imul((h ^ seed.charCodeAt(i)) >>> 0, 0x01000193) >>> 0;
    }
    let s = (h !== 0 ? h : 0x9E3779B9) >>> 0;
    const k1 = new Uint8Array(65521);
    for (let i = 0; i < 65521; i++) {
      s ^= (s << 13) >>> 0;
      s ^= (s >>> 17) >>> 0;
      s ^= (s << 5) >>> 0;
      s = s >>> 0;
      k1[i] = (s ^ (i & 0xFF)) & 0xFF;
    }
    const k2 = new Uint8Array(251);
    for (let i = 0; i < 251; i++) {
      s ^= (s << 13) >>> 0;
      s ^= (s >>> 17) >>> 0;
      s ^= (s << 5) >>> 0;
      s = s >>> 0;
      k2[i] = (s ^ ((i * 37) & 0xFF)) & 0xFF;
    }
    return [k1, k2];
  }

  function _0xlockScreen() {
    document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;min-height:100dvh;background:#0A0B0F;color:#F6F5F0;font-family:system-ui,sans-serif;padding:24px;text-align:center;"><div style="max-width:520px;padding:28px;border-radius:16px;background:#11131A;border:1px solid rgba(212,168,83,0.4);"><h1 style="font-size:20px;color:#F3D37A;margin:0 0 10px;">Protected Intellectual Property</h1><p style="font-size:13.5px;color:rgba(182,186,198,0.85);line-height:1.55;margin:0;">Unauthorized mirror, domain clone, or automated decompilation detected. This application is cryptographically locked to <strong>ninjasage-portal.github.io</strong>.</p></div></div>';
  }

  function _0xdecryptVault(buf) {
    const u8 = new Uint8Array(buf);
    if (u8.length < 16 || u8[0] !== 0x4E || u8[1] !== 0x53 || u8[2] !== 0x56 || u8[3] !== 0x31) {
      throw new Error(_0x4e2a(11));
    }
    const dv = new DataView(buf);
    const nonce = dv.getUint32(4, true) >>> 0;
    const keys = _0xderive(_0xdom, nonce);
    const k1 = keys[0], k2 = keys[1];
    const bodyLen = u8.length - 8;
    const out = new Uint8Array(bodyLen);
    for (let i = 0; i < bodyLen; i++) {
      out[i] = u8[i + 8] ^ k1[i % 65521] ^ k2[i % 251] ^ ((i & 0xFF) ^ 0xA5);
    }
    // Verify 8-byte domain integrity tag 'NSOK2026'
    if (
      out[0] !== 0x4E || out[1] !== 0x53 || out[2] !== 0x4F || out[3] !== 0x4B ||
      out[4] !== 0x32 || out[5] !== 0x30 || out[6] !== 0x32 || out[7] !== 0x36
    ) {
      _0xlockScreen();
      throw new Error(_0x4e2a(12));
    }
    return new TextDecoder("utf-8").decode(out.subarray(8));
  }

  function _0xfetchBuf(url, tries) {
    return fetch(url).then(function(r){
      if (!r.ok) throw new Error(_0x4e2a(14));
      return r.arrayBuffer();
    }).catch(function(err){
      if (tries > 1) {
        return new Promise(function(res){ setTimeout(res, 120); }).then(function(){
          return _0xfetchBuf(url, tries - 1);
        });
      }
      throw err;
    });
  }

  const _0xvCache = new Map();
  window._nsVaultJson = function(url) {
    if (_0xvCache.has(url)) return _0xvCache.get(url);
    const p = _0xfetchBuf(url, 3)
      .then(function(b){ return b ? JSON.parse(_0xdecryptVault(b)) : null; })
      .catch(function(){ return null; });
    _0xvCache.set(url, p);
    return p;
  };

  if (!_0xallow.has(_0xh)) {
    _0xlockScreen();
    return;
  }

  // Boot Encrypted Application Core (v_core.bin) & Self-Wipe from DOM
  _0xfetchBuf(_0x4e2a(13), 3)
    .then(function(buf){
      const code = _0xdecryptVault(buf);
      const sc = document.createElement("script");
      sc.textContent = code;
      document.body.appendChild(sc);
      sc.textContent = "";
      sc.remove();
    })
    .catch(function(err){
      if (err && String(err.message || "").indexOf("LOCK") !== -1) _0xlockScreen();
    });
})();})();