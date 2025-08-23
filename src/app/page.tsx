// src/app/page.tsx
"use client";

import { useUser } from "@clerk/nextjs";
// import CyberScope from "./components/CyberScope/CyberScope";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import TrinexLandingPage from "@/components/TrinexLanding";

export default function Page() {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!isSignedIn) {
    return <TrinexLandingPage />;
  }

  //return <CyberScope />;
}
