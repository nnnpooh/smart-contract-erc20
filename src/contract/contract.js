import { ethers } from 'ethers';
import Peepoh from '../artifacts/contracts/Peepoh.sol/PeepohToken.json';
const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const contract = new ethers.Contract(contractAddress, Peepoh.abi, signer);
// console.log({ provider, signer, contract });

export { provider, signer, contract };
