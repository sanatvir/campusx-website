'use client'

import { useEffect, useState } from 'react'

const markUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-14%20at%2001.00.56-cUTIsLVmDZP4mw8E9P6pnBSIrY5mmW.jpeg'
const wordmarkUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-14%20at%2001.01.14-Tvc5r6iPOYE5I351AH9525aXMSHOI3.jpeg'

const pillars = [
  ['Connect', 'Find conversations, communities, and people who share your interests.'],
  ['Create', 'Share ideas, start projects, and turn your thoughts into something real.'],
  ['Collaborate', 'Work with other students and build together.'],
  ['Discover', 'Find events, resources, opportunities, and things happening around your community.'],
]
const steps = [
  ['01', 'Get CampusX', 'Download CampusX for your device.'],
  ['02', 'Sign in', 'Use your Google account to access CampusX.'],
  ['03', 'Find your community', 'Explore ideas, conversations, communities, events, and resources.'],
  ['04', 'Start building', 'Create, collaborate, contribute, and make your mark.'],
]
const faqs = [
  ['What is CampusX?', 'CampusX is a student-focused digital platform for connecting, creating, collaborating, and discovering.'],
  ['Who is CampusX for?', 'CampusX is designed for student communities. Access may vary depending on the community or school CampusX is serving.'],
  ['Is CampusX free?', 'CampusX is designed to be accessible to students. Availability and future features may vary as the platform develops.'],
  ['What devices will CampusX support?', 'CampusX is being developed for desktop and mobile devices, starting with Windows and Android.'],
  ['How do I sign in?', 'CampusX uses Google Sign-In for a simple and secure account experience.'],
  ['Is CampusX officially affiliated with my school?', 'CampusX is a student-built platform developed by Avenix Technologies. It should not be presented as an official school platform unless a school formally partners with CampusX.'],
  ['How can I report inappropriate content?', 'CampusX will provide tools for reporting inappropriate content and maintaining a respectful student community.'],
]

function Logo({ compact = false }: { compact?: boolean }) {
  return <img className={compact ? 'logo logo-mark' : 'logo'} src={compact ? markUrl : wordmarkUrl} alt="CampusX" />
}
function Button({ children, light = false, href = '#download' }: { children: React.ReactNode; light?: boolean; href?: string }) {
  return <a className={`button ${light ? 'button-light' : ''}`} href={href}>{children}<span aria-hidden="true">→</span></a>
}
function SectionIntro({ label, title, children }: { label: string; title: string; children?: React.ReactNode }) {
  return <div className="section-intro"><p className="eyebrow">{label}</p><h2>{title}</h2>{children && <p className="intro-copy">{children}</p>}</div>
}
function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}><a href="#top" aria-label="CampusX home"><Logo /></a><button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'}><span /><span /></button><nav id="primary-navigation" className={open ? 'nav-links open' : 'nav-links'}>{['About', 'How It Works', 'FAQ'].map((item) => <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} onClick={() => setOpen(false)}>{item}</a>)}<a className="nav-download" href="#download" onClick={() => setOpen(false)}>Download <span aria-hidden="true">→</span></a></nav></header>
}
function Footer() {
  return <footer className="footer"><div className="footer-top"><div className="footer-brand"><Logo compact /><p>Connect. Create.<br />Collaborate.</p><Button href="#download">Download CampusX</Button></div><div className="footer-links"><div><p className="eyebrow">Product</p><a href="#how-it-works">How It Works</a><a href="#download">Download</a><a href="#faq">FAQ</a></div><div><p className="eyebrow">Company</p><a href="#avenix">Avenix Technologies</a></div></div></div><div className="footer-bottom"><span>© 2026 Avenix Technologies. All rights reserved.</span><span>CampusX / Avenix</span></div></footer>
}

export default function Page() {
  const [activeFaq, setActiveFaq] = useState(0)
  return <main id="top"><Navbar /><section className="hero"><div className="hero-content"><p className="eyebrow">BUILT FOR STUDENTS</p><h1>Your campus.<br /><em>Connected.</em></h1><p className="hero-copy">CampusX is a digital space where students connect, create, collaborate, and discover.</p><div className="actions"><Button>Get CampusX</Button><a className="text-link" href="#about">Explore CampusX <span aria-hidden="true">↓</span></a></div></div><div className="hero-mark"><Logo compact /><span>01 — 2026</span></div></section>
    <section className="section platform" id="about"><SectionIntro label="THE PLATFORM" title="Everything students need to connect and create.">CampusX brings ideas, communities, conversations, events, study resources, and collaboration into one student-focused platform.</SectionIntro><div className="pillar-grid">{pillars.map(([title, text], i) => <article className="pillar" key={title}><span className="number">0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="section steps-section" id="how-it-works"><SectionIntro label="GET STARTED" title="Your journey starts here." /><div className="steps">{steps.map(([number, title, text]) => <article className="step" key={number}><span className="number">{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="download" id="download"><div className="download-heading"><p className="eyebrow">GET THE APP</p><h2>Ready to join<br /><em>CampusX?</em></h2><p>Get the CampusX app and step into your student community.</p></div><div className="download-options">{['CampusX for Windows', 'CampusX for Android', 'CampusX for iPhone'].map((title) => <article className="download-option" key={title}><h3>{title}</h3><span className="download-button is-disabled" aria-disabled="true">Coming soon<span aria-hidden="true">↗</span></span><p>We’re preparing the first release</p></article>)}</div></section>
    <section className="section faq" id="faq"><SectionIntro label="FAQ" title="Questions, answered." /><div className="faq-list">{faqs.map(([question, answer], i) => <div className={`faq-item ${activeFaq === i ? 'is-open' : ''}`} key={question}><button onClick={() => setActiveFaq(activeFaq === i ? -1 : i)} aria-expanded={activeFaq === i} aria-controls={`faq-answer-${i}`}><span>{question}</span><span className="plus" aria-hidden="true">{activeFaq === i ? '−' : '+'}</span></button><div id={`faq-answer-${i}`} className="faq-answer"><p>{answer}</p></div></div>)}</div></section>
    <section className="section safety" id="safety"><SectionIntro label="BUILT WITH RESPONSIBILITY" title="A community built on respect.">CampusX is designed to give students a useful and positive digital environment. Respectful participation, responsible communication, privacy, and appropriate content are fundamental to the platform.</SectionIntro></section>
    <section className="avenix" id="avenix"><p className="eyebrow">THE COMPANY</p><h2>Built by Avenix Technologies.</h2><p>Avenix Technologies is a student-led technology venture focused on building products that connect people, ideas, and opportunities.</p><a className="text-link" href="#avenix">Learn about Avenix Technologies →</a></section>
    <section className="final-cta"><p className="eyebrow">CAMPUSX</p><h2>Connect. Create.<br /><em>Collaborate.</em></h2><p>CampusX is where student ideas begin.</p><Button>Get CampusX</Button></section><Footer /></main>
}
