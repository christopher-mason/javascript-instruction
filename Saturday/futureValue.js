/*
private static double calculateFutureValue(double monthlyInvestment, double monthlyInterestRate, int months) {
		// System.out.println("In calculateFutureValue");
		double futureValue = 0.0;
		for (int i = 1; i <= months; i++) {
			futureValue = (futureValue + monthlyInvestment) * (1 + monthlyInterestRate);
		}
		// System.out.println("Returning " + futureValue);
		return futureValue;
		
	}	
*/

function calculateFutureValue(monthlyInv, monthlyInterestRate, months) {
    // calculate future value ...
    let futureValue = 0;
    for (let i = 1; i <= months; i++) {
        futureValue = (futureValue + monthlyInv) * (1 + monthlyInterestRate);
    }

    return futureValue;
}

let futureValue = calculateFutureValue(100, 0.01, 120);
var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
console.log(formatter.format(futureValue));