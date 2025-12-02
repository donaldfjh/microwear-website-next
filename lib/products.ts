import fs from "fs/promises";
import path from "path";
import { Product } from "@/types/product";

/**
 * Fetches all products from the products.json file
 * @returns Promise<Product[]> - Array of all products
 * @throws Error if the file cannot be read or parsed
 */
export async function getProducts(): Promise<Product[]> {
  try {
    const filePath = path.join(process.cwd(), "data", "products.json");
    const fileContents = await fs.readFile(filePath, "utf8");

    const products = JSON.parse(fileContents);

    // Validate that we got an array
    if (!Array.isArray(products)) {
      throw new Error("Products data is not an array");
    }

    return products;
  } catch (error) {
    if (error instanceof Error) {
      // Provide more context for different error types
      if (error.message.includes("ENOENT")) {
        throw new Error(
          "Products data file not found. Please ensure data/products.json exists."
        );
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
 * Fetches a single product by its ID
 * @param id - The product ID to search for
 * @returns Promise<Product | undefined> - The product if found, undefined otherwise
 */
export async function getProductById(id: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((product) => product.id === id);
}
