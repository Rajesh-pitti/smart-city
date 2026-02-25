import IssueForm from '../../components/IssueForm'

export default function ReportIssue() {
  const recentIssues = [
    {
      title: 'Water Quality Issue',
      category: 'Water Supply',
      date: '2 days ago',
      status: 'In Review',
    },
    {
      title: 'Potholes on Main Street',
      category: 'Infrastructure',
      date: '1 week ago',
      status: 'Resolved',
    },
    {
      title: 'Street Light Outage',
      category: 'Electricity',
      date: '3 days ago',
      status: 'In Progress',
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Report an Issue</h1>
        <p className="text-gray-600 mt-2">Help us improve the city by reporting problems in your area</p>
      </div>

      {/* Form and Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form */}
        <div className="lg:col-span-2">
          <IssueForm />
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          {/* Tips */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Reporting Tips</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 font-bold flex-shrink-0">1</span>
                <span>Be specific about the location of the issue</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 font-bold flex-shrink-0">2</span>
                <span>Provide clear details about the problem</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 font-bold flex-shrink-0">3</span>
                <span>Select the appropriate priority level</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 font-bold flex-shrink-0">4</span>
                <span>Upload photos if possible for better clarity</span>
              </li>
            </ul>
          </div>

          {/* Recent Reports */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Your Recent Reports</h3>
            <div className="space-y-4">
              {recentIssues.map((issue, idx) => (
                <div
                  key={idx}
                  className="pb-4 border-b border-gray-200 last:border-b-0 last:pb-0"
                >
                  <h4 className="font-semibold text-gray-900 text-sm">{issue.title}</h4>
                  <p className="text-xs text-gray-600 mt-1">{issue.category}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-gray-500">{issue.date}</span>
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded ${
                        issue.status === 'Resolved'
                          ? 'bg-green-100 text-green-800'
                          : issue.status === 'In Progress'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {issue.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency */}
          <div className="bg-red-50 rounded-2xl shadow-lg p-6 border border-red-200">
            <h3 className="text-lg font-bold text-red-900 mb-2">Emergency?</h3>
            <p className="text-sm text-red-700 mb-4">
              For immediate emergencies, call 911 or your local emergency number.
            </p>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition">
              Call Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
