'use client';

import { useState } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar, FaSearch, FaFilter } from 'react-icons/fa';

export default function AdminRatingsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRating, setFilterRating] = useState('all');

  const ratings = [
    {
      id: 1,
      customer: 'Sarah Johnson',
      service: 'Hair Styling',
      stylist: 'Emma Wilson',
      rating: 5,
      comment: 'Absolutely amazing service! Emma was so professional and knew exactly what I wanted. Will definitely come back!',
      date: '2025-12-03',
    },
    {
      id: 2,
      customer: 'Michael Brown',
      service: 'Spa Treatment',
      stylist: 'Olivia Taylor',
      rating: 4,
      comment: 'Great experience overall. The spa was very relaxing and the staff was friendly.',
      date: '2025-12-02',
    },
    {
      id: 3,
      customer: 'Emily Davis',
      service: 'Nail Care',
      stylist: 'Sophia Martinez',
      rating: 5,
      comment: 'Perfect manicure! Sophia is so talented and the results lasted for weeks.',
      date: '2025-12-02',
    },
    {
      id: 4,
      customer: 'James Wilson',
      service: 'Makeup',
      stylist: 'Ava Anderson',
      rating: 3,
      comment: 'Good service but had to wait longer than expected. The makeup was nice though.',
      date: '2025-12-01',
    },
    {
      id: 5,
      customer: 'Lisa Anderson',
      service: 'Hair Coloring',
      stylist: 'Emma Wilson',
      rating: 5,
      comment: 'Emma is a magician with color! My hair looks better than I imagined.',
      date: '2025-12-01',
    },
  ];

  const stats = [
    { label: 'Average Rating', value: '4.6', icon: '⭐', color: 'bg-yellow-500' },
    { label: 'Total Reviews', value: '847', icon: '💬', color: 'bg-blue-500' },
    { label: '5 Star Reviews', value: '652', icon: '🌟', color: 'bg-green-500' },
    { label: 'Response Rate', value: '98%', icon: '✅', color: 'bg-purple-500' },
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400" />);
    }
    return stars;
  };

  // Filter ratings based on search and rating filter
  const filteredRatings = ratings.filter((review) => {
    const matchesSearch = 
      searchTerm === '' ||
      review.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.stylist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.comment.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesRating = 
      filterRating === 'all' || 
      review.rating === parseInt(filterRating);
    
    return matchesSearch && matchesRating;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Customer Ratings & Reviews</h1>
        <p className="text-gray-600 mt-1">Monitor customer feedback and service quality</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-full`}>
                <span className="text-white text-2xl">{stat.icon}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Rating Distribution */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Rating Distribution</h2>
        <div className="space-y-3">
          {[5, 4, 3, 2, 1].map((star) => {
            const percentage = star === 5 ? 77 : star === 4 ? 15 : star === 3 ? 5 : star === 2 ? 2 : 1;
            return (
              <div key={star} className="flex items-center gap-3">
                <span className="w-16 text-sm text-gray-600">{star} stars</span>
                <div className="flex-1 bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-yellow-400 h-3 rounded-full"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <span className="w-12 text-sm text-gray-600 text-right">{percentage}%</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Search */}
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search reviews..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a961]"
            />
          </div>

          {/* Rating Filter */}
          <div className="relative">
            <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <select
              value={filterRating}
              onChange={(e) => setFilterRating(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a961] appearance-none"
            >
              <option value="all">All Ratings</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="3">3 Stars</option>
              <option value="2">2 Stars</option>
              <option value="1">1 Star</option>
            </select>
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {filteredRatings.length === 0 ? (
          <div className="bg-white p-12 rounded-lg shadow-md text-center">
            <p className="text-gray-500 text-lg">No reviews found matching your filters</p>
          </div>
        ) : (
          filteredRatings.map((review) => (
          <div key={review.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold text-gray-900">{review.customer}</h3>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-600">{review.date}</span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-1">{renderStars(review.rating)}</div>
                  <span className="text-sm font-semibold text-gray-700">{review.rating}.0</span>
                </div>
                <p className="text-gray-700 mb-3">{review.comment}</p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>
                    <strong>Service:</strong> {review.service}
                  </span>
                  <span>•</span>
                  <span>
                    <strong>Stylist:</strong> {review.stylist}
                  </span>
                </div>
              </div>
              <button className="ml-4 text-[#8b5e3c] hover:text-[#c9a961] font-medium text-sm">
                Reply
              </button>
            </div>
          </div>
        )))
        }
      </div>
    </div>
  );
}
