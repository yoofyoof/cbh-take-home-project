const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal when given input is 1", () => {
    const trivialKey = deterministicPartitionKey(1);
    expect(trivialKey).toBe("ca2c70bc13298c5109ee0cb342d014906e6365249005fd4beee6f01aee44edb531231e98b50bf6810de6cf687882b09320fdd5f6375d1f2debd966fbf8d03efa");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal when given input is 100", () => {
    const trivialKey = deterministicPartitionKey(100);
    expect(trivialKey).toBe("3a3d69a6f739376238a968bbf88c4714860e319637c84d83cc03a1f74720b1fac6734078cf1fa25d67c8c84a8e8288b197a3164b46d42d81b01631d07d5d313f");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal when given input is 1000", () => {
    const trivialKey = deterministicPartitionKey(1000);
    expect(trivialKey).toBe("c198fc70fd688cd9a7c5d67d72c4f8aad8031a72745987dfe4291867a3ae50625a642ec18c5663e9375876a825357a5a7cf2463b9b7809533f2810edb7356331");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal when given input is 10000", () => {
    const trivialKey = deterministicPartitionKey(10000);
    expect(trivialKey).toBe("8f9d5384d8b68af8c55b590e6536071e983da2d4c17eb76414ea3806ec48fbc767d5f36d930de501080223a7b216e1fe1ff41fcb14189e3d2638a1607b18fc7f");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal when given input is 10000000", () => {
    const trivialKey = deterministicPartitionKey(10000000);
    expect(trivialKey).toBe("57e5c14e937c13f862654d1cfd477b5f9534ea2466ffd3f8492f55c966bbf8ec188876f38eda054a884b02602bee0025a1ae01fea3a9983a1549612c8e43b036");
  });
});
