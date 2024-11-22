"use client";
import Image from "next/image";
import { useState } from "react";

const DuaCards = () => {
    const [activeDua, setActiveDua] = useState(1);
    const duas = [
        {
            cat_id: 1, name: "Dua's Importance", sub_cat: 7, duas: 21, subCategories: [
                { dua: "this is the dua", duas: [{ id: 10, name: "Hello world" }] },
                { dua: "this is the dua", duas: [{ id: 11, name: "Hello world" }] },
                { dua: "this is the dua", duas: [{ id: 12, name: "Hello world" }] },
                { dua: "this is the dua", duas: [{ id: 13, name: "Hello world" }] },
                { dua: "this is the dua", duas: [{ id: 14, name: "Hello world" }] },
                { dua: "this is the dua", duas: [{ id: 15, name: "Hello world" }] },
                { dua: "this is the dua", duas: [{ id: 16, name: "Hello world" }] },
            ]
        },
        {
            cat_id: 2, name: "Dua's Importance", sub_cat: 7, duas: 21, subCategories: [
                { dua: "this is the dua", duas: [{ id: 17, name: "Hello world" }] },
                { dua: "this is the dua", duas: [{ id: 18, name: "Hello world" }] },
                { dua: "this is the dua", duas: [{ id: 19, name: "Hello world" }] },
                { dua: "this is the dua", duas: [{ id: 20, name: "Hello world" }] },
                { dua: "this is the dua", duas: [{ id: 21, name: "Hello world" }] },
                { dua: "this is the dua", duas: [{ id: 22, name: "Hello world" }] },
                { dua: "this is the dua", duas: [{ id: 23, name: "Hello world" }] },
            ]
        },
        {
            cat_id: 3, name: "Dua's Importance", sub_cat: 7, duas: 21, subCategories: [
                { dua: "this is the dua", duas: [{ id: 24, name: "Hello world" }] },
                { dua: "this is the dua", duas: [{ id: 25, name: "Hello world" }] },
                { dua: "this is the dua", duas: [{ id: 26, name: "Hello world" }] },
                { dua: "this is the dua", duas: [{ id: 27, name: "Hello world" }] },
                { dua: "this is the dua", duas: [{ id: 28, name: "Hello world" }] },
                { dua: "this is the dua", duas: [{ id: 29, name: "Hello world" }] },
                { dua: "this is the dua", duas: [{ id: 30, name: "Hello world" }] },
            ]
        },
        {
            cat_id: 4, name: "Dua's Importance", sub_cat: 7, duas: 21, subCategories: [
                { dua: "this is the dua", duas: [{ id: 31, name: "Hello world" }] },
                { dua: "this is the dua", duas: [{ id: 32, name: "Hello world" }] },
                { dua: "this is the dua", duas: [{ id: 33, name: "Hello world" }] },
                { dua: "this is the dua", duas: [{ id: 34, name: "Hello world" }] },
                { dua: "this is the dua", duas: [{ id: 35, name: "Hello world" }] },
                { dua: "this is the dua", duas: [{ id: 36, name: "Hello world" }] },
                { dua: "this is the dua", duas: [{ id: 37, name: "Hello world" }] },
            ]
        },
        {
            cat_id: 5, name: "Dua's Importance", sub_cat: 7, duas: 21, subCategories: [
                { dua: "this is the dua", duas: [{ id: 38, name: "Hello world" }] },
                { dua: "this is the dua", duas: [{ id: 39, name: "Hello world" }] },
                { dua: "this is the dua", duas: [{ id: 40, name: "Hello world" }] },
                { dua: "this is the dua", duas: [{ id: 41, name: "Hello world" }] },
                { dua: "this is the dua", duas: [{ id: 42, name: "Hello world" }] },
                { dua: "this is the dua", duas: [{ id: 43, name: "Hello world" }] },
                { dua: "this is the dua", duas: [{ id: 44, name: "Hello world" }] },
            ]
        },
        {
            cat_id: 6, name: "Dua's Importance", sub_cat: 7, duas: 21, subCategories: [
                { dua: "this is the dua", duas: [] },
                { dua: "this is the dua", duas: [] },
                { dua: "this is the dua", duas: [] },
                { dua: "this is the dua", duas: [] },
                { dua: "this is the dua", duas: [] },
                { dua: "this is the dua", duas: [] },
                { dua: "this is the dua", duas: [] },
            ]
        },
        {
            cat_id: 7, name: "Dua's Importance", sub_cat: 7, duas: 21, subCategories: [
                { dua: "this is the dua", duas: [] },
                { dua: "this is the dua", duas: [] },
                { dua: "this is the dua", duas: [] },
                { dua: "this is the dua", duas: [] },
                { dua: "this is the dua", duas: [] },
                { dua: "this is the dua", duas: [] },
                { dua: "this is the dua", duas: [] },
            ]
        },
        {
            cat_id: 8, name: "Dua's Importance", sub_cat: 7, duas: 21, subCategories: [
                { dua: "this is the dua", duas: [] },
                { dua: "this is the dua", duas: [] },
                { dua: "this is the dua", duas: [] },
                { dua: "this is the dua", duas: [] },
                { dua: "this is the dua", duas: [] },
                { dua: "this is the dua", duas: [] },
                { dua: "this is the dua", duas: [] },
            ]
        },
        {
            cat_id: 9, name: "Dua's Importance", sub_cat: 7, duas: 21, subCategories: [
                { dua: "this is the dua", duas: [] },
                { dua: "this is the dua", duas: [] },
                { dua: "this is the dua", duas: [] },
                { dua: "this is the dua", duas: [] },
                { dua: "this is the dua", duas: [] },
                { dua: "this is the dua", duas: [] },
                { dua: "this is the dua", duas: [] },
            ]
        },
    ]

    return (
        <section>
            {
                duas.map(dua => {
                    return (
                        <div key={dua.cat_id}>
                            <div onClick={() => setActiveDua(dua.cat_id)} className={`group hover:bg-bgSvg/40 mt-4 px-4 py-3 rounded-lg cursor-pointer flex items-center justify-between ${activeDua === dua.cat_id ? "bg-bgSvg/40" : ""}`}>
                                <div className="flex gap-x-4 items-center">
                                    <div className={`bg-bgSvg/40 group-hover:bg-white rounded-lg w-[60px] h-[60px] flex justify-center items-center ${activeDua === dua.cat_id ? "bg-white" : ""}`}>
                                        <Image
                                            src={"/categories/duar_gurutto.svg"}
                                            alt="Duar Gurutto"
                                            width={30}
                                            height={30}
                                        />
                                    </div>
                                    <div>
                                        <h1 className="font-semibold text-secondary">Dua&apos;s Importance</h1>
                                        <p className="text-secondary-light text-sm">Subcategory: {dua.subCategories.length}</p>
                                    </div>
                                </div>
                                <div className="text-center border-l border-borderPrimary">
                                    <div className="pl-4">
                                        <span className="text-secondary font-semibold">23</span>
                                        <p className="text-secondary-light text-sm">Duas</p>
                                    </div>
                                </div>
                            </div>
                            {dua.cat_id === activeDua &&
                                <div className="mt-4">
                                    <ul className="relative border-l-2 border-dotted border-l-primary ml-7">
                                        {
                                            dua.subCategories.map((item, index) => {
                                                return (
                                                    <div key={index}>
                                                        <li>
                                                            <div className="flex items-center gap-4">
                                                                <div className="absolute -left-[3.8px] w-[6px] h-[6px] bg-primary rounded-full"></div>
                                                                <span className="cursor-pointer pl-4">
                                                                    {item.dua}
                                                                </span>
                                                            </div>
                                                        </li>
                                                        {
                                                            item.duas.map((it, idx) => {
                                                                return (
                                                                    <div key={idx} className="ml-4 flex items-center gap-2">
                                                                        <div>
                                                                            <Image
                                                                                src={"images/duaarrow.svg"}
                                                                                alt="Dua Arrow"
                                                                                width={18}
                                                                                height={18}
                                                                            />
                                                                        </div>
                                                                        <p className="mt-1">{it.name}</p>
                                                                    </div>
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