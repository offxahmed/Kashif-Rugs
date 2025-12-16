import { useState, useEffect } from 'react'
import AdminForm from '../components/AdminForm'
import { getAllCarpets, createCarpet, updateCarpet, deleteCarpet } from '../services/carpetService'

export default function Admin() {
  const [carpets, setCarpets] = useState([])
  const [editingCarpet, setEditingCarpet] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchCarpets()
  }, [])

  const fetchCarpets = async () => {
    try {
      const data = await getAllCarpets()
      setCarpets(data)
    } catch (err) {
      console.error(err)
      // Removing alert on load to avoid annoyance if backend is down initially, or keep it if critical.
      // alert('Failed to fetch carpets') 
    }
  }

  const handleCreate = async (formData) => {
    try {
      setLoading(true)
      await createCarpet(formData)
      alert('Carpet added successfully!')
      fetchCarpets()
      // Clear form logic might be needed here, but AdminForm state might persist. 
      // Actually AdminForm state resets if initialData changes or we might need a way to reset it.
      // But for now let's assume it's fine.
    } catch (err) {
      alert('Failed to add carpet: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleUpdate = async (formData) => {
    try {
      setLoading(true)
      await updateCarpet(editingCarpet._id, formData)
      alert('Carpet updated successfully!')
      setEditingCarpet(null)
      fetchCarpets()
    } catch (err) {
      alert('Failed to update carpet: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this carpet?')) return

    try {
      await deleteCarpet(id)
      alert('Carpet deleted successfully!')
      fetchCarpets()
    } catch (err) {
      alert('Failed to delete carpet: ' + err.message)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Admin Panel</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              {editingCarpet ? 'Edit Carpet' : 'Add New Carpet'}
            </h2>
            <AdminForm
              onSubmit={editingCarpet ? handleUpdate : handleCreate}
              initialData={editingCarpet}
              buttonText={editingCarpet ? 'Update Carpet' : 'Add Carpet'}
            />
            {editingCarpet && (
              <button
                onClick={() => setEditingCarpet(null)}
                className="mt-4 text-gray-600 hover:text-gray-800 underline block text-center w-full"
              >
                Cancel Editing
              </button>
            )}
            {loading && <p className="text-center text-blue-500 mt-2">Processing...</p>}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-700">All Carpets ({carpets.length})</h2>
          <div className="space-y-4">
            {carpets.map(carpet => (
              <div key={carpet._id} className="bg-white border rounded-lg p-4 flex justify-between items-center shadow-sm">
                <div>
                  <h3 className="font-bold text-lg text-gray-800">{carpet.title}</h3>
                  <p className="text-gray-600">${carpet.price}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setEditingCarpet(carpet)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition duration-200"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(carpet._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition duration-200"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
            {carpets.length === 0 && (
              <p className="text-gray-500 text-center py-4">No carpets found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}