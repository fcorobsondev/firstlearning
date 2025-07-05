## PoC x MVP

Proof of Concept and Minimum viable product
MVP é fazer o mínimo para resolver problemas, não se preocupar em resolver todos os problemas, mas apenas o mínimo.

## Fundação de Aplicação

Por que usar um banco de dados local?
Pois será melhor para quando formos configurar para um banco de dados remoto.

## Overengeneering

Possui muitos impactos, pois o excesso compromete desempenho, segurança e qualidade.

## Arquitetura de software x Organização das pastas

O que é o MVC = Model View Controller
Model = É uma caixa de ferramentas, que consegue fazer algo útil

## Testes Automatizados

### Instalando o test runner

Geralmente utiliza-se o jest
Teste é um código que executa outro código
O teste retorna um report (relatório)
Como instalar o jest?
npm i --save-dev jest@29.6.2
comandos de teste:
jest
jest --watch

### Criando um teste do teste

test("nome do teste",função)
expect é a expectativa

test("nome do teste", () =>{
console.log("Olá")
})

test("espero que 1 seja 1", () =>{
expect(1+1).toBe(2)
})
EXPECT é o que o sistema vai enviar e o TOBE é o EXPECT, o que eu espero, é invertido
