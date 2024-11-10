import React from 'react';
import { WalletIcon, Menu, Bell, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <WalletIcon className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">DeFi Hub</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Dashboard</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Swap</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Farm</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Stake</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Bridge</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-500 hover:text-indigo-600">
              <Bell className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-indigo-600">
              <User className="h-5 w-5" />
            </button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700">
              Connect Wallet
            </button>
            <button className="md:hidden p-2 text-gray-500 hover:text-indigo-600">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}