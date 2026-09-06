export const authFormAppearance = {
  elements: {
    rootBox: "w-full max-w-[38rem]",
    cardBox: "w-full space-y-6 shadow-none",
    card: "w-full rounded-3xl border border-surface-border bg-surface shadow-none",
    header: "px-2 pt-2",
    headerTitle: "font-sans text-2xl font-semibold tracking-tight text-copy-primary",
    headerSubtitle: "font-sans text-base text-copy-secondary",
    socialButtonsRoot: "gap-3",
    socialButtonsBlockButton:
      "h-16 rounded-xl border border-surface-border bg-surface font-sans text-copy-secondary shadow-none transition-colors hover:bg-elevated",
    socialButtonsBlockButtonText: "font-sans text-base font-medium text-copy-secondary",
    lastAuthenticationStrategyBadge:
      "border border-surface-border bg-elevated font-sans text-copy-muted",
    dividerRow: "my-8",
    dividerLine: "bg-surface-border",
    dividerText: "font-sans text-copy-muted",
    formFieldLabel: "font-sans text-sm font-medium text-copy-primary",
    formFieldInput:
      "h-14 rounded-xl border border-surface-border bg-elevated font-sans text-base text-copy-primary shadow-none placeholder:text-copy-muted focus:border-brand",
    formButtonPrimary:
      "mt-3 h-14 rounded-xl bg-brand font-sans text-base font-semibold text-base shadow-none transition-opacity hover:opacity-90",
    footer:
      "!relative !z-0 !mt-6 rounded-2xl border border-surface-border bg-elevated px-6 py-5",
    footerAction: "bg-transparent",
    footerActionText: "font-sans text-copy-secondary",
    footerActionLink: "font-sans font-medium text-brand hover:text-brand",
    identityPreviewText: "font-sans text-copy-primary",
    formResendCodeLink: "font-sans text-brand",
    alertText: "font-sans",
  },
} as const
