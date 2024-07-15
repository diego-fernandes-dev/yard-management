import React from 'react';
import Button from '../components/Button';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <Button text="Primary Button" type="primary" onClick={() => alert('Primary Button Clicked')} />
      <Button text="Secondary Button" type="secondary" onClick={() => alert('Secondary Button Clicked')} className="ml-2" />
    </div>
  );
};

export default Dashboard;
