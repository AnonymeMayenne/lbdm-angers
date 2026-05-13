import { addPropertyControls, ControlType } from "framer"

const T = { navyDark: "#0E2140", orange: "#F59A23" }

const ITEMS = [
    {
        label: "Fabriqué en Aveyron",
        sub: "Castes Industrie · depuis 1960",
        icon: <svg width="38" height="38" viewBox="0 0 24 24" fill={T.navyDark}><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" /></svg>,
    },
    {
        label: "Serrure 5 points",
        sub: "Standard de série · 5 clés incluses",
        icon: <svg width="38" height="38" viewBox="0 0 24 24" fill={T.navyDark}><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" /></svg>,
    },
    {
        label: "Triple vitrage",
        sub: "Feuilleté anti-effraction",
        icon: <svg width="38" height="38" viewBox="0 0 24 24" fill={T.navyDark}><path d="M12 3L1 9l4 2.18V17c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-5.82L21 9 12 3zm0 12.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>,
    },
    {
        label: "Aides de l'État",
        sub: "MaPrimeRénov' · CEE · TVA 5,5%",
        icon: <svg width="38" height="38" viewBox="0 0 24 24" fill={T.navyDark}><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" /></svg>,
    },
]

export function LBDMStrip(props) {
    const items = [
        { label: props.item1Label, sub: props.item1Sub, icon: ITEMS[0].icon },
        { label: props.item2Label, sub: props.item2Sub, icon: ITEMS[1].icon },
        { label: props.item3Label, sub: props.item3Sub, icon: ITEMS[2].icon },
        { label: props.item4Label, sub: props.item4Sub, icon: ITEMS[3].icon },
    ]

    return (
        <div style={{ background: T.orange, padding: "28px 48px", width: "100%", boxSizing: "border-box" }}>
            <div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
                {items.map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center" }}>
                        {i > 0 && <div style={{ width: 1, height: 36, background: "rgba(14,33,64,.2)", marginRight: 32 }} />}
                        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                            {item.icon}
                            <div>
                                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, fontWeight: 600, color: T.navyDark, lineHeight: 1 }}>{item.label}</div>
                                <div style={{ fontSize: 12, fontWeight: 500, color: T.navyDark, opacity: .75, marginTop: 4 }}>{item.sub}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

LBDMStrip.defaultProps = {
    item1Label: "Fabriqué en Aveyron", item1Sub: "Castes Industrie · depuis 1960",
    item2Label: "Serrure 5 points", item2Sub: "Standard de série · 5 clés incluses",
    item3Label: "Triple vitrage", item3Sub: "Feuilleté anti-effraction",
    item4Label: "Aides de l'État", item4Sub: "MaPrimeRénov' · CEE · TVA 5,5%",
}

addPropertyControls(LBDMStrip, {
    item1Label: { type: ControlType.String, title: "Item 1" },
    item1Sub: { type: ControlType.String, title: "Item 1 sous-titre" },
    item2Label: { type: ControlType.String, title: "Item 2" },
    item2Sub: { type: ControlType.String, title: "Item 2 sous-titre" },
    item3Label: { type: ControlType.String, title: "Item 3" },
    item3Sub: { type: ControlType.String, title: "Item 3 sous-titre" },
    item4Label: { type: ControlType.String, title: "Item 4" },
    item4Sub: { type: ControlType.String, title: "Item 4 sous-titre" },
})
