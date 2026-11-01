import { ImageResponse } from "next/og"

export const alt = "Kanchan Simlandi — Full-Stack / Backend Developer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#12160f",
          padding: "72px 80px",
          color: "#f0f4ea",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 68,
                height: 68,
                borderRadius: 18,
                backgroundColor: "#b9f36b",
                color: "#12160f",
                fontSize: 30,
                fontWeight: 700,
              }}
            >
              KS
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 26, fontWeight: 600 }}>
                Kanchan Simlandi
              </span>
              <span
                style={{
                  fontSize: 15,
                  color: "#b0b8a7",
                  letterSpacing: 4,
                }}
              >
                PORTFOLIO 2026
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              border: "1px solid rgba(185,243,107,0.35)",
              borderRadius: 999,
              padding: "12px 22px",
              fontSize: 18,
              color: "#b9f36b",
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                backgroundColor: "#b9f36b",
              }}
            />
            Available for work
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <span
            style={{
              fontSize: 78,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Full-Stack Developer
          </span>
          <span style={{ fontSize: 30, color: "#b0b8a7" }}>
            Laravel · PHP · MySQL · System Design
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(240,244,234,0.14)",
            paddingTop: 28,
            fontSize: 20,
            color: "#b0b8a7",
          }}
        >
          <span>kanchansimlandi.vercel.app</span>
          <span>DonateBazaar · Tata Pravesh · Jewelbox</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
