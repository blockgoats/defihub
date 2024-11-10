import React, { useState } from 'react';
import { ArrowRightLeft, Wallet, AlertCircle, Clock } from 'lucide-react';

interface ChainOption {
  id: string;
  name: string;
  icon: string;
  tokens: Array<{
    symbol: string;
    balance: string;
  }>;
}

export default function CrossChainBridge() {
  const [amount, setAmount] = useState('');
  const [selectedToken, setSelectedToken] = useState('ETH');

  const chains: ChainOption[] = [
    {
      id: 'ethereum',
      name: 'Ethereum',
      icon: '⟠',
      tokens: [
        { symbol: 'ETH', balance: '1.45' },
        { symbol: 'USDC', balance: '1,234.56' },
      ],
    },
    {
      id: 'bsc',
      name: 'BNB Chain',
      icon: '⛓️',
      tokens: [
        { symbol: 'BNB', balance: '5.67' },
        { symbol: 'BUSD', balance: '890.12' },
      ],
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <ArrowRightLeft className="h-5 w-5 text-indigo-600" />
          <h2 className="text-lg font-semibold">Cross-Chain Bridge</h2>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <label className="block text-sm text-gray-500 mb-2">From Chain</label>
            <select className="w-full bg-white rounded-lg border border-gray-200 p-2">
              {chains.map(chain => (
                <option key={chain.id} value={chain.id}>
                  {chain.icon} {chain.name}
                </option>
              ))}
            </select>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <label className="block text-sm text-gray-500 mb-2">To Chain</label>
            <select className="w-full bg-white rounded-lg border border-gray-200 p-2">
              {chains.map(chain => (
                <option key={chain.id} value={chain.id}>
                  {chain.icon} {chain.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex justify-between mb-2">
            <label className="text-sm text-gray-500">Amount</label>
            <span className="text-sm text-gray-500">
              Balance: {chains[0].tokens.find(t => t.symbol === selectedToken)?.balance}
            </span>
          </div>
          <div className="flex space-x-4">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.0"
              className="w-full bg-white rounded-lg border border-gray-200 p-2"
            />
            <select
              value={selectedToken}
              onChange={(e) => setSelectedToken(e.target.value)}
              className="bg-white rounded-lg border border-gray-200 p-2"
            >
              {chains[0].tokens.map(token => (
                <option key={token.symbol} value={token.symbol}>
                  {token.symbol}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Bridge Fee</span>
            <span className="font-medium">0.1%</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Estimated Time</span>
            <span className="font-medium">~15 minutes</span>
          </div>
        </div>

        <button className="w-full btn-primary py-3 flex items-center justify-center space-x-2">
          <Wallet className="h-4 w-4" />
          <span>Bridge Assets</span>
        </button>

        <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
          <AlertCircle className="h-4 w-4" />
          <span>Secured by LayerZero Protocol</span>
        </div>
      </div>
    </div>
  );
}