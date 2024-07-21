import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import CountUp from 'react-countup';

const data = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Users</h3>
          <CountUp end={12345} duration={2.5} className="text-4xl font-bold" />
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Sales</h3>
          <CountUp end={67890} duration={2.5} className="text-4xl font-bold" />
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Visits</h3>
          <CountUp end={123456} duration={2.5} className="text-4xl font-bold" />
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Revenue</h3>
          <CountUp end={7890} prefix="$" duration={2.5} className="text-4xl font-bold" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow lg:col-span-2">
          <h3 className="text-lg font-semibold mb-2">Monthly Sales</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Highlights</h3>
          <div className="mb-4">
            <p>All time sales</p>
            <p className="text-2xl font-bold">$295.7k</p>
            <p className="text-green-500">+2.7%</p>
          </div>
          <div className="mb-4">
            <p>Online Store</p>
            <p className="text-2xl font-bold">$172k</p>
            <p className="text-green-500">+3.9%</p>
          </div>
          <div className="mb-4">
            <p>Facebook</p>
            <p className="text-2xl font-bold">$85k</p>
            <p className="text-red-500">-0.7%</p>
          </div>
          <div className="mb-4">
            <p>Instagram</p>
            <p className="text-2xl font-bold">$36k</p>
            <p className="text-green-500">+8.2%</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Team Meeting</h3>
          <p>09:00 - 09:30</p>
          <p>Discuss project updates</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Teams</h3>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Team</th>
                <th className="text-left">Rating</th>
                <th className="text-left">Last Modified</th>
                <th className="text-left">Members</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Team A</td>
                <td>4.5</td>
                <td>Yesterday</td>
                <td>5</td>
              </tr>
              <tr>
                <td>Team B</td>
                <td>4.0</td>
                <td>Last week</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Team C</td>
                <td>3.5</td>
                <td>Last month</td>
                <td>4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
