"use client"; // Client Component

import { useParams } from "next/navigation";

export default function SolutionPage() {
  const params = useParams();

  return <div className="text-center text-xl">Welcome to {params.slug}</div>;
}
