//SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract HashCertificate is Pausable, Ownable {

    event SetHash(string message);
    string private message;
    mapping(string => mapping(string => string)) public certificate;

    constructor() {
        message = "0x7bf9e22848149cc9024520bf1f12f37401b7ac92cca59948fee83bb5bb16a057";
    }

    function getHash() public view returns (string memory) {
        return message;
    }

     function getCerificate(string memory university, string memory name) public view returns (string memory) {
        return certificate[university][name];
    }

    function setHash(string memory newMessage) public whenNotPaused onlyOwner {
        message = newMessage;

        emit SetHash(message);
    }

    function setCertificate(string memory university, string memory name, string memory hashedC) public whenNotPaused onlyOwner {
        certificate[university][name] = hashedC;
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

}
