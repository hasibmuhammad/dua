import Categories from "@/components/Categories";
import Duas from "@/components/Duas";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { Settings } from "@/components/Settings";

export default function Home() {
  return (
    <section className="flex gap-x-[30px]">
      <section className="hidden lg:block w-[100px] h-[90vh] bg-white rounded-[24px]">
        <Navbar />
      </section>
      <div className="max-w-full w-full">
        <Header />
        <div className="flex gap-x-4 mt-5">
          <section className="hidden lg:block max-w-[350px] w-full rounded-[10px]">
            <Categories />
          </section>
          <section className="max-h-[87vh] overflow-auto w-full">
            <Duas />
          </section>
          <section className="hidden 2xl:block max-w-[300px] h-[85vh] w-full">
            <Settings />
          </section>
        </div>
      </div>
    </section>
  );
}
