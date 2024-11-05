import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-200 text-black p-4 fixed w-full opacity-80">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl">E-Commerce Store</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:underline">
                Cart
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
