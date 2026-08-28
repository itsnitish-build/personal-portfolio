"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle, AlertCircle, Loader2, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import { CONTACT_INFO, SITE_CONFIG } from "@/constants/site";
import { isValidEmail } from "@/lib/utils";
import type { ContactFormData } from "@/types";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const validate = () => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.name.trim()) newErrors.name = "Required";
    if (!formData.email.trim()) newErrors.email = "Required";
    else if (!isValidEmail(formData.email)) newErrors.email = "Invalid email";
    if (!formData.subject.trim()) newErrors.subject = "Required";
    if (!formData.message.trim()) newErrors.message = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setStatus("success");
      setStatusMessage(data.message);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setStatusMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  const inputClass =
    "w-full px-0 py-3 bg-transparent border-b border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-foreground transition-colors";

  const contactItems = [
    { label: "Email", value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
    { label: "Phone", value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone.replace(/\s/g, "")}` },
    { label: "Location", value: CONTACT_INFO.location },
  ];

  return (
    <section id="contact" className="section-padding border-t border-border" aria-label="Contact">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <SplitHeading
            label="Get in Touch"
            lines={["Let's build", "something real."]}
            accentLine={1}
          />
          <p className="text-muted text-base md:text-lg mt-6 max-w-xl">
            Open to new roles and interesting mobile engineering problems.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
          <Reveal delay={0.1}>
            <div className="space-y-6 mb-10">
              {contactItems.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="group flex items-center justify-between border border-border rounded-xl px-5 py-4 hover:border-border-bright transition-colors"
                    >
                      <div>
                        <p className="text-xs text-muted mb-1">{item.label}</p>
                        <p className="text-sm text-foreground">{item.value}</p>
                      </div>
                      <ArrowUpRight size={16} className="text-muted group-hover:text-foreground transition-colors" />
                    </a>
                  ) : (
                    <div className="border border-border rounded-xl px-5 py-4">
                      <p className="text-xs text-muted mb-1">{item.label}</p>
                      <p className="text-sm text-foreground">{item.value}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="border border-border rounded-xl p-5">
              <p className="text-xs text-emerald-400 mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {SITE_CONFIG.status}
              </p>
              <p className="text-sm text-muted leading-relaxed">
                Available for Software Engineer and React Native roles. Based in {SITE_CONFIG.location}.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <p className="text-sm font-medium text-foreground mb-2">Send a direct message</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="text-xs text-muted uppercase tracking-wider">Name</label>
                  <input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClass} />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="text-xs text-muted uppercase tracking-wider">Email</label>
                  <input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClass} />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="text-xs text-muted uppercase tracking-wider">Subject</label>
                <input id="subject" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className={inputClass} />
                {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="text-xs text-muted uppercase tracking-wider">Message</label>
                <textarea id="message" rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={`${inputClass} resize-none`} />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              {status === "success" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-emerald-400 text-sm">
                  <CheckCircle size={16} /> {statusMessage}
                </motion.div>
              )}
              {status === "error" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle size={16} /> {statusMessage}
                </motion.div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full btn-primary text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {status === "loading" ? (
                  <><Loader2 size={16} className="animate-spin" /> Sending...</>
                ) : (
                  <>Send Message →</>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
