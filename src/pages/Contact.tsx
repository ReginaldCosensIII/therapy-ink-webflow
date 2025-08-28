import { useEffect, useMemo, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const SUBJECT_OPTIONS = [
  { value: "booking", label: "Book an Appointment" },
  { value: "consultation", label: "Tattoo Design Consultation" },
  { value: "general", label: "General Inquiry" },
  { value: "aftercare", label: "Aftercare Question" },
];

const Contact = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const preselected = useMemo(() => searchParams.get("subject") ?? "", [searchParams]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: preselected || "general",
    message: "",
  });

  useEffect(() => {
    document.title = "Contact Tattoo Therapy | Book an Appointment";
    const meta = document.querySelector('meta[name="description"]');
    const content = "Contact Tattoo Therapy to book an appointment, request a consultation, or ask a question.";
    if (meta) meta.setAttribute("content", content);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      toast({ title: "Missing information", description: "Please fill in required fields.", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact", {
        body: form,
      });
      if (error) throw error;
      toast({
        title: "Message sent",
        description: "Thanks! We'll get back to you shortly. For urgent bookings, please call us.",
      });
      setForm({ name: "", email: "", phone: "", subject: preselected || "general", message: "" });
      navigate("/", { replace: false });
    } catch (err: any) {
      toast({ title: "Something went wrong", description: err?.message ?? "Please try again later.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3"><span className="bg-gradient-primary bg-clip-text text-transparent">Contact Tattoo Therapy</span></h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">Book an appointment, request a consultation, or ask a question. We're here to help.</p>
          <link rel="canonical" href={`${window.location.origin}/contact`} />
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 bg-card rounded-2xl p-6 shadow-card border border-border">
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="(555) 555-5555" />
                </div>
                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <select id="subject" name="subject" value={form.subject} onChange={handleChange} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                    {SUBJECT_OPTIONS.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your idea, preferred dates, size, placement, and any references." />
              </div>
              <div className="flex gap-3">
                <Button type="submit" variant="hero" disabled={loading}>{loading ? "Sending..." : "Send Message"}</Button>
                <Button type="button" variant="outline" onClick={() => setForm({ name: "", email: "", phone: "", subject: preselected || "general", message: "" })}>Clear</Button>
              </div>
            </form>
          </article>

          <aside className="bg-card rounded-2xl p-6 shadow-card border border-border space-y-4">
            <h2 className="text-xl font-semibold">Prefer to talk?</h2>
            <p className="text-muted-foreground">Call us or reach out via social media to schedule your session.</p>
            <ul className="space-y-2 text-sm">
              <li><span className="text-muted-foreground">Phone:</span> <span className="text-foreground font-medium">(555) 123-4567</span></li>
              <li><span className="text-muted-foreground">Email:</span> <span className="text-foreground font-medium">info@tattoo-therapy.com</span></li>
              <li><span className="text-muted-foreground">Instagram:</span> <span className="text-foreground font-medium">@tattoo.therapy</span></li>
            </ul>
            <div className="pt-2 text-xs text-muted-foreground">We’ll add online booking later. For now, submit the form and our team will follow up to confirm time and artist.</div>
          </aside>
        </section>
      </div>
    </main>
  );
};

export default Contact;
