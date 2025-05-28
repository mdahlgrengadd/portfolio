// Built worker plugin: pyodide
// Generated on: 2025-05-28T20:04:46.744Z

var x=Symbol("Comlink.proxy"),R=Symbol("Comlink.endpoint"),N=Symbol("Comlink.releaseProxy"),b=Symbol("Comlink.finalizer"),h=Symbol("Comlink.thrown"),C=e=>typeof e=="object"&&e!==null||typeof e=="function",D={canHandle:e=>C(e)&&e[x],serialize(e){let{port1:t,port2:s}=new MessageChannel;return j(e,t),[s,[s]]},deserialize(e){return e.start(),w(e)}},T={canHandle:e=>C(e)&&h in e,serialize({value:e}){let t;return e instanceof Error?t={isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:t={isError:!1,value:e},[t,[]]},deserialize(e){throw e.isError?Object.assign(new Error(e.value.message),e.value):e.value}},M=new Map([["proxy",D],["throw",T]]);function L(e,t){for(let s of e)if(t===s||s==="*"||s instanceof RegExp&&s.test(t))return!0;return!1}function j(e,t=globalThis,s=["*"]){t.addEventListener("message",function n(o){if(!o||!o.data)return;if(!L(s,o.origin)){console.warn(`Invalid origin '${o.origin}' for comlink proxy`);return}let{id:r,type:p,path:l}=Object.assign({path:[]},o.data),d=(o.data.argumentList||[]).map(g),i;try{let a=l.slice(0,-1).reduce((c,y)=>c[y],e),u=l.reduce((c,y)=>c[y],e);switch(p){case"GET":i=u;break;case"SET":a[l.slice(-1)[0]]=g(o.data.value),i=!0;break;case"APPLY":i=u.apply(a,d);break;case"CONSTRUCT":{let c=new u(...d);i=J(c)}break;case"ENDPOINT":{let{port1:c,port2:y}=new MessageChannel;j(e,y),i=H(c,[c])}break;case"RELEASE":i=void 0;break;default:return}}catch(a){i={value:a,[h]:0}}Promise.resolve(i).catch(a=>({value:a,[h]:0})).then(a=>{let[u,c]=P(a);t.postMessage(Object.assign(Object.assign({},u),{id:r}),c),p==="RELEASE"&&(t.removeEventListener("message",n),A(t),b in e&&typeof e[b]=="function"&&e[b]())}).catch(a=>{let[u,c]=P({value:new TypeError("Unserializable return value"),[h]:0});t.postMessage(Object.assign(Object.assign({},u),{id:r}),c)})}),t.start&&t.start()}function q(e){return e.constructor.name==="MessagePort"}function A(e){q(e)&&e.close()}function w(e,t){let s=new Map;return e.addEventListener("message",function(o){let{data:r}=o;if(!r||!r.id)return;let p=s.get(r.id);if(p)try{p(r)}finally{s.delete(r.id)}}),v(e,s,[],t)}function f(e){if(e)throw new Error("Proxy has been released and is not useable")}function S(e){return m(e,new Map,{type:"RELEASE"}).then(()=>{A(e)})}var _=new WeakMap,k="FinalizationRegistry"in globalThis&&new FinalizationRegistry(e=>{let t=(_.get(e)||0)-1;_.set(e,t),t===0&&S(e)});function z(e,t){let s=(_.get(t)||0)+1;_.set(t,s),k&&k.register(e,t,e)}function O(e){k&&k.unregister(e)}function v(e,t,s=[],n=function(){}){let o=!1,r=new Proxy(n,{get(p,l){if(f(o),l===N)return()=>{O(r),S(e),t.clear(),o=!0};if(l==="then"){if(s.length===0)return{then:()=>r};let d=m(e,t,{type:"GET",path:s.map(i=>i.toString())}).then(g);return d.then.bind(d)}return v(e,t,[...s,l])},set(p,l,d){f(o);let[i,a]=P(d);return m(e,t,{type:"SET",path:[...s,l].map(u=>u.toString()),value:i},a).then(g)},apply(p,l,d){f(o);let i=s[s.length-1];if(i===R)return m(e,t,{type:"ENDPOINT"}).then(g);if(i==="bind")return v(e,t,s.slice(0,-1));let[a,u]=E(d);return m(e,t,{type:"APPLY",path:s.map(c=>c.toString()),argumentList:a},u).then(g)},construct(p,l){f(o);let[d,i]=E(l);return m(e,t,{type:"CONSTRUCT",path:s.map(a=>a.toString()),argumentList:d},i).then(g)}});return z(r,e),r}function F(e){return Array.prototype.concat.apply([],e)}function E(e){let t=e.map(P);return[t.map(s=>s[0]),F(t.map(s=>s[1]))]}var I=new WeakMap;function H(e,t){return I.set(e,t),e}function J(e){return Object.assign(e,{[x]:!0})}function P(e){for(let[t,s]of M)if(s.canHandle(e)){let[n,o]=s.serialize(e);return[{type:"HANDLER",name:t,value:n},o]}return[{type:"RAW",value:e},I.get(e)||[]]}function g(e){switch(e.type){case"HANDLER":return M.get(e.name).deserialize(e.value);case"RAW":return e.value}}function m(e,t,s,n){return new Promise(o=>{let r=$();t.set(r,o),e.start&&e.start(),e.postMessage(Object.assign({id:r},s),n)})}function $(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}var U={id:"pyodide",_pyodide:null,_isLoading:!1,_progress:null,async initPyodide(){if(this._pyodide)return{status:"success",message:"Pyodide already initialized"};if(this._isLoading)return{status:"loading",message:"Pyodide initialization in progress"};try{this._isLoading=!0,this._progress={phase:"initializing",message:"Starting Pyodide initialization..."},console.log("Loading Pyodide from CDN..."),this._progress={phase:"downloading",message:"Downloading Pyodide runtime..."},console.log("Loading Pyodide via fetch...");let e=await fetch("https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js");if(!e.ok)throw new Error(`Failed to fetch Pyodide: ${e.statusText}`);let t=await e.text();new Function(t).call(globalThis);let o=globalThis.loadPyodide;if(!o)throw new Error("Failed to load Pyodide - loadPyodide function not available");this._pyodide=await o({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.24.1/full/"}),this._progress={phase:"extracting",message:"Installing base packages..."},await this._pyodide.loadPackage(["micropip"]),await this._setupDesktopApiBridge(),this._progress={phase:"ready",message:"Pyodide ready for Python execution"},this._isLoading=!1,console.log("Pyodide initialized successfully");try{await this._enhanceComlinkIntegration()}catch(r){console.warn("Failed to enhance Comlink integration, but continuing:",r)}return{status:"success",message:"Pyodide initialized"}}catch(e){return this._isLoading=!1,this._progress=null,console.error("Failed to initialize Pyodide:",e),{status:"error",message:`Failed to initialize Pyodide: ${e instanceof Error?e.message:String(e)}`}}},async _setupDesktopApiBridge(){if(!this._pyodide)throw new Error("Pyodide not initialized");console.log("Setting up Hybrid Desktop API bridge...");try{this._pyodide.globals.set("_pyodide_plugin_instance",this),globalThis._pyodide_plugin_instance=this;let e=`
import js
from pyodide.ffi import create_proxy, to_js, JsProxy
import json
import uuid

print("Starting Hybrid Desktop API bridge setup...")

#----------------------------------------------------
# 1. Desktop API Layer (Comlink - Ergonomic Interface)
#----------------------------------------------------

class DesktopAPI:
    """Python interface to Desktop Dreamscape APIs using Comlink"""
    
    @staticmethod
    async def list_components():
        """List all available API components"""
        try:
            # Safely get Comlink bridge from globalThis
            api_comlink = getattr(js.globalThis, 'desktop_api_comlink', None)
            if api_comlink is None:
                raise Exception("Comlink API bridge not available")
                
            # Direct call to the Comlink proxy
            result = await api_comlink.listComponents()
            return result.to_py()
            
        except Exception as e:
            print(f"Error listing components via Comlink: {e}")
            # Fallback to postMessage
            return desktop_api_legacy.list_components()
    
    @staticmethod 
    async def execute(component_id, action, params=None):
        """Execute an action on a component"""
        try:
            if params is None:
                params = {}
                
            # Safely get Comlink bridge from globalThis
            api_comlink = getattr(js.globalThis, 'desktop_api_comlink', None)
            if api_comlink is None:
                raise Exception("Comlink API bridge not available")
                
            # Convert Python dict to JS object with proper conversion
            js_params = to_js(params)
            
            # Direct call that returns the actual result
            result = await api_comlink.execute(component_id, action, js_params)
            return result.to_py()
            
        except Exception as e:
            print(f"Error executing {component_id}.{action} via Comlink: {e}")
            # Fallback to postMessage
            return desktop_api_legacy.execute(component_id, action, params)

    @staticmethod
    async def subscribe_event(event_name, callback):
        """Subscribe to EventBus events"""
        try:
            proxy_callback = create_proxy(callback)
            
            # Safely get Comlink bridge from globalThis
            api_comlink = getattr(js.globalThis, 'desktop_api_comlink', None)
            if api_comlink is None:
                raise Exception("Comlink API bridge not available")
            
            # Direct call to subscribe
            unsubscribe = await api_comlink.subscribeEvent(event_name, proxy_callback)
            
            # Convert the JS function to a Python callable
            def python_unsubscribe():
                try:
                    unsubscribe()
                    proxy_callback.destroy()
                except Exception as e:
                    print(f"Error unsubscribing: {e}")
            
            return python_unsubscribe
            
        except Exception as e:
            print(f"Error subscribing to event {event_name} via Comlink: {e}")
            # Fallback to postMessage
            return desktop_api_legacy.subscribe_event(event_name, callback)

#----------------------------------------------------
# 2. Legacy Desktop API (postMessage - Compatibility)
#----------------------------------------------------

class DesktopAPILegacy:
    """Python interface to Desktop Dreamscape APIs using postMessage"""
    
    @staticmethod
    def list_components():
        """List all available API components"""
        try:
            from js import postMessage
            request_id = str(uuid.uuid4())
            
            # Convert Python dict to JS object using to_js
            message = to_js({
                'type': 'desktop-api-request',
                'requestId': request_id,
                'method': 'list_components'
            })
              # Send request to main thread via postMessage
            postMessage(message)
            
            print(f"API request sent: list_components")
            return {'success': True, 'message': 'Request sent to main thread'}
            
        except Exception as e:
            print(f"Error listing components: {e}")
            return {'success': False, 'error': str(e)}
    
    @staticmethod 
    def execute(component_id, action, params=None):
        """Execute an action on a component"""
        try:
            if params is None:
                params = {}
                
            from js import postMessage
            import uuid
            request_id = str(uuid.uuid4())
            
            # Convert Python dict to JS object using to_js, with proper nested conversion
            message = to_js({
                'type': 'desktop-api-request',
                'requestId': request_id,
                'method': 'execute_action',
                'params': to_js({
                    'componentId': component_id,
                    'action': action,
                    'params': to_js(params)
                })
            })
            
            # Send request to main thread via postMessage
            postMessage(message)
            
            print(f"Sent API request: {component_id}.{action}")
            return {'success': True, 'message': 'Request sent to main thread'}
            
        except Exception as e:
            print(f"Error executing {component_id}.{action}: {e}")
            return {'success': False, 'error': str(e)}
    
    @staticmethod
    def subscribe_event(event_name, callback):
        """Subscribe to EventBus events"""
        try:
            proxy_callback = create_proxy(callback)
            
            from js import postMessage
            import uuid
            request_id = str(uuid.uuid4())
            
            # Store callback for later use
            if not hasattr(DesktopAPILegacy, '_event_callbacks'):
                DesktopAPILegacy._event_callbacks = {}
            DesktopAPILegacy._event_callbacks[event_name] = proxy_callback            
            
            # Send subscription request via postMessage
            message = to_js({
                'type': 'desktop-api-request',
                'requestId': request_id,
                'method': 'subscribe_event',
                'params': to_js({
                    'eventName': event_name
                })
            })
            postMessage(message)
            
            def unsubscribe():
                if hasattr(DesktopAPILegacy, '_event_callbacks') and event_name in DesktopAPILegacy._event_callbacks:
                    del DesktopAPILegacy._event_callbacks[event_name]
                    proxy_callback.destroy()
                    # Could send unsubscribe message here if needed
            
            return unsubscribe
            
        except Exception as e:
            print(f"Error subscribing to event {event_name}: {e}")
            return lambda: None

#----------------------------------------------------
# 3. Events System
#----------------------------------------------------

class Events:
    """EventBus integration"""
    
    @staticmethod
    async def emit(event_name, data=None):
        """Emit an event to the desktop EventBus"""
        try:
            # Safely get Comlink bridge from globalThis
            api_comlink = getattr(js.globalThis, 'desktop_api_comlink', None)
            if api_comlink is None:
                raise Exception("Comlink API bridge not available")
                
            # Convert data for JS
            js_data = to_js(data) if data is not None else None
            
            # Direct call to emit
            await api_comlink.emitEvent(event_name, js_data)
            return {'success': True, 'message': f'Event {event_name} emitted'}
            
        except Exception as e:
            print(f"Error emitting event {event_name} via Comlink: {e}")
            # Fallback to postMessage
            return events_legacy.emit(event_name, data)
    
    @staticmethod
    async def subscribe(event_name, callback):
        """Subscribe to desktop events"""
        return await DesktopAPI.subscribe_event(event_name, callback)

class EventsLegacy:
    """EventBus integration via postMessage"""
    
    @staticmethod
    def emit(event_name, data=None):
        """Emit an event to the desktop EventBus"""
        try:
            from js import postMessage
            import uuid
            request_id = str(uuid.uuid4())
            
            message = to_js({
                'type': 'desktop-api-request',
                'requestId': request_id,
                'method': 'emit_event',
                'params': to_js({
                    'eventName': event_name,
                    'data': to_js(data) if data is not None else None
                })
            })
            postMessage(message)
            
            return {'success': True, 'message': f'Event {event_name} emitted'}
            
        except Exception as e:
            print(f"Error emitting event {event_name}: {e}")
            return {'success': False, 'error': str(e)}
    
    @staticmethod
    def subscribe(event_name, callback):
        """Subscribe to desktop events"""
        return DesktopAPILegacy.subscribe_event(event_name, callback)

#----------------------------------------------------
# 2. MCP Protocol Layer (JSON-RPC 2.0 Interface)
#----------------------------------------------------

class MCPProtocol:
    """Python interface to MCP protocol (JSON-RPC 2.0)"""
    
    @staticmethod
    async def send(message):
        """Send a raw MCP protocol message (JSON-RPC 2.0 format)"""
        try:
            # Ensure message is properly formatted as JSON-RPC 2.0
            if not isinstance(message, dict):
                raise ValueError("Message must be a dictionary")
                
            if not message.get('jsonrpc') == '2.0':
                message['jsonrpc'] = '2.0'
                
            if 'id' not in message:
                message['id'] = str(uuid.uuid4())
                
            # Convert to JS object - use JSON serialization to avoid JsProxy issues
            import json
            js_message_json = json.dumps(message)
            
            # Debug: Log the message being sent
            print(f"Sending MCP message: {message}")
            print(f"JSON message: {js_message_json}")
            
            # Forward to MCP handler in worker via the exposed plugin instance
            # Access the plugin instance from pyodide globals (use js.globalThis, not Python globals())
            plugin_instance = js.globalThis._pyodide_plugin_instance
            if plugin_instance is None:
                raise Exception("Pyodide plugin instance not available")
                
            # Pass the JSON string instead of JsProxy
            result = await plugin_instance.handleMCPProtocolMessage(js_message_json)
            
            # Extract the actual response from the PythonResult wrapper
            if hasattr(result, 'success') and result.success and hasattr(result, 'result'):
                return result.result.to_py() if hasattr(result.result, 'to_py') else result.result
            elif hasattr(result, 'error'):
                return {'jsonrpc': '2.0', 'error': {'code': -32603, 'message': result.error}, 'id': message.get('id')}
            else:
                return {'jsonrpc': '2.0', 'error': {'code': -32603, 'message': 'Internal error'}, 'id': message.get('id')}
                
        except Exception as e:
            print(f"Error sending MCP message: {e}")
            return {'jsonrpc': '2.0', 'error': {'code': -32603, 'message': str(e)}, 'id': message.get('id')}
    
    @staticmethod
    async def tools_list():
        """Get list of available tools via MCP protocol"""
        message = {
            'jsonrpc': '2.0',
            'method': 'tools/list',
            'id': str(uuid.uuid4())
        }
        return await MCPProtocol.send(message)
    
    @staticmethod
    async def tools_call(tool_name, arguments=None):
        """Call a tool via MCP protocol"""
        if arguments is None:
            arguments = {}
            
        message = {
            'jsonrpc': '2.0',
            'method': 'tools/call',
            'params': {
                'name': tool_name,
                'arguments': arguments
            },
            'id': str(uuid.uuid4())
        }
        return await MCPProtocol.send(message)
    
    @staticmethod
    async def resources_list():
        """List available resources via MCP protocol"""
        message = {
            'jsonrpc': '2.0',
            'method': 'resources/list',
            'id': str(uuid.uuid4())
        }
        return await MCPProtocol.send(message)

# Create legacy instances
desktop_api_legacy = DesktopAPILegacy()
events_legacy = EventsLegacy()

# Create the desktop module structure
class Desktop:
    api = DesktopAPI()
    events = Events()
    mcp = MCPProtocol()
    
    # Legacy access for backward compatibility
    api_legacy = desktop_api_legacy
    events_legacy = events_legacy

# Make it available globally
desktop = Desktop()

# IMPORTANT: Expose desktop object to JavaScript namespace for prometheos-client compatibility
js.desktop = desktop

def handle_desktop_api_response(message):
    """Handle responses from the main thread API"""
    try:
        if message.get('type') == 'desktop-api-response':
            print(f"Received API response: {message}")
            # Could store results in a promise-like structure here
            
        elif message.get('type') == 'desktop-api-event':
            # Handle event notifications
            event_name = message.get('eventName')
            data = message.get('data')
            
            if hasattr(DesktopAPILegacy, '_event_callbacks') and event_name in DesktopAPILegacy._event_callbacks:
                callback = DesktopAPILegacy._event_callbacks[event_name]
                callback(data)
                
        elif message.get('type') == 'mcp-protocol-response':
            # Handle MCP protocol responses
            print(f"Received MCP protocol response: {message.get('message')}")
            # Could integrate with a promise system here
                
    except Exception as e:
        print(f"Error handling API response: {e}")

print("Hybrid Desktop API Bridge initialized in Python context")
print("Desktop object exposed to JavaScript namespace for prometheos-client compatibility")
`;await this._pyodide.runPython(e),console.log("Hybrid Desktop API bridge setup completed successfully")}catch(e){throw console.error("Failed to setup Hybrid Desktop API bridge:",e),e}},async executePython(e,t=!1){if(!this._pyodide)return{success:!1,error:"Pyodide not initialized. Call initPyodide() first."};try{let s="";t&&await this._pyodide.runPython(`
import sys
from io import StringIO
_stdout_capture = StringIO()
sys.stdout = _stdout_capture
`);let n,o=this._pyodide;return typeof o.runPythonAsync=="function"?n=await o.runPythonAsync(e):n=await o.runPython(e),t&&(s=await this._pyodide.runPython(`
_stdout_capture.getvalue()
`),await this._pyodide.runPython(`
sys.stdout = sys.__stdout__
`)),{success:!0,result:n,stdout:t?s:void 0}}catch(s){return{success:!1,error:s instanceof Error?s.message:String(s)}}},async installPackage(e){if(!this._pyodide)return{success:!1,error:"Pyodide not initialized"};try{return await this._pyodide.runPython(`
import micropip
await micropip.install('${e}')
`),{success:!0,result:`Package ${e} installed successfully`}}catch(t){return{success:!1,error:`Failed to install ${e}: ${t instanceof Error?t.message:String(t)}`}}},getProgress(){return this._progress},isReady(){return this._pyodide!==null&&!this._isLoading},cleanup(){this._pyodide&&(this._pyodide=null,this._progress=null,console.log("Pyodide worker cleaned up"))},async handleMCPProtocolMessage(e){try{if(!this._pyodide)throw new Error("Pyodide not initialized");let t;return typeof e=="string"?(console.log("Parsing JSON message:",e),t=JSON.parse(e)):t=e,console.log("Handling MCP protocol message:",JSON.stringify(t)),console.log("Message type:",typeof t),console.log("Message keys:",Object.keys(t||{})),{success:!0,result:await this._forwardToMCPServer(t)}}catch(t){return console.error("Error handling MCP message:",t),{success:!1,error:t instanceof Error?t.message:String(t)}}},async _forwardToMCPServer(e){let s=self.workerPluginManager;if(!s)throw new Error("Worker plugin manager not available");try{await s.callPlugin("mcp-server","isInitialized")||(console.log("MCP server not initialized, initializing..."),await s.callPlugin("mcp-server","initialize"))}catch(n){console.warn("Error checking MCP server, will try to call anyway:",n)}return s.callPlugin("mcp-server","processMCPMessage",{message:e})},handleComlinkPort(e){try{console.log("Received Comlink port from main thread"),console.log("Wrapping Comlink port for desktop_api_comlink and desktop_mcp_comlink");let t=w(e);globalThis.desktop_api_comlink=t.api,globalThis.desktop_mcp_comlink=t.mcp,console.log("desktop_api_comlink and desktop_mcp_comlink proxies set on globalThis"),e.start(),console.log("Comlink bridge proxies exposed to Python context")}catch(t){console.error("Error handling Comlink port:",t)}},handle(e,t){switch(e){case"initPyodide":return this.initPyodide();case"executePython":return typeof t?.code!="string"?{success:!1,error:"executePython requires 'code' parameter"}:this.executePython(t.code,!!t.returnStdout);case"installPackage":return typeof t?.packageName!="string"?{success:!1,error:"installPackage requires 'packageName' parameter"}:this.installPackage(t.packageName);case"getProgress":return this.getProgress();case"isReady":return this.isReady();case"cleanup":return this.cleanup();case"handleDesktopApiRequest":return typeof t?.method!="string"||typeof t?.requestId!="string"?{success:!1,error:"handleDesktopApiRequest requires 'method' and 'requestId' parameters"}:this.handleDesktopApiRequest(t.method,t.requestId,t.params);case"handleMCPProtocolMessage":return t?.message===void 0?{success:!1,error:"handleMCPProtocolMessage requires 'message' parameter"}:this.handleMCPProtocolMessage(t.message);case"handleComlinkPort":return!t?.port||!(t.port instanceof MessagePort)?{success:!1,error:"handleComlinkPort requires a valid MessagePort parameter"}:this.handleComlinkPort(t.port);default:return{success:!1,error:`Unknown method: ${e}`}}},async handleDesktopApiRequest(e,t,s){try{switch(e){case"list_components":return console.log("Python requested component list"),{success:!0,result:{type:"desktop-api-response",requestId:t,method:e,result:[]}};case"execute_action":{let{componentId:n,action:o,params:r}=s||{};return console.log(`Python requested action: ${n}.${o}`,r),{success:!0,result:{type:"desktop-api-response",requestId:t,method:e,result:{success:!0,message:`Action ${o} on ${n} executed`}}}}case"subscribe_event":{let{eventName:n}=s||{};return console.log(`Python ${e}: ${n}`),{success:!0,result:{type:"desktop-api-response",requestId:t,method:e,result:{success:!0,message:`Subscribed to ${n}`}}}}case"emit_event":{let{eventName:n,data:o}=s||{};return console.log(`Python emitting event: ${n}`,o),{success:!0,result:{type:"desktop-api-response",requestId:t,method:e,result:{success:!0,message:`Event ${n} emitted`}}}}default:return{success:!1,error:`Unknown desktop API method: ${e}`}}}catch(n){return{success:!1,error:n instanceof Error?n.message:String(n)}}},async _enhanceComlinkIntegration(){if(!this._pyodide)throw new Error("Pyodide not initialized");console.log("Enhancing Python-Comlink integration...");try{await this._pyodide.runPython(`
import js
from pyodide.ffi import create_proxy, to_js

class ComlinkHelper:
    """Improved Comlink communication helper for Python"""
    
    @staticmethod
    def expose(obj, name="pythonExports"):
        """Expose a Python object to JavaScript via Comlink"""
        try:
            js_proxy = create_proxy(obj)
            # Make it available globally
            js.globalThis[name] = js_proxy
            print(f"Exposed Python object as {name} via Comlink")
            return True
        except Exception as e:
            print(f"Error exposing object: {e}")
            return False
    
    @staticmethod
    def get_proxy(name):
        """Get a JavaScript object/function via Comlink"""
        try:
            if hasattr(js.globalThis, name):
                return getattr(js.globalThis, name)
            print(f"Object {name} not found in global scope")
            return None
        except Exception as e:
            print(f"Error getting proxy: {e}")
            return None

# Add helper to desktop object
if hasattr(desktop, "comlink"):
    print("Comlink helper already exists")
else:
    desktop.comlink = ComlinkHelper()
    print("Added Comlink helper to desktop object")

print("Python-Comlink integration enhanced")
`),console.log("Python-Comlink integration enhanced successfully")}catch(e){throw console.error("Failed to enhance Python-Comlink integration:",e),e}}},W=U;export{W as default};
/*! Bundled license information:

comlink/dist/esm/comlink.mjs:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)
*/
