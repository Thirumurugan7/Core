const axios = require('axios');

const url = 'https://openapi.coredao.org/api';
const params = {
 module :'account',
   action:'txlist',
   address:'0x7731f51A600afa5d57F09Fe1dbEb13A13A32674F',
   startblock:'0',
   endblock:'99999999',
   page:'1',
   offset:'5',
   sort:'asc',
   apikey:'bdaa49b73b3a477f8d4385c97742df41'
};

axios.get(url, { params })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });

    //sample response
    /*
    {
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
    */