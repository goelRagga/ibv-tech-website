
import { Navbar } from "@/components/layout/Navbar";
import { getBlogById, blogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";


export function generateStaticParams() {
  return blogPosts.map((b) => ({ id: b.id }));
}

export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
  const blog = getBlogById(params.id);
  if (!blog) return { title: "Not Found" };
  return { title: blog.title, description: blog.excerpt };
}

export default function BlogDetailPage({ params }: { params: { id: string } }) {

  const blogRaw = getBlogById(params.id);
  if (!blogRaw) notFound();

  const blog = blogRaw as typeof blogRaw & {
    author?: string;
    authorRole?: string;
    authorImage?: string;
    sections?: Array<{
      heading?: string;
      paragraphs?: string[];
      bullets?: string[];
      images?: string[];
    }>;
  };

  const related = blogPosts.filter((b) => b.id !== params.id).slice(0, 3);



  return (
    <div style={{ background: "white", color: "#111112", }}>

      {/* ── Navbar ── */}
      <Navbar />

      {/* ── Breadcrumb ── */}
      <div style={{ borderBottom: "1px solid #EBEBEB" }}>
        <div
          className="px-4 md:px-8"
          style={{
            maxWidth: "96vw",
            margin: "40px auto 0px auto",
            padding: "12px 16px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "13px",
            color: "#999",
            minWidth: 0,
          }}
        >
          <Link href="/insights/blogs" style={{ color: "#999", textDecoration: "none", flexShrink: 0 }}
            className="hover:text-[#E30A13] transition-colors">
            Blog
          </Link>
          <span style={{ color: "#CCC", flexShrink: 0 }}>&gt;</span>
          <span style={{ color: "#555", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", minWidth: 0, flex: 1 }}>
            {blog.title}
          </span>
        </div>
      </div>

      {/* ── 2-col header ── */}
      <div
        className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-14 px-4 md:px-4"
        style={{
          maxWidth: "96vw",
          margin: "0 auto",
          paddingTop: "16px",
          paddingBottom: "16px",
          alignItems: "start",
        }}
      >
        {/* Left: category, date, author */}
        <div>
          <span
            style={{
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#E30A13",
              border: "1.5px solid #E30A13",
              borderRadius: "999px",
              padding: "4px 12px",
              display: "inline-block",
              marginBottom: "10px",
            }}
          >
            {blog.category}
          </span>

          <p style={{ fontSize: "11px", color: "#888", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "32px" }}>
            {blog.date}
          </p>

          <p style={{ fontSize: "10px", color: "#999", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "10px", fontWeight: 600 }}>
            Written By
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "40px", height: "40px", borderRadius: "8px",
                background: "#E0E0E0", overflow: "hidden", flexShrink: 0,
              }}
            >
              {blog.authorImage ? (
                <img src={blog.authorImage} alt={blog.author ?? ""} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              ) : (
                <div style={{ width: "100%", height: "100%", background: "#CCC", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 700, color: "#888" }}>
                  {(blog.author ?? "J").charAt(0)}
                </div>
              )}
            </div>
            <div>
              <p style={{ fontSize: "13px", fontWeight: 700, color: "#111", marginBottom: "2px" }}>
                {blog.author ?? "Jane Doe"}
              </p>
              <p style={{ fontSize: "11px", color: "#888" }}>
                {blog.authorRole ?? "Content Writer"}
              </p>
            </div>
          </div>
        </div>

        {/* Right: big title */}
        <h1
          style={{
            fontSize: "clamp(28px, 3.6vw, 50px)",
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: "-0.025em",
            color: "#111112",
            margin: 0,
          }}
        >
          {blog.title}
        </h1>
      </div>

      {/* ── Hero image ── */}
      <div className="px-4 md:px-8 pb-9" style={{ maxWidth: "96vw", margin: "0 auto" }}>
        <div style={{ width: "100%", height: "clamp(220px, 36vw, 480px)", borderRadius: "12px", overflow: "hidden", background: "#DDD" }}>
          <img src={blog.image} alt={blog.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
      </div>

      {/* ── Body ── */}
      <div className="px-4 md:px-8 pb-14" style={{ maxWidth: "96vw", margin: "0 auto" }}>

        {/* Intro excerpt */}
        {blog.excerpt && (
          <p style={{ fontSize: "14px", color: "#444", lineHeight: 1.9, marginBottom: "28px" }}>
            {blog.excerpt}
          </p>
        )}

        {/* Sections (rich) or flat paragraphs */}
        {blog.sections ? (
          blog.sections.map((section, si) => (
            <div key={si}>
              {section.heading && (
                <h2 style={{ fontSize: "clamp(18px, 2vw, 26px)", fontWeight: 800, color: "#111112", letterSpacing: "-0.02em", margin: "40px 0 14px" }}>
                  {section.heading}
                </h2>
              )}
              {section.paragraphs?.map((p, pi) => (
                <p key={pi} style={{ fontSize: "14px", color: "#333", lineHeight: 1.9, marginBottom: "14px" }}>
                  {p}
                </p>
              ))}
              {section.bullets && section.bullets.length > 0 && (
                <ul style={{ paddingLeft: "22px", marginBottom: "18px" }}>
                  {section.bullets.map((b, bi) => (
                    <li key={bi} style={{ fontSize: "14px", color: "#333", lineHeight: 1.9, marginBottom: "5px", listStyleType: "disc" }}>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              {section.images && section.images.length > 0 && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: section.images.length === 1 ? "1fr" : "1fr 1fr",
                    gap: "14px",
                    margin: "28px 0 32px",
                  }}
                >
                  {section.images.map((img, ii) => (
                    <div key={ii} style={{ borderRadius: "10px", overflow: "hidden", height: "clamp(160px, 20vw, 280px)", background: "#E0E0E0" }}>
                      <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        ) : (
          blog.paragraphs?.map((p, i) => (
            <p key={i} style={{ fontSize: "14px", color: "#333", lineHeight: 1.9, marginBottom: "14px" }}>
              {p}
            </p>
          ))
        )}

        {/* ── Share on ── */}
        <div
          style={{
            marginTop: "52px",
            paddingTop: "28px",
            borderTop: "1px solid #EBEBEB",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "14px",
          }}
        >
          <span style={{ fontSize: "13px", fontWeight: 600, color: "#111" }}>Share on:</span>

          {[
            {
              href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://ibvtechnologies.com/insights/blogs/${blog.id}`)}`,
              icon: (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              ),
            },
            {
              href: "https://www.instagram.com",
              icon: (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              ),
            },
            {
              href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://ibvtechnologies.com/insights/blogs/${blog.id}`)}&text=${encodeURIComponent(blog.title)}`,
              icon: (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              ),
            },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:border-[#E30A13] hover:text-[#E30A13] transition-all"
              style={{
                width: "34px", height: "34px", borderRadius: "50%",
                border: "1.5px solid #CECECE",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#555",
              }}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* ── Related Articles ── */}
      {related.length > 0 && (
        <div style={{ background: "#F7F7F7", padding: "40px 0 56px" }}>
          <div className="px-4 md:px-8" style={{ maxWidth: "96vw", margin: "0 auto" }}>

            {/* Header row */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-7">
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                  <path d="M1 7H17M11 1L17 7L11 13" stroke="#111112" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "#111" }}>
                  Related <span style={{ color: "#E30A13" }}>Articles</span>
                </span>
              </div>
              <Link
                href="/contact"
                style={{
                  background: "#E30A13", color: "white",
                  fontSize: "13px", fontWeight: 600,
                  padding: "10px 24px", borderRadius: "999px",
                  textDecoration: "none", display: "inline-block",
                }}
              >
                Start a Project
              </Link>
            </div>

            {/* 3-col related grid */}
            <div className="grid grid-cols-1  lg:grid-cols-3 gap-5">
              {related.map((post) => (
                <Link
                  key={post.id}
                  href={`/insights/blogs/${post.id}`}
                  className="group block"
                  style={{ textDecoration: "none" }}
                >
                  <div className="h-[180px] sm:h-[clamp(140px,15vw,200px)]" style={{ width: "100%", borderRadius: "10px", overflow: "hidden", background: "#DDD", marginBottom: "12px" }}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="group-hover:scale-105 transition-transform duration-500"
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                    <span
                      style={{
                        fontSize: "8px", fontWeight: 700, letterSpacing: "0.1em",
                        textTransform: "uppercase", color: "#E30A13",
                        border: "1px solid #E30A13", borderRadius: "999px", padding: "3px 10px",
                      }}
                    >
                      {post.category}
                    </span>
                    <span style={{ fontSize: "9px", color: "#999", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      {post.date}
                    </span>
                  </div>
                  <h3
                    className="group-hover:text-[#E30A13] transition-colors duration-200"
                    style={{ fontSize: "clamp(13px, 1.1vw, 15px)", fontWeight: 700, color: "#111112", lineHeight: 1.35, margin: 0 }}
                  >
                    {post.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}