import { 
  Avalanche,
  BN
} from "../../dist";
import { AVMAPI } from "../../dist/apis/avm";
  
const ip: string = 'localhost';
const port: number = 9650;
const protocol: string = 'http';
const networkID: number = 12345;
const avalanche: Avalanche = new Avalanche(ip, port, protocol, networkID);
const xchain: AVMAPI = avalanche.XChain();
  
const main = async (): Promise<any> => {
  const txFee: BN = await xchain.getDefaultCreationTxFee();
  console.log(txFee);
}
    
main()
  