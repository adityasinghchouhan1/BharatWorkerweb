import React from 'react';
import CountUp from 'react-countup';

const stats = [
  { label: 'Skilled Workers Registered', value: 12500 },
  { label: 'Jobs Completed', value: 28000 },
  { label: 'Cities Covered', value: 50 },
  { label: 'Trusted Employers', value: 1200 },
];

const Counters = () => (
  <div className="flex flex-wrap justify-center gap-48 px-4 py-10 mx-20 rounded-xl bg-yellow-300">
    {stats.map((item) => (
      <div key={item.label} className="text-center">
        <div className="text-4xl font-bold text-gray-900 mb-2">
          <CountUp end={item.value} duration={2} separator="" />+
        </div>
        <div className="text-sm font-normal text-gray-800 max-w-[200px] mx-auto">
          {item.label}
        </div>
      </div>
    ))}
  </div>
);

export default Counters;
