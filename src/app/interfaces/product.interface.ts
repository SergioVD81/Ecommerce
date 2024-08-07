export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: [string, string];
  brand: string;
  sku: string;
  weight: number;
  dimensions: dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: [review];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: meta;
  images: [string];
}

interface dimensions {
  width: number;
  height: number;
  depth: number;
}
interface review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}
interface meta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}
export interface Data {
  products: [Product];
  total: number;
  skip: number;
  limit: number;
}
