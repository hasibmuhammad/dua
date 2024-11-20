import DuaCards from "@/components/DuaCards";
import Image from "next/image";

const Categories = () => {
    return (
        <>
            <div className="bg-primary rounded-t-[10px] h-[57px] flex justify-center items-center mt-5">
                <h3 className="text-white font-semibold">Categories</h3>
            </div>
            <div className="bg-white w-full max-h-[77vh] overflow-y-scroll rounded-b-[10px] p-[15px]">
                <div className="relative">
                    <input
                        type="text"
                        className="border-[1.5px] border-borderPrimary w-full rounded-[7px] p-3 pl-10 outline-primary"
                        placeholder="Search by Catgories"
                    />
                    <div className="absolute top-[50%] translate-y-[-50%] pl-3">
                        <Image
                            src={"/images/search.svg"}
                            width={24}
                            height={24}
                            alt="Search"
                        />
                    </div>
                </div>

                <DuaCards />
            </div>
        </>
    )
}

export default Categories;