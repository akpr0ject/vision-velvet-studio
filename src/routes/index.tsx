import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import hero from "@/assets/hero.jpg";
import story from "@/assets/story.jpg";
import s1 from "@/assets/showcase-1.jpg";
import s2 from "@/assets/showcase-2.jpg";
import s3 from "@/assets/showcase-3.jpg";
import s4 from "@/assets/showcase-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HK Wedding Films — Luxury Wedding Cinematography in Gujarat" },
      { name: "description", content: "Award-style cinematic wedding films & photography by HK Wedding Films. Based in Rajkot & Jamnagar, capturing weddings across India." },
    ],
  }),
  component: Home,
});

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  const links = [
    ["Work", "#showcase"],
    ["Story", "#story"],
    ["Packages", "#packages"],
    ["Contact", "#contact"],
  ];
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-emerald-ink/85 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="HK Production" className="h-10 w-auto md:h-12" />
          <span className="hidden text-eyebrow sm:inline">HK Wedding Films</span>
        </a>
        <nav className="hidden items-center gap-10 md:flex">
          {links.map(([l, h]) => (
            <a key={l} href={h} className="text-sm font-light tracking-wide text-ivory/80 transition-colors hover:text-gold">
              {l}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-none border border-gold/60 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.25em] text-gold transition-all hover:bg-gold hover:text-emerald-ink md:inline-block"
        >
          Enquire
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[680px] w-full overflow-hidden">
      <img
        src={hero}
        alt="Cinematic Indian bride at golden hour"
        className="absolute inset-0 h-full w-full object-cover animate-slow-zoom"
        width={1920}
        height={1280}
      />
      {/* Layered scrims for legible centered text */}
      <div className="absolute inset-0 bg-gradient-to-b from-wine-ink/70 via-wine-ink/30 to-wine-ink" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_55%,transparent,oklch(0.16_0.04_25/0.75))]" />

      {/* Editorial corner marks */}
      <div className="absolute left-6 top-24 z-10 hidden text-[10px] uppercase tracking-[0.4em] text-ivory/55 md:block lg:left-10">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-gold/60" />
          Est. 2017
        </div>
        <div className="mt-2 pl-11">Rajkot · Jamnagar</div>
      </div>
      <div className="absolute right-6 top-24 z-10 hidden text-right text-[10px] uppercase tracking-[0.4em] text-ivory/55 md:block lg:right-10">
        <div className="flex items-center justify-end gap-3">
          Vol. 08
          <span className="h-px w-8 bg-gold/60" />
        </div>
        <div className="mt-2 pr-11">A Film Studio</div>
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <div className="animate-fade-up relative flex flex-col items-center">
          {/* Oversized outlined backdrop word */}
          <span
            aria-hidden
            className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display text-[28vw] font-extrabold leading-none tracking-tighter sm:-top-16 sm:text-[22vw] lg:-top-24 lg:text-[18rem]"
            style={{
              WebkitTextStroke: "1px oklch(0.76 0.13 78 / 0.18)",
              color: "transparent",
            }}
          >
            forever
          </span>

          <span className="text-eyebrow relative">A HK Wedding Film</span>

          {/* Editorial mixed-weight headline */}
          <h1 className="relative mt-7 flex flex-col items-center gap-1 leading-[0.92] text-ivory">
            <span className="font-display text-[10vw] font-light italic tracking-tight text-ivory/85 sm:text-5xl lg:text-6xl">
              we film
            </span>
            <span className="font-display text-[18vw] font-extrabold uppercase tracking-[-0.04em] sm:text-8xl lg:text-[8.5rem]">
              love<span className="gold-text">.</span>
            </span>
            <span className="font-display text-[8vw] font-medium tracking-tight text-ivory/85 sm:text-4xl lg:text-5xl">
              not <em className="italic font-light gold-text">weddings.</em>
            </span>
          </h1>

          <div className="relative mt-8 flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-ivory/60">
            <span className="h-px w-10 bg-gold/60" />
            Cinematic · Editorial · Timeless
            <span className="h-px w-10 bg-gold/60" />
          </div>

          <p className="relative mt-7 max-w-md text-sm font-light leading-relaxed text-ivory/70">
            For couples who want their day remembered the way it actually felt —
            quiet, golden, and entirely their own.
          </p>

          <div className="relative mt-10 flex flex-col items-center gap-5 sm:flex-row sm:gap-8">
            <a
              href="#showcase"
              className="group inline-flex items-center gap-3 bg-gold px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-wine-ink transition-all hover:bg-gold-soft"
            >
              View Our Films
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="text-[11px] font-medium uppercase tracking-[0.3em] text-ivory/80 underline decoration-gold/50 underline-offset-8 transition-colors hover:text-gold"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-center">
        <div className="mx-auto h-10 w-px bg-gradient-to-b from-transparent to-gold/60" />
        <span className="mt-2 block text-[10px] tracking-[0.4em] text-ivory/50 uppercase">Scroll</span>
      </div>

    </section>
  );
}


function Marquee() {
  const words = ["Cinematic", "Timeless", "Editorial", "Soulful", "Crafted", "Heirloom", "Unhurried", "Golden"];
  const row = [...words, ...words];
  return (
    <div className="relative overflow-hidden border-y border-gold/20 bg-wine-deep/40 py-8">
      <div className="flex w-max animate-marquee gap-14 whitespace-nowrap pr-14 font-display text-3xl italic text-gold/85 sm:text-4xl lg:text-5xl">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-14">
            <span className="font-extralight">{w}</span>
            <svg width="18" height="18" viewBox="0 0 24 24" className="text-gold/60" aria-hidden>
              <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" fill="currentColor" />
            </svg>
          </span>
        ))}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}


function Story() {
  return (
    <section id="story" className="relative overflow-hidden py-28 lg:py-40">
      {/* Oversized backdrop word */}
      <div
        aria-hidden
        className="font-display pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[22vw] font-extrabold uppercase leading-none tracking-tighter"
        style={{ WebkitTextStroke: "1px oklch(0.76 0.13 78 / 0.10)", color: "transparent" }}
      >
        Chapter 01
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Top editorial bar */}
        <div className="flex items-end justify-between border-b border-gold/20 pb-6">
          <span className="text-eyebrow text-gold">— The Studio · Est. 2017</span>
          <span className="hidden text-[10px] uppercase tracking-[0.4em] text-ivory/40 md:block">Ahmedabad · Gujarat</span>
        </div>

        <div className="mt-16 grid gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Left: layered images + vertical label */}
          <div className="relative lg:col-span-5">
            {/* Vertical label */}
            <div className="absolute -left-2 top-0 hidden h-full lg:block">
              <span
                className="text-eyebrow block whitespace-nowrap text-ivory/40"
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                Vol. 08 — A Quiet Cinema
              </span>
            </div>

            <div className="relative lg:pl-12">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={story}
                  alt="Bride and groom holding hands"
                  className="h-full w-full object-cover grayscale-[15%] transition duration-700 hover:grayscale-0"
                  loading="lazy"
                  width={1200}
                  height={1600}
                />
                {/* Caption tag */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-wine-ink/70 px-3 py-2 backdrop-blur">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/80">Fig. 01 / Mehndi</span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gold">35mm · f/1.4</span>
                </div>
              </div>

              {/* Floating polaroid */}
              <div className="absolute -bottom-10 -right-4 hidden w-40 rotate-[6deg] border-[6px] border-ivory/95 shadow-2xl shadow-wine-ink/60 md:block lg:w-48">
                <div className="aspect-[3/4] overflow-hidden bg-wine-deep">
                  <img src={story} alt="" aria-hidden className="h-full w-full scale-150 object-cover object-left" />
                </div>
                <div className="bg-ivory/95 px-2 py-1 text-center text-[9px] uppercase tracking-[0.25em] text-wine-ink">
                  forever &amp; ever
                </div>
              </div>

              {/* Corner marks */}
              <div className="pointer-events-none absolute -left-3 -top-3 h-10 w-10 border-l-2 border-t-2 border-gold lg:left-9" />
              <div className="pointer-events-none absolute -right-3 -bottom-3 h-10 w-10 border-b-2 border-r-2 border-gold" />
            </div>
          </div>

          {/* Right: copy */}
          <div className="lg:col-span-7 lg:pl-8">
            <div className="flex items-baseline gap-4">
              <span className="font-display text-5xl font-extralight text-gold/60">“</span>
              <span className="text-eyebrow text-ivory/60">A Note From The Studio</span>
            </div>

            <h2 className="font-display mt-6 text-4xl leading-[1.05] text-ivory sm:text-5xl lg:text-[5.5rem]">
              A wedding is a <span className="italic font-light text-ivory/85">single day.</span>
              <br />
              <span className="relative inline-block">
                <span className="italic gold-text">A film is forever</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="14"
                  viewBox="0 0 400 14"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M2 9 C 100 1, 200 14, 398 5"
                    stroke="oklch(0.76 0.13 78)"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="text-gold">.</span>
            </h2>

            <div className="mt-10 grid gap-8 sm:grid-cols-[auto_1fr]">
              <div className="hidden sm:block">
                <div className="font-display text-6xl font-extrabold leading-none text-gold/80">B</div>
                <span className="mt-3 block h-px w-10 bg-gold/40" />
              </div>
              <p className="text-base font-light leading-relaxed text-ivory/75 lg:text-[17px]">
                <span className="sm:hidden">B</span>orn from a love for cinema and the quiet beauty of Indian rituals,
                HK Wedding Films approaches every wedding as a story waiting to be told.
                We don't direct — <em className="italic text-ivory/90">we observe.</em> We don't pose —
                <em className="italic text-ivory/90"> we listen.</em> The result is unhurried, deeply personal
                imagery that feels less like a wedding video and more like a memory you can return to.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-10 flex items-center gap-4">
              <span
                className="font-display text-3xl italic font-light text-gold"
                style={{ fontFamily: "'Plus Jakarta Sans', serif" }}
              >
                Harsh K.
              </span>
              <span className="h-px w-12 bg-gold/40" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/50">Founder · Director</span>
            </div>

            {/* Stats — editorial */}
            <div className="relative mt-16 grid grid-cols-3">
              {[
                ["120+", "Weddings", "01"],
                ["8 Yrs", "Crafting", "02"],
                ["Pan", "India", "03"],
              ].map(([n, l, i], idx) => (
                <div
                  key={l}
                  className={`relative px-4 py-2 ${idx > 0 ? "border-l border-gold/15" : ""}`}
                >
                  <span className="absolute right-3 top-0 text-[10px] tracking-[0.2em] text-ivory/30">{i}</span>
                  <div className="font-display text-3xl font-extrabold text-ivory lg:text-4xl">
                    {n}
                  </div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-gold/80">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    { t: "Cinematic Films", d: "Long-form wedding films composed like cinema — rhythm, music, restraint." },
    { t: "Editorial Photography", d: "Quiet, candid frames that capture emotion before it ends." },
    { t: "Pre-Wedding Stories", d: "Concept-driven shoots that introduce you as a couple, not just a portrait." },
    { t: "Aerial & Drone", d: "Sweeping perspectives of your venue, mandap, and the day itself." },
    { t: "Highlight Teasers", d: "Two to three minute reels — share-ready, beautifully cut." },
    { t: "Heirloom Albums", d: "Hand-finished printed albums made to outlast every device." },
  ];
  return (
    <section className="relative border-y border-border bg-emerald-deep/40 py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-eyebrow">What We Do</span>
          <h2 className="font-display mt-6 text-4xl leading-tight text-ivory sm:text-5xl lg:text-6xl">
            Every craft, <em className="italic gold-text">under one roof.</em>
          </h2>
        </div>
        <div className="mt-20 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <div key={it.t} className="group bg-emerald-ink p-10 transition-colors hover:bg-emerald-deep/60 lg:p-12">
              <div className="font-display text-xs italic text-gold">0{i + 1}</div>
              <h3 className="font-display mt-6 text-2xl text-ivory lg:text-3xl">{it.t}</h3>
              <p className="mt-4 text-sm font-light leading-relaxed text-ivory/70">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  // Bento grid of work — cinematic frames
  return (
    <section id="showcase" className="relative py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-eyebrow">Selected Work</span>
            <h2 className="font-display mt-6 text-4xl leading-tight text-ivory sm:text-5xl lg:text-6xl">
              The <em className="italic gold-text">archive.</em>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/hk.weddingfilms"
            target="_blank"
            rel="noreferrer"
            className="text-xs uppercase tracking-[0.3em] text-ivory/70 transition-colors hover:text-gold"
          >
            Follow on Instagram →
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-6 sm:gap-5">
          <Frame src={s1} alt="Mandap at night" className="sm:col-span-4 sm:row-span-2 aspect-[16/10] sm:aspect-auto sm:min-h-[520px]" />
          <Frame src={s2} alt="Bride portrait" className="sm:col-span-2 aspect-[3/4]" />
          <Frame src={s3} alt="Groom on horseback" className="sm:col-span-2 aspect-[3/4]" />
          <Frame src={hero} alt="Bride detail" className="sm:col-span-3 aspect-[4/3]" />
          <Frame src={s4} alt="Aerial venue" className="sm:col-span-3 aspect-[4/3]" />
        </div>

        {/* Instagram embed */}
        <div className="mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-eyebrow">Live from the Studio</span>
            <h3 className="font-display mt-5 text-3xl text-ivory sm:text-4xl">
              @hk.weddingfilms
            </h3>
            <p className="mt-4 text-sm font-light text-ivory/70">
              Our latest reels, behind-the-scenes, and freshly graded frames.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <InstaCard handle="hk.weddingfilms" />
            <InstaCard handle="hk.weddingfilms" />
            <InstaCard handle="hk.weddingfilms" />
          </div>
          <div className="mt-10 text-center">
            <a
              href="https://www.instagram.com/hk.weddingfilms"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 border border-gold/60 px-8 py-4 text-xs font-medium uppercase tracking-[0.3em] text-gold transition-all hover:bg-gold hover:text-emerald-ink"
            >
              View Full Instagram Feed →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Frame({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <figure className={`group relative overflow-hidden hover-lift ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-ink/70 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-90" />
      <figcaption className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[0.3em] text-ivory/80">
        {alt}
      </figcaption>
    </figure>
  );
}

function InstaCard({ handle }: { handle: string }) {
  return (
    <a
      href={`https://www.instagram.com/${handle}`}
      target="_blank"
      rel="noreferrer"
      className="group block aspect-square border border-border bg-emerald-deep/40 p-8 transition-all hover:border-gold/60"
    >
      <div className="flex h-full flex-col justify-between">
        <div className="text-gold">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-8 w-8">
            <rect x="3" y="3" width="18" height="18" rx="4" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
          </svg>
        </div>
        <div>
          <div className="font-display text-xl italic text-ivory">Latest Reel</div>
          <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-ivory/60">
            @{handle} →
          </div>
        </div>
      </div>
    </a>
  );
}

function Packages() {
  const tiers = [
    {
      name: "Silver",
      price: "75,000",
      tagline: "The essentials, beautifully captured.",
      features: [
        "Traditional Photography",
        "Traditional Videography",
        "30-Page Album · 250 Photos",
        "Full Movie · 2.5–3 Hours",
      ],
    },
    {
      name: "Gold",
      price: "1,75,000",
      tagline: "Our most-loved cinematic package.",
      featured: true,
      features: [
        "Traditional Photography & Videography",
        "Cinematic Videography",
        "Candid Shoot",
        "Drone Shoot — 1 Day",
        "30-Page Album · 300 Photos",
        "Highlight + Teaser",
        "Full Movie · 2.5–3 Hours",
      ],
    },
    {
      name: "Diamond",
      price: "2,55,000",
      tagline: "The full HK heirloom experience.",
      features: [
        "Traditional & Cinematic Coverage",
        "Candid + Crowd Capture",
        "AI Photo Scan",
        "Drone Shoot — 1 Day",
        "40-Page Album · 400 Photos + Pen Drive",
        "Pre-Wedding Shoot — 1 Day",
        "10-Day Countdown Photos + Cinematic Video",
        "Highlight + Teaser",
        "Full Movie · 2.5–3 Hours",
      ],
    },
  ];

  return (
    <section id="packages" className="relative border-t border-border py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-eyebrow">Wedding Investment</span>
          <h2 className="font-display mt-6 text-4xl leading-tight text-ivory sm:text-5xl lg:text-6xl">
            Three ways to <em className="italic gold-text">remember.</em>
          </h2>
          <p className="mt-6 text-sm font-light text-ivory/70">
            Every package is a starting point. We're happy to tailor coverage to your dates, venues and rituals.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {tiers.map((t) => (
            <article
              key={t.name}
              className={`relative flex flex-col border p-10 transition-all hover-lift lg:p-12 ${
                t.featured
                  ? "border-gold bg-gradient-to-b from-emerald-deep/80 to-emerald-ink"
                  : "border-border bg-emerald-deep/30"
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold px-4 py-1 text-[10px] uppercase tracking-[0.3em] text-emerald-ink">
                  Most Booked
                </div>
              )}
              <div className="text-eyebrow">{t.name} Package</div>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-sm text-gold">₹</span>
                <span className="font-display text-5xl text-ivory lg:text-6xl">{t.price}</span>
              </div>
              <p className="mt-3 font-display italic text-ivory/70">{t.tagline}</p>
              <span className="gold-divider mt-8" />
              <ul className="mt-8 flex-1 space-y-4">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm font-light text-ivory/85">
                    <span className="mt-1.5 inline-block h-1 w-3 shrink-0 bg-gold" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-10 inline-flex w-full items-center justify-center px-6 py-4 text-xs font-medium uppercase tracking-[0.3em] transition-all ${
                  t.featured
                    ? "bg-gold text-emerald-ink hover:bg-gold-soft"
                    : "border border-gold/60 text-gold hover:bg-gold hover:text-emerald-ink"
                }`}
              >
                Reserve {t.name}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    {
      q: "They didn't just film our wedding — they remembered it for us. We cry every time we watch the highlight.",
      a: "Aanya & Vivaan",
      l: "Udaipur",
    },
    {
      q: "Calm, kind, and so unbelievably talented. Every frame feels like a painting.",
      a: "Riya & Karan",
      l: "Jamnagar",
    },
    {
      q: "Worth every rupee. The album is the most beautiful thing in our home.",
      a: "Meher & Arjun",
      l: "Ahmedabad",
    },
  ];
  return (
    <section className="relative border-y border-border bg-emerald-deep/40 py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-10">
        <span className="text-eyebrow">Kind Words</span>
        <div className="mt-12 grid gap-12 lg:grid-cols-3">
          {quotes.map((t) => (
            <figure key={t.a} className="flex flex-col items-center">
              <div className="font-display text-5xl text-gold/60">"</div>
              <blockquote className="font-display mt-4 text-xl italic leading-relaxed text-ivory lg:text-2xl">
                {t.q}
              </blockquote>
              <figcaption className="mt-8">
                <div className="text-sm font-medium text-gold">{t.a}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-ivory/60">{t.l}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <span className="text-eyebrow">Begin</span>
            <h2 className="font-display mt-6 text-4xl leading-tight text-ivory sm:text-5xl lg:text-6xl">
              Tell us your <em className="italic gold-text">love story.</em>
            </h2>
            <p className="mt-6 max-w-md text-base font-light leading-relaxed text-ivory/75">
              We take on a limited number of weddings each season. Reach out
              early — especially for winter dates — and we'll send our full
              brochure within 24 hours.
            </p>
            <div className="mt-12 space-y-6 border-t border-border pt-10">
              <ContactRow label="Studio">
                603 Nageswar Prabhu Palace, Ghanteshwar,<br />
                Jamnagar — Rajkot, Gujarat 360006, India
              </ContactRow>
              <ContactRow label="Instagram">
                <a href="https://www.instagram.com/hk.weddingfilms" target="_blank" rel="noreferrer" className="text-gold hover:underline">@hk.weddingfilms</a>
              </ContactRow>
              <ContactRow label="Email">
                <a href="mailto:hello@hkweddingfilms.com" className="text-gold hover:underline">hello@hkweddingfilms.com</a>
              </ContactRow>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget as HTMLFormElement);
              const body = `Name: ${data.get("name")}%0AEmail: ${data.get("email")}%0APhone: ${data.get("phone")}%0ADate: ${data.get("date")}%0APackage: ${data.get("pkg")}%0AMessage: ${data.get("msg")}`;
              window.location.href = `mailto:hello@hkweddingfilms.com?subject=Wedding Enquiry — ${data.get("name")}&body=${body}`;
            }}
            className="border border-border bg-emerald-deep/40 p-8 lg:p-12"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Your Name" name="name" required />
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Email" name="email" type="email" required />
              <Field label="Wedding Date" name="date" type="date" />
            </div>
            <Field label="Package" name="pkg" as="select">
              <option className="bg-emerald-ink">Silver — ₹75,000</option>
              <option className="bg-emerald-ink">Gold — ₹1,75,000</option>
              <option className="bg-emerald-ink">Diamond — ₹2,55,000</option>
              <option className="bg-emerald-ink">Not sure yet</option>
            </Field>
            <Field label="Tell us about your wedding" name="msg" as="textarea" />
            <button
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center bg-gold px-8 py-4 text-xs font-medium uppercase tracking-[0.3em] text-emerald-ink transition-all hover:bg-gold-soft"
            >
              Send Enquiry →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[100px_minmax(0,1fr)] gap-6">
      <div className="text-[10px] uppercase tracking-[0.3em] text-ivory/50 pt-1">{label}</div>
      <div className="text-sm font-light leading-relaxed text-ivory/85">{children}</div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  as = "input",
  children,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  as?: "input" | "textarea" | "select";
  children?: React.ReactNode;
}) {
  const baseCls =
    "mt-2 w-full border-b border-border bg-transparent px-0 py-3 text-sm font-light text-ivory placeholder:text-ivory/40 focus:border-gold focus:outline-none transition-colors";
  const wrap = as === "input" ? "" : "mt-6 sm:col-span-2";
  return (
    <label className={`block ${wrap}`}>
      <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/60">{label}</span>
      {as === "input" && <input name={name} type={type} required={required} className={baseCls} />}
      {as === "textarea" && <textarea name={name} rows={4} className={baseCls} />}
      {as === "select" && (
        <select name={name} className={baseCls}>
          {children}
        </select>
      )}
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left lg:px-10">
        <div className="flex items-center gap-4">
          <img src={logo} alt="HK Production" className="h-10 w-auto" />
          <div className="text-[10px] uppercase tracking-[0.3em] text-ivory/50">
            HK Wedding Films · Gujarat
          </div>
        </div>
        <div className="text-[10px] uppercase tracking-[0.3em] text-ivory/40">
          © {new Date().getFullYear()} HK Production · Crafted with care
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Story />
        <Services />
        <Showcase />
        <Packages />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
