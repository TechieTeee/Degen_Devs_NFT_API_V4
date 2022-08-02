// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract DegenDevs is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("DegenDevs", "DD") {}

    function _baseURI() internal pure override returns (string memory) {
        return "http://c5dc-154-6-20-102.ngrok.io/api/tunnels/http-8080-ebdf925a-657a-414f-b9ce-6e1516eb544a%20%28http%29";
    }

    function mint(address to)
    public returns (uint256)
    {
        require(_tokenIdCounter.current() < 3);
        _tokenIdCounter.increment();
        _safeMint(to, _tokenIdCounter.current());

        return _tokenIdCounter.current();
    }
}
