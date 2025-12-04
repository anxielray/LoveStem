import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchYoutubeVideos, fetchYoutubeVideoById } from "../../api/server";

export default function VideoPage() {
  const { id } = useParams(); // video ID from URL
  const [video, setVideo] = useState(null);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    async function load() {
      const v = await fetchYoutubeVideoById(id);
      setVideo(v);

      const r = await fetchYoutubeVideos(v.snippet.title); // recommended based on title
      setRelated(r);
    }

    load();
  }, [id]);

  if (!video) return <p className="p-8">Loading...</p>;

  const { snippet } = video;

  return (
    <div className="w-full min-h-screen bg-white text-black flex flex-row p-6 space-x-8">
      {/* LEFT SIDE — VIDEO PLAYER + DETAILS */}
      <div className="flex flex-col w-3/4">
        
        {/* Video Player */}
        <div className="w-full aspect-video bg-black rounded-xl overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            className="w-full h-full"
            allowFullScreen
          ></iframe>
        </div>

        {/* Title */}
        <h1 className="text-xl font-bold mt-4">{snippet.title}</h1>

        {/* Channel */}
        <div className="flex items-center space-x-3 mt-4">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <div>
            <p className="font-semibold">{snippet.channelTitle}</p>
          </div>
        </div>

        {/* Description */}
        <div className="mt-6 bg-gray-100 p-4 rounded-xl whitespace-pre-line">
          {snippet.description}
        </div>
      </div>

      {/* RIGHT SIDE — RELATED VIDEOS */}
      <div className="w-1/4 space-y-4">
        <h2 className="font-semibold text-lg mb-2">Related videos</h2>

        {related.map((rv, i) => (
          <RelatedVideoCard key={i} video={rv} />
        ))}
      </div>
    </div>
  );
}

function RelatedVideoCard({ video }) {
  const { snippet, id } = video;
  if (!snippet) return null;

  const vid = id.videoId || id;

  return (
    <a
      href={`/video/${vid}`}
      className="flex space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
    >
      <img
        src={snippet.thumbnails.medium.url}
        className="w-40 h-24 object-cover rounded-lg"
        alt={snippet.title}
      />

      <div className="flex flex-col">
        <p className="font-semibold text-sm leading-tight">{snippet.title}</p>
        <p className="text-xs text-gray-600 mt-1">{snippet.channelTitle}</p>
      </div>
    </a>
  );
}
