const { ethers } = require('ethers');

const abi  = require("./corestacking.json")
require("dotenv").config()

const stake = async()=>{
    const provider = new ethers.providers.JsonRpcProvider("https://rpc.coredao.org/");
    console.log("provider",provider);

    const privatekey = process.env.STAKEKEY;
    const wallet = new ethers.Wallet(privatekey)
    console.log("wallet",wallet);

    // contract address to stake core token in mainnet
    const address = "0x0000000000000000000000000000000000001007";

    const walletwithprovider = wallet.connect(provider)

    //create a contract instance
    const contractinstance = new ethers.Contract(address,abi,walletwithprovider);

    console.log("instance",contractinstance);



    
// calling the delegateCoin function with this particular parameter for staking core tokens
    const res = await contractinstance.delegateCoin("0xa37cf4faa0758b26dca666f3e36d42fa15cc0106",{
      value:ethers.utils.parseEther("1")
    });
    console.log("res",res);


}


// calling the stake function
stake()


// expected output

// res {
//   nonce: 1,
//   gasPrice: BigNumber { _hex: '0x06fc23ac00', _isBigNumber: true },
//   gasLimit: BigNumber { _hex: '0xc033', _isBigNumber: true },
//   to: '0x0000000000000000000000000000000000001007',
//   value: BigNumber { _hex: '0x0de0b6b3a7640000', _isBigNumber: true },
//   data: '0x25e2c700000000000000000000000000a37cf4faa0758b26dca666f3e36d42fa15cc0106',
//   chainId: 1116,
//   v: 2268,
//   r: '0xd12f3a60b917fb248c0df8c7f7d500fdf94b33b8f38f38be8e0f9893089b0ac3',
//   s: '0x51200aaa359d2cb64b18ce3fe6cee7ba67ea33746cfdc5570861ca490918ab82',
//   from: '0x4CA0AD2620A658a9DC84Eb7453405175477A1A69',
//   hash: '0x534abf6d5bd91504ff4d7a5525fc765615e6b95e21c071115a783fa1250c4f61',
//   type: null,
//   confirmations: 0,
//   wait: [Function (anonymous)]
// }