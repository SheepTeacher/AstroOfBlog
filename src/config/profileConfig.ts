import type { ProfileConfig } from "../types/config";

// 个人资料配置
export const profileConfig: ProfileConfig = {
  avatar: "assets/images/avatar.webp", // 相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
  name: "BG7NTZ",
  bio: "青，取之于蓝，而青于蓝 冰，水为之，而寒于水",
  typewriter: {
    enable: true, // 启用个人简介打字机效果
    speed: 80, // 打字速度（毫秒）
  },
  links: [
    {
      name: "Bilibili",
      icon: "fa7-brands:bilibili",
      url: "https://space.bilibili.com/604076432",
    },
    {
      name: "GitHub",
      icon: "fa7-brands:github",
      url: "https://github.com/SYSTEM-WIN32-PE",
    },
    {
      name: "Codeberg",
      icon: "simple-icons:codeberg",
      url: "https://codeberg.org",
    },
    {
      name: "Discord",
      icon: "fa7-brands:discord",
      url: "https://discord.gg/aa9wdqvb",
    },
  ],
};
