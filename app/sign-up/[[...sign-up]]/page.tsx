import { SignUp } from "@clerk/nextjs"

import { AuthShell } from "@/components/auth/auth-shell"
import { authFormAppearance } from "@/lib/clerk-appearance"

export default function SignUpPage() {
  return (
    <AuthShell>
      <SignUp
        appearance={authFormAppearance}
        forceRedirectUrl="/editor"
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
      />
    </AuthShell>
  )
}
