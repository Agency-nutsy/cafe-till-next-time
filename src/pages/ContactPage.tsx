import { MapPin, Phone, MessageCircle, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const PHONE = "+919990613558";
const PHONE_DISPLAY = "+91 99906 13558";
const ADDRESS = "119-A, Upper Ground Floor, Village, near N.C.C. Gate, Humayunpur, Safdarjung Enclave, New Delhi, Delhi 110029";
const MAPS_LINK = "https://maps.app.goo.gl/xsVmj4CSmqm1PCvb7";
const MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.7!2d77.1939429!3d28.5608759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d89cd4a817b%3A0xc77f5b9b288abfdf!2sYo%20Tibet!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";
const WHATSAPP = "https://wa.me/919990613558";
const INSTAGRAM = "https://www.instagram.com/yotibet_";

const ContactPage = () => {
  return (
    <div className="pt-28 pb-20">
      <div className="container max-w-4xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mt-2">Contact Us</h1>
            <p className="text-muted-foreground mt-3 max-w-md mx-auto">Have a question or want to place an order? Reach out to us directly.</p>
            <div className="section-divider max-w-xs mx-auto mt-6" />
          </div>
        </ScrollReveal>

        {/* Action Buttons */}
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-12">
            <motion.a
              href={`tel:${PHONE}`}
              className="flex items-center justify-center gap-3 rounded-2xl bg-primary text-primary-foreground px-6 py-5 font-semibold text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone size={22} />
              Call Us
            </motion.a>
            <motion.a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] text-white px-6 py-5 font-semibold text-lg shadow-lg shadow-[#25D366]/20 hover:shadow-xl hover:shadow-[#25D366]/30 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle size={22} />
              WhatsApp Us
            </motion.a>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Info Cards */}
          <ScrollReveal direction="left">
            <div className="space-y-4">
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Address</h4>
                  <p className="text-sm text-muted-foreground">{ADDRESS}</p>
                </div>
              </a>
              <a href={`tel:${PHONE}`} className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Phone</h4>
                  <p className="text-sm text-muted-foreground">{PHONE_DISPLAY}</p>
                </div>
              </a>

              <div className="p-5 rounded-2xl bg-card border border-border">
                <h4 className="font-semibold text-sm mb-3">Follow Us</h4>
                <div className="flex gap-3">
                  <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Google Maps */}
          <ScrollReveal direction="right">
            <div className="rounded-2xl overflow-hidden border border-border h-72 md:h-full min-h-[280px]">
              <iframe
                src={MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Yo Tibet Location"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
