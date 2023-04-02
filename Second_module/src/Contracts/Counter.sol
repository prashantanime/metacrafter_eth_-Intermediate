// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract form {
    string  private  name ;
    uint private age ;

    constructor () {
        name ="" ;
        age =0 ;
    }
     function setname (string memory _name ) public {
         name = _name ;
     }
     function setage (uint  _age  ) public {
         age = _age ;
     } 
     function getname () view public returns (string memory ){
         return name ;
     }
     function getage() view public returns (uint) {
         return age ;
     }
} 