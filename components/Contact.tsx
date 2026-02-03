"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Contact form submitted", formData);
  };

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <SectionHeading
          title="Contact"
          subtitle="Interested in collaborating or chatting about AI infrastructure?"
        />
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4 text-sm text-slate-300 sm:text-base">
            <p>
              I am always open to new ideas, infrastructure challenges, and AI tooling
              collaborations. Reach out anytime.
            </p>
            <a
              href="mailto:lwhitehi@ucsc.edu"
              className="inline-flex items-center font-semibold text-white hover:text-slate-200"
            >
              lwhitehi@ucsc.edu
            </a>
          </div>
          <form
            className="space-y-4 rounded-2xl border border-white/10 bg-[#223B5E] p-6 shadow-card"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-medium text-slate-100">
                Name
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-white/20 bg-slate-900/40 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-white/40 focus:ring-2 focus:ring-white/30"
                  placeholder="Your name"
                  required
                />
              </label>
              <label className="text-sm font-medium text-slate-100">
                Email
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-white/20 bg-slate-900/40 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-white/40 focus:ring-2 focus:ring-white/30"
                  placeholder="you@example.com"
                  required
                />
              </label>
            </div>
            <label className="text-sm font-medium text-slate-100">
              Message
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-white/20 bg-slate-900/40 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-white/40 focus:ring-2 focus:ring-white/30"
                placeholder="Tell me about your project or idea."
                required
              />
            </label>
            <Button type="submit">Send message</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
