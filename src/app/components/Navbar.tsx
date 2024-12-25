import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full bg-blue-950 text-white">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
        {/* Logo or Brand */}
        <div className="text-2xl font-bold">
          <Link href="/">Data Fetching</Link>
        </div>
        {/* Navigation Links */}
        <div className="flex flex-wrap items-center gap-6 text-lg">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/csr" className="hover:underline">
            Client Side Rendering
          </Link>
          <Link href="/ssr" className="hover:underline">
            Server Side Rendering
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
