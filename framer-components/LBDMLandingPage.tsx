/**
 * LBDM Angers — Landing Page complète
 * Coller dans Framer : Assets → Code → + New → tout remplacer → Ctrl+S
 * Toutes les sections sont éditables depuis le panneau droite de Framer.
 */

import { addPropertyControls, ControlType } from "framer"
import { useState } from "react"

// ─── Tokens ───────────────────────────────────────────────────────────────────
const T = {
    navyDark: "#0E2140",
    navy: "#163258",
    orange: "#F59A23",
    orangeDark: "#D4841A",
    ink: "#0F1E33",
    white: "#FFFFFF",
    cream: "#FBF8F4",
    muted: "#8896AA",
    border: "#E2E8F0",
}

const font = { montserrat: "'Montserrat', sans-serif", dmSans: "'DM Sans', sans-serif" }

// ─── Icônes réutilisables ──────────────────────────────────────────────────────
const IconArrow = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
const IconPhone = ({ fill = T.white, size = 18 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill={fill}><path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" /></svg>
const IconCheck = () => <svg width="13" height="13" viewBox="0 0 24 24" fill={T.orange}><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
const IconStar = () => <svg width="16" height="16" viewBox="0 0 24 24" fill={T.orange}><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
const IconShield = () => <svg width="12" height="12" viewBox="0 0 24 24" fill={T.muted}><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" /></svg>

// ─── Tag de section ────────────────────────────────────────────────────────────
const SectionTag = ({ label, light = false }) => (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: font.montserrat, fontSize: 11, fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase" as const, color: T.orange, marginBottom: 16 }}>
        <span style={{ width: 20, height: 3, background: T.orange, borderRadius: 2, display: "block" }} />{label}
    </div>
)

// ─── NAV ──────────────────────────────────────────────────────────────────────
function Nav({ phone, ctaHref }) {
    return (
        <div style={{ width: "100%", height: 70, background: T.navyDark, display: "flex", alignItems: "center", padding: "0 48px", borderBottom: "1px solid rgba(255,255,255,.07)", boxSizing: "border-box" as const, fontFamily: font.montserrat }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginRight: "auto" }}>
                <div style={{ width: 40, height: 40, background: T.orange, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 22, color: T.white }}>B</div>
                <div>
                    <div style={{ fontSize: 10, fontWeight: 500, color: "rgba(255,255,255,.6)", letterSpacing: "2.5px", textTransform: "uppercase" as const }}>LA BOUTIQUE DU</div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: T.white, letterSpacing: ".5px", textTransform: "uppercase" as const }}>MENUISIER ANGERS</div>
                </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <a href={`tel:+33${phone.replace(/^0/, "").replace(/\s/g, "")}`} style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 700, fontSize: 15, color: T.white, textDecoration: "none" }}>
                    <IconPhone fill={T.orange} size={18} />{phone}
                </a>
                <a href={ctaHref} style={{ background: T.orange, color: T.ink, fontWeight: 700, fontSize: 13, padding: "10px 22px", borderRadius: 50, textDecoration: "none" }}>Devis gratuit</a>
            </div>
        </div>
    )
}

// ─── HERO + FORMULAIRE ────────────────────────────────────────────────────────
const PRODUCTS_OPTIONS = ["Porte d'entrée aluminium", "Porte d'entrée PVC", "Porte d'entrée bois", "Porte d'entrée mixte bois / alu", "Fenêtres & baies vitrées", "Volets roulants", "Plusieurs produits"]

const inputSt: React.CSSProperties = { width: "100%", padding: "12px 15px", border: `1.5px solid ${T.border}`, borderRadius: 8, fontFamily: font.dmSans, fontSize: 14, color: T.ink, background: T.white, outline: "none", boxSizing: "border-box" }
const labelSt: React.CSSProperties = { display: "block", fontFamily: font.montserrat, fontSize: 11, fontWeight: 700, letterSpacing: ".8px", textTransform: "uppercase", color: T.navy, marginBottom: 6 }

function Hero({ eyebrow, h1, h1Accent, paragraph, phone, webhookUrl }) {
    const [done, setDone] = useState(false)
    const [loading, setLoading] = useState(false)

    async function submit(e) {
        e.preventDefault()
        setLoading(true)
        const data = Object.fromEntries(new FormData(e.target).entries())
        try { if (webhookUrl) await fetch(webhookUrl, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }) } catch (_) {}
        if ((window as any).gtag) (window as any).gtag("event", "generate_lead", { event_category: "formulaire", event_label: data.projet, value: 1 })
        setLoading(false); setDone(true); e.target.reset()
    }

    return (
        <div style={{ width: "100%", minHeight: "100vh", background: T.navyDark, position: "relative", overflow: "hidden", display: "flex", alignItems: "center", fontFamily: font.dmSans, boxSizing: "border-box" as const }}>
            <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=80&auto=format')", backgroundSize: "cover", backgroundPosition: "center", opacity: .18 }} />
            <div style={{ position: "relative", zIndex: 2, maxWidth: 1240, margin: "0 auto", padding: "72px 48px 80px", display: "grid", gridTemplateColumns: "1fr 410px", gap: 72, alignItems: "center", width: "100%", boxSizing: "border-box" as const }}>
                {/* Gauche */}
                <div>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: font.montserrat, fontSize: 11, fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase" as const, color: T.orange, marginBottom: 24 }}>
                        <span style={{ width: 28, height: 3, background: T.orange, borderRadius: 2, display: "block" }} />{eyebrow}
                    </div>
                    <h1 style={{ fontFamily: font.montserrat, fontWeight: 900, fontSize: "clamp(36px,5vw,66px)", lineHeight: 1.05, color: T.white, margin: "0 0 28px", letterSpacing: -1 }}>
                        {h1}<br />
                        <span style={{ color: T.orange, position: "relative", display: "inline-block" }}>
                            {h1Accent}
                            <span style={{ position: "absolute", left: 0, bottom: -4, right: 0, height: 4, background: T.orange, borderRadius: 2, opacity: .5 }} />
                        </span>
                    </h1>
                    <p style={{ fontSize: 17, color: "rgba(255,255,255,.65)", lineHeight: 1.75, maxWidth: 520, margin: "0 0 44px" }}>{paragraph}</p>
                    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" as const, marginBottom: 36 }}>
                        <a href="#devis" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: T.orange, color: T.ink, fontFamily: font.montserrat, fontWeight: 800, fontSize: 15, padding: "16px 32px", borderRadius: 50, textDecoration: "none", boxShadow: "0 8px 28px rgba(245,154,35,.45)" }}>
                            <IconArrow />Obtenir mon devis gratuit
                        </a>
                        <a href={`tel:+33${phone.replace(/^0/, "").replace(/\s/g, "")}`} style={{ display: "inline-flex", alignItems: "center", gap: 10, color: T.white, fontFamily: font.montserrat, fontWeight: 600, fontSize: 15, padding: "15px 28px", borderRadius: 50, border: "1.5px solid rgba(255,255,255,.22)", textDecoration: "none" }}>
                            <IconPhone />Appeler maintenant
                        </a>
                    </div>
                    {/* Google badge */}
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,.08)", borderRadius: 50, padding: "8px 16px", marginBottom: 32 }}>
                        <svg viewBox="0 0 24 24" width="22" height="22"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
                        {[1,2,3,4,5].map(i => <IconStar key={i} />)}
                        <span style={{ fontFamily: font.montserrat, fontWeight: 700, fontSize: 14, color: T.white }}>5,0</span>
                        <span style={{ fontSize: 13, color: "rgba(255,255,255,.5)" }}>· Avis Google</span>
                    </div>
                    {/* KPIs */}
                    <div style={{ display: "flex", alignItems: "center" }}>
                        {[{ n: "+200", l: "CHANTIERS EN MAINE-ET-LOIRE" }, { n: "24h", l: "DEVIS À DOMICILE" }, { n: "30%", l: "D'ÉCONOMIES AVEC LES AIDES" }].map((k, i) => (
                            <div key={i} style={{ display: "flex", alignItems: "center" }}>
                                {i > 0 && <div style={{ width: 1, height: 32, background: "rgba(255,255,255,.12)", margin: "0 24px" }} />}
                                <div>
                                    <span style={{ fontFamily: font.montserrat, fontSize: 22, fontWeight: 800, color: T.orange, display: "block", lineHeight: 1 }}>{k.n}</span>
                                    <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: 1, textTransform: "uppercase" as const, color: "rgba(255,255,255,.4)", marginTop: 4, display: "block", whiteSpace: "nowrap" as const }}>{k.l}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Formulaire */}
                <div id="devis" style={{ background: T.white, borderRadius: 12, overflow: "hidden", boxShadow: "0 24px 80px rgba(0,0,0,.65)" }}>
                    <div style={{ background: T.navy, padding: "22px 28px" }}>
                        <span style={{ fontFamily: font.montserrat, fontWeight: 800, fontSize: 15, color: T.white }}>Devis gratuit & sans engagement</span>
                    </div>
                    <div style={{ padding: 28 }}>
                        {done ? (
                            <div style={{ textAlign: "center", padding: "32px 0" }}>
                                <div style={{ width: 56, height: 56, background: T.orange, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                                    <IconCheck />
                                </div>
                                <div style={{ fontFamily: font.montserrat, fontWeight: 800, fontSize: 18, color: T.navy, marginBottom: 8 }}>Demande envoyée !</div>
                                <p style={{ fontSize: 14, color: T.muted, lineHeight: 1.6 }}>Un conseiller vous contacte <strong style={{ color: T.orange }}>sous 24h</strong>.</p>
                                <button onClick={() => setDone(false)} style={{ marginTop: 16, background: "none", border: "none", color: T.orange, fontFamily: font.montserrat, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>Nouvelle demande</button>
                            </div>
                        ) : (
                            <form onSubmit={submit}>
                                <p style={{ fontSize: 13, color: T.muted, marginBottom: 20 }}>Visite à domicile offerte · Réponse sous <strong style={{ color: T.orange }}>24h</strong> · Aucun frais caché</p>
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 13 }}>
                                    <div><label style={labelSt}>Prénom</label><input name="prenom" type="text" placeholder="Jean" required style={inputSt} /></div>
                                    <div><label style={labelSt}>Nom</label><input name="nom" type="text" placeholder="Dupont" required style={inputSt} /></div>
                                </div>
                                <div style={{ marginBottom: 13 }}><label style={labelSt}>Téléphone</label><input name="tel" type="tel" placeholder="06 XX XX XX XX" required style={inputSt} /></div>
                                <div style={{ marginBottom: 13 }}><label style={labelSt}>Email</label><input name="email" type="email" placeholder="jean@exemple.fr" required style={inputSt} /></div>
                                <div style={{ marginBottom: 13 }}>
                                    <label style={labelSt}>Votre projet</label>
                                    <select name="projet" required style={inputSt}>
                                        <option value="" disabled>Choisissez un produit</option>
                                        {PRODUCTS_OPTIONS.map(p => <option key={p}>{p}</option>)}
                                    </select>
                                </div>
                                <div style={{ marginBottom: 6 }}><label style={labelSt}>Message (optionnel)</label><textarea name="message" placeholder="Décrivez votre projet…" style={{ ...inputSt, height: 72, resize: "none" }} /></div>
                                <button type="submit" disabled={loading} style={{ width: "100%", marginTop: 6, background: T.orange, color: T.ink, fontFamily: font.montserrat, fontWeight: 800, fontSize: 15, padding: 16, border: "none", borderRadius: 50, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, boxShadow: "0 6px 20px rgba(245,154,35,.4)" }}>
                                    <IconArrow />{loading ? "Envoi…" : "Envoyer ma demande"}
                                </button>
                                <p style={{ fontSize: 11, color: T.muted, textAlign: "center", marginTop: 10, display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
                                    <IconShield />Données confidentielles · Aucun démarchage
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

// ─── STRIP ORANGE ─────────────────────────────────────────────────────────────
function Strip() {
    const items = [
        { icon: <svg width="34" height="34" viewBox="0 0 24 24" fill={T.navyDark}><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" /></svg>, label: "Fabriqué en Aveyron", sub: "Castes Industrie · depuis 1960" },
        { icon: <svg width="34" height="34" viewBox="0 0 24 24" fill={T.navyDark}><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" /></svg>, label: "Serrure 5 points", sub: "Standard de série · 5 clés incluses" },
        { icon: <svg width="34" height="34" viewBox="0 0 24 24" fill={T.navyDark}><path d="M12 3L1 9l4 2.18V17c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-5.82L21 9 12 3zm0 12.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>, label: "Triple vitrage", sub: "Feuilleté anti-effraction" },
        { icon: <svg width="34" height="34" viewBox="0 0 24 24" fill={T.navyDark}><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" /></svg>, label: "Aides de l'État", sub: "MaPrimeRénov' · CEE · TVA 5,5%" },
    ]
    return (
        <div style={{ background: T.orange, padding: "28px 48px", width: "100%", boxSizing: "border-box" as const }}>
            <div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" as const, gap: 20 }}>
                {items.map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center" }}>
                        {i > 0 && <div style={{ width: 1, height: 36, background: "rgba(14,33,64,.2)", marginRight: 32 }} />}
                        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                            {item.icon}
                            <div>
                                <div style={{ fontFamily: font.montserrat, fontSize: 16, fontWeight: 600, color: T.navyDark, lineHeight: 1 }}>{item.label}</div>
                                <div style={{ fontSize: 12, color: T.navyDark, opacity: .75, marginTop: 4 }}>{item.sub}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

// ─── PRODUITS ─────────────────────────────────────────────────────────────────
const PRODUCTS_DATA = [
    { image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", badge: "+ Populaire", badgeBg: T.orange, badgeColor: T.ink, mat: "Aluminium", name: "Portes d'entrée Alu", desc: "Le choix du design et de la durabilité. Rigidité extrême, 21 coloris RAL, isolation jusqu'à UD 1,15.", feats: ["Rupture de pont thermique totale", "Labels Qualificoat & Qualimarine", "100% recyclable · brevet monobloc"] },
    { image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80", badge: "", badgeBg: T.orange, badgeColor: T.ink, mat: "PVC", name: "Fenêtres & Portes PVC", desc: "Performance thermique jusqu'à UW 1,0. Entretien minimal, large choix de teintes.", feats: ["Certifié NF · marquage CE", "PVC 99% recyclable", "Éligible crédit d'impôt"] },
    { image: "https://images.unsplash.com/photo-1464146072230-91cabc968ddb?w=600&q=80", badge: "", badgeBg: T.orange, badgeColor: T.ink, mat: "Bois", name: "Menuiseries Bois", desc: "Chaleur, authenticité et caractère. Idéal pour les maisons de caractère angevines.", feats: ["Finitions artisanales sur mesure", "Bois massif certifié PEFC", "Teintes & lasures personnalisables"] },
    { image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80", badge: "Nouveauté", badgeBg: T.navy, badgeColor: T.orange, mat: "Mixte Bois / Alu", name: "Portes Mixtes", desc: "Bois à l'intérieur, aluminium à l'extérieur. Sans compromis.", feats: ["Isolation thermique optimale", "Alu extérieur sans entretien", "Design bicolore exclusif"] },
]

function ProductCard({ p }) {
    const [hov, setHov] = useState(false)
    return (
        <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ background: T.white, borderRadius: 14, overflow: "hidden", border: `1.5px solid ${hov ? T.orange : T.border}`, cursor: "pointer", display: "flex", flexDirection: "column" as const, transform: hov ? "translateY(-6px)" : "none", boxShadow: hov ? "0 20px 48px rgba(14,33,64,.14)" : "none", transition: "all .25s" }}>
            <div style={{ position: "relative", height: 210, overflow: "hidden" }}>
                <img src={p.image} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", transform: hov ? "scale(1.07)" : "scale(1)", transition: "transform .5s" }} />
                {p.badge && <span style={{ position: "absolute", top: 14, right: 14, background: p.badgeBg, color: p.badgeColor, fontFamily: font.montserrat, fontSize: 10, fontWeight: 800, padding: "5px 11px", borderRadius: 50, textTransform: "uppercase" as const }}>{p.badge}</span>}
            </div>
            <div style={{ background: T.navy, padding: "8px 18px", fontFamily: font.montserrat, fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" as const, color: T.orange }}>{p.mat}</div>
            <div style={{ padding: "20px 18px", flex: 1, display: "flex", flexDirection: "column" as const }}>
                <div style={{ fontFamily: font.montserrat, fontSize: 17, fontWeight: 800, color: T.ink, marginBottom: 8 }}>{p.name}</div>
                <div style={{ fontSize: 13, color: T.muted, lineHeight: 1.65, flex: 1 }}>{p.desc}</div>
                <ul style={{ marginTop: 16, display: "flex", flexDirection: "column" as const, gap: 7, listStyle: "none", padding: 0 }}>
                    {p.feats.map((f, i) => <li key={i} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12, fontWeight: 500, color: T.navy }}><IconCheck />{f}</li>)}
                </ul>
            </div>
            <div style={{ padding: "14px 18px", borderTop: `1px solid ${hov ? T.orange : T.border}`, background: hov ? T.orange : T.white, display: "flex", alignItems: "center", justifyContent: "space-between", fontFamily: font.montserrat, fontSize: 12, fontWeight: 700, color: hov ? T.ink : T.navy, textTransform: "uppercase" as const, transition: "all .25s" }}>
                <span>Demander un devis</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" /></svg>
            </div>
        </div>
    )
}

function Products() {
    return (
        <div style={{ padding: "100px 48px", background: T.white, width: "100%", boxSizing: "border-box" as const }}>
            <div style={{ maxWidth: 1240, margin: "0 auto" }}>
                <SectionTag label="Nos gammes" />
                <h2 style={{ fontFamily: font.montserrat, fontWeight: 900, fontSize: "clamp(26px,3.2vw,44px)", color: T.ink, lineHeight: 1.1, margin: "0 0 16px" }}>Chaque maison mérite<br />la bonne menuiserie.</h2>
                <p style={{ fontSize: 17, color: T.muted, maxWidth: 580, lineHeight: 1.75, margin: "0 0 60px" }}>Aluminium, PVC, bois, mixte — quatre matériaux, une seule expertise. Nos conseillers vous guident vers le choix le plus adapté.</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
                    {PRODUCTS_DATA.map((p, i) => <ProductCard key={i} p={p} />)}
                </div>
            </div>
        </div>
    )
}

// ─── PROCESS ──────────────────────────────────────────────────────────────────
const STEPS = [
    { n: "01", title: "Conception & conseil", desc: "Un conseiller se déplace chez vous — gratuitement, sans engagement — pour mesurer, écouter et proposer les solutions adaptées." },
    { n: "02", title: "Fabrication française", desc: "Vos menuiseries sont fabriquées sur mesure en Aveyron dans les 30 000 m² d'ateliers de Castes Industrie, certifiés NF." },
    { n: "03", title: "Pose professionnelle", desc: "Nos artisans qualifiés installent avec soin. Chaque pose est propre, rapide et garantie dans les règles de l'art." },
    { n: "04", title: "Suivi & SAV local", desc: "Votre boutique Angers reste votre interlocuteur unique après la pose. Disponibles pour tout réglage ou question." },
]

function Process() {
    return (
        <div style={{ width: "100%", background: T.navy, clipPath: "polygon(0 40px, 100% 0, 100% calc(100% - 40px), 0 100%)", padding: "120px 48px", boxSizing: "border-box" as const }}>
            <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
                <div>
                    <SectionTag label="Notre méthode" />
                    <h2 style={{ fontFamily: font.montserrat, fontWeight: 900, fontSize: "clamp(26px,3.2vw,44px)", color: T.white, lineHeight: 1.1, margin: "0 0 16px" }}>De la visite à la pose,<br />on gère tout.</h2>
                    <p style={{ fontSize: 17, color: "rgba(255,255,255,.5)", lineHeight: 1.75, margin: 0 }}>Depuis 1999, La Boutique du Menuisier accompagne ses clients avec une méthode simple et éprouvée.</p>
                </div>
                <div>
                    {STEPS.map((s, i) => (
                        <div key={i} style={{ display: "flex", gap: 22, padding: "24px 0", borderBottom: i < 3 ? "1px solid rgba(255,255,255,.08)" : "none" }}>
                            <span style={{ fontFamily: font.montserrat, fontSize: 48, fontWeight: 900, color: T.orange, opacity: .25, lineHeight: 1, flexShrink: 0, width: 52, textAlign: "right" as const }}>{s.n}</span>
                            <div>
                                <div style={{ fontFamily: font.montserrat, fontWeight: 800, fontSize: 17, color: T.white, marginBottom: 6 }}>{s.title}</div>
                                <div style={{ fontSize: 14, color: "rgba(255,255,255,.5)", lineHeight: 1.7 }}>{s.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const FAQS = [
    { q: "Quel est le prix d'une porte d'entrée aluminium à Angers ?", a: "Le prix varie entre 1 500 € et 4 500 € pose comprise. Avec les aides de l'État (MaPrimeRénov', CEE), votre reste à charge peut être significativement réduit." },
    { q: "Quel délai pour la pose de fenêtres ou d'une porte d'entrée ?", a: "Comptez 4 à 8 semaines pour la fabrication sur mesure en Aveyron, puis 1 à 2 jours pour la pose selon le volume de travaux." },
    { q: "La TVA à 5,5 % s'applique-t-elle à mes menuiseries ?", a: "Oui, dans la grande majorité des cas pour les travaux de rénovation énergétique dans les logements de plus de 2 ans." },
    { q: "Quelle est la différence entre une porte aluminium et une porte PVC ?", a: "L'aluminium offre design fin et RAL sur mesure. Le PVC est plus économique, tout aussi performant thermiquement et sans entretien." },
    { q: "Intervenez-vous dans toute l'agglomération angevine ?", a: "Oui : Angers, Saint-Barthélemy-d'Anjou, Les Ponts-de-Cé, Avrillé, Trélazé, Cholet, Saumur et communes alentour." },
]

function FAQItem({ q, a }) {
    const [open, setOpen] = useState(false)
    return (
        <div style={{ borderBottom: `1px solid ${T.border}` }}>
            <button onClick={() => setOpen(!open)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 0", background: "none", border: "none", cursor: "pointer", fontFamily: font.montserrat, fontWeight: 700, fontSize: 15, color: T.navy, textAlign: "left" as const, gap: 16 }}>
                {q}
                <svg width="20" height="20" viewBox="0 0 24 24" fill={T.orange} style={{ flexShrink: 0, transform: open ? "rotate(45deg)" : "none", transition: "transform .2s" }}><path d="M19 13H13v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
            </button>
            {open && <div style={{ paddingBottom: 20, fontSize: 15, color: T.muted, lineHeight: 1.75 }}>{a}</div>}
        </div>
    )
}

function FAQ() {
    return (
        <div style={{ width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", boxSizing: "border-box" as const }}>
            <div style={{ background: T.navyDark, padding: "80px 64px" }}>
                <div style={{ fontSize: 40, marginBottom: 24 }}>💶</div>
                <h3 style={{ fontFamily: font.montserrat, fontWeight: 800, fontSize: 22, color: T.white, margin: "0 0 20px", lineHeight: 1.2 }}>Jusqu'à 30 % d'économies<br />sur votre projet</h3>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,.6)", lineHeight: 1.75, margin: "0 0 24px" }}>MaPrimeRénov', CEE, TVA à 5,5 %, éco-PTZ… Nos conseillers gèrent les démarches à votre place. Comme Laurent V. (Cholet) qui a économisé <strong style={{ color: T.orange }}>plus de 2 000 €</strong> sans lever le petit doigt.</p>
                <div style={{ color: T.orange, fontFamily: font.montserrat, fontWeight: 700, fontSize: 14 }}>→ Demandez votre simulation d'aides gratuite</div>
            </div>
            <div style={{ background: T.white, padding: "80px 64px" }}>
                <SectionTag label="Questions fréquentes" />
                <h2 style={{ fontFamily: font.montserrat, fontWeight: 900, fontSize: "clamp(22px,2.5vw,36px)", color: T.ink, lineHeight: 1.15, margin: "0 0 32px" }}>Tout ce que vous voulez savoir<br />avant de nous appeler.</h2>
                {FAQS.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
            </div>
        </div>
    )
}

// ─── TÉMOIGNAGES ──────────────────────────────────────────────────────────────
const TESTIS = [
    { quote: "Remplacement de 6 fenêtres et de notre porte d'entrée aluminium. Résultat impeccable, les artisans étaient sérieux et propres. La différence de confort thermique est immédiate !", name: "Marie-Claire B.", city: "Saint-Barthélemy-d'Anjou" },
    { quote: "Devis reçu en 24h, conseiller à l'écoute et sans pression. Ma porte mixte bois/alu est absolument magnifique — mes voisins me demandent l'adresse !", name: "Philippe & Nathalie R.", city: "Saumur" },
    { quote: "Ils ont géré les démarches MaPrimeRénov' à notre place. On a économisé plus de 2 000 € sur notre projet. Service irréprochable du début à la fin.", name: "Laurent V.", city: "Cholet" },
]

function Testimonials() {
    return (
        <div style={{ background: T.cream, padding: "100px 48px", width: "100%", boxSizing: "border-box" as const }}>
            <div style={{ maxWidth: 1240, margin: "0 auto" }}>
                <SectionTag label="Avis clients" />
                <h2 style={{ fontFamily: font.montserrat, fontWeight: 900, fontSize: "clamp(26px,3.2vw,44px)", color: T.ink, lineHeight: 1.1, margin: "0 0 48px" }}>Ce que nos clients<br />d'Anjou nous disent.</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
                    {TESTIS.map((t, i) => (
                        <div key={i} style={{ background: T.white, borderRadius: 16, padding: 28, boxShadow: "0 4px 24px rgba(14,33,64,.07)" }}>
                            <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>{[1,2,3,4,5].map(j => <IconStar key={j} />)}</div>
                            <p style={{ fontSize: 15, color: T.ink, lineHeight: 1.7, fontStyle: "italic", margin: "0 0 24px" }}>« {t.quote} »</p>
                            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                <div style={{ width: 40, height: 40, background: T.navy, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: font.montserrat, fontWeight: 800, fontSize: 16, color: T.white, flexShrink: 0 }}>{t.name[0]}</div>
                                <div>
                                    <div style={{ fontFamily: font.montserrat, fontWeight: 700, fontSize: 14, color: T.ink }}>{t.name}</div>
                                    <div style={{ fontSize: 12, color: T.muted }}>{t.city}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// ─── CTA FINALE ───────────────────────────────────────────────────────────────
function CtaFinal({ phone }) {
    return (
        <div style={{ background: T.navyDark, padding: "120px 48px", width: "100%", textAlign: "center", boxSizing: "border-box" as const }}>
            <div style={{ maxWidth: 720, margin: "0 auto" }}>
                <div style={{ fontSize: 15, color: "rgba(255,255,255,.5)", marginBottom: 16 }}>Votre projet mérite mieux qu'un devis en ligne</div>
                <h2 style={{ fontFamily: font.montserrat, fontWeight: 900, fontSize: "clamp(32px,5vw,56px)", color: T.white, lineHeight: 1.1, margin: "0 0 24px" }}>Rencontrons-nous.<br /><em>C'est gratuit.</em></h2>
                <p style={{ fontSize: 17, color: "rgba(255,255,255,.55)", lineHeight: 1.75, margin: "0 0 48px" }}>Un conseiller La Boutique du Menuisier Angers se déplace chez vous dans tout le Maine-et-Loire. Mesures, conseils, devis — offerts, sans engagement.</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" as const, marginBottom: 40 }}>
                    <a href="#devis" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: T.orange, color: T.ink, fontFamily: font.montserrat, fontWeight: 800, fontSize: 16, padding: "18px 40px", borderRadius: 50, textDecoration: "none" }}>
                        <IconArrow />Obtenir mon devis gratuit
                    </a>
                    <a href={`tel:+33${phone.replace(/^0/, "").replace(/\s/g, "")}`} style={{ display: "inline-flex", alignItems: "center", gap: 10, color: T.white, fontFamily: font.montserrat, fontWeight: 600, fontSize: 16, padding: "17px 36px", borderRadius: 50, border: "1.5px solid rgba(255,255,255,.22)", textDecoration: "none" }}>
                        <IconPhone />{phone}
                    </a>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 32, flexWrap: "wrap" as const }}>
                    {["Aucun engagement", "Réponse sous 24h", "Données confidentielles"].map((item, i) => (
                        <span key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "rgba(255,255,255,.5)", fontFamily: font.montserrat, fontWeight: 600 }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill={T.orange}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer({ phone, email, address }) {
    return (
        <footer style={{ background: T.navyDark, padding: "64px 48px 0", width: "100%", boxSizing: "border-box" as const }}>
            <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 64, paddingBottom: 64, borderBottom: "1px solid rgba(255,255,255,.08)" }}>
                <div>
                    <div style={{ fontFamily: font.montserrat, fontWeight: 800, fontSize: 16, color: T.white, marginBottom: 4 }}>La Boutique du Menuisier</div>
                    <div style={{ fontFamily: font.montserrat, fontSize: 12, fontWeight: 700, color: T.orange, letterSpacing: 1, textTransform: "uppercase" as const, marginBottom: 16 }}>Angers · Maine-et-Loire</div>
                    <p style={{ fontSize: 14, color: "rgba(255,255,255,.45)", lineHeight: 1.75, margin: "0 0 24px", maxWidth: 320 }}>Artisan expert en menuiseries et portes d'entrée sur mesure. Réseau Castes Industrie — fabriqué en Aveyron depuis 1960.</p>
                    {[{ text: phone, href: `tel:+33${phone.replace(/^0/, "").replace(/\s/g, "")}` }, { text: email, href: `mailto:${email}` }, { text: address, href: "#" }].map((c, i) => (
                        <a key={i} href={c.href} style={{ display: "block", fontSize: 14, color: "rgba(255,255,255,.45)", textDecoration: "none", marginBottom: 10 }}>{c.text}</a>
                    ))}
                </div>
                <div>
                    <div style={{ fontFamily: font.montserrat, fontWeight: 800, fontSize: 12, color: T.white, letterSpacing: 1, textTransform: "uppercase" as const, marginBottom: 20 }}>Produits</div>
                    {["Portes d'entrée aluminium", "Portes d'entrée PVC", "Portes d'entrée bois", "Portes mixtes bois / alu", "Fenêtres & baies vitrées", "Volets roulants"].map((l, i) => (
                        <a key={i} href="#" style={{ display: "block", fontSize: 14, color: "rgba(255,255,255,.45)", textDecoration: "none", marginBottom: 10 }}>{l}</a>
                    ))}
                </div>
                <div>
                    <div style={{ fontFamily: font.montserrat, fontWeight: 800, fontSize: 12, color: T.white, letterSpacing: 1, textTransform: "uppercase" as const, marginBottom: 20 }}>Infos</div>
                    {["Avis clients", "Demander un devis", "Mentions légales", "Confidentialité"].map((l, i) => (
                        <a key={i} href="#" style={{ display: "block", fontSize: 14, color: "rgba(255,255,255,.45)", textDecoration: "none", marginBottom: 10 }}>{l}</a>
                    ))}
                </div>
            </div>
            <div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 0", flexWrap: "wrap" as const, gap: 12 }}>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,.3)" }}>© 2025 La Boutique du Menuisier Angers</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,.3)", fontStyle: "italic" }}>« La confiance, ça ne s'achète pas, ça se gagne ! »</span>
            </div>
        </footer>
    )
}

// ─── COMPOSANT PRINCIPAL ──────────────────────────────────────────────────────
export function LBDMLandingPage(props) {
    const { phone, eyebrow, h1, h1Accent, paragraph, webhookUrl, email, address } = props
    return (
        <div style={{ width: "100%", fontFamily: font.dmSans, WebkitFontSmoothing: "antialiased" }}>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
            <Nav phone={phone} ctaHref="#devis" />
            <Hero eyebrow={eyebrow} h1={h1} h1Accent={h1Accent} paragraph={paragraph} phone={phone} webhookUrl={webhookUrl} />
            <Strip />
            <Products />
            <Process />
            <FAQ />
            <Testimonials />
            <CtaFinal phone={phone} />
            <Footer phone={phone} email={email} address={address} />
        </div>
    )
}

LBDMLandingPage.defaultProps = {
    phone: "06 80 25 58 65",
    eyebrow: "ARTISAN CERTIFIÉ · ANGERS & MAINE-ET-LOIRE",
    h1: "Votre porte,",
    h1Accent: "notre savoir-faire.",
    paragraph: "Portes d'entrée et menuiseries sur mesure fabriquées en France.\nAluminium, PVC, bois, mixte — posées par nos artisans à Angers.\nDevis gratuit chez vous sous 24h.",
    webhookUrl: "",
    email: "angers@laboutiquedumenuisier.fr",
    address: "10 Rue des Métiers, 49130 Sainte-Gemmes-sur-Loire",
}

addPropertyControls(LBDMLandingPage, {
    phone: { type: ControlType.String, title: "📞 Téléphone" },
    eyebrow: { type: ControlType.String, title: "Eyebrow hero" },
    h1: { type: ControlType.String, title: "H1 ligne 1" },
    h1Accent: { type: ControlType.String, title: "H1 accent orange" },
    paragraph: { type: ControlType.String, title: "Paragraphe hero", displayTextArea: true },
    webhookUrl: { type: ControlType.String, title: "🔗 Webhook Make URL" },
    email: { type: ControlType.String, title: "✉️ Email" },
    address: { type: ControlType.String, title: "📍 Adresse" },
})
