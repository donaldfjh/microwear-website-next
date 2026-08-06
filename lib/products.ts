import fs from "fs/promises";
import path from "path";
import { Product } from "@/types/product";

const PRODUCTS_JSON = path.join(process.cwd(), "data", "products.json");
const PRODUCT_MODULES_DIR = path.join(
  process.cwd(),
  "data",
  "product-modules"
);

/**
 * Load legacy monolithic products.json
 */
async function loadLegacyProducts(): Promise<Product[]> {
  try {
    const fileContents = await fs.readFile(PRODUCTS_JSON, "utf8");
    const products = JSON.parse(fileContents);

    if (!Array.isArray(products)) {
      throw new Error("Products data is not an array");
    }

    return products;
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes("ENOENT")) {
        return [];
      }
      if (error instanceof SyntaxError) {
        throw new Error("Products data file contains invalid JSON.");
      }
      throw error;
    }
    throw new Error("An unknown error occurred while fetching products");
  }
}

/**
 * Load modular products from data/product-modules/*.json
 * Skips files/folders starting with "_" (templates & docs)
 */
async function loadProductModules(): Promise<Product[]> {
  try {
    const entries = await fs.readdir(PRODUCT_MODULES_DIR, {
      withFileTypes: true,
    });

    const moduleFiles = entries.filter(
      (entry) =>
        entry.isFile() &&
        entry.name.endsWith(".json") &&
        !entry.name.startsWith("_")
    );

    const products: Product[] = [];

    for (const file of moduleFiles) {
      const filePath = path.join(PRODUCT_MODULES_DIR, file.name);
      const contents = await fs.readFile(filePath, "utf8");
      const data = JSON.parse(contents);

      if (Array.isArray(data)) {
        products.push(...data);
      } else if (data && typeof data === "object" && data.id) {
        products.push(data as Product);
      } else {
        console.warn(
          `[products] Skipping invalid module: ${file.name} (missing id)`
        );
      }
    }

    return products;
  } catch (error) {
    if (error instanceof Error && error.message.includes("ENOENT")) {
      return [];
    }
    throw error;
  }
}

/**
 * Merge legacy + module products.
 * Module products come first (newest catalog), then legacy.
 * Modules override legacy when IDs collide.
 */
function mergeProducts(
  legacy: Product[],
  modules: Product[]
): Product[] {
  const byId = new Map<string, Product>();
  const moduleIds = new Set<string>();

  // Modules first so homepage / catalog lead with new models
  for (const product of modules) {
    if (product?.id) {
      byId.set(product.id, product);
      moduleIds.add(product.id);
    }
  }

  for (const product of legacy) {
    if (product?.id && !moduleIds.has(product.id)) {
      byId.set(product.id, product);
    }
  }

  return Array.from(byId.values());
}

/**
 * Fetches all products (legacy JSON + product modules)
 */
export async function getProducts(): Promise<Product[]> {
  const [legacy, modules] = await Promise.all([
    loadLegacyProducts(),
    loadProductModules(),
  ]);

  const products = mergeProducts(legacy, modules);

  if (products.length === 0) {
    throw new Error(
      "No products found. Add data/products.json or files in data/product-modules/."
    );
  }

  return products;
}

/**
 * Fetches a single product by its ID
 */
export async function getProductById(
  id: string
): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((product) => product.id === id);
}
