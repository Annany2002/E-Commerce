import Link from "next/link";

const PaymentSuccess = () => (
  <div className="flex flex-col items-center justify-center h-screen text-center">
    <h1 className="text-3xl font-bold text-green-600 mb-4">
      Payment Successful!
    </h1>
    <p className="mb-4">
      Thank you for your purchase. Your order has been confirmed.
    </p>
    <Link
      href="/"
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
    >
      Return to Homepage
    </Link>
  </div>
);

export default PaymentSuccess;
