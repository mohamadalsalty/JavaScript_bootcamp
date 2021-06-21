let flt = 10.4;

console.log(parseInt(flt)); // 10
console.log(parseFloat(flt) - (parseFloat(flt) - parseInt(flt))); // 10
console.log(flt.toFixed(0)); // 10
console.log(Number(flt) - (parseFloat(flt) - parseInt(flt))); // 10
console.log(parseFloat(flt) - ((Number(Number.isFinite(flt)) + Number(Number.isFinite(flt)) + Number(Number.isFinite(flt)) + Number(Number.isFinite(flt)))/parseInt(flt))); // 10
