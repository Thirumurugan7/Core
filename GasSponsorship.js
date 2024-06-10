const { ethers } = require('ethers');

// Replace with your own Infura/Alchemy project ID or other provider URL
const provider = new ethers.providers.JsonRpcProvider("https://rpc.test.btcs.network")

// Replace with the private key of the relayer account
// 0xd103929e56b9AaB3Ce786429D2088a98ADAa9C9E
const relayerPrivateKey = 'e3688ccc3f9d0ad9ac8ec5f36933c9292288eb50e976e25e6d679118f6b40eca';
const relayerWallet = new ethers.Wallet(relayerPrivateKey, provider);


// 0x3421DC9c0894D790611F8cafC1Bb66BC29a04A8c
// Replace with the private key of the user account
const userPrivateKey = 'd2f45fb616c27222e10226ee3455b958cc541387f24897e553257929da1d3ba2';
const userWallet = new ethers.Wallet(userPrivateKey, provider);

async function sponsorTransaction() {
  // The transaction data (for example, sending Ether)
  const txData = {
    to: '0xced92587E448f15765073A37E77b1286F0f034Ad', // Replace with the recipient's address
    value: ethers.utils.parseEther('0.1'), // Amount to send (in wei)
    gasLimit: 400000, // Basic transaction gas limit
    gasPrice: (await provider.getFeeData()).gasPrice, // Current gas price
  };

  console.log("tx",txData);

  // Sign the transaction with the user's private key
  const signedTx = await userWallet.signTransaction(txData);
  
  // Send the transaction through the relayer's account
  const relayedTx = {
    ...txData,
    from: relayerWallet.address, // The relayer's address pays for the gas
    data: signedTx, // The signed transaction data
  };

  try {
    // The relayer sends the transaction
    const txResponse = await relayerWallet.sendTransaction(relayedTx);
    console.log('Transaction sent: ', txResponse.hash);

    // Wait for the transaction to be mined
    const receipt = await txResponse.wait();
    console.log('Transaction mined: ', receipt.transactionHash);
  } catch (error) {
    console.error('Error sending transaction:', error);
  }
}

sponsorTransaction();
