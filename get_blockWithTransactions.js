const { ethers } = require('ethers');
const provider = new ethers.providers.JsonRpcProvider("https://rpc.coredao.org");

const get_blockWithTransactions =async()=>{

    const tx=await provider.getBlockWithTransactions(100004)
    console.log(tx);
}
get_blockWithTransactions();