import { addPropertyControls, ControlType } from "framer"

const T = {
    navy: "#163258", navyDark: "#0E2140",
    orange: "#F59A23", ink: "#0F1E33",
    white: "#FFFFFF", muted: "#8896AA", border: "#E2E8F0",
}

const CHECK = (
    <svg width="13" height="13" viewBox="0 0 24 24" fill={T.orange}>
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </svg>
)

const ARROW = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
    </svg>
)

const DEFAULT_PRODUCTS = [
    {
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format",
        badge: "+ Populaire", badgeBg: T.orange, badgeColor: T.ink,
        mat: "Aluminium",
        name: "Portes d'entrée Alu",
        desc: "Le choix du design et de la durabilité. Rigidité extrême, 21 coloris RAL, isolation jusqu'à UD 1,15.",
        feats: ["Rupture de pont thermique totale", "Labels Qualificoat & Qualimarine", "100% recyclable · brevet monobloc"],
    },
    {
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80&auto=format",
        badge: "", badgeBg: T.orange, badgeColor: T.ink,
        mat: "PVC",
        name: "Fenêtres & Portes PVC",
        desc: "Performance thermique jusqu'à UW 1,0. Entretien minimal, large choix de teintes et d'imitations bois.",
        feats: ["Certifié NF · marquage CE", "PVC 99% recyclable", "Éligible crédit d'impôt"],
    },
    {
        image: "https://images.unsplash.com/photo-1464146072230-91cabc968ddb?w=600&q=80&auto=format",
        badge: "", badgeBg: T.orange, badgeColor: T.ink,
        mat: "Bois",
        name: "Menuiseries Bois",
        desc: "Chaleur, authenticité et caractère. Idéal pour les maisons de caractère angevines ou les rénovations patrimoniales.",
        feats: ["Finitions artisanales sur mesure", "Bois massif certifié PEFC", "Teintes & lasures personnalisables"],
    },
    {
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80&auto=format",
        badge: "Nouveauté", badgeBg: T.navy, badgeColor: T.orange,
        mat: "Mixte Bois / Alu",
        name: "Portes Mixtes",
        desc: "Bois à l'intérieur, aluminium à l'extérieur. Le confort du premier, la robustesse du second — sans compromis.",
        feats: ["Isolation thermique optimale", "Alu extérieur sans entretien", "Design bicolore exclusif"],
    },
]

function ProductCard({ product }) {
    const [hovered, setHovered] = (typeof useState !== "undefined" ? [false, () => {}] : require("react").useState(false))
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                background: T.white, borderRadius: 14, overflow: "hidden",
                border: `1.5px solid ${hovered ? T.orange : T.border}`,
                cursor: "pointer", display: "flex", flexDirection: "column",
                transform: hovered ? "translateY(-6px)" : "none",
                boxShadow: hovered ? "0 20px 48px rgba(14,33,64,.14)" : "none",
                transition: "all .25s",
            }}
        >
            <div style={{ position: "relative", height: 210, overflow: "hidden" }}>
                <img src={product.image} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "cover", transform: hovered ? "scale(1.07)" : "scale(1)", transition: "transform .5s" }} />
                {product.badge && (
                    <span style={{
                        position: "absolute", top: 14, right: 14,
                        background: product.badgeBg, color: product.badgeColor,
                        fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 800,
                        padding: "5px 11px", borderRadius: 50, letterSpacing: ".5px", textTransform: "uppercase",
                    }}>{product.badge}</span>
                )}
            </div>
            <div style={{ background: T.navy, padding: "8px 18px", fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: T.orange }}>{product.mat}</div>
            <div style={{ padding: "20px 18px", flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 17, fontWeight: 800, color: T.ink, marginBottom: 8 }}>{product.name}</div>
                <div style={{ fontSize: 13, color: T.muted, lineHeight: 1.65, flex: 1 }}>{product.desc}</div>
                <ul style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 7, listStyle: "none", padding: 0 }}>
                    {product.feats.map((f, i) => (
                        <li key={i} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12, fontWeight: 500, color: T.navy }}>
                            {CHECK}{f}
                        </li>
                    ))}
                </ul>
            </div>
            <div style={{
                padding: "14px 18px",
                borderTop: `1px solid ${hovered ? T.orange : T.border}`,
                background: hovered ? T.orange : T.white,
                display: "flex", alignItems: "center", justifyContent: "space-between",
                fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 700,
                color: hovered ? T.ink : T.navy, letterSpacing: ".3px", textTransform: "uppercase",
                transition: "all .25s",
            }}>
                <span>Demander un devis</span>
                {ARROW}
            </div>
        </div>
    )
}

export function LBDMProducts(props) {
    const { tag, title, lead } = props
    return (
        <div style={{ padding: "100px 48px", background: T.white, width: "100%", boxSizing: "border-box" }}>
            <div style={{ maxWidth: 1240, margin: "0 auto" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: T.orange, marginBottom: 16 }}>
                    <span style={{ width: 20, height: 3, background: T.orange, borderRadius: 2, display: "block" }} />{tag}
                </div>
                <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: "clamp(26px, 3.2vw, 44px)", color: T.ink, lineHeight: 1.1, letterSpacing: "-.5px", margin: "0 0 16px" }}>{title}</h2>
                <p style={{ fontSize: 17, color: T.muted, maxWidth: 580, lineHeight: 1.75, margin: "0 0 60px" }}>{lead}</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
                    {DEFAULT_PRODUCTS.map((p, i) => <ProductCard key={i} product={p} />)}
                </div>
            </div>
        </div>
    )
}

LBDMProducts.defaultProps = {
    tag: "Nos gammes",
    title: "Chaque maison mérite la bonne menuiserie.",
    lead: "Aluminium, PVC, bois, mixte — quatre matériaux, une seule expertise. Nos conseillers vous guident vers le choix le plus adapté à votre projet et votre budget.",
}

addPropertyControls(LBDMProducts, {
    tag: { type: ControlType.String, title: "Tag" },
    title: { type: ControlType.String, title: "Titre" },
    lead: { type: ControlType.String, title: "Lead", displayTextArea: true },
})
