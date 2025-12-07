'use client';

import React, { useState } from 'react';
import { FaStar, FaCalendarAlt, FaUser } from 'react-icons/fa';

interface RatingData {
  id: number;
  appointmentId: number;
  service: string;
  stylist: string;
  date: string;
  rating: number;
  review: string;
  isEditing?: boolean;
}

export default function RatingsPage() {
  const [ratings, setRatings] = useState<RatingData[]>([
    {
      id: 1,
      appointmentId: 101,
      service: 'Hair Styling',
      stylist: 'Sarah Martinez',
      date: '2025-11-25',
      rating: 5,
      review: 'Amazing service! Sarah really understood what I wanted and delivered perfectly.',
    },
    {
      id: 2,
      appointmentId: 102,
      service: 'Spa Treatment',
      stylist: 'Emily Chen',
      date: '2025-11-20',
      rating: 5,
      review: 'Very relaxing experience. Emily was professional and attentive.',
    },
    {
      id: 3,
      appointmentId: 103,
      service: 'Nail Care',
      stylist: 'Jessica Lee',
      date: '2025-11-15',
      rating: 4,
      review: 'Great nail work, very detailed and careful.',
    },
  ]);

  const [pendingRatings] = useState([
    {
      appointmentId: 104,
      service: 'Makeup Session',
      stylist: 'Rachel Adams',
      date: '2025-12-01',
    },
  ]);

  const [newRating, setNewRating] = useState<{ [key: number]: { rating: number; review: string } }>(
    {}
  );

  const handleSubmitRating = (appointmentId: number) => {
    const data = newRating[appointmentId];
    if (!data || data.rating === 0) {
      alert('Please select a rating');
      return;
    }

    // API call to submit rating
    console.log('Submitting rating:', { appointmentId, ...data });

    // Add to ratings list (in real app, this would come from API)
    const pending = pendingRatings.find((p) => p.appointmentId === appointmentId);
    if (pending) {
      setRatings([
        ...ratings,
        {
          id: ratings.length + 1,
          appointmentId,
          service: pending.service,
          stylist: pending.stylist,
          date: pending.date,
          rating: data.rating,
          review: data.review,
        },
      ]);
    }

    // Clear form
    setNewRating({ ...newRating, [appointmentId]: { rating: 0, review: '' } });
    alert('Rating submitted successfully!');
  };

  const handleEditRating = (id: number) => {
    setRatings(
      ratings.map((r) => (r.id === id ? { ...r, isEditing: !r.isEditing } : r))
    );
  };

  const handleUpdateRating = (id: number, rating: number, review: string) => {
    // API call to update rating
    console.log('Updating rating:', { id, rating, review });
    setRatings(
      ratings.map((r) => (r.id === id ? { ...r, rating, review, isEditing: false } : r))
    );
    alert('Rating updated successfully!');
  };

  const handleDeleteRating = (id: number) => {
    if (!confirm('Are you sure you want to delete this rating?')) return;
    // API call to delete rating
    console.log('Deleting rating:', id);
    setRatings(ratings.filter((r) => r.id !== id));
    alert('Rating deleted successfully!');
  };

  const StarRating = ({
    rating,
    onRate,
    readonly = false,
  }: {
    rating: number;
    onRate?: (rating: number) => void;
    readonly?: boolean;
  }) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            className={`text-2xl ${
              star <= rating ? 'text-yellow-500' : 'text-gray-300'
            } ${!readonly && 'cursor-pointer hover:text-yellow-400'}`}
            onClick={() => !readonly && onRate && onRate(star)}
          />
        ))}
      </div>
    );
  };

  const avgRating = ratings.length > 0
    ? (ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length).toFixed(1)
    : 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#3d2817] to-[#8b5e3c] text-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-2">My Ratings & Reviews</h1>
        <p className="text-gray-200">Share your experience and help others</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600 text-sm">Total Reviews</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{ratings.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600 text-sm">Average Rating</p>
          <p className="text-3xl font-bold text-gray-900 mt-2 flex items-center gap-2">
            {avgRating} <FaStar className="text-yellow-500 text-xl" />
          </p>
        </div>
      </div>

      {/* Pending Ratings */}
      {pendingRatings.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Pending Reviews</h2>
          <div className="space-y-4">
            {pendingRatings.map((pending) => (
              <div key={pending.appointmentId} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">{pending.service}</h3>
                    <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                      <FaUser className="text-[#8b5e3c]" />
                      {pending.stylist}
                    </p>
                    <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                      <FaCalendarAlt className="text-[#8b5e3c]" />
                      {pending.date}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Rating
                    </label>
                    <StarRating
                      rating={newRating[pending.appointmentId]?.rating || 0}
                      onRate={(rating) =>
                        setNewRating({
                          ...newRating,
                          [pending.appointmentId]: {
                            rating,
                            review: newRating[pending.appointmentId]?.review || '',
                          },
                        })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Review
                    </label>
                    <textarea
                      rows={3}
                      value={newRating[pending.appointmentId]?.review || ''}
                      onChange={(e) =>
                        setNewRating({
                          ...newRating,
                          [pending.appointmentId]: {
                            rating: newRating[pending.appointmentId]?.rating || 0,
                            review: e.target.value,
                          },
                        })
                      }
                      placeholder="Share your experience..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b5e3c] focus:border-transparent"
                    />
                  </div>

                  <button
                    onClick={() => handleSubmitRating(pending.appointmentId)}
                    className="px-6 py-2 bg-[#c9a961] text-white rounded-lg hover:bg-[#8b5e3c] transition-colors"
                  >
                    Submit Review
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Submitted Ratings */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Reviews</h2>
        <div className="space-y-4">
          {ratings.map((rating) => (
            <div key={rating.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{rating.service}</h3>
                  <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                    <FaUser className="text-[#8b5e3c]" />
                    {rating.stylist}
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                    <FaCalendarAlt className="text-[#8b5e3c]" />
                    {rating.date}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEditRating(rating.id)}
                    className="text-[#8b5e3c] hover:text-[#3d2817] text-sm font-medium"
                  >
                    {rating.isEditing ? 'Cancel' : 'Edit'}
                  </button>
                  <button
                    onClick={() => handleDeleteRating(rating.id)}
                    className="text-red-600 hover:text-red-800 text-sm font-medium"
                  >
                    Delete
                  </button>
                </div>
              </div>

              {rating.isEditing ? (
                <div className="space-y-3">
                  <StarRating
                    rating={rating.rating}
                    onRate={(newRating) =>
                      setRatings(
                        ratings.map((r) => (r.id === rating.id ? { ...r, rating: newRating } : r))
                      )
                    }
                  />
                  <textarea
                    rows={3}
                    value={rating.review}
                    onChange={(e) =>
                      setRatings(
                        ratings.map((r) =>
                          r.id === rating.id ? { ...r, review: e.target.value } : r
                        )
                      )
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b5e3c] focus:border-transparent"
                  />
                  <button
                    onClick={() => handleUpdateRating(rating.id, rating.rating, rating.review)}
                    className="px-6 py-2 bg-[#c9a961] text-white rounded-lg hover:bg-[#8b5e3c] transition-colors"
                  >
                    Save Changes
                  </button>
                </div>
              ) : (
                <>
                  <StarRating rating={rating.rating} readonly />
                  <p className="text-gray-700 mt-3">{rating.review}</p>
                </>
              )}
            </div>
          ))}

          {ratings.length === 0 && (
            <p className="text-gray-500 text-center py-8">No reviews yet</p>
          )}
        </div>
      </div>
    </div>
  );
}
