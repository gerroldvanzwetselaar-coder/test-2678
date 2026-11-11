import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, Check, ChevronDown, MapPin, Menu, Phone, Search, ShieldCheck, ShoppingBag, SlidersHorizontal, Star, Truck, Wrench, X } from 'lucide-react';

const shop = 'https://vdolderen.nl';
const robotUrl = `${shop}/c/grasverzorging/maaiers/robotmaaiers/`;
const categories = [
  { title: 'Robotmaaiers', subtitle: 'Een mooi gazon. Helemaal automatisch.', image: 'robot-3.webp', url: robotUrl, tag: 'Slim maaien' },
  { title: 'Grasmaaiers', subtitle: 'Kracht en precisie voor iedere tuin.', image: 'mower.jpg', url: `${shop}/c/grasverzorging/maaiers/grasmaaiers/` },
  { title: 'Zit- & frontmaaiers', subtitle: 'Groot terrein? Groot gemak.', image: 'rider.jpg', url: `${shop}/c/grasverzorging/maaiers/zitmaaiers/` },
  { title: 'Tractoren', subtitle: 'Veelzijdig aan het werk met ISEKI.', image: 'tractor.jpg', url: `${shop}/c/tractoren/` },
];
const products = [
  { name: 'Automower® 305', brand: 'Husqvarna', image: 'robot-0.webp', price: '1.148,99', url: '/p/husqvarna-305/', kind: 'Robotmaaiers', label: 'Compact & betrouwbaar' },
  { name: 'Automower® 305E NERA', brand: 'Husqvarna', image: 'robot-3.webp', price: '2.022,99', url: '/p/husqvarna-305e-nera-robotmaaier/', kind: 'Robotmaaiers', label: 'NERA-serie' },
  { name: 'Automower® 310E NERA', brand: 'Husqvarna', image: 'robot-4.webp', price: '2.299,00', url: '/p/husqvarna-310e-nera-robotmaaier/', kind: 'Robotmaaiers', label: 'Slim gazononderhoud' },
  { name: 'Automower® 320 NERA', brand: 'Husqvarna', image: 'robot-7.webp', price: '3.035,00', url: '/p/husqvarna-320-nera/', kind: 'Robotmaaiers', label: 'Voor grotere gazons' },
  { name: 'SF225 Frontmaaier', brand: 'ISEKI', image: 'iseki.webp', price: '25.833,00', url: '/p/iseki-sf225-frontmaaier/', kind: 'ISEKI', label: 'Professionele grasverzorging', from: true },
];

export default function Homepage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [tab, setTab] = useState('Robotmaaiers');
  const searchRef = useRef<HTMLInputElement>(null);
  useEffect(() => { document.title = 'Van Dolderen Machines | Robotmaaiers & tuinmachines in de Betuwe'; }, []);
  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
    const key = (e: KeyboardEvent) => { if (e.key === 'Escape') { setSearchOpen(false); setMobileOpen(false); } };
    window.addEventListener('keydown', key);
    return () => window.removeEventListener('keydown', key);
  }, [searchOpen]);
  const visibleProducts = tab === 'Alle machines' ? [products[0], products[1], products[3], products[4]] : products.filter(p => p.kind === tab);
  const results = products.filter(p => `${p.name} ${p.brand} ${p.kind}`.toLowerCase().includes(query.toLowerCase()));

  return <>
    <div className="utility"><div className="container utility-inner"><span><Check size={13} /> Persoonlijk advies, écht dichtbij</span><span><Check size={13} /> Eigen showroom & werkplaats</span><a href={`${shop}/contact/`}>Bezoek ons in Kesteren <ArrowUpRight size={13} /></a></div></div>
    <header className="header">
      <div className="container header-main">
        <a href="/" className="brand" aria-label="Van Dolderen Machines home"><img src="/images/logo.jpg" alt="Van Dolderen Machines" /></a>
        <button className="search-trigger" onClick={() => setSearchOpen(true)}><Search size={19} /><span>Waar bent u naar op zoek?</span><span className="search-hint">Zoeken</span></button>
        <a className="header-phone" href="tel:+31488712052"><Phone size={19} /><span><small>We helpen u graag</small><strong>0488 712052</strong></span></a>
        <a className="bag" href={`${shop}/winkelwagen/`} aria-label="Winkelwagen in de webshop"><ShoppingBag size={23}/></a>
        <button className="mobile-toggle" aria-label={mobileOpen ? 'Menu sluiten' : 'Menu openen'} aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X /> : <Menu />}</button>
      </div>
      <nav className={`navigation ${mobileOpen ? 'open' : ''}`} aria-label="Hoofdnavigatie"><div className="container nav-inner">
        <a className="nav-all" href="#assortiment" onClick={() => setMobileOpen(false)}><Menu size={17} /> Ons assortiment <ChevronDown size={14}/></a>
        <a href={robotUrl}>Robotmaaiers</a><a href={`${shop}/c/grasverzorging/maaiers/`}>Tuin- & parkmachines</a><a href={`${shop}/c/merken/`}>Onze merken</a><a href={`${shop}/reparatie-onderhoud/`}>Service & onderhoud</a><a href={`${shop}/over-van-dolderen/`}>Over ons</a><a className="nav-offer" href={`${shop}/c/acties-bundels/`}>Acties <ArrowUpRight size={14}/></a>
      </div></nav>
    </header>

    <main>
      <section className="hero">
        <img className="hero-image" src="/images/hero.webp" alt="Husqvarna Automower robotmaaier op een groen gazon" fetchPriority="high" />
        <div className="hero-shade" />
        <div className="container hero-content">
          <div className="eyebrow light"><span /> UW MACHINESPECIALIST IN DE BETUWE</div>
          <h1>Een strak gazon.<br />Zonder omkijken.</h1>
          <p>Ontdek de vrijheid van een robotmaaier. Topmachines van Husqvarna, met het persoonlijke advies en de service van Van Dolderen.</p>
          <div className="hero-actions"><a className="button primary" href={robotUrl}>Ontdek onze robotmaaiers <ArrowRight size={18}/></a><a className="hero-secondary" href={`${shop}/contact/`}>Laat u adviseren <ArrowUpRight size={17}/></a></div>
          <div className="hero-rating"><div className="stars">{Array.from({length:5},(_,i) => <Star key={i} size={13} fill="currentColor"/>)}</div><strong>9,1</strong><span>Klanten waarderen onze service</span></div>
        </div>
        <div className="hero-label"><span className="live-dot"/> Slim maaien. Meer genieten.<small>Husqvarna Automower®</small></div>
        <div className="hero-bottom"><span>ADVIES · VERKOOP · INSTALLATIE · ONDERHOUD</span><span>01 <i/> 01</span></div>
      </section>

      <section className="assurance" aria-label="Onze zekerheden"><div className="container assurance-grid">
        <div><ShieldCheck/><span><strong>Alleen vertrouwde A-merken</strong><small>Kwaliteit waar u op kunt rekenen</small></span></div>
        <div><Wrench/><span><strong>Service van A tot Z</strong><small>Van eerste advies tot onderhoud</small></span></div>
        <div><MapPin/><span><strong>Dichtbij in de Betuwe</strong><small>Kom langs in onze showroom</small></span></div>
        <div><Truck/><span><strong>Gratis verzending vanaf €99*</strong><small>Gemakkelijk online bestellen</small></span></div>
      </div></section>

      <section id="assortiment" className="section container categories-section">
        <div className="section-heading"><div><div className="eyebrow">VOOR ELKE TUIN. VOOR ELKE KLUS.</div><h2>Goed gereedschap begint hier.</h2></div><a className="text-link" href={`${shop}/winkel/`}>Bekijk het hele assortiment <ArrowUpRight size={18}/></a></div>
        <div className="category-grid">{categories.map((c,i) => <a className={`category-card ${i===0?'featured':''}`} href={c.url} key={c.title}>
          <div className="category-photo">{c.tag && <span className="category-tag">{c.tag}</span>}<img src={`/images/${c.image}`} alt={c.title} loading="lazy"/></div>
          <div className="category-copy"><h3>{c.title}</h3><p>{c.subtitle}</p><span className="round-arrow"><ArrowUpRight size={20}/></span></div>
        </a>)}</div>
      </section>

      <section className="brand-section"><div className="container brand-inner"><div><span className="eyebrow">KWALITEIT ZONDER COMPROMISSEN</span><p>Grote merken. Persoonlijke service.</p></div><a href={`${shop}/merk/husqvarna/`} aria-label="Husqvarna assortiment"><img src="/images/husqvarna.png" alt="Husqvarna" loading="lazy"/></a><a href={`${shop}/merk/iseki/`} aria-label="ISEKI assortiment"><img src="/images/iseki-logo.png" alt="ISEKI" loading="lazy"/></a><a href={`${shop}/merk/eliet/`} aria-label="Eliet assortiment"><img src="/images/eliet.png" alt="Eliet" loading="lazy"/></a><a className="text-link" href={`${shop}/c/merken/`}>Alle merken <ArrowUpRight size={17}/></a></div></section>

      <section id="producten" className="section container products-section">
        <div className="section-heading"><div><div className="eyebrow">ONZE SELECTIE VOOR UW TUIN</div><h2>Klaar voor het echte werk.</h2></div><a className="text-link" href={robotUrl}>Alle robotmaaiers <ArrowUpRight size={18}/></a></div>
        <div className="product-toolbar"><div className="tabs" role="tablist" aria-label="Productselectie">{['Robotmaaiers','ISEKI','Alle machines'].map(t => <button key={t} role="tab" aria-selected={tab===t} className={tab===t?'active':''} onClick={() => setTab(t)}>{t}</button>)}</div><span><SlidersHorizontal size={15}/> Geselecteerd door onze specialisten</span></div>
        <div className="product-grid">{visibleProducts.map(p => <a className="product-card" key={p.name} href={`${shop}${p.url}`}>
          <div className="product-photo"><span className="product-label">{p.label}</span><img src={`/images/${p.image}`} alt={`${p.brand} ${p.name}`} loading="lazy"/></div>
          <div className="product-copy"><span className="product-brand">{p.brand}</span><h3>{p.name}</h3><p>{p.kind==='ISEKI' ? 'Frontmaaier' : 'Robotmaaier'}</p><div className="price-line"><div>{p.from && <small>Vanaf </small>}<strong>€ {p.price}</strong><small>incl. btw</small></div><span className="product-arrow"><ArrowRight size={18}/></span></div></div>
        </a>)}{tab==='ISEKI' && <a href={`${shop}/merk/iseki/`} className="iseki-promo"><span className="eyebrow">JAPANSE PRECISIE</span><h3>Meer kracht.<br/>Meer mogelijkheden.</h3><p>Ontdek tractoren en maaimachines van ISEKI voor tuin, park en terrein.</p><span className="text-link">Bekijk ISEKI <ArrowUpRight size={18}/></span></a>}</div>
        <p className="price-note">* Bekijk de actuele prijzen, uitvoeringen en verzendvoorwaarden in onze webshop.</p>
      </section>

      <section className="service-section"><div className="container service-grid"><div className="service-photo"><img src="/images/original-hero.avif" alt="Robotmaaier aan het werk in een aangelegde tuin" loading="lazy"/><div className="photo-caption"><Wrench size={20}/><span>Wij kennen uw machine.<br/><strong>En u kent ons.</strong></span></div></div><div className="service-copy"><div className="eyebrow">MEER DAN EEN MACHINE</div><h2>U geniet van uw tuin.<br/>Wij regelen de rest.</h2><p>Een goede machine is pas het begin. We helpen u kiezen, verzorgen de installatie en houden uw machine in topconditie. Gewoon, met een vast aanspreekpunt dichtbij.</p><ul><li><Check/> Eerlijk advies, afgestemd op uw tuin</li><li><Check/> Vakkundige installatie op locatie</li><li><Check/> Onderhoud en reparatie in onze eigen werkplaats</li></ul><a className="button dark" href={`${shop}/reparatie-onderhoud/`}>Ontdek onze service <ArrowRight size={18}/></a><a className="subtle-link" href={`${shop}/contact/`}>Of kom langs voor een kop koffie <ArrowUpRight size={15}/></a></div></div></section>

      <section className="showroom"><div className="container showroom-inner"><div><div className="eyebrow light">VAN DOLDEREN MACHINES · KESTEREN</div><h2>Online ontdekken.<br/>Persoonlijk kennismaken.</h2><p>Bekijk onze machines van dichtbij in de showroom.<br/>U bent van harte welkom in het hart van de Betuwe.</p></div><div className="showroom-contact"><MapPin size={27}/><h3>Spoorstraat 49</h3><p>4041 CL Kesteren</p><div className="hours"><span>Maandag – vrijdag</span><strong>08:00 – 17:00</strong><span>Zaterdag</span><strong>08:00 – 12:30</strong></div><small>Op werkdagen gesloten van 12:30 tot 13:00.</small><a className="button white" href="https://www.google.com/maps/search/?api=1&query=Spoorstraat+49+4041+CL+Kesteren" target="_blank" rel="noreferrer">Plan uw route <ArrowUpRight size={18}/></a></div></div></section>
    </main>

    <footer><div className="container footer-main"><div className="footer-brand"><img src="/images/logo.jpg" alt="Van Dolderen Machines"/><p>Uw specialist in tuin- en parkmachines.<br/>Goed advies. Goede machines. Dat werkt beter.</p></div><div><h4>Ontdek ons assortiment</h4><a href={robotUrl}>Robotmaaiers</a><a href={categories[1].url}>Grasmaaiers</a><a href={categories[2].url}>Zit- & frontmaaiers</a><a href={`${shop}/merk/iseki/`}>ISEKI machines</a></div><div><h4>We helpen u graag</h4><a href={`${shop}/reparatie-onderhoud/`}>Service & onderhoud</a><a href={`${shop}/over-van-dolderen/`}>Over Van Dolderen</a><a href={`${shop}/contact/`}>Contact & showroom</a><a href={`${shop}/verzending-retourneren/`}>Verzending & retourneren</a></div><div><h4>Direct contact</h4><a href="tel:+31488712052">0488 712052</a><a href="mailto:klantenservice@vdolderen.nl">klantenservice@vdolderen.nl</a><span>Spoorstraat 49, Kesteren</span></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Van Dolderen Machines</span><div><a href={`${shop}/privacy-policy-2/`}>Privacy</a><a href={`${shop}/algemene-voorwaarden/`}>Algemene voorwaarden</a></div><span>Met zorg voor mens, machine en tuin.</span></div></footer>

    {searchOpen && <dialog className="search-modal" aria-label="Zoek machines" ref={node => { if (node && !node.open) node.showModal(); }} onCancel={() => setSearchOpen(false)}><div className="search-modal-top"><h2>Vind uw machine</h2><button onClick={() => setSearchOpen(false)} aria-label="Zoeken sluiten"><X/></button></div><div className="search-input"><Search size={21}/><input aria-label="Zoek op model of merk" ref={searchRef} value={query} onChange={e => setQuery(e.target.value)} placeholder="Zoek op model of merk…" /></div><p className="search-count">{query ? `${results.length} resultaten in onze selectie` : 'Ontdek onze geselecteerde machines'}</p><div className="search-results">{results.map(p => <a key={p.name} href={`${shop}${p.url}`}><img src={`/images/${p.image}`} alt=""/><span><small>{p.brand}</small><strong>{p.name}</strong></span><ArrowUpRight size={19}/></a>)}{results.length===0 && <p>Geen model gevonden in deze selectie. Zoek verder in ons volledige assortiment.</p>}</div><a className="button primary" href={`${shop}/?s=${encodeURIComponent(query)}&post_type=product`}>Zoek in de volledige webshop <ArrowRight size={18}/></a></dialog>}
  </>;
}