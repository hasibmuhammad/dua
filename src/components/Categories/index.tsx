import DuaCards from "@/components/DuaCards";
import Image from "next/image";

const Categories = () => {
    return (
        <div className="border-[.5px] border-borderPrimary rounded-[10px]">
            <div className="bg-primary rounded-t-[10px] h-[57px] flex justify-center items-center">
                <h3 className="text-white font-semibold">Categories</h3>
            </div>
            <div className="bg-white">
                <div className="px-[15px] pt-[15px]">
                    <div className="sticky top-[15px] z-10 bg-white">
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
                </div>
                <div className="w-full h-[65vh] overflow-y-scroll px-[15px]">
                    <DuaCards />
                </div>
            </div>
            <div className="bg-white h-10 rounded-b-[10px]"></div>
        </div>
    )
}

export default Categories;