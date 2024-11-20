"use client";
import Image from "next/image";

const Navbar = () => {
    const navItems = [
        { icon: "/images/home.svg", name: "Home" },
        { icon: "/images/duas.svg", name: "All Duas" },
        { icon: "/images/memorize.svg", name: "Memorize" },
        { icon: "/images/bookmark.svg", name: "Bookmark" },
        { icon: "/images/ruqyah.svg", name: "Ruqyah" },
        { icon: "/images/qa.svg", name: "QnA" },
        { icon: "/images/book.svg", name: "Book" },
    ]
    return (
        <nav className="flex flex-col h-[89vh] items-center pt-4">
            <div>
                <Image
                    src={"/images/logo.svg"}
                    alt="Logo"
                    width={73}
                    height={73}
                />
            </div>

            <div className="flex-1 flex flex-col justify-center">
                <ul className="space-y-7">
                    {
                        navItems.map(item => {
                            return (
                                <li key={item.name}>
                                    <Image
                                        src={item.icon}
                                        alt={item.name}
                                        width={38}
                                        height={38}
                                    />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            <div className="">
                <Image
                    src={"/images/support.svg"}
                    alt="Suport us"
                    width={73}
                    height={73}
                    className="W-[73px] h-[73px]"
                />
            </div>
        </nav>
    )
}

export default Navbar