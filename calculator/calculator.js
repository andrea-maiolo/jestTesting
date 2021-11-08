const calculator = {
    add : function add(n, m) {
	    return n + m;
    },

    subtract: function subtract(n, m) {
	    return  n - m;
    },

    multiply: function multiply(n, m) {
	    return n * m;
    },

    divide: function divide(n, m) {
        if (n == 0 || m == 0) {
            return "task failed successfully"
        } else {
		    return n / m;
        }
    }
}

module.exports = calculator;