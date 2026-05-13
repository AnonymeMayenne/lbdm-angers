import { addPropertyControls, ControlType } from "framer"

const T = { navy: "#163258", orange: "#F59A23", white: "#FFFFFF", muted: "rgba(255,255,255,.5)" }

const STEPS = [
    { n: "01", title: "Conception & conseil", desc: "Un conseiller se déplace chez vous — gratuitement, sans engagement — pour mesurer, écouter et proposer les solutions adaptées." },
    { n: "02", title: "Fabrication française", desc: "Vos menuiseries sont fabriquées sur mesure en Aveyron dans les 30 000 m² d'ateliers de Castes Industrie, certifiés NF." },
    { n: "03", title: "Pose professionnelle", desc: "Nos artisans qualifiés installent avec soin. Chaque pose est propre, rapide et garantie dans les règles de l'art." },
    { n: "04", title: "Suivi & SAV local", desc: "Votre boutique Angers reste votre interlocuteur unique après la pose. Disponibles pour tout réglage ou question." },
]

export function LBDMProcess(props) {
    const { tag, title, lead } = props
    return (
        <div style={{
            width: "100%", background: T.navy,
            clipPath: "polygon(0 40px, 100% 0, 100% calc(100% - 40px), 0 100%)",
            padding: "120px 48px", boxSizing: "border-box",
        }}>
            <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
                {/* Gauche */}
                <div>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: T.orange, marginBottom: 16 }}>
                        <span style={{ width: 20, height: 3, background: T.orange, borderRadius: 2, display: "block" }} />{tag}
                    </div>
                    <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: "clamp(26px, 3.2vw, 44px)", color: T.white, lineHeight: 1.1, margin: "0 0 16px" }}>{title}</h2>
                    <p style={{ fontSize: 17, color: T.muted, maxWidth: 580, lineHeight: 1.75, margin: 0 }}>{lead}</p>
                </div>
                {/* Droite — étapes */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                    {STEPS.map((s, i) => (
                        <div key={i} style={{
                            display: "flex", gap: 22, alignItems: "flex-start",
                            padding: "24px 0",
                            borderBottom: i < STEPS.length - 1 ? "1px solid rgba(255,255,255,.08)" : "none",
                        }}>
                            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 48, fontWeight: 900, color: T.orange, opacity: .25, lineHeight: 1, flexShrink: 0, width: 52, textAlign: "right" }}>{s.n}</span>
                            <div>
                                <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 17, color: T.white, marginBottom: 6 }}>{s.title}</div>
                                <div style={{ fontSize: 14, color: T.muted, lineHeight: 1.7 }}>{s.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

LBDMProcess.defaultProps = {
    tag: "Notre méthode",
    title: "De la visite à la pose, on gère tout.",
    lead: "Depuis 1999, La Boutique du Menuisier accompagne ses clients avec une méthode simple et éprouvée qui garantit un résultat à la hauteur de vos attentes.",
}

addPropertyControls(LBDMProcess, {
    tag: { type: ControlType.String, title: "Tag" },
    title: { type: ControlType.String, title: "Titre" },
    lead: { type: ControlType.String, title: "Lead", displayTextArea: true },
})
