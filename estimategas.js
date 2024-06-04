const { ethers } = require('ethers');
const provider = new ethers.providers.JsonRpcProvider("https://rpc.coredao.org");

const estimategas =async()=>{

    const tx=await provider.estimateGas({
        // Wrapped ETH address
        to: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      
        // `function deposit() payable`
        data: "0xd0e30db0",
      
        // 1 ether
        value:ethers.utils.parseEther("1.0")
      });
    console.log(tx.toString());
}
estimategas();