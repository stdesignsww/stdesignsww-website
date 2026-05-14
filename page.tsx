"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shirt, Palette, Truck, CheckCircle, Mail, Phone, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function STDesignswwWebsite() {
  const services = [
    "Custom t-shirts",
    "Hoodies & sweatshirts",
    "Work apparel",
    "Team uniforms",
    "Promotional merchandise",
    "Logo placement & mockups",
  ];

  const process = [
    {
      title: "Tell Us Your Apparel Preference",
      text: "Already have a preferred clothing brand? We can work around your style, budget, and quality goals.",
    },
    {
      title: "We Create Design Concepts",
      text: "If you do not have a design ready, STdesignsww can create clean, professional mockup options for your business.",
    },
    {
      title: "Approve & Order",
      text: "Once you choose a design and apparel option, we coordinate production and help bring your branded apparel to life.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#161814] text-white">
      <header className="sticky top-0 z-50 border-b border-[#4b5242]/50 bg-[#161814]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-slate-950 font-black">ST</div>
            <div>
              <p className="text-lg font-bold tracking-wide">STdesignsww</p>
              <p className="text-xs text-[#8f9681]">Custom Apparel & Branding</p>
            </div>
          </div>
          <a href="mailto:stdesignsww@gmail.com">
            <Button className="rounded-2xl bg-[#55613a] px-5 py-2 text-white hover:bg-[#657547]">
              Contact Us
            </Button>
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#5a624d]/40 bg-olive-900/30 px-4 py-2 text-sm text-[#c7cbbd]">
              <Sparkles className="h-4 w-4" /> Professional custom apparel for businesses
            </div>
            <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Wear Your Brand With Confidence.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#c7cbbd]">
              STdesignsww helps businesses design and order custom t-shirts, hoodies, work apparel, uniforms, and promotional clothing that look clean, professional, and brand-ready.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="mailto:stdesignsww@gmail.com?subject=Custom Apparel Inquiry">
                <Button className="w-full rounded-2xl bg-[#55613a] px-7 py-6 text-base font-bold text-white hover:bg-[#657547] sm:w-auto">
                  Request a Free Mockup
                </Button>
              </a>
              <a href="#services">
                <Button variant="outline" className="w-full rounded-2xl border-white/20 bg-transparent px-7 py-6 text-base text-white hover:bg-[#23261f]/80 sm:w-auto">
                  View Services
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[3rem] bg-[#23261f]/80 blur-3xl" />
            <Card className="relative overflow-hidden rounded-[2rem] border-[#5a624d]/40 bg-[#23261f]/80 shadow-2xl backdrop-blur">
              <CardContent className="p-8">
                <div className="rounded-[2rem] bg-[#2b3026] p-8 text-center">
                  <Shirt className="mx-auto h-24 w-24 text-white" />
                  <h2 className="mt-6 text-3xl font-black text-white">Custom Apparel Made Simple</h2>
                  <p className="mt-4 text-[#c7cbbd]">
                    Choose your preferred apparel brand, or let us recommend basic, professional options that fit your business.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section id="services" className="border-y border-[#4b5242]/50 bg-[#1d2118] px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#8f9681]">What We Offer</p>
              <h2 className="mt-3 text-4xl font-black md:text-5xl">Custom apparel for every kind of business.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Card key={service} className="rounded-2xl border-[#4b5242]/50 bg-[#2b3026]/80 text-white">
                  <CardContent className="flex items-center gap-3 p-5">
                    <CheckCircle className="h-5 w-5 shrink-0" />
                    <span className="font-semibold">{service}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 md:grid-cols-3">
            {process.map((item, index) => (
              <Card key={item.title} className="rounded-[2rem] border-[#5a624d]/40 bg-[#23261f]/80 text-white shadow-xl">
                <CardContent className="p-8">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl font-black text-slate-950">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-black">{item.title}</h3>
                  <p className="mt-4 leading-7 text-[#c7cbbd]">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-[#c9c1ab] px-6 py-20 text-[#1b1f1a]">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-slate-500">Apparel Options</p>
              <h2 className="mt-3 text-4xl font-black md:text-5xl">Have a favorite brand? We can start there.</h2>
              <p className="mt-6 text-lg leading-8 text-[#2d322b]">
                If your company already prefers certain apparel brands, fits, colors, or materials, we will build around that. If not, we can recommend simple, clean, and budget-friendly options.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="rounded-3xl bg-[#8d8a73]/30 border border-[#6d715d]/40 backdrop-blur p-6">
                <Palette className="mb-4 h-8 w-8" />
                <h3 className="text-xl font-black">Basic Design Concepts</h3>
                <p className="mt-2 text-[#2d322b]">Simple logo placement, clean front/back designs, and professional mockups.</p>
              </div>
              <div className="rounded-3xl bg-[#8d8a73]/30 border border-[#6d715d]/40 backdrop-blur p-6">
                <Truck className="mb-4 h-8 w-8" />
                <h3 className="text-xl font-black">Order Coordination</h3>
                <p className="mt-2 text-[#2d322b]">We help organize apparel choices, design approval, and order details.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h2 className="text-4xl font-black md:text-6xl">Ready to upgrade your business apparel?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#c7cbbd]">
            Contact STdesignsww to request custom apparel ideas, mockups, and order options for your team or business.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="mailto:stdesignsww@gmail.com?subject=Custom Apparel Inquiry">
              <Button className="rounded-2xl bg-[#55613a] px-8 py-6 text-base font-bold text-white hover:bg-[#657547]">
                <Mail className="mr-2 h-5 w-5" /> Email STdesignsww
              </Button>
            </a>
            <div className="flex items-center gap-2 text-[#c7cbbd]">
              <Phone className="h-5 w-5" /> 903-720-0971
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#4b5242]/50 px-6 py-8 text-center text-sm text-[#8f9681]">
        © {new Date().getFullYear()} STdesignsww. Custom Apparel & Branding Solutions.
      </footer>
    </div>
  );
}
