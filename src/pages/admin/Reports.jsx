import { FileText, Download, Filter } from 'lucide-react'

export default function Reports() {
  const reports = [
    {
      id: 1,
      title: 'Monthly Service Performance Report',
      date: '2026-02-20',
      type: 'Performance',
      fileSize: '2.4 MB',
      downloads: 24,
    },
    {
      id: 2,
      title: 'Infrastructure Maintenance Schedule',
      date: '2026-02-18',
      type: 'Maintenance',
      fileSize: '1.8 MB',
      downloads: 18,
    },
    {
      id: 3,
      title: 'Customer Satisfaction Analysis',
      date: '2026-02-15',
      type: 'Analytics',
      fileSize: '3.2 MB',
      downloads: 42,
    },
    {
      id: 4,
      title: 'Budget Allocation Report',
      date: '2026-02-10',
      type: 'Financial',
      fileSize: '1.5 MB',
      downloads: 12,
    },
    {
      id: 5,
      title: 'Issue Resolution Statistics',
      date: '2026-02-08',
      type: 'Analytics',
      fileSize: '2.1 MB',
      downloads: 31,
    },
  ]

  const getTypeColor = (type) => {
    switch (type) {
      case 'Performance':
        return 'bg-blue-100 text-blue-800'
      case 'Maintenance':
        return 'bg-orange-100 text-orange-800'
      case 'Analytics':
        return 'bg-purple-100 text-purple-800'
      case 'Financial':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
          <p className="text-gray-600 mt-2">View and download generated reports</p>
        </div>
        <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition">
          <Filter size={20} />
          <span>Filter</span>
        </button>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report) => (
          <div key={report.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-gray-100 p-3 rounded-lg">
                <FileText className="text-gray-600" size={24} />
              </div>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getTypeColor(report.type)}`}>
                {report.type}
              </span>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-2">{report.title}</h3>

            <div className="space-y-2 text-sm text-gray-600 mb-6">
              <p>📅 {report.date}</p>
              <p>💾 {report.fileSize}</p>
              <p>📥 {report.downloads} downloads</p>
            </div>

            <button className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-2 rounded-lg transition">
              <Download size={18} />
              <span>Download</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
