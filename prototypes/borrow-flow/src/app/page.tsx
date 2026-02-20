import { redirect } from 'next/navigation';

export default function HomePage() {
  // Redirect to dashboard as the primary landing page
  redirect('/dashboard');
}
