import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Payment from '../components/StripeElement';
import { AuthContext } from '../providers/AuthProvider';

const PRIMARY_COLOR = '#E38580';

const BuyConnection = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const plans = [
    { id: 1, name: 'Basic', price: 5, connections: 1 },
    { id: 2, name: 'Standard', price: 12, connections: 3 },
    { id: 3, name: 'Premium', price: 20, connections: 7 },
  ];

  const handleSelect = (plan) => setSelectedPlan(plan);

  return (
    <div
      className="max-w-3xl mx-auto mt-10 p-8 rounded-2xl shadow-2xl"
      style={{
        background: 'linear-gradient(135deg, #f3e8ff 0%, #fff 100%)',
        border: `2px solid ${PRIMARY_COLOR}`,
      }}
    >
      <h2
        className="text-3xl font-extrabold text-center mb-8"
        style={{ color: PRIMARY_COLOR, letterSpacing: '1px' }}
      >
        Buy Connections
      </h2>
      <div className="flex gap-6 justify-center mb-10">
        {plans.map((plan) => (
          <div
            key={plan.id}
            onClick={() => handleSelect(plan)}
            className={`relative border-2 rounded-xl p-6 min-w-[140px] cursor-pointer transition-all shadow-lg
             ${selectedPlan?.id === plan.id
              ? 'ring-4 ring-purple-300 scale-105'
              : 'hover:scale-105 hover:shadow-2xl'}
            `}
            style={{
              borderColor:
                selectedPlan?.id === plan.id ? PRIMARY_COLOR : '#e5e7eb',
              background:
                selectedPlan?.id === plan.id
                  ? `linear-gradient(135deg, ${PRIMARY_COLOR}22 0%, #fff 100%)`
                  : '#f9fafb',
              boxShadow:
                selectedPlan?.id === plan.id
                  ? `0 4px 24px 0 ${PRIMARY_COLOR}33`
                  : '0 2px 8px 0 #e5e7eb',
              transition: 'all 0.2s',
            }}
          >
            <h3
              className="text-xl font-bold mb-2 text-center"
              style={{
                color: selectedPlan?.id === plan.id ? PRIMARY_COLOR : '#222',
              }}
            >
              {plan.name}
            </h3>
            <p
              className="font-extrabold text-3xl mb-1 text-center"
              style={{
                color: selectedPlan?.id === plan.id ? PRIMARY_COLOR : '#444',
              }}
            >
              ${plan.price}
            </p>
            <p className="text-gray-600 text-center">
              {plan.connections} Connection{plan.connections > 1 ? 's' : ''}
            </p>
          </div>
        ))}
      </div>
      <Payment totalPrice={selectedPlan?.price} paymentEnable={!!selectedPlan} />
    </div>
  );
};

export default BuyConnection;
