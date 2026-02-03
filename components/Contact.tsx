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
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          title="Contact"
          subtitle="Interested in collaborating or chatting about AI infrastructure?"
        />
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4 text-sm text-muted sm:text-base">
            <p>
              I am always open to new ideas, infrastructure challenges, and AI tooling
              collaborations. Reach out anytime.
            </p>
            <a
              href="mailto:lewis@example.com"
              className="inline-flex items-center font-semibold text-accent hover:text-accent/80"
            >
              lewis@example.com
            </a>
          </div>
          <form
            className="space-y-4 rounded-xl border border-ink/10 bg-surface p-6 shadow-card"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-medium text-ink">
                Name
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-ink/10 bg-transparent px-3 py-2 text-sm text-ink outline-none transition focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
                  placeholder="Your name"
                  required
                />
              </label>
              <label className="text-sm font-medium text-ink">
                Email
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-ink/10 bg-transparent px-3 py-2 text-sm text-ink outline-none transition focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
                  placeholder="you@example.com"
                  required
                />
              </label>
            </div>
            <label className="text-sm font-medium text-ink">
              Message
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-ink/10 bg-transparent px-3 py-2 text-sm text-ink outline-none transition focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
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
