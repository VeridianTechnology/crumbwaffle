'use client';
import { useEffect, useState } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { products, faqs, type Product } from '@/lib/products';

export function Motion() {
 useEffect(() => {
  const media = matchMedia('(prefers-reduced-motion: reduce)');
  if (media.matches) return;
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); } }), { threshold: .1 });
  document.querySelectorAll('[data-reveal]').forEach(el => { el.classList.add('will-reveal'); observer.observe(el); });
  let frame = 0;
  const move = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(() => { document.querySelectorAll<HTMLElement>('[data-rotate]').forEach(el => { const r = el.getBoundingClientRect(); if(r.bottom > 0 && r.top < innerHeight) el.style.setProperty('--turn', `${Math.max(-1.3,Math.min(1.3,(r.top / innerHeight - .3)*3))}deg`); }); }); };
  const change = () => { if (media.matches) { observer.disconnect(); document.querySelectorAll<HTMLElement>('[data-reveal]').forEach(el=>el.classList.add('revealed')); document.querySelectorAll<HTMLElement>('[data-rotate]').forEach(el=>el.style.setProperty('--turn','0deg')); } };
  addEventListener('scroll', move, { passive:true }); media.addEventListener('change',change); move();
  return () => { observer.disconnect(); removeEventListener('scroll',move); media.removeEventListener('change',change); cancelAnimationFrame(frame); };
 }, []);
 return null;
}
export function FAQ({ model }: { model?: Product }) {
 const items = model ? [[`Who is ${model.name} for?`, model.description], [`What graphics does ${model.name} include?`, `${model.gpu}${model.index > 1 ? ` with ${model.vram}` : ', using shared system memory'}. ${model.bay}.`], ...faqs.slice(0,6)] : faqs;
 return <Accordion className="faq-list">{items.map(([question, answer], i) => <AccordionItem key={question} value={i}><AccordionTrigger>{question}</AccordionTrigger><AccordionContent><p>{answer}</p></AccordionContent></AccordionItem>)}</Accordion>;
}
export function Gallery({ product }: { product: Product }) {
 return <Tabs defaultValue="exterior" className="gallery"><TabsList aria-label={`${product.name} image views`} variant="line"><TabsTrigger value="exterior">Exterior</TabsTrigger><TabsTrigger value="detail">Enclosure detail</TabsTrigger><TabsTrigger value="cutaway">Technical cutaway</TabsTrigger></TabsList><TabsContent value="exterior"><div className={`product-exterior crop-${product.slug} detail-exterior`}><div className="exterior-window"><img src="/images/family.png" alt={`Cream CrumbWaffle ${product.name} enclosure, three-quarter exterior view`} /></div></div></TabsContent><TabsContent value="detail"><div className={`product-exterior crop-${product.slug} detail-exterior enclosure-detail`}><div className="exterior-window"><img src="/images/family.png" alt={`Close-up of the ${product.name} enclosure design`} /></div></div></TabsContent><TabsContent value="cutaway"><a href={`/products/${product.slug}-cutaway.png`} target="_blank" rel="noreferrer" className="cutaway-link"><img className="technical-image" src={`/products/${product.slug}-cutaway.png`} alt={`${product.name} component cutaway supplied as a design reference`} /><span>Open full-resolution reference ↗</span></a></TabsContent></Tabs>;
}
export function Waitlist({ model = '' }: { model?: string }) {
 const [sent, setSent] = useState(false);
 return <div className="waitlist-form"><div className="prototype-tag">PROTOTYPE FORM · NOT CONNECTED</div><form onSubmit={event => { event.preventDefault(); setSent(true); }} onChange={()=>setSent(false)}><label htmlFor="wait-email">Email address</label><div className="email-row"><Input id="wait-email" name="email" type="email" required placeholder="you@example.com" autoComplete="email" aria-describedby="wait-note" /><Button type="submit" className="action">Try the waitlist <span aria-hidden="true">↗</span></Button></div><input type="hidden" name="model" value={model}/><p id="wait-note">Demo only. Your email is not sent or stored, and you will not be added to a list.</p><p role="status" className="form-status">{sent ? 'Demo complete. Nothing was submitted. A live waitlist will need a connected endpoint.' : ''}</p></form></div>;
}
