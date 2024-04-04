import Showcase from "@/components/Showcase";
import Mobile from "@/components/mainPage/Mobile";
import Laptop from "@/components/mainPage/Laptop";

function MainPage() {
  return (
    <main>
      <Showcase>
        <Mobile />
        <Laptop />
      </Showcase>
    </main>
  );
}

export default MainPage;
