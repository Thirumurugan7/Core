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

  const res1 = await contractinstance.positions("991");
  console.log("res1", res1);
};

swap();

// res1 [
//     BigNumber { _hex: '0x00', _isBigNumber: true },
//     '0x0000000000000000000000000000000000000000',
//     '0x40375C92d9FAf44d2f9db9Bd9ba41a3317a2404f',
//     '0xa4151B2B3e269645181dCcF2D426cE75fcbDeca9',
//     10000,
//     -273600,
//     -269600,
//     BigNumber { _hex: '0x23779730bb', _isBigNumber: true },
//     BigNumber {
//       _hex: '0xa4ac41f676ee3b95efec71656a87bf8fab',
//       _isBigNumber: true
//     },
//     BigNumber { _hex: '0x65d480f36d46097f5bafcec7', _isBigNumber: true },
//     BigNumber { _hex: '0x16ce025d70b0', _isBigNumber: true },
//     BigNumber { _hex: '0x0e', _isBigNumber: true },
//     nonce: BigNumber { _hex: '0x00', _isBigNumber: true },
//     operator: '0x0000000000000000000000000000000000000000',
//     token0: '0x40375C92d9FAf44d2f9db9Bd9ba41a3317a2404f',
//     token1: '0xa4151B2B3e269645181dCcF2D426cE75fcbDeca9',
//     fee: 10000,
//     tickLower: -273600,
//     tickUpper: -269600,
//     liquidity: BigNumber { _hex: '0x23779730bb', _isBigNumber: true },
//     feeGrowthInside0LastX128: BigNumber {
//       _hex: '0xa4ac41f676ee3b95efec71656a87bf8fab',
//       _isBigNumber: true
//     },
//     feeGrowthInside1LastX128: BigNumber { _hex: '0x65d480f36d46097f5bafcec7', _isBigNumber: true },
//     tokensOwed0: BigNumber { _hex: '0x16ce025d70b0', _isBigNumber: true },
//     tokensOwed1: BigNumber { _hex: '0x0e', _isBigNumber: true }
//   ]
