const bs58 = require("bs58");
const pvtKey = require("./haXiMsvEk9Y5ehcgvEAKB1gwzCXjBhFq4moYEpoigyf.json");

(async () => {
    const privateKey = Uint8Array.from(pvtKey);

    const secretKey = bs58.encode(privateKey);
    console.log(secretKey);
})();
