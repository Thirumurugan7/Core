const { ethers } = require('ethers');

const abi  = require("./corestacking.json")
require("dotenv").config()

const stake = async()=>{
    const provider = new ethers.providers.JsonRpcProvider("https://rpc.coredao.org/");
    console.log("provider",provider);

    const privatekey = process.env.SWAPPRIVATEKEY;
    const wallet = new ethers.Wallet(privatekey)
    console.log("wallet",wallet);

    const address = "0x0000000000000000000000000000000000001007";

    const walletwithprovider = wallet.connect(provider)

    const contractinstance = new ethers.Contract(address,abi,walletwithprovider);

    console.log("instance",contractinstance);


 
    const params= {
      name:"0xa37cf4faa0758b26dca666f3e36d42fa15cc0106"
      };

    

    const res = await contractinstance.delegateCoin("0xa37cf4faa0758b26dca666f3e36d42fa15cc0106",{
      value:ethers.utils.parseEther("1")
    });
    console.log("res",res);

try {
    
} catch (error) {
    
}
}

stake()



