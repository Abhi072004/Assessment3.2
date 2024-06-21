import {useState, useEffect} from "react";
import {ethers} from "ethers";
import atm_abi from "../artifacts/contracts/Assessment.sol/Assessment.json";

export default function HomePage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [atm, setATM] = useState(undefined);
  const [balance, setBalance] = useState(undefined);
  const [reciever, setReciever] = useState(undefined);
  const [amount, setAmount] = useState(undefined);
  const [acc, setAcc] = useState(undefined);

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const atmABI = atm_abi.abi;

  const getWallet = async() => {
    if (window.ethereum) {
      setEthWallet(window.ethereum);
    }

    if (ethWallet) {
      const account = await ethWallet.request({method: "eth_accounts"});
      handleAccount(account);
    }
  };

  const handleAccount = (account) => {
    if (account) {
      console.log ("Account connected: ", account);
      setAccount(account);
    }
    else {
      console.log("No account found");
    }
  };

  const connectAccount = async() => {
    if (!ethWallet) {
      alert('MetaMask wallet is required to connect');
      return;
    }
  
    const accounts = await ethWallet.request({ method: 'eth_requestAccounts' });
    handleAccount(accounts);
    
    // once wallet is set we can get a reference to our deployed contract
    getATMContract();
  };

  const getATMContract = () => {
    const provider = new ethers.providers.Web3Provider(ethWallet);
    const signer = provider.getSigner();
    const atmContract = new ethers.Contract(contractAddress, atmABI, signer);

    setATM(atmContract);
  };

  const getBalance = async() => {
    if (atm) {
      setBalance((await atm.getBalance()).toNumber());
    }
  };

  const deposit = async() => {
    if (atm) {
      let tx = await atm.deposit(1);
      await tx.wait()
      getBalance();
    }
  };

  const withdraw = async() => {
    if (atm) {
      let tx = await atm.withdraw(1);
      await tx.wait()
      getBalance();
    }
  };

  const send = async()=>{
    if(atm){
      let sd = await atm.send(reciever, amount);
      await sd.wait();
      getBalance();
    }
    alert(`${amount} eth sent to ${reciever}`);
  };

  const checkBalance = async() =>{
    if(atm){
      let tx = (await atm.balanceOf(acc)).toNumber();
      alert(`Balance of account ${acc} is: ${tx}`);
    }
  };

  const initUser = () => {
    // Check to see if user has Metamask
    if (!ethWallet) {
      return <p>Please install Metamask in order to use this ATM.</p>
    }

    // Check to see if user is connected. If not, connect to their account
    if (!account) {
      return <button onClick={connectAccount}>Please connect your Metamask wallet</button>
    }

    if (balance == undefined) {
      getBalance();
    }

    return (
      <div>
        
        <p>Your Account: {account}</p>
        <p>Your Balance: {balance}</p>
        <button onClick={deposit}>Deposit 1 ETH</button>
        <button onClick={withdraw}>Withdraw 1 ETH</button>
      
        <h4>Transfer</h4>
        <label>Reciever: </label>
        <input type="text" value = {reciever} placeholder="Enter Reciever Address" onChange={(e) => setReciever(e.target.value)}/>
      
        <label><pre></pre> Amount : </label>
        <input type="text" value = {amount} placeholder="Enter Amount" onChange={(e) => setAmount(e.target.value)}/>
      
        <pre></pre>
        <button onClick={send}>Send Ethers</button>
        <pre></pre>

        <h4>Check Balance</h4>
        <label>Enter Address: </label>
        <input type="text" value = {acc} placeholder="Enter Address" onChange={(e) => setAcc(e.target.value)}/><pre></pre>
        <button onClick={checkBalance}>Check</button>
      </div>
    )
  }

  useEffect(() => {getWallet();}, []);

  return (
    <main className="container">
      <header><h1>Welcome to the Abhishek's ATM!</h1></header>
      {initUser()}
      <style jsx>{`
        .container {
          text-align: center;
          border: 3px solid brown;
          padding: 10px;
          background-color: #fdf1f0
        }
        h1{
          display: inline;
          padding: 5px;
          color:red;
        }
      `}
      </style>
    </main>
  )
}
