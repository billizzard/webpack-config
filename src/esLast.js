class SomeMath {
	sum(...numbers) {
		let sum = 0;
		for (let i = 0; i < numbers.length; i++) {
			sum += numbers[i];
		}
		
		console.log(sum);

		return sum;
	}
}

export default new SomeMath();