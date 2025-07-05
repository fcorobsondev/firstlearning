const calculadora = require("../models/calculadora.js");

test("Somar 5 + 100 deve retornar dois", () => {
  expect(calculadora.somar(5, 100)).toBe(105);
});

test(" 'banana + 'maçã' = erro", () => {
  expect(calculadora.somar("banana", 100)).toBe("Erro");
});
