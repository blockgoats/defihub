import React from 'react';
import { TrendingUp, ArrowUpRight, PieChart, Wallet } from 'lucide-react';

export default function PortfolioOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-green-100 rounded-lg">
            <Wallet className="h-6 w-6 text-green-600" />
          </div>
          <span className="text-green-600 flex items-center text-sm">
            +2.5% <ArrowUpRight className="h-4 w-4 ml-1" />
          </span>
        </div>
        <h3 className="text-gray-500 text-sm">Total Value Locked</h3>
        <p className="text-2xl font-bold text-gray-900">$124,523.65</p>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-blue-100 rounded-lg">
            <TrendingUp className="h-6 w-6 text-blue-600" />
          </div>
          <span className="text-green-600 flex items-center text-sm">
            +5.2% <ArrowUpRight className="h-4 w-4 ml-1" />
          </span>
        </div>
        <h3 className="text-gray-500 text-sm">24h Volume</h3>
        <p className="text-2xl font-bold text-gray-900">$892,142.31</p>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-purple-100 rounded-lg">
            <PieChart className="h-6 w-6 text-purple-600" />
          </div>
          <span className="text-green-600 flex items-center text-sm">
            +1.8% <ArrowUpRight className="h-4 w-4 ml-1" />
          </span>
        </div>
        <h3 className="text-gray-500 text-sm">Total Yield</h3>
        <p className="text-2xl font-bold text-gray-900">$12,847.92</p>
      </div>

      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
        <h3 className="text-white/80 text-sm mb-4">Risk Score</h3>
        <div className="flex items-center justify-between">
          <p className="text-3xl font-bold">Medium</p>
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-2xl font-bold">B+</span>
          </div>
        </div>
      </div>
    </div>
  );
}