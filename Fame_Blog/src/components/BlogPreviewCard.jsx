import React from 'react'
import articlesServices from '../services/articlesService'
import Button from './Button'
import {useNavigate} from "react-router-dom"
const BlogPreviewCard = ({$id,title,featuredImage}) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm mx-auto hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={articlesServices.filePreview(featuredImage)} 
          alt="blog image" 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 line-clamp-2 hover:text-blue-600">
          {title}
        </h2>
      </div>
      <div className="px-6 pb-6">
        <Button 
          onClick={() => navigate(`/post/${$id}`)} 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
        >
          Read More
        </Button>
      </div>
    </div>
  )
}

export default BlogPreviewCard