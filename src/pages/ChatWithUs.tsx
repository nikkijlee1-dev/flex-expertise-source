import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check, Loader2, Phone } from "lucide-react";
import { useRecaptcha } from "@/hooks/useRecaptcha";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface CallbackFormData {
  name: string;
  phone: string;
  location: string;
  email: string;
  enquiry: string;
}

const ChatWithUs = () => {
  const [formData, setFormData] = useState<CallbackFormData>({
    name: "",
    phone: "",
    location: "",
    email: "",
    enquiry: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { token, resetRecaptcha, isLoaded } = useRecaptcha("callback-recaptcha");
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token) {
      toast({
        title: "Verification Required",
        description: "Please complete the reCAPTCHA verification.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          location: formData.location,
          enquiry: formData.enquiry,
          recaptchaToken: token,
          formType: "callback",
        },
      });

      if (error) throw error;

      setIsSubmitted(true);
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to send request. Please try again.",
        variant: "destructive",
      });
      resetRecaptcha();
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="section-padding min-h-[70vh] flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-lg mx-auto text-center py-16">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
                <Check className="text-primary" size={40} />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground">
                Thank You
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                A Blue Caye representative will contact you within 48 hours.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <span className="text-primary font-medium text-sm tracking-widest uppercase">
                Get in Touch
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mt-4 text-foreground">
                Chat with us Today
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Fill out the form below and one of our team members will be in touch to discuss your project requirements.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-8 max-w-lg mx-auto">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="callback-name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="callback-name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="input-minimal"
                  placeholder="John Smith"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label
                  htmlFor="callback-phone"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Phone *
                </label>
                <input
                  type="tel"
                  id="callback-phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="input-minimal"
                  placeholder="04## ### ###"
                />
              </div>

              {/* Location Field */}
              <div>
                <label
                  htmlFor="callback-location"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Location *
                </label>
                <input
                  type="text"
                  id="callback-location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleInputChange}
                  className="input-minimal"
                  placeholder="Sydney, NSW"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="callback-email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="callback-email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input-minimal"
                  placeholder="john@company.com"
                />
              </div>

              {/* Nature of Enquiry Field */}
              <div>
                <label
                  htmlFor="callback-enquiry"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Nature of Enquiry
                </label>
                <textarea
                  id="callback-enquiry"
                  name="enquiry"
                  rows={4}
                  value={formData.enquiry}
                  onChange={handleInputChange}
                  className="input-minimal resize-none"
                  placeholder="Tell us about your project or how we can help..."
                />
              </div>

              {/* reCAPTCHA Widget */}
              <div className="flex justify-center">
                <div id="callback-recaptcha"></div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="hero-accent"
                size="lg"
                className="w-full"
                disabled={isSubmitting || !token}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Submitting...
                  </>
                ) : (
                  <>
                    Request a Callback
                    <Phone size={18} />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ChatWithUs;
