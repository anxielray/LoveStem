import { useState } from 'react';

export default function Header() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-3 bg-[#111] text-white shadow-md sticky top-0 z-50">

      {/* Logo */}
      <a href="/" title="PhysicsLearn" className="flex items-center space-x-2">
        {/* Colored square logo */}
        <svg viewBox="0 0 36 36" className="w-9 h-9">
          <path d="m17 31v-12l-12 12z" fill="#fd8c00"></path>
          <path d="m4 4.5v13 13l13-13z" fill="#cd0e66"></path>
          <path d="m31 5-12 12h12" fill="#22ab24"></path>
          <path d="m31 18h-13v13h13" fill="#0f82f2"></path>
        </svg>

        {/* Text logo */}
        <svg viewBox="0 0 100 36" className="h-6">
          <g fill="white">
            <path d="m22.9 24.9-.9-11-4.3 11.1h-1.5l-4.4-11-.8 11h-1.7l1.1-13.8h2.3l4.3 11.2 4.3-11.3h2.3l1.1 13.8z"></path>
            <path d="m33.2 24.9-.2-1.3a4.5 4.5 0 0 1 -3.4 1.5 2.5 2.5 0 0 1 -2.8-2.2v-.5c0-2.4 2-3.3 6-3.7v-.4c0-1.2-.7-1.6-1.8-1.6a7.6 7.6 0 0 0 -3.3.8l-.2-1.5a9.5 9.5 0 0 1 3.7-.8c2.3 0 3.4.9 3.4 3.1v6.7zm-.3-4.8c-3.5.3-4.3 1.3-4.3 2.3a1.3 1.3 0 0 0 1.4 1.2 4.1 4.1 0 0 0 2.8-1.3z"></path>
            <path d="m40.6 25.1c-1.7 0-2.8-.6-2.8-2.5v-5.7h-1.4v-1.5h1.4v-3.2l1.7-.3v3.4h2.1l.2 1.5h-2.2v5.4c0 .8.3 1.3 1.3 1.3h.8l.2 1.5z"></path>
            {/* Add remaining paths for full text logo if needed */}
          </g>
        </svg>
      </a>

      {/* Navigation */}
      <nav className="flex items-center space-x-6">
        <NavItem href="https://polypad.amplify.com" text="Polypad" />
        <NavItem href="/courses" text="Courses" />
        <NavItem href="/activities" text="Activities" />
        <NavItem href="/lessons" text="Lessons" />

        {/* Search button */}
        <button className="p-2 hover:bg-gray-800 rounded" title="Search">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" fill="none"/>
            <line x1="16" y1="16" x2="22" y2="22" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>

        {/* Popup menu */}
        <div className="relative">
          <button
            onClick={() => setShowPopup(!showPopup)}
            className="p-2 hover:bg-gray-800 rounded"
            title="More"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10"/>
            </svg>
          </button>

          {showPopup && (
            <div className="absolute right-0 mt-2 w-48 bg-[#222] rounded shadow-lg p-3 space-y-2 z-50">
              <button className="w-full text-left flex items-center space-x-2 p-1 hover:bg-gray-700">
                <span>Sign In</span>
              </button>
              <a href="/signup" className="flex items-center space-x-2 p-1 hover:bg-gray-700">
                <span>Create Account</span>
              </a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

function NavItem({ href, text }) {
  return (
    <a href={href} className="hover:text-orange-400 transition font-medium">
      {text}
    </a>
  );
}
