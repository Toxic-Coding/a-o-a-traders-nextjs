export function getImageUrl({
  imagePath,
  supplierId,
  variant = "100", // default variant
}: {
  imagePath: string;
  supplierId: number;
  variant?: string;
}): string {
  if (!imagePath) return "/logo.avif";

  // If it's already a full URL, return it
  if (imagePath.startsWith("http")) return imagePath;

  // Build env var key dynamically
  const baseEnvKey = `NEXT_PUBLIC_SUPPLIER_${supplierId}_IMAGE_BASE_URL`;
  //   let baseUrl = process.env[baseEnvKey as keyof typeof process.env];
  let baseUrl;

  if (supplierId === 1) {
    baseUrl = process.env.NEXT_PUBLIC_SUPPLIER_11_IMAGE_BASE_URL;
  } else if (supplierId === 4) {
    baseUrl = process.env.NEXT_PUBLIC_SUPPLIER_4_IMAGE_BASE_URL;
  }

  if (!baseUrl) {
    console.warn(
      `Missing base URL for supplier ID ${supplierId}`,
      process.env.NEXT_PUBLIC_SUPPLIER_11_IMAGE_BASE_URL
    );
    return "/logo.avif";
  }

  // Supplier 1 includes variant
  if (supplierId === 1) {
    return `${baseUrl}_${variant}/${imagePath}`;
  }

  return `${baseUrl}/${imagePath}`;
}
