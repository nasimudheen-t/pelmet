import React from "react";

const Comments = () => {
  return (
    <section className="mt-16 max-w-2xl mx-auto px-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8 border border-slate-100">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-slate-800 mb-2">
          Leave a Reply
        </h2>
        <p className="text-sm text-slate-500 mb-6">
          Your email address will not be published. Required fields are marked *
        </p>

        {/* Comment */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Comment *
          </label>
          <textarea
            rows="5"
            className="w-full border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none p-3 rounded-lg transition"
            placeholder="Write your comment..."
          />
        </div>

        {/* Name + Email */}
        <div className="grid md:grid-cols-2 gap-4 mb-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Name *
            </label>
            <input
              type="text"
              className="w-full border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none p-3 rounded-lg transition"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              className="w-full border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none p-3 rounded-lg transition"
              placeholder="you@example.com"
            />
          </div>
        </div>

        {/* Checkbox */}
        <div className="flex items-start gap-2 mb-6">
          <input type="checkbox" className="mt-1 accent-red-600" />
          <p className="text-sm text-slate-500">
            Save my name and email for next time I comment.
          </p>
        </div>

        {/* Button */}
        <button className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-lg transition shadow-sm hover:shadow-md">
          Post Comment
        </button>
      </div>
    </section>
  );
};

export default Comments;
