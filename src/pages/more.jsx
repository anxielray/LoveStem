import { useState, useEffect } from "react";
import { fetchYoutubeVideos } from "../../api/server";
import { Link } from "react-router-dom";

export default function ScienceVideosPage() {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState([]);
  async function loadVideos(query) {
    const videos = setVideos(await fetchYoutubeVideos(query));
  }
  //   loadVideos("mathematics")

  const handleSearch = () => {
    if (!search.trim()) return;
    loadVideos(search);
  };

  return (
    <div className="w-full min-h-screen bg-[#f9f9f9] text-black flex flex-col font-sans">
      {/* NAVBAR */}
      <header className="w-full h-14 bg-white border-b border-gray-200 flex items-center px-4 justify-between fixed top-0 left-0 z-50">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          {/* <button className="p-2 hover:bg-gray-100 rounded-full">
            <div className="w-5 h-5 bg-gray-500" />
          </button> */}
          <h1 className="text-xl font-bold">LoveStemTube</h1>
        </div>

        {/* SEARCH BAR */}
        <div className="flex items-center w-1/2">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-l-full py-2 px-4 focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="w-16 border border-gray-300 rounded-r-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center h-10"
          >
            🔍
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">📹</button>
          <button className="p-2 hover:bg-gray-100 rounded-full">🔔</button>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
      </header>

      {/* SIDEBAR */}
      <aside className="w-60 bg-white border-r border-gray-200 fixed top-14 left-0 bottom-0 overflow-y-auto py-4">
        <SidebarItem icon="🏠" label="Home" />
        <SidebarItem icon="📚" label="Science" />
        <SidebarItem icon="📚" label="Biology" />
        <SidebarItem icon="🧮" label="Mathematics" />
        <SidebarItem icon="🧪" label="Chemistry" />
        <SidebarItem icon="🪐" label="Astrophysics" />
        <SidebarItem icon="🧠" label="Neuroscience" />
      </aside>

      {/* MAIN CONTENT */}
      <main className="ml-60 mt-14 p-6">
        {/* TOP FILTER BAR */}
        <div className="flex space-x-3 overflow-x-auto pb-4">
          {[
            "Physics",
            "Math",
            "Chemistry",
            "Astronomy",
            "Biology",
            "Engineering",
            "Quantum Mechanics",
            "Calculus",
            "Machine Learning",
          ].map((tag) => (
            <button
              key={tag}
              onClick={() => loadVideos(tag)}
              className="px-4 py-1 bg-gray-200 rounded-full whitespace-nowrap hover:bg-gray-300"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* VIDEO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map((video, i) => <VideoCard key={i} video={video} />) ||
            [...Array(12)].map((_, i) => <VideoCard key={i} />)}
        </div>
      </main>
    </div>
  );
}

function SidebarItem({ icon, label }) {
  return (
    <button className="w-full flex items-center space-x-4 px-4 py-2 hover:bg-gray-100">
      <span className="text-xl">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}

function VideoCard({ video }) {
  const { snippet, id } = video;
  if (!snippet) return null;

  const videoId = id.videoId || id;
  return (
    <div className="flex flex-col cursor-pointer">
      <Link to={`/video/${videoId}`}>
        {/* Thumbnail */}
        <img
          src={snippet.thumbnails.medium.url}
          alt={snippet.title}
          className="w-full h-40 object-cover rounded-lg"
        />

      </Link>
        <div className="flex mt-3 space-x-3">
          {/* Title + Channel */}
          <div className="flex flex-col">
            <p className="text-sm font-semibold leading-tight">
              {snippet.title}
            </p>
            <p className="text-xs text-gray-600 mt-1">{snippet.channelTitle}</p>
          </div>
        </div>
    </div>
  );
}
