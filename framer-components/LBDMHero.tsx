import { addPropertyControls, ControlType } from "framer"
import { useState } from "react"

const T = {
    navyDark: "#0E2140",
    navy: "#163258",
    orange: "#F59A23",
    orangeDark: "#D4841A",
    ink: "#0F1E33",
    white: "#FFFFFF",
    muted: "#8896AA",
    border: "#E2E8F0",
}

const PRODUCTS = [
    "Porte d'entrée aluminium",
    "Porte d'entrée PVC",
    "Porte d'entrée bois",
    "Porte d'entrée mixte bois / alu",
    "Fenêtres & baies vitrées",
    "Volets roulants",
    "Plusieurs produits",
]

export function LBDMHero(props) {
    const { eyebrow, h1, h1Accent, paragraph, phone, webhookUrl } = props
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        const fd = new FormData(e.target)
        const data = Object.fromEntries(fd.entries())
        try {
            if (webhookUrl) await fetch(webhookUrl, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
        } catch (_) {}
        if (typeof window !== "undefined" && (window as any).gtag) {
            (window as any).gtag("event", "generate_lead", { event_category: "formulaire", event_label: data.projet, value: 1 })
        }
        setLoading(false)
        setSubmitted(true)
        e.target.reset()
    }

    return (
        <div style={{
            width: "100%", minHeight: "100vh",
            background: T.navyDark,
            position: "relative", overflow: "hidden",
            display: "flex", alignItems: "center",
            fontFamily: "'DM Sans', sans-serif",
            boxSizing: "border-box",
        }}>
            {/* Photo de fond */}
            <div style={{
                position: "absolute", inset: 0,
                backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=80&auto=format')",
                backgroundSize: "cover", backgroundPosition: "center",
                opacity: .18,
            }} />

            {/* Contenu */}
            <div style={{
                position: "relative", zIndex: 2,
                maxWidth: 1240, margin: "0 auto",
                padding: "72px 48px 80px",
                display: "grid",
                gridTemplateColumns: "1fr 410px",
                gap: 72,
                alignItems: "center",
                width: "100%",
                boxSizing: "border-box",
            }}>
                {/* Colonne gauche */}
                <div>
                    {/* Eyebrow */}
                    <div style={{
                        display: "inline-flex", alignItems: "center", gap: 10,
                        fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 700,
                        letterSpacing: "2.5px", textTransform: "uppercase", color: T.orange,
                        marginBottom: 24,
                    }}>
                        <span style={{ display: "block", width: 28, height: 3, background: T.orange, borderRadius: 2 }} />
                        {eyebrow}
                    </div>

                    {/* H1 */}
                    <h1 style={{
                        fontFamily: "'Montserrat', sans-serif", fontWeight: 900,
                        fontSize: "clamp(36px, 5vw, 66px)", lineHeight: 1.05,
                        color: T.white, marginBottom: 28, letterSpacing: -1,
                        margin: "0 0 28px",
                    }}>
                        {h1}<br />
                        <span style={{ color: T.orange, position: "relative", display: "inline-block" }}>
                            {h1Accent}
                            <span style={{ position: "absolute", left: 0, bottom: -4, right: 0, height: 4, background: T.orange, borderRadius: 2, opacity: .5 }} />
                        </span>
                    </h1>

                    {/* Para */}
                    <p style={{ fontSize: 17, color: "rgba(255,255,255,.65)", lineHeight: 1.75, maxWidth: 520, margin: "0 0 44px" }}>
                        {paragraph}
                    </p>

                    {/* Boutons */}
                    <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", marginBottom: 36 }}>
                        <a href="#devis" style={{
                            display: "inline-flex", alignItems: "center", gap: 10,
                            background: T.orange, color: T.ink,
                            fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 15,
                            padding: "16px 32px", borderRadius: 50,
                            textDecoration: "none",
                            boxShadow: "0 8px 28px rgba(245,154,35,.45)",
                        }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill={T.ink}><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
                            Obtenir mon devis gratuit
                        </a>
                        <a href={`tel:+33${phone.replace(/^0/, "").replace(/\s/g, "")}`} style={{
                            display: "inline-flex", alignItems: "center", gap: 10,
                            color: T.white, fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 15,
                            padding: "15px 28px", borderRadius: 50,
                            border: "1.5px solid rgba(255,255,255,.22)", textDecoration: "none",
                        }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill={T.white}><path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" /></svg>
                            Appeler maintenant
                        </a>
                    </div>

                    {/* Google badge */}
                    <div style={{
                        display: "inline-flex", alignItems: "center", gap: 10,
                        background: "rgba(255,255,255,.08)", borderRadius: 50,
                        padding: "8px 16px", marginBottom: 32,
                    }}>
                        <svg viewBox="0 0 24 24" width="22" height="22">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        {[1,2,3,4,5].map(i => (
                            <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={T.orange}>
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                        ))}
                        <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 14, color: T.white }}>5,0</span>
                        <span style={{ fontSize: 13, color: "rgba(255,255,255,.5)" }}>· Avis Google</span>
                    </div>

                    {/* KPIs */}
                    <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
                        {[
                            { n: "+200", l: "CHANTIERS EN MAINE-ET-LOIRE" },
                            { n: "24h", l: "DEVIS À DOMICILE" },
                            { n: "30%", l: "D'ÉCONOMIES AVEC LES AIDES" },
                        ].map((kpi, i) => (
                            <div key={i} style={{ display: "flex", alignItems: "center" }}>
                                {i > 0 && <div style={{ width: 1, height: 32, background: "rgba(255,255,255,.12)", margin: "0 24px" }} />}
                                <div style={{ display: "flex", flexDirection: "column", paddingLeft: i === 0 ? 0 : undefined }}>
                                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 22, fontWeight: 800, color: T.orange, lineHeight: 1 }}>{kpi.n}</span>
                                    <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: 1, textTransform: "uppercase", color: "rgba(255,255,255,.4)", marginTop: 4, whiteSpace: "nowrap" }}>{kpi.l}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Formulaire */}
                <div id="devis" style={{
                    background: T.white,
                    borderRadius: 12,
                    overflow: "hidden",
                    boxShadow: "0 24px 80px rgba(0,0,0,.65), 0 0 0 1px rgba(255,255,255,.06)",
                }}>
                    <div style={{ background: T.navy, padding: "22px 28px" }}>
                        <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 15, color: T.white }}>
                            Devis gratuit & sans engagement
                        </span>
                    </div>
                    <div style={{ padding: 28 }}>
                        {submitted ? (
                            <div style={{ textAlign: "center", padding: "32px 0" }}>
                                <div style={{ width: 56, height: 56, background: T.orange, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill={T.ink}><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                                </div>
                                <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 18, color: T.navy, marginBottom: 8 }}>Demande envoyée !</div>
                                <p style={{ fontSize: 14, color: T.muted, lineHeight: 1.6 }}>Un conseiller vous contacte <strong style={{ color: T.orange }}>sous 24h</strong> pour votre visite à domicile gratuite.</p>
                                <button onClick={() => setSubmitted(false)} style={{ marginTop: 20, background: "none", border: "none", color: T.orange, fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>Nouvelle demande</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <p style={{ fontSize: 13, color: T.muted, marginBottom: 20 }}>
                                    Visite à domicile offerte · Réponse sous <strong style={{ color: T.orange }}>24h</strong> · Aucun frais caché
                                </p>
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 13 }}>
                                    {[{ id: "prenom", label: "Prénom", ph: "Jean" }, { id: "nom", label: "Nom", ph: "Dupont" }].map(f => (
                                        <div key={f.id}>
                                            <label style={labelStyle}>{f.label}</label>
                                            <input name={f.id} type="text" placeholder={f.ph} required style={inputStyle} />
                                        </div>
                                    ))}
                                </div>
                                {[
                                    { id: "tel", label: "Téléphone", type: "tel", ph: "06 XX XX XX XX" },
                                    { id: "email", label: "Email", type: "email", ph: "jean@exemple.fr" },
                                ].map(f => (
                                    <div key={f.id} style={{ marginBottom: 13 }}>
                                        <label style={labelStyle}>{f.label}</label>
                                        <input name={f.id} type={f.type} placeholder={f.ph} required style={inputStyle} />
                                    </div>
                                ))}
                                <div style={{ marginBottom: 13 }}>
                                    <label style={labelStyle}>Votre projet</label>
                                    <select name="projet" required style={inputStyle}>
                                        <option value="" disabled>Choisissez un produit</option>
                                        {PRODUCTS.map(p => <option key={p}>{p}</option>)}
                                    </select>
                                </div>
                                <div style={{ marginBottom: 6 }}>
                                    <label style={labelStyle}>Message (optionnel)</label>
                                    <textarea name="message" placeholder="Décrivez votre projet…" style={{ ...inputStyle, height: 72, resize: "none" }} />
                                </div>
                                <button type="submit" disabled={loading} style={{
                                    width: "100%", marginTop: 6,
                                    background: T.orange, color: T.ink,
                                    fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 15,
                                    padding: 16, border: "none", borderRadius: 50,
                                    cursor: loading ? "wait" : "pointer",
                                    display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                                    boxShadow: "0 6px 20px rgba(245,154,35,.4)",
                                }}>
                                    <svg width="17" height="17" viewBox="0 0 24 24" fill={T.ink}><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
                                    {loading ? "Envoi en cours…" : "Envoyer ma demande"}
                                </button>
                                <p style={{ fontSize: 11, color: T.muted, textAlign: "center", marginTop: 10, display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill={T.muted}><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" /></svg>
                                    Données confidentielles · Aucun démarchage
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "'Montserrat', sans-serif",
    fontSize: 11, fontWeight: 700, letterSpacing: ".8px", textTransform: "uppercase",
    color: "#163258", marginBottom: 6,
}

const inputStyle: React.CSSProperties = {
    width: "100%", padding: "12px 15px",
    border: "1.5px solid #E2E8F0", borderRadius: 8,
    fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#0F1E33",
    background: "#FFFFFF", outline: "none", boxSizing: "border-box",
}

LBDMHero.defaultProps = {
    eyebrow: "ARTISAN CERTIFIÉ · ANGERS & MAINE-ET-LOIRE",
    h1: "Votre porte,",
    h1Accent: "notre savoir-faire.",
    paragraph: "Portes d'entrée et menuiseries sur mesure fabriquées en France.\nAluminium, PVC, bois, mixte — posées par nos artisans à Angers.\nDevis gratuit chez vous sous 24h.",
    phone: "06 80 25 58 65",
    webhookUrl: "",
}

addPropertyControls(LBDMHero, {
    eyebrow: { type: ControlType.String, title: "Eyebrow" },
    h1: { type: ControlType.String, title: "H1 ligne 1" },
    h1Accent: { type: ControlType.String, title: "H1 accent (orange)" },
    paragraph: { type: ControlType.String, title: "Paragraphe", displayTextArea: true },
    phone: { type: ControlType.String, title: "Téléphone" },
    webhookUrl: { type: ControlType.String, title: "Webhook Make URL" },
})
