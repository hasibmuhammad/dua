"use client";
import CategoriesDrawer from "@/components/CategoriesDrawer";
import { DuaContext } from "@/context/DuaContext";
import { IDuasByCatAndSubcat } from "@/types";
import Image from "next/image";
import { useContext, useState } from "react";

const Duas = () => {
    const [playingItem, setPlayingItem] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isOpen, setIsOpen] = useState(false);


    const duaContext = useContext(DuaContext);

    // Check if the context is undefined
    if (!duaContext) {
        throw new Error("DuaContext must be used within a DuaProvider");
    }
    const { allDuasByCatid } = duaContext;

    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);


    const duas: IDuasByCatAndSubcat[] = allDuasByCatid || [];

    const handlePlayPause = (audioUrl: string, duaId: number) => {
        // If the same audio is clicked
        if (playingItem === duaId) {
            if (isPlaying) {
                audio?.pause();
            } else {
                audio?.play();
            }
            setIsPlaying(!isPlaying);
            return;
        }

        // If a new audio is clicked
        audio?.pause(); // Stop any existing audio
        const newAudio = new Audio(audioUrl);
        newAudio.play();
        setAudio(newAudio);
        setPlayingItem(duaId);
        setIsPlaying(true);

        // Handle the end of audio playback
        newAudio.onended = () => {
            setIsPlaying(false);
            setPlayingItem(0);
        };
    };

    return (
        <section>
            <div>
                <div onClick={() => setIsOpen(!isOpen)} className="lg:hidden mb-4">
                    <div className="bg-white rounded-[10px] h-[55px] flex gap-2 items-center px-5 border-[.5px] border-borderPrimary">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>
                        </div>
                        <p>Clothes</p>
                    </div>
                </div>

                {
                    duas.map(dua => {
                        return (
                            <div key={dua.id}>
                                <div className="mb-4 bg-white rounded-[10px] h-[55px] flex items-center px-5 border-[.5px] border-borderPrimary">
                                    <p>
                                        <span className="text-pri`mary font-medium">Section: </span>
                                        <span className="text-secondary">{dua?.dua_name_en}</span>
                                    </p>
                                </div>
                                {/* Duas */}
                                <div className="mb-4 bg-white rounded-[10px] border-[.5px] border-borderPrimary px-7 py-4">
                                    <div className="flex gap-[10px] items-center">
                                        <div className="flex-shrink-0">
                                            <Image
                                                src={"/images/allahu.svg"}
                                                width={35}
                                                height={35}
                                                alt="Allahu"
                                            />
                                        </div>
                                        <h2 className="text-primary font-semibold">
                                            {`${dua?.id}.`} {dua?.dua_name_en}
                                        </h2>
                                    </div>
                                    <div>
                                        <p className="text-secondary py-7 text-justify">
                                            {dua?.top_en}
                                        </p>
                                        <p className="text-right text-2xl leading-[71.33px]">
                                            {dua?.dua_arabic}
                                        </p>
                                        {dua?.transliteration_en && <p className="text-secondary italic py-7 text-justify">
                                            <span className="font-medium">Transliteration: </span>
                                            {dua?.transliteration_en}
                                        </p>}
                                        {dua?.translation_en && <p className="text-secondary text-justify">
                                            <span className="font-medium">Translation: </span>
                                            {dua?.translation_en}
                                        </p>}
                                        <p className="py-7">
                                            <span className="text-primary font-semibold">Reference: </span> <br />
                                            <span className="text-secondary font-medium">{dua?.refference_en}</span>
                                        </p>
                                    </div>

                                    {/* Dua footer */}
                                    <div className={`flex items-center ${dua?.audio ? "justify-between" : "justify-end"}`}>
                                        {dua?.audio && (
                                            <div
                                                onClick={() => handlePlayPause(dua.audio, dua.id)}
                                                className="cursor-pointer"
                                            >
                                                <Image
                                                    src={`images/${playingItem === dua.id && isPlaying ? "pause" : "audio"}.svg`}
                                                    alt="Audio"
                                                    width={30}
                                                    height={30}
                                                />
                                            </div>
                                        )}

                                        <div className="flex gap-10 items-center">
                                            <div>
                                                <Image
                                                    src={"/images/copy.svg"}
                                                    alt="Copy"
                                                    width={20}
                                                    height={20}
                                                />
                                            </div>
                                            <div>
                                                <Image
                                                    src={"/images/bookmarkicon.svg"}
                                                    alt="Bookmark"
                                                    width={22}
                                                    height={22}
                                                />
                                            </div>
                                            <div>
                                                <Image
                                                    src={"/images/memo2.svg"}
                                                    alt="Memorize"
                                                    width={22}
                                                    height={22}
                                                />
                                            </div>
                                            <div>
                                                <Image
                                                    src={"/images/share.svg"}
                                                    alt="Share"
                                                    width={22}
                                                    height={22}
                                                />
                                            </div>
                                            <div>
                                                <Image
                                                    src={"/images/report.svg"}
                                                    alt="Report"
                                                    width={20}
                                                    height={20}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            {/* Drawer */}
            {
                isOpen &&
                <div className="absolute top-2 lg:hidden w-full h-full">
                    <CategoriesDrawer setIsOpen={setIsOpen} />
                </div>
            }

        </section>
    )
}

export default Duas;