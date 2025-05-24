import { ProductImage } from "@/types/product";

function extractAllVariantImages(products: ProductImage[]): string[] {
  const images: string[] = [];
console.log(products);

  for (const product of products) {
    for (const key in product) {
      const value = product[key];

      if (
        (key === "main_image" || key.startsWith("image_variant")) &&
        value &&
        value.toLowerCase() !== "null" &&
        value.toLowerCase() !== "nan"
      ) {
        images.push(value.trim());
      }

      if (key === "alt_image" && value && value.toLowerCase() !== "null") {
        const altImages = value
          .split(",")
          .map((img) => img.trim())
          .filter((img) => img);
        images.push(...altImages);
      }
    }
  }

  return images;
}

export default extractAllVariantImages;
