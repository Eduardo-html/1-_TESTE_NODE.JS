const should = require('chai').should();
const parOuImpar = require('../parOuImpar');

describe('É par ou impar. Teste.', ()=>{
    it("Teste número 18", ()=>{
        should.equal(parOuImpar(18), 'par')
    })

    it("Teste número 31", ()=>{
        should.equal(parOuImpar(31), 'impar')
    })

    it("Teste número 12.5", ()=>{
        should.equal(parOuImpar(12.5), 'impossivel')
    })

    it("Teste número OLOKINHO", ()=>{
        should.equal(parOuImpar("OLOKINHO"), 'impossivel')
    })

    it("Teste número 0", ()=>{
        should.equal(parOuImpar(0), 'par')
    })

    it("Teste número -18", ()=>{
        should.equal(parOuImpar(-18), 'par')
    })

})