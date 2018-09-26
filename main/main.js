module.exports = function main(num) {
	var total = 0;
	for(i = 0; i < num.length; i++ ){
		total = total + parseInt(num[i]);
	}
	return total;
};
