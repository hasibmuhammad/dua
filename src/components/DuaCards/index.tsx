"use client";
import { ASSET_URL, BACKEND_URL } from "@/constants";
import { DuaContext } from "@/context/DuaContext";
import { ICategories, IDuasByCatAndSubcat, ISubCategoriesById } from "@/types";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const DuaCards = () => {
    const [activeCategory, setActiveCategory] = useState(1);
    const [activeSubcategory, setActiveSubcategory] = useState(0);
    const duaContext = useContext(DuaContext);

    // Check if the context is undefined
    if (!duaContext) {
        throw new Error("DuaContext must be used within a DuaProvider");
    }
    const { setAllDuasByCatid, setIsFetchingDuas } = duaContext;


    const router = useRouter();

    const { data: categories } = useQuery({
        queryKey: ["Categories"],
        queryFn: async () => {
            const result = await fetch(`${BACKEND_URL}/categories`);
            const data = await result.json();

            return data.data;
        },
        refetchOnWindowFocus: false
    });

    const { data: subcategoriesById } = useQuery({
        queryKey: ["SubcategoriesById", activeCategory],
        queryFn: async () => {
            const result = await fetch(`${BACKEND_URL}/subcategories/${activeCategory}`);
            const data = await result.json();

            return data.data;
        },
        enabled: !!activeCategory,
        refetchOnWindowFocus: false
    });

    const { data: duasByCatAndSubcat } = useQuery({
        queryKey: ["duasByCatAndSubcat", activeCategory, activeSubcategory],
        queryFn: async () => {
            const result = await fetch(`${BACKEND_URL}/duas/${activeCategory}/${activeSubcategory}`);
            const data = await result.json();

            return data.data;
        },
        enabled: !!activeCategory && !!activeSubcategory,
        refetchOnWindowFocus: false
    });

    const { data: duasByCatid, isFetching: duasByCatidFetching } = useQuery({
        queryKey: ["duasByCatid", activeCategory],
        queryFn: async () => {
            const result = await fetch(`${BACKEND_URL}/duas/${activeCategory}`);
            const data = await result.json();

            return data.data;
        },
        enabled: !!activeCategory,
        refetchOnWindowFocus: false
    });

    const allCategories: ICategories[] = categories || [];
    const allSubcategoriesById: ISubCategoriesById[] = subcategoriesById || [];
    const allDuasByCatAndSubcat: IDuasByCatAndSubcat[] = duasByCatAndSubcat || [];
    // const allDuasByCatid: IDuasByCatAndSubcat[] = duasByCatid || [];

    useEffect(() => {
        router.push(`/?cat=${activeCategory}${activeSubcategory ? `&subcat=${activeSubcategory}` : ""}`);
    }, [router, activeCategory, activeSubcategory]);

    useEffect(() => {
        if (duasByCatid && activeCategory === 1) {
            setAllDuasByCatid(duasByCatid);
            setIsFetchingDuas(false);
        }
        if (duasByCatid && activeCategory !== 1) {
            setAllDuasByCatid(duasByCatid);
            setIsFetchingDuas(false);
        }

        if (duasByCatidFetching) {
            setIsFetchingDuas(true);
        }

    }, [duasByCatid, activeCategory, setAllDuasByCatid]);


    return (
        <section>
            {
                allCategories?.map(dua => {
                    return (
                        <div key={dua.cat_id}>
                            <div onClick={() => {
                                setActiveCategory(dua.cat_id);
                                setActiveSubcategory(0);
                            }} className={`group hover:bg-bgSvg/40 mt-4 px-4 py-3 rounded-lg cursor-pointer flex items-center justify-between ${activeCategory === dua.cat_id ? "bg-bgSvg/40" : ""}`}>
                                <div className="flex gap-x-4 items-center">
                                    <div className={`bg-bgSvg/40 group-hover:bg-white rounded-lg w-[60px] h-[60px] flex justify-center items-center ${activeCategory === dua.cat_id ? "bg-white" : ""}`}>
                                        <Image
                                            src={`${ASSET_URL}/${dua.cat_icon}.svg`}
                                            alt="Duar Gurutto"
                                            width={30}
                                            height={30}
                                        />
                                    </div>
                                    <div>
                                        <h1 className="font-semibold text-secondary">{dua?.cat_name_en}</h1>
                                        <p className="text-secondary-light text-sm">Subcategory: {dua?.no_of_subcat}</p>
                                    </div>
                                </div>
                                <div className="text-center border-l border-borderPrimary">
                                    <div className="pl-4">
                                        <span className="text-secondary font-semibold">{dua?.no_of_dua}</span>
                                        <p className="text-secondary-light text-sm">{dua?.no_of_dua > 1 ? "Duas" : "Dua"}</p>
                                    </div>
                                </div>
                            </div>
                            {dua.cat_id === activeCategory &&
                                <div className="mt-4">
                                    <ul className="relative border-l-2 border-dotted border-l-primary ml-7 space-y-2">
                                        {
                                            allSubcategoriesById.map((item, index) => {
                                                return (
                                                    <div key={index}>
                                                        <li className={`text-sm ${activeSubcategory === item.subcat_id ? "text-primary font-semibold" : ""}`} onClick={() => setActiveSubcategory(item.subcat_id)}>
                                                            <div className="flex items-center gap-4">
                                                                <div className="absolute -left-[3.8px] w-[6px] h-[6px] bg-primary rounded-full"></div>
                                                                <span className="cursor-pointer pl-4">
                                                                    {item.subcat_name_en}
                                                                </span>
                                                            </div>
                                                        </li>
                                                        {activeSubcategory === item.subcat_id &&
                                                            allDuasByCatAndSubcat.map((it, idx) => {
                                                                return (
                                                                    <>
                                                                        {
                                                                            it.dua_name_en &&
                                                                            <div key={idx} className="ml-4 flex gap-2">
                                                                                <>
                                                                                    <div className="mt-2 flex-shrink-0">
                                                                                        <Image
                                                                                            src={"images/duaarrow.svg"}
                                                                                            alt="Dua Arrow"
                                                                                            width={14}
                                                                                            height={14}
                                                                                        />
                                                                                    </div>
                                                                                    <p className="mt-2 text-sm">{it?.dua_name_en}</p>
                                                                                </>
                                                                            </div>
                                                                        }
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            }
                        </div>
                    )
                })
            }
        </section>
    )
}

export default DuaCards