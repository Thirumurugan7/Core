const { ethers } = require('ethers');

const abi  = require("./abi.json")
require("dotenv").config()

const swap = async()=>{
    const provider = new ethers.providers.JsonRpcProvider("https://rpc.coredao.org/");
    console.log("provider",provider);

    const privatekey = process.env.SWAPPRIVATEKEY;
    const wallet = new ethers.Wallet(privatekey)
    console.log("wallet",wallet);

    const address = "0xcc85A7870902f5e3dCef57E4d44F42b613c87a2E";

    const walletwithprovider = wallet.connect(provider)

    const contractinstance = new ethers.Contract(address,abi,walletwithprovider);

    console.log("instance",contractinstance);


    const params = {
        path: "0x40375c92d9faf44d2f9db9bd9ba41a3317a2404f000bb8c0e5f8e2a9a2f1fbf34ab4d5fbf417ffd02fdb79", // Replace with the actual bytes value for the path
        recipient: "0xd103929e56b9aab3ce786429d2088a98adaa9c9e", // Replace with the actual recipient address
        deadline: Math.floor(Date.now() / 1000) + 60 * 20, // 20 minutes from the current Unix time
        amountIn: ethers.utils.parseUnits("0.0001", "ether"), // Example: 1 ETH
        amountOutMinimum: ethers.utils.parseUnits("0.001", "ether") // Example: 0.5 ETH
      };
    

    const res = await contractinstance.exactInput(params,{
        value:ethers.utils.parseEther("0.0001")
    });
    console.log("res",res);

try {
    
} catch (error) {
    
}
}

swap()