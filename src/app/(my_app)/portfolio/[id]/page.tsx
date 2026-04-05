import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPortfolio } from "@/app/lib/payload";

interface PortfolioDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PortfolioDetailPageProps) {
  const { id } = await params;
  const portfolio = await getPortfolio(id);

  return {
    title: portfolio?.title || "Portfolio",
    description: portfolio?.description || "Portfolio details",
  };
}

export default async function PortfolioDetailPage({
  params,
}: PortfolioDetailPageProps) {
  const { id } = await params;
  const portfolio = await getPortfolio(id);

  if (!portfolio) {
    notFound();
  }

  const paragraphs =
    portfolio.detail?.root?.children
      ?.filter((n) => n.type === "paragraph")
      .map((p) => (p.children ?? []).map((c) => c.text ?? "").join(""))
      .filter((t) => t.trim().length > 0) ?? [];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        {portfolio.imageUrl && (
          <div className="relative h-96 mx-auto max-w-4xl overflow-hidden bg-gray-200">
            <Image
              src={portfolio.imageUrl}
              alt={portfolio.title}
              fill
              className="h-full w-full object-cover"
            />
          </div>
        )}

        <section className="w-full bg-white px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <header className="mb-12">
              <h1 className="mb-4 text-4xl font-bold text-title">
                {portfolio.title}
              </h1>
              <p className="mb-8 text-1xl text-description indent-5">
                {portfolio.description}
              </p>

              {portfolio.technologies?.length > 0 && (
                <div>
                  <h3 className="mb-4 text-lg font-bold text-title">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {portfolio.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm"
                      >
                        {tech.tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </header>

            <div className="my-12 h-[0.5px] bg-gray-300" />

            <article className="max-w-none prose prose-lg">
              {paragraphs.length > 0 ? (
                paragraphs.map((text, i) => (
                  <p
                    key={i}
                    className="mb-4 text-gray-700 leading-relaxed wrap-break-words"
                  >
                    {text}
                  </p>
                ))
              ) : (
                <p className="text-gray-500">No detailed content available.</p>
              )}
            </article>

            <div className="flex justify-between mt-12 border-t border-gray-300 pt-8">
              {portfolio.link && portfolio.link !== "#" && (
                <a
                  href={portfolio.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-500 transition hover:text-green-700"
                >
                  Visit Project
                </a>
              )}
              <Link
                href="/#portfolio"
                className="inline-flex ml-auto text-green-500 transition hover:text-green-700"
              >
                Back to Portfolio
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
