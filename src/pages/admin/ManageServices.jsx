import { useState } from 'react'
import { Plus, Trash2, Edit } from 'lucide-react'
import ServiceCard from '../../components/ServiceCard'
import { Droplets, Zap, Bus } from 'lucide-react'

export default function ManageServices() {
  const [services, setServices] = useState([
    {
      id: 1,
      name: 'Water Supply',
      description: 'Reliable and clean water distribution',
      icon: Droplets,
      category: 'water',
      status: 'active',
    },
    {
      id: 2,
      name: 'Electricity',
      description: 'Efficient power distribution',
      icon: Zap,
      category: 'electricity',
      status: 'active',
    },
    {
      id: 3,
      name: 'Waste Management',
      description: 'Sustainable waste collection',
      icon: Trash2,
      category: 'waste',
      status: 'active',
    },
    {
      id: 4,
      name: 'Public Transport',
      description: 'Easy city-wide transportation',
      icon: Bus,
      category: 'transport',
      status: 'active',
    },
  ])

  const [isAddingService, setIsAddingService] = useState(false)
  const [newService, setNewService] = useState({
    name: '',
    description: '',
    category: 'water',
    status: 'active',
  })

  const handleAddService = (e) => {
    e.preventDefault()
    if (newService.name && newService.description) {
      setServices([
        ...services,
        {
          id: services.length + 1,
          ...newService,
          icon: Droplets, // Default icon
        },
      ])
      setNewService({ name: '', description: '', category: 'water', status: 'active' })
      setIsAddingService(false)
    }
  }

  const handleDeleteService = (id) => {
    setServices(services.filter((s) => s.id !== id))
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewService((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Manage Services</h1>
          <p className="text-gray-600 mt-2">Add, edit, or remove city services</p>
        </div>
        <button
          onClick={() => setIsAddingService(!isAddingService)}
          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
        >
          <Plus size={20} />
          <span>Add Service</span>
        </button>
      </div>

      {/* Add Service Form */}
      {isAddingService && (
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Create New Service</h2>
          <form onSubmit={handleAddService} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={newService.name}
                  onChange={handleInputChange}
                  placeholder="Enter service name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Category
                </label>
                <select
                  name="category"
                  value={newService.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
                >
                  <option value="water">Water Supply</option>
                  <option value="electricity">Electricity</option>
                  <option value="waste">Waste Management</option>
                  <option value="transport">Public Transport</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={newService.description}
                onChange={handleInputChange}
                placeholder="Service description"
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 resize-none"
              />
            </div>
            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
              >
                Create Service
              </button>
              <button
                type="button"
                onClick={() => setIsAddingService(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-lg transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="relative">
            <ServiceCard {...service} />
            <div className="absolute top-4 right-4 flex gap-2">
              <button className="p-2 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition">
                <Edit size={16} className="text-blue-600" />
              </button>
              <button
                onClick={() => handleDeleteService(service.id)}
                className="p-2 bg-white rounded-lg shadow-lg hover:bg-red-50 transition"
              >
                <Trash2 size={16} className="text-red-600" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
