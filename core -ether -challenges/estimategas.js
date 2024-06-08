const { ethers } = require('ethers');
const provider = new ethers.providers.JsonRpcProvider("https://rpc.coredao.org");

const estimategas =async()=>{

    const tx=await provider.estimateGas({
        // Wrapped core address
        to: "0x1FB9Becc1356FCC6E70792B755e5c76e3Cb26623",
      
        // `function deposit() payable`
        data: "0xd0e30db0",
      
        // 1 ether
        value:ethers.utils.parseEther("1.0")
      });
    console.log( "the estimate amount of gas required for this transaction to be :",tx.toString());
}
estimategas();

//sample response

//the estimate amount of gas required for this transaction to be : 21064