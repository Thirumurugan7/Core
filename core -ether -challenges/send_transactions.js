const { ethers } = require("ethers");
require('dotenv').config()


const provider = new ethers.providers.JsonRpcProvider("https://rpc.coredao.org");

// Create a wallet instance with your private key
const privateKey =process.env.PRIVATE_KEY;
const wallet = new ethers.Wallet(privateKey,provider);

async function sign_Transaction() {
     const nonce= await provider.getTransactionCount(wallet.address, 'latest')
    
    
     const transaction_Response = await wallet.sendTransaction( {
        to: '0x91B2C4001d413E44cBbc50A24f1f7C06C0b279E1',
        value: ethers.utils.parseEther('0.00000000000000001'), // Amount to send (in ether)
        gasLimit: 21000, // the minimum for a simple transaction
         gasPrice: ethers.utils.parseUnits('50', 'gwei'),
       
    })
    
     console.log("error");
    

    // Sign the transaction
   
    const signedTransaction = await wallet.signTransaction(tx);
    

    
    const transactionResponse = await provider.sendTransaction(signedTransaction);
    console.log(transactionResponse);


     
    
    

}
sign_Transaction();

//sample response
/*
 method: 'sendTransaction',
  transaction: {
    nonce: 0,
    gasPrice: BigNumber { _hex: '0x0ba43b7400', _isBigNumber: true },
    gasLimit: BigNumber { _hex: '0x5208', _isBigNumber: true },
    to: '0x91B2C4001d413E44cBbc50A24f1f7C06C0b279E1',
    value: BigNumber { _hex: '0x0a', _isBigNumber: true },
    data: '0x',
    chainId: 1116,
    v: 2268,
    r: '0x7b6030ae8e12a59397d3b5dd1cde56080f6d58b2cdbc06d8e662b5ca6d92fb8c',
    s: '0x576dfffe46e4bb6e871be7135b00cef1373515f2d8d0d5e44bf7fd54f33f2119',
    from: '0x58AB11C24A9680Afb6971319b5BB19537B9107b5',
    hash: '0x0fab898607ac80f790cc62f0861482330d707fc68e55de7256616ac2150f741b',
    type: null,
    confirmations: 0
  },
  transactionHash: '0x0fab898607ac80f790cc62f0861482330d707fc68e55de7256616ac2150f741b'
}
*/



