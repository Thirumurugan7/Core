const { ethers } = require('ethers');
const provider = new ethers.providers.JsonRpcProvider("https://rpc.coredao.org");

const get_blocknumber =async()=>{

    const tx=await provider.getBlockNumber();
    console.log(tx);
}
get_blocknumber();