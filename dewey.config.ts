/** @type {import('@dewey/cli').DeweyConfig} */
export default {
  project: {
    name: 'tawkie',
    tagline: 'Bridge between Talkie voice AI and OpenClaw automation',
    type: 'generic',
  },

  agent: {
    // Critical context that AI agents MUST know
    criticalContext: [
      'Tawkie is a bridge, not a product - agent-assisted setup, not seamless automation',
      'All API keys stay on user machines - zero data through Tawkie servers',
      'Voice commands flow: Talkie → Telegram → OpenClaw → Tawkie.dev → Convex',
      'Use @arach packages: @arach/speakeasy for TTS, @arach/arc for diagrams',
    ],

    // Key entry points for navigating the codebase
    entryPoints: {
      'main': 'app/',
      'diagrams': 'src/diagrams/',
      'docs': 'docs/',
    },

    // Pattern-based navigation hints
    rules: [
      { pattern: 'TTS', instruction: 'Uses @arach/speakeasy - see src/functions/tts.ts' },
      { pattern: 'diagram', instruction: 'Arc diagrams in src/diagrams/ - import to pages via ArcDiagram component' },
      { pattern: 'docs', instruction: 'Markdown docs in docs/ - processed by Dewey' },
      { pattern: 'api', instruction: 'Next.js API routes in app/api/' },
    ],

    // Which doc sections to include in AGENTS.md
    sections: ['overview', 'quickstart', 'setup', 'architecture'],
  },

  docs: {
    path: './docs',
    output: './',
    required: ['overview', 'quickstart'],
  },

  install: {
    objective: 'Set up Tawkie documentation and agent-ready files',
    doneWhen: {
      command: 'test -f AGENTS.md',
    },
  },
}
