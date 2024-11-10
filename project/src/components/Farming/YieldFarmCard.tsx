import React from 'react';
import { Percent, DollarSign, Timer, Shield } from 'lucide-react';

interface YieldFarmProps {
  protocol: string;
  pair: string;
  apy: number;
  tvl: string;
  risk: 'Low' | 'Medium' | 'High';
  verified: boolean;
}

export default function YieldFarmCard({ protocol, pair, apy, tvl, risk, verified }: YieldFarmProps) {
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'text-green-600 bg-green-50';
      case 'Medium': return 'text-yellow-600 bg-yellow-50';
      case 'High': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center space-x-2">
            <h3 className="text-lg font-semibold text-gray-900">{protocol}</h3>
            {verified && (
              <Shield className="h-4 w-4 text-blue-500" />
            )}
          </div>
          <p className="text-sm text-gray-500">{pair}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRiskColor(risk)}`}>
          {risk} Risk
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center space-x-2 mb-1">
            <Percent className="h-4 w-4 text-indigo-600" />
            <span className="text-sm text-gray-500">APY</span>
          </div>
          <p className="text-xl font-bold text-gray-900">{apy}%</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center space-x-2 mb-1">
            <DollarSign className="h-4 w-4 text-indigo-600" />
            <span className="text-sm text-gray-500">TVL</span>
          </div>
          <p className="text-xl font-bold text-gray-900">{tvl}</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Timer className="h-4 w-4" />
          <span>Harvests daily</span>
        </div>
        <button className="btn-primary">
          Farm Now
        </button>
      </div>
    </div>
  );
}