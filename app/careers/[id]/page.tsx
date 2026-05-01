// app/careers/[id]/page.tsx

import { getJobById, jobListings } from "@/lib/careers-data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";
import { JobDetailClient } from "@/components/sections/careers/JobDetailClient";

export function generateStaticParams() {
  return jobListings.map((j) => ({ id: j.id }));
}

export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
  const job = getJobById(params.id);
  if (!job) return { title: "Not Found" };
  return {
    title: `${job.title} — Careers | IBV Technologies`,
    description: job.summary,
  };
}

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const job = getJobById(params.id);
  if (!job) notFound();

  return (
    <div className="font-hanken bg-white text-[#111112]">
      {/* Navbar is rendered by your root layout — no need to add it here */}
      <JobDetailClient job={job} />
    </div>
  );
}