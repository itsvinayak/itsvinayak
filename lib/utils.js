import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { compareDesc } from 'date-fns';
import { allPosts } from 'content-collections';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const fetchData = async (url) => {
  try {
    const res = await fetch(url, {
      next: {
        revalidate: 3600,
      },
    });
    if (!res.ok) throw new Error('error fetching data');
    const data = res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getYoutubeStatsData = async () => {
  if (process.env.DEPLOYMENT_TYPE === 'development') {
    return {
      stats: {
        subscriberCount: 0,
        viewCount: 0,
        videoCount: 0,
      },
    };
  }
  const { YOUTUBE_API_KEY, YOUTUBE_CHANNEL_ID } = process.env;
  const statisticsURL = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${YOUTUBE_CHANNEL_ID}&key=${YOUTUBE_API_KEY}`;
  console.log('fetching data', statisticsURL);
  const statsData = await fetchData(statisticsURL);
  console.log('statsData', statsData);
  if (!statsData?.items?.length){
    throw new Error('error fetching data');
  }
  return {
    stats: statsData?.items[0]?.statistics,
  };
};

export const getAllPost = () => {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });
  return posts;
};

export function getPostBySlug(slug) {
  const post = allPosts.find((post) => post.slugAsParams === slug);
  return post;
}

export function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', options);
}
