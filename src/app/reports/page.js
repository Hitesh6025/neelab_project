'use client';

export default function ReportsPage() {
  return (
    <div className="container mx-auto px-4 pt-20">
      <h1 className="text-3xl font-bold mb-6">Reports</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Member Statistics</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Active Members</span>
              <span className="font-semibold">150</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">New Members (This Month)</span>
              <span className="font-semibold">12</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Memberships Expiring Soon</span>
              <span className="font-semibold text-orange-600">8</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Revenue Overview</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Monthly Revenue</span>
              <span className="font-semibold">₹50,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Pending Payments</span>
              <span className="font-semibold text-red-600">₹15,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Revenue Growth (YoY)</span>
              <span className="font-semibold text-green-600">+15%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Batch Analytics</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Most Popular Batch</span>
              <span className="font-semibold">Morning Yoga (6:00 AM)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Average Batch Size</span>
              <span className="font-semibold">15 members</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Batch Utilization</span>
              <span className="font-semibold">85%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Enquiry Conversion</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Enquiries (This Month)</span>
              <span className="font-semibold">45</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Converted to Members</span>
              <span className="font-semibold text-green-600">18</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Conversion Rate</span>
              <span className="font-semibold">40%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}