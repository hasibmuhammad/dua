"use client";
import CategoriesDrawer from "@/components/CategoriesDrawer";
import Image from "next/image";
import { useState } from "react";

const Duas = () => {
    const [playing, setPlaying] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section>
            <div>
                <div onClick={() => setIsOpen(!isOpen)} className="lg:hidden mb-4">
                    <div className="bg-white rounded-[10px] h-[55px] flex gap-2 items-center px-5 border-[.5px] border-borderPrimary">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>
                        </div>
                        <p>Clothes</p>
                    </div>
                </div>

                <div className="mb-4 bg-white rounded-[10px] h-[55px] flex items-center px-5 border-[.5px] border-borderPrimary">
                    <p>
                        <span className="text-primary font-medium">Section: </span>
                        <span className="text-secondary">The servant is dependent on his Lord</span>
                    </p>
                </div>
                {/* Duas */}
                <div className="mb-4 bg-white rounded-[10px] border-[.5px] border-borderPrimary px-7 py-4">
                    <div className="flex gap-[10px] items-center">
                        <div className="flex-shrink-0">
                            <Image
                                src={"/images/duaCardLogo.svg"}
                                width={35}
                                height={35}
                                alt="Allahu"
                            />
                        </div>
                        <h2 className="text-primary font-semibold">
                            2. Conditions for Dua to be successful
                        </h2>
                    </div>
                    <div>
                        <p className="text-secondary py-7 text-justify">
                            Prophet (ﷺ) used to say after every compulsory prayer, The servant will ask his Lord for all of his religiously and worldly needs, because the treasure of all things is in the hands of Allah. Allah says (interpretation of the meaning): “And there is not a thing but that with Us are its depositories, and We do not send it down except according to a known measure.” (Sura Al-Hijr 15:21) No one can withhold what Allah gives; And, no one can give what he resists.
                        </p>
                        <p className="text-right text-2xl leading-[71.33px]">
                            لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اَللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ
                        </p>
                        <p className="text-secondary italic py-7 text-justify">
                            <span className="font-medium">Transliteration: </span>
                            Laa ilaaha illallahu wahdahu laa sharika lahu, lahul-mulku wa lahul-hamdu wa huwa &apos;alaa kulli shay&apos;in qadir. Allaahumma laa maani&apos;a limaa a&apos;taita wa laa mu&apos;tia limaa mana&apos;ta wa laa yanfa&apos;u dhal-jaddi minka al-jaddu
                        </p>
                        <p className="text-secondary text-justify">
                            <span className="font-medium">Translation: </span>
                            There is none worthy of worship except Allah alone with no partner or associate. He is the Dominion and to Him be all praise, and He is able to do all things. O Allah, one can withhold what You have given and none can give what You have withheld, and no wealth or fortune can benefit anyone for from You comes all wealth and fortune.
                        </p>
                        <p className="py-7">
                            <span className="text-primary font-semibold">Reference: </span> <br />
                            <span className="text-secondary font-medium">Bukhari: 844</span>
                        </p>
                    </div>

                    {/* Dua footer */}
                    <div className="flex items-center justify-between">
                        <div onClick={() => setPlaying(!playing)} className="cursor-pointer">
                            <Image
                                src={`images/${playing ? "pause" : "audio"}.svg`}
                                alt="Audio"
                                width={30}
                                height={30}
                            />
                        </div>
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
                                    src={"/images/bookmarkIcon.svg"}
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

            {/* Drawer */}
            {
                isOpen &&
                <div className="absolute top-2 md:hidden w-full h-full">
                    <CategoriesDrawer setIsOpen={setIsOpen} />
                </div>
            }

        </section>
    )
}

export default Duas;