import React from "react";

const Comments = () => {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold mb-4">Leave a Reply</h2>

      <textarea
        className="w-full border p-3 rounded mb-3"
        placeholder="Comment..."
      />

      <input
        className="w-full border p-3 rounded mb-3"
        placeholder="Name"
      />

      <input
        className="w-full border p-3 rounded mb-3"
        placeholder="Email"
      />

      <button className="bg-red-600 text-white px-6 py-2 rounded">
        Post Comment
      </button>
    </section>
  );
};

export default Comments;