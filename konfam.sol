//SPDX-License-Identifier: MIT


pragma solidity >= 0.8.0 <0.9.0;

//import "./ownable.sol";

contract Konfam  {

    
    address public owner;
    
    constructor (){
        owner = msg.sender;
    } 
    //@notice Had to delete state variable owner's address because it's inherited from Ownable.sol
    //@notice: Also had to delete constructor because it's already defined in the Ownable contract.

    mapping(uint32 => string) public ConfirmQuality;

    //@notice Had to comment out the modifier "onlyAdmin" below because I opted to use openzepplin's Ownable contract.

     modifier onlyOwner() {
        require(owner == msg.sender, "Unauthorized account");
        _;
    }  

/*
    function _checkOwner() internal override view virtual {
        require(owner() == _msgSender(), "Ownable: caller is not the owner");
    }
            */


    function addProduct (string memory _product, uint32 _batchNumber) external onlyOwner{
        require(_batchNumber >= 1e5, "Enter 6 numbers and above, but not greater than 16");
        ConfirmQuality[_batchNumber] = _product ;
    }

    function confirmProduct(uint32 _batchNumber) external view returns (string memory _product) {
            return ConfirmQuality[_batchNumber];
        }
    }