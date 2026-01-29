import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Check, Loader2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  linkedin: string;
  file: File | null;
}

export function CVUploadForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    linkedin: "",
    file: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFormData((prev) => ({ ...prev, file: e.dataTransfer.files[0] }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, file: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Integrate with backend - route to admin@bluecaye.com.au with file attachment
    // Simulate API call for now
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
          Application Received
        </h3>
        <p className="mt-4 text-muted-foreground max-w-md mx-auto">
          Thank you for your interest. We'll review your profile and reach out
          if there's a match.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-lg mx-auto">
      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleInputChange}
          className="input-minimal"
          placeholder="Jane Smith"
        />
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleInputChange}
          className="input-minimal"
          placeholder="jane@example.com"
        />
      </div>

      {/* LinkedIn Field */}
      <div>
        <label
          htmlFor="linkedin"
          className="block text-sm font-medium text-foreground mb-2"
        >
          LinkedIn Profile
        </label>
        <input
          type="url"
          id="linkedin"
          name="linkedin"
          value={formData.linkedin}
          onChange={handleInputChange}
          className="input-minimal"
          placeholder="https://linkedin.com/in/janesmith"
        />
      </div>

      {/* File Upload */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Upload CV (PDF or Word)
        </label>
        <div
          className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            dragActive
              ? "border-primary bg-primary/5"
              : formData.file
              ? "border-primary/50 bg-primary/5"
              : "border-border hover:border-primary/50"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            id="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />

          <Upload
            className={`mx-auto mb-4 ${
              formData.file ? "text-primary" : "text-muted-foreground"
            }`}
            size={32}
            strokeWidth={1.5}
          />

          {formData.file ? (
            <p className="text-foreground font-medium">{formData.file.name}</p>
          ) : (
            <>
              <p className="text-muted-foreground">
                Drag and drop your CV here, or{" "}
                <span className="text-primary font-medium">browse</span>
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                PDF, DOC, or DOCX (max 10MB)
              </p>
            </>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="hero-accent"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" size={18} />
            Submitting...
          </>
        ) : (
          "Submit Application"
        )}
      </Button>
    </form>
  );
}