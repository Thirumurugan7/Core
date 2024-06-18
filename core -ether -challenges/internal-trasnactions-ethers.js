const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));//importing node-fetch module
const { ethers } = require('ethers');

const url = 'https://openapi.coredao.org/api';
const params = new URLSearchParams({
  module: 'account',
  action: 'txlistinternal',//action  name to list internal transactions,varies for every other actions performed
  address: '0x7731f51A600afa5d57F09Fe1dbEb13A13A32674F',
  startblock: '0',
  endblock: '99999999',
  page: '1',
  offset: '5',
  sort: 'asc',
  apikey:  'bdaa49b73b3a477f8d4385c97742df41'//replace with your api key
});

fetch(`${url}?${params}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
//sample response

/* "status":"1",
   "result":[
      {
         "blockNumber":"918282",
         "timeStamp":"Fri Feb 10 10:57:58 UTC 2023",
         "hash":"0x047d0dbb43cb39f721ee6872b93447b31b70def845c2dd42138fb556775e314c",
         "from":"0x0000000000000000000000000000000000001003",
         "to":"0x0000000000000000000000000000000000001004",
         "value":"0",
         "contractAddress":null,
         "input":"",
         "type":"STATICCALL",
         "gas":"4888476",
         "gasUsed":"1236",
         "traceId":null,
         "isError":null,
         "errCode":null
      },
      {
         "blockNumber":"918410",
         "timeStamp":"Fri Feb 10 11:04:22 UTC 2023",
         "hash":"0x73042039415254a3f4a9d9c1fbf56af3fd3df9ff99ccf3cea02f0936d43e9caa",
         "from":"0x0000000000000000000000000000000000001003",
         "to":"0x0000000000000000000000000000000000001004",
         "value":"0",
         "contractAddress":null,
         "input":"",
         "type":"STATICCALL",
         "gas":"4890244",
         "gasUsed":"1236",
         "traceId":null,
         "isError":null,
         "errCode":null
      },
      {
         "blockNumber":"918562",
         "timeStamp":"Fri Feb 10 11:11:58 UTC 2023",
         "hash":"0x82a553ff3c2e9e0ac7ade6cccaa1f0d36f146c750de3849ab9b30dc146e2ef5a",
         "from":"0x0000000000000000000000000000000000001003",
         "to":"0x0000000000000000000000000000000000001004",
         "value":"0",
         "contractAddress":null,
         "input":"",
         "type":"STATICCALL",
         "gas":"952240",
         "gasUsed":"1236",
         "traceId":null,
         "isError":null,
         "errCode":null
      },
      {
         "blockNumber":"918562",
         "timeStamp":"Fri Feb 10 11:11:58 UTC 2023",
         "hash":"0xc2683488978b58dde9ca08a2cfe0d5e4fe04155783d0664fc8df2239fda414bc",
         "from":"0x0000000000000000000000000000000000001003",
         "to":"0x0000000000000000000000000000000000001004",
         "value":"0",
         "contractAddress":null,
         "input":"",
         "type":"STATICCALL",
         "gas":"4889740",
         "gasUsed":"1236",
         "traceId":null,
         "isError":null,
         "errCode":null
      },
*/