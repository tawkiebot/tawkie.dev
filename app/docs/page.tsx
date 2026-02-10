export default function DocsPage() {
  return (
    <html lang="en">
      <head>
        <title>Documentation | tawkie</title>
        <meta name="description" content="Tawkie documentation - bridge between Talkie and OpenClaw" />
        <style>{`
          a:hover { color: #e5e5e5 !important; border-color: #404040 !important; }
          .link-card:hover { border-color: #262626; color: #e5e5e5; }
        `}</style>
      </head>
      <body style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "#e5e5e5",
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
        margin: 0,
        padding: 0,
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
            <a href="/#features" style={{
              color: "#666",
              textDecoration: "none",
              fontSize: "0.85rem",
              textTransform: "capitalize",
              letterSpacing: "0.05em",
            }}>features</a>
            <a href="/docs" style={{
              color: "#e5e5e5",
              textDecoration: "none",
              fontSize: "0.85rem",
              textTransform: "capitalize",
              letterSpacing: "0.05em",
            }}>docs</a>
            <a href="https://github.com/tawkiebot" style={{
              color: "#666",
              textDecoration: "none",
              fontSize: "0.85rem",
              textTransform: "capitalize",
              letterSpacing: "0.05em",
            }}>github</a>
          </div>
        </nav>

        <div style={{ paddingTop: "6rem", maxWidth: "800px", margin: "0 auto", paddingLeft: "2rem", paddingRight: "2rem", paddingBottom: "4rem" }}>
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
              <a href="/docs/setup" className="link-card" style={{
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
              }}>
                <span>Setup Guide</span>
                <span style={{ color: "#525252", fontSize: "0.85rem" }}>DIY infrastructure setup</span>
              </a>
              <a href="/docs/architecture" className="link-card" style={{
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
              }}>
                <span>Architecture</span>
                <span style={{ color: "#525252", fontSize: "0.85rem" }}>System design</span>
              </a>
              <a href="https://github.com/tawkiebot" className="link-card" style={{
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
              }}>
                <span>GitHub</span>
                <span style={{ color: "#525252", fontSize: "0.85rem" }}>Source code</span>
              </a>
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
              <a href="https://github.com/tawkiebot" style={{
                color: "#737373",
                textDecoration: "none",
                padding: "0.5rem 1rem",
                border: "1px solid #262626",
                borderRadius: "4px",
                fontSize: "0.85rem",
                transition: "all 0.3s ease",
              }}>
                GitHub
              </a>
              <a href="https://discord.gg/DbbHB7g3" style={{
                color: "#737373",
                textDecoration: "none",
                padding: "0.5rem 1rem",
                border: "1px solid #262626",
                borderRadius: "4px",
                fontSize: "0.85rem",
                transition: "all 0.3s ease",
              }}>
                Discord
              </a>
              <a href="https://www.moltbook.com/u/tawkie" style={{
                color: "#737373",
                textDecoration: "none",
                padding: "0.5rem 1rem",
                border: "1px solid #262626",
                borderRadius: "4px",
                fontSize: "0.85rem",
                transition: "all 0.3s ease",
              }}>
                Moltbook
              </a>
            </div>
          </section>
        </div>

        <footer style={{
          padding: "4rem 2rem",
          borderTop: "1px solid #171717",
          textAlign: "center",
        }}>
          <p style={{ color: "#404040", fontSize: "0.8rem", letterSpacing: "0.05em" }}>
            © 2026 tawkie
          </p>
        </footer>
      </body>
    </html>
  );
}
