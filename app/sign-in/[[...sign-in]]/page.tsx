import { SignIn } from "@clerk/nextjs"

import { AuthShell } from "@/components/auth/auth-shell"
import { authFormAppearance } from "@/lib/clerk-appearance"

export default function SignInPage() {
  return (
    <AuthShell>
      <SignIn
        appearance={authFormAppearance}
        forceRedirectUrl="/editor"
        path="/sign-in"
        routing="path"
        signUpUrl="/sign-up"
      />
    </AuthShell>
  )
}
