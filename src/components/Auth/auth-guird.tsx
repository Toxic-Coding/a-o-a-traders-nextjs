// components/auth-guard.tsx (Server Component Wrapper)
import { getSession } from '@/lib/session'
import { redirect } from 'next/navigation'

export async function AuthGuard({ children }: { children: React.ReactNode }) {
  const session = await getSession()

  if (!session.user) {
    redirect('/signin')
  }

  return <>{children}</>
}