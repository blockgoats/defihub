import React, { useState } from 'react';
import { Shield, CheckCircle, Lock, UserCheck } from 'lucide-react';

export default function ZKProofVerification() {
  const [verificationStep, setVerificationStep] = useState(1);
  const [isVerified, setIsVerified] = useState(false);

  const steps = [
    {
      title: 'Identity Proof',
      description: 'Generate zero-knowledge proof of identity',
      icon: UserCheck,
    },
    {
      title: 'Age Verification',
      description: 'Prove age requirement without revealing date of birth',
      icon: Shield,
    },
    {
      title: 'Address Proof',
      description: 'Verify residency while maintaining privacy',
      icon: Lock,
    },
  ];

  const handleVerification = () => {
    if (verificationStep < steps.length) {
      setVerificationStep(prev => prev + 1);
    } else {
      setIsVerified(true);
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Shield className="h-5 w-5 text-indigo-600" />
          <h2 className="text-lg font-semibold">Privacy-Preserving KYC</h2>
        </div>
        {isVerified && (
          <span className="flex items-center space-x-1 text-green-600">
            <CheckCircle className="h-4 w-4" />
            <span className="text-sm font-medium">Verified</span>
          </span>
        )}
      </div>

      <div className="space-y-6">
        {steps.map((step, index) => {
          const StepIcon = step.icon;
          const isActive = index + 1 === verificationStep;
          const isCompleted = index + 1 < verificationStep || isVerified;

          return (
            <div
              key={step.title}
              className={`p-4 rounded-lg border ${
                isActive
                  ? 'border-indigo-200 bg-indigo-50'
                  : isCompleted
                  ? 'border-green-200 bg-green-50'
                  : 'border-gray-200 bg-gray-50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`p-2 rounded-full ${
                    isActive
                      ? 'bg-indigo-200'
                      : isCompleted
                      ? 'bg-green-200'
                      : 'bg-gray-200'
                  }`}
                >
                  <StepIcon
                    className={`h-5 w-5 ${
                      isActive
                        ? 'text-indigo-600'
                        : isCompleted
                        ? 'text-green-600'
                        : 'text-gray-600'
                    }`}
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{step.title}</h3>
                  <p className="text-sm text-gray-500">{step.description}</p>
                </div>
                {isCompleted && (
                  <CheckCircle className="h-5 w-5 text-green-600 ml-auto" />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {!isVerified && (
        <button
          onClick={handleVerification}
          className="w-full mt-6 btn-primary"
        >
          {verificationStep === steps.length ? 'Complete Verification' : 'Continue'}
        </button>
      )}

      <p className="mt-4 text-sm text-gray-500 text-center">
        Your personal information remains private through zero-knowledge proofs
      </p>
    </div>
  );
}