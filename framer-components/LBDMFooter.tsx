import { addPropertyControls, ControlType } from "framer"

const T = { navyDark: "#0E2140", navy: "#163258", orange: "#F59A23", white: "#FFFFFF", muted: "rgba(255,255,255,.45)", border: "rgba(255,255,255,.08)" }

const PRODUCTS_LINKS = ["Portes d'entrée aluminium", "Portes d'entrée PVC", "Portes d'entrée bois", "Portes mixtes bois / alu", "Fenêtres & baies vitrées", "Volets roulants"]
const INFO_LINKS = ["Avis clients", "Demander un devis", "Mentions légales", "Confidentialité"]

function IconPhone() { return <svg width="14" height="14" viewBox="0 0 24 24" fill={T.orange}><path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" /></svg> }
function IconMail() { return <svg width="14" height="14" viewBox="0 0 24 24" fill={T.orange}><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg> }
function IconPin() { return <svg width="14" height="14" viewBox="0 0 24 24" fill={T.orange}><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg> }

export function LBDMFooter(props) {
    const { phone, email, address, slogan, year } = props
    return (
        <footer style={{ background: T.navyDark, padding: "64px 48px 0", width: "100%", boxSizing: "border-box", fontFamily: "'DM Sans', sans-serif" }}>
            <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 64, paddingBottom: 64, borderBottom: `1px solid ${T.border}` }}>
                {/* Col 1 — Identité */}
                <div>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 16, color: T.white, marginBottom: 4 }}>La Boutique du Menuisier</div>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 700, color: T.orange, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>Angers · Maine-et-Loire</div>
                    <p style={{ fontSize: 14, color: T.muted, lineHeight: 1.75, margin: "0 0 24px", maxWidth: 320 }}>Artisan expert en menuiseries et portes d'entrée sur mesure. Réseau Castes Industrie — fabriqué en Aveyron depuis 1960.</p>
                    {[
                        { icon: <IconPhone />, text: phone, href: `tel:+33${phone.replace(/^0/, "").replace(/\s/g, "")}` },
                        { icon: <IconMail />, text: email, href: `mailto:${email}` },
                        { icon: <IconPin />, text: address, href: "#" },
                    ].map((c, i) => (
                        <a key={i} href={c.href} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: T.muted, textDecoration: "none", marginBottom: 10 }}>
                            <span style={{ marginTop: 2, flexShrink: 0 }}>{c.icon}</span>{c.text}
                        </a>
                    ))}
                </div>
                {/* Col 2 — Produits */}
                <div>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 12, color: T.white, letterSpacing: 1, textTransform: "uppercase", marginBottom: 20 }}>Produits</div>
                    {PRODUCTS_LINKS.map((l, i) => (
                        <a key={i} href="#produits" style={{ display: "block", fontSize: 14, color: T.muted, textDecoration: "none", marginBottom: 10 }}>{l}</a>
                    ))}
                </div>
                {/* Col 3 — Infos */}
                <div>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 12, color: T.white, letterSpacing: 1, textTransform: "uppercase", marginBottom: 20 }}>Infos</div>
                    {INFO_LINKS.map((l, i) => (
                        <a key={i} href="#" style={{ display: "block", fontSize: 14, color: T.muted, textDecoration: "none", marginBottom: 10 }}>{l}</a>
                    ))}
                </div>
            </div>
            {/* Bottom bar */}
            <div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 0", flexWrap: "wrap", gap: 12 }}>
                <span style={{ fontSize: 12, color: T.muted }}>© {year} La Boutique du Menuisier Angers</span>
                <span style={{ fontSize: 12, color: T.muted, fontStyle: "italic" }}>« {slogan} »</span>
            </div>
        </footer>
    )
}

LBDMFooter.defaultProps = {
    phone: "06 80 25 58 65",
    email: "angers@laboutiquedumenuisier.fr",
    address: "10 Rue des Métiers, 49130 Sainte-Gemmes-sur-Loire",
    slogan: "La confiance, ça ne s'achète pas, ça se gagne !",
    year: "2025",
}

addPropertyControls(LBDMFooter, {
    phone: { type: ControlType.String, title: "Téléphone" },
    email: { type: ControlType.String, title: "Email" },
    address: { type: ControlType.String, title: "Adresse" },
    slogan: { type: ControlType.String, title: "Slogan" },
    year: { type: ControlType.String, title: "Année" },
})
