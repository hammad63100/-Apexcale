import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

interface RouterContextType {
  currentPath: string;
  serviceSlug: string | null;
  navigate: (to: string) => void;
  isHome: boolean;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  serviceSlug: null,
  navigate: () => {},
  isHome: true,
});

const GHP_BASE = '/-Apexcale';

function getBasePath(): string {
  return window.location.pathname.startsWith(GHP_BASE) ? GHP_BASE : '';
}

function parseLocation(): { path: string; slug: string | null } {
  // Check hash first (e.g. #/services/amazon-ppc-advertising or #services)
  const hash = window.location.hash;
  const rawPathname = window.location.pathname;
  const pathname = rawPathname.startsWith(GHP_BASE) ? rawPathname.slice(GHP_BASE.length) || '/' : rawPathname;

  let activePath = '/';

  if (hash.startsWith('#/services/')) {
    activePath = hash.replace('#', '');
  } else if (pathname.startsWith('/services/')) {
    activePath = pathname;
  } else if (hash && !hash.startsWith('#/')) {
    // Standard section anchor on home page
    activePath = '/';
  } else if (pathname !== '' && pathname !== '/') {
    activePath = pathname;
  }

  let slug: string | null = null;
  const match = activePath.match(/^\/services\/([a-zA-Z0-9_-]+)/);
  if (match) {
    slug = match[1];
  }

  return { path: activePath, slug };
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [route, setRoute] = useState<{ path: string; slug: string | null }>(parseLocation);

  useEffect(() => {
    const handleLocationChange = () => {
      setRoute(parseLocation());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigate = (to: string) => {
    const base = getBasePath();

    // If it's a section anchor (e.g. '#services' or '#cta')
    if (to.startsWith('#') && !to.startsWith('#/')) {
      if (route.path !== '/') {
        // Navigate to home then scroll to anchor
        window.history.pushState({}, '', (base || '') + '/' + to);
        setRoute({ path: '/', slug: null });
        setTimeout(() => {
          const el = document.querySelector(to);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.querySelector(to);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState({}, '', to);
        }
      }
      return;
    }

    // Full or sub-path navigation (e.g. '/services/amazon-ppc-advertising')
    // We update history and support hash fallback
    try {
      window.history.pushState({}, '', (base || '') + to);
    } catch {
      window.location.hash = '#' + to;
    }

    setRoute(parseLocation());
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  };

  const isHome = route.path === '/' || route.slug === null;

  return (
    <RouterContext.Provider
      value={{
        currentPath: route.path,
        serviceSlug: route.slug,
        navigate,
        isHome,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}
