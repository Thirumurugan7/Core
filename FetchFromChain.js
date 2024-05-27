const ethers = require("ethers")

const axios = require("axios")

const {EvmChain} = require("@moralisweb3/common-evm-utils")
const { sign } = require("crypto")
const { log } = require("console")

const func  = async() => {
const provider = new ethers.JsonRpcProvider("https://rpc.test.btcs.network")
console.log(provider);
const network = await provider._detectNetwork()
console.log(network);
console.log("network",network.chainId);
const bal  =await provider.getBalance("0xd103929e56b9AaB3Ce786429D2088a98ADAa9C9E")
console.log("balance",bal);

const chain= await provider.getNetwork()

// const signer = await provider("0xd103929e56b9AaB3Ce786429D2088a98ADAa9C9E")

// console.log("signer",signer)

console.log(chain.name)
console.log(chain.toJSON());
console.log(await provider.getFeeData());

// const gasPrice = await provider.
// console.log("gasPrice",gasPrice);


const options = {
    method: 'GET',
    url: 'https://api.chainbase.online/v1/account/balance?chain_id=1115&address=0xd103929e56b9AaB3Ce786429D2088a98ADAa9C9E',
    headers: {
        accept: 'application/json',
        'x-api-key': '2goIzkQNbjGHZi5pcBl0OoodWv6'
    }
  };
  
//   axios
//     .request(options)
//     .then(function (response) {
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
}

func()