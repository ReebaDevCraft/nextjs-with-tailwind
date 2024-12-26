import Link from "next/link";

export default function LayoutAbout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <ul className="flex space-x-6">
            <li>
              <Link href="/about" className="hover:text-blue-300 text-lg font-semibold">
                Go to About
              </Link>
            </li>
            <li>
              <Link href="/about/aboutcollege" className="hover:text-blue-300 text-lg font-semibold">
                Go to About College
              </Link>
            </li>
            <li>
              <Link href="/about/aboutstudent" className="hover:text-blue-300 text-lg font-semibold">
                Go to About Student
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <main className="flex-1 container mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
        {children}
      </main>
    </div>
  );
}
