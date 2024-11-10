import React from 'react';
import { Vote, Users, Clock } from 'lucide-react';

interface ProposalProps {
  id: string;
  title: string;
  description: string;
  votesFor: number;
  votesAgainst: number;
  endTime: string;
  status: 'active' | 'passed' | 'failed' | 'pending';
}

export default function ProposalCard({
  id,
  title,
  description,
  votesFor,
  votesAgainst,
  endTime,
  status
}: ProposalProps) {
  const totalVotes = votesFor + votesAgainst;
  const forPercentage = totalVotes > 0 ? (votesFor / totalVotes) * 100 : 0;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-blue-600 bg-blue-50';
      case 'passed': return 'text-green-600 bg-green-50';
      case 'failed': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center space-x-2">
            <Vote className="h-5 w-5 text-indigo-600" />
            <h3 className="text-lg font-semibold text-gray-900">#{id}: {title}</h3>
          </div>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(status)}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-500 mb-1">
          <span>Progress</span>
          <span>{forPercentage.toFixed(1)}% Support</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-indigo-600 rounded-full"
            style={{ width: `${forPercentage}%` }}
          />
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
        <div className="flex items-center space-x-1">
          <Users className="h-4 w-4" />
          <span>{totalVotes.toLocaleString()} votes</span>
        </div>
        <div className="flex items-center space-x-1">
          <Clock className="h-4 w-4" />
          <span>Ends {endTime}</span>
        </div>
      </div>

      <div className="flex space-x-2">
        <button className="flex-1 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700">
          Vote For
        </button>
        <button className="flex-1 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700">
          Vote Against
        </button>
      </div>
    </div>
  );
}