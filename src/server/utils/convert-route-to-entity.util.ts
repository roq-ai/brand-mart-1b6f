const mapping: Record<string, string> = {
  carts: 'cart',
  'cart-products': 'cart_product',
  companies: 'company',
  products: 'product',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
