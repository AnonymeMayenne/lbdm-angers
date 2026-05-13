import { addPropertyControls, ControlType } from "framer"

const T = {
    navyDark: "#0E2140",
    orange: "#F59A23",
    ink: "#0F1E33",
    white: "#FFFFFF",
}

export function LBDMNav(props) {
    const { phone, ctaLabel, ctaHref } = props
    return (
        <div style={{
            width: "100%", height: 70,
            background: T.navyDark,
            display: "flex", alignItems: "center",
            padding: "0 48px",
            borderBottom: "1px solid rgba(255,255,255,.07)",
            fontFamily: "'Montserrat', sans-serif",
            boxSizing: "border-box",
        }}>
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginRight: "auto" }}>
                <div style={{
                    width: 40, height: 40, background: T.orange, borderRadius: 6,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 900, fontSize: 22, color: T.white,
                }}>B</div>
                <div style={{ lineHeight: 1.15 }}>
                    <div style={{ fontSize: 10, fontWeight: 500, color: "rgba(255,255,255,.6)", letterSpacing: "2.5px", textTransform: "uppercase" }}>LA BOUTIQUE DU</div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: T.white, letterSpacing: ".5px", textTransform: "uppercase" }}>MENUISIER ANGERS</div>
                </div>
            </div>
            {/* Right */}
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <a href={`tel:+33${phone.replace(/^0/, "").replace(/\s/g, "")}`} style={{
                    display: "flex", alignItems: "center", gap: 8,
                    fontWeight: 700, fontSize: 15, color: T.white, textDecoration: "none",
                }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill={T.orange}>
                        <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                    </svg>
                    {phone}
                </a>
                <a href={ctaHref} style={{
                    background: T.orange, color: T.ink,
                    fontWeight: 700, fontSize: 13, letterSpacing: ".3px",
                    padding: "10px 22px", borderRadius: 50,
                    textDecoration: "none", whiteSpace: "nowrap",
                }}>{ctaLabel}</a>
            </div>
        </div>
    )
}

LBDMNav.defaultProps = {
    phone: "06 80 25 58 65",
    ctaLabel: "Devis gratuit",
    ctaHref: "#devis",
}

addPropertyControls(LBDMNav, {
    phone: { type: ControlType.String, title: "Téléphone" },
    ctaLabel: { type: ControlType.String, title: "Bouton label" },
    ctaHref: { type: ControlType.String, title: "Bouton lien" },
})
