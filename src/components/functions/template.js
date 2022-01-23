import { ethers } from "ethers";
import TokenArtifact from "D:/Users/sneha/MyLandMyWill/MyLandMyWill-master/src/artifacts/contracts/LandRegistry.sol/LandRegistry.json";
const tokenAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
//const tokenAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
async function requestAccount() {
  await window.ethereum.request({ method: "eth_requestAccounts" });
}

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
async function _intializeContract(init) {
  // We first initialize ethers by creating a provider using window.ethereum
  // When, we initialize the contract using that provider and the token's
  // artifact. You can do this same thing with your contracts.
  const contract = new ethers.Contract(tokenAddress, TokenArtifact.abi, init);

  return contract;
}
export  { requestAccount, signer, _intializeContract };