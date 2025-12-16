import React from 'react';
import type { LucideProps } from 'lucide-react';
import {
  Home,
  Calendar,
  CalendarCheck,
  Search,
  Filter,
  Edit,
  Trash,
  Users,
  User,
  UserPlus,
  UserRound as UserTie,
  ShieldCheck as UserShield,
  HandCoins as CashRegister,
  Clock,
  Save,
  Banknote as MoneyBillWave,
  LineChart as ChartLine,
  Percent as Percentage,
  CheckCircle,
  Star,
  StarHalf,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail as Envelope,
  MailOpen as EnvelopeOpen,
  MapPin as MapMarkerAlt,
  ArrowUpDown as Sort,
  Bell,
  Check,
  X as Times,
  Scissors,
  Flower as Spa,
  Paintbrush,
  Heart,
  CreditCard,
  Download,
  Printer as Print,
  DollarSign,
  Shield as ShieldAlt,
  Users as VenusMars,
  UserX as UserTimes,
  Crown,
  Smartphone as MobileAlt,
  AlertTriangle as ExclamationTriangle,
  Redo2 as Redo,
  ThumbsUp,
  Trophy,
  ArrowLeft,
  Facebook,
  Instagram,
  Twitter,
  TrendingUp,
  Ban,
  LogOut as SignOutAlt,
  Loader as Spinner,
  Lock,
  Gem,
  Image,
  Hourglass,
  CircleDashed,
  Scissors as Cut,
  ClipboardList,
  Settings as Cog,
  Loader,
  LogOut
} from 'lucide-react';

// Helper to wrap lucide icons with react-icons-like API
function wrap(Icon: React.ComponentType<LucideProps>) {
  return function WrappedIcon(props: LucideProps) {
    return <Icon {...props} />;
  };
}

export const FaHome = wrap(Home);
export const FaCalendarAlt = wrap(Calendar);
export const FaCalendarCheck = wrap(CalendarCheck);
export const FaSearch = wrap(Search);
export const FaFilter = wrap(Filter);
export const FaEdit = wrap(Edit);
export const FaTrash = wrap(Trash);
export const FaUsers = wrap(Users);
export const FaUser = wrap(User);
export const FaUserPlus = wrap(UserPlus);
export const FaUserTie = wrap(UserTie);
export const FaUserShield = wrap(UserShield);
export const FaCashRegister = wrap(CashRegister);
export const FaClock = wrap(Clock);
export const FaSave = wrap(Save);
export const FaMoneyBillWave = wrap(MoneyBillWave);
export const FaChartLine = wrap(ChartLine);
export const FaPercentage = wrap(Percentage);
export const FaCheckCircle = wrap(CheckCircle);
export const FaStar = wrap(Star);
export const FaStarHalfAlt = wrap(StarHalf);
export const FaRegStar = wrap(Star);
export const FaChevronLeft = wrap(ChevronLeft);
export const FaChevronRight = wrap(ChevronRight);
export const FaPhone = wrap(Phone);
export const FaEnvelope = wrap(Envelope);
export const FaEnvelopeOpen = wrap(EnvelopeOpen);
export const FaMapMarkerAlt = wrap(MapMarkerAlt);
export const FaSort = wrap(Sort);
export const FaBell = wrap(Bell);
export const FaCheck = wrap(Check);
export const FaTimes = wrap(Times);
export const FaScissors = wrap(Scissors);
export const FaSpa = wrap(Spa);
export const FaPaintBrush = wrap(Paintbrush);
export const FaHeart = wrap(Heart);
export const FaCreditCard = wrap(CreditCard);
export const FaDownload = wrap(Download);
export const FaPrint = wrap(Print);
export const FaDollarSign = wrap(DollarSign);
export const FaShieldAlt = wrap(ShieldAlt);
export const FaVenusMars = wrap(VenusMars);
export const FaUserTimes = wrap(UserTimes);
export const FaCrown = wrap(Crown);
export const FaMobileAlt = wrap(MobileAlt);
export const FaExclamationTriangle = wrap(ExclamationTriangle);
export const FaRedo = wrap(Redo);
export const FaThumbsUp = wrap(ThumbsUp);
export const FaTrophy = wrap(Trophy);
export const FaArrowLeft = wrap(ArrowLeft);
export const FaFacebook = wrap(Facebook);
export const FaInstagram = wrap(Instagram);
export const FaTwitter = wrap(Twitter);
export const FaArrowUp = wrap(TrendingUp);
export const FaBan = wrap(Ban);
export const FaSignOutAlt = wrap(LogOut);
export const FaSpinner = wrap(Loader);
export const FaLock = wrap(Lock);
export const FaGem = wrap(Gem);
export const FaImage = wrap(Image);
export const FaHistory = wrap(Clock);
export const FaPlus = wrap(UserPlus);
export const FaCog = wrap(Cog);
export const FaHourglass = wrap(Hourglass);
export const FaHourglassHalf = wrap(CircleDashed);
export const FaCut = wrap(Cut);
export const FaRedoAlt = wrap(Redo);
export const FaClipboardList = wrap(ClipboardList);
