import React from 'react';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';

export default function ActivityFeed() {
  const activities = [
    {
      type: 'Stake',
      amount: '1,234.56 USDC',
      timestamp: '2 minutes ago',
      status: 'completed',
      incoming: true,
    },
    {
      type: 'Swap',
      amount: '0.5 ETH',
      timestamp: '15 minutes ago',
      status: 'completed',
      incoming: false,
    },
    {
      type: 'Farm',
      amount: '500 LP Tokens',
      timestamp: '1 hour ago',
      status: 'pending',
      incoming: true,
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
      </div>
      <div className="divide-y divide-gray-100">
        {activities.map((activity, index) => (
          <div key={index} className="p-6 flex items-center justify-between hover:bg-gray-50">
            <div className="flex items-center space-x-4">
              <div className={`p-2 rounded-lg ${
                activity.incoming ? 'bg-green-100' : 'bg-blue-100'
              }`}>
                {activity.incoming ? (
                  <ArrowDownLeft className={`h-5 w-5 ${
                    activity.incoming ? 'text-green-600' : 'text-blue-600'
                  }`} />
                ) : (
                  <ArrowUpRight className={`h-5 w-5 ${
                    activity.incoming ? 'text-green-600' : 'text-blue-600'
                  }`} />
                )}
              </div>
              <div>
                <p className="font-medium text-gray-900">{activity.type}</p>
                <p className="text-sm text-gray-500">{activity.amount}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">{activity.timestamp}</p>
              <span className={`text-sm ${
                activity.status === 'completed' ? 'text-green-600' : 'text-yellow-600'
              }`}>
                {activity.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}