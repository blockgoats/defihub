import React, { useState } from 'react';
import { Wallet, AlertCircle } from 'lucide-react';

export default function WalletConnect() {
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState('');

  const connectWallet = async () => {
    setIsConnecting(true);
    setError('');
    
    try {
      // Simulated wallet connection
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Here you would typically integrate with actual wallet providers
    } catch (err) {
      setError('Failed to connect wallet');
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Wallet className="h-5 w-5 text-indigo-600" />
          <h2 className="text-lg font-semibold">Connect Wallet</h2>
        </div>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 rounded-lg flex items-center space-x-2">
          <AlertCircle className="h-4 w-4 text-red-600" />
          <span className="text-sm text-red-600">{error}</span>
        </div>
      )}

      <div className="space-y-3">
        <button
          onClick={connectWallet}
          disabled={isConnecting}
          className="w-full btn-primary flex items-center justify-center space-x-2"
        >
          <Wallet className="h-4 w-4" />
          <span>{isConnecting ? 'Connecting...' : 'Connect MetaMask'}</span>
        </button>
        
        <button className="w-full btn-secondary flex items-center justify-center space-x-2">
          <Wallet className="h-4 w-4" />
          <span>Connect WalletConnect</span>
        </button>
      </div>
    </div>
  );
}