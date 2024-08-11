import { ethers } from 'ethers';
import React from 'react';
import { address, abi } from '@/constants/contract';
const Home: React.FC = () => {
  const handleMintClick = async () => {
    try {
      // Add your minting logic here
      const provider = new ethers.providers.Web3Provider((window as any).ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(address, abi, signer)
      const mint = await contract.safeMint(signer.getAddress());
      console.log(mint);
      alert("I Owe you a Fanta. Reach out to orangeflavouredfanta@gmail.com :)")
    } catch (e) {
      console.error(e);
      alert("Either you already have a Fanta or something bad has happened :(")
    }
  };

  return (
    <div className="container">
      {/* <h1 className="title">Mint a Fanta 🍊</h1> */}
      <p className="description">
        Welcome to the most refreshing minting experience on the blockchain!
      </p>
      <button className="mintButton" onClick={handleMintClick}>
        Mint a Fanta 🍊
      </button>
    </div>
  );
};

export default Home;
