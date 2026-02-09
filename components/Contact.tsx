import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

export const Contact = () => {
  const [formState, setFormState] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("sending");

    
    // Cache the form element before any await to avoid React event pooling issues
    const form = e.currentTarget as HTMLFormElement | null;

    try {
      await emailjs.sendForm("service_9wbkbec", "template_12uc2gs", form!, {
        publicKey: "Z1jCSZuta3CucdHdD",
      });

      setFormState("sent");
      if (form) form.reset();
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error("EmailJS error:", error);
      setFormState("error");
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-32 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-zinc-900/40 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white text-center">
            Let's Build Together
          </h2>
          <p className="text-center text-neutral-400 mb-12">
            Have a project in mind? I'm always open to discussing new ideas and
            opportunities.
          </p>

          {formState === "sent" ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-2xl text-white font-bold mb-2">
                Message Sent!
              </h3>
              <p className="text-neutral-400">
                I'll get back to you as soon as possible.
              </p>
              <button
                onClick={() => setFormState("idle")}
                className="mt-6 text-primary hover:text-white transition-colors"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-neutral-400">
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    name="user_name"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-neutral-400">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="user_email"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-neutral-400">
                  Message
                </label>
                <textarea
                  required
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                disabled={formState === "sending"}
                type="submit"
                className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formState === "sending" ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
              {formState === "error" && (
                <p className="text-red-400 text-sm text-center">
                  Failed to send. Please try again.
                </p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
