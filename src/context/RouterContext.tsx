import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

interface RouterContextType {
  currentPath: string;
  serviceSlug: string | null;
  caseStudyId: string | null;
  navigate: (to: string) => void;
  isHome: boolean;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  serviceSlug: null,
  caseStudyId: null,
  navigate: () => {},
  isHome: true,
});

const GHP_BASE = '/-Apexcale';

function getBasePath(): string {
  return window.location.pathname.startsWith(GHP_BASE) ? GHP_BASE : '';
}

interface RouteState {
  path: string;
  serviceSlug: string | null;
  caseStudyId: string | null;
}

function parseLocation(): RouteState {
  // Check hash first (e.g. #/services/amazon-ppc-advertising or #/case-studies/case-study-1)
  const hash = window.location.hash;
  const rawPathname = window.location.pathname;
  const pathname = rawPathname.startsWith(GHP_BASE) ? rawPathname.slice(GHP_BASE.length) || '/' : rawPathname;

  let activePath = '/';

  if (hash.startsWith('#/services/')) {
    activePath = hash.replace('#', '');
  } else if (pathname.startsWith('/services/')) {
    activePath = pathname;
  } else if (hash.startsWith('#/case-studies/')) {
    activePath = hash.replace('#', '');
  } else if (pathname.startsWith('/case-studies/')) {
    activePath = pathname;
  } else if (hash && !hash.startsWith('#/')) {
    // Standard section anchor on home page
    activePath = '/';
  } else if (pathname !== '' && pathname !== '/') {
    activePath = pathname;
  }

  let serviceSlug: string | null = null;
  const svcMatch = activePath.match(/^\/services\/([a-zA-Z0-9_-]+)/);
  if (svcMatch) {
    serviceSlug = svcMatch[1];
  }

  let caseStudyId: string | null = null;
  const csMatch = activePath.match(/^\/case-studies\/([a-zA-Z0-9_-]+)/);
  if (csMatch) {
    caseStudyId = csMatch[1];
  }

  return { path: activePath, serviceSlug, caseStudyId };
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [route, setRoute] = useState<RouteState>(parseLocation);

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
        setRoute({ path: '/', serviceSlug: null, caseStudyId: null });
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

    // Full or sub-path navigation (e.g. '/services/amazon-ppc-advertising' or '/case-studies/case-study-1')
    try {
      window.history.pushState({}, '', (base || '') + to);
    } catch {
      window.location.hash = '#' + to;
    }

    setRoute(parseLocation());
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  };

  const isHome = route.path === '/' || (route.serviceSlug === null && route.caseStudyId === null);

  return (
    <RouterContext.Provider
      value={{
        currentPath: route.path,
        serviceSlug: route.serviceSlug,
        caseStudyId: route.caseStudyId,
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
