"use client"

import { useState, useEffect } from "react"

export default function SebPage() {
  const [unlocked, setUnlocked] = useState(false)
  const [password, setPassword] = useState("")

  const secrets = [
    "🎉 Seb found the secret page!",
    "👀 You were looking for this, weren't you?",
    "🤫 This is a secret between you and Tawkie",
    "🌟 Seb is awesome!",
    "🔮 Only the curious find hidden pages",
  ]

  const [secretMessage, setSecretMessage] = useState("")

  useEffect(() => {
    setSecretMessage(secrets[Math.floor(Math.random() * secrets.length)])
  }, [])

  const handleUnlock = () => {
    if (password.toLowerCase() === "tawkie" || password.toLowerCase() === "seb") {
      setUnlocked(true)
    }
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0a",
      color: "#e5e5e5",
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
    }}>
      {!unlocked ? (
        <div style={{ textAlign: "center", maxWidth: "400px" }}>
          <h1 style={{
            fontSize: "2.5rem",
            fontWeight: 300,
            marginBottom: "1.5rem",
            background: "linear-gradient(135deg, #a3a3a3 0%, #525252 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            🗝️ Restricted Access
          </h1>
          <p style={{
            color: "#525252",
            marginBottom: "2rem",
            fontSize: "0.95rem",
          }}>
            This page is hidden. Do you have the password?
          </p>
          <input
            type="password"
            placeholder="Enter password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleUnlock()}
            style={{
              width: "100%",
              padding: "1rem",
              background: "#171717",
              border: "1px solid #262626",
              borderRadius: "8px",
              color: "#e5e5e5",
              fontSize: "1rem",
              marginBottom: "1rem",
              outline: "none",
              textAlign: "center",
            }}
          />
          <button
            onClick={handleUnlock}
            style={{
              width: "100%",
              padding: "1rem",
              background: "#262626",
              border: "none",
              borderRadius: "8px",
              color: "#a3a3a3",
              fontSize: "0.95rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            Unlock 🔓
          </button>
          <p style={{
            color: "#404040",
            fontSize: "0.75rem",
            marginTop: "1.5rem",
          }}>
            Hint: The agent's name... or Seb ;)
          </p>
        </div>
      ) : (
        <div style={{ textAlign: "center", animation: "fadeIn 0.5s ease" }}>
          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
          
          <div style={{
            fontSize: "4rem",
            marginBottom: "1rem",
          }}>
            🎉
          </div>
          
          <h1 style={{
            fontSize: "2.5rem",
            fontWeight: 300,
            marginBottom: "1rem",
            background: "linear-gradient(135deg, #fff 0%, #a3a3a3 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Welcome, Seb! 🎉
          </h1>
          
          <p style={{
            color: "#737373",
            fontSize: "1.1rem",
            marginBottom: "2rem",
            lineHeight: 1.8,
          }}>
            {secretMessage}
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
            maxWidth: "600px",
            marginBottom: "2rem",
          }}>
            <div style={{
              padding: "1.5rem",
              background: "linear-gradient(145deg, #0f0f0f 0%, #0a0a0a 100%)",
              border: "1px solid #171717",
              borderRadius: "12px",
            }}>
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🚀</div>
              <h3 style={{ fontSize: "1rem", fontWeight: 500, marginBottom: "0.5rem" }}>Friend of Tawkie</h3>
              <p style={{ color: "#525252", fontSize: "0.85rem" }}>
                One of the few who found this page!
              </p>
            </div>

            <div style={{
              padding: "1.5rem",
              background: "linear-gradient(145deg, #0f0f0f 0%, #0a0a0a 100%)",
              border: "1px solid #171717",
              borderRadius: "12px",
            }}>
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🎮</div>
              <h3 style={{ fontSize: "1rem", fontWeight: 500, marginBottom: "0.5rem" }}>Easter Egg Hunter</h3>
              <p style={{ color: "#525252", fontSize: "0.85rem" }}>
                You know where to look!
              </p>
            </div>
          </div>

          <a
            href="/"
            style={{
              color: "#737373",
              textDecoration: "none",
              padding: "0.75rem 1.5rem",
              border: "1px solid #262626",
              borderRadius: "6px",
              fontSize: "0.85rem",
              transition: "all 0.3s ease",
            }}
          >
            ← Back to Tawkie
          </a>
        </div>
      )}
    </div>
  )
}
