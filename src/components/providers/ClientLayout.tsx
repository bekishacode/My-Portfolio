"use client";

import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";

export default function ClientLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Return null on server, layout on client
  if (!isClient) {
    return null;
  }

  return <Layout>{children}</Layout>;
}