"use client";

import dynamic from "next/dynamic";

const DynamicFooter = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function ClientFooterWrapper() {
  return <DynamicFooter />;
}