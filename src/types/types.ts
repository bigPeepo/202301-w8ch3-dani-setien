export interface Sculpture {
  id: string;
  name: string;
  image: string;
  price: number;
  currency: string;
  artist: string;
  productionYear: number;
  isAvailable: boolean;
}

export type Sculptures = Sculpture[];

enum OrderStatus {
  PendingArrival,
  Fulfilled,
}

export interface Order {
  id: string;
  status: OrderStatus;
  isUnderWarranty: boolean;
}

export type Orders = Order[];

export interface User {
  email: string;
  token: string;
  isLogged: boolean;
  deliveryAddress: string;
  shoppingCart: Sculptures;
  orders: Orders;
}
