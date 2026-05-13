import { addPropertyControls, ControlType } from "framer"
import { useState } from "react"

const T = { navyDark: "#0E2140", navy: "#163258", orange: "#F59A23", ink: "#0F1E33", muted: "#8896AA", white: "#FFFFFF", border: "#E2E8F0" }

const DEFAULT_FAQS = [
    { q: "Quel est le prix d'une porte d'entrée aluminium à Angers ?", a: "Le prix d'une porte d'entrée aluminium varie entre 1 500 € et 4 500 € pose comprise. Avec les aides de l'État (MaPrimeRénov', CEE), votre reste à charge peut être significativement réduit. Demandez un devis gratuit à domicile pour une estimation précise." },
    { q: "Quel délai pour la pose de fenêtres ou d'une porte d'entrée ?", a: "Après validation du devis, comptez 4 à 8 semaines pour la fabrication sur mesure en Aveyron, puis 1 à 2 jours pour la pose selon le volume de travaux. Notre équipe vous tient informé à chaque étape." },
    { q: "La TVA à 5,5 % s'applique-t-elle à mes menuiseries ?", a: "Oui, dans la grande majorité des cas. La TVA réduite à 5,5 % s'applique aux travaux de rénovation énergétique dans les logements de plus de 2 ans. Nos conseillers vérifient votre éligibilité lors de la visite à domicile." },
    { q: "Quelle est la différence entre une porte aluminium et une porte PVC ?", a: "L'aluminium offre une rigidité supérieure, un design plus fin et une très grande liberté de coloris (RAL sur mesure). Le PVC est plus économique, tout aussi performant thermiquement et sans entretien." },
    { q: "Intervenez-vous dans toute l'agglomération angevine ?", a: "Oui. Notre boutique de Sainte-Gemmes-sur-Loire intervient dans tout le Maine-et-Loire : Angers, Saint-Barthélemy-d'Anjou, Les Ponts-de-Cé, Avrillé, Trélazé, Cholet, Saumur et les communes alentour." },
]

function FAQItem({ q, a }) {
    const [open, setOpen] = useState(false)
    return (
        <div style={{ borderBottom: `1px solid ${T.border}` }}>
            <button onClick={() => setOpen(!open)} style={{
                width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "20px 0", background: "none", border: "none", cursor: "pointer",
                fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 15, color: T.navy,
                textAlign: "left", gap: 16,
            }}>
                {q}
                <svg width="20" height="20" viewBox="0 0 24 24" fill={T.orange} style={{ flexShrink: 0, transform: open ? "rotate(45deg)" : "none", transition: "transform .2s" }}>
                    <path d="M19 13H13v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
            </button>
            {open && (
                <div style={{ paddingBottom: 20, fontSize: 15, color: T.muted, lineHeight: 1.75 }}>{a}</div>
            )}
        </div>
    )
}

export function LBDMFAQ(props) {
    const { aideTitle, aideDesc, aideCta, faqTitle } = props
    return (
        <div style={{ width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", boxSizing: "border-box" }}>
            {/* Gauche — Aides */}
            <div style={{ background: T.navyDark, padding: "80px 64px", display: "flex", flexDirection: "column", gap: 24 }}>
                <div style={{ fontSize: 40 }}>💶</div>
                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 22, color: T.white, margin: 0, lineHeight: 1.2 }}>{aideTitle}</h3>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,.6)", lineHeight: 1.75, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: aideDesc }} />
                <div style={{ color: T.orange, fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 14 }}>{aideCta}</div>
            </div>
            {/* Droite — FAQ */}
            <div style={{ background: T.white, padding: "80px 64px" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: T.orange, marginBottom: 16 }}>
                    <span style={{ width: 20, height: 3, background: T.orange, borderRadius: 2, display: "block" }} />Questions fréquentes
                </div>
                <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: "clamp(22px, 2.5vw, 36px)", color: T.ink, lineHeight: 1.15, margin: "0 0 32px" }}>{faqTitle}</h2>
                {DEFAULT_FAQS.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
            </div>
        </div>
    )
}

LBDMFAQ.defaultProps = {
    aideTitle: "Jusqu'à 30 % d'économies sur votre projet",
    aideDesc: "MaPrimeRénov', CEE, TVA à 5,5 %, éco-PTZ… Nos conseillers gèrent les démarches à votre place. Comme Laurent V. (Cholet) qui a économisé <strong style='color:#F59A23'>plus de 2 000 €</strong> sur son projet sans lever le petit doigt.",
    aideCta: "→ Demandez votre simulation d'aides gratuite",
    faqTitle: "Tout ce que vous voulez savoir avant de nous appeler.",
}

addPropertyControls(LBDMFAQ, {
    aideTitle: { type: ControlType.String, title: "Titre aides" },
    aideDesc: { type: ControlType.String, title: "Texte aides", displayTextArea: true },
    aideCta: { type: ControlType.String, title: "CTA aides" },
    faqTitle: { type: ControlType.String, title: "Titre FAQ" },
})
