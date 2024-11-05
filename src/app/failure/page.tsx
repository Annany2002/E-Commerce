import Link from "next/link";

const PaymentFailure = () => (
  <div className="flex flex-col items-center justify-center h-screen text-center">
    <h1 className="text-3xl font-bold text-red-600 mb-4">Payment Failed</h1>
    <p className="mb-4">
      Unfortunately, we couldn&apos;t process your payment. Please try again.
    </p>
    <Link
      href="/checkout"
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
    >
      Go Back to Checkout
    </Link>
  </div>
);

export default PaymentFailure;
