import Image from "next/image"

export const Settings = () => {
    return (
        <div className="h-full bg-white rounded-[32px] py-8">
            <h2 className="text-center font-semibold text-secondary text-xl">Settings</h2>

            <div className="px-4 space-y-4 mt-4">
                <div className="bg-bgActive/50 px-[14px] py-[9px] rounded-md flex gap-3 items-center">
                    <div className="bg-bgActive w-[38px] h-[38px] rounded-full flex justify-center items-center">
                        <Image
                            src={`/settings/language.svg`}
                            alt="Language"
                            width={24}
                            height={24}
                        />
                    </div>
                    <p className="text-secondary-light">Language Settings</p>
                </div>
                <div className="bg-bgActive/50 px-[14px] py-[9px] rounded-md flex gap-3 items-center">
                    <div className="bg-bgActive w-[38px] h-[38px] rounded-full flex justify-center items-center">
                        <Image
                            src={`/settings/general.svg`}
                            alt="General Settings"
                            width={24}
                            height={24}
                        />
                    </div>
                    <p className="text-secondary-light">General Settings</p>
                </div>
                <div className="bg-bgActive/50 px-[14px] py-[9px] rounded-md flex gap-3 items-center">
                    <div className="bg-bgActive w-[38px] h-[38px] rounded-full flex justify-center items-center">
                        <Image
                            src={`/settings/font.svg`}
                            alt="Font"
                            width={24}
                            height={24}
                        />
                    </div>
                    <p className="text-secondary-light">Font Settings</p>
                </div>
                <div className="bg-bgActive/50 px-[14px] py-[9px] rounded-md flex gap-3 items-center">
                    <div className="bg-bgActive w-[38px] h-[38px] rounded-full flex justify-center items-center">
                        <Image
                            src={`/settings/font.svg`}
                            alt="Appearance"
                            width={24}
                            height={24}
                        />
                    </div>
                    <p className="text-secondary-light">Appearance Settings</p>
                </div>
            </div>

        </div>
    )
}
