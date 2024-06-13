const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));//importing node-fetch module
const { ethers } = require('ethers');

const apiUrl = 'https://openapi.coredao.org/api';
const apiKey = 'bdaa49b73b3a477f8d4385c97742df41';//replace with your api key

const params = new URLSearchParams({
    module: 'account',
    action: 'txlist',//action  name to list internal transactions,varies for every other actions performed
    address: '0x7731f51A600afa5d57F09Fe1dbEb13A13A32674F',
    startblock: 0,
    endblock: 99999999,
    page: 1,
    offset: 5,
    sort: 'asc',
    apikey: apiKey
});

const url = `${apiUrl}?${params}`;

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

    //sample response

    /*
    "status":"1",
   "result":[
      {
         "blockNumber":"24835",
         "timeStamp":"Tue Jan 10 09:03:10 UTC 2023",
         "hash":"0xb04fd307b708e28209c1a0c6645e59ce7135a5db718762e103436bdbb821a2a3",
         "nonce":null,
         "blockHash":null,
         "transactionIndex":"0",
         "from":"0xf8b18cecc98d976ad253d38e4100a73d4e154726",
         "to":"0x7731f51a600afa5d57f09fe1dbeb13a13a32674f",
         "value":"1000000000000000000",
         "gas":"21000",
         "gasPrice":"1000000000",
         "isError":"0",
         "input":null,
         "contractAddress":null,
         "cumulativeGasUsed":"21000",
         "gasUsed":"21000",
         "confirmations":"1782285",
         "txreceipt_status":"1"
      },
      {
         "blockNumber":"25884",
         "timeStamp":"Tue Jan 10 09:55:37 UTC 2023",
         "hash":"0x228fb0d8ede1ddd9c8f57b5a10674344421a9473632d9f935c0d9020b5f3d8aa",
         "nonce":null,
         "blockHash":null,
         "transactionIndex":"2",
         "from":"0x7731f51a600afa5d57f09fe1dbeb13a13a32674f",
         "to":"0x3fab184622dc19b6109349b94811493bf2a45362",
         "value":"10000000000000000",
         "gas":"21000",
         "gasPrice":"2000000000",
         "isError":"0",
         "input":null,
         "contractAddress":null,
         "cumulativeGasUsed":"387533",
         "gasUsed":"21000",
         "confirmations":"1781236",
         "txreceipt_status":"1"
      },
      {
         "blockNumber":"25890",
         "timeStamp":"Tue Jan 10 09:55:55 UTC 2023",
         "hash":"0xfb31ff46c2c8d822884a1409008485e555699e6b89cde417d156cb48657c0604",
         "nonce":null,
         "blockHash":null,
         "transactionIndex":"0",
         "from":"0x7731f51a600afa5d57f09fe1dbeb13a13a32674f",
         "to":"0x4e59b44847b379578588920ca78fbf26c0b4956c",
         "value":"0",
         "gas":"240529",
         "gasPrice":"2000000000",
         "isError":"0",
         "input":"0x60a060405234801561001057600080fd5b503073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b8152505060805160601c6103526100656000398061017052506103526000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80631c5fb21114610030575b600080fd5b6100de6004803603608081101561004657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561008d57600080fd5b82018360208201111561009f57600080fd5b803590602001918460018302840111640100000000831117156100c157600080fd5b9091929391929390803560ff169060200190929190505050610169565b60405180848152602001831515815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561012c578082015181840152602081019050610111565b50505050905090810190601f1680156101595780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b60008060607f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff161415610213576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260398152602001806102e46039913960400191505060405180910390fd5b60005a9050610269898989898080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050885a610297565b92505a8103935060405160203d0181016040523d81523d6000602083013e8092505050955095509592505050565b60006001808111156102a557fe5b8360018111156102b157fe5b14156102ca576000808551602087018986f490506102da565b600080855160208701888a87f190505b9594505050505056fe53696d756c61746554784163636573736f722073686f756c64206f6e6c792062652063616c6c6564207669612064656c656761746563616c6ca2646970667358221220405c212754c23731ee9658f3175dafa74dea363d2619aad9d5576f5a9d4982f764736f6c63430007060033",
         "contractAddress":"0x59ad6735bcd8152b84860cb256dd9e96b85f69da",
         "cumulativeGasUsed":"237871",
         "gasUsed":"237871",
         "confirmations":"1781230",
         "txreceipt_status":"1"
      },
    */
