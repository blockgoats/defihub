import React from 'react';
import Header from './components/Layout/Header';
import PortfolioOverview from './components/Dashboard/PortfolioOverview';
import ActivityFeed from './components/Dashboard/ActivityFeed';
import YieldFarmCard from './components/Farming/YieldFarmCard';
import AIRecommendations from './components/Portfolio/AIRecommendations';
import ProposalCard from './components/Governance/ProposalCard';
import WalletConnect from './components/Wallet/WalletConnect';
import SwapInterface from './components/Trading/SwapInterface';
import StakingPool from './components/Staking/StakingPool';
import LendingMarket from './components/Lending/LendingMarket';
import ZKProofVerification from './components/KYC/ZKProofVerification';
import CrossChainBridge from './components/Bridge/CrossChainBridge';

function App() {
  const stakingPool = {
    name: "ETH 2.0 Staking Pool",
    apr: 4.5,
    totalStaked: "345,678 ETH",
    lockPeriod: "12 months",
    minStake: "32 ETH"
  };

  const lendingMarket = {
    asset: "ETH",
    supplyApy: 3.2,
    borrowApy: 5.8,
    totalSupply: "$245M",
    utilization: 68,
    collateralFactor: 75
  };

  const activeProposal = {
    id: "PROP-31",
    title: "Upgrade Protocol Parameters",
    description: "Proposal to adjust liquidation thresholds and implement new safety module.",
    votesFor: 1250000,
    votesAgainst: 450000,
    endTime: "2 days",
    status: "active"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PortfolioOverview />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <ZKProofVerification />
            <CrossChainBridge />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <StakingPool {...stakingPool} />
            <LendingMarket {...lendingMarket} />
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-4">Active Governance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProposalCard {...activeProposal} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;