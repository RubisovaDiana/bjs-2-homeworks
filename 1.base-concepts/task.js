"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let x1;
	let x2;
	let discrim = b ** 2 - 4 * a * c;
	if (discrim > 0) {
		x1 = (-b + Math.sqrt(discrim)) / (2 * a);
		x2 = (-b - Math.sqrt(discrim)) / (2 * a);
		arr.push(x1, x2);
	} else if (discrim === 0) {
		x1 = -b / (2 * a);
		arr.push(x1);
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = percent / 100 / 12;
  let S = amount - contribution;
  let monthlyPayment = S * (P + (P / (((1 + P)**countMonths) - 1)));
  let totalPayment = (monthlyPayment * countMonths).toFixed(2);
  
  return parseFloat(totalPayment);
}

