let Dice = class Dice {
	rollDice = function (min, max) {
		var roll;
		for (var i=0; i < max; i++)
		{
			roll = (min-1) + Math.ceil(Math.random() * (max-min + 1))
		}
		return roll
	};

	d = (x, y) => this.rollDice(x, y);
	rollD = (sides) => this.d(1, sides);

	rollD4 = () => this.rollD(4)
	rollD6 = () => this.rollD(6)
	rollD8 = () => this.rollD(8)
	rollD12 = () => this.rollD(12)
	rollD20 = () => this.rollD(20)
	rollD30 = () => this.rollD(30)
	rollD100 = () => this.rollD(100)

	rollD1000 = () => this.rollDice(1000)
	rollD10000 = () => this.rollDice(10000)
	rollD100000 = () => this.rollDice(100000)

	testRoll = function (sides)
	{
		var data = {}
		for (var i = 0; i < sides; i++)
		{
			for (var j = 0; j < sides; j++)
			{
				var roll = rollD(sides);
				if (!data[roll])
				{
					data[roll] = 1;
				} else
				{
					data[roll]++;
				}
			}
		}

		return data;
	};

	nDiceRoll = function (dice, sides)
	{
		var set = [];
		if (dice < 0) dice = 0;
		for (var i = 0; i < dice; i++)
		{
			var roll = this.rollD(sides);
			set.push(roll);
		}
		return set;
	};

	nd = (n, x) => this.nDiceRoll(n, x);
	roll = (n, x) => this.nd(n, x);
}

export default new Dice();