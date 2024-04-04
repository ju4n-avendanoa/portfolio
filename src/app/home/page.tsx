import Showcase from "@/components/Showcase";
import Mobile from "@/components/mainPage/Mobile";
import Laptop from "@/components/mainPage/Laptop";

export default function Home() {
  return (
    <main>
      <Showcase>
        <Mobile />
        <Laptop />
      </Showcase>
    </main>
  );
}
