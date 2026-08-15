"use client";
import { FormEvent, useState } from "react";

const lessons = [
  ["01", "Build the foundation", "Foam bases, cutting, shaping, adhesion, and preparing a clean work area."],
  ["02", "Sculpt realistic stone", "Cobblestone and slab designs, scratch coats, polish coats, and fine detailing."],
  ["03", "Master the mix", "Binding agents, additives, glass fibers, tools, and when to use each one."],
  ["04", "Finish like an artisan", "Grouting, pigmentation, layered staining, highlights, shadows, and sealing."],
];
const included = ["All tools and project supplies", "Artisian Rock Academy shirt", "Professional polishing trowel", "Lunch both days", "K & K Services certification", "Access to trusted suppliers", "Mentorship on future projects"];

export default function Home() {
  const [sent, setSent] = useState(false);
  function register(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent("Artisian Rock Academy RSVP — Sept 19–20");
    const body = encodeURIComponent(`New class RSVP\n\nName: ${data.get("name")}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email")}\nExperience: ${data.get("experience")}\n\nPlease confirm my seat and payment status.`);
    setSent(true);
    window.location.href = `mailto:kandkservices561@gmail.com?subject=${subject}&body=${body}`;
  }
  return <main>
    <nav className="nav wrap"><a className="brand" href="#top"><span className="brand-mark">A</span><span>ARTISIAN <b>ROCK ACADEMY</b></span></a><a className="nav-cta" href="#register">Reserve your seat</a></nav>
    <section className="hero" id="top"><div className="hero-rock rock-one"/><div className="hero-rock rock-two"/><div className="wrap hero-grid">
      <div className="hero-copy"><p className="eyebrow"><span/> K & K Services × Cait Rose Gallery</p><h1>Turn foam into<br/><em>stone.</em></h1><p className="lede">A hands-on, two-day intensive where you’ll learn the complete process for sculpting, coating, staining, and selling custom faux-rock installations.</p><div className="hero-actions"><a className="button primary" href="#register">Claim your seat <span>→</span></a><a className="text-link" href="#curriculum">Explore the class ↓</a></div><div className="quick-facts"><div><small>DATES</small><strong>SEPT 19–20</strong></div><div><small>TIME</small><strong>9AM–5PM</strong></div><div><small>FORMAT</small><strong>HANDS-ON</strong></div></div></div>
      <div className="hero-card"><p>THE ART OF</p><div className="stone-word">ROCK</div><p className="edition">2026 / SOUTH FLORIDA</p></div>
    </div></section>
    <section className="statement wrap"><p className="section-no">01 / THE EXPERIENCE</p><h2>This isn’t a demo.<br/>You’ll build it <span>yourself.</span></h2><p>Learn the exact field-tested system behind one-of-a-kind rock walls, archways, and sculpted architectural features—from raw foam to the final sealed finish.</p></section>
    <section className="curriculum" id="curriculum"><div className="wrap"><div className="section-heading"><p className="section-no">02 / CURRICULUM</p><h2>Two days.<br/>The full process.</h2></div><div className="lesson-grid">{lessons.map(([n,t,c])=><article className="lesson" key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}</div></div></section>
    <section className="included wrap"><div><p className="section-no">03 / WHAT’S INCLUDED</p><h2>Leave ready<br/>to create.</h2><p className="muted">We provide the materials, tools, instruction, and ongoing support. You bring work clothes and the willingness to get your hands dirty.</p></div><ul>{included.map((item,i)=><li key={item}><span>{String(i+1).padStart(2,"0")}</span>{item}<b>✓</b></li>)}</ul></section>
    <section className="pricing"><div className="wrap pricing-grid"><div><p className="section-no">04 / INVESTMENT</p><h2>Build a skill<br/>that pays.</h2><p className="muted">Small-group instruction means personal guidance throughout the build. Seats are intentionally limited.</p></div><div className="price-card featured"><div className="badge">BEST PRICE</div><p>EARLY BIRD</p><strong><sup>$</sup>895</strong><small>Limited early seats</small><a href="#register">Reserve early bird →</a></div><div className="price-card"><p>REGULAR</p><strong><sup>$</sup>1,050</strong><small>Standard admission</small><a href="#register">Reserve your seat →</a></div></div></section>
    <section className="register wrap" id="register"><div className="register-copy"><p className="section-no">05 / RESERVE YOUR SEAT</p><h2>Ready to rock?</h2><p>Submit your RSVP below. Your email app will open with your details ready to send directly to K & K Services.</p><div className="payment-note"><span>ZELLE PAYMENT</span><strong>kandkservices561@gmail.com</strong><small>Include your full name + “Rock Academy” in the memo.</small></div></div><form onSubmit={register}><label>FULL NAME<input name="name" required placeholder="Your name"/></label><div className="form-row"><label>PHONE<input name="phone" required type="tel" placeholder="(555) 555-5555"/></label><label>EMAIL<input name="email" required type="email" placeholder="you@email.com"/></label></div><label>EXPERIENCE LEVEL<select name="experience" defaultValue=""><option value="" disabled>Select one</option><option>Brand new</option><option>Some construction experience</option><option>Working contractor / artist</option></select></label><button className="button primary" type="submit">Send my RSVP <span>→</span></button>{sent&&<p className="success">Your email app is opening—press Send to complete your RSVP.</p>}</form></section>
    <footer><div className="wrap footer-grid"><div className="brand"><span className="brand-mark">A</span><span>ARTISIAN <b>ROCK ACADEMY</b></span></div><p>Presented by K & K Services × Cait Rose Gallery</p><a href="mailto:kandkservices561@gmail.com">kandkservices561@gmail.com</a></div></footer>
  </main>;
}
