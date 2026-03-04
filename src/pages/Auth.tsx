import { AuthView } from '@neondatabase/neon-js/auth/react';
import { useParams } from 'react-router-dom';

export default function Auth() {
  const { pathname } = useParams();
  return (
    <div className="flex pt-24 pb-12 px-6 min-h-screen justify-center items-center">
      <div className="max-w-md w-full">
        <AuthView path={pathname ?? 'login'} />
      </div>
    </div>
  );
}
