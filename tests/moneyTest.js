import {formatCurrency} from '../scripts/utils/money.js';
//Basic test case
console.log('test suite: formatCurrency')
console.log('converts cents into dollers')
if(formatCurrency(2095) === '20.95'){
  console.log('passed');
}else{
  console.log('failed')
}

//Edge case
console.log('works with zero')
if(formatCurrency(0)==='0.00'){
  console.log('passed');
}
else{
  console.log('failed')
}
//Edge case
console.log('rounds up to the nearest cent')
if(formatCurrency(2000.5)==='20.01'){
  console.log('passed');
}
else{
  console.log('failed');
}
//Edge case
console.log('rounds down to the nearest cent')
if(formatCurrency(2000.4)==='20.00'){
  console.log('passed');
}
else{
  console.log('failed');
}