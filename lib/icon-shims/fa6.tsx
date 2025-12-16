
import React from 'react';
import type { LucideProps } from 'lucide-react';
import { Scissors } from 'lucide-react';

function wrap(Icon: React.ComponentType<LucideProps>) {
  return function WrappedIcon(props: LucideProps) {
    return <Icon {...props} />;
  };
}

export const FaScissors = wrap(Scissors);
