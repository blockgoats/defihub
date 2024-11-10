import React from 'react';
import { Coins, TrendingUp, Clock } from 'lucide-react';

interface StakingPoolProps {
  name: string;
  apr: number;
  totalStaked: string;
  lockPeriod: string;
  minStake: string;
}

export default function StakingPool({ name, apr, totalStaked, lockPeriod, minStake }: StakingPoolProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Coins className="h-5 w-5 text-indigo-600" />
          <h2 className="text-lg font-semibold">{name}</h2>
        </div>
        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
          Active
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <TrendingUp className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-500">APR</span>
          </div>
          <p className="text-2xl font-bold text-indigo-600">{apr}%</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <Clock className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-500">Lock Period</span>
          </div>
          <p className="text-2xl font-bold">{lockPeriod}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Total Staked</span>
          <span className="font-medium">{totalStaked}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Minimum Stake</span>
          <span className="font-medium">{minStake}</span>
        </div>
      </div>

      <button className="w-full mt-6 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
        Stake Tokens
      </button>
    </div>
  );
}