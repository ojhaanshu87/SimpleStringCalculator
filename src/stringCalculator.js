const calculator = {
    add: function(numbers) {
        if (!numbers) return 0;

        let delimiter = /,|\n/;
        if (numbers.startsWith("//")) {
            const match = numbers.match(/^\/\/(\[.*?\]|.)\n(.*)/);
            if (match) {
                let delimiterPart = match[1];
                numbers = match[2];

                if (delimiterPart.startsWith("[") && delimiterPart.endsWith("]")) {
                    let delimiters = delimiterPart.match(/\[(.*?)\]/g).map(d => d.slice(1, -1));
                    delimiter = new RegExp(delimiters.map(d => d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"));
                } else {
                    delimiter = new RegExp(delimiterPart.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
                }
            }
        }

        let numList = numbers.split(delimiter).map(Number);
        let negatives = numList.filter(n => n < 0);
        if (negatives.length) {
            throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
        }

        return numList.filter(n => n <= 1000).reduce((sum, n) => sum + n, 0);
    }
};

module.exports = calculator;