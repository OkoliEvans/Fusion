// Source code to interact with smart contract

// web3 provider with fallback for old version
window.addEventListener('load', async () => {
    // New web3 provider
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            // ask user for permission
            await ethereum.enable();
            // user approved permission
        } catch (error) {
            // user rejected permission
            console.log('user rejected permission');
        }
    }
    // Old web3 provider
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // no need to ask for permission
    }
    // No web3 provider
    else {
        console.log('No web3 provider detected');
    }
  });
  console.log (window.web3.currentProvider);

  var contractAddress = '0x7C35312380a45120124006381CA6B18FEEFC38bF';
var abi = JSON.parse ([
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_product",
				"type": "string"
			},
			{
				"internalType": "uint32",
				"name": "_batchNumber",
				"type": "uint32"
			}
		],
		"name": "addProduct",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint32",
				"name": "_batchNumber",
				"type": "uint32"
			}
		],
		"name": "confirmProduct",
		"outputs": [
			{
				"internalType": "string",
				"name": "_product",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint32",
				"name": "",
				"type": "uint32"
			}
		],
		"name": "ConfirmQuality",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]);

//contract instance
contract = new web3.eth.Contract(abi, contractAddress);

// Accounts
var account;

web3.eth.getAccounts(function(err, accounts) {
  if (err != null) {
    alert("Error retrieving accounts.");
    return;
  }
  if (accounts.length == 0) {
    alert("No account found! Make sure the Ethereum client is configured properly.");
    return;
  }
  account = accounts[0];
  console.log('Account: ' + account);
  web3.eth.defaultAccount = account;
});

//Smart contract functions
function sendAddProduct() {
    ConfirmQuality(_batchNumber) = $("#newProduct").val();
    Konfam.methods.addProduct (_product, _batchNumber).send( {from: account}).then( function(tx) {
      console.log("Transaction: ", tx);
	  Event.preventDefault();
    });
    $("#newProduct").val('');
	
  }
  
  function getProduct() {
    Konfam.methods.confirmProduct(_batchNumber).call().then( function(ConfirmQuality) {
      console.log("info: ", ConfirmQuality(_batchNumber)+ " Product is GENUINE");
      document.getElementById('lastInfo').innerHTML = ConfirmQuality(_batchNumber);
	  Event.preventDefault();
    });
  }

document.getElementById('login').onclick= window.addEventListener();

