const hre = require("hardhat");
//const { ethers } = require("ethers");


async function main() {
    // @ts-ignore
    const DegenDevs = await ethers.getContractFactory("DegenDevs");
    const degendevs = await DegenDevs.deploy();

    console.log("DegenDevs deployed:", degendevs.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
