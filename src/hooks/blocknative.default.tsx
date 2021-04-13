import notify from "bnc-notify";
import onboard from "bnc-onboard";
import { Subscriptions, API as OnboardAPI } from "./types.onboard";
import { API as NotifyAPI } from "./types.notify";

export const initOnboard: (subscriptions: Subscriptions, networkId: number) => OnboardAPI = (
  subscriptions,
  networkId = 1
) => {
  return onboard({
    dappId: "3b2cfc9a-57fe-4f5d-ab28-d07248416f19",
    networkId,
    subscriptions,
    walletSelect: {
      wallets: [
        { walletName: "metamask" },
        {
          walletName: "walletConnect",
          rpc: {
            [networkId]: "https://rinkeby.infura.io/v3/990d173093674ad0aaffae632eed0876/",
          },
          bridge: "https://bridge.walletconnect.org/",
        },
        { walletName: "coinbase" },
        { walletName: "fortmatic", apiKey: "pk_test_886ADCAB855632AA" },
        {
          walletName: "trezor",
          appUrl: "http://localhost:3000/",
          email: "aaron@blocknative.com",
          rpcUrl: "https://rinkeby.infura.io/v3/990d173093674ad0aaffae632eed0876/",
        },

        { walletName: "authereum", disableNotifications: true },

        { walletName: "status" },

        { walletName: "trust", rpcUrl: "https://rinkeby.infura.io/v3/990d173093674ad0aaffae632eed0876/" },

        { walletName: "torus" },
        {
          walletName: "walletLink",
          rpcUrl: "https://rinkeby.infura.io/v3/990d173093674ad0aaffae632eed0876/",
          appName: "testdapp",
        },

        { walletName: "portis", apiKey: "78a89f67-eb05-410b-ac94-cc8e6bd6620b" },
      ],
    },
    walletCheck: [
      { checkName: "connect" },
      { checkName: "accounts" },
      { checkName: "network" },
      { checkName: "balance", minimumBalance: "100000" },
      { checkName: "derivationPath" },
    ],
  });
};
export const initNotify: (networkId: number) => NotifyAPI = (networkId = 1) => {
  return notify({
    dappId: "3b2cfc9a-57fe-4f5d-ab28-d07248416f19",
    networkId,
  });
};
