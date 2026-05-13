import { addPropertyControls, ControlType } from "framer"

const T = { cream: "#FBF8F4", navy: "#163258", orange: "#F59A23", ink: "#0F1E33", muted: "#8896AA", white: "#FFFFFF" }

const STARS = Array(5).fill(null).map((_, i) => (
    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={T.orange}>
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
))

function TestiCard({ quote, name, city, initial }) {
    return (
        <div style={{ background: T.white, borderRadius: 16, padding: 28, boxShadow: "0 4px 24px rgba(14,33,64,.07)" }}>
            <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>{STARS}</div>
            <p style={{ fontSize: 15, color: T.ink, lineHeight: 1.7, fontStyle: "italic", margin: "0 0 24px" }}>« {quote} »</p>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 40, height: 40, background: T.navy, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 16, color: T.white, flexShrink: 0 }}>{initial}</div>
                <div>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 14, color: T.ink }}>{name}</div>
                    <div style={{ fontSize: 12, color: T.muted }}>{city}</div>
                </div>
            </div>
        </div>
    )
}

export function LBDMTestimonials(props) {
    const { tag, title, t1Quote, t1Name, t1City, t2Quote, t2Name, t2City, t3Quote, t3Name, t3City } = props
    const testis = [
        { quote: t1Quote, name: t1Name, city: t1City, initial: t1Name[0] },
        { quote: t2Quote, name: t2Name, city: t2City, initial: t2Name[0] },
        { quote: t3Quote, name: t3Name, city: t3City, initial: t3Name[0] },
    ]
    return (
        <div style={{ background: T.cream, padding: "100px 48px", width: "100%", boxSizing: "border-box" }}>
            <div style={{ maxWidth: 1240, margin: "0 auto" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: T.orange, marginBottom: 16 }}>
                    <span style={{ width: 20, height: 3, background: T.orange, borderRadius: 2, display: "block" }} />{tag}
                </div>
                <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: "clamp(26px, 3.2vw, 44px)", color: T.ink, lineHeight: 1.1, margin: "0 0 48px" }}>{title}</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
                    {testis.map((t, i) => <TestiCard key={i} {...t} />)}
                </div>
            </div>
        </div>
    )
}

LBDMTestimonials.defaultProps = {
    tag: "Avis clients",
    title: "Ce que nos clients d'Anjou nous disent.",
    t1Quote: "Remplacement de 6 fenêtres et de notre porte d'entrée aluminium. Résultat impeccable, les artisans étaient sérieux et propres. La différence de confort thermique est immédiate !",
    t1Name: "Marie-Claire B.", t1City: "Saint-Barthélemy-d'Anjou",
    t2Quote: "Devis reçu en 24h, conseiller à l'écoute et sans pression. Ma porte mixte bois/alu est absolument magnifique — mes voisins me demandent l'adresse !",
    t2Name: "Philippe & Nathalie R.", t2City: "Saumur",
    t3Quote: "Ils ont géré les démarches MaPrimeRénov' à notre place. On a économisé plus de 2 000 € sur notre projet. Service irréprochable du début à la fin.",
    t3Name: "Laurent V.", t3City: "Cholet",
}

addPropertyControls(LBDMTestimonials, {
    tag: { type: ControlType.String, title: "Tag" },
    title: { type: ControlType.String, title: "Titre" },
    t1Quote: { type: ControlType.String, title: "Avis 1", displayTextArea: true },
    t1Name: { type: ControlType.String, title: "Avis 1 — Nom" },
    t1City: { type: ControlType.String, title: "Avis 1 — Ville" },
    t2Quote: { type: ControlType.String, title: "Avis 2", displayTextArea: true },
    t2Name: { type: ControlType.String, title: "Avis 2 — Nom" },
    t2City: { type: ControlType.String, title: "Avis 2 — Ville" },
    t3Quote: { type: ControlType.String, title: "Avis 3", displayTextArea: true },
    t3Name: { type: ControlType.String, title: "Avis 3 — Nom" },
    t3City: { type: ControlType.String, title: "Avis 3 — Ville" },
})
