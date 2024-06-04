const { ethers } = require('ethers');
const provider = new ethers.providers.JsonRpcProvider("https://rpc.coredao.org");

const get_transaction =async()=>{
    const tx=await provider.getTransaction("0x127575064b60ebf62b31a67bed626255dad9ba94941b45dbdcdf2d5170a30006");
    console.log(tx);
    
}

get_transaction();