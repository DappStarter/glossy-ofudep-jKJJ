require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom system tragic name response oil prosper grace light army gauge'; 
let testAccounts = [
"0xf380be00b6966c9be710b7796353ff7cf0c6f0e4ce1618696d362b6178636214",
"0x2dbb1746906ec5e983af6e9d29ebd380e424875c0097dac38e06bb955b878c6a",
"0x9907c45b4bffa935ff09e074b875d572ef51f1ceba11d5797dbfd272c5769f86",
"0x0417e30fb0537ab2047c5ae5a0aee1991c53b9030d0f7b156e1a91f910dc4fc7",
"0xa2ed306ac7fbbb80436135ccaa1d63f75d64b094f1a9c72af6edc5647bc22253",
"0xeee579b531256081feffb714574c08933167b560863c5fc1c125350fc0ef51ae",
"0xc13c678fc7ec3ada544c9954fe4cd0a4eff868165959847468521391d14e35f7",
"0x8d8b938bcc80f88391bd1698e73ec3c14845323f7ca9338ba7f297ae7d2d759f",
"0x261c73af2f1753db7a08cde24fbddd654975009d7f91a27afea2fcfcbed9466b",
"0x044172ea68ab4c0829668f038d339a5527406f6d897e25d21060baf8f60653ef"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

