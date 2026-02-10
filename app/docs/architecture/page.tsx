"use client"

import { ArcDiagram } from '@arach/arc'
import tawkieArchitecture from '../../../src/diagrams/tawkie-architecture'

const styles = {
  page: {
    minHeight: "100vh" as const,
    background: "#0a0a0a",
    color: "#e5e5e5",
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
    margin: 0,
    padding: 0,
  },
  nav: {
    display: "flex" as const,
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.5rem 4rem",
    position: "fixed" as const,
    top: 0,
    left: 0,
    right: 0,
    background: "linear-gradient(to bottom, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0) 100%)",
    zIndex: 100,
  },
  navLink: {
    color: "#666",
    textDecoration: "none",
    fontSize: "0.85rem",
    textTransform: "capitalize" as const,
    letterSpacing: "0.05em",
  },
  navLinkActive: {
    color: "#e5e5e5",
  },
  container: {
    paddingTop: "6rem",
    maxWidth: "900px" as const,
    margin: "0 auto",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    paddingBottom: "4rem",
  },
  backLink: {
    color: "#525252",
    textDecoration: "none",
    fontSize: "0.85rem",
    marginBottom: "2rem",
    display: "block",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: 300,
    letterSpacing: "0.05em",
    marginBottom: "2rem",
  },
  section: {
    marginBottom: "2rem",
  },
  paragraph: {
    color: "#737373",
    lineHeight: 1.8,
    fontSize: "0.95rem",
    marginBottom: "2rem",
  },
  sectionHeading: {
    fontSize: "0.85rem",
    color: "#404040",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    marginBottom: "1rem",
  },
  card: {
    padding: "1rem",
    background: "linear-gradient(145deg, #0f0f0f 0%, #0a0a0a 100%)",
    border: "1px solid #171717",
    borderRadius: "6px",
    marginBottom: "0.75rem",
  },
  cardTitle: {
    fontSize: "0.95rem",
    fontWeight: 500,
    marginBottom: "0.5rem",
    color: "#d4d4d4",
  },
  cardDesc: {
    color: "#525252",
    fontSize: "0.8rem",
    lineHeight: 1.6,
  },
  list: {
    listStyle: "none" as const,
    padding: 0,
    margin: 0,
  },
  listItem: {
    marginBottom: "1rem",
    color: "#737373",
    lineHeight: 1.7,
  },
  strong: {
    color: "#a3a3a3",
  },
  diagram: {
    background: "#0f0f0f",
    border: "1px solid #171717",
    borderRadius: "8px",
    padding: "2rem",
    margin: "1.5rem 0",
  },
  footer: {
    padding: "4rem 2rem",
    borderTop: "1px solid #171717",
    textAlign: "center" as const,
  },
  footerText: {
    color: "#404040",
    fontSize: "0.8rem",
    letterSpacing: "0.05em",
  },
}

export default function ArchitecturePage() {
  return (
    <div style={styles.page}>
      <nav style={styles.nav}>
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
          <a href="/#features" style={styles.navLink}>features</a>
          <a href="/docs" style={{ ...styles.navLink, ...styles.navLinkActive }}>docs</a>
          <a href="https://github.com/tawkiebot" style={styles.navLink}>github</a>
        </div>
      </nav>

      <div style={styles.container}>
        <a href="/docs" style={styles.backLink}>← Back to Docs</a>

        <h1 style={styles.heading}>Architecture</h1>

        <section style={styles.section}>
          <p style={styles.paragraph}>
            Tawkie is a bridge between Talkie (voice AI on your devices) and OpenClaw (automation in the cloud).
            The architecture prioritizes <strong style={styles.strong}>zero data retention</strong> — everything flows through your infrastructure.
          </p>

          <div style={styles.diagram}>
            <ArcDiagram 
              data={tawkieArchitecture} 
              mode="dark" 
              theme="cool"
              interactive={true}
            />
          </div>
          <p style={{ color: "#404040", fontSize: "0.75rem", textAlign: "center", marginTop: "0.5rem" }}>
            Interactive diagram — zoom and pan enabled
          </p>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h2 style={styles.sectionHeading}>Components</h2>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Talkie</h3>
            <p style={styles.cardDesc}>
              Voice AI app that captures your voice commands and sends them via Telegram bot to OpenClaw.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>OpenClaw</h3>
            <p style={styles.cardDesc}>
              Automation platform that executes workflows based on voice triggers from Talkie.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Tawkie.dev</h3>
            <p style={styles.cardDesc}>
              Web UI and API layer for memos, claims, and public profile pages.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Convex</h3>
            <p style={styles.cardDesc}>
              Backend database for storing memos, user claims, and application state.
            </p>
          </div>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h2 style={styles.sectionHeading}>Data Flow</h2>
          <ol style={styles.list}>
            <li style={styles.listItem}>
              <strong style={styles.strong}>Voice → Text:</strong> You speak to Talkie, it converts to text
            </li>
            <li style={styles.listItem}>
              <strong style={styles.strong}>Text → Telegram:</strong> Talkie sends the command via Telegram bot
            </li>
            <li style={styles.listItem}>
              <strong style={styles.strong}>Telegram → OpenClaw:</strong> OpenClaw receives and routes the message
            </li>
            <li style={styles.listItem}>
              <strong style={styles.strong}>Execution:</strong> OpenClaw executes the workflow
            </li>
            <li style={styles.listItem}>
              <strong style={styles.strong}>Response:</strong> Results return via Telegram, optional memo saved to Convex
            </li>
          </ol>
        </section>

        <section>
          <h2 style={styles.sectionHeading}>Privacy Principles</h2>
          <ul style={styles.list}>
            <li style={{ marginBottom: "0.75rem", color: "#737373" }}>
              ✅ <strong style={styles.strong}>Zero data through Tawkie servers</strong> — Your data stays on your infrastructure
            </li>
            <li style={{ marginBottom: "0.75rem", color: "#737373" }}>
              ✅ <strong style={styles.strong}>Agent-assisted setup</strong> — You configure everything, Tawkie just helps
            </li>
            <li style={{ marginBottom: "0.75rem", color: "#737373" }}>
              ✅ <strong style={styles.strong}>Open source</strong> — All code available at <a href="https://github.com/tawkiebot" style={{ color: "#737373" }}>GitHub</a>
            </li>
            <li style={{ color: "#737373" }}>
              ✅ <strong style={styles.strong}>Your keys, your data</strong> — API keys stay on your machine
            </li>
          </ul>
        </section>
      </div>

      <footer style={styles.footer}>
        <p style={styles.footerText}>© 2026 tawkie</p>
      </footer>
    </div>
  )
}
