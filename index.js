const Block = require('./block');
const Blockchain = require('./blockchain');

let blockGeeksCoin = new Blockchain();

blockGeeksCoin.addBlock(new Block(1, "18/11/2017", {amount: 4}));
blockGeeksCoin.addBlock(new Block(2, "18/11/2017", {amount: 8}));

console.log(blockGeeksCoin);