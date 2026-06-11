import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';

const data = [
  { name: 'M1', capital: 4.5, contracts: 3 },
  { name: 'M2', capital: 10, contracts: 7 },
  { name: 'M3', capital: 14.5, contracts: 12 },
  { name: 'V1', capital: 24, contracts: 24 },
  { name: 'Demo', capital: 35, contracts: 42 },
];

const sectorData = [
  { name: 'Mining', value: 34 },
  { name: 'Agri', value: 24 },
  { name: 'Real Est', value: 22 },
  { name: 'Art', value: 20 },
];

const COLORS = ['#8b5cf6', '#34d399', '#d4d4d8', '#a855f7'];

export const CapitalDeploymentChart: React.FC = () => {
  return (
    <div className="h-full w-full min-h-0">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 4, right: 4, bottom: 0, left: -12 }}>
          <defs>
            <linearGradient id="colorCapital" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#34d399" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="4 6" stroke="#27272a" />
          <XAxis dataKey="name" stroke="#a1a1aa" tick={{ fontSize: 10 }} />
          <YAxis stroke="#a1a1aa" tick={{ fontSize: 10 }} width={28} />
          <Tooltip
            contentStyle={{ backgroundColor: '#09090b', borderColor: '#3f3f46', color: '#fafafa' }}
          />
          <Area type="monotone" dataKey="capital" stroke="#a78bfa" fillOpacity={1} fill="url(#colorCapital)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export const SectorAllocationChart: React.FC = () => {
  return (
    <div className="h-full w-full min-h-0">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={sectorData} margin={{ top: 4, right: 4, bottom: 0, left: -12 }}>
          <CartesianGrid strokeDasharray="4 6" stroke="#27272a" />
          <XAxis dataKey="name" stroke="#a1a1aa" tick={{ fontSize: 10 }} />
          <YAxis stroke="#a1a1aa" tick={{ fontSize: 10 }} width={28} />
          <Tooltip
             contentStyle={{ backgroundColor: '#09090b', borderColor: '#3f3f46', color: '#fafafa' }}
             cursor={{fill: '#18181b'}}
          />
          <Bar dataKey="value" fill="#8884d8">
            {sectorData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
