// utils/cart.ts
export async function addToMyCart(
  productId: string,
  quantity: number,
  userId: string
): Promise<any> {
  try {
    const response = await fetch(
      `https://pharmacyapiendpoint.onrender.com/cart/add/${userId}/${productId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId, quantity }),
      }
    );

    if (response.status === 201) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Failed to add product to the cart");
    }
  } catch (error) {
    throw error;
  }
}
