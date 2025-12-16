import { useState, useEffect } from 'react'

export default function AdminForm({ onSubmit, initialData = null, buttonText = 'Add Carpet' }) {
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    price: initialData?.price || '',
    description: initialData?.description || '',
    image: null
  })

  // Update form data when initialData changes (important for editing mode)
  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || '',
        price: initialData.price || '',
        description: initialData.description || '',
        image: null // Keep image null unless we handle file preview/replacement logic differently
      });
    } else {
      setFormData({ title: '', price: '', description: '', image: null });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (e) => {
    setFormData(prev => ({ ...prev, image: e.target.files[0] }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-gray-400 font-medium mb-2">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="input"
        />
      </div>

      <div>
        <label className="block text-gray-400 font-medium mb-2">Price ($)</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
          className="input"
        />
      </div>

      <div>
        <label className="block text-gray-400 font-medium mb-2">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows="4"
          className="input resize-none"
        />
      </div>

      <div>
        <label className="block text-gray-400 font-medium mb-2">
          Image {!initialData && '(Required)'}
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required={!initialData} // Required only if creating new
          className="block w-full text-sm text-gray-400
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-accent-blue/10 file:text-accent-blue
            hover:file:bg-accent-blue/20
            cursor-pointer"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-accent-blue text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-blue-900/40"
      >
        {buttonText}
      </button>
    </form>
  )
}