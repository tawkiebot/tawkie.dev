import type { ArcDiagramData } from '@arach/arc'

const diagram: ArcDiagramData = {
  id: 'TAWKIE.ARCH.001',
  layout: { width: 800, height: 400 },
  nodes: {
    talkie: { x: 50, y: 150, size: 'm' },
    telegram: { x: 250, y: 150, size: 'm' },
    openclaw: { x: 450, y: 150, size: 'l' },
    tawkiedev: { x: 450, y: 280, size: 'm' },
    convex: { x: 650, y: 280, size: 'm' },
  },
  nodeData: {
    talkie: { icon: 'Mic', name: 'Talkie', color: 'emerald', subtitle: 'Voice AI' },
    telegram: { icon: 'MessageCircle', name: 'Telegram', color: 'blue', subtitle: 'Bridge' },
    openclaw: { icon: 'Bot', name: 'OpenClaw', color: 'violet', subtitle: 'Automation' },
    tawkiedev: { icon: 'Globe', name: 'Tawkie.dev', color: 'orange', subtitle: 'Web UI' },
    convex: { icon: 'Database', name: 'Convex', color: 'cyan', subtitle: 'Database' },
  },
  connectors: [
    { from: 'talkie', to: 'telegram', fromAnchor: 'right', toAnchor: 'left', style: 'voice' },
    { from: 'telegram', to: 'openclaw', fromAnchor: 'right', toAnchor: 'left', style: 'cmd' },
    { from: 'openclaw', to: 'tawkiedev', fromAnchor: 'bottom', toAnchor: 'top', style: 'api' },
    { from: 'tawkiedev', to: 'convex', fromAnchor: 'right', toAnchor: 'left', style: 'db' },
  ],
  connectorStyles: {
    voice: { color: 'emerald', strokeWidth: 2, label: 'Voice' },
    cmd: { color: 'blue', strokeWidth: 2, label: 'Command' },
    api: { color: 'violet', strokeWidth: 2, label: 'JSON' },
    db: { color: 'cyan', strokeWidth: 2, label: 'Query' },
  },
}

export default diagram
