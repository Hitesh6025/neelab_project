import Link from 'next/link';
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Welcome to Neelabh Studio</h1>
      <p className="text-xl text-gray-600 mb-12 text-center">
        Your one-stop solution for studio management
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        <Link href="/dashboard" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
          <p className="text-gray-600">View your studio's performance at a glance</p>
        </Link>
        <Link href="/members/registration" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">Member Registration</h2>
          <p className="text-gray-600">Register new members and manage existing ones</p>
        </Link>
        <Link href="/manage/batches" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">Batch Management</h2>
          <p className="text-gray-600">Organize and manage your studio batches</p>
        </Link>
      </div>
    </div>
  );
}
