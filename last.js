require('dotenv').config();
const { ethers } = require('ethers');

const provider = new ethers.providers.JsonRpcProvider("https://rpc.test.btcs.network")

const relayerWallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const userWallet = new ethers.Wallet(process.env.USER_PRIVATE_KEY);

const contractAddress = process.env.CONTRACT_ADDRESS;
const abi = [
    "function setMessage(string memory newMessage) public",
    "function executeMetaTransaction(address userAddress, bytes memory functionSignature, bytes32 r, bytes32 s, uint8 v) public returns (bytes memory)"
];
const contract = new ethers.Contract(contractAddress, abi, provider);

async function sendMetaTransaction() {
    const functionSignature = contract.interface.encodeFunctionData("setMessage", ["Hello from meta-transaction!"]);
    
    const hash = ethers.utils.keccak256(
        ethers.utils.defaultAbiCoder.encode(
            ["address", "bytes"],
            [userWallet.address, functionSignature]
        )
    );

    const signature = await userWallet.signMessage(ethers.utils.arrayify(hash));
    const { v, r, s } = ethers.utils.splitSignature(signature);

    const metaTx = await contract.connect(relayerWallet).executeMetaTransaction(
        userWallet.address,
        functionSignature,
        r,
        s,
        v,
        { gasLimit: 1000000 }
    );

    console.log("Meta-transaction sent: ", metaTx.hash);
    await metaTx.wait();
    console.log("Meta-transaction confirmed");
}

sendMetaTransaction().catch(console.error);
