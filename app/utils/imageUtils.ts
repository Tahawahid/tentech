/**
 * Utility functions for handling multiple image formats
 */

export const SUPPORTED_IMAGE_FORMATS = ['png', 'jpg', 'jpeg', 'webp', 'svg', 'avif'] as const;

export type ImageFormat = typeof SUPPORTED_IMAGE_FORMATS[number];

/**
 * Finds the first available image format for a given base path
 */
export const findAvailableImageFormat = async (basePath: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    let formatIndex = 0;
    
    const tryNextFormat = () => {
      if (formatIndex >= SUPPORTED_IMAGE_FORMATS.length) {
        reject(new Error(`No available image format found for: ${basePath}`));
        return;
      }
      
      const format = SUPPORTED_IMAGE_FORMATS[formatIndex];
      const fullPath = `${basePath}.${format}`;
      
      const img = new Image();
      
      img.onload = () => {
        resolve(fullPath);
      };
      
      img.onerror = () => {
        formatIndex++;
        tryNextFormat();
      };
      
      // Set a timeout to prevent hanging
      setTimeout(() => {
        img.onerror = null;
        img.onload = null;
        formatIndex++;
        tryNextFormat();
      }, 2000);
      
      img.src = fullPath;
    };
    
    tryNextFormat();
  });
};

/**
 * Preload multiple images with format detection
 */
export const preloadImagesWithFormats = async (basePaths: string[]): Promise<Map<string, string>> => {
  const results = new Map<string, string>();
  
  const promises = basePaths.map(async (basePath) => {
    try {
      const workingFormat = await findAvailableImageFormat(basePath);
      results.set(basePath, workingFormat);
    } catch (error) {
      // Fallback to .png if no format works
      results.set(basePath, `${basePath}.png`);
    }
  });
  
  await Promise.allSettled(promises);
  return results;
};

/**
 * Generate responsive image srcSet for different formats
 */
export const generateResponsiveSrcSet = (basePath: string, format: ImageFormat): string => {
  const sizes = [1, 2, 3]; // 1x, 2x, 3x pixel densities
  return sizes
    .map(density => `${basePath}@${density}x.${format} ${density}x`)
    .join(', ');
};