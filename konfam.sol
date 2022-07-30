//SPDX-License-Identifier: MIT


pragma solidity >= 0.8.0 <0.9.0;

contract Konfam  {

    
    address public owner;
    
    constructor (){
        owner = msg.sender;
    } 

    mapping(uint32 => string) public ConfirmQuality;

     modifier onlyOwner() {
        require(owner == msg.sender, "Unauthorized account");
        _;
    }  

    function addProduct (string memory _product, uint32 _batchNumber) external onlyOwner{
        require(_batchNumber >= 1e5, "Enter 6 numbers and above, but not greater than 16");
        ConfirmQuality[_batchNumber] = _product ;
    }

    function confirmProduct(uint32 _batchNumber) external view returns (string memory _product) {
            return ConfirmQuality[_batchNumber];
        }
    }