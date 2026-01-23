import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Loader2, Send } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <Check className="text-primary" size={32} />
        </div>
        <h3 className="font-heading text-2xl text-foreground">
          Message Received
        </h3>
        <p className="mt-4 text-muted-foreground max-w-md mx-auto">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-lg mx-auto">
      {/* Name Field */}
      <div>
        <label
          htmlFor="contact-name"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Your Name
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          required
          value={formData.name}
          onChange={handleInputChange}
          className="input-minimal"
          placeholder="John Doe"
        />
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="contact-email"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Email Address
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          required
          value={formData.email}
          onChange={handleInputChange}
          className="input-minimal"
          placeholder="john@company.com"
        />
      </div>

      {/* Company Field */}
      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleInputChange}
          className="input-minimal"
          placeholder="Acme Inc."
        />
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground mb-2"
        >
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleInputChange}
          className="input-minimal resize-none"
          placeholder="Tell us about your project or hiring needs..."
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="hero"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" size={18} />
            Sending...
          </>
        ) : (
          <>
            Start a Conversation
            <Send size={18} />
          </>
        )}
      </Button>
    </form>
  );
}
