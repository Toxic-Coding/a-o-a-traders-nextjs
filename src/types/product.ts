export interface ProductImage {
  product_id: string;
  main_image: string | null;
  image_variant1: string | null;
  image_variant2: string | null;
  image_variant3: string | null;
  image_variant4: string | null;
  image_variant5: string | null;
  alt_image: string;
  alt_image_variant1: string | null;
  alt_image_variant2: string | null;
  alt_image_variant3: string | null;
  brand_logo_image: string | null;
  brand_logo_image_url: string | null;
  msds_image: string | null;
  msds_image_url: string | null;
}

export interface Product {
  supplier_id: number;
  product_id: string;
  product_name: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  stock_qty: number;
  item_weight: number;
  keywords: string;
  is_active: boolean;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
  images: ProductImage[];
}

export interface ProductList {
  items: Product[];
}
