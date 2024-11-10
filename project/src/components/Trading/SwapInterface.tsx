import React, { useState } from 'react';
import { ArrowDownUp, Settings, Info } from 'lucide-react';

export default function SwapInterface() {
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');
  const [slippage, setSlippage] = useState('0.5');

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Swap Tokens</h2>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Settings className="h-5 w-5 text-gray-600" />
        </button>
      </div>

      <div className="space-y-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex justify-between mb-2">
            <label className="text-sm text-gray-500">From</label>
            <span className="text-sm text-gray-500">Balance: 0.00</span>
          </div>
          <div className="flex space-x-4">
            <input
              type="number"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              placeholder="0.0"
              className="w-full bg-transparent text-2xl outline-none"
            />
            <button className="px-3 py-1 bg-gray-200 rounded-lg text-sm font-medium">
              ETH
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <ArrowDownUp className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex justify-between mb-2">
            <label className="text-sm text-gray-500">To</label>
            <span className="text-sm text-gray-500">Balance: 0.00</span>
          </div>
          <div className="flex space-x-4">
            <input
              type="number"
              value={toAmount}
              onChange={(e) => setToAmount(e.target.value)}
              placeholder="0.0"
              className="w-full bg-transparent text-2xl outline-none"
            />
            <button className="px-3 py-1 bg-gray-200 rounded-lg text-sm font-medium">
              USDC
            </button>
          </div>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Rate</span>
            <span className="font-medium">1 ETH = 1,800 USDC</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Slippage Tolerance</span>
            <span className="font-medium">{slippage}%</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Network Fee</span>
            <span className="font-medium">~$5.00</span>
          </div>
        </div>

        <button className="w-full btn-primary py-3">
          Swap Tokens
        </button>

        <div className="flex items-center justify-center space-x-1 text-sm text-gray-500">
          <Info className="h-4 w-4" />
          <span>Powered by Uniswap Protocol</span>
        </div>
      </div>
    </div>
  );
}