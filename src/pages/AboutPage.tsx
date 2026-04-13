import { Heart, Award, Users, Utensils } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import heroImage from "@/assets/hero-food.jpg";

const values = [
  { icon: Heart, title: "Passion for Tradition", desc: "Every dish carries the love and heritage of Tibetan cooking, passed through generations of culinary wisdom." },
  { icon: Award, title: "Quality Ingredients", desc: "We source the freshest ingredients daily to ensure authentic taste in every single bite." },
  { icon: Users, title: "Community First", desc: "We're proud to be part of the vibrant Humayunpur community and serve our neighbours with warmth." },
  { icon: Utensils, title: "Handcrafted with Care", desc: "From hand-folded momos to slow-simmered thukpa, everything is made fresh to order." },
];

const AboutPage = () => (
  <div className="pt-28 pb-20">
    <div className="container">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">About Us</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold mt-2">Our Story</h1>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">A taste of Tibet in the heart of Delhi</p>
          <div className="section-divider max-w-xs mx-auto mt-6" />
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 max-w-5xl mx-auto">
        <ScrollReveal direction="left">
          <div className="relative">
            <img src={gallery1} alt="Yo Tibet restaurant interior" className="rounded-2xl w-full h-80 object-cover shadow-xl" loading="lazy" />
            <img src={gallery2} alt="Chef preparing momos" className="absolute -bottom-6 -right-4 w-40 h-40 object-cover rounded-2xl border-4 border-background shadow-lg hidden md:block" loading="lazy" />
          </div>
        </ScrollReveal>
        <ScrollReveal direction="right">
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Yo Tibet was born from a simple dream — to bring the authentic flavors of the Tibetan plateau to
              the bustling streets of Delhi. Nestled in the vibrant lanes of Humayunpur, Safdarjung Enclave, our kitchen has
              been serving soul-warming momos, thukpa, and traditional Tibetan, Chinese, Bhutanese & Thai dishes.
            </p>
            <p>
              What started as a humble eatery quickly became a beloved neighbourhood spot, known for generous
              portions, bold flavors, and the warmest hospitality. Every recipe we serve has roots in Tibetan
              kitchens, prepared with time-honored techniques and the freshest ingredients.
            </p>
            <p className="font-medium text-foreground">
              At Yo Tibet, food is more than a meal — it's a connection to culture, community, and the majestic
              Himalayas.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Full-width image */}
      <ScrollReveal>
        <div className="relative rounded-2xl overflow-hidden mb-24 h-64 md:h-80 max-w-5xl mx-auto">
          <img src={heroImage} alt="Tibetan food spread" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 to-transparent flex items-center">
            <div className="p-8 md:p-12 max-w-md">
              <h2 className="text-3xl font-display font-bold text-primary-foreground mb-2">Made with Soul</h2>
              <p className="text-primary-foreground/70">Every dish at Yo Tibet is a labor of love, crafted to bring you closer to the Himalayan experience.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Values */}
      <ScrollReveal>
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Our Values</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">Why Choose Yo Tibet</h2>
          <div className="section-divider max-w-xs mx-auto mt-4" />
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {values.map((v, i) => (
          <ScrollReveal key={v.title} delay={i * 0.1}>
            <div className="p-8 rounded-2xl bg-card border border-border card-hover group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <v.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </div>
);

export default AboutPage;
