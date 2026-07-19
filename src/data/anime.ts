// 本地番剧数据配置
export interface AnimeItem {
  title: string;
  status: "watching" | "completed" | "planned";
  rating: number;
  cover: string;
  description: string;
  episodes: string;
  year: string;
  genre: string[];
  studio: string;
  link: string;
  progress: number;
  totalEpisodes: number;
  startDate: string;
  endDate: string;
}

const localAnimeList: AnimeItem[] = [
  {
    title: "Lucky☆Star",
    status: "completed",
    rating: 9.9,
    cover: "/assets/anime/Luck.webp",
    description:
      "This film is about the daily lives of a group of high school girls who love anime.",
    episodes: "12 episodes",
    year: "2007",
    genre: ["日常", "治愈"],
    studio: "京阿尼",
    link: "https://www.bilibili.com/bangumi/media/md1293",
    progress: 12,
    totalEpisodes: 12,
    startDate: "2007-04",
    endDate: "2007-09",
  },
  {
    title: "PLACE TO PLACE",
    status: "watching",
    rating: 9.8,
    cover: "/assets/anime/ptp.webp",
    description: "かわいい御庭摘希",
    episodes: "12 episodes",
    year: "2012",
    genre: ["Daily life", "Healing"],
    studio: "Frontier Works",
    link: "https://www.bilibili.com/bangumi/media/md782",
    progress: 2,
    totalEpisodes: 12,
    startDate: "2012-04",
    endDate: "2012-05",
  },
  {
    title: "Blend·S",
    status: "completed",
    rating: 9.6,
    cover: "/assets/anime/BS.webp",
    description: "Set in a coffee shop",
    episodes: "12 episodes",
    year: "2017",
    genre: ["萌系", "日常"],
    studio: "A-1 Pictures",
    link: "https://www.bilibili.com/bangumi/media/md6432",
    progress: 12,
    totalEpisodes: 12,
    startDate: "2017-10",
    endDate: "2017-12",
  },
  {
    title: "魔法少女まどか☆マギカ",
    status: "watching",
    rating: 9.8,
    cover: "/assets/anime/xiaoyuan.webp",
    description: "Madoka, who wants to be a magical girl",
    episodes: "12 episodes",
    year: "2014",
    genre: ["Daily life", "Healing"],
    studio: "SHAFT",
    link: "https://www.bilibili.com/bangumi/media/md2539",
    progress: 1,
    totalEpisodes: 12,
    startDate: "2011-01",
    endDate: "2011-06",
  },
  {
    title: "魔女の旅々",
    status: "completed",
    rating: 9.6,
    cover: "/assets/anime/monv.webp",
    description: "“屑之魔女”伊蕾娜",
    episodes: "12 episodes",
    year: "2020",
    genre: ["奇幻", "Magic"],
    studio: "C2C",
    link: "https://www.bilibili.com/bangumi/media/md28229881",
    progress: 8,
    totalEpisodes: 12,
    startDate: "2020-10",
    endDate: "2025-12",
  },
];

export default localAnimeList;
