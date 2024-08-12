import { usePathname } from 'next/navigation';

export default function useActivePath() {
  const pathname = usePathname();

  function checkHeaderPath(path: string): boolean {
    if (path === '/' && pathname !== path) {
      return false;
    }

    const firstQueryParameterIndex = path.indexOf('?');
    const pathWithoutQueryParameters =
      firstQueryParameterIndex === -1 ? path : path.slice(0, firstQueryParameterIndex);

    return pathname?.startsWith(pathWithoutQueryParameters) ?? false;
  }

  function checkSidebarPath(path: string): boolean {
    const pathnameWithoutQuery = pathname.split('?')[0];
    return pathnameWithoutQuery === path;
  }

  return {
    checkHeaderPath,
    checkSidebarPath
  };
}
