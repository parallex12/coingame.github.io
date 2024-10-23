export interface SubProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  productId: number;
  images: string[];
}

export interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  itemPathTo?: string;
}

export interface ProductGridProps {
  products: ProductCardProps[];
  itemPathTo: string;
}
