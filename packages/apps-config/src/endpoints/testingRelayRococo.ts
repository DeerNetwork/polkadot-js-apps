// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EndpointOption } from './types';

import { ROCOCO_GENESIS } from '../api/constants';

/* eslint-disable sort-keys */

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   providers: The actual hosted secure websocket endpoint
//
// IMPORTANT: Alphabetical based on text
export const testParasRococo: EndpointOption[] = [
  {
    info: 'arctic',
    paraId: 3015,
    text: 'Arctic',
    providers: {
      Arctic: 'wss://arctic-rococo-rpc.icenetwork.io'
    }
  },
  {
    info: 'rococoBajun',
    isUnreachable: true, // https://github.com/polkadot-js/apps/issues/7593
    paraId: 3026,
    text: 'Bajun Network',
    providers: {
      AjunaNetwork: 'wss://rpc-rococo.bajun.network'
    }
  },
  {
    info: 'rococoBasilisk',
    paraId: 2090,
    text: 'Basilisk',
    providers: {
      'Galactic Council': 'wss://rpc-01.basilisk-rococo.hydradx.io'
    }
  },
  {
    info: 'rococoBifrost',
    paraId: 2001,
    text: 'Bifrost',
    providers: {
      Liebi: 'wss://bifrost-rpc.rococo.liebi.com/ws'
    }
  },
  {
    info: 'rococoBitgreen',
    paraId: 3024,
    text: 'Bitgreen',
    providers: {
      Bitgreen: 'wss://rococobitgreen.abhath-labs.com'
    }
  },
  {
    info: 'rococoCatalyst',
    paraId: 2031,
    text: 'Catalyst',
    providers: {
      Centrifuge: 'wss://fullnode.catalyst.cntrfg.com'
    }
  },
  {
    info: 'rococoCrust',
    paraId: 2012,
    text: 'Crust Testnet',
    providers: {
      Crust: 'wss://rococo-csm.crustcode.com/'
    }
  },
  {
    info: 'rococoDali',
    paraId: 2087,
    text: 'Dali',
    providers: {
      Composable: 'wss://rpc.composablefinance.ninja'
    }
  },
  {
    info: 'rococoDolphin',
    paraId: 2084,
    text: 'Dolphin',
    providers: {
      'Manta Network': 'wss://ws.rococo.dolphin.engineering'
    }
  },
  {
    info: 'Eggnet',
    paraId: 4006,
    text: 'Eggnet Parachain',
    providers: {
      Webb: 'wss://rococo1.webb.tools'
    }
  },
  {
    info: 'rococoGenshiro',
    paraId: 2024,
    text: 'Genshiro Rococo Testnet',
    providers: {
      Equilibrium: 'wss://parachain-testnet.equilab.io/rococo/collator/node1/wss'
    }
  },
  {
    info: 'helixstreet',
    paraId: 3025,
    text: 'Helixstreet',
    providers: {
      Helixstreet: 'wss://rpc-rococo.helixstreet.io'
    }
  },
  {
    info: 'rococoImbue',
    paraId: 2121,
    text: 'Imbue Network',
    providers: {
      'Imbue Network': 'wss://rococo.imbue.network'
    }
  },
  {
    info: 'rococoIntegritee',
    paraId: 3002,
    text: 'Integritee Network',
    providers: {
      Integritee: 'wss://rococo.api.integritee.network'
    }
  },
  {
    info: 'rococoLitentry',
    paraId: 2106,
    text: 'Litentry',
    providers: {
      Litentry: 'wss://rpc.rococo-parachain-sg.litentry.io'
    }
  },
  {
    info: 'rococoMangata',
    paraId: 2110,
    text: 'Mangata',
    providers: {
      Mangata: 'wss://roccoco-testnet-collator-01.mangatafinance.cloud'
    }
  },
  {
    info: 'rococoMoonsama',
    isDisabled: true, // https://github.com/polkadot-js/apps/issues/7526
    paraId: 2055,
    text: 'Moonsama',
    providers: {
      Moonsama: 'wss://moonsama-testnet-rpc.moonsama.com'
    }
  },
  {
    info: 'rococoNodle',
    paraId: 2026,
    text: 'Nodle',
    providers: {
      OnFinality: 'wss://nodle-paradis.api.onfinality.io/public-ws'
    }
  },
  {
    info: 'chainoli',
    homepage: 'https://www.my-oli.com/en/',
    paraId: 4023,
    text: 'OLI Parachain',
    providers: {}
  },
  {
    info: 'rococoOriginTrailParachain',
    homepage: 'https://parachain.origintrail.io',
    paraId: 2043,
    text: 'OriginTrail Parachain Testnet',
    providers: {
      TraceLabs: 'wss://parachain-testnet-rpc.origin-trail.network/'
    }
  },
  {
    info: 'rococoPangolin',
    paraId: 2105,
    text: 'Pangolin Parachain',
    providers: {
      'Darwinia Network': 'wss://pangolin-parachain-rpc.darwinia.network'
    }
  },
  {
    info: 'rococoKilt',
    paraId: 2086,
    text: 'RILT',
    providers: {
      'KILT Protocol': 'wss://rococo.kilt.io'
    }
  },
  {
    info: 'robonomics',
    homepage: 'http://robonomics.network/',
    paraId: 2048,
    text: 'Robonomics',
    providers: {
      Airalab: 'wss://rococo.rpc.robonomics.network'
    }
  },
  {
    info: 'rocfinity',
    paraId: 2021,
    text: 'Rocfinity',
    providers: {
      Efinity: 'wss://rpc.rococo.efinity.io'
    }
  },
  {
    info: 'snowbridge',
    paraId: 3016,
    text: 'Snowbridge',
    providers: {
      Snowfork: 'wss://rococo-rpc.snowbridge.network'
    }
  },
  {
    info: 'rococoSubsocial',
    paraId: 2100,
    text: 'SoonsocialX',
    providers: {
      DappForce: 'wss://rco-para.subsocial.network'
    }
  },
  {
    info: 'rococoSora',
    paraId: 2011,
    text: 'SORA Rococo Parachain',
    providers: {
      Soramitsu: 'wss://ws.parachain-collator-1.c1.stg1.sora2.soramitsu.co.jp'
    }
  },
  {
    info: 'rococoSpreehafen',
    paraId: 2116,
    text: 'Spreehafen',
    providers: {
      DataHighway: 'wss://spreehafen.datahighway.com'
    }
  },
  {
    info: 'rococoSubzero',
    paraId: 4040,
    text: 'Subzero',
    providers: {
      ZERO: 'wss://staging.para.sub.zero.io'
    }
  },
  {
    info: 't0rn',
    paraId: 3333,
    text: 't0rn',
    providers: {
      t3rn: 'wss://dev.net.t3rn.io'
    }
  },
  {
    info: 'rococoTuring',
    paraId: 2114,
    text: 'Turing Network (Staging)',
    providers: {
      OAK: 'wss://rpc.turing-staging.oak.tech'
    }
  },
  {
    info: 'rococoVirto',
    paraId: 3003,
    text: 'Virto',
    providers: {
      VirtoNetwork: 'wss://rococo.virtonetwork.xyz'
    }
  },
  {
    info: 'rococoZeitgeist',
    isDisabled: true, // See https://github.com/polkadot-js/apps/issues/5842
    paraId: 2050,
    text: 'Zeitgeist PC',
    providers: {
      Zeitggeist: 'wss://roc.zeitgeist.pm'
    }
  }
];

export const testParasRococoCommon: EndpointOption[] = [
  {
    info: 'rococoStatemint',
    paraId: 1000,
    text: 'Rockmine',
    providers: {
      Parity: 'wss://rococo-statemint-rpc.polkadot.io'
    },
    teleport: [-1]
  },
  {
    info: 'rococoContracts',
    paraId: 1002,
    text: 'Contracts',
    providers: {
      Parity: 'wss://rococo-contracts-rpc.polkadot.io'
    },
    teleport: [-1]
  },
  {
    info: 'encointer',
    homepage: 'https://encointer.org/',
    paraId: 1003,
    text: 'Encointer Lietaer',
    providers: {
      'Encointer Association': 'wss://rococo.api.encointer.org'
    },
    teleport: [-1]
  }
];

export const testRelayRococo: EndpointOption = {
  dnslink: 'rococo',
  genesisHash: ROCOCO_GENESIS,
  info: 'rococo',
  text: 'Rococo',
  providers: {
    Parity: 'wss://rococo-rpc.polkadot.io',
    // OnFinality: 'wss://rococo.api.onfinality.io/public-ws', // After reset, node misses host functions
    // Pinknode: 'wss://rpc.pinknode.io/rococo/explorer' // After reset, syncs to old chain
    // 'Ares Protocol': 'wss://rococo.aresprotocol.com' // https://github.com/polkadot-js/apps/issues/5767
    'light client': 'light://substrate-connect/rococo'
  },
  teleport: [1000, 1002],
  linked: [
    ...testParasRococoCommon,
    ...testParasRococo
  ]
};
