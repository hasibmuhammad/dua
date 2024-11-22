"use client";
import { Settings } from "@/components/Settings";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const drawerRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="w-full flex items-center">
            <div className="hidden lg:block max-w-5xl w-full">
                <h2 className="text-secondary font-semibold text-2xl">
                    Duas Page
                </h2>
            </div>
            <div className="block lg:hidden">
                <div className="flex items-center w-[200px]">
                    <div>
                        <Image
                            src={"/images/logo.svg"}
                            width={80}
                            height={80}
                            alt="Logo"
                        />
                    </div>
                    <h3>Dua & Ruqyah</h3>
                </div>
            </div>
            <div className="flex w-full justify-end lg:justify-between items-center">
                <div className="hidden lg:block relative max-w-[371px] w-full rounded-[10px]">
                    <input
                        type="text"
                        placeholder="Search by Dua Name"
                        className="border-[.5px] border-borderPrimary w-full rounded-[10px] py-3 outline-primary px-4"
                    />
                    <div className="absolute top-[3px] right-1 bg-bgActive w-[54px] h-11 rounded-md flex justify-center items-center">
                        <Image
                            src={"/images/search.svg"}
                            alt="Search"
                            width={24}
                            height={24}
                        />
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="hidden md:block">
                        <Image
                            src={"/images/profile.svg"}
                            alt="Profile Image"
                            width={40}
                            height={40}
                        />
                    </div>

                    <div onClick={() => setIsOpen(!isOpen)} className="block 2xl:hidden">
                        <Image
                            src={"/settings/settings.svg"}
                            alt="Settings Icon"
                            width={24}
                            height={24}
                        />
                    </div>

                    <div ref={drawerRef} className={`${isOpen ? "block" : "hidden"}`}>
                        <div className="2xl:hidden absolute right-0 top-0 bg-white z-40 rounded-full shadow-lg">
                            <section className="max-w-[300px] h-screen w-full">
                                <Settings />
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
