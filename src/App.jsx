import { useState, useEffect } from "react";
import { motion, MotionConfig } from "framer-motion";

const SITE = {
  name: "Nail Care",
  currency: "£",
  services: [
    ["Gel Manicure", "Shaped, prepped and finished in a glossy, chip-free gel.", 30],
    ["BIAB Gels", "Builder gel that strengthens natural nails and lasts two to four weeks.", 38],
    ["Extensions", "Sculpted length in your chosen shape, built to feel light.", 45],
    ["Nail Art", "Hand-finished designs, from one accent nail to a full set.", 10],
    ["Pedicure", "A slow, thorough treatment for tired feet.", 35],
    ["Soak-off & Repair", "Gentle removal and repair, with care for the nail underneath.", 15],
  ],
  faqs: [
    ["How long will my set last?", "Gel and BIAB sets typically last two to four weeks, depending on your nails and daily routine."],
    ["Do you take walk-ins?", "We always try to. Booking ahead guarantees your time, especially at weekends and over the holidays."],
    ["Can I bring a design idea?", "Please do. Screenshots are welcome, and we will adapt the design to your nail shape and length."],
    ["Will BIAB damage my nails?", "It is designed to strengthen the natural nail, and we remove it gently so the nail underneath stays healthy."],
  ],
  contact: [["Call", "+44 20 7624 7279", "tel:+442076247279"], ["WhatsApp", "+44 7502 688686", "https://wa.me/447502688686"], ["Email", "nguyendung21122000@gmail.com", "mailto:nguyendung21122000@gmail.com"]],
  hours: [["Monday – Friday", "09:30 – 18:30"], ["Saturday", "09:00 – 17:00"], ["Sunday", "Closed"]],
};
const T = (n) => "/img/" + n + ".jpg";
const ease = [0.22, 1, 0.36, 1];
const SVC_IMG = ["h2", "t3", "t1", "h1", "salon", "t8"];

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.9, delay, ease }}>{children}</motion.div>
  );
}
const Eyebrow = ({ children, c = "text-muted" }) => <span className={"text-[12px] uppercase tracking-[0.22em] " + c}>{children}</span>;
const V = {
  solid: "border-accent bg-accent text-onaccent hover:border-ink hover:bg-ink hover:text-bg",
  line: "border-ink hover:bg-ink hover:text-bg",
  light: "border-bg bg-bg text-ink hover:border-soft hover:bg-soft",
  ghost: "border-bg/60 text-bg hover:bg-bg hover:text-ink",
};
const Btn = ({ v = "line", ...p }) => (
  <a {...p} className={"inline-block cursor-pointer rounded-[2px] border px-7 py-4 text-[13px] uppercase tracking-[0.16em] transition-colors duration-300 " + V[v]} />
);

function DemoBanner() {
  return (
    <div className="border-b border-line bg-surface px-4 py-2.5 text-center font-mono text-[12px] leading-snug text-muted">
      Concept preview made for {SITE.name}. Enquiries here are a demo: nothing is sent.
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg">
      <nav className="mx-auto flex h-[72px] max-w-[1120px] items-center justify-between px-6 md:px-12">
        <a href="#top" className="font-serif text-[26px] font-medium">{SITE.name}</a>
        <div className="hidden gap-9 text-[13px] uppercase tracking-[0.14em] text-muted md:flex">
          {["Services", "Gallery", "Studio", "FAQ"].map((l) => <a key={l} href={"#" + l.toLowerCase()} className="transition-colors hover:text-ink">{l}</a>)}
        </div>
        <Btn v="solid" href="#visit">Book</Btn>
      </nav>
    </header>
  );
}

function Hero() {
  const pop = (d) => ({ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1.1, delay: d, ease } });
  return (
    <div className="bg-deep text-bg">
      <div id="top" className="mx-auto grid max-w-[1120px] items-center gap-14 px-6 py-20 md:grid-cols-[1.1fr_.9fr] md:px-12 md:py-28">
        <div>
          <Reveal><Eyebrow c="text-soft">Your nail, we care</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-serif text-[clamp(54px,8vw,98px)] font-normal leading-[1] tracking-tight">Nails,<br /><em className="text-soft">cared for.</em></h1>
          </Reveal>
          <Reveal delay={0.2}><p className="mb-11 mt-8 max-w-[440px] text-[18px] font-light leading-relaxed opacity-80">A calm, welcoming studio for manicures, builder gels and nail art. Careful hands, honest advice, never rushed.</p></Reveal>
          <Reveal delay={0.3}><div className="flex flex-wrap gap-3"><Btn v="light" href="#visit">Reserve a time</Btn><Btn v="ghost" href="#services">View services</Btn></div></Reveal>
        </div>
        <div className="relative mx-auto h-[430px] w-full max-w-[400px]">
          <motion.img {...pop(0.2)} src={T("h1")} alt="Soft pink manicure" className="absolute left-0 top-0 h-[300px] w-[210px] rounded-t-full object-cover" />
          <motion.img {...pop(0.4)} src={T("h2")} alt="Floral nail art" className="absolute right-0 top-[60px] h-[210px] w-[160px] rounded-[2px] object-cover" />
          <motion.img {...pop(0.6)} src={T("h3")} alt="Heart nail art" className="absolute bottom-0 left-[110px] h-[120px] w-[120px] rounded-full object-cover" />
          <motion.div {...pop(0.8)} className="absolute bottom-4 right-0 w-[165px] rounded-[2px] bg-bg p-4 text-ink">
            <Eyebrow>New</Eyebrow><p className="mt-2 font-serif text-[21px] leading-tight">BIAB gels now available</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function Offer() {
  return (
    <div className="border-b border-line bg-surface py-5 text-center">
      <p className="px-6 font-serif text-[20px] italic md:text-[24px]">Holiday nails: extra staff and no waiting times. Come in and get yours done.</p>
    </div>
  );
}

function Section({ id, label, title, children, tone = "" }) {
  return (
    <section id={id} className={"py-24 md:py-32 " + tone}>
      <div className="mx-auto max-w-[1120px] px-6 md:px-12">
        <Reveal className="mb-14 grid gap-4 md:grid-cols-[1fr_2fr] md:gap-12">
          <div><Eyebrow>{label}</Eyebrow></div>
          <h2 className="font-serif text-[clamp(34px,4.6vw,56px)] font-normal leading-[1.08]">{title}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

function Services() {
  return (
    <Section id="services" label="Services" title={<>Considered work, <em className="text-accent">never rushed.</em></>}>
      <div className="grid gap-px border border-line bg-line md:grid-cols-2">
        {SITE.services.map(([n, d, p], i) => (
          <Reveal key={n} delay={(i % 2) * 0.08} className="bg-bg">
            <motion.div whileHover={{ backgroundColor: "var(--surface)" }} className="group flex h-full items-stretch gap-6 p-6 md:gap-8 md:p-8"><div className="w-[110px] shrink-0 overflow-hidden rounded-t-full md:w-[140px]"><img src={T(SVC_IMG[i])} alt={n} className="h-full min-h-[170px] w-full object-cover transition-transform duration-700 group-hover:scale-110" style={n === "Pedicure" ? { objectPosition: "20% 50%" } : undefined} /></div>
              <div className="flex flex-1 flex-col justify-center"><div className="flex flex-wrap items-baseline justify-between gap-x-4"><h3 className="font-serif text-[28px]">{n}</h3><span className="whitespace-nowrap font-serif text-[20px] text-accent">From {SITE.currency}{p}</span></div>
              <p className="mt-3 max-w-[380px] text-[16px] font-light text-muted">{d}</p></div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Biab() {
  const pts = ["Strengthens your natural nails", "Lasts two to four weeks", "A soft, natural-looking finish"];
  return (
    <div className="bg-deep py-24 text-bg md:py-28">
      <div className="mx-auto grid max-w-[1120px] items-center gap-12 px-6 md:grid-cols-2 md:px-12">
        <Reveal>
          <Eyebrow c="text-soft">New at the studio</Eyebrow>
          <h2 className="mb-8 mt-5 font-serif text-[clamp(36px,4.8vw,60px)] leading-[1.05]">BIAB gels, <em className="text-soft">now available.</em></h2>
          <ul className="mb-10 grid gap-3">{pts.map((t) => <li key={t} className="flex items-center gap-4 border-b border-bg/20 pb-3 text-[17px] font-light"><span className="h-1.5 w-1.5 rounded-full bg-soft" />{t}</li>)}</ul>
          <Btn v="light" href="#visit">Book BIAB</Btn>
        </Reveal>
        <Reveal delay={0.15} className="flex justify-center gap-5">
          <img src={T("t6")} alt="Natural BIAB nails" className="h-[300px] w-[200px] rounded-t-full object-cover" />
          <img src={T("t3")} alt="French BIAB nails" className="mt-14 h-[240px] w-[170px] rounded-[2px] object-cover" />
        </Reveal>
      </div>
    </div>
  );
}

function Gallery() {
  return (
    <Section id="gallery" tone="bg-surface" label="Gallery" title={<>Recent <em className="text-accent">sets.</em></>}>
      <div className="grid grid-cols-3 gap-2 md:grid-cols-6 md:gap-3">
        {["t1","t2","t3","t4","t5","t6","t7","t8","t9","t10","t11","t12"].map((k, i) => (
          <Reveal key={k} delay={(i % 6) * 0.05}>
            <div className="aspect-square overflow-hidden rounded-[2px]">
              <motion.img src={T(k)} alt="Nail design" className="h-full w-full object-cover" whileHover={{ scale: 1.08 }} transition={{ duration: 0.8, ease }} />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Studio() {
  return (
    <Section id="studio" label="The studio" title={<>Quiet space, <em className="text-accent">careful hands.</em></>}>
      <div className="grid items-center gap-12 md:grid-cols-[auto_1fr] md:gap-20">
        <Reveal><img src={T("salon")} alt="Inside the studio" className="aspect-[4/3] w-full max-w-[560px] rounded-[2px] object-cover" /></Reveal>
        <Reveal delay={0.15}>
          <p className="max-w-[500px] text-[18px] font-light leading-relaxed text-muted">Amy and Peter look after every client personally, with honest advice on what your nails actually need and finishes made to last.</p>
          <blockquote className="mt-10 max-w-[500px] border-l border-accent pl-6 font-serif text-[28px] italic leading-snug">“Happiest I’ve ever been with my nails.”
            <footer className="mt-4 font-sans text-[12px] not-italic uppercase tracking-[0.22em] text-muted">Zana M., client</footer>
          </blockquote>
        </Reveal>
      </div>
    </Section>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <Section id="faq" tone="bg-surface" label="Questions" title={<>Good to <em className="text-accent">know.</em></>}>
      <div className="border-t border-line">
        {SITE.faqs.map(([q, a], i) => (
          <div key={q} className="border-b border-line">
            <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between gap-6 py-6 text-left font-serif text-[24px]">
              {q}<motion.span animate={{ rotate: open === i ? 45 : 0 }} className="text-[28px] text-accent">+</motion.span>
            </button>
            <motion.div initial={false} animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }} transition={{ duration: 0.5, ease }} className="overflow-hidden">
              <p className="max-w-[620px] pb-6 text-[16px] font-light text-muted">{a}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Visit() {
  const [sent, setSent] = useState(false);
  const f = "w-full border-0 border-b border-line bg-transparent py-3 text-[16px] font-light outline-none placeholder:text-muted focus:border-ink";
  return (
    <Section id="visit" label="Visit" title={<>Reserve your <em className="text-accent">time.</em></>}>
      <div className="grid gap-14 md:grid-cols-2 md:gap-20">
        <Reveal><div className="grid gap-6">
          <input className={f} placeholder="Your name" /><input className={f} placeholder="Email or phone" />
          <select className={f} defaultValue=""><option value="" disabled>Service</option>{SITE.services.map((s) => <option key={s[0]}>{s[0]}</option>)}</select>
          <textarea className={f + " resize-none"} rows={3} placeholder="Anything we should know" />
          <div className="flex flex-wrap items-center gap-5"><Btn v="solid" onClick={() => setSent(true)}>Send enquiry</Btn>
            {sent && <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[14px] text-muted">This is a concept preview, so nothing was sent.</motion.span>}</div>
        </div></Reveal>
        <Reveal delay={0.15}><div className="mb-12 border-t border-line">{SITE.contact.map(([l, v, h]) => <a key={l} href={h} className="flex items-baseline justify-between gap-4 border-b border-line py-5 transition-colors hover:text-accent"><span className="text-[12px] uppercase tracking-[0.22em] text-muted">{l}</span><span className="break-all text-right font-serif text-[21px]">{v}</span></a>)}</div><ul className="border-t border-line">{SITE.hours.map(([d, t]) => <li key={d} className="flex justify-between border-b border-line py-4 text-[16px]"><span>{d}</span><span className="text-muted">{t}</span></li>)}</ul></Reveal>
      </div>
    </Section>
  );
}

export default function App() {
  const [pal, setPal] = useState("ivory");
  useEffect(() => { document.documentElement.dataset.palette = pal; }, [pal]);
  const dots = { ivory: "#a8745f", sage: "#68795f", blush: "#9a5560" };
  return (
    <MotionConfig reducedMotion="user">
      <DemoBanner /><Nav />
      <main><Hero /><Offer /><Services /><Biab /><Gallery /><Studio /><Faq /><Visit /></main>
      <footer className="border-t border-line px-6 py-9 pb-24 text-[13px] text-muted md:px-12 md:pb-9">
        <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-5">
          <span>© {new Date().getFullYear()} {SITE.name}</span>
          <div className="flex gap-2.5" role="group" aria-label="Colour palette">
            {Object.entries(dots).map(([k, c]) => <button key={k} aria-label={k} aria-pressed={pal === k} onClick={() => setPal(k)}
              className={"h-4 w-4 rounded-full border border-line " + (pal === k ? "outline outline-1 outline-offset-[3px] outline-ink" : "")} style={{ background: c }} />)}
          </div>
        </div>
      </footer>
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-bg p-3 md:hidden"><div className="grid grid-cols-2 gap-3 text-center"><Btn v="solid" href="https://wa.me/447502688686">WhatsApp</Btn><Btn v="line" href="tel:+442076247279">Call</Btn></div></div>
    </MotionConfig>
  );
}
