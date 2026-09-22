// fimoPAY — Deployed contract addresses on Arc Testnet
// Deployed: 2026-09-21 via Arc Studio deploy_contract (Mode 1)
// All contracts: Arc Testnet (Chain ID 5042002)
// Explorer: https://explorer.testnet.arc.io

import issuerRegistryArtifact    from '../contracts/out/IssuerRegistry.sol/IssuerRegistry.json'
import complianceArtifact        from '../contracts/out/ComplianceGateway.sol/ComplianceGateway.json'
import sessionEscrowArtifact     from '../contracts/out/SessionEscrow.sol/SessionEscrow.json'
import usageAttestationArtifact  from '../contracts/out/UsageAttestation.sol/UsageAttestation.json'
import deviceRegistryArtifact    from '../contracts/out/DeviceRegistry.sol/DeviceRegistry.json'
import settlementRouterArtifact  from '../contracts/out/SettlementRouterV1.sol/SettlementRouterV1.json'
import mockUsdcArtifact          from '../contracts/out/MockStablecoin.sol/MockStablecoin.json'

export const CHAIN_ID = 5042002

// ── Deployed addresses ─────────────────────────────────────────────────────
export const CONTRACTS = {
  IssuerRegistry: {
    address: '0x211e8a18cfa0bdd7d3be6c09838b5e9930b9b985' as `0x${string}`,
    abi: issuerRegistryArtifact.abi,
    explorer: 'https://explorer.testnet.arc.io/address/0x211e8a18cfa0bdd7d3be6c09838b5e9930b9b985',
  },
  ComplianceGateway: {
    address: '0xe72a17930539045989e5a0c10736b47ce1bb0e5d' as `0x${string}`,
    abi: complianceArtifact.abi,
    explorer: 'https://explorer.testnet.arc.io/address/0xe72a17930539045989e5a0c10736b47ce1bb0e5d',
  },
  SessionEscrow: {
    address: '0x8b209ee7061481be3605a7c988fda70cf0548663' as `0x${string}`,
    abi: sessionEscrowArtifact.abi,
    explorer: 'https://explorer.testnet.arc.io/address/0x8b209ee7061481be3605a7c988fda70cf0548663',
  },
  UsageAttestation: {
    address: '0xdfeb8e0b0ad692d7698b84da8a0eb6e8703d3a3e' as `0x${string}`,
    abi: usageAttestationArtifact.abi,
    explorer: 'https://explorer.testnet.arc.io/address/0xdfeb8e0b0ad692d7698b84da8a0eb6e8703d3a3e',
  },
  DeviceRegistry: {
    address: '0x1f1c901536c81a5871a27bb381be0d34487ee5f4' as `0x${string}`,
    abi: deviceRegistryArtifact.abi,
    explorer: 'https://explorer.testnet.arc.io/address/0x1f1c901536c81a5871a27bb381be0d34487ee5f4',
  },
  SettlementRouterV1: {
    address: '0xcc8c78eb2f33b71c11a7ee0d05b3eeb53b1bcb0a' as `0x${string}`,
    abi: settlementRouterArtifact.abi,
    explorer: 'https://explorer.testnet.arc.io/address/0xcc8c78eb2f33b71c11a7ee0d05b3eeb53b1bcb0a',
  },
  // Mock USDC testnet — for testing payments before real USDC integration
  MockUSDC: {
    address: '0xd1f2ab829a2fd0e024ad18f9f8eaef1facdefc7c' as `0x${string}`,
    abi: mockUsdcArtifact.abi,
    explorer: 'https://explorer.testnet.arc.io/address/0xd1f2ab829a2fd0e024ad18f9f8eaef1facdefc7c',
    decimals: 6,
    symbol: 'mUSDC',
  },
} as const
