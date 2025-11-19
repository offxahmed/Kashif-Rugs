```jsx
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
      alert('Failed to fetch carpets')
      console.error(err)
    }
  }

  const handleCreate = async (formData) => {
    try {
      setLoading(true)
      await createCarpet(formData)
      alert('Carpet added successfully!')
      fetchCarpets()
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
    
      Admin Panel

      
        
          
            {editingCarpet ? 'Edit Carpet' : 'Add New Carpet'}
          
          
          {editingCarpet && (
            <button
              onClick={() => setEditingCarpet(null)}
              className="mt-4 text-dark-muted hover:text-dark-text"
            >
              Cancel Editing
            
          )}
        

        
          All Carpets ({carpets.length})
          
            {carpets.map(carpet => (
              
                
                
                  {carpet.title}
                  ${carpet.price}
                
                
                  <button
                    onClick={() => setEditingCarpet(carpet)}
                    className="bg-accent-blue hover:bg-blue-700 text-white px-4 py-2 rounded"
                  >
                    Edit
                  
                  <button
                    onClick={() => handleDelete(carpet._id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                  >
                    Delete    
            ))}
          
    
  )
}
```