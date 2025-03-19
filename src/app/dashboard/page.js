'use client';

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 pt-20">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Active Members</h2>
          <p className="text-4xl font-bold text-blue-600">150</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Total Revenue</h2>
          <p className="text-4xl font-bold text-green-600">₹50,000</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Pending Enquiries</h2>
          <p className="text-4xl font-bold text-orange-600">25</p>
        </div>
      </div>
    </div>
  );
}