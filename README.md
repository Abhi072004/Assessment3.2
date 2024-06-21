# Hardhat project/ ATM simulator
This project implements a basic decentralized application (dApp) using React and the ethers.js library to interact with an Ethereum smart contract. The dApp simulates an Automated Teller Machine (ATM) interface where users can connect their MetaMask wallet, check their balance, deposit, withdraw, and transfer Ether to other accounts. Additionally, users can check the balance of any Ethereum address. The smart contract's ABI and address are integrated, allowing seamless interaction with the deployed contract on the Ethereum blockchain. The project ensures a smooth user experience by updating the UI based on the connected wallet and providing real-time feedback on transactions.

## Description
ATM dApp is a decentralized application (dApp) built with React and ethers.js, designed to simulate an Automated Teller Machine (ATM) interface. Users can interact with an Ethereum smart contract to manage their Ether funds. The application allows users to connect their MetaMask wallet, view their balance, deposit, withdraw, and transfer Ether, as well as check the balance of any Ethereum address.
### Key Features
1. **MetaMask Integration**: Users can connect their MetaMask wallet to the dApp, enabling seamless interaction with the Ethereum blockchain.
2. **Balance Check**: Users can view their current Ether balance.
3. **Deposit**: Users can deposit Ether into their account.
4. **Withdraw**: Users can withdraw Ether from their account.
5. **Transfer**: Users can transfer Ether to other Ethereum addresses.
6. **Balance Check**: Users can check the balance of any Ethereum address.

### Smart Contract Integration
The dApp interacts with a deployed smart contract on the Ethereum blockchain. The contract's ABI and address are integrated into the application for seamless interaction.

**Contract Address:** 0x.......

**ABI:** The ABI is imported from the contract's JSON artifact.

## Getting Started

### Executing Program
To execute this program into your local machine first you have to ensure that your local machine has the latest node.js and npm configuration and added to path in your machine's environment variable. After that create a new folder and open that folder in VS code.
Then follow these steps:
1. Open the terminal in VS code and clone the repository using the command 
`git clone https://github.com/Abhi072004/ATM-dApp.git`
2.  Navigate to the project directory using the command 
`cd ATM-dApp`
3. Install the required dependencies using the command
`npm i`
4. Open two additional terminals in your VS code
5. In the second terminal type: 
`npx hardhat node`
6. In the third terminal, type:
`npx hardhat run scripts/deploy.js --network localhost`
7. Back in the first terminal and type the below commant to launch the front-end:
`npm run dev`

After this, the project will be running on your localhost. Typically at http://localhost:3000 run the dApp as you wish.

## Authors
Abhishek

## License
This project is licensed under the MIT License.