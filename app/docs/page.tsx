export default function Docs() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0a",
      color: "#e5e5e5",
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
      padding: "6rem 2rem 4rem",
    }}>
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.5rem 4rem",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        background: "linear-gradient(to bottom, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0) 100%)",
        zIndex: 100,
      }}>
        <a href="/" style={{
          fontSize: "1.1rem",
          fontWeight: 500,
          letterSpacing: "0.02em",
          color: "#e5e5e5",
          textDecoration: "none",
        }}>
          tawkie
        </a>
        <div style={{ display: "flex", gap: "2.5rem" }}>
          {[
            { label: "features", href: "/#features" },
            { label: "docs", href: "/docs" },
            { label: "github", href: "https://github.com/tawkiebot" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                color: item.label === "docs" ? "#e5e5e5" : "#666",
                textDecoration: "none",
                fontSize: "0.85rem",
                textTransform: "capitalize",
                letterSpacing: "0.05em",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#e5e5e5")}
              onMouseLeave={(e) => (e.currentTarget.style.color = item.label === "docs" ? "#e5e5e5" : "#666")}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{
          fontSize: "2rem",
          fontWeight: 300,
          letterSpacing: "0.05em",
          marginBottom: "3rem",
        }}>
          Documentation
        </h1>

        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{
            fontSize: "0.85rem",
            color: "#404040",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}>
            Overview
          </h2>
          <p style={{
            color: "#737373",
            lineHeight: 1.8,
            fontSize: "0.95rem",
          }}>
            Tawkie is a bridge between Talkie (voice AI app) and OpenClaw (automation platform).
            Explore voice AI, automation, and the future of autonomous agents with BYO infrastructure.
          </p>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{
            fontSize: "0.85rem",
            color: "#404040",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}>
            Quick Links
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              { label: "Setup Guide", desc: "DIY infrastructure setup" },
              { label: "Architecture", desc: "System design" },
              { label: "GitHub", desc: "Source code" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.label === "GitHub" ? "https://github.com/tawkiebot" : "#"}
                style={{
                  color: "#a3a3a3",
                  textDecoration: "none",
                  padding: "1rem",
                  background: "linear-gradient(145deg, #0f0f0f 0%, #0a0a0a 100%)",
                  border: "1px solid #171717",
                  borderRadius: "6px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#262626";
                  e.currentTarget.style.color = "#e5e5e5";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#171717";
                  e.currentTarget.style.color = "#a3a3a3";
                }}
              >
                <span>{link.label}</span>
                <span style={{ color: "#525252", fontSize: "0.85rem" }}>{link.desc}</span>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{
            fontSize: "0.85rem",
            color: "#404040",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}>
            Community
          </h2>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            {[
              { label: "GitHub", href: "https://github.com/tawkiebot" },
              { label: "Discord", href: "https://discord.gg/DbbHB7g3" },
              { label: "Moltbook", href: "https://www.moltbook.com/u/tawkie" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  color: "#737373",
                  textDecoration: "none",
                  padding: "0.5rem 1rem",
                  border: "1px solid #262626",
                  borderRadius: "4px",
                  fontSize: "0.85rem",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#404040";
                  e.currentTarget.style.color = "#e5e5e5";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#262626";
                  e.currentTarget.style.color = "#737373";
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>
      </div>

      <footer style={{
        padding: "4rem 2rem",
        borderTop: "1px solid #171717",
        textAlign: "center",
        marginTop: "4rem",
      }}>
        <p style={{ color: "#404040", fontSize: "0.8rem", letterSpacing: "0.05em" }}>
          © 2026 tawkie
        </p>
      </footer>
    </div>
  );
}
