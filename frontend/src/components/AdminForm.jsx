```jsx
import { useState } from 'react'

export default function AdminForm({ onSubmit, initialData = null, buttonText = 'Add Carpet' }) {
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    price: initialData?.price || '',
    description: initialData?.description || '',
    image: null
  })

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
    
      
        Title
        
      

      
        Price ($)
        
      

      
        Description
        
      

      
        
          Image {!initialData && '(Required)'}
        
        
      

      
        {buttonText}
      
    
  )
}
```