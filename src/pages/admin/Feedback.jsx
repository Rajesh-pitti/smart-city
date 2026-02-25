import { Star, User, Calendar, MessageCircle } from 'lucide-react'

export default function Feedback() {
  const feedbackList = [
    {
      id: 1,
      name: 'John Smith',
      rating: 5,
      category: 'Service',
      message:
        'Excellent service! The water supply has been very reliable. Great work team!',
      date: '2026-02-20',
      status: 'Reviewed',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      rating: 4,
      category: 'Suggestion',
      message:
        'Would be nice to have a mobile app for reporting issues more quickly.',
      date: '2026-02-19',
      status: 'Pending',
    },
    {
      id: 3,
      name: 'Mike Brown',
      rating: 3,
      category: 'Complaint',
      message:
        'Bus service was delayed today. Please improve the punctuality.',
      date: '2026-02-18',
      status: 'Reviewed',
    },
    {
      id: 4,
      name: 'Emma Davis',
      rating: 5,
      category: 'Compliment',
      message:
        'The new waste management system is working perfectly! Very satisfied.',
      date: '2026-02-17',
      status: 'Reviewed',
    },
    {
      id: 5,
      name: 'Robert Wilson',
      rating: 2,
      category: 'Complaint',
      message:
        'Electricity outages are frequent. Need immediate attention to infrastructure.',
      date: '2026-02-16',
      status: 'Pending',
    },
  ]

  const getRatingColor = (rating) => {
    if (rating >= 4) return 'text-green-600'
    if (rating >= 3) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusColor = (status) => {
    return status === 'Reviewed'
      ? 'bg-green-100 text-green-800'
      : 'bg-yellow-100 text-yellow-800'
  }

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Service':
        return 'bg-blue-100 text-blue-800'
      case 'Suggestion':
        return 'bg-purple-100 text-purple-800'
      case 'Complaint':
        return 'bg-red-100 text-red-800'
      case 'Compliment':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Feedback Management</h1>
        <p className="text-gray-600 mt-2">Review and respond to citizen feedback</p>
      </div>

      {/* Feedback Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <p className="text-gray-600 text-sm">Total Feedback</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">487</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <p className="text-gray-600 text-sm">Pending Review</p>
          <p className="text-3xl font-bold text-yellow-600 mt-2">12</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <p className="text-gray-600 text-sm">Avg. Rating</p>
          <p className="text-3xl font-bold text-green-600 mt-2">4.3/5.0</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <p className="text-gray-600 text-sm">Satisfied</p>
          <p className="text-3xl font-bold text-emerald-600 mt-2">92%</p>
        </div>
      </div>

      {/* Feedback List */}
      <div className="space-y-4">
        {feedbackList.map((feedback) => (
          <div key={feedback.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {feedback.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{feedback.name}</h3>
                  <div className="flex items-center space-x-3 mt-1">
                    <div className="flex text-lg">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={
                            i < feedback.rating
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-300'
                          }
                        />
                      ))}
                    </div>
                    <span
                      className={`text-sm font-semibold px-2 py-1 rounded ${getCategoryColor(
                        feedback.category
                      )}`}
                    >
                      {feedback.category}
                    </span>
                  </div>
                </div>
              </div>
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full ${getStatusColor(
                  feedback.status
                )}`}
              >
                {feedback.status}
              </span>
            </div>

            <p className="text-gray-700 mb-4">{feedback.message}</p>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center space-x-4">
                <span className="flex items-center space-x-1">
                  <Calendar size={16} />
                  <span>{feedback.date}</span>
                </span>
              </div>
              <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium">
                <MessageCircle size={16} />
                <span>Reply</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
