// ==UserScript==
// @name         Trz Wovesville
// @namespace    Trz
// @version      1.3
// @description  FXCK U WOLVESVILLE
// @author       Trz
// @icon         https://www.google.com/s2/favicons?sz=64&domain=wolvesville.com
// @match        *://*.wolvesville.com/*
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @grant        none
// @run-at       document-start
// @updateURL    https://ltruowng.space/trz-wov.user.js
// @downloadURL  https://ltruowng.space/trz-wov.user.js
// ==/UserScript==
window.addEventListener = new Proxy(window.addEventListener, {
  apply: function (target, thisArg, args) {
    if (args[0] === "storage") return;
    return target.apply(thisArg, args);
  }
});

(()=>{const _xor=(a,b)=>a^b;const _gen=()=>{let x=0,r;do{r=_xor(Date.now()&255,(Math.random()*1e3|0)%99)}while(r===42||r>98);return r};const _trap=new Map();const _inject=(o,tag)=>{if(!o||typeof o!=='object'||!o.query)return;const q=o.query;if('b' in q){const val=_gen();q.b=val;_trap.set(tag,val)}};const _A=Object.assign;Object.assign=function(...args){for(let obj of args)_inject(obj,'assign');return _A.apply(this,args)};const _wait=(f,cb)=>{const i=setInterval(()=>{try{const val=f();if(val)clearInterval(i),cb(val);}catch{}},44)};_wait(()=>window?.tCe?.Ay,(fn)=>{window.tCe.Ay=function(...args){_inject(args[1],'tCe.Ay');return fn.apply(this,args)}})})();(function(){'use strict';const origDefine=Object.defineProperty;Object.defineProperty=function(obj,prop,descriptor){if(prop==='webLocalStorageModifiedHeaderKey'&&descriptor?.value==='wlsm'){console.log('[WLSM PATCH] Blocked setting of webLocalStorageModifiedHeaderKey');descriptor.value='___patched___'}
return origDefine.call(Object,obj,prop,descriptor)};Object.defineProperty(window,'webLocalStorageModifiedHeaderKey',{get:()=>'___patched___',set:()=>{console.log('[WLSM PATCH] Blocked assignment')},configurable:!0})})();(function(){'use strict';const log=(msg,label="[Bypass]",color1="#222",color2="#00fff7")=>{const tag=`color:#fff;background:${color1};padding:2px 6px;border-radius:4px;font-weight:bold;font-family:monospace`;const content=`color:${color2};font-weight:bold;font-family:monospace`;console.log(`%c${label}%c ${msg}`,tag,content)};const patchAll=()=>{try{if(!Object.getOwnPropertyDescriptor(document,'title')?.configurable){const obs=new MutationObserver(()=>{if(document.title!=="Wolvesville"){document.title="Wolvesville";log("Reset title","[Fixed]","#1f1c2c","#fcb045")}});obs.observe(document.querySelector('title')||document.head,{subtree:!0,childList:!0})}else{Object.defineProperty(document,'title',{get:()=>"Wolvesville",set:()=>{}});log("document.title patched","[OK]","#1f1c2c","#fcb045")}}catch(e){}
if(window.fetch){window.fetch.toString=()=>"function fetch() { [native code] }";log("fetch.toString() patched","[OK]","#2c003e","#a6c0fe")}
const nativeGetItem=localStorage.getItem.bind(localStorage);const nativeSetItem=localStorage.setItem.bind(localStorage);const nativeRemoveItem=localStorage.removeItem.bind(localStorage);const nativeClear=localStorage.clear.bind(localStorage);localStorage.getItem=function(){return nativeGetItem.apply(this,arguments)};localStorage.setItem=function(){return nativeSetItem.apply(this,arguments)};localStorage.removeItem=function(){return nativeRemoveItem.apply(this,arguments)};localStorage.clear=function(){return nativeClear.apply(this,arguments)};localStorage.getItem.toString=()=>"function getItem() { [native code] }";localStorage.setItem.toString=()=>"function setItem() { [native code] }";localStorage.removeItem.toString=()=>"function removeItem() { [native code] }";localStorage.clear.toString=()=>"function clear() { [native code] }";const origToString=Function.prototype.toString;Function.prototype.toString=function(){if(this===localStorage.getItem)return"function getItem() { [native code] }";if(this===localStorage.setItem)return"function setItem() { [native code] }";if(this===localStorage.removeItem)return"function removeItem() { [native code] }";if(this===localStorage.clear)return"function clear() { [native code] }";if(this===window.fetch)return"function fetch() { [native code] }";return origToString.call(this)};if(window.WebSocket){const NativeWebSocket=window.WebSocket;window.WebSocket=function(...args){return new NativeWebSocket(...args)};window.WebSocket.prototype=NativeWebSocket.prototype;window.WebSocket.toString=()=>"function WebSocket() { [native code] }"}
if(window.XMLHttpRequest){const NativeXHR=window.XMLHttpRequest;window.XMLHttpRequest=function(){return new NativeXHR()};window.XMLHttpRequest.prototype=NativeXHR.prototype;window.XMLHttpRequest.toString=()=>"function XMLHttpRequest() { [native code] }"}
const nativeSetInterval=window.setInterval;window.setInterval=function(fn,delay,max){const code=fn?.toString?.();if(code&&(code.includes("document.title")||code.includes("fetch")||code.includes("webBot"))){log("Blocked suspicious setInterval","[BLOCKED]","#240b36","#ff512f");return 0}
return nativeSetInterval(fn,delay)}};const patchCheatFuncs=()=>{try{if(window.eH?.setWebAutomationDetected){window.eH.setWebAutomationDetected=()=>log("setWebAutomationDetected suppressed","[PATCHED]","#004e92","#8e2de2")}
if(typeof window.Ni==="function"){window.Ni=()=>log("Ni() neutralized","[PATCHED]","#1c1c1c","#fc466b")}
for(const key in window){const obj=window[key];if(obj&&typeof obj==="object"){for(const prop in obj){if(prop==="_handleBotCheatDetected"&&typeof obj[prop]==="function"){obj[prop]=()=>log("_handleBotCheatDetected removed","[PATCHED]","#0f0c29","#ff416c");log(`Hooked inside ${key}`,"[FOUND]","#141e30","#00c9ff")}}}}}catch(err){log(err.message,"[ERROR]","#000000","#ff0844")}};patchAll();const observer=new MutationObserver(patchCheatFuncs);observer.observe(document,{childList:!0,subtree:!0});window.addEventListener('load',()=>{patchCheatFuncs();observer.disconnect();log("All patches applied","[DONE]","#1a2980","#26d0ce")})})();(function(){const blockWwoClientId=()=>{if(window.fetch){const origFetch=window.fetch;window.fetch=function(input,init={}){if(init&&init.headers){if(init.headers['Wwo-Client-Id'])delete init.headers['Wwo-Client-Id'];if(init.headers['wwo-client-id'])delete init.headers['wwo-client-id']}
return origFetch.apply(this,arguments)}}
if(window.XMLHttpRequest){const origOpen=XMLHttpRequest.prototype.open;const origSetRequestHeader=XMLHttpRequest.prototype.setRequestHeader;XMLHttpRequest.prototype.open=function(){this._wwoBlockedHeaders=[];return origOpen.apply(this,arguments)};XMLHttpRequest.prototype.setRequestHeader=function(header,value){if(header&&header.toLowerCase()==='wwo-client-id'){this._wwoBlockedHeaders.push(header);return}
return origSetRequestHeader.apply(this,arguments)}}};blockWwoClientId()})()
const SCRIPT_VERSION = GM_info.script.version
const DEFAULT_SETTINGS = {
    DEBUG_MODE: false,
    SHOW_HIDDEN_LEVEL: true,
    AUTO_REPLAY: false,
    AUTO_BOOST_COUPLE: false,
    AUTO_BOOST_NORMAL: false,
    CHAT_STATISTICS: false,
    VOTE_STATISTICS: false,
  }

  const APPLICATION_STATE = {
    authenticationTokens: {
      idToken: "",
      refreshToken: "",
      "Cf-JWT": "",
    },
    currentPlayer: null,
    playerInventory: null,
    messageHistory: [],
    gamePlayers: [],
    playerRole: null,
    gameStatus: null,
    gameStatistics: {
      goldWheelSpins: 0,
      goldWheelSilver: 0,
      totalExperience: 0,
      totalLevels: 0,
      gameStartTime: 0,
    },
    documentTitle: null,
    userSettings: { ...DEFAULT_SETTINGS },
    activeIntervals: {
      autoReplay: null,
    },
    gameSocket: null,
    currentGameId: null,
    serverUrl: null,
    gameConfiguration: null,
    chatMessages: {},
    voteStatistics: {},
    socketState: {
      currentDay: 0,
    },
    isUIInitialized: false,
    historyLastUpdated: 0,
    playerAvatarCache: {},
    roomSocket: null,
  }

  const UTILITY_FUNCTIONS = {
    logMessage: (message) => APPLICATION_STATE.userSettings.DEBUG_MODE && console.log(`[Trz] ${message}`),

    delayExecution: (milliseconds = 500) => new Promise((resolve) => setTimeout(resolve, milliseconds)),

    formatTimestamp: (timestamp) => {
      const [hours, minutes, seconds, milliseconds] = [
        timestamp.getHours(),
        timestamp.getMinutes(),
        timestamp.getSeconds(),
        timestamp.getMilliseconds(),
      ].map((value) => value.toString().padStart(value < 100 ? 2 : 3, "0"))
      return `${hours}:${minutes}:${seconds}.${milliseconds}`
    },

    scrollChatToBottom: () => {
      const chatContainer = $(".Trz-chat-messages")[0]
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight
      }
    },

    saveUserSettings: () => {
      localStorage.setItem("Trz-settings", JSON.stringify(APPLICATION_STATE.userSettings))
    },

    loadUserSettings: () => {
      const savedSettings = localStorage.getItem("Trz-settings")
      if (savedSettings) {
        APPLICATION_STATE.userSettings = {
          ...APPLICATION_STATE.userSettings,
          ...JSON.parse(savedSettings),
        }
      } else {
        UTILITY_FUNCTIONS.saveUserSettings()
      }
      UTILITY_FUNCTIONS.logMessage(APPLICATION_STATE.userSettings)
    },

    getRoleData: (roleId) => JSON.parse(localStorage.getItem("roles-meta-data")).roles[roleId],
  }

  const USER_INTERFACE = {
    generateInterfaceHTML: () => `
          <style>
              @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap');

              :root {
                  --color-background-primary: #000000;
                  --color-background-secondary: #1a1a1a;
                  --color-background-tertiary: #2a2a2a;
                  --color-text-primary: #ffffff;
                  --color-text-secondary: #cccccc;
                  --color-text-tertiary: #999999;
                  --color-border: #333333;
                  --color-accent: #666666;
                  --color-success: #4ade80;
                  --color-error: #f87171;
                  --color-warning: #fbbf24;
                  --font-family: 'JetBrains Mono', monospace;
                  --border-radius: 8px;
                  --transition-speed: 0.2s;
                  --shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
              }

              .Trz-ui * {
                  margin: 0;
                  padding: 0;
                  box-sizing: border-box;
                  font-family: var(--font-family);
                  user-select: auto !important;
              }

              .Trz-ui *::-webkit-scrollbar {
                  width: 8px;
                  height: 8px;
              }

              .Trz-ui *::-webkit-scrollbar-track {
                  background: var(--color-background-secondary);
                  border-radius: var(--border-radius);
              }

              .Trz-ui *::-webkit-scrollbar-thumb {
                  background: var(--color-accent);
                  border-radius: var(--border-radius);
              }

              .Trz-ui *::-webkit-scrollbar-thumb:hover {
                  background: var(--color-text-tertiary);
              }

              .Trz-main-button {
                  position: fixed;
                  bottom: 20px;
                  right: 20px;
                  width: 60px;
                  height: 60px;
                  background: url('https://ltruowng.space/logo.png') center center/cover;
                  border-radius: var(--border-radius);
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  cursor: pointer;
                  box-shadow: var(--shadow);
                  z-index: 9999;
                  transition: all var(--transition-speed);
                  border: none;
                  outline: none;
                  overflow: hidden;
              }

              .Trz-main-button:hover {
                  transform: scale(1.05);
                  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.6);
              }

              .Trz-main-button:active {
                  transform: scale(0.95);
              }

              .Trz-backdrop {
                  position: fixed;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  background-color: rgba(0, 0, 0, 0.8);
                  backdrop-filter: blur(4px);
                  z-index: 9998;
                  opacity: 0;
                  visibility: hidden;
                  transition: opacity var(--transition-speed), visibility var(--transition-speed);
              }

              .Trz-backdrop.active {
                  opacity: 1;
                  visibility: visible;
              }

              .Trz-modal {
                  position: fixed;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%) scale(0.9);
                  width: 90%;
                  max-width: 1000px;
                  max-height: 85vh;
                  background: var(--color-background-primary);
                  border-radius: var(--border-radius);
                  box-shadow: var(--shadow);
                  z-index: 9999;
                  overflow: hidden;
                  opacity: 0;
                  visibility: hidden;
                  transition: all var(--transition-speed);
                  border: 1px solid var(--color-border);
              }

              .Trz-modal.active {
                  opacity: 1;
                  visibility: visible;
                  transform: translate(-50%, -50%) scale(1);
              }

              .Trz-modal-header {
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  padding: 16px 20px;
                  background: var(--color-background-secondary);
                  border-bottom: 1px solid var(--color-border);
                  cursor: move;
              }

              .Trz-modal-title {
                  display: flex;
                  align-items: center;
                  gap: 12px;
                  color: var(--color-text-primary);
                  font-size: 16px;
                  font-weight: 600;
              }

              .Trz-modal-title .icon {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  width: 24px;
                  height: 24px;
                  color: var(--color-text-secondary);
              }

              .Trz-modal-close {
                  width: 32px;
                  height: 32px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  border-radius: var(--border-radius);
                  background: var(--color-background-tertiary);
                  color: var(--color-text-secondary);
                  cursor: pointer;
                  transition: all var(--transition-speed);
                  border: none;
              }

              .Trz-modal-close:hover {
                  background: var(--color-accent);
                  color: var(--color-text-primary);
                  transform: rotate(90deg);
              }

              .Trz-modal-content {
                  display: flex;
                  height: calc(85vh - 130px);
                  overflow: hidden;
              }

              .Trz-sidebar {
                  width: 220px;
                  background: var(--color-background-secondary);
                  border-right: 1px solid var(--color-border);
                  overflow-y: auto;
                  padding: 16px 0;
              }

              .Trz-nav-item {
                  display: flex;
                  align-items: center;
                  padding: 12px 20px;
                  color: var(--color-text-secondary);
                  cursor: pointer;
                  transition: all var(--transition-speed);
                  position: relative;
                  margin-bottom: 4px;
              }

              .Trz-nav-item:hover {
                  background: var(--color-background-tertiary);
                  color: var(--color-text-primary);
              }

              .Trz-nav-item.active {
                  background: var(--color-background-tertiary);
                  color: var(--color-text-primary);
              }

              .Trz-nav-item.active::before {
                  content: '';
                  position: absolute;
                  left: 0;
                  top: 0;
                  height: 100%;
                  width: 3px;
                  background: var(--color-text-primary);
              }

              .Trz-nav-item .icon {
                  margin-right: 12px;
                  width: 18px;
                  height: 18px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
              }

              .Trz-main-content {
                  flex: 1;
                  overflow-y: auto;
                  padding: 20px;
                  background: var(--color-background-primary);
              }

              .Trz-tab {
                  display: none;
                  animation: fadeIn 0.3s ease;
              }

              .Trz-tab.active {
                  display: block;
              }

              .Trz-dashboard {
                  display: grid;
                  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                  gap: 20px;
              }

              .Trz-card {
                  background: var(--color-background-secondary);
                  border-radius: var(--border-radius);
                  padding: 20px;
                  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
                  transition: all var(--transition-speed);
                  border: 1px solid var(--color-border);
                  position: relative;
                  overflow: hidden;
              }

              .Trz-card:hover {
                  transform: translateY(-2px);
                  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
                  border-color: var(--color-text-primary);
              }

              .Trz-card::after {
                  content: '';
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  width: 100%;
                  height: 3px;
                  background: linear-gradient(90deg, var(--color-text-primary), var(--color-accent));
                  transform: scaleX(0);
                  transform-origin: left;
                  transition: transform var(--transition-speed);
              }

              .Trz-card:hover::after {
                  transform: scaleX(1);
              }

              .Trz-card-header {
                  display: flex;
                  align-items: center;
                  margin-bottom: 16px;
              }

              .Trz-card-icon {
                  width: 32px;
                  height: 32px;
                  border-radius: var(--border-radius);
                  background: var(--color-background-tertiary);
                  color: var(--color-text-primary);
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  margin-right: 12px;
              }

              .Trz-card-title {
                  color: var(--color-text-primary);
                  font-size: 14px;
                  font-weight: 600;
                  text-transform: uppercase;
                  letter-spacing: 0.5px;
              }

              .Trz-card-value {
                  font-size: 24px;
                  font-weight: 700;
                  color: var(--color-text-primary);
                  margin-bottom: 8px;
              }

              .Trz-card-subtitle {
                  color: var(--color-text-secondary);
                  font-size: 12px;
                  text-transform: uppercase;
                  letter-spacing: 0.5px;
              }

              .Trz-card-content {
                  color: var(--color-text-primary);
                  font-size: 14px;
              }

              .Trz-settings {
                  background: var(--color-background-secondary);
                  border-radius: var(--border-radius);
                  overflow: hidden;
                  border: 1px solid var(--color-border);
              }

              .Trz-settings-group {
                  margin-bottom: 20px;
              }

              .Trz-settings-header {
                  padding: 16px 20px;
                  background: var(--color-background-tertiary);
                  color: var(--color-text-primary);
                  font-weight: 600;
                  font-size: 14px;
                  text-transform: uppercase;
                  letter-spacing: 0.5px;
                  border-bottom: 1px solid var(--color-border);
              }

              .Trz-settings-item {
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  padding: 16px 20px;
                  border-bottom: 1px solid var(--color-border);
                  transition: background var(--transition-speed);
              }

              .Trz-settings-item:hover {
                  background: var(--color-background-tertiary);
              }

              .Trz-settings-item:last-child {
                  border-bottom: none;
              }

              .Trz-settings-label {
                  display: flex;
                  align-items: center;
                  color: var(--color-text-primary);
              }

              .Trz-settings-label .icon {
                  margin-right: 12px;
                  color: var(--color-text-secondary);
                  width: 18px;
                  height: 18px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
              }

              .Trz-settings-description {
                  color: var(--color-text-secondary);
                  font-size: 12px;
                  margin-top: 4px;
              }

              .Trz-toggle {
                  position: relative;
                  display: inline-block;
                  width: 48px;
                  height: 24px;
              }

              .Trz-toggle input {
                  opacity: 0;
                  width: 0;
                  height: 0;
              }

              .Trz-toggle-slider {
                  position: absolute;
                  cursor: pointer;
                  top: 0;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  background-color: var(--color-background-tertiary);
                  transition: var(--transition-speed);
                  border-radius: 24px;
                  border: 1px solid var(--color-border);
              }

              .Trz-toggle-slider:before {
                  position: absolute;
                  content: "";
                  height: 16px;
                  width: 16px;
                  left: 3px;
                  bottom: 3px;
                  background-color: var(--color-text-secondary);
                  transition: var(--transition-speed);
                  border-radius: 50%;
              }

              .Trz-toggle input:checked + .Trz-toggle-slider {
                  background-color: var(--color-text-primary);
              }

              .Trz-toggle input:checked + .Trz-toggle-slider:before {
                  transform: translateX(24px);
                  background-color: var(--color-background-primary);
              }

              .Trz-button {
                  background: var(--color-text-primary);
                  color: var(--color-background-primary);
                  border: none;
                  border-radius: var(--border-radius);
                  padding: 10px 16px;
                  font-size: 12px;
                  font-weight: 600;
                  cursor: pointer;
                  transition: all var(--transition-speed);
                  display: inline-flex;
                  align-items: center;
                  justify-content: center;
                  text-transform: uppercase;
                  letter-spacing: 0.5px;
                  position: relative;
                  overflow: hidden;
              }

              .Trz-button:hover {
                  background: var(--color-text-secondary);
                  transform: translateY(-1px);
                  box-shadow: var(--shadow);
              }

              .Trz-button:active {
                  transform: translateY(0);
              }

              .Trz-button .icon {
                  margin-right: 8px;
                  width: 16px;
                  height: 16px;
              }

              .Trz-button::after {
                  content: '';
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  background: rgba(255, 255, 255, 0.1);
                  transform: translateX(-100%);
                  transition: transform 0.5s ease;
              }

              .Trz-button:hover::after {
                  transform: translateX(100%);
              }

              .Trz-chat {
                  display: flex;
                  flex-direction: column;
                  height: 100%;
              }

              .Trz-chat-messages {
                  flex: 1;
                  overflow-y: auto;
                  padding: 16px;
                  background: var(--color-background-secondary);
                  border-radius: var(--border-radius);
                  margin-bottom: 16px;
                  border: 1px solid var(--color-border);
              }

              .Trz-message {
                  margin-bottom: 12px;
                  padding: 12px 16px;
                  background: var(--color-background-tertiary);
                  border-radius: var(--border-radius);
                  color: var(--color-text-primary);
                  font-size: 13px;
                  line-height: 1.4;
                  transition: all var(--transition-speed);
                  animation: slideIn 0.3s ease;
                  border: 1px solid var(--color-border);
                  position: relative;
              }

              .Trz-message:hover {
                  transform: translateY(-1px);
                  background: var(--color-accent);
              }

              .Trz-message-time {
                  color: var(--color-text-tertiary);
                  font-size: 11px;
                  margin-bottom: 4px;
                  font-weight: 500;
              }

              .Trz-message-content {
                  word-break: break-word;
              }

              .Trz-message.system {
                  background: var(--color-background-tertiary);
                  border-left: 3px solid var(--color-text-primary);
              }

              .Trz-message.error {
                  background: var(--color-background-tertiary);
                  border-left: 3px solid var(--color-error);
              }

              .Trz-message.success {
                  background: var(--color-background-tertiary);
                  border-left: 3px solid var(--color-success);
              }

              .Trz-chat-status {
                  padding: 12px;
                  background: var(--color-background-secondary);
                  border-radius: var(--border-radius);
                  color: var(--color-text-secondary);
                  font-size: 12px;
                  text-align: center;
                  border: 1px solid var(--color-border);
                  font-weight: 500;
              }

              .Trz-stats-container {
                  background: var(--color-background-secondary);
                  border-radius: var(--border-radius);
                  overflow: hidden;
                  border: 1px solid var(--color-border);
              }

              .Trz-stats-header {
                  display: flex;
                  border-bottom: 1px solid var(--color-border);
              }

              .Trz-stats-tab {
                  padding: 16px 20px;
                  color: var(--color-text-secondary);
                  cursor: pointer;
                  transition: all var(--transition-speed);
                  position: relative;
              }

              .Trz-stats-tab:hover {
                  color: var(--color-text-primary);
              }

              .Trz-stats-tab.active {
                  color: var(--color-text-primary);
              }

              .Trz-stats-tab.active::after {
                  content: '';
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  width: 100%;
                  height: 3px;
                  background: var(--color-text-primary);
              }

              .Trz-stats-content {
                  padding: 20px;
                  max-height: 500px;
                  overflow-y: auto;
              }

              .Trz-stats-item {
                  margin-bottom: 16px;
                  padding: 16px;
                  background: var(--color-background-tertiary);
                  border-radius: var(--border-radius);
                  transition: all var(--transition-speed);
                  border: 1px solid var(--color-border);
              }

              .Trz-stats-item:hover {
                  transform: translateY(-2px);
                  background: var(--color-accent);
              }

              .Trz-stats-item-header {
                  display: flex;
                  justify-content: space-between;
                  margin-bottom: 10px;
                  color: var(--color-text-primary);
                  font-weight: 500;
              }

              .Trz-stats-item-content {
                  color: var(--color-text-secondary);
                  font-size: 14px;
              }

              .Trz-stats-item-list {
                  list-style: none;
                  margin-top: 10px;
              }

              .Trz-stats-item-list li {
                  padding: 8px 0;
                  border-bottom: 1px solid var(--color-border);
                  color: var(--color-text-secondary);
                  font-size: 13px;
              }

              .Trz-stats-item-list li:last-child {
                  border-bottom: none;
              }

              .Trz-modal-footer {
                  padding: 16px 20px;
                  background: var(--color-background-secondary);
                  border-top: 1px solid var(--color-border);
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
              }

              .Trz-version {
                  color: var(--color-text-tertiary);
                  font-size: 11px;
                  font-weight: 500;
              }

              .Trz-author {
                  color: var(--color-text-secondary);
                  font-size: 11px;
                  font-weight: 500;
              }

              .Trz-author strong {
                  color: var(--color-text-primary);
              }

              .player-grid {
                  display: grid;
                  grid-template-columns: repeat(4, 1fr);
                  gap: 12px;
                  margin-top: 16px;
              }

              .player-card {
                  background: var(--color-background-tertiary);
                  border-radius: var(--border-radius);
                  padding: 12px;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  transition: all var(--transition-speed);
                  position: relative;
                  border: 1px solid var(--color-border);
              }

              .player-card:hover {
                  transform: translateY(-2px);
                  background: var(--color-accent);
                  border-color: var(--color-text-primary);
              }

              .player-avatar {
                  width: 60px;
                  height: 60px;
                  border-radius: 50%;
                  background-size: cover;
                  background-position: center;
                  margin-bottom: 8px;
                  border: 2px solid var(--color-text-primary);
              }

              .player-name {
                  font-weight: 600;
                  color: var(--color-text-primary);
                  text-align: center;
                  margin-bottom: 4px;
              }

              .player-clan {
                  color: var(--color-text-primary);
                  font-weight: 600;
                  margin-bottom: 4px;
              }

              .player-level {
                  font-size: 12px;
                  color: var(--color-text-secondary);
              }

              .player-position {
                  position: absolute;
                  top: 0;
                  left: 0;
                  background: var(--color-text-primary);
                  color: var(--color-background-primary);
                  width: 20px;
                  height: 20px;
                  border-radius: 50%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 12px;
                  font-weight: bold;
              }

              .Trz-flex {
                  display: flex;
              }

              .Trz-flex-between {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
              }

              .Trz-flex-center {
                  display: flex;
                  justify-content: center;
                  align-items: center;
              }

              .Trz-gap-10 {
                  gap: 10px;
              }

              .Trz-gap-20 {
                  gap: 20px;
              }

              .Trz-w-full {
                  width: 100%;
              }

              .Trz-mt-10 {
                  margin-top: 10px;
              }

              .Trz-mt-20 {
                  margin-top: 20px;
              }

              .Trz-mb-10 {
                  margin-bottom: 10px;
              }

              .Trz-mb-20 {
                  margin-bottom: 20px;
              }

              @keyframes fadeIn {
                  from { opacity: 0; }
                  to { opacity: 1; }
              }

              @keyframes slideIn {
                  from { transform: translateY(8px); opacity: 0; }
                  to { transform: translateY(0); opacity: 1; }
              }

              @keyframes pulse {
                  0% { transform: scale(1); opacity: 0.7; }
                  50% { transform: scale(1.2); opacity: 0; }
                  100% { transform: scale(1); opacity: 0; }
              }

              @keyframes rotate {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
              }

              @media (max-width: 768px) {
                  .Trz-modal-content {
                      flex-direction: column;
                      height: auto;
                      max-height: calc(85vh - 130px);
                  }

                  .Trz-sidebar {
                      width: 100%;
                      border-right: none;
                      border-bottom: 1px solid var(--color-border);
                      padding: 0;
                      overflow-x: auto;
                      overflow-y: hidden;
                      display: flex;
                  }

                  .Trz-nav-item {
                      padding: 16px;
                      margin-bottom: 0;
                      flex-shrink: 0;
                  }

                  .Trz-nav-item.active::before {
                      top: auto;
                      bottom: 0;
                      left: 0;
                      width: 100%;
                      height: 3px;
                  }

                  .Trz-main-content {
                      height: calc(85vh - 230px);
                  }

                  .Trz-dashboard {
                      grid-template-columns: 1fr;
                  }

                  .player-grid {
                      grid-template-columns: repeat(2, 1fr);
                  }
              }
          </style>

          <div class="Trz-ui">
              <button class="Trz-main-button" id="TrzMainButton"></button>

              <div class="Trz-backdrop" id="TrzBackdrop"></div>

              <div class="Trz-modal" id="TrzModal">
                  <div class="Trz-modal-header" id="TrzModalHeader">
                      <div class="Trz-modal-title">
                          <div class="icon">
                            <svg fill="#ffffff" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M327.102,273.972l25.935-25.935l11.851,11.851c3.272,3.272,7.562,4.909,11.85,4.909s8.578-1.636,11.85-4.909 c6.545-6.545,6.545-17.156,0-23.7l-11.851-11.851L507.091,93.982c6.545-6.545,6.545-17.156,0-23.7L459.69,22.881 c-6.544-6.545-17.156-6.545-23.7,0c-6.628,6.628-123.568,123.568-130.354,130.354l-11.851-11.851 c-6.544-6.545-17.156-6.545-23.7,0s-6.545,17.156,0,23.7l11.851,11.851l-25.935,25.935l-25.936-25.935l11.851-11.851 c6.545-6.546,6.545-17.157,0-23.702c-6.544-6.545-17.156-6.545-23.7,0l-11.851,11.851C199.579,146.449,82.639,29.509,76.011,22.88 c-6.544-6.545-17.156-6.545-23.7,0L4.909,70.282c-6.545,6.545-6.545,17.156,0,23.7l130.354,130.354l-11.851,11.851 c-6.545,6.545-6.545,17.156,0,23.7c6.544,6.545,17.156,6.546,23.7,0l11.851-11.851l25.936,25.936L4.909,453.961 c-7.908,7.907-5.982,21.2,3.809,26.554c16.34,8.937,34.263,13.513,52.575,13.513c28.21,0,56.36-10.606,77.995-32.241 l116.713-116.713l116.713,116.713c21.655,21.655,49.814,32.241,77.995,32.241c18.311,0,36.236-4.577,52.575-13.513 c9.81-5.364,11.701-18.662,3.809-26.554L327.102,273.972z M447.841,58.431l23.701,23.7l-23.701,23.7l-23.7-23.7L447.841,58.431z M400.44,105.833l23.7,23.7l-23.702,23.702l-23.7-23.7L400.44,105.833z M353.038,153.234l23.7,23.7l-23.7,23.7l-23.7-23.7 L353.038,153.234z M40.46,82.132l23.7-23.7l23.7,23.7l-23.7,23.7L40.46,82.132z M111.562,153.234l-23.702-23.702l23.7-23.7 l23.702,23.702L111.562,153.234z M158.963,200.635l-23.7-23.7l23.7-23.7l23.7,23.7L158.963,200.635z M182.665,224.335l23.7-23.7 l25.936,25.935L208.6,250.271L182.665,224.335z M115.586,438.086c-18.122,18.123-44.025,25.567-68.403,21.001l258.453-258.452 l23.701,23.7L115.586,438.086z M396.414,438.087L279.701,321.373l23.702-23.702l161.415,161.417 C440.439,463.657,414.537,456.208,396.414,438.087z"></path> </g> </g> </g></svg>                        </div>
                          <span>Trz - Wolvesville</span>
                      </div>
                      <button class="Trz-modal-close" id="TrzModalClose">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                      </button>
                  </div>

                  <div class="Trz-modal-content">
                      <div class="Trz-sidebar">
                          <div class="Trz-nav-item active" data-tab="dashboard">
                              <div class="icon">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                      <rect x="3" y="3" width="7" height="7"></rect>
                                      <rect x="14" y="3" width="7" height="7"></rect>
                                      <rect x="14" y="14" width="7" height="7"></rect>
                                      <rect x="3" y="14" width="7" height="7"></rect>
                                  </svg>
                              </div>
                              <span>DASHBOARD</span>
                          </div>
                          <div class="Trz-nav-item" data-tab="chat">
                              <div class="icon">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                  </svg>
                              </div>
                              <span>LOGS</span>
                          </div>
                          <div class="Trz-nav-item" data-tab="stats">
                              <div class="icon">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                      <path d="M18 20V10"></path>
                                      <path d="M12 20V4"></path>
                                      <path d="M6 20v-6"></path>
                                  </svg>
                              </div>
                              <span>STATISTICS</span>
                          </div>
                          <div class="Trz-nav-item" data-tab="tools">
                              <div class="icon">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                                  </svg>
                              </div>
                              <span>TOOLS</span>
                          </div>
                          <div class="Trz-nav-item" data-tab="roomInfo">
                              <div class="icon">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                      <line x1="3" y1="9" x2="21" y2="9"></line>
                                      <line x1="9" y1="21" x2="9" y2="9"></line>
                                  </svg>
                              </div>
                              <span>ROOM INFO</span>
                          </div>
                          <div class="Trz-nav-item" data-tab="settings">
                              <div class="icon">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                      <circle cx="12" cy="12" r="3"></circle>
                                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                                  </svg>
                              </div>
                              <span>SETTINGS</span>
                          </div>
                      </div>

                      <div class="Trz-main-content">
                          <div class="Trz-tab active" id="dashboard">
                              <div class="Trz-dashboard">
                                  <div class="Trz-card">
                                      <div class="Trz-card-header">
                                          <div class="Trz-card-icon">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                                  <circle cx="9" cy="7" r="4"></circle>
                                                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                              </svg>
                                          </div>
                                          <div class="Trz-card-title">THÔNG TIN NGƯỜI DÙNG</div>
                                      </div>
                                      <div class="Trz-card-value" id="playerStatusValue">OFFLINE</div>
                                      <div class="Trz-card-subtitle">Trạng thái và vai trò hiện tại</div>
                                  </div>

                                  <div class="Trz-card">
                                      <div class="Trz-card-header">
                                          <div class="Trz-card-icon">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                  <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                                                  <line x1="16" y1="8" x2="2" y2="22"></line>
                                                  <line x1="17.5" y1="15" x2="9" y2="15"></line>
                                              </svg>
                                          </div>
                                          <div class="Trz-card-title">KINH NGHIỆM</div>
                                      </div>
                                      <div class="Trz-card-value" id="experienceValue">0 XP</div>
                                      <div class="Trz-card-subtitle">Tổng Kinh Nghiệm</div>
                                  </div>

                                  <div class="Trz-card">
                                      <div class="Trz-card-header">
                                          <div class="Trz-card-icon">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                              </svg>
                                          </div>
                                          <div class="Trz-card-title">KHO ĐỒ</div>
                                      </div>
                                      <div class="Trz-card-value" id="inventoryValue">LOADING</div>
                                      <div class="Trz-card-subtitle">Vàng, Hoa hồng và Rương</div>
                                  </div>

                                  <div class="Trz-card">
                                      <div class="Trz-card-header">
                                          <div class="Trz-card-icon">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                  <circle cx="12" cy="12" r="10"></circle>
                                                  <path d="M12 6v6l4 2"></path>
                                              </svg>
                                          </div>
                                          <div class="Trz-card-title">VÒNG QUAY</div>
                                      </div>
                                      <div class="Trz-card-value" id="wheelStatsValue">0 SPINS</div>
                                      <div class="Trz-card-subtitle">Vòng quay và Vàng</div>
                                  </div>
                              </div>

                              <div class="Trz-mt-20">
                                  <h3 style="color: var(--color-text-primary); margin-bottom: 16px; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">TOOLS</h3>
                                  <div class="Trz-flex Trz-gap-10" style="flex-wrap: wrap;">
                                      <button class="Trz-button" id="goldWheelButton">
                                          <div class="icon">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                  <circle cx="12" cy="12" r="10"></circle>
                                                  <path d="M12 6v6l4 2"></path>
                                              </svg>
                                          </div>
                                          QUAY VÒNG QUAY VÀNG
                                      </button>
                                      <button class="Trz-button" id="roseWheelButton">
                                          <div class="icon">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                                              </svg>
                                          </div>
                                          QUAY VÒNG QUAY HOA HỒNG
                                      </button>
                                      <button class="Trz-button" id="lootBoxesButton">
                                          <div class="icon">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                                              </svg>
                                          </div>
                                          MỞ TOÀN BỘ RƯƠNG
                                      </button>
                                      <button class="Trz-button" id="roomManagerButton">
                                          <div class="icon">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                                  <line x1="3" y1="9" x2="21" y2="9"></line>
                                                  <line x1="9" y1="21" x2="9" y2="9"></line>
                                              </svg>
                                          </div>
                                          ROOM MANAGER
                                      </button>
                                  </div>
                              </div>
                          </div>

                          <div class="Trz-tab" id="chat">
                              <div class="Trz-chat">
                                  <div class="Trz-chat-messages" id="chatMessages">
                                      <div class="Trz-message system">
                                          <div class="Trz-message-time">BIG FACT :</div>
                                          <div class="Trz-message-content">Nguyen Truong super handsomeeeeeee</div>
                                      </div>
                                  </div>
                                  <div class="Trz-chat-status" id="chatStatus">
                                      GOLD: 0 | ROSES: 0 | XP: 0 | LEVELS: 0
                                  </div>
                              </div>
                          </div>

                          <div class="Trz-tab" id="stats">
                              <div class="Trz-stats-container">
                                  <div class="Trz-stats-header">
                                      <div class="Trz-stats-tab active" data-stats-tab="chatStats">Thống kê Trò chuyện</div>
                                      <div class="Trz-stats-tab" data-stats-tab="voteStats">Thống kê Bình chọn</div>
                                  </div>

                                  <div class="Trz-stats-content active" id="chatStats">
                                      <div class="Trz-stats-item">
                                          <div class="Trz-stats-item-header">
                                              <span>NO CHAT DATA</span>
                                          </div>
                                          <div class="Trz-stats-item-content">
                                              NULL
                                          </div>
                                      </div>
                                  </div>

                                  <div class="Trz-stats-content" id="voteStats" style="display: none;">
                                      <div class="Trz-stats-item">
                                          <div class="Trz-stats-item-header">
                                              <span>NO VOTE DATA</span>
                                          </div>
                                          <div class="Trz-stats-item-content">
                                              NULL
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div class="Trz-tab" id="tools">
                              <div class="Trz-settings">
                                  <div class="Trz-settings-header">GAME TOOLS</div>

                                  <div class="Trz-settings-item">
                                      <div>
                                          <div class="Trz-settings-label">
                                              <div class="icon">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                                                  </svg>
                                              </div>
                                              <span>AUTO REPLAY [ NOT WORKING !! ]</span>
                                          </div>
                                          <div class="Trz-settings-description">not working pls use extension.</div>
                                      </div>
                                      <label class="Trz-toggle">
                                          <input type="checkbox" id="autoReplayToggle">
                                          <span class="Trz-toggle-slider"></span>
                                      </label>
                                  </div>

                                  <div class="Trz-settings-item">
                                      <div>
                                          <div class="Trz-settings-label">
                                              <div class="icon">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                                      <circle cx="9" cy="7" r="4"></circle>
                                                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                                  </svg>
                                              </div>
                                              <span>Hiển thị level ẩn</span>
                                          </div>
                                          <div class="Trz-settings-description">Hiển thị cấp độ người chơi trong game</div>
                                      </div>
                                      <label class="Trz-toggle">
                                          <input type="checkbox" id="showLevelToggle" checked>
                                          <span class="Trz-toggle-slider"></span>
                                      </label>
                                  </div>

                                  <div class="Trz-settings-item">
                                      <div>
                                          <div class="Trz-settings-label">
                                              <div class="icon">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                                  </svg>
                                              </div>
                                              <span>AUTO BOOST COUPLE</span>
                                          </div>
                                          <div class="Trz-settings-description">AUTO BOOST FOR COUPLE MODE</div>
                                      </div>
                                      <label class="Trz-toggle">
                                          <input type="checkbox" id="autoBstCoupleToggle">
                                          <span class="Trz-toggle-slider"></span>
                                      </label>
                                  </div>

                                  <div class="Trz-settings-item">
                                      <div>
                                          <div class="Trz-settings-label">
                                              <div class="icon">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                                  </svg>
                                              </div>
                                              <span>AUTO BOOST NORMAL</span>
                                          </div>
                                          <div class="Trz-settings-description">AUTO BOOST FOR NORMAL MODE</div>
                                      </div>
                                      <label class="Trz-toggle">
                                          <input type="checkbox" id="autoBstNormalToggle">
                                          <span class="Trz-toggle-slider"></span>
                                      </label>
                                  </div>
                              </div>
                          </div>

                          <div class="Trz-tab" id="roomInfo">
                              <div class="Trz-card Trz-mb-20">
                                  <div class="Trz-card-header">
                                      <div class="Trz-card-icon">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                              <circle cx="12" cy="12" r="10"></circle>
                                              <line x1="2" y1="12" x2="22" y2="12"></line>
                                              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                          </svg>
                                      </div>
                                      <div class="Trz-card-title">ROOM INFORMATION</div>
                                  </div>
                                  <div class="Trz-card-content">
                                      <div class="Trz-flex-between Trz-mb-10">
                                          <span>GAME ID:</span>
                                          <span id="room-game-id">-</span>
                                      </div>
                                      <div class="Trz-flex-between Trz-mb-10">
                                          <span>SERVER:</span>
                                          <span id="room-server-region">-</span>
                                      </div>
                                      <div class="Trz-flex-between">
                                          <span>ONLINE PLAYERS:</span>
                                          <span id="room-player-count">-</span>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div class="Trz-tab" id="settings">
                              <div class="Trz-settings">
                                  <div class="Trz-settings-header">GENERAL SETTINGS</div>

                                  <div class="Trz-settings-item">
                                      <div>
                                          <div class="Trz-settings-label">
                                              <div class="icon">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                                  </svg>
                                              </div>
                                              <span>DEBUG MODE</span>
                                          </div>
                                          <div class="Trz-settings-description">NULL</div>
                                      </div>
                                      <label class="Trz-toggle">
                                          <input type="checkbox" id="debugModeToggle">
                                          <span class="Trz-toggle-slider"></span>
                                      </label>
                                  </div>

                                  <div class="Trz-settings-item">
                                      <div>
                                          <div class="Trz-settings-label">
                                              <div class="icon">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                                  </svg>
                                              </div>
                                              <span>Thống kê Trò chuyện</span>
                                          </div>
                                          <div class="Trz-settings-description">Theo dõi và phân tích tin nhắn trò chuyện</div>
                                      </div>
                                      <label class="Trz-toggle">
                                          <input type="checkbox" id="chatStatsToggle">
                                          <span class="Trz-toggle-slider"></span>
                                      </label>
                                  </div>

                                  <div class="Trz-settings-item">
                                      <div>
                                          <div class="Trz-settings-label">
                                              <div class="icon">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                      <polyline points="9 11 12 14 22 4"></polyline>
                                                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                                                  </svg>
                                              </div>
                                              <span>Thống kê Bình chọn</span>
                                          </div>
                                          <div class="Trz-settings-description">Theo dõi và phân tích Bình chọn</div>
                                      </div>
                                      <label class="Trz-toggle">
                                          <input type="checkbox" id="voteStatsToggle">
                                          <span class="Trz-toggle-slider"></span>
                                      </label>
                                  </div>

                                  <div class="Trz-settings-item">
                                      <div>
                                          <div class="Trz-settings-label">
                                              <div class="icon">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                      <circle cx="12" cy="12" r="10"></circle>
                                                      <line x1="15" y1="9" x2="9" y2="15"></line>
                                                      <line x1="9" y1="9" x2="15" y2="15"></line>
                                                  </svg>
                                              </div>
                                              <span>Đặt lại Cài đặt</span>
                                          </div>
                                          <div class="Trz-settings-description">Khôi phục toàn bộ cài đặt về mặc định</div>
                                      </div>
                                      <button class="Trz-button" id="resetSettingsButton">RESET</button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div class="Trz-modal-footer">
                      <div class="Trz-version">v${SCRIPT_VERSION}</div>
                      <div class="Trz-author">CREATED BY   <strong>Trz - Nguyen Truong</strong></div>
                  </div>
              </div>
          </div>
      `,

    initializeInterface: () => {
      if (APPLICATION_STATE.isUIInitialized) return

      $("html").append(USER_INTERFACE.generateInterfaceHTML())
      APPLICATION_STATE.isUIInitialized = true

      $("#TrzMainButton").on("click", () => {
        $("#TrzBackdrop").addClass("active")
        $("#TrzModal").addClass("active")
        UTILITY_FUNCTIONS.scrollChatToBottom()
      })

      $("#TrzModalClose, #TrzBackdrop").on("click", () => {
        $("#TrzBackdrop").removeClass("active")
        $("#TrzModal").removeClass("active")
      })

      $(".Trz-nav-item").on("click", function () {
        const tabId = $(this).data("tab")
        $(".Trz-nav-item").removeClass("active")
        $(this).addClass("active")
        $(".Trz-tab").removeClass("active")
        $(`#${tabId}`).addClass("active")

        if (tabId === "stats") {
          USER_INTERFACE.displayChatStatistics()
          USER_INTERFACE.displayVoteStatistics()
        }
      })

      $(".Trz-stats-tab").on("click", function () {
        const statsTabId = $(this).data("stats-tab")
        $(".Trz-stats-tab").removeClass("active")
        $(this).addClass("active")
        $(".Trz-stats-content").hide()
        $(`#${statsTabId}`).show()

        if (statsTabId === "chatStats") {
          USER_INTERFACE.displayChatStatistics()
        } else if (statsTabId === "voteStats") {
          USER_INTERFACE.displayVoteStatistics()
        }
      })

      $("#goldWheelButton").on("click", () => {
        fetch(`https://core.api-wolvesville.com/rewards/wheelRewardWithSecret/${GAME_FUNCTIONS.getRewardSecret()}`, {
          method: "POST",
          headers: GAME_FUNCTIONS.getRequestHeaders(),
        })
      })

      $("#roseWheelButton").on("click", () => {
        fetch("https://core.api-wolvesville.com/rewards/goldenWheelSpin", {
          method: "POST",
          headers: GAME_FUNCTIONS.getRequestHeaders(),
        })
      })

      $("#lootBoxesButton").on("click", () => {
        if (APPLICATION_STATE.playerInventory?.lootBoxes?.length) {
          GAME_FUNCTIONS.openLootBox()
        }
      })

      $("#roomManagerButton").on("click", () => {
        // Implement room manager functionality
        console.log("Room Manager button clicked")
      })

      $("#debugModeToggle")
        .prop("checked", APPLICATION_STATE.userSettings.DEBUG_MODE)
        .on("change", function () {
          APPLICATION_STATE.userSettings.DEBUG_MODE = this.checked
          UTILITY_FUNCTIONS.saveUserSettings()
        })

      $("#showLevelToggle")
        .prop("checked", APPLICATION_STATE.userSettings.SHOW_HIDDEN_LEVEL)
        .on("change", function () {
          APPLICATION_STATE.userSettings.SHOW_HIDDEN_LEVEL = this.checked
          UTILITY_FUNCTIONS.saveUserSettings()
        })

      $("#autoReplayToggle")
        .prop("checked", APPLICATION_STATE.userSettings.AUTO_REPLAY)
        .on("change", function () {
          APPLICATION_STATE.userSettings.AUTO_REPLAY = this.checked
          GAME_FUNCTIONS.handleAutoReplay()
          UTILITY_FUNCTIONS.saveUserSettings()
        })

      $("#autoBstCoupleToggle")
        .prop("checked", APPLICATION_STATE.userSettings.AUTO_BOOST_COUPLE)
        .on("change", function () {
          APPLICATION_STATE.userSettings.AUTO_BOOST_COUPLE = this.checked
          UTILITY_FUNCTIONS.saveUserSettings()
        })

      $("#autoBstNormalToggle")
        .prop("checked", APPLICATION_STATE.userSettings.AUTO_BOOST_NORMAL)
        .on("change", function () {
          APPLICATION_STATE.userSettings.AUTO_BOOST_NORMAL = this.checked
          UTILITY_FUNCTIONS.saveUserSettings()
        })

      $("#chatStatsToggle")
        .prop("checked", APPLICATION_STATE.userSettings.CHAT_STATISTICS)
        .on("change", function () {
          APPLICATION_STATE.userSettings.CHAT_STATISTICS = this.checked
          UTILITY_FUNCTIONS.saveUserSettings()
        })

      $("#voteStatsToggle")
        .prop("checked", APPLICATION_STATE.userSettings.VOTE_STATISTICS)
        .on("change", function () {
          APPLICATION_STATE.userSettings.VOTE_STATISTICS = this.checked
          UTILITY_FUNCTIONS.saveUserSettings()
        })

      $("#resetSettingsButton").on("click", () => {
        APPLICATION_STATE.userSettings = { ...DEFAULT_SETTINGS }
        UTILITY_FUNCTIONS.saveUserSettings()
        USER_INTERFACE.addChatMessage("SETTINGS RESET TO DEFAULTS", "success")

        $("#debugModeToggle").prop("checked", APPLICATION_STATE.userSettings.DEBUG_MODE)
        $("#showLevelToggle").prop("checked", APPLICATION_STATE.userSettings.SHOW_HIDDEN_LEVEL)
        $("#autoReplayToggle").prop("checked", APPLICATION_STATE.userSettings.AUTO_REPLAY)
        $("#autoBstCoupleToggle").prop("checked", APPLICATION_STATE.userSettings.AUTO_BOOST_COUPLE)
        $("#autoBstNormalToggle").prop("checked", APPLICATION_STATE.userSettings.AUTO_BOOST_NORMAL)
        $("#chatStatsToggle").prop("checked", APPLICATION_STATE.userSettings.CHAT_STATISTICS)
        $("#voteStatsToggle").prop("checked", APPLICATION_STATE.userSettings.VOTE_STATISTICS)
      })

      let dragStartX,
        dragStartY,
        dragOffsetX,
        dragOffsetY,
        isDragging = false,
        currentX = 0,
        currentY = 0

      const dragStart = (event) => {
        if (event.type === "touchstart") {
          dragOffsetX = event.touches[0].clientX - currentX
          dragOffsetY = event.touches[0].clientY - currentY
        } else {
          dragOffsetX = event.clientX - currentX
          dragOffsetY = event.clientY - currentY
        }

        if (
          event.target === document.getElementById("TrzModalHeader") ||
          event.target.parentNode === document.getElementById("TrzModalHeader")
        ) {
          isDragging = true
        }
      }

      const dragEnd = () => {
        isDragging = false
      }

      const drag = (event) => {
        if (isDragging) {
          event.preventDefault()

          if (event.type === "touchmove") {
            dragStartX = event.touches[0].clientX - dragOffsetX
            dragStartY = event.touches[0].clientY - dragOffsetY
          } else {
            dragStartX = event.clientX - dragOffsetX
            dragStartY = event.clientY - dragOffsetY
          }

          currentX = dragStartX
          currentY = dragStartY

          const modal = document.getElementById("TrzModal")
          modal.style.transform = "translate(0, 0)"
          modal.style.top = dragStartY + "px"
          modal.style.left = dragStartX + "px"
        }
      }

      document.getElementById("TrzModalHeader").addEventListener("touchstart", dragStart, false)
      document.getElementById("TrzModalHeader").addEventListener("touchend", dragEnd, false)
      document.getElementById("TrzModalHeader").addEventListener("touchmove", drag, false)
      document.getElementById("TrzModalHeader").addEventListener("mousedown", dragStart, false)
      document.addEventListener("mouseup", dragEnd, false)
      document.addEventListener("mousemove", drag, false)

      USER_INTERFACE.injectMessageHistory()
    },

    setDocumentTitle: () => {
      document.title = APPLICATION_STATE.documentTitle || `Trz v${SCRIPT_VERSION}`
    },

    addChatMessage: (message, type = "") => {
      UTILITY_FUNCTIONS.logMessage(message)

      if (Array.isArray(message)) {
        const [eventType, data] = message

        if (eventType === "player-joined-and-equipped-items") {
          const payload = typeof data === "string" ? JSON.parse(data) : data
          const playerData = payload.player
          if (playerData.spectate) {
            const spectatorMessage = `[👀] Spectator ${playerData.username} joined (Level ${playerData.level})`
            USER_INTERFACE.addMessageToChat(spectatorMessage, "system")
          } else {
            const joinedMessage = `[🧍] ${playerData.username} joined (Level ${playerData.level})`
            USER_INTERFACE.addMessageToChat(joinedMessage, "system")
          }

          return
        }
      }

      if (typeof message === "string") {
        USER_INTERFACE.addMessageToChat(message, type)
      }


      let messageType = type
      if (!messageType && typeof message === "string") {
        if (message.includes("FIRE") || message.includes("ROBOT") || message.includes("LINK")) {
          messageType = "system"
        } else if (message.includes("SKULL")) {
          messageType = "error"
        } else if (message.includes("FLASK") || message.includes("UP")) {
          messageType = "success"
        }
      }

      USER_INTERFACE.addMessageToChat(message, messageType)
    },

    addMessageToChat: (message, type = "") => {
      const messageHTML = `
              <div class="Trz-message ${type}">
                  <div class="Trz-message-time">${UTILITY_FUNCTIONS.formatTimestamp(new Date())}</div>
                  <div class="Trz-message-content">${message}</div>
              </div>
          `

      APPLICATION_STATE.messageHistory.push(messageHTML)
      $("#chatMessages").append(messageHTML)
      UTILITY_FUNCTIONS.scrollChatToBottom()
    },

    injectMessageHistory: () => {
      const currentTime = Date.now()
      if (currentTime - APPLICATION_STATE.historyLastUpdated < 500 && APPLICATION_STATE.historyLastUpdated !== 0) {
        return
      }

      APPLICATION_STATE.historyLastUpdated = currentTime

      if (APPLICATION_STATE.messageHistory.length) {
        const currentMessageCount = $("#chatMessages .Trz-message").length
        if (currentMessageCount < APPLICATION_STATE.messageHistory.length) {
          for (let i = currentMessageCount; i < APPLICATION_STATE.messageHistory.length; i++) {
            $("#chatMessages").append(APPLICATION_STATE.messageHistory[i])
          }
          UTILITY_FUNCTIONS.scrollChatToBottom()
        }
      } else {
        USER_INTERFACE.addChatMessage(`Injected v${SCRIPT_VERSION}`, "system")
      }
    },

    updateChatStatus: () => {
      if (APPLICATION_STATE.playerInventory) {
        $("#chatStatus").html(`
          <span style="display:inline-block;min-width:70px;text-align:left;">
            <img src=\"https://www.wolvesville.com/static/media/silver_coin.7b12538367a6d2cfa2c0.png\" alt=\"GOLD\" style=\"height:18px;vertical-align:middle;\"> ${APPLICATION_STATE.playerInventory.silverCount}
          </span>
          <span style="display:inline-block;min-width:70px;text-align:left;margin-left:16px;">
            <img src=\"https://www.wolvesville.com/static/media/rose_inventory_single.eb6af861d48bff85f73a.png\" alt=\"ROSES\" style=\"height:18px;vertical-align:middle;\"> ${APPLICATION_STATE.playerInventory.roseCount}
          </span>
          <span style="display:inline-block;min-width:70px;text-align:left;margin-left:16px;">
            <img src=\"https://www.wolvesville.com/static/media/loot_box_dashboard_icon.ef9ea057ecec49e55c6c.png\" alt=\"BOXES\" style=\"height:18px;vertical-align:middle;\"> ${APPLICATION_STATE.playerInventory.lootBoxes?.length || 0}
          </span>
        `)
      }
    },

    updateDashboard: () => {
      if (APPLICATION_STATE.playerRole) {
        $("#playerStatusValue").text(`${APPLICATION_STATE.playerRole.name} (${APPLICATION_STATE.playerRole.id})`)
      } else if (APPLICATION_STATE.currentPlayer) {
        $("#playerStatusValue").text(
          `${APPLICATION_STATE.currentPlayer.username} LEVEL ${APPLICATION_STATE.currentPlayer.level}`,
        )
      } else {
        $("#playerStatusValue").text("NOT IN GAME")
      }

      $("#experienceValue").text(`${APPLICATION_STATE.gameStatistics.totalExperience} XP`)

      if (APPLICATION_STATE.playerInventory) {
        $("#inventoryValue").html(`
          <span style="display:inline-block;min-width:70px;text-align:left;">
            <img src=\"https://www.wolvesville.com/static/media/silver_coin.7b12538367a6d2cfa2c0.png\" alt=\"GOLD\" style=\"height:18px;vertical-align:middle;\"> ${APPLICATION_STATE.playerInventory.silverCount}
          </span>
          <span style="display:inline-block;min-width:70px;text-align:left;margin-left:16px;">
            <img src=\"https://www.wolvesville.com/static/media/rose_inventory_single.eb6af861d48bff85f73a.png\" alt=\"ROSES\" style=\"height:18px;vertical-align:middle;\"> ${APPLICATION_STATE.playerInventory.roseCount}
          </span>
          <span style="display:inline-block;min-width:70px;text-align:left;margin-left:16px;">
            <img src=\"https://www.wolvesville.com/static/media/loot_box_dashboard_icon.ef9ea057ecec49e55c6c.png\" alt=\"BOXES\" style=\"height:18px;vertical-align:middle;\"> ${APPLICATION_STATE.playerInventory.lootBoxes?.length || 0}
          </span>
        `)
      } else {
        $("#inventoryValue").text("NO INVENTORY DATA")
      }

      $("#wheelStatsValue").text(
        `${APPLICATION_STATE.gameStatistics.goldWheelSpins} VÒNG QUAY, VÀNG ${APPLICATION_STATE.gameStatistics.goldWheelSilver}`,
      )
    },

    displayChatStatistics: () => {
      const chatStatsContainer = $("#chatStats").empty()

      if (Object.keys(APPLICATION_STATE.chatMessages).length === 0 || APPLICATION_STATE.gamePlayers.length === 0) {
        chatStatsContainer.html(`
                  <div class="Trz-stats-item">
                      <div class="Trz-stats-item-header">
                          <span>Không có thống kê trò chuyện</span>
                      </div>
                      <div class="Trz-stats-item-content">
                          Tham gia một trận để bắt đầu thu thập thống kê trò chuyện
                      </div>
                  </div>
              `)
        return
      }

      for (let i = 1; i <= 16; i++) {
        const player = APPLICATION_STATE.gamePlayers.find((p) => p.gridIdx + 1 === i)
        const messages = (player && APPLICATION_STATE.chatMessages[player.id]) || []

        const statsItem = $(`
                  <div class="Trz-stats-item">
                      <div class="Trz-stats-item-header">
                          <span>${i}. ${player ? player.username : `PLAYER ${i}`}</span>
                          <span>${messages.length} MESSAGES</span>
                      </div>
                      <div class="Trz-stats-item-content">
                          ${messages.length ? "" : "NO MESSAGES"}
                      </div>
                  </div>
              `)

        if (messages.length) {
          const messageList = $('<ul class="Trz-stats-item-list"></ul>')
          messages.forEach((msg) => {
            messageList.append(`<li>[${msg.timestamp}] ${msg.msg}</li>`)
          })
          statsItem.find(".Trz-stats-item-content").append(messageList)
        }

        chatStatsContainer.append(statsItem)
      }
    },

    displayVoteStatistics: () => {
      const voteStatsContainer = $("#voteStats").empty()

      if (Object.keys(APPLICATION_STATE.voteStatistics).length === 0) {
        voteStatsContainer.html(`
                  <div class="Trz-stats-item">
                      <div class="Trz-stats-item-header">
                          <span>Không có thống kê bình chọn</span>
                      </div>
                      <div class="Trz-stats-item-content">
                          Tham gia một trận để bắt đầu thu thập thống kê bình chọn
                      </div>
                  </div>
              `)
        return
      }

      Object.keys(APPLICATION_STATE.voteStatistics)
        .sort((a, b) => Number.parseInt(a) - Number.parseInt(b))
        .forEach((day) => {
          const dayVotes = APPLICATION_STATE.voteStatistics[day]
          const statsItem = $(`
                      <div class="Trz-stats-item">
                          <div class="Trz-stats-item-header">
                              <span>DAY ${day}</span>
                          </div>
                          <div class="Trz-stats-item-content">
                              ${Object.keys(dayVotes).length ? "" : "NO VOTES RECORDED"}
                          </div>
                      </div>
                  `)

          if (Object.keys(dayVotes).length) {
            const voteList = $('<ul class="Trz-stats-item-list"></ul>')
            Object.entries(dayVotes).forEach(([voterId, targetId]) => {
              const voter = APPLICATION_STATE.gamePlayers.find((p) => p.id === voterId)
              const target = APPLICATION_STATE.gamePlayers.find((p) => p.id === targetId)
              voteList.append(
                `<li>${voter ? `${voter.gridIdx + 1}. ${voter.username}` : "UNKNOWN"} ARROW ${target ? `${target.gridIdx + 1}. ${target.username}` : "UNKNOWN"}</li>`,
              )
            })
            statsItem.find(".Trz-stats-item-content").append(voteList)
          }

          voteStatsContainer.append(statsItem)
        })
    },

    setPlayersLevel: () => {
      if (APPLICATION_STATE.userSettings.SHOW_HIDDEN_LEVEL && APPLICATION_STATE.gamePlayers) {
        APPLICATION_STATE.gamePlayers.forEach((player) => {
          const playerText = `${player.gridIdx + 1} ${player.username}`
          const playerElement = $(`div:contains("${playerText}")`)

          if (playerElement.length) {
            const levelText = `${player.gridIdx + 1} ${player.username} [${player.level}] ${player.clanTag || ""}`
            playerElement.last().html(levelText).addClass("Trz-username").parent().addClass("Trz-username-box")
          }
        })
      }
    },
  }

  const GAME_FUNCTIONS = {
    getRequestHeaders: () => ({
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${APPLICATION_STATE.authenticationTokens.idToken}`,
      "Cf-JWT": APPLICATION_STATE.authenticationTokens["Cf-JWT"],
      ids: 1,
    }),

    getRewardSecret: () => {
      const playerId = APPLICATION_STATE.currentPlayer.id
      const silverCount = APPLICATION_STATE.playerInventory.silverCount
      const totalXp = APPLICATION_STATE.currentPlayer.xpTotal
      const roseCount = APPLICATION_STATE.playerInventory.roseCount

      UTILITY_FUNCTIONS.logMessage([playerId, silverCount, totalXp, roseCount])

      return `${playerId.charAt(silverCount % 32)}${playerId.charAt(totalXp % 32)}${new Date().getTime().toString(16)}${playerId.charAt((silverCount + 1) % 32)}${playerId.charAt(roseCount % 32)}`
    },

    async openLootBox(attemptCount = 0) {
      if (attemptCount === 40) {
        USER_INTERFACE.addChatMessage("HOURGLASS WAIT 1 MINUTE BEFORE RETRY", "system")
        await UTILITY_FUNCTIONS.delayExecution(60000)
        attemptCount = 0
      }

      const response = await fetch(
        `https://core.api-wolvesville.com/inventory/lootBoxes/${APPLICATION_STATE.playerInventory.lootBoxes[0].id}`,
        {
          method: "POST",
          headers: GAME_FUNCTIONS.getRequestHeaders(),
        },
      )

      if (response.status === 200) {
        APPLICATION_STATE.playerInventory.lootBoxes.shift()
        if (APPLICATION_STATE.playerInventory.lootBoxes.length) {
          await GAME_FUNCTIONS.openLootBox(attemptCount + 1)
        }
        USER_INTERFACE.updateDashboard()
      }
    },

    handleAutoReplay: () => {
      if (APPLICATION_STATE.userSettings.AUTO_REPLAY) {
        APPLICATION_STATE.activeIntervals.autoReplay = setInterval(() => {
          const buttonTexts = [
            "OK",
            "AGREE",
            "TAMAM",
            "OKE",
            "U REDU",
            "D'acord",
            "OK",
            "DOBRO",
            "OK",
            "OK",
            "Vale",
            "Εντάξει",
            "Sige",
            "D'accord",
            "Va bene",
            "Gerai",
            "Rendben",
            "OK",
            "Va bè",
            "OK",
            "OK",
            "OK",
            "OK",
            "OK",
            "OK",
            "OK",
            "Në rregull",
            "V redu",
            "OK",
            "OK",
            "Tamam",
            "ตกลง",
            "好",
            "好",
            "はい",
            "확인",
            "موافق",
            "კარგი",
            "ठीक है",
            "ຕົກລົງ",
            "בסדר",
          ]

          const clickTextMatch = (textArray) => {
            for (const text of textArray) {
              const element = $(`div:contains("${text}")`)
              if (element.length) {
                element.click()
                break
              }
            }
          }

          clickTextMatch([
            "START GAME",
            "START GAME",
            "BAŞLA",
            "MULAI",
            "POČNI",
            "INICIA",
            "SPUSTIT HRU",
            "ПОЧНИ",
            "START",
            "SPIEL STARTEN",
            "EMPEZAR",
            "JUGAR",
            "ΠΑΙΞΕ",
            "MAGLARO",
            "COMMENCER",
            "POKRENI",
            "AVVIA",
            "PRADĖTI",
            "INDÍTÁS",
            "MULAKAN",
            "STARTA",
            "SPELEN",
            "SPIELEN",
            "ROZPOCZNIJ",
            "INICIAR",
            "COMEÇAR",
            "ПОЧАТИ",
            "НАЧАТЬ",
            "ÎNCEPE",
            "FILO",
            "ZAČNI",
            "ZAČAŤ",
            "ALOITA",
            "BAŞLAT",
            "เริ่มเกม",
            "開始遊戲",
            "開始游戏",
            "ゲーム開始",
            "게임 시작",
            "ابدأ",
            "დაწყება",
            "प्रारंभ",
            "ເລີ່ມ",
            "התחל",
          ])

          clickTextMatch([
            "Play again",
            "PLAY AGAIN",
            "Yenidən oynamaq",
            "Main lagi",
            "Ponovno igraj",
            "Torna a jugar",
            "Hrát znovu",
            "Ponovi",
            "Spil igen",
            "Wiederholen",
            "Jugar otra vez",
            "Παίξε ξανά",
            "Maglaro muli",
            "Rejouer",
            "Gioca ancora",
            "Žaisti dar kartą",
            "Újra",
            "Main lagi",
            "Speel opnieuw",
            "Ponów",
            "Jogar de novo",
            "Reiniciar",
            "Повторити",
            "Сыграть ещё раз",
            "Joacă din nou",
            "Luaj përsëri",
            "Igraj ponovno",
            "Hraj znovu",
            "Uusiksi",
            "Tekrar oyna",
            "เล่นอีกครั้ง",
            "再玩一次",
            "再玩一次",
            "もう一度プレイ",
            "다시 하기",
            "العب مجددًا",
            "თავიდან თამაში",
            "फिर से खेलें",
            "ຫຼິ້ນອີກຄັ້ງ",
            "שחק שוב",
          ])

          clickTextMatch([
            "Continue",
            "CONTINUE",
            "Davam et",
            "Lanjutkan",
            "Nastavi",
            "Continua",
            "Pokračovat",
            "Продолжи",
            "Fortsett",
            "Fortfahren",
            "Continuar",
            "Συνέχεια",
            "Magpatuloy",
            "Continuer",
            "Prosegui",
            "Tęsti",
            "Folytatás",
            "Teruskan",
            "Ga 'nnanze",
            "Doorgaan",
            "Weitermachen",
            "Kontynuuj",
            "Prosseguir",
            "Продолжить",
            "Continuă",
            "Vazhdo",
            "Nadaljuj",
            "Pokračuj",
            "Jatka",
            "Devam et",
            "ดำเนินการต่อ",
            "继续",
            "繼續",
            "続ける",
            "계속",
            "استمر",
            "გაგრძელება",
            "जारी रखें",
            "ສືບຕໍ່",
            "המשך",
          ])

          if ($('div:contains("Play again"), div:contains("PLAY AGAIN")').length) {
            clickTextMatch(buttonTexts)
          }
        }, 500)
      } else {
        clearInterval(APPLICATION_STATE.activeIntervals.autoReplay)
      }
    },

    updateRoomInfo: (roomData) => {
      if (!roomData) return

      $("#room-game-id").text(roomData.gameId || "-")

      const serverRegion = roomData.serverUrl?.includes("game-asia") ? "ASIA" : "EUROPE"
      $("#room-server-region").text(serverRegion)

      $("#room-player-count").text(roomData.onlinePlayerCountForGameMode || "-")
    },

    updatePlayerGrid: async (players) => {
      if (!players || !players.length) return

      const playerGrid = $("#player-grid")
      playerGrid.empty()

      for (let i = 0; i < 16; i++) {
        playerGrid.append(`
                  <div class="player-card empty" id="player-position-${i}">
                      <div class="player-position">${i + 1}</div>
                      <div class="player-avatar" style="background-image: url('/placeholder.svg?height=60&width=60')"></div>
                      <div class="player-name">EMPTY</div>
                      <div class="player-level">-</div>
                  </div>
              `)
      }

      for (const player of players) {
        if (player.gridIdx === undefined || player.gridIdx < 0 || player.gridIdx >= 16) continue

        $(`#player-position-${player.gridIdx}`)
          .html(`
                  <div class="player-position">${player.gridIdx + 1}</div>
                  <div class="player-avatar" style="background-image: url('/placeholder.svg?height=60&width=60')"></div>
                  <div class="player-name">${player.username}</div>
                  ${player.clanTag ? `<div class="player-clan">${player.clanTag}</div>` : ""}
                  <div class="player-level">LEVEL ${player.level}</div>
              `)
          .removeClass("empty")
      }
    },

    connectSocket: () => {
      if (APPLICATION_STATE.gameSocket || !APPLICATION_STATE.currentGameId || !APPLICATION_STATE.serverUrl) return

      APPLICATION_STATE.chatMessages = {}
      APPLICATION_STATE.voteStatistics = {}

      const gameState = {
        hosting: false,
        lovers: [],
        deads: [],
        jwTarget: null,
        wwChatSent: false,
        wolves: [],
        wwVoteTarget: null,
        voteCounts: {},
        areWolvesCouple: false,
        voteInterval: null,
        currentDay: 0,
      }

      APPLICATION_STATE.gameSocket = io(`wss://${APPLICATION_STATE.serverUrl.replace("https://", "")}/`, {
        query: {
          firebaseToken: APPLICATION_STATE.authenticationTokens.idToken,
          gameId: APPLICATION_STATE.currentGameId,
          reconnect: true,
          ids: 1,
          "Cf-JWT": APPLICATION_STATE.authenticationTokens["Cf-JWT"],
          apiV: 1,
          EIO: 4,
        },
        transports: ["websocket"],
      })

      const soloRoles = [
        "serial-killer",
        "arsonist",
        "corruptor",
        "bandit",
        "cannibal",
        "evil-detective",
        "bomber",
        "alchemist",
        "siren",
        "illusionist",
        "blight",
        "sect-leader",
        "zombie",
      ]

      APPLICATION_STATE.gameSocket.on("disconnect", () => {
        USER_INTERFACE.addChatMessage("[ Trz WOV ] SOCKET DISCONNECTED")
        APPLICATION_STATE.gameSocket = null
        APPLICATION_STATE.chatMessages = {}
      })

      APPLICATION_STATE.gameSocket.on("game-players-killed", (data) => {
        JSON.parse(data).victims.forEach((victim) => {
          const player = APPLICATION_STATE.gamePlayers.find((p) => p.id === victim.targetPlayerId)
          if (player) {
            gameState.deads.push(player.id)
            USER_INTERFACE.addChatMessage(
              `[ GAME ] ☠️${player.gridIdx + 1}. ${player.username} (${victim.targetPlayerRole}) BY ${victim.cause}`,
            )
          }
        })
      })

      APPLICATION_STATE.gameSocket.on("host-changed", () => (gameState.hosting = true))

      APPLICATION_STATE.gameSocket.on("game-reconnect-set-players", (data) => {
        const players = JSON.parse(data)
        Object.values(players).forEach((player) => {
          if (!player.isAlive) {
            gameState.deads.push(player.id)
          }
        })
      })

      APPLICATION_STATE.gameSocket.on("game-over-awards-available", (data) => {
        const awardData = JSON.parse(data)

        if (awardData.playerAward.canClaimDoubleXp) {
          APPLICATION_STATE.gameSocket.emit("game-over-double-xp")
          USER_INTERFACE.addChatMessage("[ GAME ] X2 XP", "success")

          setTimeout(() => {
            const doubleXp = awardData.playerAward.awardedTotalXp * 2
            APPLICATION_STATE.gameStatistics.totalExperience += doubleXp
            USER_INTERFACE.addChatMessage(`[ GAME ] ${doubleXp} XP (X2)`, "success")

            if (awardData.playerAward.awardedLevels) {
              APPLICATION_STATE.currentPlayer.level += awardData.playerAward.awardedLevels
              APPLICATION_STATE.gameStatistics.totalLevels += awardData.playerAward.awardedLevels
              USER_INTERFACE.addChatMessage(`[ GAME ] UP ${APPLICATION_STATE.currentPlayer.level}`, "success")
            }

            USER_INTERFACE.updateChatStatus()
            USER_INTERFACE.updateDashboard()

            setTimeout(() => APPLICATION_STATE.gameSocket.disconnect(), 500)
          }, 1000)
        } else {
          APPLICATION_STATE.gameStatistics.totalExperience += awardData.playerAward.awardedTotalXp
          USER_INTERFACE.addChatMessage(`[ GAME ] ${awardData.playerAward.awardedTotalXp} XP`, "success")

          if (awardData.playerAward.awardedLevels) {
            APPLICATION_STATE.currentPlayer.level += awardData.playerAward.awardedLevels
            APPLICATION_STATE.gameStatistics.totalLevels += awardData.playerAward.awardedLevels
            USER_INTERFACE.addChatMessage(`[ GAME ] UP ${APPLICATION_STATE.currentPlayer.level}`, "success")
          }

          setTimeout(() => APPLICATION_STATE.gameSocket.disconnect(), 500)
        }

        USER_INTERFACE.updateChatStatus()
        USER_INTERFACE.updateDashboard()
      })

      APPLICATION_STATE.gameSocket.onAny((...args) => UTILITY_FUNCTIONS.logMessage(args))

      if (
        APPLICATION_STATE.userSettings.AUTO_BOOST_COUPLE &&
        APPLICATION_STATE.gameConfiguration?.gameMode === "custom" &&
        APPLICATION_STATE.gameConfiguration?.allCoupled
      ) {
        APPLICATION_STATE.gameSocket.on("game-joined", () =>
          USER_INTERFACE.addChatMessage("[ Trz WOV ] CONNECT SOCKET GAME CPL"),
        )

        APPLICATION_STATE.gameSocket.on("game-cupid-lover-ids-and-roles", (data) => {
          const loverData = JSON.parse(data)

          if (APPLICATION_STATE.currentPlayer && APPLICATION_STATE.playerRole) {
            const otherLoverIds = loverData.loverPlayerIds.filter((id) => id !== APPLICATION_STATE.currentPlayer.id)
            const otherLoverRoles = loverData.loverRoles.filter((role) => role !== APPLICATION_STATE.playerRole.id)

            gameState.lovers = otherLoverIds.map((id, index) => ({
              id: id,
              role: otherLoverRoles[index],
            }))

            if (gameState.lovers.length === 1) {
              const lover = APPLICATION_STATE.gamePlayers.find((p) => p.id === gameState.lovers[0].id)
              if (lover) {
                USER_INTERFACE.addChatMessage(
                  `[ GAME ] Couple của bạn là ${lover.gridIdx + 1}. ${lover.username} (${gameState.lovers[0].role})`,
                )

                if (APPLICATION_STATE.playerRole.team === "WEREWOLF" && !gameState.wwChatSent) {
                  gameState.wwChatSent = true
                  const message =
                    gameState.lovers[0].role === "priest"
                      ? `My couple is ${lover.gridIdx + 1} - priest`
                      : `My couple is ${lover.gridIdx + 1}, Who is yours?`

                  APPLICATION_STATE.gameSocket.emit("game:chat-werewolves:msg", JSON.stringify({ msg: message }))
                }
              }
            } else if (gameState.lovers.length === 2) {
              const [lover1, lover2] = gameState.lovers.map((lover) =>
                APPLICATION_STATE.gamePlayers.find((p) => p.id === lover.id),
              )

              USER_INTERFACE.addChatMessage(
                `[ GAME ] Couple của bạn là ${lover1.gridIdx + 1}. ${lover1.username} (${gameState.lovers[0].role}) AND ${lover2.gridIdx + 1}. ${lover2.username} (${gameState.lovers[1].role})`,
              )

              if (APPLICATION_STATE.playerRole.team === "WEREWOLF" && !gameState.wwChatSent) {
                gameState.wwChatSent = true
                APPLICATION_STATE.gameSocket.emit(
                  "game:chat-werewolves:msg",
                  JSON.stringify({
                    msg: `My couple is ${lover1.gridIdx + 1} and ${lover2.gridIdx + 1}, Who is yours?`,
                  }),
                )
              }
            }
          }
        })

        APPLICATION_STATE.gameSocket.on("game-night-started", () => {
          setTimeout(() => {
            if (APPLICATION_STATE.playerRole?.team === "WEREWOLF") {
              const nonWerewolfLover = gameState.lovers.find(
                (lover) => UTILITY_FUNCTIONS.getRoleData(lover.role).team !== "WEREWOLF",
              )

              if (nonWerewolfLover && nonWerewolfLover.role !== "priest") {
                const target = APPLICATION_STATE.gamePlayers.find((p) => p.id === nonWerewolfLover.id)
                if (target) {
                  USER_INTERFACE.addChatMessage(`[ GAME ] VOTE ${target.gridIdx + 1}. ${target.username}`)
                  gameState.wwVoteTarget = nonWerewolfLover.id
                  APPLICATION_STATE.gameSocket.emit(
                    "game-werewolves-vote-set",
                    JSON.stringify({
                      targetPlayerId: nonWerewolfLover.id,
                    }),
                  )
                }
              } else if (APPLICATION_STATE.playerRole.id === "junior-werewolf") {
                const target = APPLICATION_STATE.gamePlayers.find((p) => p.id === gameState.lovers[0]?.id)
                if (target) {
                  USER_INTERFACE.addChatMessage(`[ GAME ] VOTE ${target.gridIdx + 1}. ${target.username}`)
                  gameState.wwVoteTarget = target.id
                  APPLICATION_STATE.gameSocket.emit(
                    "game-werewolves-vote-set",
                    JSON.stringify({
                      targetPlayerId: target.id,
                    }),
                  )
                }
              }
            }
          }, 1000)
        })

        APPLICATION_STATE.gameSocket.on("game-werewolves-set-roles", (data) => {
          const werewolfData = JSON.parse(data)
          gameState.wolves = Object.entries(werewolfData.werewolves).map(([id, role]) => ({ id, role }))

          if (
            !gameState.wwChatSent &&
            gameState.lovers.length &&
            gameState.wolves.length &&
            APPLICATION_STATE.playerRole.team === "WEREWOLF" &&
            APPLICATION_STATE.playerRole.id === "junior-werewolf" &&
            gameState.lovers.find((lover) => UTILITY_FUNCTIONS.getRoleData(lover.role).team !== "WEREWOLF")
          ) {
            gameState.wwChatSent = true
            setTimeout(() => {
              APPLICATION_STATE.gameSocket.emit("game:chat-werewolves:msg", JSON.stringify({ msg: "Who?" }))
            }, 2000)
          }
        })

        APPLICATION_STATE.gameSocket.on("game-day-started", () => {
          if (APPLICATION_STATE.playerRole && soloRoles.includes(APPLICATION_STATE.playerRole.id)) {
            APPLICATION_STATE.gameSocket.emit("game:chat-public:msg", JSON.stringify({ msg: "solo" }))
          }
        })

        APPLICATION_STATE.gameSocket.on("game-day-voting-started", (data) => {
          const votingData = JSON.parse(data)
          gameState.currentDay = votingData.day

          if (APPLICATION_STATE.userSettings.VOTE_STATISTICS && !APPLICATION_STATE.voteStatistics[gameState.currentDay]) {
            APPLICATION_STATE.voteStatistics[gameState.currentDay] = {}
          }

          if (APPLICATION_STATE.currentPlayer && !gameState.deads.includes(APPLICATION_STATE.currentPlayer.id)) {
            const werewolfLover = gameState.lovers.find(
              (lover) => UTILITY_FUNCTIONS.getRoleData(lover.role).team === "WEREWOLF",
            )

            if (werewolfLover) {
              if (APPLICATION_STATE.playerRole?.team === "WEREWOLF") {
                APPLICATION_STATE.gameSocket.emit("game:chat-public:msg", JSON.stringify({ msg: "wc" }))
              }

              const target = APPLICATION_STATE.gamePlayers.find((p) => p.id === werewolfLover.id)
              if (target) {
                USER_INTERFACE.addChatMessage(`[ GAME ] VOTE ${target.gridIdx + 1}. ${target.username}`)
                APPLICATION_STATE.gameSocket.emit(
                  "game-day-vote-set",
                  JSON.stringify({
                    targetPlayerId: werewolfLover.id,
                  }),
                )
              }
            } else if (APPLICATION_STATE.playerRole?.team === "WEREWOLF") {
              APPLICATION_STATE.gameSocket.emit("game:chat-public:msg", JSON.stringify({ msg: "me" }))
            }
          }
        })

        APPLICATION_STATE.gameSocket.on("game:chat-werewolves:msg", (data) => {
          const chatData = JSON.parse(data)

          if (
            APPLICATION_STATE.playerRole?.team === "WEREWOLF" &&
            chatData.authorId !== APPLICATION_STATE.currentPlayer.id &&
            chatData.msg?.toLowerCase().includes("who")
          ) {
            const target = APPLICATION_STATE.gamePlayers.find((p) => p.id === gameState.lovers[0].id)
            if (target) {
              setTimeout(() => {
                APPLICATION_STATE.gameSocket.emit(
                  "game:chat-werewolves:msg",
                  JSON.stringify({
                    msg: `${target.gridIdx + 1}`,
                  }),
                )
              }, 1000)
            }
          }

          if (
            APPLICATION_STATE.playerRole?.id === "junior-werewolf" &&
            chatData.authorId !== APPLICATION_STATE.currentPlayer.id
          ) {
            const numberMatch = chatData.msg?.match(/\d+/)
            if (numberMatch?.length) {
              const targetNumber = Number.parseInt(numberMatch[0])
              const target = APPLICATION_STATE.gamePlayers.find((p) => p.gridIdx + 1 === targetNumber)

              if (target) {
                gameState.jwTarget = target.id
                USER_INTERFACE.addChatMessage(`PAW SELECT ${target.gridIdx + 1}. ${target.username}`)
                APPLICATION_STATE.gameSocket.emit(
                  "game-junior-werewolf-selected-player",
                  JSON.stringify({
                    targetPlayerId: target.id,
                  }),
                )
              }
            }
          }
        })

        APPLICATION_STATE.gameSocket.on("game-werewolves-vote-set", (data) => {
          const voteData = JSON.parse(data)

          if (
            !gameState.jwTarget &&
            APPLICATION_STATE.playerRole?.id === "junior-werewolf" &&
            voteData.playerId !== APPLICATION_STATE.currentPlayer.id
          ) {
            gameState.jwTarget = voteData.targetPlayerId
            const target = APPLICATION_STATE.gamePlayers.find((p) => p.id === voteData.targetPlayerId)

            if (target) {
              USER_INTERFACE.addChatMessage(`PAW SELECT ${target.gridIdx + 1}. ${target.username}`)
              APPLICATION_STATE.gameSocket.emit(
                "game-junior-werewolf-selected-player",
                JSON.stringify({
                  targetPlayerId: voteData.targetPlayerId,
                }),
              )
            }
          }

          if (
            APPLICATION_STATE.playerRole?.id !== "junior-werewolf" &&
            gameState.wolves.find((wolf) => wolf.role === "junior-werewolf" && wolf.id === voteData.playerId)
          ) {
            const target = APPLICATION_STATE.gamePlayers.find((p) => p.id === voteData.targetPlayerId)
            setTimeout(() => {
              if (target) {
                USER_INTERFACE.addChatMessage(`[ GAME ] VOTE ${target.gridIdx + 1}. ${target.username}`)
              }

              if (gameState.wwVoteTarget !== voteData.targetPlayerId) {
                gameState.wwVoteTarget = voteData.targetPlayerId
                APPLICATION_STATE.gameSocket.emit(
                  "game-werewolves-vote-set",
                  JSON.stringify({
                    targetPlayerId: voteData.targetPlayerId,
                  }),
                )
              }
            }, 1000)
          } else if (
            APPLICATION_STATE.playerRole?.id !== "junior-werewolf" &&
            !gameState.wolves.find((wolf) => wolf.role === "junior-werewolf" && wolf.id === voteData.playerId) &&
            gameState.lovers.find((lover) => ["priest", "vigilante", "gunner"].includes(lover.role))
          ) {
            const target = APPLICATION_STATE.gamePlayers.find((p) => p.id === voteData.targetPlayerId)
            setTimeout(() => {
              if (target) {
                USER_INTERFACE.addChatMessage(`[ GAME ] VOTE ${target.gridIdx + 1}. ${target.username}`)
              }

              if (gameState.wwVoteTarget !== voteData.targetPlayerId) {
                gameState.wwVoteTarget = voteData.targetPlayerId
                APPLICATION_STATE.gameSocket.emit(
                  "game-werewolves-vote-set",
                  JSON.stringify({
                    targetPlayerId: voteData.targetPlayerId,
                  }),
                )
              }
            }, 1000)
          }
        })

        APPLICATION_STATE.gameSocket.on("game:chat-public:msg", async (data) => {
          const chatData = JSON.parse(data)

          if (
            APPLICATION_STATE.userSettings.CHAT_STATISTICS &&
            APPLICATION_STATE.gamePlayers.length &&
            APPLICATION_STATE.gamePlayers.find((p) => p.id === chatData.authorId)
          ) {
            APPLICATION_STATE.chatMessages[chatData.authorId] = APPLICATION_STATE.chatMessages[chatData.authorId] || []
            APPLICATION_STATE.chatMessages[chatData.authorId].push({
              msg: chatData.msg,
              timestamp: UTILITY_FUNCTIONS.formatTimestamp(new Date(chatData.date)),
            })
          }

          if (chatData.msg) {
            // Kiểm tra nếu đã có response cho msg này thì dùng luôn
            const res = localStorage.getItem('resSimsimi')
            let reused = false
            if (res) {
                const obj = JSON.parse(res)
                if (obj.lastMsg === chatData.msg && obj.response) {
                    const pId = Math.floor(Math.random() * 1e12).toString()
                    const emitMsg = JSON.stringify({ msg: obj.response, pId })
                    regularSocket.emit("game:chat-public:msg", emitMsg)
                    reused = true
                }
            }
            // Kiểm tra nếu đã có simsimiMsg đang chờ với msg này thì không push thêm
            const pending = localStorage.getItem('simsimiMsg')
            let alreadyPending = false
            if (pending) {
                try {
                    const obj = JSON.parse(pending)
                    if (obj.msg === chatData.msg) alreadyPending = true
                } catch {}
            }
            let resTrung = false
            if (res) {
                try {
                    const obj = JSON.parse(res)
                    if (obj.lastMsg === chatData.msg) resTrung = true
                } catch {}
            }
            if (!reused && !alreadyPending && !resTrung) {
                const ts = Date.now()
                localStorage.setItem('simsimiMsg', JSON.stringify({ msg: chatData.msg, ts }))
                let lastResTs = 0
                const poll = setInterval(() => {
                    const res = localStorage.getItem('resSimsimi')
                    if (res) {
                        const obj = JSON.parse(res)
                        if (obj.ts > lastResTs && obj.ts >= ts && obj.lastMsg === chatData.msg) {
                            lastResTs = obj.ts
                            clearInterval(poll)
                            if (obj.response) {
                                const pId = Math.floor(Math.random() * 1e12).toString()
                                const emitMsg = JSON.stringify({ msg: obj.response, pId })
                                regularSocket.emit("game:chat-public:msg", emitMsg)
                                localStorage.removeItem('resSimsimi')
                            }
                        }
                    }
                }, 200)
            }
          }
        })

        APPLICATION_STATE.gameSocket.on("game-day-vote-set", (data) => {
          const voteData = JSON.parse(data)

          if (
            APPLICATION_STATE.userSettings.VOTE_STATISTICS &&
            gameState.currentDay &&
            APPLICATION_STATE.gamePlayers.length
          ) {
            APPLICATION_STATE.voteStatistics[gameState.currentDay][voteData.playerId] = voteData.targetPlayerId
          }

          if (APPLICATION_STATE.currentPlayer && !gameState.deads.includes(APPLICATION_STATE.currentPlayer.id)) {
            const target = APPLICATION_STATE.gamePlayers.find((p) => p.id === voteData.targetPlayerId)

            if (APPLICATION_STATE.playerRole?.id === "priest") {
              setTimeout(() => {
                if (target) {
                  USER_INTERFACE.addChatMessage(`DROPLET KILL ${target.gridIdx + 1}. ${target.username}`)
                }
                APPLICATION_STATE.gameSocket.emit(
                  "game-priest-kill-player",
                  JSON.stringify({
                    targetPlayerId: voteData.targetPlayerId,
                  }),
                )
              }, 1000)
            } else if (APPLICATION_STATE.playerRole?.id === "vigilante") {
              setTimeout(() => {
                if (target) {
                  USER_INTERFACE.addChatMessage(`GUN KILL ${target.gridIdx + 1}. ${target.username}`)
                }
                APPLICATION_STATE.gameSocket.emit(
                  "game-vigilante-shoot",
                  JSON.stringify({
                    targetPlayerId: voteData.targetPlayerId,
                  }),
                )
              }, 1000)
            } else if (APPLICATION_STATE.playerRole?.id === "gunner") {
              setTimeout(() => {
                if (target) {
                  USER_INTERFACE.addChatMessage(`GUN KILL ${target.gridIdx + 1}. ${target.username}`)
                }
                APPLICATION_STATE.gameSocket.emit(
                  "game-gunner-shoot-player",
                  JSON.stringify({
                    targetPlayerId: voteData.targetPlayerId,
                  }),
                )
              }, 1000)
            }
          }
        })
      } else if (APPLICATION_STATE.userSettings.AUTO_BOOST_NORMAL) {
        APPLICATION_STATE.gameSocket.on("game-joined", () =>
          USER_INTERFACE.addChatMessage("[ Trz WOV ] CONNECT GAME SOCKET NORMAL"),
        )

        APPLICATION_STATE.gameSocket.on("game-werewolves-set-roles", (data) => {
          const werewolfData = JSON.parse(data)
          gameState.wolves = Object.entries(werewolfData.werewolves).map(([id, role]) => ({ id, role }))
          gameState.areWolvesCouple = false
        })

        APPLICATION_STATE.gameSocket.on("game-cupid-lover-ids-and-roles", (data) => {
          const loverData = JSON.parse(data)

          if (APPLICATION_STATE.playerRole?.team === "WEREWOLF") {
            const loverIds = [loverData.player1Id, loverData.player2Id]
            const wolfIds = gameState.wolves.map((wolf) => wolf.id)

            if (wolfIds.length === 2 && loverIds.includes(wolfIds[0]) && loverIds.includes(wolfIds[1])) {
              gameState.areWolvesCouple = true
            }
          }
        })

        APPLICATION_STATE.gameSocket.on("game-day-started", () => {
          if (
            APPLICATION_STATE.currentPlayer &&
            !gameState.deads.includes(APPLICATION_STATE.currentPlayer.id) &&
            APPLICATION_STATE.playerRole?.team === "WEREWOLF"
          ) {
            const hasJuniorWolf = gameState.wolves.some((wolf) => wolf.role === "junior-werewolf")
            const wolfPositions = gameState.wolves
              .map((wolf) => {
                const player = APPLICATION_STATE.gamePlayers.find((p) => p.id === wolf.id)
                return player
                  ? wolf.role === "junior-werewolf"
                    ? `${player.gridIdx + 1}j`
                    : `${player.gridIdx + 1}`
                  : null
              })
              .filter((pos) => pos !== null)

            if (wolfPositions.length) {
              let message = ""
              if (gameState.areWolvesCouple) {
                message = "wc"
              } else {
                message = wolfPositions.join("")
              }

              setTimeout(() => {
                APPLICATION_STATE.gameSocket.emit("game:chat-public:msg", JSON.stringify({ msg: message }))

                if (gameState.areWolvesCouple) {
                  USER_INTERFACE.addChatMessage(`WOLF WOLVES AS COUPLE: ${message}`)
                } else {
                  USER_INTERFACE.addChatMessage(`WOLF WOLVES AT: ${message}`)
                }
              }, 1000)
            }
          }

          if (APPLICATION_STATE.playerRole && soloRoles.includes(APPLICATION_STATE.playerRole.id)) {
            APPLICATION_STATE.gameSocket.emit("game:chat-public:msg", JSON.stringify({ msg: "solo" }))
          }
        })

        APPLICATION_STATE.gameSocket.on("game-day-voting-started", (data) => {
          const votingData = JSON.parse(data)
          gameState.currentDay = votingData.day

          if (APPLICATION_STATE.userSettings.VOTE_STATISTICS && !APPLICATION_STATE.voteStatistics[gameState.currentDay]) {
            APPLICATION_STATE.voteStatistics[gameState.currentDay] = {}
          }
        })

        APPLICATION_STATE.gameSocket.on("game:chat-public:msg", async (data) => {
          const chatData = JSON.parse(data)

          if (
            APPLICATION_STATE.userSettings.CHAT_STATISTICS &&
            APPLICATION_STATE.gamePlayers.length &&
            APPLICATION_STATE.gamePlayers.find((p) => p.id === chatData.authorId)
          ) {
            APPLICATION_STATE.chatMessages[chatData.authorId] = APPLICATION_STATE.chatMessages[chatData.authorId] || []
            APPLICATION_STATE.chatMessages[chatData.authorId].push({
              msg: chatData.msg,
              timestamp: UTILITY_FUNCTIONS.formatTimestamp(new Date(chatData.date)),
            })
          }

          if (
            APPLICATION_STATE.currentPlayer &&
            !gameState.deads.includes(APPLICATION_STATE.currentPlayer.id) &&
            chatData.authorId !== APPLICATION_STATE.currentPlayer.id
          ) {
            const message = chatData.msg.toLowerCase()
            const author = APPLICATION_STATE.gamePlayers.find((p) => p.id === chatData.authorId)

            const numberPattern = /(\d+)j?(\d+)j?|(\d+),(\d+)|(\d+)[\s,](\d+)j?/i
            const numberMatch = message.match(numberPattern)

            if (numberMatch) {
              let numbers = []
              for (let i = 1; i <= 6; i++) {
                if (numberMatch[i]) {
                  numbers.push(Number.parseInt(numberMatch[i]))
                }
              }

              numbers = numbers.filter((num) => APPLICATION_STATE.gamePlayers.some((p) => p.gridIdx + 1 === num))

              if (numbers.length >= 2) {
                const hasJuniorIndicator = message.includes("j")
                const targets = numbers
                  .map((num) => {
                    const player = APPLICATION_STATE.gamePlayers.find((p) => p.gridIdx + 1 === num)
                    if (!player) return null

                    const isJunior = gameState.wolves.some(
                      (wolf) => wolf.id === player.id && wolf.role === "junior-werewolf",
                    )
                    return {
                      id: player.id,
                      gridIdx: player.gridIdx,
                      username: player.username,
                      isJunior: isJunior,
                    }
                  })
                  .filter((target) => target !== null)

                if (targets.length) {
                  let selectedTarget = targets[0]

                  if (hasJuniorIndicator) {
                    const nonJuniorTarget = targets.find((target) => !target.isJunior)
                    if (nonJuniorTarget) {
                      selectedTarget = nonJuniorTarget
                    }
                  }

                  gameState.wwVoteTarget = selectedTarget.id
                  APPLICATION_STATE.gameSocket.emit(
                    "game-day-vote-set",
                    JSON.stringify({
                      targetPlayerId: selectedTarget.id,
                    }),
                  )

                  USER_INTERFACE.addChatMessage(
                    `[ GAME ] VOTE ${selectedTarget.gridIdx + 1}. ${selectedTarget.username} (BY NUMBERS)`,
                  )

                  const randomDelay = Math.random() * 1000
                  setTimeout(() => {
                    if (APPLICATION_STATE.playerRole?.id === "priest") {
                      USER_INTERFACE.addChatMessage(
                        `DROPLET KILL ${selectedTarget.gridIdx + 1}. ${selectedTarget.username}`,
                      )
                      APPLICATION_STATE.gameSocket.emit(
                        "game-priest-kill-player",
                        JSON.stringify({
                          targetPlayerId: selectedTarget.id,
                        }),
                      )
                    } else if (APPLICATION_STATE.playerRole?.id === "vigilante") {
                      USER_INTERFACE.addChatMessage(`GUN KILL ${selectedTarget.gridIdx + 1}. ${selectedTarget.username}`)
                      APPLICATION_STATE.gameSocket.emit(
                        "game-vigilante-shoot",
                        JSON.stringify({
                          targetPlayerId: selectedTarget.id,
                        }),
                      )
                    } else if (APPLICATION_STATE.playerRole?.id === "gunner") {
                      USER_INTERFACE.addChatMessage(`GUN KILL ${selectedTarget.gridIdx + 1}. ${selectedTarget.username}`)
                      APPLICATION_STATE.gameSocket.emit(
                        "game-gunner-shoot-player",
                        JSON.stringify({
                          targetPlayerId: selectedTarget.id,
                        }),
                      )
                    }
                  }, randomDelay)
                  return
                }
              }
            }

            if (APPLICATION_STATE.playerRole?.id === "junior-werewolf") {
              const tagMatch = message.match(/(?:tag\s*(\d+)|tag(\d+))/i)
              if (tagMatch) {
                const targetNumber = Number.parseInt(tagMatch[1] || tagMatch[2])
                const target = APPLICATION_STATE.gamePlayers.find((p) => p.gridIdx + 1 === targetNumber)

                if (target) {
                  gameState.jwTarget = target.id
                  USER_INTERFACE.addChatMessage(`PAW SELECT ${target.gridIdx + 1}. ${target.username} (TAG)`)
                  APPLICATION_STATE.gameSocket.emit(
                    "game-junior-werewolf-selected-player",
                    JSON.stringify({
                      targetPlayerId: target.id,
                    }),
                  )
                }
              } else if (message === "avg") {
                gameState.jwTarget = author.id
                USER_INTERFACE.addChatMessage(`PAW SELECT ${author.gridIdx + 1}. ${author.username} (AVG)`)
                APPLICATION_STATE.gameSocket.emit(
                  "game-junior-werewolf-selected-player",
                  JSON.stringify({
                    targetPlayerId: author.id,
                  }),
                )
              }
            }

            if (["me", "m", "wc"].includes(message) && author) {
              if (APPLICATION_STATE.playerRole?.id === "priest") {
                USER_INTERFACE.addChatMessage(`DROPLET KILL ${author.gridIdx + 1}. ${author.username}`)
                APPLICATION_STATE.gameSocket.emit(
                  "game-priest-kill-player",
                  JSON.stringify({
                    targetPlayerId: author.id,
                  }),
                )
              } else if (APPLICATION_STATE.playerRole?.id === "vigilante") {
                USER_INTERFACE.addChatMessage(`GUN KILL ${author.gridIdx + 1}. ${author.username}`)
                APPLICATION_STATE.gameSocket.emit(
                  "game-vigilante-shoot",
                  JSON.stringify({
                    targetPlayerId: author.id,
                  }),
                )
              } else if (APPLICATION_STATE.playerRole?.id === "gunner") {
                USER_INTERFACE.addChatMessage(`GUN KILL ${author.gridIdx + 1}. ${author.username}`)
                APPLICATION_STATE.gameSocket.emit(
                  "game-gunner-shoot-player",
                  JSON.stringify({
                    targetPlayerId: author.id,
                  }),
                )
              }
            }
          }
        })

        APPLICATION_STATE.gameSocket.on("game-day-vote-set", (data) => {
          const voteData = JSON.parse(data)

          if (
            APPLICATION_STATE.userSettings.VOTE_STATISTICS &&
            gameState.currentDay &&
            APPLICATION_STATE.gamePlayers.length
          ) {
            APPLICATION_STATE.voteStatistics[gameState.currentDay][voteData.playerId] = voteData.targetPlayerId
          }

          gameState.voteCounts[voteData.targetPlayerId] = (gameState.voteCounts[voteData.targetPlayerId] || 0) + 1

          if (
            !APPLICATION_STATE.currentPlayer ||
            gameState.deads.includes(APPLICATION_STATE.currentPlayer.id) ||
            gameState.wwVoteTarget ||
            gameState.voteInterval
          ) {
            return
          }

          if (!gameState.voteInterval) {
            gameState.voteInterval = setInterval(() => {
              let maxVotes = 0
              let mostVotedTarget = null

              Object.entries(gameState.voteCounts).forEach(([targetId, voteCount]) => {
                if (voteCount > maxVotes) {
                  maxVotes = voteCount
                  mostVotedTarget = targetId
                }
              })

              if (
                mostVotedTarget &&
                mostVotedTarget !== APPLICATION_STATE.currentPlayer.id &&
                mostVotedTarget !== gameState.wwVoteTarget
              ) {
                const target = APPLICATION_STATE.gamePlayers.find((p) => p.id === mostVotedTarget)
                if (target) {
                  gameState.wwVoteTarget = mostVotedTarget
                  APPLICATION_STATE.gameSocket.emit(
                    "game-day-vote-set",
                    JSON.stringify({
                      targetPlayerId: mostVotedTarget,
                    }),
                  )

                  USER_INTERFACE.addChatMessage(
                    `[ GAME ] VOTE ${target.gridIdx + 1}. ${target.username} (BY MAJORITY - ${maxVotes} VOTES)`,
                  )
                }
              }
            }, 1000)
          }

          const target = APPLICATION_STATE.gamePlayers.find((p) => p.id === voteData.targetPlayerId)
          if (target) {
            const randomDelay = Math.random() * 1000
            setTimeout(() => {
              if (APPLICATION_STATE.playerRole?.id === "priest") {
                USER_INTERFACE.addChatMessage(`DROPLET KILL ${target.gridIdx + 1}. ${target.username}`)
                APPLICATION_STATE.gameSocket.emit(
                  "game-priest-kill-player",
                  JSON.stringify({
                    targetPlayerId: target.id,
                  }),
                )
              } else if (APPLICATION_STATE.playerRole?.id === "vigilante") {
                USER_INTERFACE.addChatMessage(`GUN KILL ${target.gridIdx + 1}. ${target.username}`)
                APPLICATION_STATE.gameSocket.emit(
                  "game-vigilante-shoot",
                  JSON.stringify({
                    targetPlayerId: target.id,
                  }),
                )
              } else if (APPLICATION_STATE.playerRole?.id === "gunner") {
                USER_INTERFACE.addChatMessage(`GUN KILL ${target.gridIdx + 1}. ${target.username}`)
                APPLICATION_STATE.gameSocket.emit(
                  "game-gunner-shoot-player",
                  JSON.stringify({
                    targetPlayerId: target.id,
                  }),
                )
              }
            }, randomDelay)
          }
        })
      } else if (APPLICATION_STATE.gameConfiguration && APPLICATION_STATE.gameConfiguration.gameMode !== "custom") {
        GAME_FUNCTIONS.connectRegularSocket()
      } else {
        USER_INTERFACE.addChatMessage("[ GAME ] UNABLE TO DETERMINE MODE FOR SOCKET CONNECTION", true, "color: #ff603b;")
      }
    },

        connectRegularSocket: () => {
        if (!APPLICATION_STATE.currentGameId || !APPLICATION_STATE.serverUrl) return

        const regularSocket = io(`wss://${APPLICATION_STATE.serverUrl.replace("https://", "")}/`, {
            query: {
            firebaseToken: APPLICATION_STATE.authenticationTokens.idToken,
            gameId: APPLICATION_STATE.currentGameId,
            reconnect: true,
            ids: 1,
            "Cf-JWT": APPLICATION_STATE.authenticationTokens["Cf-JWT"],
            apiV: 1,
            EIO: 4,
            },
            transports: ["websocket"],
        })

        regularSocket.on("disconnect", () => {
            USER_INTERFACE.addChatMessage("[ Trz WOV ] NORMAL SOCKET DISCONNECT", "system")
        })

        regularSocket.on("game-joined", () => {
            USER_INTERFACE.addChatMessage("[ Trz WOV ] NORMAL SOCKET CONNECT", "system")
        })

        regularSocket.on("game-over-awards-available", (data) => {
            const awardData = JSON.parse(data)

            if (awardData.playerAward.canClaimDoubleXp) {
            regularSocket.emit("game-over-double-xp")
            USER_INTERFACE.addChatMessage("[ GAME ] REVICED 2X XP", "success")

            setTimeout(() => {
                const doubleXp = awardData.playerAward.awardedTotalXp * 2
                APPLICATION_STATE.gameStatistics.totalExperience += doubleXp
                USER_INTERFACE.addChatMessage(`[ GAME ] ${doubleXp} XP (X2)`, "success")

                if (awardData.playerAward.awardedLevels) {
                APPLICATION_STATE.currentPlayer.level += awardData.playerAward.awardedLevels
                APPLICATION_STATE.gameStatistics.totalLevels += awardData.playerAward.awardedLevels
                USER_INTERFACE.addChatMessage(`[ GAME ] UP ${APPLICATION_STATE.currentPlayer.level}`, "success")
                }

                USER_INTERFACE.updateChatStatus()
                USER_INTERFACE.updateDashboard()

                setTimeout(() => regularSocket.disconnect(), 500)
            }, 1000)
            } else {
            APPLICATION_STATE.gameStatistics.totalExperience += awardData.playerAward.awardedTotalXp
            USER_INTERFACE.addChatMessage(`[ GAME ] ${awardData.playerAward.awardedTotalXp} XP`, "success")

            if (awardData.playerAward.awardedLevels) {
                APPLICATION_STATE.currentPlayer.level += awardData.playerAward.awardedLevels
                APPLICATION_STATE.gameStatistics.totalLevels += awardData.playerAward.awardedLevels
                USER_INTERFACE.addChatMessage(`[ GAME ] UP  ${APPLICATION_STATE.currentPlayer.level}`, "success")
            }

            setTimeout(() => regularSocket.disconnect(), 500)
            }

            USER_INTERFACE.updateDashboard()
            USER_INTERFACE.updateChatStatus()
        })

        regularSocket.on("game-day-voting-started", (data) => {
            const votingData = JSON.parse(data)
            APPLICATION_STATE.socketState.currentDay = votingData.day

            if (
            APPLICATION_STATE.userSettings.VOTE_STATISTICS &&
            !APPLICATION_STATE.voteStatistics[APPLICATION_STATE.socketState.currentDay]
            ) {
            APPLICATION_STATE.voteStatistics[APPLICATION_STATE.socketState.currentDay] = {}
            }
        })

        regularSocket.on("game:chat-public:msg", async (data) => {
            const chatData = JSON.parse(data)
            if (
            APPLICATION_STATE.userSettings.CHAT_STATISTICS &&
            APPLICATION_STATE.gamePlayers.length &&
            APPLICATION_STATE.gamePlayers.find((p) => p.id === chatData.authorId)
            ) {
            APPLICATION_STATE.chatMessages[chatData.authorId] = APPLICATION_STATE.chatMessages[chatData.authorId] || []
            APPLICATION_STATE.chatMessages[chatData.authorId].push({
                msg: chatData.msg,
                timestamp: UTILITY_FUNCTIONS.formatTimestamp(new Date(chatData.date)),
            })
            }
            if (chatData.msg) {
              const ts = Date.now()
              localStorage.setItem('simsimiMsg', JSON.stringify({ msg: chatData.msg, ts }))
              let lastResTs = 0
              const poll = setInterval(() => {
                  const res = localStorage.getItem('resSimsimi')
                  if (res) {
                      const obj = JSON.parse(res)
                      if (obj.ts > lastResTs && obj.ts >= ts) {
                          lastResTs = obj.ts
                          clearInterval(poll)
                          if (obj.response) {
                              const emitMsg = JSON.stringify({ msg: obj.response, pId: APPLICATION_STATE.currentPlayer.id })
                              regularSocket.emit("game:chat-public:msg", emitMsg)
                          }
                      }
                  }
              }, 200)
            }
          })

        regularSocket.on("game-day-vote-set", (data) => {
            const voteData = JSON.parse(data)

            if (
            APPLICATION_STATE.userSettings.VOTE_STATISTICS &&
            APPLICATION_STATE.socketState.currentDay &&
            APPLICATION_STATE.gamePlayers.length
            ) {
            APPLICATION_STATE.voteStatistics[APPLICATION_STATE.socketState.currentDay][voteData.playerId] =
                voteData.targetPlayerId
            }
        })

        regularSocket.onAny((...args) => {
            UTILITY_FUNCTIONS.logMessage(args)
        })
        },
    connectRoomSocket: () => {
      if (!APPLICATION_STATE.authenticationTokens || !APPLICATION_STATE.serverUrl) return
      let b
      do {
        b = Math.floor(Math.random() * 100)
      } while (b === 42)
      const roomSocket = io(`wss://${APPLICATION_STATE.serverUrl.replace("https://", "")}/`, {
        query: {
          firebaseToken: APPLICATION_STATE.authenticationTokens.idToken,
          gameMode: "custom",
          password: undefined,
          ids: 1,
          "Cf-JWT": APPLICATION_STATE.authenticationTokens["Cf-JWT"],
          apiV: 1,
          b: b,
          EIO: 4,
        },
        transports: ["websocket"],
      })
      roomSocket.on("game-joined", () => {
        USER_INTERFACE.addChatMessage("[ Trz WOV ] ROOM SOCKET CONNECTED", "system")
      })
      roomSocket.on("disconnect", () => {
        USER_INTERFACE.addChatMessage("[ Trz WOV ] ROOM SOCKET DISCONNECTED", "system")
      })
      APPLICATION_STATE.roomSocket = roomSocket
    },
    }

  const NETWORK_FUNCTIONS = {
    patchLocalStorage: () => {
      const originalSetItem = localStorage.setItem
      localStorage.setItem = function (key, value) {
        if (key !== "open-page") {
          originalSetItem.apply(this, arguments)
        } else {
          localStorage.removeItem(key)
        }
      }
    },

    getAuthTokens: () => {
      const authTokens = JSON.parse(localStorage.getItem("authtokens"))
      if (authTokens) {
        APPLICATION_STATE.authenticationTokens.idToken = authTokens.idToken || ""
        APPLICATION_STATE.authenticationTokens.refreshToken = authTokens.refreshToken || ""
      }
      UTILITY_FUNCTIONS.logMessage(authTokens)
    },

    setupFetchInterceptor: () => {
      const originalFetch = window.fetch

      window.fetch = async (...args) => {
        let url = args[0]
        if (url.startsWith("https://core.api-wolvesville.com/inventory?")) {
          url = "https://core.api-wolvesville.com/inventory?"
        }

        const handler = API_HANDLERS.handlers[Object.keys(API_HANDLERS.handlers).find((key) => url.startsWith(key))]

        if (handler) {
          UTILITY_FUNCTIONS.logMessage(`FETCH INTERCEPTED: ${args}`)
          const response = await originalFetch(...args)
          const responseData = await response.clone().json()
          UTILITY_FUNCTIONS.logMessage(`INTERCEPTED RESPONSE: ${responseData}`)
          return handler(responseData) || response
        }

        return originalFetch(...args)
      }
    },

    setupSocketInterceptor: (callback) => {
      const originalDataDescriptor = Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data")
      const originalDataGetter = originalDataDescriptor.get

      originalDataDescriptor.get = function () {
        if (!(this.currentTarget instanceof WebSocket)) {
          return originalDataGetter.call(this)
        }

        const data = originalDataGetter.call(this)
        Object.defineProperty(this, "data", { value: data })

        callback({
          data: data,
          socket: this.currentTarget,
          event: this,
        })

        return data
      }

      Object.defineProperty(MessageEvent.prototype, "data", originalDataDescriptor)
    },
  }

  const API_HANDLERS = {
    handlers: {
      "https://auth.api-wolvesville.com/players/signUpWithEmailAndPassword": (data) => {
        if (data?.idToken) {
          APPLICATION_STATE.authenticationTokens.idToken = data.idToken
          APPLICATION_STATE.authenticationTokens.refreshToken = data.refreshToken
        }
      },

      "https://auth.api-wolvesville.com/players/createIdToken": (data) => {
        if (data?.idToken) {
          APPLICATION_STATE.authenticationTokens.idToken = data.idToken
          APPLICATION_STATE.authenticationTokens.refreshToken = data.refreshToken
        }
      },

      "https://auth.api-wolvesville.com/cloudflareTurnstile/verify": (data) => {
        if (data?.jwt) {
          APPLICATION_STATE.authenticationTokens["Cf-JWT"] = data.jwt
          USER_INTERFACE.addChatMessage("[ CLOUDFLARE TURNSTILE ] Token obtained", "system")
        }
      },

      "https://core.api-wolvesville.com/players/meAndCheckAppVersion": (data) => {
        if (data?.player) {
          const { username, level } = data.player
          if (!APPLICATION_STATE.currentPlayer) {
            USER_INTERFACE.addChatMessage(`Hi gay ${username} LEVEL ${level}`, "system")
          }
          APPLICATION_STATE.currentPlayer = data.player
          USER_INTERFACE.updateDashboard()
        }
      },

      "https://core.api-wolvesville.com/inventory/lootBoxes/": (data) => {
        if (data?.items?.length) {
          let totalSilver = 0
          const itemTypes = data.items.map((item) => {
            if (item.duplicateItemCompensationInSilver) {
              totalSilver += item.duplicateItemCompensationInSilver
            } else if (item.type === "SILVER_PILE") {
              totalSilver += item.silverPile.silverCount
            }
            return item.type
          })

          APPLICATION_STATE.playerInventory.silverCount += totalSilver
          USER_INTERFACE.addChatMessage(`PACKAGE LOOT BOX: ${itemTypes.join(", ")} AND GOLD: ${totalSilver}`, "success")
          USER_INTERFACE.updateDashboard()
        }
      },

      "https://core.api-wolvesville.com/inventory?": (data) => {
        if (data?.silverCount) {
          APPLICATION_STATE.playerInventory = data
        }

        if (data?.lootBoxes !== undefined) {
          const roleCardCount = data.lootBoxes.filter((box) => box.event === "LEVEL_UP_CARD").length
          const roleCardText = roleCardCount ? ` INCLUDING ${roleCardCount} ROLE CARDS` : ""
          USER_INTERFACE.addChatMessage(`PACKAGE LOOT BOXES: ${data.lootBoxes.length} AVAILABLE${roleCardText}`, "system")
          USER_INTERFACE.updateDashboard()
        }

        return new Response(
          JSON.stringify({
            ...data,
            loyaltyTokenCount: 9999,
          }),
        )
      },

      "https://game.api-wolvesville.com/api/public/game/running": () => {
        return new Response(JSON.stringify({ running: false }))
      },

      "https://core.api-wolvesville.com/rewards/goldenWheelSpin": (data) => {
        const winner = data?.find((item) => item.winner)
        if (winner) {
          const reward = winner.silver > 0 ? `GOLD: ${winner.silver}` : winner.type
          USER_INTERFACE.addChatMessage(`ROSE ${reward} Nhận được từ Vòng Quay Hoa Hồng`, "success")
          APPLICATION_STATE.playerInventory.silverCount += winner.silver
          APPLICATION_STATE.playerInventory.roseCount -= 30
          USER_INTERFACE.updateChatStatus()
          USER_INTERFACE.updateDashboard()
        }
      },

      "https://core.api-wolvesville.com/rewards/wheelRewardWithSecret/": (data) => {
        if (data?.code) {
          USER_INTERFACE.addChatMessage(
            `[ ERROR ] : Đã quá giới hạn ngày`,
            "error",
          )
        } else if (data?.length) {
          const winner = data.find((item) => item.winner)
          if (winner) {
            const reward = winner.silver > 0 ? `GOLD: ${winner.silver}` : winner.type
            APPLICATION_STATE.playerInventory.silverCount += winner.silver
            APPLICATION_STATE.gameStatistics.goldWheelSpins += 1
            APPLICATION_STATE.gameStatistics.goldWheelSilver += winner.silver
            APPLICATION_STATE.currentPlayer.silverCount += winner.silver

            USER_INTERFACE.addChatMessage(
              `[ SPIN ] #${APPLICATION_STATE.gameStatistics.goldWheelSpins}: ${reward} Hoa Hồng nhận được từ Vòng Quay Vàng : GOLD: ${APPLICATION_STATE.gameStatistics.goldWheelSilver}`,
              "success",
            )
            USER_INTERFACE.updateChatStatus()
            USER_INTERFACE.updateDashboard()
          }
        }
      },

      "https://core.api-wolvesville.com/rewards/wheelItems/v2": (data) => {},
    },
  }

  const SOCKET_MESSAGE_HANDLERS = {
    parseMessage: (rawMessage) => {
      const cleanMessage = rawMessage.slice(2).replaceAll('"{', "{").replaceAll('}"', "}").replaceAll('\\"', '"')
      try {
        return JSON.parse(cleanMessage)
      } catch {
        return undefined
      }
    },

    handlers: {
      "game-joined": (data) => {
        if (!APPLICATION_STATE.gameSocket) {
          USER_INTERFACE.addChatMessage("[ GAME ] Đã tham gia", "system")
          ;[APPLICATION_STATE.currentGameId, APPLICATION_STATE.serverUrl] = Object.values(data)
          GAME_FUNCTIONS.updateRoomInfo(data)
          setTimeout(USER_INTERFACE.setPlayersLevel, 1000)
        }
      },
      "player-joined-and-equipped-items": (data) => {
        console.log("[debug] received player-joined-and-equipped-items:", data)
        const { player } = data
        if (player && player.username) {
          const msg = `🟢 ${player.username} (Lv.${player.level}) đã vào phòng`
          console.log("[debug] addChatMessage:", msg)
          USER_INTERFACE.addChatMessage(msg, "success")
        } else {
          console.warn("[debug] Không có player info trong data:", data)
          USER_INTERFACE.addChatMessage(["player-joined-and-equipped-items", JSON.stringify(data)])
        }
      },
      "game-settings-changed": (data) => {
        APPLICATION_STATE.gameConfiguration = data
      },

      "game-starting": () => {
        if (!APPLICATION_STATE.gameSocket) {
          USER_INTERFACE.addChatMessage("[ GAME ] Đã bắt đầu", "system")
          APPLICATION_STATE.gameStatus = "starting"
        }
      },

      "game-started": (data) => {
        if (!APPLICATION_STATE.gameSocket) {
          APPLICATION_STATE.gameStatus = "started"
          APPLICATION_STATE.gameStatistics.gameStartTime = Date.now()
          APPLICATION_STATE.playerRole = UTILITY_FUNCTIONS.getRoleData(data.role)
          USER_INTERFACE.addChatMessage(
            `[ GAME ] Bạn là ${APPLICATION_STATE.playerRole.name} (${APPLICATION_STATE.playerRole.id})`,
            "system",
          )
          APPLICATION_STATE.gamePlayers = data.players
          GAME_FUNCTIONS.updatePlayerGrid(data.players)
          setTimeout(USER_INTERFACE.setPlayersLevel, 1000)
          setTimeout(GAME_FUNCTIONS.connectSocket, 1000)
          USER_INTERFACE.updateDashboard()
        }
      },

      "player-joined-and-equipped-items": (data) => {
        USER_INTERFACE.addChatMessage(["player-joined-and-equipped-items", JSON.stringify(data)])
      },

      "game-set-game-status": (data) => {},

      "game-reconnect-set-game-status": (data) => {
        setTimeout(GAME_FUNCTIONS.connectSocket, 1000)
      },

      "players-and-equipped-items": (data) => {
        if (APPLICATION_STATE.gameStatus === "started") {
          APPLICATION_STATE.gamePlayers = data.players
          GAME_FUNCTIONS.updatePlayerGrid(data.players)
          setTimeout(USER_INTERFACE.setPlayersLevel, 1000)
        }
      },

      "game-reconnect-set-players": (data) => {
        if (!APPLICATION_STATE.gameSocket) {
          APPLICATION_STATE.gamePlayers = Object.values(data)
          GAME_FUNCTIONS.updatePlayerGrid(APPLICATION_STATE.gamePlayers)
          setTimeout(USER_INTERFACE.setPlayersLevel, 1000)

          if (APPLICATION_STATE.currentPlayer) {
            const currentPlayerInGame = APPLICATION_STATE.gamePlayers.find(
              (p) => p.username === APPLICATION_STATE.currentPlayer.username,
            )
            if (currentPlayerInGame) {
              if (currentPlayerInGame.spectate) {
                USER_INTERFACE.addChatMessage("[ GAME ] U IS SPEC", "system")
              } else if (APPLICATION_STATE.playerRole) {
                APPLICATION_STATE.playerRole = UTILITY_FUNCTIONS.getRoleData(currentPlayerInGame.role)
                USER_INTERFACE.addChatMessage(
                  `[ GAME ] Bạn là ${APPLICATION_STATE.playerRole.name} (${APPLICATION_STATE.playerRole.id})`,
                  "system",
                )
              }
            }
          }
          USER_INTERFACE.updateDashboard()
        }
      },

      "game-night-started": () => {
        const currentPlayerInGame = APPLICATION_STATE.gamePlayers.find((p) => p.id === APPLICATION_STATE.currentPlayer.id)
        if (currentPlayerInGame && APPLICATION_STATE.playerRole) {
          APPLICATION_STATE.documentTitle = `${currentPlayerInGame.gridIdx + 1}. ${APPLICATION_STATE.playerRole.name}`
        }
        setTimeout(USER_INTERFACE.setPlayersLevel, 1000)
      },

      "game-players-killed": (data) => {
        if (!APPLICATION_STATE.gameSocket) {
          data.victims.forEach((victim) => {
            const player = APPLICATION_STATE.gamePlayers.find((p) => p.id === victim.targetPlayerId)
            if (player) {
              USER_INTERFACE.addChatMessage(
                `[ GAME ] ☠️${player.gridIdx + 1}. ${player.username} (${victim.targetPlayerRole}) BY ${victim.cause}`,
                "error",
              )
            }
          })
        }
      },

      "game-game-over": () => {
        if (APPLICATION_STATE.gameStatus === "over") return

        APPLICATION_STATE.gameStatus = "over"
        let message = "[ GAME ] OVER"

        if (APPLICATION_STATE.gameStatistics.gameStartTime) {
          const duration = ((Date.now() - APPLICATION_STATE.gameStatistics.gameStartTime) / 1000).toFixed(0)
          message += ` (${duration}S)`
          APPLICATION_STATE.gameStatistics.gameStartTime = 0
        }

        APPLICATION_STATE.documentTitle = message
        USER_INTERFACE.addChatMessage(message, "system")
      },

      "game-over-awards-available": (data) => {
        if (!APPLICATION_STATE.gameSocket) {
          APPLICATION_STATE.gameStatistics.totalExperience += data.playerAward.awardedTotalXp
          USER_INTERFACE.addChatMessage(`[ BUFF ] ${data.playerAward.awardedTotalXp} XP`, "success")

          if (data.playerAward.awardedLevels) {
            APPLICATION_STATE.currentPlayer.level += data.playerAward.awardedLevels
            APPLICATION_STATE.gameStatistics.totalLevels += data.playerAward.awardedLevels
            UTILITY_FUNCTIONS.logMessage(`[ LEVEL ] UP ${APPLICATION_STATE.currentPlayer.level}`)
          }

          USER_INTERFACE.updateDashboard()
          USER_INTERFACE.updateChatStatus()
        }
      },

      disconnect: () => {
        APPLICATION_STATE.playerRole = null
        APPLICATION_STATE.gamePlayers = []
        APPLICATION_STATE.currentGameId = null
        APPLICATION_STATE.serverUrl = null
        APPLICATION_STATE.gameConfiguration = null

        if (APPLICATION_STATE.gameSocket) {
          APPLICATION_STATE.gameSocket.disconnect()
          APPLICATION_STATE.gameSocket = null
        }
      },
    },

    dispatch: (messageData) => {
      const [eventType, eventData] = messageData
      SOCKET_MESSAGE_HANDLERS.handlers[eventType]?.(eventData)
    },
  }
  ;(async () => {
    NETWORK_FUNCTIONS.getAuthTokens()
    UTILITY_FUNCTIONS.loadUserSettings()
    NETWORK_FUNCTIONS.patchLocalStorage()
    USER_INTERFACE.initializeInterface()
    NETWORK_FUNCTIONS.setupFetchInterceptor()

    NETWORK_FUNCTIONS.setupSocketInterceptor((socketData) => {
      if (socketData.data.startsWith("42")) {
        const parsedMessage = SOCKET_MESSAGE_HANDLERS.parseMessage(socketData.data)
        if (parsedMessage?.length) {
          UTILITY_FUNCTIONS.logMessage(parsedMessage)
          SOCKET_MESSAGE_HANDLERS.dispatch(parsedMessage)
        }
      }
    })

    setInterval(USER_INTERFACE.updateChatStatus, 1000)
    setInterval(USER_INTERFACE.updateDashboard, 1000)
    setInterval(USER_INTERFACE.injectMessageHistory, 1000)
    setInterval(USER_INTERFACE.displayChatStatistics, 5000)
    setInterval(USER_INTERFACE.displayVoteStatistics, 5000)
  })()
if (typeof window.io !== 'function') {
/*!
 * Socket.IO v4.8.1
 * (c) 2014-2024 Guillermo Rauch
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).io=e()}(this,function(){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,function(t){t=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0===n)return("string"===e?String:Number)(t);n=n.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}(t,"string");return"symbol"==typeof t?t:t+""}(r.key),r)}}function i(t,e,n){return e&&P(t.prototype,e),n&&P(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function q(t,e){var n,r,o,i,s="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(s)return o=!(r=!0),{s:function(){s=s.call(t)},n:function(){var t=s.next();return r=t.done,t},e:function(t){o=!0,n=t},f:function(){try{r||null==s.return||s.return()}finally{if(o)throw n}}};if(Array.isArray(t)||(s=M(t))||e&&t&&"number"==typeof t.length)return s&&(t=s),i=0,{s:e=function(){},n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:e};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(){return(a=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n,r=arguments[e];for(n in r)!{}.hasOwnProperty.call(r,n)||(t[n]=r[n])}return t}).apply(null,arguments)}function I(t){return(I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){t.prototype=Object.create(e.prototype),o(t.prototype.constructor=t,e)}function D(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(D=function(){return!!t})()}function o(t,e){return(o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function U(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||M(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function M(t,e){var n;if(t)return"string"==typeof t?r(t,e):"Map"===(n="Object"===(n={}.toString.call(t).slice(8,-1))&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}function V(t){var n="function"==typeof Map?new Map:void 0;return function(t){if(null===t||!function(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return function(t,e,n){var r;return D()?Reflect.construct.apply(null,arguments):((r=[null]).push.apply(r,e),e=new(t.bind.apply(t,r)),n&&o(e,n.prototype),e)}(t,arguments,I(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o(e,t)}(t)}var n,c=Object.create(null),u=(c.open="0",c.close="1",c.ping="2",c.pong="3",c.message="4",c.upgrade="5",c.noop="6",Object.create(null)),p=(Object.keys(c).forEach(function(t){u[c[t]]=t}),{type:"error",data:"parser error"}),H="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===Object.prototype.toString.call(Blob),z="function"==typeof ArrayBuffer,K=function(t){return"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer},h=function(t,e,n){var r=t.type,t=t.data;return H&&t instanceof Blob?e?n(t):W(t,n):z&&(t instanceof ArrayBuffer||K(t))?e?n(t):W(new Blob([t]),n):n(c[r]+(t||""))},W=function(t,e){var n=new FileReader;return n.onload=function(){var t=n.result.split(",")[1];e("b"+(t||""))},n.readAsDataURL(t)};function Y(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}for(var $="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l="undefined"==typeof Uint8Array?[]:new Uint8Array(256),t=0;t<$.length;t++)l[$.charCodeAt(t)]=t;function d(t,e){var n;return"string"!=typeof t?{type:"message",data:Z(t,e)}:"b"===(n=t.charAt(0))?{type:"message",data:J(t.substring(1),e)}:u[n]?1<t.length?{type:u[n],data:t.substring(1)}:{type:u[n]}:p}function J(t,e){var n;return G?(n=X(t),Z(n,e)):{base64:!0,data:t}}var Q,X=function(t){for(var e,n,r,o,i=.75*t.length,s=t.length,a=0,i=("="===t[t.length-1]&&(i--,"="===t[t.length-2])&&i--,new ArrayBuffer(i)),c=new Uint8Array(i),u=0;u<s;u+=4)e=l[t.charCodeAt(u)],n=l[t.charCodeAt(u+1)],r=l[t.charCodeAt(u+2)],o=l[t.charCodeAt(u+3)],c[a++]=e<<2|n>>4,c[a++]=(15&n)<<4|r>>2,c[a++]=(3&r)<<6|63&o;return i},G="function"==typeof ArrayBuffer,Z=function(t,e){return"blob"!==e?t instanceof ArrayBuffer?t:t.buffer:t instanceof Blob?t:new Blob([t])},tt=String.fromCharCode(30);function et(){return new TransformStream({transform:function(o,i){var t,e;t=o,e=function(t){var e,n,r=t.length;r<126?(e=new Uint8Array(1),new DataView(e.buffer).setUint8(0,r)):r<65536?(e=new Uint8Array(3),(n=new DataView(e.buffer)).setUint8(0,126),n.setUint16(1,r)):(e=new Uint8Array(9),(n=new DataView(e.buffer)).setUint8(0,127),n.setBigUint64(1,BigInt(r))),o.data&&"string"!=typeof o.data&&(e[0]|=128),i.enqueue(e),i.enqueue(t)},H&&t.data instanceof Blob?t.data.arrayBuffer().then(Y).then(e):z&&(t.data instanceof ArrayBuffer||K(t.data))?e(Y(t.data)):h(t,!1,function(t){n=n||new TextEncoder,e(n.encode(t))})}})}function y(t){return t.reduce(function(t,e){return t+e.length},0)}function g(t,e){if(t[0].length===e)return t.shift();for(var n=new Uint8Array(e),r=0,o=0;o<e;o++)n[o]=t[0][r++],r===t[0].length&&(t.shift(),r=0);return t.length&&r<t[0].length&&(t[0]=t[0].slice(r)),n}function m(t){if(t){var e,n=t;for(e in m.prototype)n[e]=m.prototype[e];return n}}m.prototype.on=m.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},m.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},m.prototype.off=m.prototype.removeListener=m.prototype.removeAllListeners=m.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)this._callbacks={};else{var n=this._callbacks["$"+t];if(n)if(1==arguments.length)delete this._callbacks["$"+t];else{for(var r,o=0;o<n.length;o++)if((r=n[o])===e||r.fn===e){n.splice(o,1);break}0===n.length&&delete this._callbacks["$"+t]}}return this},m.prototype.emitReserved=m.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),n=this._callbacks["$"+t],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(n)for(var r=0,o=(n=n.slice(0)).length;r<o;++r)n[r].apply(this,e);return this},m.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},m.prototype.hasListeners=function(t){return!!this.listeners(t).length};var v="function"==typeof Promise&&"function"==typeof Promise.resolve?function(t){return Promise.resolve().then(t)}:function(t,e){return e(t,0)},b="undefined"!=typeof self?self:"undefined"!=typeof window?window:Function("return this")();function nt(n){for(var t=arguments.length,e=new Array(1<t?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];return e.reduce(function(t,e){return n.hasOwnProperty(e)&&(t[e]=n[e]),t},{})}var rt=b.setTimeout,ot=b.clearTimeout;function _(t,e){e.useNativeTimers?(t.setTimeoutFn=rt.bind(b),t.clearTimeoutFn=ot.bind(b)):(t.setTimeoutFn=b.setTimeout.bind(b),t.clearTimeoutFn=b.clearTimeout.bind(b))}function it(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}var st=function(r){function t(t,e,n){t=r.call(this,t)||this;return t.description=e,t.context=n,t.type="TransportError",t}return s(t,r),t}(V(Error)),e=function(r){function t(t){var e=r.call(this)||this;return e.writable=!1,_(e,t),e.opts=t,e.query=t.query,e.socket=t.socket,e.supportsBinary=!t.forceBase64,e}s(t,r);var e=t.prototype;return e.onError=function(t,e,n){return r.prototype.emitReserved.call(this,"error",new st(t,e,n)),this},e.open=function(){return this.readyState="opening",this.doOpen(),this},e.close=function(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this},e.send=function(t){"open"===this.readyState&&this.write(t)},e.onOpen=function(){this.readyState="open",this.writable=!0,r.prototype.emitReserved.call(this,"open")},e.onData=function(t){t=d(t,this.socket.binaryType);this.onPacket(t)},e.onPacket=function(t){r.prototype.emitReserved.call(this,"packet",t)},e.onClose=function(t){this.readyState="closed",r.prototype.emitReserved.call(this,"close",t)},e.pause=function(t){},e.createUri=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(e)},e._hostname=function(){var t=this.opts.hostname;return-1===t.indexOf(":")?t:"["+t+"]"},e._port=function(){return this.opts.port&&(this.opts.secure&&Number(443!==this.opts.port)||!this.opts.secure&&80!==Number(this.opts.port))?":"+this.opts.port:""},e._query=function(t){t=function(t){var e,n="";for(e in t)t.hasOwnProperty(e)&&(n.length&&(n+="&"),n+=encodeURIComponent(e)+"="+encodeURIComponent(t[e]));return n}(t);return t.length?"?"+t:""},t}(m),w=function(e){function t(){var t=e.apply(this,arguments)||this;return t._polling=!1,t}s(t,e);var n=t.prototype;return n.doOpen=function(){this._poll()},n.pause=function(t){function e(){r.readyState="paused",t()}var n,r=this;this.readyState="pausing";this._polling||!this.writable?(n=0,this._polling&&(n++,this.once("pollComplete",function(){--n||e()})),this.writable||(n++,this.once("drain",function(){--n||e()}))):e()},n._poll=function(){this._polling=!0,this.doPoll(),this.emitReserved("poll")},n.onData=function(t){var e=this;!function(t,e){for(var n=t.split(tt),r=[],o=0;o<n.length;o++){var i=d(n[o],e);if(r.push(i),"error"===i.type)break}return r}(t,this.socket.binaryType).forEach(function(t){if("opening"===e.readyState&&"open"===t.type&&e.onOpen(),"close"===t.type)return e.onClose({description:"transport closed by the server"}),!1;e.onPacket(t)}),"closed"!==this.readyState&&(this._polling=!1,this.emitReserved("pollComplete"),"open"===this.readyState)&&this._poll()},n.doClose=function(){function t(){e.write([{type:"close"}])}var e=this;"open"===this.readyState?t():this.once("open",t)},n.write=function(t){var n,r,o,i,e=this;this.writable=!1,n=function(t){e.doWrite(t,function(){e.writable=!0,e.emitReserved("drain")})},r=(t=t).length,o=new Array(r),i=0,t.forEach(function(t,e){h(t,!1,function(t){o[e]=t,++i===r&&n(o.join(tt))})})},n.uri=function(){var t=this.opts.secure?"https":"http",e=this.query||{};return!1!==this.opts.timestampRequests&&(e[this.opts.timestampParam]=it()),this.supportsBinary||e.sid||(e.b64=1),this.createUri(t,e)},i(t,[{key:"name",get:function(){return"polling"}}])}(e),C=!1;try{C="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(t){}var at=C;function ct(){}var C=function(r){function t(t){var e,n=r.call(this,t)||this;return"undefined"!=typeof location&&(e=(e=location.port)||("https:"===location.protocol?"443":"80"),n.xd=void 0!==location&&t.hostname!==location.hostname||e!==t.port),n}s(t,r);var e=t.prototype;return e.doWrite=function(t,e){var n=this,t=this.request({method:"POST",data:t});t.on("success",e),t.on("error",function(t,e){n.onError("xhr post error",t,e)})},e.doPoll=function(){var n=this,t=this.request();t.on("data",this.onData.bind(this)),t.on("error",function(t,e){n.onError("xhr poll error",t,e)}),this.pollXhr=t},t}(w),k=function(o){function i(t,e,n){var r=o.call(this)||this;return r.createRequest=t,_(r,n),r._opts=n,r._method=n.method||"GET",r._uri=e,r._data=void 0!==n.data?n.data:null,r._create(),r}s(i,o);var t=i.prototype;return t._create=function(){var t,e=this,n=nt(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref"),r=(n.xdomain=!!this._opts.xd,this._xhr=this.createRequest(n));try{r.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders)for(var o in r.setDisableHeaderCheck&&r.setDisableHeaderCheck(!0),this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(o)&&r.setRequestHeader(o,this._opts.extraHeaders[o])}catch(t){}if("POST"===this._method)try{r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(t){}try{r.setRequestHeader("Accept","*/*")}catch(t){}null!=(t=this._opts.cookieJar)&&t.addCookies(r),"withCredentials"in r&&(r.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(r.timeout=this._opts.requestTimeout),r.onreadystatechange=function(){var t;3===r.readyState&&null!=(t=e._opts.cookieJar)&&t.parseCookies(r.getResponseHeader("set-cookie")),4===r.readyState&&(200===r.status||1223===r.status?e._onLoad():e.setTimeoutFn(function(){e._onError("number"==typeof r.status?r.status:0)},0))},r.send(this._data)}catch(t){return void this.setTimeoutFn(function(){e._onError(t)},0)}"undefined"!=typeof document&&(this._index=i.requestsCount++,i.requests[this._index]=this)},t._onError=function(t){this.emitReserved("error",t,this._xhr),this._cleanup(!0)},t._cleanup=function(t){if(void 0!==this._xhr&&null!==this._xhr){if(this._xhr.onreadystatechange=ct,t)try{this._xhr.abort()}catch(t){}"undefined"!=typeof document&&delete i.requests[this._index],this._xhr=null}},t._onLoad=function(){var t=this._xhr.responseText;null!==t&&(this.emitReserved("data",t),this.emitReserved("success"),this._cleanup())},t.abort=function(){this._cleanup()},i}(m);function ut(){for(var t in k.requests)k.requests.hasOwnProperty(t)&&k.requests[t].abort()}k.requestsCount=0,k.requests={},"undefined"!=typeof document&&("function"==typeof attachEvent?attachEvent("onunload",ut):"function"==typeof addEventListener&&addEventListener("onpagehide"in b?"pagehide":"unload",ut,!1));var ht=(w=ft({xdomain:!1}))&&null!==w.responseType,w=function(n){function t(t){var e=n.call(this,t)||this,t=t&&t.forceBase64;return e.supportsBinary=ht&&!t,e}return s(t,n),t.prototype.request=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return a(t,{xd:this.xd},this.opts),new k(ft,this.uri(),t)},t}(C);function ft(t){t=t.xdomain;try{if("undefined"!=typeof XMLHttpRequest&&(!t||at))return new XMLHttpRequest}catch(t){}if(!t)try{return new b[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch(t){}}var pt="undefined"!=typeof navigator&&"string"==typeof navigator.product&&"reactnative"===navigator.product.toLowerCase(),lt=b.WebSocket||b.MozWebSocket,dt={websocket:function(t){function e(){return t.apply(this,arguments)||this}s(e,t);var n=e.prototype;return n.createSocket=function(t,e,n){return pt?new lt(t,e,n):e?new lt(t,e):new lt(t)},n.doWrite=function(t,e){this.ws.send(e)},e}(function(t){function e(){return t.apply(this,arguments)||this}s(e,t);var n=e.prototype;return n.doOpen=function(){var t=this.uri(),e=this.opts.protocols,n=pt?{}:nt(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(t,e,n)}catch(t){return this.emitReserved("error",t)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()},n.addEventListeners=function(){var e=this;this.ws.onopen=function(){e.opts.autoUnref&&e.ws._socket.unref(),e.onOpen()},this.ws.onclose=function(t){return e.onClose({description:"websocket connection closed",context:t})},this.ws.onmessage=function(t){return e.onData(t.data)},this.ws.onerror=function(t){return e.onError("websocket error",t)}},n.write=function(t){for(var r=this,o=(this.writable=!1,0);o<t.length;o++)!function(){var e=t[o],n=o===t.length-1;h(e,r.supportsBinary,function(t){try{r.doWrite(e,t)}catch(t){}n&&v(function(){r.writable=!0,r.emitReserved("drain")},r.setTimeoutFn)})}()},n.doClose=function(){void 0!==this.ws&&(this.ws.onerror=function(){},this.ws.close(),this.ws=null)},n.uri=function(){var t=this.opts.secure?"wss":"ws",e=this.query||{};return this.opts.timestampRequests&&(e[this.opts.timestampParam]=it()),this.supportsBinary||(e.b64=1),this.createUri(t,e)},i(e,[{key:"name",get:function(){return"websocket"}}])}(e)),webtransport:function(t){function e(){return t.apply(this,arguments)||this}s(e,t);var n=e.prototype;return n.doOpen=function(){var r=this;try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(t){return this.emitReserved("error",t)}this._transport.closed.then(function(){r.onClose()}).catch(function(t){r.onError("webtransport error",t)}),this._transport.ready.then(function(){r._transport.createBidirectionalStream().then(function(t){i=Number.MAX_SAFE_INTEGER,s=r.socket.binaryType,Q=Q||new TextDecoder,a=[],c=0,h=!(u=-1);var i,s,a,c,u,h,e=new TransformStream({transform:function(t,e){for(a.push(t);;){if(0===c){if(y(a)<1)break;var n=g(a,1);h=128==(128&n[0]),c=(u=127&n[0])<126?3:126===u?1:2}else if(1===c){if(y(a)<2)break;n=g(a,2);u=new DataView(n.buffer,n.byteOffset,n.length).getUint16(0),c=3}else if(2===c){if(y(a)<8)break;var r=g(a,8),r=new DataView(r.buffer,r.byteOffset,r.length),o=r.getUint32(0);if(o>Math.pow(2,21)-1){e.enqueue(p);break}u=o*Math.pow(2,32)+r.getUint32(4),c=3}else{if(y(a)<u)break;o=g(a,u);e.enqueue(d(h?o:Q.decode(o),s)),c=0}if(0===u||i<u){e.enqueue(p);break}}}}),n=t.readable.pipeThrough(e).getReader(),e=et();e.readable.pipeTo(t.writable),r._writer=e.writable.getWriter();(function e(){n.read().then(function(t){t.done||(r.onPacket(t.value),e())}).catch(function(t){})})();t={type:"open"};r.query.sid&&(t.data='{"sid":"'.concat(r.query.sid,'"}')),r._writer.write(t).then(function(){return r.onOpen()})})})},n.write=function(n){for(var r=this,o=(this.writable=!1,0);o<n.length;o++)!function(){var t=n[o],e=o===n.length-1;r._writer.write(t).then(function(){e&&v(function(){r.writable=!0,r.emitReserved("drain")},r.setTimeoutFn)})}()},n.doClose=function(){var t;null!=(t=this._transport)&&t.close()},i(e,[{key:"name",get:function(){return"webtransport"}}])}(e),polling:w},yt=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,gt=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function mt(t){if(8e3<t.length)throw"URI too long";for(var r,e=t,n=t.indexOf("["),o=t.indexOf("]"),i=(-1!=n&&-1!=o&&(t=t.substring(0,n)+t.substring(n,o).replace(/:/g,";")+t.substring(o,t.length)),yt.exec(t||"")),s={},a=14;a--;)s[gt[a]]=i[a]||"";return-1!=n&&-1!=o&&(s.source=e,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=function(t){var e=t.replace(/\/{2,9}/g,"/").split("/");"/"!=t.slice(0,1)&&0!==t.length||e.splice(0,1);"/"==t.slice(-1)&&e.splice(e.length-1,1);return e}(s.path),s.queryKey=(r={},s.query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(t,e,n){e&&(r[e]=n)}),r),s}var vt="function"==typeof addEventListener&&"function"==typeof removeEventListener,A=[],E=(vt&&addEventListener("offline",function(){A.forEach(function(t){return t()})},!1),function(r){function n(t,e){var n=r.call(this)||this;return n.binaryType="arraybuffer",n.writeBuffer=[],n._prevBufferLen=0,n._pingInterval=-1,n._pingTimeout=-1,n._maxPayload=-1,n._pingTimeoutTime=1/0,t&&"object"===f(t)&&(e=t,t=null),t?(t=mt(t),e.hostname=t.host,e.secure="https"===t.protocol||"wss"===t.protocol,e.port=t.port,t.query&&(e.query=t.query)):e.host&&(e.hostname=mt(e.host).host),_(n,e),n.secure=null!=e.secure?e.secure:"undefined"!=typeof location&&"https:"===location.protocol,e.hostname&&!e.port&&(e.port=n.secure?"443":"80"),n.hostname=e.hostname||("undefined"!=typeof location?location.hostname:"localhost"),n.port=e.port||("undefined"!=typeof location&&location.port?location.port:n.secure?"443":"80"),n.transports=[],n._transportsByName={},e.transports.forEach(function(t){var e=t.prototype.name;n.transports.push(e),n._transportsByName[e]=t}),n.opts=a({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},e),n.opts.path=n.opts.path.replace(/\/$/,"")+(n.opts.addTrailingSlash?"/":""),"string"==typeof n.opts.query&&(n.opts.query=function(t){for(var e={},n=t.split("&"),r=0,o=n.length;r<o;r++){var i=n[r].split("=");e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return e}(n.opts.query)),vt&&(n.opts.closeOnBeforeunload&&(n._beforeunloadEventListener=function(){n.transport&&(n.transport.removeAllListeners(),n.transport.close())},addEventListener("beforeunload",n._beforeunloadEventListener,!1)),"localhost"!==n.hostname)&&(n._offlineEventListener=function(){n._onClose("transport close",{description:"network connection lost"})},A.push(n._offlineEventListener)),n.opts.withCredentials&&(n._cookieJar=void 0),n._open(),n}s(n,r);var t=n.prototype;return t.createTransport=function(t){var e=a({},this.opts.query),e=(e.EIO=4,e.transport=t,this.id&&(e.sid=this.id),a({},this.opts,{query:e,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]));return new this._transportsByName[t](e)},t._open=function(){var t,e=this;0===this.transports.length?this.setTimeoutFn(function(){e.emitReserved("error","No transports available")},0):(t=this.opts.rememberUpgrade&&n.priorWebsocketSuccess&&-1!==this.transports.indexOf("websocket")?"websocket":this.transports[0],this.readyState="opening",(t=this.createTransport(t)).open(),this.setTransport(t))},t.setTransport=function(t){var e=this;this.transport&&this.transport.removeAllListeners(),(this.transport=t).on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",function(t){return e._onClose("transport close",t)})},t.onOpen=function(){this.readyState="open",n.priorWebsocketSuccess="websocket"===this.transport.name,this.emitReserved("open"),this.flush()},t._onPacket=function(t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":var e=new Error("server error");e.code=t.data,this._onError(e);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data)}},t.onHandshake=function(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),"closed"!==this.readyState&&this._resetPingTimeout()},t._resetPingTimeout=function(){var t=this,e=(this.clearTimeoutFn(this._pingTimeoutTimer),this._pingInterval+this._pingTimeout);this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(function(){t._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()},t._onDrain=function(){this.writeBuffer.splice(0,this._prevBufferLen),(this._prevBufferLen=0)===this.writeBuffer.length?this.emitReserved("drain"):this.flush()},t.flush=function(){var t;"closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(t=this._getWritablePackets(),this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved("flush"))},t._getWritablePackets=function(){if(this._maxPayload&&"polling"===this.transport.name&&1<this.writeBuffer.length)for(var t=1,e=0;e<this.writeBuffer.length;e++){var n=this.writeBuffer[e].data;if(n&&(t+=function(t){if("string"!=typeof t)return Math.ceil(1.33*(t.byteLength||t.size));for(var e=t,n=0,r=0,o=0,i=e.length;o<i;o++)(n=e.charCodeAt(o))<128?r+=1:n<2048?r+=2:n<55296||57344<=n?r+=3:(o++,r+=4);return r}(n)),0<e&&t>this._maxPayload)return this.writeBuffer.slice(0,e);t+=2}return this.writeBuffer},t._hasPingExpired=function(){var t,e=this;return!this._pingTimeoutTime||((t=Date.now()>this._pingTimeoutTime)&&(this._pingTimeoutTime=0,v(function(){e._onClose("ping timeout")},this.setTimeoutFn)),t)},t.write=function(t,e,n){return this._sendPacket("message",t,e,n),this},t.send=function(t,e,n){return this._sendPacket("message",t,e,n),this},t._sendPacket=function(t,e,n,r){"function"==typeof e&&(r=e,e=void 0),"function"==typeof n&&(r=n,n=null),"closing"!==this.readyState&&"closed"!==this.readyState&&((n=n||{}).compress=!1!==n.compress,this.emitReserved("packetCreate",t={type:t,data:e,options:n}),this.writeBuffer.push(t),r&&this.once("flush",r),this.flush())},t.close=function(){function t(){n.off("upgrade",t),n.off("upgradeError",t),r()}function e(){n.once("upgrade",t),n.once("upgradeError",t)}var n=this,r=function(){n._onClose("forced close"),n.transport.close()};return"opening"!==this.readyState&&"open"!==this.readyState||(this.readyState="closing",this.writeBuffer.length?this.once("drain",function(){(n.upgrading?e:r)()}):(this.upgrading?e:r)()),this},t._onError=function(t){if(n.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&1<this.transports.length&&"opening"===this.readyState)return this.transports.shift(),this._open();this.emitReserved("error",t),this._onClose("transport error",t)},t._onClose=function(t,e){var n;"opening"!==this.readyState&&"open"!==this.readyState&&"closing"!==this.readyState||(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),vt&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)&&-1!==(n=A.indexOf(this._offlineEventListener))&&A.splice(n,1),this.readyState="closed",this.id=null,this.emitReserved("close",t,e),this.writeBuffer=[],this._prevBufferLen=0)},n}(m));E.protocol=4;var bt=function(n){function t(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},e="object"===f(t)?t:e;return e.transports&&"string"!=typeof e.transports[0]||(e.transports=(e.transports||["polling","websocket","webtransport"]).map(function(t){return dt[t]}).filter(function(t){return!!t})),n.call(this,t,e)||this}return s(t,n),t}(function(e){function t(){var t=e.apply(this,arguments)||this;return t._upgrades=[],t}s(t,e);var n=t.prototype;return n.onOpen=function(){if(e.prototype.onOpen.call(this),"open"===this.readyState&&this.opts.upgrade)for(var t=0;t<this._upgrades.length;t++)this._probe(this._upgrades[t])},n._probe=function(t){var e=this,n=this.createTransport(t),r=!1,o=(E.priorWebsocketSuccess=!1,function(){r||(n.send([{type:"ping",data:"probe"}]),n.once("packet",function(t){r||("pong"===t.type&&"probe"===t.data?(e.upgrading=!0,e.emitReserved("upgrading",n),n&&(E.priorWebsocketSuccess="websocket"===n.name,e.transport.pause(function(){r||"closed"!==e.readyState&&(h(),e.setTransport(n),n.send([{type:"upgrade"}]),e.emitReserved("upgrade",n),n=null,e.upgrading=!1,e.flush())}))):((t=new Error("probe error")).transport=n.name,e.emitReserved("upgradeError",t)))}))});function i(){r||(r=!0,h(),n.close(),n=null)}var s=function(t){t=new Error("probe error: "+t);t.transport=n.name,i(),e.emitReserved("upgradeError",t)};function a(){s("transport closed")}function c(){s("socket closed")}function u(t){n&&t.name!==n.name&&i()}var h=function(){n.removeListener("open",o),n.removeListener("error",s),n.removeListener("close",a),e.off("close",c),e.off("upgrading",u)};n.once("open",o),n.once("error",s),n.once("close",a),this.once("close",c),this.once("upgrading",u),-1!==this._upgrades.indexOf("webtransport")&&"webtransport"!==t?this.setTimeoutFn(function(){r||n.open()},200):n.open()},n.onHandshake=function(t){this._upgrades=this._filterUpgrades(t.upgrades),e.prototype.onHandshake.call(this,t)},n._filterUpgrades=function(t){for(var e=[],n=0;n<t.length;n++)~this.transports.indexOf(t[n])&&e.push(t[n]);return e},t}(E));function _t(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}bt.protocol;var wt,Ct,C={exports:{}};function kt(){var o,i,s,a,c,u;return Ct||(Ct=1,c=7*(a=24*(s=60*(i=60*(o=1e3)))),u=365.25*a,wt=function(t,e){e=e||{};var n=f(t);if(!("string"===n&&0<t.length)){if("number"===n&&isFinite(t))return(e.long?function(t){var e=Math.abs(t);if(a<=e)return h(t,e,a,"day");if(s<=e)return h(t,e,s,"hour");if(i<=e)return h(t,e,i,"minute");if(o<=e)return h(t,e,o,"second");return t+" ms"}:function(t){var e=Math.abs(t);if(a<=e)return Math.round(t/a)+"d";if(s<=e)return Math.round(t/s)+"h";if(i<=e)return Math.round(t/i)+"m";if(o<=e)return Math.round(t/o)+"s";return t+"ms"})(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}n=t;if(!(100<(n=String(n)).length)){n=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(n);if(n){var r=parseFloat(n[1]);switch((n[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return r*u;case"weeks":case"week":case"w":return r*c;case"days":case"day":case"d":return r*a;case"hours":case"hour":case"hrs":case"hr":case"h":return r*s;case"minutes":case"minute":case"mins":case"min":case"m":return r*i;case"seconds":case"second":case"secs":case"sec":case"s":return r*o;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r;default:return}}}}),wt;function h(t,e,n,r){e=1.5*n<=e;return Math.round(t/n)+" "+r+(e?"s":"")}}var O,T,At,e=function(e){function u(t){var a,e,n,r=null;function c(){for(var r,t,e,o,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];c.enabled&&(r=c,e=(t=Number(new Date))-(a||t),r.diff=e,r.prev=a,r.curr=t,a=t,i[0]=u.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O"),i[o=0]=i[0].replace(/%([a-zA-Z%])/g,function(t,e){if("%%"===t)return"%";o++;var n,e=u.formatters[e];return"function"==typeof e&&(n=i[o],t=e.call(r,n),i.splice(o,1),o--),t}),u.formatArgs.call(r,i),(r.log||u.log).apply(r,i))}return c.namespace=t,c.useColors=u.useColors(),c.color=u.selectColor(t),c.extend=o,c.destroy=u.destroy,Object.defineProperty(c,"enabled",{enumerable:!0,configurable:!1,get:function(){return null!==r?r:(e!==u.namespaces&&(e=u.namespaces,n=u.enabled(t)),n)},set:function(t){r=t}}),"function"==typeof u.init&&u.init(c),c}function o(t,e){e=u(this.namespace+(void 0===e?":":e)+t);return e.log=this.log,e}function n(t){return t.toString().substring(2,t.toString().length-2).replace(/\.\*\?$/,"*")}return((u.debug=u).default=u).coerce=function(t){if(t instanceof Error)return t.stack||t.message;return t},u.disable=function(){var t=[].concat(U(u.names.map(n)),U(u.skips.map(n).map(function(t){return"-"+t}))).join(",");return u.enable(""),t},u.enable=function(t){u.save(t),u.namespaces=t,u.names=[],u.skips=[];var e,n=("string"==typeof t?t:"").split(/[\s,]+/),r=n.length;for(e=0;e<r;e++)n[e]&&("-"===(t=n[e].replace(/\*/g,".*?"))[0]?u.skips.push(new RegExp("^"+t.slice(1)+"$")):u.names.push(new RegExp("^"+t+"$")))},u.enabled=function(t){if("*"===t[t.length-1])return!0;var e,n;for(e=0,n=u.skips.length;e<n;e++)if(u.skips[e].test(t))return!1;for(e=0,n=u.names.length;e<n;e++)if(u.names[e].test(t))return!0;return!1},u.humanize=kt(),u.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(e).forEach(function(t){u[t]=e[t]}),u.names=[],u.skips=[],u.formatters={},u.selectColor=function(t){for(var e=0,n=0;n<t.length;n++)e=(e<<5)-e+t.charCodeAt(n),e|=0;return u.colors[Math.abs(e)%u.colors.length]},u.enable(u.load()),u};(T=(O=C).exports).formatArgs=function(t){var e,n,r;t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+O.exports.humanize(this.diff),this.useColors&&(e="color: "+this.color,t.splice(1,0,e,"color: inherit"),t[r=n=0].replace(/%[a-zA-Z%]/g,function(t){"%%"!==t&&(n++,"%c"===t)&&(r=n)}),t.splice(r,0,e))},T.save=function(t){try{t?T.storage.setItem("debug",t):T.storage.removeItem("debug")}catch(t){}},T.load=function(){var t;try{t=T.storage.getItem("debug")}catch(t){}!t&&"undefined"!=typeof process&&"env"in process&&(t=process.env.DEBUG);return t},T.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&31<=parseInt(RegExp.$1,10)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},T.storage=function(){try{return localStorage}catch(t){}}(),T.destroy=(At=!1,function(){At||(At=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}),T.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],T.log=console.debug||console.log||function(){},O.exports=e(T),O.exports.formatters.j=function(t){try{return JSON.stringify(t)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}};var w=_t(C.exports),Et=w("socket.io-client:url");var Ot="function"==typeof ArrayBuffer,Tt=function(t){return"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer},e=Object.prototype.toString,Rt="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===e.call(Blob),St="function"==typeof File||"undefined"!=typeof File&&"[object FileConstructor]"===e.call(File);function Ft(t){return Ot&&(t instanceof ArrayBuffer||Tt(t))||Rt&&t instanceof Blob||St&&t instanceof File}function Bt(t){var e=[],n=t.data;return t.data=function t(e,n){if(!e)return e;{var r;if(Ft(e))return r={_placeholder:!0,num:n.length},n.push(e),r;if(Array.isArray(e)){for(var o=new Array(e.length),i=0;i<e.length;i++)o[i]=t(e[i],n);return o}if("object"===f(e)&&!(e instanceof Date)){var s,a={};for(s in e)Object.prototype.hasOwnProperty.call(e,s)&&(a[s]=t(e[s],n));return a}}return e}(n,e),t.attachments=e.length,{packet:t,buffers:e}}function Nt(t,e){return t.data=function t(e,n){if(!e)return e;{if(e&&!0===e._placeholder){var r="number"==typeof e.num&&0<=e.num&&e.num<n.length;if(r)return n[e.num];throw new Error("illegal attachments")}if(Array.isArray(e))for(var o=0;o<e.length;o++)e[o]=t(e[o],n);else if("object"===f(e))for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(e[i]=t(e[i],n))}return e}(t.data,e),delete t.attachments,t}var R,xt=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],e=((C=R=R||{})[C.CONNECT=0]="CONNECT",C[C.DISCONNECT=1]="DISCONNECT",C[C.EVENT=2]="EVENT",C[C.ACK=3]="ACK",C[C.CONNECT_ERROR=4]="CONNECT_ERROR",C[C.BINARY_EVENT=5]="BINARY_EVENT",C[C.BINARY_ACK=6]="BINARY_ACK",function(){function t(t){this.replacer=t}var e=t.prototype;return e.encode=function(t){return t.type!==R.EVENT&&t.type!==R.ACK||!function t(e){if(e&&"object"===f(e))if(Array.isArray(e)){for(var n=0,r=e.length;n<r;n++)if(t(e[n]))return!0}else{if(Ft(e))return!0;if(e.toJSON&&"function"==typeof e.toJSON&&1===arguments.length)return t(e.toJSON(),!0);for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)&&t(e[o]))return!0}return!1}(t)?[this.encodeAsString(t)]:this.encodeAsBinary({type:t.type===R.EVENT?R.BINARY_EVENT:R.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id})},e.encodeAsString=function(t){var e=""+t.type;return t.type!==R.BINARY_EVENT&&t.type!==R.BINARY_ACK||(e+=t.attachments+"-"),t.nsp&&"/"!==t.nsp&&(e+=t.nsp+","),null!=t.id&&(e+=t.id),null!=t.data&&(e+=JSON.stringify(t.data,this.replacer)),e},e.encodeAsBinary=function(t){var t=Bt(t),e=this.encodeAsString(t.packet),t=t.buffers;return t.unshift(e),t},t}()),C=function(r){function i(t){var e=r.call(this)||this;return e.reviver=t,e}s(i,r);var t=i.prototype;return t.add=function(t){if("string"==typeof t){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");var e,n=(e=this.decodeString(t)).type===R.BINARY_EVENT;(!n&&e.type!==R.BINARY_ACK||(e.type=n?R.EVENT:R.ACK,this.reconstructor=new Lt(e),0===e.attachments))&&r.prototype.emitReserved.call(this,"decoded",e)}else{if(!Ft(t)&&!t.base64)throw new Error("Unknown type: "+t);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");(e=this.reconstructor.takeBinaryData(t))&&(this.reconstructor=null,r.prototype.emitReserved.call(this,"decoded",e))}},t.decodeString=function(t){var e=0,n={type:Number(t.charAt(0))};if(void 0===R[n.type])throw new Error("unknown packet type "+n.type);if(n.type===R.BINARY_EVENT||n.type===R.BINARY_ACK){for(var r=e+1;"-"!==t.charAt(++e)&&e!=t.length;);r=t.substring(r,e);if(r!=Number(r)||"-"!==t.charAt(e))throw new Error("Illegal attachments");n.attachments=Number(r)}if("/"===t.charAt(e+1)){for(r=e+1;++e;){if(","===t.charAt(e))break;if(e===t.length)break}n.nsp=t.substring(r,e)}else n.nsp="/";r=t.charAt(e+1);if(""!==r&&Number(r)==r){for(r=e+1;++e;){var o=t.charAt(e);if(null==o||Number(o)!=o){--e;break}if(e===t.length)break}n.id=Number(t.substring(r,e+1))}if(t.charAt(++e)){r=this.tryParse(t.substr(e));if(!i.isPayloadValid(n.type,r))throw new Error("invalid payload");n.data=r}return n},t.tryParse=function(t){try{return JSON.parse(t,this.reviver)}catch(t){return!1}},i.isPayloadValid=function(t,e){switch(t){case R.CONNECT:return S(e);case R.DISCONNECT:return void 0===e;case R.CONNECT_ERROR:return"string"==typeof e||S(e);case R.EVENT:case R.BINARY_EVENT:return Array.isArray(e)&&("number"==typeof e[0]||"string"==typeof e[0]&&-1===xt.indexOf(e[0]));case R.ACK:case R.BINARY_ACK:return Array.isArray(e)}},t.destroy=function(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)},i}(m),Lt=function(){function t(t){this.packet=t,this.buffers=[],this.reconPack=t}var e=t.prototype;return e.takeBinaryData=function(t){return this.buffers.push(t),this.buffers.length===this.reconPack.attachments?(t=Nt(this.reconPack,this.buffers),this.finishedReconstruction(),t):null},e.finishedReconstruction=function(){this.reconPack=null,this.buffers=[]},t}();var jt=Number.isInteger||function(t){return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t};function S(t){return"[object Object]"===Object.prototype.toString.call(t)}var Pt=Object.freeze({__proto__:null,protocol:5,get PacketType(){return R},Encoder:e,Decoder:C,isPacketValid:function(t){return"string"==typeof t.nsp&&(void 0===(e=t.id)||jt(e))&&function(t,e){switch(t){case R.CONNECT:return void 0===e||S(e);case R.DISCONNECT:return void 0===e;case R.EVENT:return Array.isArray(e)&&("number"==typeof e[0]||"string"==typeof e[0]&&-1===xt.indexOf(e[0]));case R.ACK:return Array.isArray(e);case R.CONNECT_ERROR:return"string"==typeof e||S(e);default:return!1}}(t.type,t.data);var e}});function F(t,e,n){return t.on(e,n),function(){t.off(e,n)}}var B=w("socket.io-client:socket"),qt=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1}),It=function(o){function t(t,e,n){var r=o.call(this)||this;return r.connected=!1,r.recovered=!1,r.receiveBuffer=[],r.sendBuffer=[],r._queue=[],r._queueSeq=0,r.ids=0,r.acks={},r.flags={},r.io=t,r.nsp=e,n&&n.auth&&(r.auth=n.auth),r._opts=a({},n),r.io._autoConnect&&r.open(),r}s(t,o);var e=t.prototype;return e.subEvents=function(){var t;this.subs||(t=this.io,this.subs=[F(t,"open",this.onopen.bind(this)),F(t,"packet",this.onpacket.bind(this)),F(t,"error",this.onerror.bind(this)),F(t,"close",this.onclose.bind(this))])},e.connect=function(){return this.connected||(this.subEvents(),this.io._reconnecting||this.io.open(),"open"===this.io._readyState&&this.onopen()),this},e.open=function(){return this.connect()},e.send=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.unshift("message"),this.emit.apply(this,e),this},e.emit=function(t){if(qt.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');for(var e,n,r=arguments.length,o=new Array(1<r?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return o.unshift(t),!this._opts.retries||this.flags.fromQueue||this.flags.volatile?(e=((t={type:R.EVENT,data:o,options:{}}).options.compress=!1!==this.flags.compress,"function"==typeof o[o.length-1]&&(n=this.ids++,B("emitting packet with ack id %d",n),e=o.pop(),this._registerAckCallback(n,e),t.id=n),null==(n=null==(e=this.io.engine)?void 0:e.transport)?void 0:n.writable),n=this.connected&&!(null!=(n=this.io.engine)&&n._hasPingExpired()),this.flags.volatile&&!e?B("discard packet as the transport is not currently writable"):n?(this.notifyOutgoingListeners(t),this.packet(t)):this.sendBuffer.push(t),this.flags={}):this._addToQueue(o),this},e._registerAckCallback=function(e,r){var o,t,i=this,n=null!=(t=this.flags.timeout)?t:this._opts.ackTimeout;void 0===n?this.acks[e]=r:(o=this.io.setTimeoutFn(function(){delete i.acks[e];for(var t=0;t<i.sendBuffer.length;t++)i.sendBuffer[t].id===e&&(B("removing packet with ack id %d from the buffer",e),i.sendBuffer.splice(t,1));B("event with ack id %d has timed out after %d ms",e,n),r.call(i,new Error("operation has timed out"))},n),(t=function(){i.io.clearTimeoutFn(o);for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];r.apply(i,e)}).withError=!0,this.acks[e]=t)},e.emitWithAck=function(e){for(var o=this,t=arguments.length,i=new Array(1<t?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];return new Promise(function(n,r){function t(t,e){return t?r(t):n(e)}t.withError=!0,i.push(t),o.emit.apply(o,[e].concat(i))})},e._addToQueue=function(t){var o,i=this,s=("function"==typeof t[t.length-1]&&(o=t.pop()),{id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:a({fromQueue:!0},this.flags)});t.push(function(t){if(s===i._queue[0]){if(null!==t)s.tryCount>i._opts.retries&&(B("packet [%d] is discarded after %d tries",s.id,s.tryCount),i._queue.shift(),o)&&o(t);else if(B("packet [%d] was successfully sent",s.id),i._queue.shift(),o){for(var e=arguments.length,n=new Array(1<e?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];o.apply(void 0,[null].concat(n))}return s.pending=!1,i._drainQueue()}}),this._queue.push(s),this._drainQueue()},e._drainQueue=function(){var t,e=0<arguments.length&&void 0!==arguments[0]&&arguments[0];B("draining queue"),this.connected&&0!==this._queue.length&&((t=this._queue[0]).pending&&!e?B("packet [%d] has already been sent and is waiting for an ack",t.id):(t.pending=!0,t.tryCount++,B("sending packet [%d] (try n°%d)",t.id,t.tryCount),this.flags=t.flags,this.emit.apply(this,t.args)))},e.packet=function(t){t.nsp=this.nsp,this.io._packet(t)},e.onopen=function(){var e=this;B("transport is open - connecting"),"function"==typeof this.auth?this.auth(function(t){e._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)},e._sendConnectPacket=function(t){this.packet({type:R.CONNECT,data:this._pid?a({pid:this._pid,offset:this._lastOffset},t):t})},e.onerror=function(t){this.connected||this.emitReserved("connect_error",t)},e.onclose=function(t,e){B("close (%s)",t),this.connected=!1,delete this.id,this.emitReserved("disconnect",t,e),this._clearAcks()},e._clearAcks=function(){var n=this;Object.keys(this.acks).forEach(function(e){var t;n.sendBuffer.some(function(t){return String(t.id)===e})||(t=n.acks[e],delete n.acks[e],t.withError&&t.call(n,new Error("socket has been disconnected")))})},e.onpacket=function(t){if(t.nsp===this.nsp)switch(t.type){case R.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case R.EVENT:case R.BINARY_EVENT:this.onevent(t);break;case R.ACK:case R.BINARY_ACK:this.onack(t);break;case R.DISCONNECT:this.ondisconnect();break;case R.CONNECT_ERROR:this.destroy();var e=new Error(t.data.message);e.data=t.data.data,this.emitReserved("connect_error",e)}},e.onevent=function(t){var e=t.data||[];B("emitting event %j",e),null!=t.id&&(B("attaching ack callback to event"),e.push(this.ack(t.id))),this.connected?this.emitEvent(e):this.receiveBuffer.push(Object.freeze(e))},e.emitEvent=function(t){if(this._anyListeners&&this._anyListeners.length){var e,n=q(this._anyListeners.slice());try{for(n.s();!(e=n.n()).done;)e.value.apply(this,t)}catch(t){n.e(t)}finally{n.f()}}o.prototype.emit.apply(this,t),this._pid&&t.length&&"string"==typeof t[t.length-1]&&(this._lastOffset=t[t.length-1])},e.ack=function(r){var o=this,i=!1;return function(){if(!i){i=!0;for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];B("sending ack %j",e),o.packet({type:R.ACK,id:r,data:e})}}},e.onack=function(t){var e=this.acks[t.id];"function"!=typeof e?B("bad ack %s",t.id):(delete this.acks[t.id],B("calling ack %s with %j",t.id,t.data),e.withError&&t.data.unshift(null),e.apply(this,t.data))},e.onconnect=function(t,e){B("socket connected with id %s",t),this.id=t,this.recovered=e&&this._pid===e,this._pid=e,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)},e.emitBuffered=function(){var e=this;this.receiveBuffer.forEach(function(t){return e.emitEvent(t)}),this.receiveBuffer=[],this.sendBuffer.forEach(function(t){e.notifyOutgoingListeners(t),e.packet(t)}),this.sendBuffer=[]},e.ondisconnect=function(){B("server disconnect (%s)",this.nsp),this.destroy(),this.onclose("io server disconnect")},e.destroy=function(){this.subs&&(this.subs.forEach(function(t){return t()}),this.subs=void 0),this.io._destroy(this)},e.disconnect=function(){return this.connected&&(B("performing disconnect (%s)",this.nsp),this.packet({type:R.DISCONNECT})),this.destroy(),this.connected&&this.onclose("io client disconnect"),this},e.close=function(){return this.disconnect()},e.compress=function(t){return this.flags.compress=t,this},e.timeout=function(t){return this.flags.timeout=t,this},e.onAny=function(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this},e.prependAny=function(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this},e.offAny=function(t){if(this._anyListeners)if(t){for(var e=this._anyListeners,n=0;n<e.length;n++)if(t===e[n])return e.splice(n,1),this}else this._anyListeners=[];return this},e.listenersAny=function(){return this._anyListeners||[]},e.onAnyOutgoing=function(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this},e.prependAnyOutgoing=function(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this},e.offAnyOutgoing=function(t){if(this._anyOutgoingListeners)if(t){for(var e=this._anyOutgoingListeners,n=0;n<e.length;n++)if(t===e[n])return e.splice(n,1),this}else this._anyOutgoingListeners=[];return this},e.listenersAnyOutgoing=function(){return this._anyOutgoingListeners||[]},e.notifyOutgoingListeners=function(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){var e,n=q(this._anyOutgoingListeners.slice());try{for(n.s();!(e=n.n()).done;)e.value.apply(this,t.data)}catch(t){n.e(t)}finally{n.f()}}},i(t,[{key:"disconnected",get:function(){return!this.connected}},{key:"active",get:function(){return!!this.subs}},{key:"volatile",get:function(){return this.flags.volatile=!0,this}}])}(m);function N(t){this.ms=(t=t||{}).min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=0<t.jitter&&t.jitter<=1?t.jitter:0,this.attempts=0}N.prototype.duration=function(){var t,e,n=this.ms*Math.pow(this.factor,this.attempts++);return this.jitter&&(t=Math.random(),e=Math.floor(t*this.jitter*n),n=0==(1&Math.floor(10*t))?n-e:n+e),0|Math.min(n,this.max)},N.prototype.reset=function(){this.attempts=0},N.prototype.setMin=function(t){this.ms=t},N.prototype.setMax=function(t){this.max=t},N.prototype.setJitter=function(t){this.jitter=t};var x=w("socket.io-client:manager"),Dt=function(o){function t(t,e){var n=o.call(this)||this,r=(n.nsps={},n.subs=[],t&&"object"===f(t)&&(e=t,t=void 0),(e=e||{}).path=e.path||"/socket.io",n.opts=e,_(n,e),n.reconnection(!1!==e.reconnection),n.reconnectionAttempts(e.reconnectionAttempts||1/0),n.reconnectionDelay(e.reconnectionDelay||1e3),n.reconnectionDelayMax(e.reconnectionDelayMax||5e3),n.randomizationFactor(null!=(r=e.randomizationFactor)?r:.5),n.backoff=new N({min:n.reconnectionDelay(),max:n.reconnectionDelayMax(),jitter:n.randomizationFactor()}),n.timeout(null==e.timeout?2e4:e.timeout),n._readyState="closed",n.uri=t,e.parser||Pt);return n.encoder=new r.Encoder,n.decoder=new r.Decoder,n._autoConnect=!1!==e.autoConnect,n._autoConnect&&n.open(),n}s(t,o);var e=t.prototype;return e.reconnection=function(t){return arguments.length?(this._reconnection=!!t,t||(this.skipReconnect=!0),this):this._reconnection},e.reconnectionAttempts=function(t){return void 0===t?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)},e.reconnectionDelay=function(t){var e;return void 0===t?this._reconnectionDelay:(this._reconnectionDelay=t,null!=(e=this.backoff)&&e.setMin(t),this)},e.randomizationFactor=function(t){var e;return void 0===t?this._randomizationFactor:(this._randomizationFactor=t,null!=(e=this.backoff)&&e.setJitter(t),this)},e.reconnectionDelayMax=function(t){var e;return void 0===t?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,null!=(e=this.backoff)&&e.setMax(t),this)},e.timeout=function(t){return arguments.length?(this._timeout=t,this):this._timeout},e.maybeReconnectOnOpen=function(){!this._reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()},e.open=function(e){var t,n,r,o,i,s,a,c=this;return x("readyState %s",this._readyState),~this._readyState.indexOf("open")||(x("opening %s",this.uri),this.engine=new bt(this.uri,this.opts),t=this.engine,(n=this)._readyState="opening",this.skipReconnect=!1,r=F(t,"open",function(){n.onopen(),e&&e()}),i=F(t,"error",o=function(t){x("error"),c.cleanup(),c._readyState="closed",c.emitReserved("error",t),e?e(t):c.maybeReconnectOnOpen()}),!1!==this._timeout&&(s=this._timeout,x("connect attempt will timeout after %d",s),a=this.setTimeoutFn(function(){x("connect attempt timed out after %d",s),r(),o(new Error("timeout")),t.close()},s),this.opts.autoUnref&&a.unref(),this.subs.push(function(){c.clearTimeoutFn(a)})),this.subs.push(r),this.subs.push(i)),this},e.connect=function(t){return this.open(t)},e.onopen=function(){x("open"),this.cleanup(),this._readyState="open",this.emitReserved("open");var t=this.engine;this.subs.push(F(t,"ping",this.onping.bind(this)),F(t,"data",this.ondata.bind(this)),F(t,"error",this.onerror.bind(this)),F(t,"close",this.onclose.bind(this)),F(this.decoder,"decoded",this.ondecoded.bind(this)))},e.onping=function(){this.emitReserved("ping")},e.ondata=function(t){try{this.decoder.add(t)}catch(t){this.onclose("parse error",t)}},e.ondecoded=function(t){var e=this;v(function(){e.emitReserved("packet",t)},this.setTimeoutFn)},e.onerror=function(t){x("error",t),this.emitReserved("error",t)},e.socket=function(t,e){var n;return(n=this.nsps[t])?this._autoConnect&&!n.active&&n.connect():(n=new It(this,t,e),this.nsps[t]=n),n},e._destroy=function(t){for(var e=0,n=Object.keys(this.nsps);e<n.length;e++){var r=n[e];if(this.nsps[r].active)return void x("socket %s is still active, skipping close",r)}this._close()},e._packet=function(t){x("writing packet %j",t);for(var e=this.encoder.encode(t),n=0;n<e.length;n++)this.engine.write(e[n],t.options)},e.cleanup=function(){x("cleanup"),this.subs.forEach(function(t){return t()}),this.subs.length=0,this.decoder.destroy()},e._close=function(){x("disconnect"),this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")},e.disconnect=function(){return this._close()},e.onclose=function(t,e){var n;x("closed due to %s",t),this.cleanup(),null!=(n=this.engine)&&n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,e),this._reconnection&&!this.skipReconnect&&this.reconnect()},e.reconnect=function(){var e=this;if(this._reconnecting||this.skipReconnect)return this;var t,n,r=this;this.backoff.attempts>=this._reconnectionAttempts?(x("reconnect failed"),this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1):(t=this.backoff.duration(),x("will wait %dms before reconnect attempt",t),this._reconnecting=!0,n=this.setTimeoutFn(function(){r.skipReconnect||(x("attempting reconnect"),e.emitReserved("reconnect_attempt",r.backoff.attempts),r.skipReconnect)||r.open(function(t){t?(x("reconnect attempt error"),r._reconnecting=!1,r.reconnect(),e.emitReserved("reconnect_error",t)):(x("reconnect success"),r.onreconnect())})},t),this.opts.autoUnref&&n.unref(),this.subs.push(function(){e.clearTimeoutFn(n)}))},e.onreconnect=function(){var t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)},t}(m),Ut=w("socket.io-client"),L={};function j(t,e){"object"===f(t)&&(e=t,t=void 0);var t=function(t,e,n){var e=1<arguments.length&&void 0!==e?e:"",r=t,n=(2<arguments.length?n:void 0)||"undefined"!=typeof location&&location;return"string"==typeof(t=null==t?n.protocol+"//"+n.host:t)&&("/"===t.charAt(0)&&("/"===t.charAt(1)?n.protocol+t:n.host+t),/^(https?|wss?):\/\//.test(t)||(Et("protocol-less url %s",t),t=void 0!==n?n.protocol+"//"+t:"https://"+t),Et("parse %s",t),r=mt(t)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/",t=-1!==r.host.indexOf(":")?"["+r.host+"]":r.host,r.id=r.protocol+"://"+t+":"+r.port+e,r.href=r.protocol+"://"+t+(n&&n.port===r.port?"":":"+r.port),r}(t,(e=e||{}).path||"/socket.io"),n=t.source,r=t.id,o=L[r]&&t.path in L[r].nsps,o=e.forceNew||e["force new connection"]||!1===e.multiplex||o?(Ut("ignoring socket cache for %s",n),new Dt(n,e)):(L[r]||(Ut("new io instance for %s",n),L[r]=new Dt(n,e)),L[r]);return t.query&&!e.query&&(e.query=t.queryKey),o.socket(t.path,e)}return a(j,{Manager:Dt,Socket:It,io:j,connect:j}),j});
}
