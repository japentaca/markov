class CtrlMarkov {
	constructor(values) {
		this.values = values
		this.value = Object.keys(this.values)[0]
	}

	"use strict";

	next() {
		if (this.values.hasOwnProperty(this.value)) {
			var next = this.values[this.value];
			var distribution = this.getProbDistribution(next);
			var rand = Math.random();
			var total = 0;
			for (var i = 0; i < distribution.length; i++) {
				var dist = distribution[i];
				if (rand > total && rand < total + dist) {
					var chosen = next[i];
					//console.log("chosen", chosen)
					this.value = chosen.value;
				}
				total += dist;
			}

		}
		return this.value;
	};

	getProbDistribution(options) {
		var distribution = [];
		var total = 0;

		for (var i = 0; i < options.length; i++) {
			var option = options[i];
			//console.log("option", option)


			distribution[i] = option.probability;

			total += distribution[i];
		}

		//normalize the values
		for (var j = 0; j < distribution.length; j++) {
			distribution[j] = distribution[j] / total;

		}
		return distribution;
	};

	dispose() {
		this.values = null;
	};
}
export default CtrlMarkov