export default function ArchitecturePage() {
  return (
    <html lang="en">
      <head>
        <title>Architecture | tawkie</title>
        <meta name="description" content="Tawkie system architecture" />
        <style>{`
          a:hover { color: #e5e5e5 !important; border-color: #404040 !important; }
          .link-card:hover { border-color: #262626; color: #e5e5e5; }
          code { background: #171717; padding: 0.2rem 0.4rem; border-radius: 4px; font-size: 0.85em; }
          pre { background: #171717; padding: 1rem; border-radius: 6px; overflow-x: auto; }
          pre code { background: none; padding: 0; }
          li { margin-bottom: 0.5rem; color: #737373; }
          li strong { color: #a3a3a3; }
          .diagram { background: #0f0f0f; border: 1px solid #171717; border-radius: 8px; padding: 2rem; margin: 1.5rem 0; text-align: center; }
          .diagram-row { display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap; margin-bottom: 1rem; }
          .diagram-box { background: linear-gradient(145deg, #171717 0%, #0f0f0f 100%); border: 1px solid #262626; border-radius: 6px; padding: 1rem 1.5rem; min-width: 120px; }
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
          <div style={{ marginBottom: "2rem" }}>
            <a href="/docs" style={{ color: "#525252", textDecoration: "none", fontSize: "0.85rem" }}>← Back to Docs</a>
          </div>

          <h1 style={{
            fontSize: "2rem",
            fontWeight: 300,
            letterSpacing: "0.05em",
            marginBottom: "3rem",
          }}>
            Architecture
          </h1>

          <section style={{ marginBottom: "3rem" }}>
            <p style={{ color: "#737373", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "2rem" }}>
              Tawkie is a bridge between Talkie (voice AI on your devices) and OpenClaw (automation in the cloud).
              The architecture prioritizes <strong>zero data retention</strong> — everything flows through your infrastructure.
            </p>

            <div className="diagram">
              <div className="diagram-row">
                <div className="diagram-box">🎤 Talkie</div>
                <div style={{ alignSelf: "center", color: "#525252" }}>→</div>
                <div className="diagram-box">📱 Telegram</div>
              </div>
              <div style={{ color: "#525252", fontSize: "0.85rem", marginBottom: "1rem" }}>↓</div>
              <div className="diagram-row">
                <div className="diagram-box">🤖 OpenClaw</div>
                <div style={{ alignSelf: "center", color: "#525252" }}>↔</div>
                <div className="diagram-box">🌐 Tawkie.dev</div>
                <div style={{ alignSelf: "center", color: "#525252" }}>↔</div>
                <div className="diagram-box">🗄️ Convex</div>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: "3rem" }}>
            <h2 style={{
              fontSize: "0.85rem",
              color: "#404040",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}>
              Components
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
              <div style={{ padding: "1rem", background: "linear-gradient(145deg, #0f0f0f 0%, #0a0a0a 100%)", border: "1px solid #171717", borderRadius: "6px" }}>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 500, marginBottom: "0.5rem", color: "#d4d4d4" }}>Talkie</h3>
                <p style={{ color: "#525252", fontSize: "0.8rem", lineHeight: 1.6 }}>
                  Voice AI app that captures your voice commands and sends them via Telegram bot to OpenClaw.
                </p>
              </div>

              <div style={{ padding: "1rem", background: "linear-gradient(145deg, #0f0f0f 0%, #0a0a0a 100%)", border: "1px solid #171717", borderRadius: "6px" }}>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 500, marginBottom: "0.5rem", color: "#d4d4d4" }}>OpenClaw</h3>
                <p style={{ color: "#525252", fontSize: "0.8rem", lineHeight: 1.6 }}>
                  Automation platform that executes workflows based on voice triggers from Talkie.
                </p>
              </div>

              <div style={{ padding: "1rem", background: "linear-gradient(145deg, #0f0f0f 0%, #0a0a0a 100%)", border: "1px solid #171717", borderRadius: "6px" }}>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 500, marginBottom: "0.5rem", color: "#d4d4d4" }}>Tawkie.dev</h3>
                <p style={{ color: "#525252", fontSize: "0.8rem", lineHeight: 1.6 }}>
                  Web UI and API layer for memos, claims, and public profile pages at <code>talkie.to/{`{username}`}</code>.
                </p>
              </div>

              <div style={{ padding: "1rem", background: "linear-gradient(145deg, #0f0f0f 0%, #0a0a0a 100%)", border: "1px solid #171717", borderRadius: "6px" }}>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 500, marginBottom: "0.5rem", color: "#d4d4d4" }}>Convex</h3>
                <p style={{ color: "#525252", fontSize: "0.8rem", lineHeight: 1.6 }}>
                  Backend database for storing memos, user claims, and application state.
                </p>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: "3rem" }}>
            <h2 style={{
              fontSize: "0.85rem",
              color: "#404040",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}>
              Data Flow
            </h2>
            <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "1rem", color: "#737373", lineHeight: 1.7 }}>
                <strong style={{ color: "#a3a3a3" }}>Voice → Text:</strong> You speak to Talkie, it converts to text
              </li>
              <li style={{ marginBottom: "1rem", color: "#737373", lineHeight: 1.7 }}>
                <strong style={{ color: "#a3a3a3" }}>Text → Telegram:</strong> Talkie sends the command via Telegram bot
              </li>
              <li style={{ marginBottom: "1rem", color: "#737373", lineHeight: 1.7 }}>
                <strong style={{ color: "#a3a3a3" }}>Telegram → OpenClaw:</strong> OpenClaw receives and routes the message
              </li>
              <li style={{ marginBottom: "1rem", color: "#737373", lineHeight: 1.7 }}>
                <strong style={{ color: "#a3a3a3" }}>Execution:</strong> OpenClaw executes the workflow
              </li>
              <li style={{ color: "#737373", lineHeight: 1.7 }}>
                <strong style={{ color: "#a3a3a3" }}>Response:</strong> Results return via Telegram, optional memo saved to Convex
              </li>
            </ol>
          </section>

          <section>
            <h2 style={{
              fontSize: "0.85rem",
              color: "#404040",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}>
              Privacy Principles
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "0.75rem", color: "#737373" }}>
                ✅ <strong style={{ color: "#a3a3a3" }}>Zero data through Tawkie servers</strong> — Your data stays on your infrastructure
              </li>
              <li style={{ marginBottom: "0.75rem", color: "#737373" }}>
                ✅ <strong style={{ color: "#a3a3a3" }}>Agent-assisted setup</strong> — You configure everything, Tawkie just helps
              </li>
              <li style={{ marginBottom: "0.75rem", color: "#737373" }}>
                ✅ <strong style={{ color: "#a3a3a3" }}>Open source</strong> — All code available at <a href="https://github.com/tawkiebot" style={{ color: "#737373" }}>GitHub</a>
              </li>
              <li style={{ color: "#737373" }}>
                ✅ <strong style={{ color: "#a3a3a3" }}>Your keys, your data</strong> — API keys stay on your machine
              </li>
            </ul>
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
