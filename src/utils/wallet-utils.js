import {
  polygon,
  polygonMumbai,
  arbitrum,
  optimismSepolia,
  mantaSepoliaTestnet,
  opBNBTestnet,
  arbitrumSepolia,
  evmFlow,
  chilizTestnet,
  bitkubTestnet,
  scrollDevnet,
  mantleTestnet,
  celoTestnet,
  morphTestnet,
} from 'wagmi/chains';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig } from 'wagmi';
const FlowTestnet= {
  id: 545,
  testnet: true,
  name: 'Flow Testnet',
  rpcUrls: {
    default: {
      http: ['https://testnet.evm.nodes.onflow.org/'],
    },
    public: {
      http: ['https://testnet.evm.nodes.onflow.org/'],
    },
  },
  blockExplorers: {
    default: {
      name: 'EVM on Flow Testnet',
      url: 'https://evm-testnet.flowscan.io',
    },
  },
  nativeCurrency: {
    decimals: 18,
    name: 'FLOW',
    symbol: 'FLOW',
  },
};
const ChilizTestnet= {
  id: 88882,
  testnet: true,
  name: 'Chiliz Spicy Testnet',
  rpcUrls: {
    default: {
      http: ['https://spicy-rpc.chiliz.com/'],
    },
    public: {
      http: ['https://spicy-rpc.chiliz.com/'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Chiliz Spicy Testnet',
      url: 'https://testnet.chiliscan.com',
    },
  },
  nativeCurrency: {
    decimals: 18,
    name: 'CHZ',
    symbol: 'CHZ',
  },
};
const CeloTestnet= {
  id: 44787,
  testnet: true,
  name: 'Celo Alfajores',
  rpcUrls: {
    default: {
      http: ['https://alfajores-forno.celo-testnet.org/'],
    },
    public: {
      http: ['https://alfajores-forno.celo-testnet.org/'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Celo Alfajores',
      url: 'https://celo-alfajores.blockscout.com',
    },
  },
  nativeCurrency: {
    decimals: 18,
    name: 'CELO',
    symbol: 'CELO',
  },
};
const ScrollDevnet= {
  id: 2227728,
  testnet: true,
  name: 'Scroll devnet',
  rpcUrls: {
    default: {
      http: ['https://l1sload-rpc.scroll.io/'],
    },
    public: {
      http: ['https://l1sload-rpc.scroll.io/'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Scroll devnet',
      url: 'https://l1sload-blockscout.scroll.io',
    },
  },
  nativeCurrency: {
    decimals: 18,
    name: 'Sepolia ETH',
    symbol: 'Sepolia ETH',
  },
};
const MantleTestnet= {
  id: 5003,
  testnet: true,
  name: 'Mantle Sepolia Testnet',
  rpcUrls: {
    default: {
      http: ['https://rpc.sepolia.mantle.xyz/'],
    },
    public: {
      http: ['https://rpc.sepolia.mantle.xyz/'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Mantle Sepolia Testnet',
      url: 'https://rpc.sepolia.mantle.xyz',
    },
  },
  nativeCurrency: {
    decimals: 18,
    name: 'MNT',
    symbol: 'MNT',
  },
};
const MorphTestnet= {
  id: 2810,
  testnet: true,
  name: 'Morph Holesky Testnet',
  rpcUrls: {
    default: {
      http: ['https://rpc-quicknode-holesky.morphl2.io/'],
    },
    public: {
      http: ['https://rpc-quicknode-holesky.morphl2.io/'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Morph Holesky Testnet',
      url: 'https://explorer-holesky.morphl2.io',
    },
  },
  nativeCurrency: {
    decimals: 18,
    name: 'ETH',
    symbol: 'ETH',
  },
};
const BitkubTestnet= {
  id: 25925,
  testnet: true,
  name: 'Bitkub Chain Testnet',
  rpcUrls: {
    default: {
      http: ['https://rpc-testnet.bitkubchain.io/'],
    },
    public: {
      http: ['https://rpc-testnet.bitkubchain.io/'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Bitkub Chain Testnet',
      url: 'https://testnet.bkcscan.com/',
    },
  },
  nativeCurrency: {
    decimals: 18,
    name: 'KUB',
    symbol: 'KUB',
  },
};
const UbitMainnet = {
  id: 90002,
  testnet: true,
  name: 'UBIT Mainnet',
  rpcUrls: {
    default: {
      http: ['https://rpc.ubitscan.io/'],
    },
    public: {
      http: ['https://rpc.ubitscan.io/'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Ubit Mainnet Explorer',
      url: 'https://ubitscan.io',
    },
  },
  nativeCurrency: {
    decimals: 18,
    name: 'FVT',
    symbol: 'FVT',
  },
};

const { chains, publicClient } = configureChains(
  [polygon, arbitrum, FlowTestnet, ChilizTestnet, CeloTestnet, ScrollDevnet, MantleTestnet, MorphTestnet, BitkubTestnet, UbitMainnet, arbitrumSepolia],
  [
    jsonRpcProvider({
      rpc: (chainId) => {
        if (chainId.id == 137) {
          return {
            http: 'https://polygon-mainnet.g.alchemy.com/v2/ZLSEk8HyDPO8GF7NmrIZpRxxxKAY1zgr',
            webSocket:
              'wss://polygon-mainnet.g.alchemy.com/v2/ZLSEk8HyDPO8GF7NmrIZpRxxxKAY1zgr',
          };
        } else if (chainId.id == 42161) {
          return {
            http: 'https://arb-mainnet.g.alchemy.com/v2/eCm1C8c0ke-nbr-n7sZ9S_UUovDTlTV6',
            webSocket:
              'wss://arb-mainnet.g.alchemy.com/v2/eCm1C8c0ke-nbr-n7sZ9S_UUovDTlTV6',
          };
        } else if (chainId.id == 80001) {
          return {
            http: 'https://polygon-mumbai.g.alchemy.com/v2/EaKu789oxhWzYFvzEzOPAkCqIl2CwKj5',
            webSocket:
              'wss://polygon-mumbai.g.alchemy.com/v2/EaKu789oxhWzYFvzEzOPAkCqIl2CwKj5',
          };
        } else if (chainId.id == 11155420) {
          return {
            http: 'https://sepolia.optimism.io',
            webSocket:
              'wss://polygon-mumbai.g.alchemy.com/v2/EaKu789oxhWzYFvzEzOPAkCqIl2CwKj5',
          };
        } else if (chainId.id == 3441006) {
          return {
            http: 'https://pacific-rpc.sepolia-testnet.manta.network/http',
            webSocket: '',
          };
        } else if (chainId.id == 5611) {
          return {
            http: 'https://opbnb-testnet-rpc.bnbchain.org',
            webSocket: '',
          };
        } else if (chainId.id == 545) {
          return {
            http: 'https://testnet.evm.nodes.onflow.org/',
            webSocket: '',
          };
        } else if (chainId.id == 88882) {
          return {
            http: 'https://testnet.chiliscan.com/',
            webSocket: '',
          };
        } else if (chainId.id == 44787) {
          return {
            http: 'https://alfajores-forno.celo-testnet.org/',
            webSocket: '',
          };
        } else if (chainId.id == 2227728) {
          return {
            http: 'https://l1sload-rpc.scroll.io/',
            webSocket: '',
          };
        } else if (chainId.id == 25925) {
          return {
            http: 'https://testnet.bkcscan.com/',
            webSocket: '',
          };
        } else if (chainId.id == 90002) {
          return {
            http: 'https://rpc.ubitscan.io/',
            webSocket: '',
          };
        } else if (chainId.id == 5003) {
          return {
            http: 'https://rpc.sepolia.mantle.xyz/',
            webSocket: '',
          };
        }else if (chainId.id == 2810) {
          return {
            http: 'https://rpc-quicknode-holesky.morphl2.io/',
            webSocket: '',
          };
        } else if (chainId.id == 421614) {
          return {
            http: 'https://sepolia-rollup.arbitrum.io/rpc',
            webSocket: '',
          };
        }
      },
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Reels-Fi',
  projectId: '87106bd465234d097b8a51ba585bf799',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export { wagmiConfig, chains };
