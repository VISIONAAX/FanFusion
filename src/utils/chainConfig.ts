export const ChainId = {
    MAINNET: 1, // Ethereum
    GOERLI: 5,
    POLYGON_MUMBAI: 80001,
    POLYGON_MAINNET: 137,
    ARBITRUM_ONE_MAINNET: 42161,
    FLOW_TESTNET: 545,
    CHILIZ_TESTNET: 88882,
    BITKUB_TESTNET: 25925,
  };
    
  export const supportedChains = [
    ChainId.GOERLI,
    ChainId.POLYGON_MAINNET,
    ChainId.POLYGON_MUMBAI,
    ChainId.ARBITRUM_ONE_MAINNET,
    ChainId.FLOW_TESTNET,
    ChainId.CHILIZ_TESTNET,
    ChainId.BITKUB_TESTNET,
  ];
  
  export const getRPCProvider = (chainId: number) => {
    switch (chainId) {
      case 1:
        return "https://eth-mainnet.g.alchemy.com/v2/YMRFBPG1iyBwiRQIHThSWZanZj0NXUjv";
      case 5:
        return "https://eth-goerli.alchemyapi.io/v2/lmW2og_aq-OXWKYRoRu-X6Yl6wDQYt_2";
      case 80001:
        return "https://polygon-mumbai.g.alchemy.com/v2/Q4WqQVxhEEmBYREX22xfsS2-s5EXWD31";
      case 137:
        return "https://polygon.llamarpc.com";
      case 42161:
        return "https://arb1.arbitrum.io/rpc";
      case 545:
        return "https://testnet.evm.nodes.onflow.org/";
      case 88882:
        return "https://spicy-rpc.chiliz.com/";
      case 25925:
        return "https://rpc-testnet.bitkubchain.io/";
      default:
        return "https://eth-mainnet.g.alchemy.com/v2/YMRFBPG1iyBwiRQIHThSWZanZj0NXUjv";
    }
  };
  
  export const getExplorer = (chainId: number) => {
    switch (chainId) {
      case 1:
        return "https://etherscan.io";
      case 5:
        return "https://goerli.etherscan.io";
      case 80001:
        return "https://mumbai.polygonscan.com";
      case 137:
        return "https://polygonscan.com";
      case 42161:
        return "https://arbiscan.io";
      case 545:
        return "https://evm-testnet.flowscan.io/";
      case 88882:
        return "https://testnet.chiliscan.com/";
      case 25925:
        return "https://testnet.bkcscan.com/";
      default:
        return "https://mumbai.polygonscan.com";
    }
  };
  