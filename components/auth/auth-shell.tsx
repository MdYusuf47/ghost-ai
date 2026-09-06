import type { ReactNode } from "react"
import { Bot, FileText, Users } from "lucide-react"

interface AuthShellProps {
  children: ReactNode
}

const FEATURES = [
  {
    description: "Describe your system and turn it into a living architecture canvas.",
    icon: Bot,
    title: "AI architecture generation",
  },
  {
    description: "Design together with live cursors, presence, and shared editing.",
    icon: Users,
    title: "Real-time collaboration",
  },
  {
    description: "Export a complete Markdown technical specification from your canvas.",
    icon: FileText,
    title: "Instant spec generation",
  },
]

export function AuthShell({ children }: AuthShellProps) {
  return (
    <main className="grid min-h-screen bg-base font-sans lg:grid-cols-2">
      <section className="hidden border-r border-surface-border bg-accent-dim px-12 py-11 lg:flex lg:flex-col lg:justify-between xl:px-16">
        <div className="flex items-center gap-3 text-lg font-semibold tracking-tight text-copy-primary">
          <span aria-hidden="true" className="h-9 w-9 rounded-xl bg-brand" />
          Ghost AI
        </div>

        <div className="max-w-xl self-center">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-copy-primary xl:text-5xl">
            Design systems at the speed of thought.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-copy-secondary">
            Describe your architecture in plain English. Ghost AI maps it to a shared canvas your whole team can refine in real time.
          </p>

          <ul className="mt-14 space-y-8">
            {FEATURES.map((feature) => (
              <li className="flex gap-4" key={feature.title}>
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-surface-border-subtle bg-surface text-brand">
                  <feature.icon aria-hidden="true" className="h-4 w-4" />
                </span>
                <div>
                  <h2 className="text-base font-medium text-copy-primary">{feature.title}</h2>
                  <p className="mt-1 text-sm leading-6 text-copy-muted">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-sm text-copy-faint">© 2026 Ghost AI. All rights reserved.</p>
      </section>

      <section className="flex min-h-screen items-center justify-center bg-base px-4 py-8 sm:px-6 lg:px-12">
        {children}
      </section>
    </main>
  )
}
