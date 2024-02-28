// SPDX-License-Identifier: MIT 

pragma solidity ^0.8.0;

contract Transactions{
    uint transactionCount;

    event Transfer(address from, address to, uint amount, string keyword, string message, uint256 timestamp);

    struct TransactionStruct {
        address sender;
        address receiver;
        uint amount;
        string keyword;
        string message;
        uint256 timestamp;
    }

    TransactionStruct[] transactions;

    //function to addblockto blockchain
    function addToBlockchain(address payable receiver, uint amount, string memory keyword, string memory message) public{
        transactionCount += 1;
        transactions.push(TransactionStruct(msg.sender,receiver,amount,keyword,message,block.timestamp));
        emit Transfer(msg.sender,receiver,amount,keyword,message,block.timestamp);
    }
    
    //view function to get transaction count
    function getTransactionCount()view private returns(uint){
        return transactionCount;
    }

    //view function to get transactions
    function getTransactions() view private returns(TransactionStruct[] memory){
        return transactions;
    }
}