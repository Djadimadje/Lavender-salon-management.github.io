'use client';

import { FiStar, FiAward, FiUsers, FiClock } from 'react-icons/fi';

interface TrustBadge {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
}

const badges: TrustBadge[] = [
  { icon: FiStar, value: '5.0', label: 'Rating' },
  { icon: FiAward, value: '10+', label: 'Years Experience' },
  { icon: FiUsers, value: '2,500+', label: 'Happy Clients' },
  { icon: FiClock, value: '50+', label: 'Services' },
];

export default function TrustBadges() {
  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6">
      {badges.map((badge, index) => {
        const Icon = badge.icon;
        return (
          <div
            key={index}
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20"
          >
            <Icon className="w-5 h-5 text-[#c9a961]" />
            <div>
              <p className="text-lg font-bold text-white">{badge.value}</p>
              <p className="text-xs text-gray-200">{badge.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
