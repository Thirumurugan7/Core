const { ethers } = require('ethers');

// Replace with your own Infura/Alchemy project ID or other provider URL
const provider = new ethers.providers.JsonRpcProvider("https://rpc.test.btcs.network")

// Replace with the private key of the relayer account
const relayerPrivateKey = 'e3688ccc3f9d0ad9ac8ec5f36933c9292288eb50e976e25e6d679118f6b40eca';
const relayerWallet = new ethers.Wallet(relayerPrivateKey, provider);

// Replace with the private key of the user account
const userPrivateKey = 'd2f45fb616c27222e10226ee3455b958cc541387f24897e553257929da1d3ba2';
const userWallet = new ethers.Wallet(userPrivateKey, provider);

// Address of the deployed MetaTransaction contract
const metaTransactionAddress = '0x8FB0ECe837F25d61881BAAC0ed2Afcd27e530e9f';
const metaTransactionAbi = 
  [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			},
			{
				"internalType": "bytes",
				"name": "functionSignature",
				"type": "bytes"
			},
			{
				"internalType": "bytes32",
				"name": "r",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "s",
				"type": "bytes32"
			},
			{
				"internalType": "uint8",
				"name": "v",
				"type": "uint8"
			}
		],
		"name": "executeMetaTransaction",
		"outputs": [
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address payable",
				"name": "relayerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bytes",
				"name": "functionSignature",
				"type": "bytes"
			}
		],
		"name": "MetaTransactionExecuted",
		"type": "event"
	}
]

const metaTransactionContract = new ethers.Contract(metaTransactionAddress, metaTransactionAbi, provider);

async function sponsorTransaction() {
  const nonce = await provider.getTransactionCount(userWallet.address, "latest");
  const txData = {
    to: '0xeCDDbC0d937E4a47eB62D8F344255877f38d6c8B', // Replace with the recipient's address
    value: ethers.utils.parseEther('0.1'), // Amount to send (in wei)
    gasLimit: 500000, // Basic transaction gas limit
    gasPrice: (await provider.getFeeData()).gasPrice, // Current gas price
    nonce: nonce
  };

  // User signs the transaction data
  const signedTx = await userWallet.signTransaction(txData);

  // Split signature into r, s, and v
  const messageHash = ethers.utils.hashMessage(ethers.utils.arrayify(signedTx));
  const signature = ethers.utils.splitSignature(await userWallet.signMessage(messageHash));
  // Encode the function data for the meta-transaction
  const functionSignature = metaTransactionContract.interface.encodeFunctionData("executeMetaTransaction", [userWallet.address, signedTx, signature.r, signature.s, signature.v]);

  // Relayer sends the meta-transaction
  const txResponse = await relayerWallet.sendTransaction({
    to: metaTransactionAddress,
    data: functionSignature,
    gasLimit: ethers.utils.hexlify(100000), // Estimate the gas limit for the meta-transaction
    gasPrice: await provider.getGasPrice(),
  });

  console.log('Meta-transaction sent: ', txResponse.hash);

  // Wait for the transaction to be mined
  const receipt = await txResponse.wait();
  console.log('Meta-transaction mined: ', receipt.transactionHash);
}

sponsorTransaction();
