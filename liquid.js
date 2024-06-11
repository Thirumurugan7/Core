const { ethers } = require("ethers");

const abi = require("./liquidity.json");
require("dotenv").config();

const swap = async () => {
  const provider = new ethers.providers.JsonRpcProvider(
    "https://rpc.coredao.org/"
  );
  console.log("provider", provider);

  const privatekey = process.env.LIQUIDPRIVATEKEY;
  const wallet = new ethers.Wallet(privatekey);
  console.log("wallet", wallet);

  const address = "0xfA78c3f4572870cE8aEdb519f523541b343A15D5";

  const walletwithprovider = wallet.connect(provider);

  const contractinstance = new ethers.Contract(
    address,
    abi,
    walletwithprovider
  );

  console.log("instance", contractinstance);

  //   adding liquidity to core & usdc pair

  const params = {
    tokenId: "991",
    amount0Desired: "1748400000000",
    amount1Desired: "10",
    amount0Min: "0",
    amount1Min: "0",
    deadline: Math.floor(Date.now() / 1000) + 60 * 20,
  };

  const res = await contractinstance.increaseLiquidity(params);
  console.log("res", res);

  try {
  } catch (error) {}
};

swap();
