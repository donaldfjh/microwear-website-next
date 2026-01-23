export interface ProductVariant {
  id: string;
  name: string;
  price: number;
  color?: string;
  bandMaterial?: string;
  storageSize?: string;
  image?: string;
}

export interface ProductSpecifications {
  display: string;
  processor: string;
  battery: string;
  waterResistance: string;
  connectivity: string[];
  sensors: string[];
  compatibility: string[];
  dimensions: string;
  weight: string;
  // B2B Specific Fields
  chipset?: string;
  appName?: string;
  certification?: string;
  materials?: string;
}

export interface ProductOEMOptions {
  laserLogo: boolean;
  bootScreen: boolean;
  customStrap: boolean;
  giftBox: boolean;
  appSdk: boolean;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  specifications: ProductSpecifications;
  highlights: string[];
  variants?: ProductVariant[];
  features: string[];
  category: string;
  oemOptions?: ProductOEMOptions;
  distributorUSPs?: string[];
  useCase?: {
    title: string;
    content: string;
  };
}
