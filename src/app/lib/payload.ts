import { id } from "payload/i18n/id";

const BASE_URL =
  process.env.NEXT_PUBLIC_PAYLOAD_API || "http://localhost:3000/api";

// ========== 类型定义 ==========
type LexicalNode = {
  type?: string;
  children?: LexicalNode[];
  text?: string;
};

export type LexicalRichText = {
  root?: {
    children?: LexicalNode[];
  };
};

export interface Portfolio {
  id: string;
  title: string;
  description: string;
  detail?: LexicalRichText;
  technologies: Array<{ tech: string }>;
  imageUrl?: string;
  link?: string;
  order: number;
}

export interface Interest {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  videoUrl?: string;
  order: number;
}

export interface IntroSkill {
  id: string;
  icon?: string;
  title: string;
  description: string;
  order: number;
}

// ========== API 调用函数 ==========

/**
 * 获取所有 Portfolio 数据
 */
export async function getPortfolios(): Promise<Portfolio[]> {
  try {
    const response = await fetch(`${BASE_URL}/portfolios?limit=999`, {
      /*       cache: "force-cache", // Next.js 默认缓存，除非手动 revalidate
      next: { revalidate: 600 }, // 10分钟重新验证一次 */
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch portfolios: ${response.status}`);
    }

    const data = await response.json();
    // Payload 返回格式：{ docs: [], totalDocs, etc }
    return (data.docs || []).sort(
      (a: Portfolio, b: Portfolio) => a.order - b.order,
    );
  } catch (error) {
    console.error("Error fetching portfolios:", error);
    return []; // 降级返回空数组
  }
}

/**
 * 获取单个 Portfolio 数据
 */
export async function getPortfolio(id: string): Promise<Portfolio | null> {
  try {
    const response = await fetch(`${BASE_URL}/portfolios/${id}`, {
      /*       cache: "force-cache",
      next: { revalidate: 600 }, */
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch portfolio: ${response.status}`);
    }

    const data = await response.json();
    return data || null;
  } catch (error) {
    console.error("Error fetching portfolio:", error);
    return null;
  }
}

/**
 * 获取所有 Interests 数据
 */
export async function getInterests(): Promise<Interest[]> {
  try {
    const response = await fetch(`${BASE_URL}/interests?limit=999`, {
      // cache: "force-cache",
      // next: { revalidate: 600 }, // 10分钟重新验证一次
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch interests: ${response.status}`);
    }

    const data = await response.json();
    return (data.docs || []).sort(
      (a: Interest, b: Interest) => a.order - b.order,
    );
  } catch (error) {
    console.error("Error fetching interests:", error);
    return [];
  }
}

/**
 * 获取所有 Intro Skills 数据
 */
export async function getIntroSkills(): Promise<IntroSkill[]> {
  try {
    const response = await fetch(`${BASE_URL}/intro-skills?limit=999`, {
      cache: "force-cache",
      next: { revalidate: 600 }, // 10分钟重新验证一次
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch intro skills: ${response.status}`);
    }

    const data = await response.json();
    return (data.docs || []).sort(
      (a: IntroSkill, b: IntroSkill) => a.order - b.order,
    );
  } catch (error) {
    console.error("Error fetching intro skills:", error);
    return [];
  }
}
