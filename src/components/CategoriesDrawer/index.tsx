import Categories from "@/components/Categories";

const CategoriesDrawer = ({ setIsOpen }: { setIsOpen: (state: boolean) => void }) => {
    return (
        <section className="relative max-w-[500px] w-full rounded-[10px] shadow-lg">
            <Categories />
            <p onClick={() => setIsOpen(false)} className="absolute top-0 right-4 text-4xl text-white">&times;</p>
        </section>
    )
}
export default CategoriesDrawer;