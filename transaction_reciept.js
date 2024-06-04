const { ethers } = require('ethers');
const provider = new ethers.providers.JsonRpcProvider("https://rpc.coredao.org");

const transaction_receipt=async ()=>{


    const tx=await provider.getTransactionReceipt("0x0ba0eba33dae30d43374bdecf881a01bb420104973717528c7489f0d2a630323");
    console.log( tx);
}
transaction_receipt();