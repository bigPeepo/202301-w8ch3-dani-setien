# Data Layer

## Data

### User

- username
- isLogged
- deliveryAddress
- shoppingCart
- pastOrders

## Sculptures

- id
- name
- price
- artist
- productionYear
- isAvailable

## Orders

- id
- status: ENUM (PendingArrival / Fulfilled)
- isUnderWarranty

## Data modifications

## User

- Set username
- Unset username
- Set isLogged
- Unset isLogged

- Add deliveryAddress
- Add item to shopping Cart
- Remove item from shopping Cart
- Add an order to User's pastOrders

## Sculptures

- Add sculpture to Sculptures
- Remove sculpture from Sculptures

- Set isAvailable
- Unset isAvailable

## Orders

- Create order
- Set order status to Fulfilled
