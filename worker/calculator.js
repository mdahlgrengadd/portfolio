// Built worker plugin: calculator
// Generated on: 2025-05-28T20:04:44.216Z

var l={id:"calculator",calculate(e,r,o){console.log(`Worker calculating: ${e} ${o} ${r}`);let t;switch(o){case"+":t=e+r;break;case"-":t=e-r;break;case"*":t=e*r;break;case"/":t=e/r;break;default:t=r}return console.log(`Worker result: ${t}`),t},handle(e,r){return e==="calculate"?r?typeof r.firstOperand!="number"||typeof r.secondOperand!="number"||typeof r.operator!="string"?{error:"Invalid parameters for calculator"}:this.calculate(r.firstOperand,r.secondOperand,r.operator):{error:"Missing parameters for calculator"}:{error:`Method ${e} not supported for calculator`}}},u=l;export{u as default};
