// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"322s1":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "77aa5d391bd795a7";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"l8viC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _indexEsJs = require("../node_modules/typeit/dist/index.es.js");
var _indexEsJsDefault = parcelHelpers.interopDefault(_indexEsJs);
document.addEventListener("DOMContentLoaded", ()=>{
    new (0, _indexEsJsDefault.default)("#typeIt", {
        lifeLike: true,
        startDelay: 1000,
        loop: true,
        cursorChar: " |"
    }).pause(3000).delete().pause(500).type("students.").pause(1000).move(-9).type("<i>na\xefve<i> ").pause(2000).delete().type("a conference for ").pause(1500).move(9).delete().pause(500).type("our Asian stereotypes.").pause(2500).delete(18).type("immigrant stories.").pause(2500).delete(18).type("generational trauma.").pause(4000).delete().pause(500).type("the bamboo ceiling.").pause(2000).delete().type("future leaders.").pause(2000).delete().type("our GPAs.").pause(2500).delete().type("aspiring creatives.").pause(2000).delete().type("TA's.").pause(2000).delete().type("the sum of our meal points.").pause(2000).delete().type("young activists.").pause(2000).delete().type("our childhood instruments.").pause(2000).delete().type("conditioned perfectionists.").pause(5000).delete().type("professors.").pause(2000).delete().type("change-makers.").pause(2000).delete().type("another free food event.").pause(2000).delete().type("<span class='tiny'>but, we do have free food.</span>").pause(5000).delete().type("<span class='tiny'>seriously. so much food. pls help.</span>").pause(1000).delete().go();
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../node_modules/typeit/dist/index.es.js":"5plyB"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"5plyB":[function(require,module,exports) {
// TypeIt by Alex MacArthur - https://typeitjs.com
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>TypeIt);
const isArray = (thing)=>Array.isArray(thing);
const asArray = (value)=>{
    return isArray(value) ? value : [
        value
    ];
};
let Queue = function(initialItems) {
    let add = function(steps) {
        asArray(steps).forEach((step)=>{
            return _q.set(Symbol(step.char?.innerText), buildQueueItem({
                ...step
            }));
        });
        return this;
    };
    let getTypeable = ()=>rawValues().filter((value)=>value.typeable);
    let set = function(index, item) {
        let keys = [
            ..._q.keys()
        ];
        _q.set(keys[index], buildQueueItem(item));
    };
    let buildQueueItem = (queueItem)=>{
        queueItem.shouldPauseCursor = function() {
            return Boolean(this.typeable || this.cursorable || this.deletable);
        };
        return queueItem;
    };
    let reset = function() {
        _q.forEach((item)=>delete item.done);
    };
    let wipe = function() {
        _q = /* @__PURE__ */ new Map();
        add(initialItems);
    };
    let getQueue = ()=>_q;
    let rawValues = ()=>Array.from(_q.values());
    let destroy = (key)=>_q.delete(key);
    let getItems = (all = false)=>all ? rawValues() : rawValues().filter((i)=>!i.done);
    let done = (key, shouldDestroy = false)=>shouldDestroy ? _q.delete(key) : _q.get(key).done = true;
    let _q = /* @__PURE__ */ new Map();
    add(initialItems);
    return {
        add,
        set,
        wipe,
        reset,
        destroy,
        done,
        getItems,
        getQueue,
        getTypeable
    };
};
const toArray = (val)=>Array.from(val);
const createTextNode = (content)=>document.createTextNode(content);
let expandTextNodes = (element)=>{
    [
        ...element.childNodes
    ].forEach((child)=>{
        if (child.nodeValue) {
            [
                ...child.nodeValue
            ].forEach((c)=>{
                child.parentNode.insertBefore(createTextNode(c), child);
            });
            child.remove();
            return;
        }
        expandTextNodes(child);
    });
    return element;
};
const getParsedBody = (content)=>{
    let doc = document.implementation.createHTMLDocument();
    doc.body.innerHTML = content;
    return expandTextNodes(doc.body);
};
const DATA_ATTRIBUTE = "data-typeit-id";
const CURSOR_CLASS = "ti-cursor";
const END = "END";
const DEFAULT_STATUSES = {
    started: false,
    completed: false,
    frozen: false,
    destroyed: false
};
const DEFAULT_OPTIONS = {
    breakLines: true,
    cursor: {
        autoPause: true,
        autoPauseDelay: 500,
        animation: {
            frames: [
                0,
                0,
                1
            ].map((n)=>{
                return {
                    opacity: n
                };
            }),
            options: {
                iterations: Infinity,
                easing: "steps(2, start)",
                fill: "forwards"
            }
        }
    },
    cursorChar: "|",
    cursorSpeed: 1e3,
    deleteSpeed: null,
    html: true,
    lifeLike: true,
    loop: false,
    loopDelay: 750,
    nextStringDelay: 750,
    speed: 100,
    startDelay: 250,
    startDelete: false,
    strings: [],
    waitUntilVisible: false,
    beforeString: ()=>{},
    afterString: ()=>{},
    beforeStep: ()=>{},
    afterStep: ()=>{},
    afterComplete: ()=>{}
};
const PLACEHOLDER_CSS = `[${DATA_ATTRIBUTE}]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}`;
function walkElementNodes(element, shouldReverse = false, shouldIncludeCursor = false) {
    let cursor = element.querySelector(`.${CURSOR_CLASS}`);
    let walker = document.createTreeWalker(element, NodeFilter.SHOW_ALL, {
        acceptNode: (node)=>{
            if (cursor && shouldIncludeCursor) {
                if (node.classList?.contains(CURSOR_CLASS)) return NodeFilter.FILTER_ACCEPT;
                if (cursor.contains(node)) return NodeFilter.FILTER_REJECT;
            }
            return node.classList?.contains(CURSOR_CLASS) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
        }
    });
    let nextNode;
    let nodes = [];
    while(nextNode = walker.nextNode()){
        if (!nextNode.originalParent) nextNode.originalParent = nextNode.parentNode;
        nodes.push(nextNode);
    }
    return shouldReverse ? nodes.reverse() : nodes;
}
function chunkStringAsHtml(string) {
    return walkElementNodes(getParsedBody(string));
}
function maybeChunkStringAsHtml(str, asHtml = true) {
    return asHtml ? chunkStringAsHtml(str) : toArray(str).map(createTextNode);
}
const createElement = (el)=>document.createElement(el);
const appendStyleBlock = (styles, id = "")=>{
    let styleBlock = createElement("style");
    styleBlock.id = id;
    styleBlock.appendChild(createTextNode(styles));
    document.head.appendChild(styleBlock);
};
const calculateDelay = (delayArg)=>{
    if (!isArray(delayArg)) delayArg = [
        delayArg / 2,
        delayArg / 2
    ];
    return delayArg;
};
const randomInRange = (value, range2)=>{
    return Math.abs(Math.random() * (value + range2 - (value - range2)) + (value - range2));
};
let range = (val)=>val / 2;
function calculatePace(options) {
    let { speed , deleteSpeed , lifeLike  } = options;
    deleteSpeed = deleteSpeed !== null ? deleteSpeed : speed / 3;
    return lifeLike ? [
        randomInRange(speed, range(speed)),
        randomInRange(deleteSpeed, range(deleteSpeed))
    ] : [
        speed,
        deleteSpeed
    ];
}
const destroyTimeouts = (timeouts)=>{
    timeouts.forEach(clearTimeout);
    return [];
};
const generateHash = ()=>Math.random().toString().substring(2, 9);
const isInput = (el)=>"value" in el;
let getAllChars = (element)=>{
    if (isInput(element)) return toArray(element.value);
    return walkElementNodes(element, true).filter((c)=>!(c.childNodes.length > 0));
};
const fireWhenVisible = (element, func)=>{
    let observer = new IntersectionObserver((entries, observer2)=>{
        entries.forEach((entry)=>{
            if (entry.isIntersecting) {
                func();
                observer2.unobserve(element);
            }
        });
    }, {
        threshold: 1
    });
    observer.observe(element);
};
let handleFunctionalArg = (arg)=>{
    return typeof arg === "function" ? arg() : arg;
};
const isNumber = (value)=>Number.isInteger(value);
let select = (selector, element = document, all = false)=>{
    return element[`querySelector${all ? "All" : ""}`](selector);
};
let isBodyElement = (node)=>/body/i.test(node?.tagName);
let insertIntoElement = (originalTarget, character)=>{
    if (isInput(originalTarget)) {
        originalTarget.value = `${originalTarget.value}${character.textContent}`;
        return;
    }
    character.innerHTML = "";
    let target = isBodyElement(character.originalParent) ? originalTarget : character.originalParent || originalTarget;
    target.insertBefore(character, select("." + CURSOR_CLASS, target) || null);
};
let updateCursorPosition = (steps, cursorPosition, printedCharacters)=>{
    return Math.min(Math.max(cursorPosition + steps, 0), printedCharacters.length);
};
const merge = (originalObj, newObj)=>Object.assign({}, originalObj, newObj);
const removeNode = (node, rootElement)=>{
    if (!node) return;
    let nodeParent = node.parentNode;
    let nodeToRemove = nodeParent.childNodes.length > 1 || nodeParent.isSameNode(rootElement) ? node : nodeParent;
    nodeToRemove.remove();
};
const repositionCursor = (element, allChars, newCursorPosition)=>{
    let nodeToInsertBefore = allChars[newCursorPosition - 1];
    let cursor = select(`.${CURSOR_CLASS}`, element);
    element = nodeToInsertBefore?.parentNode || element;
    element.insertBefore(cursor, nodeToInsertBefore || null);
};
function selectorToElement(thing) {
    return typeof thing === "string" ? select(thing) : thing;
}
const isNonVoidElement = (el)=>/<(.+)>(.*?)<\/(.+)>/.test(el.outerHTML);
let wait = (callback, delay, timeouts)=>{
    return new Promise((resolve)=>{
        let cb = async ()=>{
            await callback();
            resolve();
        };
        timeouts.push(setTimeout(cb, delay || 0));
    });
};
let cursorFontStyles = {
    "font-family": "",
    "font-weight": "",
    "font-size": "",
    "font-style": "",
    "line-height": "",
    color: "",
    transform: "translateX(-.125em)"
};
let setCursorStyles = (id, element)=>{
    let rootSelector = `[${DATA_ATTRIBUTE}='${id}']`;
    let cursorSelector = `${rootSelector} .${CURSOR_CLASS}`;
    let computedStyles = getComputedStyle(element);
    let customProperties = Object.entries(cursorFontStyles).reduce((accumulator, [item, value])=>{
        return `${accumulator} ${item}: var(--ti-cursor-${item}, ${value || computedStyles[item]});`;
    }, "");
    appendStyleBlock(`${cursorSelector} { display: inline-block; width: 0; ${customProperties} }`, id);
};
const duplicate = (value, times)=>new Array(times).fill(value);
const countStepsToSelector = ({ queueItems , selector , cursorPosition , to  })=>{
    if (isNumber(selector)) return selector * -1;
    let isMovingToEnd = new RegExp(END, "i").test(to);
    let selectorIndex = selector ? [
        ...queueItems
    ].reverse().findIndex(({ char  })=>{
        let parentElement = char.parentElement;
        let parentMatches = parentElement.matches(selector);
        if (isMovingToEnd && parentMatches) return true;
        return parentMatches && parentElement.firstChild.isSameNode(char);
    }) : -1;
    if (selectorIndex < 0) selectorIndex = isMovingToEnd ? 0 : queueItems.length - 1;
    let offset = isMovingToEnd ? 0 : 1;
    return selectorIndex - cursorPosition + offset;
};
let beforePaint = (cb)=>{
    return new Promise((resolve)=>{
        requestAnimationFrame(async ()=>{
            resolve(await cb());
        });
    });
};
let getAnimationFromElement = (element)=>{
    return element?.getAnimations().find((animation)=>{
        return animation.id === element.dataset.tiAnimationId;
    });
};
let setCursorAnimation = ({ cursor , frames , options  })=>{
    let animation = cursor.animate(frames, options);
    animation.pause();
    animation.id = cursor.dataset.tiAnimationId;
    beforePaint(()=>{
        beforePaint(()=>{
            animation.play();
        });
    });
    return animation;
};
let rebuildCursorAnimation = ({ cursor , options , cursorOptions  })=>{
    if (!cursor || !cursorOptions) return;
    let animation = getAnimationFromElement(cursor);
    let oldCurrentTime;
    if (animation) {
        options.delay = animation.effect.getComputedTiming().delay;
        oldCurrentTime = animation.currentTime;
        animation.cancel();
    }
    let newAnimation = setCursorAnimation({
        cursor,
        frames: cursorOptions.animation.frames,
        options
    });
    if (oldCurrentTime) newAnimation.currentTime = oldCurrentTime;
    return newAnimation;
};
let execute = (queueItem)=>queueItem.func?.call(null);
let fireItem = async ({ index , queueItems , wait: wait2 , cursor , cursorOptions  })=>{
    let queueItem = queueItems[index][1];
    let instantQueue = [];
    let tempIndex = index;
    let futureItem = queueItem;
    let shouldBeGrouped = ()=>futureItem && !futureItem.delay;
    let shouldPauseCursor = queueItem.shouldPauseCursor() && cursorOptions.autoPause;
    while(shouldBeGrouped()){
        instantQueue.push(futureItem);
        shouldBeGrouped() && tempIndex++;
        futureItem = queueItems[tempIndex] ? queueItems[tempIndex][1] : null;
    }
    if (instantQueue.length) {
        await beforePaint(async ()=>{
            for (let q of instantQueue)await execute(q);
        });
        return tempIndex - 1;
    }
    let animation = getAnimationFromElement(cursor);
    let options;
    if (animation) options = {
        ...animation.effect.getComputedTiming(),
        delay: shouldPauseCursor ? cursorOptions.autoPauseDelay : 0
    };
    await wait2(async ()=>{
        if (animation && shouldPauseCursor) animation.cancel();
        await beforePaint(()=>{
            execute(queueItem);
        });
    }, queueItem.delay);
    await rebuildCursorAnimation({
        cursor,
        options,
        cursorOptions
    });
    return index;
};
let processCursorOptions = (cursorOptions)=>{
    if (typeof cursorOptions === "object") {
        let newOptions = {};
        let { frames: defaultFrames , options: defaultOptions  } = DEFAULT_OPTIONS.cursor.animation;
        newOptions.animation = cursorOptions.animation || {};
        newOptions.animation.frames = cursorOptions.animation?.frames || defaultFrames;
        newOptions.animation.options = merge(defaultOptions, cursorOptions.animation?.options || {});
        newOptions.autoPause = cursorOptions.autoPause ?? DEFAULT_OPTIONS.cursor.autoPause;
        newOptions.autoPauseDelay = cursorOptions.autoPauseDelay || DEFAULT_OPTIONS.cursor.autoPauseDelay;
        return newOptions;
    }
    if (cursorOptions === true) return DEFAULT_OPTIONS.cursor;
    return cursorOptions;
};
const TypeIt = function(element, options = {}) {
    let _wait = async (callback, delay, silent = false)=>{
        if (_statuses.frozen) await new Promise((resolve)=>{
            this.unfreeze = ()=>{
                _statuses.frozen = false;
                resolve();
            };
        });
        silent || await _opts.beforeStep(this);
        await wait(callback, delay, _timeouts);
        silent || await _opts.afterStep(this);
    };
    let _fireItemWithContext = (index, queueItems)=>{
        return fireItem({
            index,
            queueItems,
            wait: _wait,
            cursor: _cursor,
            cursorOptions: _opts.cursor
        });
    };
    let _removeNode = (node)=>removeNode(node, _element);
    let _elementIsInput = ()=>isInput(_element);
    let _getPace = (index = 0)=>calculatePace(_opts)[index];
    let _getAllChars = ()=>getAllChars(_element);
    let _maybeAppendPause = (opts = {})=>{
        let delay = opts.delay;
        delay && _queue.add({
            delay
        });
    };
    let _queueAndReturn = (steps, opts)=>{
        _queue.add(steps);
        _maybeAppendPause(opts);
        return this;
    };
    let _getDerivedCursorPosition = ()=>_predictedCursorPosition ?? _cursorPosition;
    let _generateTemporaryOptionQueueItems = (newOptions = {})=>{
        return [
            {
                func: ()=>_options(newOptions)
            },
            {
                func: ()=>_options(_opts)
            }
        ];
    };
    let _addSplitPause = (items)=>{
        let delay = _opts.nextStringDelay;
        _queue.add([
            {
                delay: delay[0]
            },
            ...items,
            {
                delay: delay[1]
            }
        ]);
    };
    let _setUpCursor = ()=>{
        if (_elementIsInput()) return;
        let cursor = createElement("span");
        cursor.className = CURSOR_CLASS;
        if (!_shouldRenderCursor) {
            cursor.style.visibility = "hidden";
            return cursor;
        }
        cursor.innerHTML = getParsedBody(_opts.cursorChar).innerHTML;
        return cursor;
    };
    let _attachCursor = async ()=>{
        !_elementIsInput() && _cursor && _element.appendChild(_cursor);
        if (_shouldRenderCursor) {
            setCursorStyles(_id, _element);
            _cursor.dataset.tiAnimationId = _id;
            let { animation  } = _opts.cursor;
            let { frames , options: options2  } = animation;
            setCursorAnimation({
                frames,
                cursor: _cursor,
                options: {
                    duration: _opts.cursorSpeed,
                    ...options2
                }
            });
        }
    };
    let _generateQueue = ()=>{
        let strings = _opts.strings.filter((string)=>!!string);
        strings.forEach((string, index)=>{
            this.type(string);
            if (index + 1 === strings.length) return;
            let splitItems = _opts.breakLines ? [
                {
                    func: ()=>_type(createElement("BR")),
                    typeable: true
                }
            ] : duplicate({
                func: _delete,
                delay: _getPace(1)
            }, _queue.getTypeable().length);
            _addSplitPause(splitItems);
        });
    };
    let _prepLoop = async (delay)=>{
        let derivedCursorPosition = _getDerivedCursorPosition();
        derivedCursorPosition && await _move({
            value: derivedCursorPosition
        });
        let queueItems = _getAllChars().map((c)=>{
            return [
                Symbol(),
                {
                    func: _delete,
                    delay: _getPace(1),
                    deletable: true,
                    shouldPauseCursor: ()=>true
                }
            ];
        });
        for(let index = 0; index < queueItems.length; index++)await _fireItemWithContext(index, queueItems);
        _queue.reset();
        _queue.set(0, {
            delay
        });
    };
    let _maybePrependHardcodedStrings = (strings)=>{
        let existingMarkup = _element.innerHTML;
        if (!existingMarkup) return strings;
        _element.innerHTML = "";
        if (_opts.startDelete) {
            _element.innerHTML = existingMarkup;
            expandTextNodes(_element);
            _addSplitPause(duplicate({
                func: _delete,
                delay: _getPace(1),
                deletable: true
            }, _getAllChars().length));
            return strings;
        }
        let hardCodedStrings = existingMarkup.replace(/<!--(.+?)-->/g, "").trim().split(/<br(?:\s*?)(?:\/)?>/);
        return hardCodedStrings.concat(strings);
    };
    let _fire = async (remember = true)=>{
        _statuses.started = true;
        let cleanUp = (qKey)=>{
            _queue.done(qKey, !remember);
        };
        try {
            let queueItems = [
                ..._queue.getQueue()
            ];
            for(let index = 0; index < queueItems.length; index++){
                let [queueKey, queueItem] = queueItems[index];
                if (queueItem.done) continue;
                if (!queueItem.deletable || queueItem.deletable && _getAllChars().length) {
                    let newIndex = await _fireItemWithContext(index, queueItems);
                    Array(newIndex - index).fill(index + 1).map((x, y)=>x + y).forEach((i)=>{
                        let [key] = queueItems[i];
                        cleanUp(key);
                    });
                    index = newIndex;
                }
                cleanUp(queueKey);
            }
            if (!remember) return this;
            _statuses.completed = true;
            await _opts.afterComplete(this);
            if (!_opts.loop) throw "";
            let delay = _opts.loopDelay;
            _wait(async ()=>{
                await _prepLoop(delay[0]);
                _fire();
            }, delay[1]);
        } catch (e) {}
        return this;
    };
    let _move = async (step)=>{
        _cursorPosition = updateCursorPosition(step, _cursorPosition, _getAllChars());
        repositionCursor(_element, _getAllChars(), _cursorPosition);
    };
    let _type = (char)=>insertIntoElement(_element, char);
    let _options = async (opts)=>_opts = merge(_opts, opts);
    let _empty = async ()=>{
        if (_elementIsInput()) {
            _element.value = "";
            return;
        }
        _getAllChars().forEach(_removeNode);
        return;
    };
    let _delete = ()=>{
        let allChars = _getAllChars();
        if (!allChars.length) return;
        if (_elementIsInput()) _element.value = _element.value.slice(0, -1);
        else _removeNode(allChars[_cursorPosition]);
    };
    this.break = function(actionOpts) {
        return _queueAndReturn({
            func: ()=>_type(createElement("BR")),
            typeable: true
        }, actionOpts);
    };
    this.delete = function(numCharacters = null, actionOpts = {}) {
        numCharacters = handleFunctionalArg(numCharacters);
        let bookEndQueueItems = _generateTemporaryOptionQueueItems(actionOpts);
        let num = numCharacters;
        let { instant , to  } = actionOpts;
        let typeableQueueItems = _queue.getTypeable();
        let rounds = (()=>{
            if (num === null) return typeableQueueItems.length;
            if (isNumber(num)) return num;
            return countStepsToSelector({
                queueItems: typeableQueueItems,
                selector: num,
                cursorPosition: _getDerivedCursorPosition(),
                to
            });
        })();
        return _queueAndReturn([
            bookEndQueueItems[0],
            ...duplicate({
                func: _delete,
                delay: instant ? 0 : _getPace(1),
                deletable: true
            }, rounds),
            bookEndQueueItems[1]
        ], actionOpts);
    };
    this.empty = function(actionOpts = {}) {
        return _queueAndReturn({
            func: _empty
        }, actionOpts);
    };
    this.exec = function(func, actionOpts = {}) {
        let bookEndQueueItems = _generateTemporaryOptionQueueItems(actionOpts);
        return _queueAndReturn([
            bookEndQueueItems[0],
            {
                func: ()=>func(this)
            },
            bookEndQueueItems[1]
        ], actionOpts);
    };
    this.move = function(movementArg, actionOpts = {}) {
        movementArg = handleFunctionalArg(movementArg);
        let bookEndQueueItems = _generateTemporaryOptionQueueItems(actionOpts);
        let { instant , to  } = actionOpts;
        let numberOfSteps = countStepsToSelector({
            queueItems: _queue.getTypeable(),
            selector: movementArg === null ? "" : movementArg,
            to,
            cursorPosition: _getDerivedCursorPosition()
        });
        let directionalStep = numberOfSteps < 0 ? -1 : 1;
        _predictedCursorPosition = _getDerivedCursorPosition() + numberOfSteps;
        return _queueAndReturn([
            bookEndQueueItems[0],
            ...duplicate({
                func: ()=>_move(directionalStep),
                delay: instant ? 0 : _getPace(),
                cursorable: true
            }, Math.abs(numberOfSteps)),
            bookEndQueueItems[1]
        ], actionOpts);
    };
    this.options = function(opts, actionOpts = {}) {
        opts = handleFunctionalArg(opts);
        _options(opts);
        return _queueAndReturn({}, actionOpts);
    };
    this.pause = function(milliseconds, actionOpts = {}) {
        return _queueAndReturn({
            delay: handleFunctionalArg(milliseconds)
        }, actionOpts);
    };
    this.type = function(string, actionOpts = {}) {
        string = handleFunctionalArg(string);
        let { instant  } = actionOpts;
        let bookEndQueueItems = _generateTemporaryOptionQueueItems(actionOpts);
        let chars = maybeChunkStringAsHtml(string, _opts.html);
        let charsAsQueueItems = chars.map((char)=>{
            return {
                func: ()=>_type(char),
                char,
                delay: instant || isNonVoidElement(char) ? 0 : _getPace(),
                typeable: char.nodeType === Node.TEXT_NODE
            };
        });
        let itemsToQueue = [
            bookEndQueueItems[0],
            {
                func: async ()=>await _opts.beforeString(string, this)
            },
            ...charsAsQueueItems,
            {
                func: async ()=>await _opts.afterString(string, this)
            },
            bookEndQueueItems[1]
        ];
        return _queueAndReturn(itemsToQueue, actionOpts);
    };
    this.is = function(key) {
        return _statuses[key];
    };
    this.destroy = function(shouldRemoveCursor = true) {
        _timeouts = destroyTimeouts(_timeouts);
        handleFunctionalArg(shouldRemoveCursor) && _cursor && _removeNode(_cursor);
        _statuses.destroyed = true;
    };
    this.freeze = function() {
        _statuses.frozen = true;
    };
    this.unfreeze = ()=>{};
    this.reset = function(rebuild) {
        !this.is("destroyed") && this.destroy();
        if (rebuild) {
            _queue.wipe();
            rebuild(this);
        } else _queue.reset();
        _cursorPosition = 0;
        for(let property in _statuses)_statuses[property] = false;
        _element[_elementIsInput() ? "value" : "innerHTML"] = "";
        return this;
    };
    this.go = function() {
        if (_statuses.started) return this;
        _attachCursor();
        if (!_opts.waitUntilVisible) {
            _fire();
            return this;
        }
        fireWhenVisible(_element, _fire.bind(this));
        return this;
    };
    this.flush = function(cb = ()=>{}) {
        _attachCursor();
        _fire(false).then(cb);
        return this;
    };
    this.getQueue = ()=>_queue;
    this.getOptions = ()=>_opts;
    this.updateOptions = (options2)=>_options(options2);
    this.getElement = ()=>_element;
    let _element = selectorToElement(element);
    let _timeouts = [];
    let _cursorPosition = 0;
    let _predictedCursorPosition = null;
    let _statuses = merge({}, DEFAULT_STATUSES);
    options.cursor = processCursorOptions(options.cursor ?? DEFAULT_OPTIONS.cursor);
    let _opts = merge(DEFAULT_OPTIONS, options);
    _opts = merge(_opts, {
        html: !_elementIsInput() && _opts.html,
        nextStringDelay: calculateDelay(_opts.nextStringDelay),
        loopDelay: calculateDelay(_opts.loopDelay)
    });
    let _id = generateHash();
    let _queue = Queue([
        {
            delay: _opts.startDelay
        }
    ]);
    _element.dataset.typeitId = _id;
    appendStyleBlock(PLACEHOLDER_CSS);
    let _shouldRenderCursor = !!_opts.cursor && !_elementIsInput();
    let _cursor = _setUpCursor();
    _opts.strings = _maybePrependHardcodedStrings(asArray(_opts.strings));
    if (_opts.strings.length) _generateQueue();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["322s1","l8viC"], "l8viC", "parcelRequirea697")

//# sourceMappingURL=about.1bd795a7.js.map
