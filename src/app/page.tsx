"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Certificate, Package, Phone, Shield, ShieldCheck, Star, Users, Wrench } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Products", id: "products" },
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Zbroya"
          button={{
            text: "Get Quote",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Professional Firearms & Services in Ukraine"
          description="Zbroya provides premium firearms, expert gunsmith services, and professional consultation for hunters, sport shooters, and security professionals across Ukraine."
          tag="Licensed Dealer"
          tagIcon={Shield}
          buttons={[
            { text: "View Catalog", href: "products" },
            { text: "Contact Us", href: "contact" }
          ]}
          imageSrc="https://images.pexels.com/photos/7714756/pexels-photo-7714756.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Three police officers in uniform smiling together outdoors, symbolizing community and law enforcement."
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="About Zbroya"
          description="With over 15 years of experience in the firearms industry, Zbroya stands as Ukraine's trusted partner for quality firearms and professional services."
          tag="Experience"
          tagIcon={Award}
          bulletPoints={[
            {
              title: "Licensed & Certified",
              description: "Fully licensed firearms dealer with all required certifications and permits",
              icon: Certificate
            },
            {
              title: "Expert Gunsmith Services",
              description: "Professional repair, modification, and maintenance services by certified gunsmiths",
              icon: Wrench
            },
            {
              title: "Quality Guarantee",
              description: "All products backed by manufacturer warranties and our quality assurance",
              icon: ShieldCheck
            },
            {
              title: "Professional Consultation",
              description: "Expert advice on firearm selection, legal compliance, and safety training",
              icon: Users
            }
          ]}
          imageSrc="https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Artistic workspace featuring calligraphy and digital design on a tablet and laptop."
          imagePosition="left"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Featured Products"
          description="Explore our carefully selected range of premium firearms and accessories from trusted manufacturers."
          tag="Catalog"
          tagIcon={Package}
          products={[
            {
              id: "1",
              brand: "Remington",
              name: "Model 700 Hunting Rifle",
              price: "₴45,000",
              rating: 5,
              reviewCount: "128",
              imageSrc: "https://images.pexels.com/photos/26830939/pexels-photo-26830939.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Antique rifle hanging on a wall, complemented by a small mirror reflection."
            },
            {
              id: "2",
              brand: "Glock",
              name: "G17 Gen5 Pistol",
              price: "₴32,000",
              rating: 5,
              reviewCount: "89",
              imageSrc: "https://images.pexels.com/photos/3926748/pexels-photo-3926748.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "A minimalist shot featuring a white toy gun being held in a human hand, isolated on a plain background."
            },
            {
              id: "3",
              brand: "Benelli",
              name: "Super Black Eagle III",
              price: "₴65,000",
              rating: 5,
              reviewCount: "56",
              imageSrc: "https://images.pexels.com/photos/6204731/pexels-photo-6204731.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "A hunter in camouflage aims a rifle in a foggy open field, showcasing outdoor hunting."
            },
            {
              id: "4",
              brand: "Leupold",
              name: "VX-3i Rifle Scope",
              price: "₴18,500",
              rating: 4,
              reviewCount: "234",
              imageSrc: "https://images.pexels.com/photos/11680871/pexels-photo-11680871.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Top view of military gear with gun holster and tactical belt on camouflage fabric."
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Trusted by professionals across Ukraine for quality products and expert service."
          tag="Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Viktor Petrov",
              role: "Professional Hunter",
              company: "Ukrainian Hunting Association",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7468182/pexels-photo-7468182.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of a smiling military veteran in uniform representing honor and patriotism."
            },
            {
              id: "2",
              name: "Sergiy Kovalenko",
              role: "Sport Shooter",
              company: "National Shooting Team",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/27836544/pexels-photo-27836544.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Close-up of a Dark Chanting Goshawk showcasing its vibrant orange beak and intense gaze."
            },
            {
              id: "3",
              name: "Oleksandr Melnyk",
              role: "Security Chief",
              company: "Corporate Security Ltd",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7714982/pexels-photo-7714982.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "A cheerful policewoman smiling confidently in her uniform against a concrete wall."
            },
            {
              id: "4",
              name: "Dmytro Shevchenko",
              role: "Law Enforcement",
              company: "National Police",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6620522/pexels-photo-6620522.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Two archers concentrate intensely during an indoor archery competition, showcasing skill and determination."
            },
            {
              id: "5",
              name: "Ivan Bondarenko",
              role: "Military Veteran",
              company: "Armed Forces of Ukraine",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5475777/pexels-photo-5475777.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "A focused professional in sunglasses and headset monitors cybersecurity in a neon-lit room."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get In Touch"
          tagIcon={Phone}
          title="Contact Zbroya Today"
          description="Ready to find the perfect firearm or need professional services? Our experts are here to help with personalized consultation and support."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Zbroya"
          columns={[
            {
              items: [
                { label: "Rifles", href: "products" },
                { label: "Pistols", href: "products" },
                { label: "Shotguns", href: "products" },
                { label: "Accessories", href: "products" }
              ]
            },
            {
              items: [
                { label: "Gunsmith Services", href: "services" },
                { label: "Repairs", href: "services" },
                { label: "Modifications", href: "services" },
                { label: "Consultation", href: "services" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Reviews", href: "testimonials" },
                { label: "Contact", href: "contact" },
                { label: "Location", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}