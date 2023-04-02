// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;
contract ExceptionHandling {
    uint public value;
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function setValue(uint _value) public {
        require(msg.sender == owner, "Only the owner can set the value");
        value = _value;
    }

    function deposit() public payable {
        assert(msg.value > 0 ether);
    }

    function withdraw(uint _amount) public {
        require(_amount <= address(this).balance, "Insufficient balance");
        payable(msg.sender).transfer(_amount);
    }

    function throwError() public pure {
        revert("This function always throws an error");
    }
}
