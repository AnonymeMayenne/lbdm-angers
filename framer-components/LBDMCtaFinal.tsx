import { addPropertyControls, ControlType } from "framer"

const T = { navyDark: "#0E2140", orange: "#F59A23", ink: "#0F1E33", white: "#FFFFFF" }

export function LBDMCtaFinal(props) {
    const { pretitle, title, titleAccent, lead, phone } = props
    return (
        <div style={{ background: T.navyDark, padding: "120px 48px", width: "100%", textAlign: "center", boxSizing: "border-box", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${T.orange} 0%, transparent 50%)`, opacity: .04 }} />
            <div style={{ position: "relative", zIndex: 1, maxWidth: 720, margin: "0 auto" }}>
                <div style={{ fontSize: 15, color: "rgba(255,255,255,.5)", marginBottom: 16 }}>{pretitle}</div>
                <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: "clamp(32px, 5vw, 56px)", color: T.white, lineHeight: 1.1, margin: "0 0 24px" }}>
                    {title}<br /><em style={{ fontStyle: "italic" }}>{titleAccent}</em>
                </h2>
                <p style={{ fontSize: 17, color: "rgba(255,255,255,.55)", lineHeight: 1.75, margin: "0 0 48px" }}>{lead}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap", marginBottom: 40 }}>
                    <a href="#devis" style={{
                        display: "inline-flex", alignItems: "center", gap: 10,
                        background: T.orange, color: T.ink,
                        fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 16,
                        padding: "18px 40px", borderRadius: 50, textDecoration: "none",
                        boxShadow: "0 8px 28px rgba(245,154,35,.45)",
                    }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill={T.ink}><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
                        Obtenir mon devis gratuit
                    </a>
                    <a href={`tel:+33${phone.replace(/^0/, "").replace(/\s/g, "")}`} style={{
                        display: "inline-flex", alignItems: "center", gap: 10,
                        color: T.white, fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 16,
                        padding: "17px 36px", borderRadius: 50,
                        border: "1.5px solid rgba(255,255,255,.22)", textDecoration: "none",
                    }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill={T.white}><path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" /></svg>
                        {phone}
                    </a>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 32, flexWrap: "wrap" }}>
                    {["Aucun engagement", "Réponse sous 24h", "Données confidentielles"].map((item, i) => (
                        <span key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "rgba(255,255,255,.5)", fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill={T.orange}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

LBDMCtaFinal.defaultProps = {
    pretitle: "Votre projet mérite mieux qu'un devis en ligne",
    title: "Rencontrons-nous.",
    titleAccent: "C'est gratuit.",
    lead: "Un conseiller La Boutique du Menuisier Angers se déplace chez vous dans tout le Maine-et-Loire. Mesures, conseils, devis — offerts, sans engagement.",
    phone: "06 80 25 58 65",
}

addPropertyControls(LBDMCtaFinal, {
    pretitle: { type: ControlType.String, title: "Pré-titre" },
    title: { type: ControlType.String, title: "Titre" },
    titleAccent: { type: ControlType.String, title: "Titre (italique)" },
    lead: { type: ControlType.String, title: "Lead", displayTextArea: true },
    phone: { type: ControlType.String, title: "Téléphone" },
})
