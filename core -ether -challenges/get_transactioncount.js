const { ethers } = require('ethers');
const provider = new ethers.providers.JsonRpcProvider("https://rpc.coredao.org");

const get_transactioncount =async()=>{

    const tx=await provider.getTransactionCount("0x1FB9Becc1356FCC6E70792B755e5c76e3Cb26623");
    console.log("the transaction count is:", tx);
}
get_transactioncount();

//sample response

//the transaction count is:682785
