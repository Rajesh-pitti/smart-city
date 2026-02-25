import FeedbackForm from '../../components/FeedbackForm'

export default function Feedback() {
  const feedbackStats = [
    {
      label: 'Your Feedback Count',
      value: '5',
    },
    {
      label: 'Avg. Response Time',
      value: '2 days',
    },
    {
      label: 'Helpful Rate',
      value: '100%',
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Send Feedback</h1>
        <p className="text-gray-600 mt-2">Help us improve by sharing your valuable feedback</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {feedbackStats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg p-6">
            <p className="text-gray-600 text-sm">{stat.label}</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Form and Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form */}
        <div className="lg:col-span-2">
          <FeedbackForm />
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          {/* What We Do With Feedback */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">What We Do With Your Feedback</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start space-x-3">
                <span className="text-emerald-600 text-lg leading-none">✓</span>
                <span>Review all submissions carefully</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-emerald-600 text-lg leading-none">✓</span>
                <span>Identify improvement opportunities</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-emerald-600 text-lg leading-none">✓</span>
                <span>Implement necessary changes</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-emerald-600 text-lg leading-none">✓</span>
                <span>Keep you updated on progress</span>
              </li>
            </ul>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">FAQ</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  How long does it take to respond?
                </h4>
                <p className="text-sm text-gray-600">
                  We typically respond within 2-3 business days.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  Is my feedback anonymous?
                </h4>
                <p className="text-sm text-gray-600">
                  You can choose to provide your contact information or remain anonymous.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  Can I track my feedback?
                </h4>
                <p className="text-sm text-gray-600">
                  Yes, you'll receive updates via email on the status of your feedback.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Support */}
          <div className="bg-emerald-50 rounded-2xl shadow-lg p-6 border border-emerald-200">
            <h3 className="text-lg font-bold text-emerald-900 mb-2">Need More Help?</h3>
            <p className="text-sm text-emerald-700 mb-4">
              Contact our support team directly for urgent matters.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-emerald-900">
                <strong>Email:</strong> support@smartcity.com
              </p>
              <p className="text-emerald-900">
                <strong>Phone:</strong> +1 (555) 0123
              </p>
              <p className="text-emerald-900">
                <strong>Hours:</strong> 9 AM - 6 PM (Mon-Fri)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
