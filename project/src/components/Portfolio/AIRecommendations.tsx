import React from 'react';
import { Brain, TrendingUp, ShieldAlert, Zap } from 'lucide-react';

export default function AIRecommendations() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Brain className="h-5 w-5 text-purple-600" />
          <h2 className="text-lg font-semibold text-gray-900">AI Insights</h2>
        </div>
        <span className="text-sm text-gray-500">Updated 5m ago</span>
      </div>

      <div className="space-y-4">
        <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
          <div className="flex items-center space-x-2 mb-2">
            <TrendingUp className="h-4 w-4 text-purple-600" />
            <h3 className="font-medium text-purple-900">Portfolio Optimization</h3>
          </div>
          <p className="text-sm text-purple-800">
            Rebalancing opportunity: Consider reducing BTC exposure by 5% and increasing ETH position to optimize for current market conditions.
          </p>
        </div>

        <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
          <div className="flex items-center space-x-2 mb-2">
            <Zap className="h-4 w-4 text-blue-600" />
            <h3 className="font-medium text-blue-900">Yield Opportunity</h3>
          </div>
          <p className="text-sm text-blue-800">
            High-yield pool detected: ETH-USDC pool on Uniswap V3 offering 12% APY with medium risk profile.
          </p>
        </div>

        <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
          <div className="flex items-center space-x-2 mb-2">
            <ShieldAlert className="h-4 w-4 text-amber-600" />
            <h3 className="font-medium text-amber-900">Risk Alert</h3>
          </div>
          <p className="text-sm text-amber-800">
            Your current portfolio has a 72% correlation with BTC. Consider diversifying to reduce market-specific risks.
          </p>
        </div>
      </div>

      <button className="w-full mt-4 py-2 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-colors">
        View Detailed Analysis
      </button>
    </div>
  );
}