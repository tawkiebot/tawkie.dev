export default function SetupPage() {
  return (
    <html lang="en">
      <head>
        <title>Setup Guide | tawkie</title>
        <meta name="description" content="DIY infrastructure setup for Tawkie" />
        <style>{`
          a:hover { color: #e5e5e5 !important; border-color: #404040 !important; }
          .link-card:hover { border-color: #262626; color: #e5e5e5; }
          code { background: #171717; padding: 0.2rem 0.4rem; border-radius: 4px; font-size: 0.85em; }
          pre { background: #171717; padding: 1rem; border-radius: 6px; overflow-x: auto; }
          pre code { background: none; padding: 0; }
          li { margin-bottom: 0.5rem; color: #737373; }
          li strong { color: #a3a3a3; }
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
            Setup Guide
          </h1>

          <section style={{ marginBottom: "3rem" }}>
            <p style={{ color: "#737373", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "1.5rem" }}>
              Tawkie uses a BYO (Bring Your Own) infrastructure model. You own your data, we just help build.
            </p>

            <h2 style={{
              fontSize: "0.85rem",
              color: "#404040",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1rem",
              marginTop: "2rem",
            }}>
              Prerequisites
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li><strong>OpenClaw</strong> — Your automation hub</li>
              <li><strong>Talkie</strong> — Voice AI app (iOS/Mac)</li>
              <li><strong>Vercel</strong> — For hosting the web UI</li>
              <li><strong>Convex</strong> — Database for memos and claims</li>
              <li><strong>Cloudflare R2</strong> — Storage (optional, 10GB free)</li>
            </ul>
          </section>

          <section style={{ marginBottom: "3rem" }}>
            <h2 style={{
              fontSize: "0.85rem",
              color: "#404040",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}>
              Step 1: Clone the Repos
            </h2>
            <pre style={{ background: "#171717", padding: "1rem", borderRadius: "6px", overflow: "auto" }}>
              <code style={{ color: "#a3a3a3" }}>git clone https://github.com/tawkiebot/tawkie.dev
git clone https://github.com/tawkiebot/tawkie</code>
            </pre>
          </section>

          <section style={{ marginBottom: "3rem" }}>
            <h2 style={{
              fontSize: "0.85rem",
              color: "#404040",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}>
              Step 2: Configure Environment
            </h2>
            <p style={{ color: "#737373", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "1rem" }}>
              Create a <code>.env</code> file in the <code>tawkie</code> directory:
            </p>
            <pre style={{ background: "#171717", padding: "1rem", borderRadius: "6px", overflow: "auto" }}>
              <code style={{ color: "#a3a3a3" }}>ELEVENLABS_API_KEY=sk_...
MOLTBOOK_API_KEY=moltbook_sk_...
AGENTMAIL_API_KEY=am_...
CONVEX_DEV_TOKEN=dev:...
TELEGRAM_BOT_TOKEN=...
DISCORD_BOT_TOKEN=...</code>
            </pre>
          </section>

          <section style={{ marginBottom: "3rem" }}>
            <h2 style={{
              fontSize: "0.85rem",
              color: "#404040",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}>
              Step 3: Deploy to Vercel
            </h2>
            <pre style={{ background: "#171717", padding: "1rem", borderRadius: "6px", overflow: "auto" }}>
              <code style={{ color: "#a3a3a3" }}>cd tawkie.dev
vercel --prod</code>
            </pre>
          </section>

          <section>
            <h2 style={{
              fontSize: "0.85rem",
              color: "#404040",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}>
              Step 4: Connect OpenClaw
            </h2>
            <p style={{ color: "#737373", lineHeight: 1.8, fontSize: "0.95rem" }}>
              Configure your Telegram/Discord bots in OpenClaw to point to the deployed URLs.
              The bidirectional bridge enables Talkie to trigger OpenClaw workflows.
            </p>
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
