# Mock eCommerce Website

This project is a mock eCommerce application built with Next.js, TypeScript, and Zustand for state management. It includes a basic shopping experience with a homepage, product listing, product detail, checkout flow, and simulated payment success/failure pages.

## Features

- **Homepage**: Displays featured products and categories.
- **Product Listing Page**: Lists all products with sorting and filtering options.
- **Product Detail Page**: Shows details of each product with an option to add to cart.
- **Checkout Page**: Allows users to review their cart and proceed to payment.
- **Mock Payment Success/Failure Page**: Simulates a payment outcome after checkout.

## Tech Stack

- **Frontend and Backend**: [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Mock APIs**: [API](https://fakestoreapi.com/products)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- Yarn or npm for package management

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Annany2002/E-Commerce.git
   cd mock-ecommerce
   ```

2. **Install Dependencies**

   ```bash
   yarn install
   # or
   npm install
   ```

3. **Run the server**

   ```bash
   npm run dev
   ```

### Project Structure

- **`/src/components`**: Reusable UI components (e.g., Navbar, ProductCard, CartSummary).
- **`/src/cart`**: cart page.
- **`/src/checkout`**: checkout page.
- **`/src/product`**: product page.
- **`/src/product/[id]`**: product page with id.
- **`/src/types`**: various types for product and cart items.
- **`/src/zustand`**: Zustand store setup for global state management (e.g., cart items).
- **`/src/api`**: Helper functions to call backend APIs.

### Running the Application

Run the Next.js development server:

```bash
yarn dev
# or
npm run dev
```

Visit `http://localhost:3000` to view the application.

## Usage

### 1. **Homepage**

The homepage (`/`) displays shows all products with optional sorting and filtering. Clicking on a product navigates to the product detail page.

### 2. **Product Detail Page**

On the product detail page (`/product/[id]`), users can view product details and add the item to the cart. The cart state is managed using Zustand.

### 3. **Checkout Page**

The checkout page (`/checkout`) displays the cart items, calculates totals, and provides a form to simulate payment.

### 4. **Mock Payment Success/Failure Pages**

After submitting payment on the checkout page, users are redirected to either a success page (`/success`) or a failure page (`/failure`) based on a simulated API response.

## License

This project is licensed under the MIT License.
