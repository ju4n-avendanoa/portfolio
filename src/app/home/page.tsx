// "use client";

import MainPageMobile from "@/components/MainPageMobile";
import MainPagePc from "@/components/MainPagePc";

export default function Home() {
  return (
    <main>
      <MainPagePc />
      <MainPageMobile />
    </main>
  );
}
