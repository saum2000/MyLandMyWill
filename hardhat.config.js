require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async(taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: "0.8.4",
    paths: {
        artifacts: "./src/artifacts",
    },
<<<<<<< HEAD
    defaultNetwork: "ganache",
    networks: {
        ganache: {
            url: "http://127.0.0.1:7545",
            gasLimit: 6000000000,
            defaultBalanceEther: 10,
            chainId: 5777,
        }
    }
}
=======
    networks: {
        hardhat: {
            chainId: 1337,
        },
    },
};
>>>>>>> 1d3b6e53ebfe4dbe98256e52631398e02cb23c68
