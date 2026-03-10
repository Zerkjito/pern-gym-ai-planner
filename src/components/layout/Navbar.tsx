import { Dumbbell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { useAuth } from '../../context/AuthContext';
import { UserButton } from '@neondatabase/neon-js/auth/react';

export default function Navbar() {
  const { user } = useAuth();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="flex items-center justify-between max-w-6xl mx-auto px-6 h-16">
        <Link to={'/'} className="flex items-center gap-2 text-foreground ">
          <Dumbbell className="w-6 h-6 text-accent" />
          <span className="font-semibold text-lg">GymAI</span>
        </Link>

        <nav>
          {user ? (
            <div className="flex gap-3 items-center justify-center">
              <Link to={'/profile'}>
                <Button size="sm" variant="ghost">
                  My plan
                </Button>
              </Link>
              <UserButton variant={'secondary'} />
            </div>
          ) : (
            <>
              <Link to={'/auth/sign-in'}>
                <Button size="sm" variant="ghost">
                  Sign in
                </Button>
              </Link>

              <Link to={'/auth/sign-up'}>
                <Button size="sm">Sign up</Button>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
