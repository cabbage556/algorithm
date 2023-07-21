class Calculator {
    /**
     * @param {number} value
     */
    constructor(value) {
        this.value = value;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
        this.value += value;

        // this를 리턴하여 메소드 체이닝을 사용할 수 있게함
        return this;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        this.value -= value;
        return this;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value) {
        this.value *= value;
        return this;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0) {
            throw new Error("Division by zero is not allowed");
        }

        this.value /= value;
        return this;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.value **= value;
        return this;
    }

    /**
     * @return {number}
     */
    getResult() {
        return this.value;
    }
}

console.log(new Calculator(10).add(5).subtract(7).getResult());
console.log(new Calculator(2).multiply(5).power(2).getResult());
try {
    console.log(new Calculator(20).divide(0).getResult());
} catch (err) {
    console.log(err);
}
