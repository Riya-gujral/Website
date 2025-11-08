import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { toast } from "react-toastify";


export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="mb-4 tracking-wider">GET IN TOUCH</h2>
          <p className="max-w-2xl mx-auto opacity-70">
            Ready to book a session or have questions? I'd love to hear from you.
            Fill out the form below or reach out directly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-full">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="mb-1">Email</h3>
                <p className="opacity-70">ROHITCHAWLAPHOTOGRAPHY1@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-full">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="mb-1">Phone</h3>
                <p className="opacity-70">88998 58298</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-full">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="mb-1">Location</h3>
                <p className="opacity-70">Chandigarh</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {/* <form onSubmit={handleSubmit} className="space-y-6"> */}
            {/* <div> */}
              {/* <Input */}
                {/* name="name" */}
                {/* placeholder="Your Name" */}
                {/* value={formData.name} */}
                {/* onChange={handleChange} */}
                {/* required */}
              {/* /> */}
            {/* </div> */}

            {/* <div>
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div> */}

            {/* <div>
              <Input
                name="phone"
                type="tel"
                placeholder="Your Phone (Optional)"
                value={formData.phone}
                onChange={handleChange}
              />
            </div> */}

            {/* <div>
              <Textarea
                name="message"
                placeholder="Tell me about your project..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div> */}

            {/* <Button type="submit" className="w-full">
              Send Message
            </Button> */}
          {/* </form> */}
        </div>
      </div>
    </section>
  );
}
