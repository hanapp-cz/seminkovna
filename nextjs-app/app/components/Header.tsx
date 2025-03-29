import { Logo } from './Logo';
import { MainNavigation } from './MainNavigation';

export default function Header() {
  return (
    <header className="fixed z-50 h-24 inset-0 bg-primary-light flex items-center isolate shadow-md">
      <div className="container py-6 sm:px-6">
        <nav className="flex items-center justify-between gap-5">
          <Logo className="flex-shrink-0" />

          <MainNavigation />
        </nav>
      </div>
    </header>
  );
}
