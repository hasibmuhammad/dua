import Categories from "@/components/Categories";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <section className="flex gap-x-[30px]">
      <section className="w-[100px] h-[90vh] bg-white rounded-[24px]">
        <Navbar />
      </section>

      <section className="max-w-[390px] w-full">
        <h2 className="text-secondary text-2xl font-semibold mt-5">Duas Page</h2>
        <Categories />
      </section>
    </section>
  );
}
