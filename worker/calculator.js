// Built worker plugin: calculator
// Generated on: 2025-06-08T07:47:23.754Z

var o={id:"calculator",calculate(e,r,u){let t;switch(u){case"+":t=e+r;break;case"-":t=e-r;break;case"*":t=e*r;break;case"/":t=e/r;break;default:t=r}return t},handle(e,r){return e==="calculate"?r?typeof r.firstOperand!="number"||typeof r.secondOperand!="number"||typeof r.operator!="string"?{error:"Invalid parameters for calculator"}:this.calculate(r.firstOperand,r.secondOperand,r.operator):{error:"Missing parameters for calculator"}:{error:`Method ${e} not supported for calculator`}}},n=o;export{n as default};
