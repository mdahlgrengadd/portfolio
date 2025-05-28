// Built worker plugin: wordeditor
// Generated on: 2025-05-28T20:04:49.526Z

var r="",o={id:"wordeditor",setText(t){return r=typeof t=="string"?t:"",{success:!0}},getText(){return{success:!0,text:r}},handle(t,e){switch(t){case"setText":return!e||typeof e.text!="string"?{error:"setText requires a 'text' parameter of type string"}:this.setText(e.text);case"getText":return this.getText();default:return{error:`Method ${t} not supported for wordeditor`}}}},n=o;export{n as default};
