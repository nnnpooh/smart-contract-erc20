import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { ethers } from 'ethers';
import { contract, provider, signer } from './contract/contract';

function App() {
  const [totalSupply, setTotalSupply] = useState(0);
  const [myBalance, setMyBalance] = useState(0);
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState(0);
  // async function getBalance() {
  // async function getBalance() {
  //   const balance = await provider.getBalance(account);
  //   console.log({ account, balance: ethers.utils.formatEther(balance) });
  // }

  async function getTotalSupply() {
    const totalSupply = await contract.totalSupply();
    setTotalSupply(formatEther(totalSupply));
  }

  async function getPeepohBalance() {
    const balance = await contract.balanceOf(await signer.getAddress());
    setMyBalance(formatEther(balance));
  }

  async function transferPeepoh() {
    console.log('here');
    const amountBig = ethers.utils.parseEther(amount.toString());
    const result = await contract.transfer(recipient, amountBig);
    console.log({ result });
  }

  useEffect(() => {
    getTotalSupply();
    getPeepohBalance();
  }, []);

  console.log({ totalSupply, myBalance });
  return (
    <div className='App'>
      <div>Total Supply: {totalSupply}</div>
      <div>My Balance: {myBalance}</div>

      <input
        type='text'
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />
      <input
        type='number'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={transferPeepoh}>Transfer</button>
    </div>
  );
}

function formatEther(b) {
  return ethers.utils.formatEther(b);
}

export default App;
