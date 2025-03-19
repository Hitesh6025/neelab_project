'use client';
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [manageDropdown, setManageDropdown] = useState(false);
  const [membersDropdown, setMembersDropdown] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex space-x-6 items-center">
          <Link href="/dashboard" className="text-lg font-semibold hover:text-gray-300">Dashboard</Link>
          
          <div className="relative group" 
            onMouseEnter={() => setManageDropdown(true)}
            onMouseLeave={() => setManageDropdown(false)}>
            <span className="cursor-pointer hover:text-gray-300 flex items-center">
              Manage
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            {manageDropdown && (
              <div className="absolute top-full left-0 bg-gray-800 py-2 w-48 rounded-lg shadow-xl z-50 mt-1 border border-gray-700">
                <Link href="/manage/categories" className="block px-4 py-2 hover:bg-gray-700 transition-colors">Categories</Link>
                <Link href="/manage/batches" className="block px-4 py-2 hover:bg-gray-700 transition-colors">Batches</Link>
                <Link href="/manage/enquiries" className="block px-4 py-2 hover:bg-gray-700 transition-colors">Enquiries</Link>
                <Link href="/manage/sms" className="block px-4 py-2 hover:bg-gray-700 transition-colors">SMS</Link>
              </div>
            )}
          </div>

          <div className="relative group"
            onMouseEnter={() => setMembersDropdown(true)}
            onMouseLeave={() => setMembersDropdown(false)}>
            <span className="cursor-pointer hover:text-gray-300 flex items-center">
              Members
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            {membersDropdown && (
              <div className="absolute top-full left-0 bg-gray-800 py-2 w-48 rounded-lg shadow-xl z-50 mt-1 border border-gray-700">
                <Link href="/members/registration" className="block px-4 py-2 hover:bg-gray-700 transition-colors">Member Registration</Link>
                <Link href="/members/view" className="block px-4 py-2 hover:bg-gray-700 transition-colors">View Members</Link>
                <Link href="/members/generate-invoice" className="block px-4 py-2 hover:bg-gray-700 transition-colors">Generate Invoice</Link>
                <Link href="/members/view-invoices" className="block px-4 py-2 hover:bg-gray-700 transition-colors">View Invoices</Link>
              </div>
            )}
          </div>

          <Link href="/reports" className="hover:text-gray-300">Reports</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;