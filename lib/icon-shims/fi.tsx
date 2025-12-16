import React from 'react';
import type { LucideProps } from 'lucide-react';
import {
  Menu,
  X,
  Search,
  User,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Loader,
  Play,
  Award,
  Users,
  Star
} from 'lucide-react';

function wrap(Icon: React.ComponentType<LucideProps>) {
  return function WrappedIcon(props: LucideProps) {
    return <Icon {...props} />;
  };
}

export const FiMenu = wrap(Menu);
export const FiX = wrap(X);
export const FiSearch = wrap(Search);
export const FiUser = wrap(User);
export const FiCalendar = wrap(Calendar);
export const FiPhone = wrap(Phone);
export const FiMail = wrap(Mail);
export const FiMapPin = wrap(MapPin);
export const FiClock = wrap(Clock);
export const FiSend = wrap(Send);
export const FiLoader = wrap(Loader);
export const FiPlay = wrap(Play);
export const FiAward = wrap(Award);
export const FiUsers = wrap(Users);
export const FiStar = wrap(Star);
