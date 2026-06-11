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

          <span className="text-eyebrow relative">{"\n"}</span>

          {/* Editorial mixed-weight headline */}
          <h1 className="relative mt-7 flex flex-col items-center gap-1 leading-[0.92] text-ivory">
            <span className="font-display text-[10vw] font-light italic tracking-tight text-ivory/85 sm:text-5xl lg:text-6xl">
              we film
            </span>
            <span className="font-display text-[18vw] font-extrabold uppercase tracking-[-0.04em] sm:text-8xl lg:text-[8.5rem]">
              LOVE<span className="gold-text">.</span>
            </span>
            <span className="font-display text-[8vw] font-medium tracking-tight text-ivory/85 sm:text-4xl lg:text-5xl">
              and <em className="italic font-light gold-text">weddings.</em>
            </span>
          </h1>

          <div className="relative mt-8 flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-ivory/60">
            <span className="h-px w-10 bg-gold/60" />
            CINEMATIC · EDITORIAL · TIMELESS
            <span className="h-px w-10 bg-gold/60" />
          </div>

          <p className="relative mt-7 max-w-md text-sm font-light leading-relaxed text-ivory/70">
            For couples who want their day remembered the way it actually felt — quiet, golden, and entirely their own.
          </p>

          <div className="relative mt-10 flex flex-col items-center gap-5 sm:flex-row sm:gap-8">
            <a
              href="#showcase"
              className="group inline-flex items-center gap-3 bg-gold px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-wine-ink transition-all hover:bg-gold-soft"
            >
              VIEW OUR FILMS
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="text-[11px] font-medium uppercase tracking-[0.3em] text-ivory/80 underline decoration-gold/50 underline-offset-8 transition-colors hover:text-gold"
            >
              BOOK A CONSULTATION
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-center">
        <div className="mx-auto h-10 w-px bg-gradient-to-b from-transparent to-gold/60" />
        <span className="mt-2 block text-[10px] tracking-[0.4em] text-ivory/50 uppercase">{"\n"}</span>
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

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Top editorial bar */}
        <div className="flex items-end justify-between border-b border-gold/20 pb-6">
          <span className="text-eyebrow text-gold">{"\n"}</span>
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
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-gold/60" />
              <span className="text-eyebrow text-gold/90">{"\n"}</span>
            </div>

            {/* Editorial serif headline */}
            <h2 className="mt-8 text-ivory">
              {"\n"}
            </h2>

            <div className="mt-14 grid gap-8 sm:grid-cols-[auto_1fr]">
              <div className="hidden sm:block">
                <div className="font-serif text-7xl font-light leading-none text-gold">B</div>
                <span className="mt-3 block h-px w-10 bg-gold/40" />
              </div>
              <p className="text-base font-light leading-[1.85] text-ivory/75 lg:text-[17px]">
                <span className="sm:hidden font-serif text-3xl text-gold">B</span>orn from a love for cinema and the quiet beauty of Indian rituals, HK Wedding Films approaches every wedding as a story waiting to be told. We don't direct — we observe.We don't pose — we listen.The result is unhurried, deeply personal imagery that feels less like a wedding video and more like a memory you can return to.
              </p>
            </div>

            {/* Stats — editorial */}
            <div className="relative mt-16 grid grid-cols-3">
              {[
                ["120+", "WEDDINGS", "01"],
                ["8 Yrs", "CRAFTING", "02"],
                ["Pan", "INDIA", "03"],
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
    { t: "Cinematic Films", d: "Long-form wedding films composed like cinema — rhythm, music, restraint.", icon: "🎞" },
    { t: "Editorial Photography", d: "Quiet, candid frames that capture emotion before it ends.", icon: "📷" },
    { t: "Pre-Wedding Stories", d: "Concept-driven shoots that introduce you as a couple, not just a portrait.", icon: "✶" },
    { t: "Aerial & Drone", d: "Sweeping perspectives of your venue, mandap, and the day itself.", icon: "◐" },
    { t: "Highlight Teasers", d: "Two to three minute reels — share-ready, beautifully cut.", icon: "▶" },
    { t: "Heirloom Albums", d: "Hand-finished printed albums made to outlast every device.", icon: "❖" },
  ];
  return (
    <section className="relative overflow-hidden border-y border-gold/15 bg-wine-deep/40 py-28 lg:py-40">
      {/* Backdrop chapter mark */}
      <div
        aria-hidden
        className="font-display pointer-events-none absolute -right-10 top-10 select-none text-[14rem] font-extrabold leading-none tracking-tighter text-gold/[0.05] lg:text-[20rem]"
      >
        02
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold/60" />
              <span className="text-eyebrow text-gold">{"\n"}</span>
            </div>
            <h2 className="font-display mt-6 text-4xl leading-[1.05] text-ivory sm:text-5xl lg:text-[5rem]">
              Every craft, <br />
              <em className="italic gold-text font-light">under one roof.</em>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="text-base font-light leading-relaxed text-ivory/70">
              A small, devoted team of cinematographers, photographers and editors —
              moving as one unit, so every ritual is held with the same quiet attention.
            </p>
          </div>
        </div>

        {/* Editorial split list */}
        <div className="mt-20 divide-y divide-gold/15 border-y border-gold/15">
          {items.map((it, i) => (
            <div
              key={it.t}
              className="group grid cursor-default grid-cols-12 items-center gap-6 py-8 transition-colors hover:bg-wine-ink/40 lg:py-10"
            >
              <div className="col-span-2 font-display text-sm italic text-gold/70 lg:col-span-1 lg:text-base">
                / 0{i + 1}
              </div>
              <h3 className="font-display col-span-10 text-2xl text-ivory transition-transform duration-500 group-hover:translate-x-2 lg:col-span-5 lg:text-4xl">
                {it.t}
              </h3>
              <p className="col-span-12 text-sm font-light leading-relaxed text-ivory/65 lg:col-span-5 lg:text-[15px]">
                {it.d}
              </p>
              <div className="col-span-12 hidden text-right text-2xl text-gold/40 transition-colors group-hover:text-gold lg:col-span-1 lg:block">
                →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Showcase() {
  const frames = [
    { src: s1, alt: "Mandap at night", cls: "sm:col-span-4 sm:row-span-2 aspect-[16/10] sm:aspect-auto sm:min-h-[560px]", tag: "Reel 01 · Mandap", loc: "Udaipur" },
    { src: s2, alt: "Bride portrait", cls: "sm:col-span-2 aspect-[3/4]", tag: "Reel 02 · Portrait", loc: "Jamnagar" },
    { src: s3, alt: "Groom on horseback", cls: "sm:col-span-2 aspect-[3/4]", tag: "Reel 03 · Baraat", loc: "Rajkot" },
    { src: hero, alt: "Bride detail", cls: "sm:col-span-3 aspect-[4/3]", tag: "Reel 04 · Details", loc: "Ahmedabad" },
    { src: s4, alt: "Aerial venue", cls: "sm:col-span-3 aspect-[4/3]", tag: "Reel 05 · Aerial", loc: "Pan India" },
  ];
  return (
    <section id="showcase" className="relative overflow-hidden py-28 lg:py-40">
      {/* Backdrop word */}
      <div
        aria-hidden
        className="font-display pointer-events-none absolute -left-6 top-16 select-none whitespace-nowrap text-[14vw] font-extrabold uppercase leading-none tracking-tighter"
        style={{ WebkitTextStroke: "1px oklch(0.76 0.13 78 / 0.08)", color: "transparent" }}
      >
        The Archive
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-gold/15 pb-6">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold/60" />
              <span className="text-eyebrow text-gold">{"\n"}</span>
            </div>
            <h2 className="font-display mt-6 text-4xl leading-[1.05] text-ivory sm:text-5xl lg:text-[5rem]">
              The <em className="italic gold-text font-light">archive.</em>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/hk.weddingfilms"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-ivory/70 transition-colors hover:text-gold"
          >
            <span className="h-px w-8 bg-gold/40 transition-all group-hover:w-14 group-hover:bg-gold" />
            Follow on Instagram
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-6 sm:gap-5">
          {frames.map((f, i) => (
            <Frame key={i} num={i + 1} {...f} className={f.cls} />
          ))}
        </div>

        {/* Instagram strip */}
        <div className="mt-24 border-t border-gold/15 pt-16">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-gold/60" />
                <span className="text-eyebrow text-gold">{"\n"}</span>
              </div>
              <h3 className="font-display mt-5 text-3xl text-ivory sm:text-5xl">
                <span className="italic font-light">@</span>hk.weddingfilms
              </h3>
              <p className="mt-4 max-w-md text-sm font-light text-ivory/70">
                Our latest reels, behind-the-scenes, and freshly graded frames —
                straight from the cutting room.
              </p>
            </div>
            <div className="lg:col-span-5">
              <a
                href="https://www.instagram.com/hk.weddingfilms"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-between gap-3 border border-gold/60 px-6 py-4 text-xs font-medium uppercase tracking-[0.3em] text-gold transition-all hover:bg-gold hover:text-wine-ink"
              >
                View Full Feed
                <span>→</span>
              </a>
            </div>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <InstaCard handle="hk.weddingfilms" image={s1} caption="Mehndi · Golden hour" />
            <InstaCard handle="hk.weddingfilms" image={s3} caption="Pheras · 35mm" />
            <InstaCard handle="hk.weddingfilms" image={story} caption="Couple portrait" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Frame({
  src,
  alt,
  className = "",
  num,
  tag,
  loc,
}: {
  src: string;
  alt: string;
  className?: string;
  num?: number;
  tag?: string;
  loc?: string;
}) {
  return (
    <figure className={`group relative overflow-hidden hover-lift ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover grayscale-[10%] transition-all duration-[1500ms] ease-out group-hover:scale-105 group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-wine-ink via-wine-ink/20 to-transparent opacity-70 transition-opacity group-hover:opacity-90" />

      {/* Corner index */}
      {num && (
        <span className="absolute left-4 top-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-ivory/80">
          <span className="h-px w-5 bg-gold" />
          {String(num).padStart(2, "0")}
        </span>
      )}

      <figcaption className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-5">
        <div>
          <div className="font-display text-xl italic text-ivory lg:text-2xl">{tag ?? alt}</div>
          {loc && (
            <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-gold/80">{loc}</div>
          )}
        </div>
        <span className="hidden h-9 w-9 items-center justify-center border border-gold/50 text-gold transition-all group-hover:bg-gold group-hover:text-wine-ink sm:flex">
          ▶
        </span>
      </figcaption>
    </figure>
  );
}


function InstaCard({ handle, image, caption }: { handle: string; image: string; caption: string }) {
  return (
    <a
      href={`https://www.instagram.com/${handle}`}
      target="_blank"
      rel="noreferrer"
      className="group relative block aspect-square overflow-hidden border border-border bg-emerald-deep/40 transition-all hover:border-gold/60"
    >
      <img
        src={image}
        alt={caption}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover grayscale-[10%] transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-wine-ink/90 via-wine-ink/30 to-wine-ink/20" />
      <div className="relative flex h-full flex-col justify-between p-8">
        <div className="flex items-center justify-between text-gold">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-8 w-8">
            <rect x="3" y="3" width="18" height="18" rx="4" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
          </svg>
          <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/70">Reel</span>
        </div>
        <div>
          <div className="font-display text-xl italic text-ivory">{caption}</div>
          <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-ivory/70">
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
    <section id="packages" className="relative overflow-hidden border-t border-gold/15 py-28 lg:py-40">
      {/* Backdrop word */}
      <div
        aria-hidden
        className="font-display pointer-events-none absolute -right-10 bottom-10 select-none whitespace-nowrap text-[14vw] font-extrabold uppercase leading-none tracking-tighter"
        style={{ WebkitTextStroke: "1px oklch(0.76 0.13 78 / 0.08)", color: "transparent" }}
      >
        Investment
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold/60" />
              <span className="text-eyebrow text-gold">{"\n"}</span>
            </div>
            <h2 className="font-display mt-6 text-4xl leading-[1.05] text-ivory sm:text-5xl lg:text-[5rem]">
              Three ways to <em className="italic gold-text font-light">remember.</em>
            </h2>
          </div>
          <p className="text-sm font-light text-ivory/70 lg:col-span-5">
            Every package is a starting point. We're happy to tailor coverage to your dates, venues and rituals — write to us and we'll send the full brochure within 24 hours.
          </p>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden border border-gold/20 bg-gold/15 lg:grid-cols-3">
          {tiers.map((t, idx) => (
            <article
              key={t.name}
              className={`group relative flex flex-col p-10 transition-all lg:p-12 ${
                t.featured
                  ? "bg-gradient-to-b from-wine-deep to-wine-ink lg:scale-y-[1.04] lg:-my-1 lg:z-10 lg:shadow-2xl lg:shadow-wine-ink"
                  : "bg-wine-ink/85 hover:bg-wine-deep/60"
              }`}
            >
              {t.featured && (
                <div className="absolute right-6 top-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-gold">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
                  Most Booked
                </div>
              )}

              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-display text-[10px] uppercase tracking-[0.4em] text-gold/80">
                    Package · 0{idx + 1}
                  </div>
                  <div className="font-display mt-2 text-3xl text-ivory lg:text-4xl">
                    {t.name}
                  </div>
                </div>
                <div className="text-right font-display text-5xl text-gold/20 transition-colors group-hover:text-gold/40 lg:text-6xl">
                  0{idx + 1}
                </div>
              </div>

              {/* Price block */}
              <div className="mt-10 border-y border-gold/20 py-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-sm text-gold">₹</span>
                  <span className="font-display text-5xl font-extrabold text-ivory lg:text-[3.5rem]">
                    {t.price}
                  </span>
                </div>
                <p className="font-display mt-3 italic text-ivory/65">{t.tagline}</p>
              </div>

              <ul className="mt-8 flex-1 space-y-4">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm font-light text-ivory/85">
                    <span className="mt-2 inline-block h-px w-4 shrink-0 bg-gold" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`group/btn mt-10 inline-flex w-full items-center justify-between px-6 py-4 text-xs font-medium uppercase tracking-[0.3em] transition-all ${
                  t.featured
                    ? "bg-gold text-wine-ink hover:bg-gold-soft"
                    : "border border-gold/50 text-gold hover:bg-gold hover:text-wine-ink"
                }`}
              >
                Reserve {t.name}
                <span className="transition-transform group-hover/btn:translate-x-1">→</span>
              </a>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-[10px] uppercase tracking-[0.3em] text-ivory/40">
          Travel, taxes & destination logistics quoted separately · Limited dates per season
        </p>
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
      r: "Diamond Package",
    },
    {
      q: "Calm, kind, and so unbelievably talented. Every frame feels like a painting.",
      a: "Riya & Karan",
      l: "Jamnagar",
      r: "Gold Package",
    },
    {
      q: "Worth every rupee. The album is the most beautiful thing in our home.",
      a: "Meher & Arjun",
      l: "Ahmedabad",
      r: "Diamond Package",
    },
  ];
  return (
    <section className="relative overflow-hidden border-y border-gold/15 bg-wine-deep/40 py-28 lg:py-40">
      {/* Giant quote backdrop */}
      <div
        aria-hidden
        className="font-display pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 select-none text-[40rem] leading-none text-gold/[0.06]"
      >
        “
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-gold/60" />
            <span className="text-eyebrow text-gold">{"\n"}</span>
            <span className="h-px w-10 bg-gold/60" />
          </div>
          <h2 className="font-display mt-6 text-3xl leading-[1.1] text-ivory sm:text-4xl lg:text-5xl">
            Stories from the <em className="italic gold-text font-light">couples we filmed.</em>
          </h2>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden border border-gold/20 bg-gold/15 lg:grid-cols-3">
          {quotes.map((t, i) => (
            <figure
              key={t.a}
              className="group relative flex flex-col bg-wine-ink/90 p-10 transition-colors hover:bg-wine-ink lg:p-12"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-6xl leading-none text-gold/50">“</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/40">
                  No. {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <blockquote className="font-display mt-6 flex-1 text-lg italic leading-relaxed text-ivory lg:text-xl">
                {t.q}
              </blockquote>

              {/* Stars */}
              <div className="mt-8 flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} viewBox="0 0 24 24" className="h-3 w-3 fill-current" aria-hidden>
                    <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" />
                  </svg>
                ))}
              </div>

              <figcaption className="mt-6 border-t border-gold/15 pt-6">
                <div className="font-display text-xl italic text-ivory">{t.a}</div>
                <div className="mt-2 flex items-center justify-between text-[10px] uppercase tracking-[0.3em]">
                  <span className="text-gold/80">{t.l}</span>
                  <span className="text-ivory/40">{t.r}</span>
                </div>
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
    <section id="contact" className="relative overflow-hidden py-28 lg:py-40">
      {/* Backdrop word */}
      <div
        aria-hidden
        className="font-display pointer-events-none absolute -left-6 top-12 select-none whitespace-nowrap text-[14vw] font-extrabold uppercase leading-none tracking-tighter"
        style={{ WebkitTextStroke: "1px oklch(0.76 0.13 78 / 0.07)", color: "transparent" }}
      >
        Let's begin
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold/60" />
              <span className="text-eyebrow text-gold">{"\n"}</span>
            </div>
            <h2 className="font-display mt-6 text-4xl leading-[1.05] text-ivory sm:text-5xl lg:text-[5.5rem]">
              Tell us your <br />
              <em className="italic gold-text font-light">love story.</em>
            </h2>
            <p className="mt-8 max-w-md text-base font-light leading-relaxed text-ivory/75">
              We take on a limited number of weddings each season. Reach out early
              — especially for winter dates — and we'll send our full brochure within 24 hours.
            </p>

            <div className="mt-12 space-y-6 border-t border-gold/20 pt-10">
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

            {/* Availability card */}
            <div className="mt-10 flex items-center gap-4 border border-gold/30 bg-wine-deep/40 p-5">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/60 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-gold" />
              </span>
              <div>
                <div className="text-[11px] font-medium uppercase tracking-[0.3em] text-ivory">
                  Now booking · Winter '26
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-ivory/55">
                  4 dates remaining · Nov – Feb
                </div>
              </div>
            </div>
          </div>

          {/* Right form — paper card */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget as HTMLFormElement);
              const body = `Name: ${data.get("name")}%0AEmail: ${data.get("email")}%0APhone: ${data.get("phone")}%0ADate: ${data.get("date")}%0APackage: ${data.get("pkg")}%0AMessage: ${data.get("msg")}`;
              window.location.href = `mailto:hello@hkweddingfilms.com?subject=Wedding Enquiry — ${data.get("name")}&body=${body}`;
            }}
            className="relative border border-gold/25 bg-gradient-to-b from-wine-deep/60 to-wine-ink p-8 shadow-2xl shadow-wine-ink/60 lg:col-span-7 lg:p-12"
          >
            {/* Corner ticks */}
            <div className="pointer-events-none absolute -left-2 -top-2 h-8 w-8 border-l-2 border-t-2 border-gold" />
            <div className="pointer-events-none absolute -right-2 -bottom-2 h-8 w-8 border-b-2 border-r-2 border-gold" />

            <div className="flex items-center justify-between border-b border-gold/20 pb-5">
              <div>
                <div className="text-[10px] uppercase tracking-[0.4em] text-gold">Enquiry Form</div>
                <div className="font-display mt-1 text-xl italic text-ivory">Reel No. 2026 / __</div>
              </div>
              <div className="text-right text-[10px] uppercase tracking-[0.3em] text-ivory/40">
                Reply within<br />24 hours
              </div>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <Field label="Your Name" name="name" required />
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Email" name="email" type="email" required />
              <Field label="Wedding Date" name="date" type="date" />
            </div>
            <Field label="Package" name="pkg" as="select">
              <option className="bg-wine-ink">Silver — ₹75,000</option>
              <option className="bg-wine-ink">Gold — ₹1,75,000</option>
              <option className="bg-wine-ink">Diamond — ₹2,55,000</option>
              <option className="bg-wine-ink">Not sure yet</option>
            </Field>
            <Field label="Tell us about your wedding" name="msg" as="textarea" />
            <button
              type="submit"
              className="group mt-8 inline-flex w-full items-center justify-between bg-gold px-8 py-5 text-xs font-medium uppercase tracking-[0.3em] text-wine-ink transition-all hover:bg-gold-soft"
            >
              Send Enquiry
              <span className="transition-transform group-hover:translate-x-1">→</span>
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
    <footer className="relative overflow-hidden border-t border-gold/20 bg-wine-ink">
      {/* Oversized brand mark — single-line right-to-left marquee */}
      <div className="overflow-hidden pt-16 pb-4">
        <div className="flex w-max animate-marquee gap-16 whitespace-nowrap font-display text-[14vw] font-extrabold uppercase leading-[0.9] tracking-tighter gold-text">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="flex items-center gap-16">
              HK Wedding <span className="italic font-light text-ivory/20">Films.</span>
              <svg width="28" height="28" viewBox="0 0 24 24" className="text-gold/70" aria-hidden>
                <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" fill="currentColor" />
              </svg>
            </span>
          ))}
        </div>
      </div>


      <div className="mx-auto mt-16 max-w-7xl border-t border-gold/15 px-6 py-10 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4">
              <img src={logo} alt="HK Production" className="h-12 w-auto" />
              <div>
                <div className="font-display text-lg text-ivory">HK Wedding Films</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold/70">A Film Studio · Gujarat</div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm font-light text-ivory/60">
              Cinematic wedding films & editorial photography for couples who want the day remembered the way it actually felt.
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="text-eyebrow text-gold/70">Explore</div>
            <ul className="mt-4 space-y-3 text-sm font-light text-ivory/70">
              {[["Work", "#showcase"], ["Story", "#story"], ["Packages", "#packages"], ["Contact", "#contact"]].map(([l, h]) => (
                <li key={l}><a href={h} className="hover:text-gold">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="text-eyebrow text-gold/70">Studio</div>
            <p className="mt-4 text-sm font-light leading-relaxed text-ivory/70">
              603 Nageswar Prabhu Palace, Ghanteshwar,<br />
              Jamnagar — Rajkot, Gujarat 360006
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-[11px] uppercase tracking-[0.25em]">
              <a href="https://www.instagram.com/hk.weddingfilms" target="_blank" rel="noreferrer" className="text-gold hover:underline">Instagram</a>
              <span className="text-ivory/20">·</span>
              <a href="mailto:hello@hkweddingfilms.com" className="text-gold hover:underline">Email</a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-gold/15 pt-6 text-[10px] uppercase tracking-[0.3em] text-ivory/40 md:flex-row">
          <div>© {new Date().getFullYear()} HK Production · Crafted with care in Gujarat</div>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gold/40" />
            We film love, not weddings.
            <span className="h-px w-8 bg-gold/40" />
          </div>
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
