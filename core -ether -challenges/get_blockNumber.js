const { ethers } = require('ethers');
const provider = new ethers.providers.JsonRpcProvider("https://rpc.coredao.org");

const get_blocknumber =async()=>{

    const tx=await provider.getBlockNumber();
    console.log("the current blocknumber of core chain is : "tx);
}
get_blocknumber();

//sample response

// the current blocknumber of core chain is :14807038