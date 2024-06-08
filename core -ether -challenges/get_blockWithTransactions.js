const { ethers } = require('ethers');
const provider = new ethers.providers.JsonRpcProvider("https://rpc.coredao.org");

const get_blockWithTransactions =async()=>{

    const tx=await provider.getBlockWithTransactions(100004)
    console.log(tx);
}
get_blockWithTransactions();

//sample response

/*
{
  hash: '0x687d126c1a0b24e873a519d26d478f67dfb93d1c3e5dd6086a149b9ca23e5f60',
  parentHash: '0xb1e72b5ef0b462da5b2caa677e85029c32ec29ba2db8572d1eb371e4b32814c3',
  number: 100004,
  timestamp: 1673566897,
  nonce: '0x0000000000000000',
  difficulty: 2,
  gasLimit: BigNumber { _hex: '0x01c9c380', _isBigNumber: true },
  gasUsed: BigNumber { _hex: '0x4a3f', _isBigNumber: true },
  miner: '0xfD806AB93db5742944B7B50Ce759E5EeE5f6FE50',
  extraData: '0xd883010001846765746888676f312e31382e36856c696e75780000007f90ce5d112c1c28a744e0f56401b44231b9f89ac82ec52eb026125af3aed6b5db262f0b3a115785cffef5f4397577c7ea36e00eff211614b13aa03782f21bc8da019e5701',
  transactions: [
    {
      hash: '0x07015f15bc39fcb16a1b87dc15b962f82d70a3e17f5d7f2351c8e6b96f86b783',
      type: 0,
      accessList: null,
      blockHash: '0x687d126c1a0b24e873a519d26d478f67dfb93d1c3e5dd6086a149b9ca23e5f60',
      blockNumber: 100004,
      transactionIndex: 0,
      confirmations: 14707130,
      from: '0xfD806AB93db5742944B7B50Ce759E5EeE5f6FE50',
      gasPrice: [BigNumber],
      gasLimit: [BigNumber],
      to: '0x0000000000000000000000000000000000001000',
      value: [BigNumber],
      nonce: 6666,
      data: '0xf340fa01000000000000000000000000fd806ab93db5742944b7b50ce759e5eee5f6fe50',
      r: '0x0625dd3477d2843b7fb70836644208585fcabbe58c06131401aa67b1c5d6d89a',
      s: '0x1dcf125e7ff38c7704e7e59474b3508508ef3387b22cbbec9b90957fa6ac9976',
      v: 2268,
      creates: null,
      chainId: 1116,
      wait: [Function (anonymous)]
    }
  ],
  _difficulty: BigNumber { _hex: '0x02', _isBigNumber: true }
}
*/