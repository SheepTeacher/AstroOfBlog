// Project data configuration file
// Used to manage data for the project display page

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "web" | "mobile" | "desktop" | "other" | "NT";
  techStack: string[];
  status: "completed" | "in-progress" | "planned";
  liveDemo?: string;
  sourceCode?: string;
  visitUrl?: string;
  startDate: string;
  endDate?: string;
  featured?: boolean;
  tags?: string[];
  showImage?: boolean;
}

export const projectsData: Project[] = [
  {
    id: "GetMyIP",
    title: "GetMyIP",
    description:
      "本网页由ipapi提供的公开API创作 这是一个没啥用的项目，您喜欢的话可以给我点一个Star吗（小声）",
    image: "",
    category: "NT",
    techStack: ["HTML5"],
    status: "in-progress",
    sourceCode: "https://github.com/SheepTeacher/GetMyIP",
    visitUrl: "",
    startDate: "2024",
    featured: true,
    tags: ["IP", "HTML5"],
  },
];

// Get project statistics
export const getProjectStats = () => {
  const total = projectsData.length;
  const completed = projectsData.filter((p) => p.status === "completed").length;
  const inProgress = projectsData.filter(
    (p) => p.status === "in-progress",
  ).length;
  const planned = projectsData.filter((p) => p.status === "planned").length;

  return {
    total,
    byStatus: {
      completed,
      inProgress,
      planned,
    },
  };
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
  if (!category || category === "all") {
    return projectsData;
  }
  return projectsData.filter((p) => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
  return projectsData.filter((p) => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
  const techSet = new Set<string>();
  projectsData.forEach((project) => {
    project.techStack.forEach((tech) => {
      techSet.add(tech);
    });
  });
  return Array.from(techSet).sort();
};
