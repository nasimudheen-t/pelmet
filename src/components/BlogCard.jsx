// src/components/BlogCard.jsx

import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  return (
    <Link to={`/blog/${post.slug}`} className="group block h-full">
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
        {/* Image Section - Improved Size */}
        <div className="relative overflow-hidden bg-gray-100 h-56 lg:h-64">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Category Badge Overlay */}
          <div className="absolute top-4 left-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-red-600 rounded-full shadow-lg">
              {post.tag}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Date & Read Time */}
          <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                />
              </svg>
              {post.date}
            </span>
            {post.readTime && (
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
                {post.readTime} min read
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-red-600 transition-colors duration-300">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
            {post.excerpt}
          </p>

          {/* Author & Read More */}
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
            {post.author ? (
              <div className="flex items-center gap-2">
                {post.authorAvatar && (
                  <img 
                    src={post.authorAvatar} 
                    alt={post.author}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                )}
                <span className="text-xs text-gray-600">{post.author}</span>
              </div>
            ) : (
              <div></div>
            )}
            
            <div className="flex items-center gap-1 text-red-600 text-sm font-semibold group-hover:gap-2 transition-all duration-300">
              <span>Read More</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;