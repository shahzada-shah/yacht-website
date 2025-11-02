/**
 * Utility functions
 */

/**
 * Get the full asset path with the correct base URL
 * Handles GitHub Pages deployment where base path is /yacht-website/
 * 
 * @param path - The asset path (should start with /)
 * @returns The full path with base URL prepended
 * 
 * @example
 * getAssetPath('/yachts/1/boat_01_01.png')
 * // Returns: '/yacht-website/yachts/1/boat_01_01.png' in production
 * // Returns: '/yachts/1/boat_01_01.png' in development
 */
export function getAssetPath(path: string): string {
  const base = import.meta.env.BASE_URL;
  // Remove leading slash from path if base already has trailing slash
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
}

