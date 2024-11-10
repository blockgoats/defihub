import React from 'react';
import { Coins, ArrowUpRight, PiggyBank, ShieldCheck } from 'lucide-react';

interface MarketProps {
  asset: string;
  supplyApy: number;
  borrowApy: number;
  totalSupply: string;
  utilization: number;
  collateralFactor: number;
}

export default function LendingMarket({
  asset,
  supplyApy,
  borrowApy,
  totalSupply,
  utilization,
  collateralFactor
}: MarketProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-green-100 rounded-lg">
            <Coins className="h-5 w-5 text-green-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{asset}</h3>
            <div className="flex items-center space-x-1 text-sm text-gray-500">
              <ShieldCheck className="h-4 w-4" />
              <span>{collateralFactor}% LTV</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center text-green-600">
            <ArrowUpRight className="h-4 w-4" />
            <span className="ml-1 font-medium">+2.3%</span>
          </div>
          <p className="text-sm text-gray-500">24h Change</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center space-x-2 mb-1">
            <PiggyBank className="h-4 w-4 text-blue-600" />
            <span className="text-sm text-gray-500">Supply APY</span>
          </div>
          <p className="text-lg font-semibold text-blue-600">{supplyApy}%</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center space-x-2 mb-1">
            <Coins className="h-4 w-4 text-purple-600" />
            <span className="text-sm text-gray-500">Borrow APY</span>
          </div>
          <p className="text-lg font-semibold text-purple-600">{borrowApy}%</p>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-500">Utilization</span>
          <span className="font-medium">{utilization}%</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full">
          <div 
            className="h-full bg-green-600 rounded-full"
            style={{ width: `${utilization}%` }}
          ></div>
        </div>
      </div>

      <div className="flex justify-between text-sm text-gray-500 mb-6">
        <span>Total Supply</span>
        <span className="font-medium">{totalSupply}</span>
      </div>

      <div className="flex space-x-3">
        <button className="flex-1 btn-primary">
          Supply
        </button>
        <button className="flex-1 btn-secondary">
          Borrow
        </button>
      </div>
    </div>
  );
}