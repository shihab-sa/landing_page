import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-12">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="text-lg font-bold">Logo</p>
          <div className="flex gap-4 mt-2">
            <Link href="/solutions/anycaas">AnyCaaS</Link>
            <Link href="/solutions/anybaas">AnyBaaS</Link>
            <Link href="/solutions/anypaas">AnyPaaS</Link>
          </div>
        </div>
        <div>
          <p>©2023 All rights reserved. Any Technology Pte Ltd.</p>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
