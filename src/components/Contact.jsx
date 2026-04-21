import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { siteData } from "../data/siteData";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // const onSubmit = async (data) => {
  //   try {
  //     setIsSubmitting(true);

  //     await emailjs.send(
  //       "service_miouosh",
  //       "template_m97cadt",
  //       {
  //         name: data.name,
  //         email: data.email,
  //         message: data.message,
  //       },
  //       "OUPq6_8Ba2FvRxZ2L",
  //     );

  //     setIsSuccess(true);
  //     reset();

  //     setTimeout(() => setIsSuccess(false), 5000);
  //   } catch (error) {
  //     console.error("Email error:", error);
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

 const onSubmit = async (data) => {
  try {
    setIsSubmitting(true);

    const res = await fetch(
      `${window.location.origin}/api/contact`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!res.ok) {
      throw new Error("Failed to send email");
    }

    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    setIsSubmitting(false);
  }
};
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT */}
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight">
              Let's Build Something{" "}
              <span className="text-red-600">Together</span>
            </h2>
            <p className="text-gray-600 mt-4">
              Have a project in mind? Send me a message and I’ll get back to
              you.
            </p>
          </div>

          {/* FORM */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">
              Send Message
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name */}
              <div>
                <input
                  placeholder="Full Name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  placeholder="Email Address"
                  {...register("email", {
                    required: "Email required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email",
                    },
                  })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <textarea
                  placeholder="Your Message..."
                  rows="4"
                  {...register("message", { required: "Message required" })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition resize-none"
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
            {isSuccess && (
              <p className="text-green-600 text-sm text-center mt-2 transition-all duration-300">
                Your message has been sent. I’ll get back to you soon.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Success Toast */}
      {isSuccess && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 animate-fade-in">
          <CheckCircle className="w-5 h-5" />
          Message sent successfully!
        </div>
      )}
    </section>
  );
};

export default Contact;
