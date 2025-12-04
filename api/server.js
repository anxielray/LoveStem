const BASE_URL = "https://www.googleapis.com/youtube/v3";
const API_KEY = "AIzaSyAo5V6d_bV0_TGpr6N0QNGk6iVPqOgCsZ0";  
export async function fetchYoutubeVideos(query) {
  // const API_KEY = "AIzaSyCv6HOpV26EgrKGQZ7__pHojw62jadRPu0";
  const API_URL = `${BASE_URL}/search?part=snippet&type=video&q=${encodeURIComponent(query)}&maxResults=20&key=${API_KEY}`;

  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("YouTube API error: " + response.statusText);
  }

  const data = await response.json();
  return data.items;
}

export async function fetchYoutubeVideoById(videoId) {
  try {
    const url = `${BASE_URL}/videos?key=${API_KEY}&part=snippet,contentDetails,statistics&id=${videoId}`;

    const res = await fetch(url);
    const data = await res.json();

    if (!data.items || data.items.length === 0) {
      console.warn("No video found for ID:", videoId);
      return null;
    }

    return data.items[0];
  } catch (err) {
    console.error("Error fetching video by ID:", err);
    return null;
  }
}