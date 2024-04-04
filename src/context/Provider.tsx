"use client";

import { ReactNode } from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

function Provider({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#4682b4"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
}

export default Provider;
