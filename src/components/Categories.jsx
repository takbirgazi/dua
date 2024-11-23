
import Image from "next/image";
import helping from '@/assets/images/icons/helping.svg'
import { useState } from "react";
const Categories = () => {

    const [activeCat, setActiveCat] = useState(false)

    return (
        <div className="rounded-3xl bg-white overflow-auto">
            <div className="bg-[#1fa45b] p-5 rounded-tl-xl rounded-tr-xl text-center font-semibold text-gray-100">
                <p>Categories</p>
            </div>
            <div className="w-full pt-4 px-4">
                <input className="w-full placeholder:text-mute-grey  px-5 py-3 bg-white shadow-sm border focus:border-[#1fa45b] outline-none rounded" type="text" placeholder="Search Categories" />
            </div>
            <div className="p-4 overflow-scroll">
                <div className="rounded">
                    <div onClick={() => setActiveCat(!activeCat)} className="hover:bg-[#e8f0f5] flex justify-between items-center px-2 cursor-pointer">
                        <div className="inline-flex gap-3 items-center justify-start">
                            <figure className="flex items-center">
                                <Image className="w-16 h-16" src={helping} alt="Icon" />
                            </figure>
                            <div>
                                <h4 className="font-semibold text-gray-900">Dua Acceptance</h4>
                                <p className="text-xs text-gray-900">Subcategory: 1</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center flex-col">
                            <strong className="text-center text-gray-900">14</strong>
                            <p className="text-center text-xs text-gray-900">Duas</p>
                        </div>
                    </div>
                    <div className={`${activeCat && "hidden"} flex flex-col items-center py-3`}>
                        <p className="py-4 border-l-[3px] border-dashed border-[#1fa45b] pl-2 font-bold cursor-pointer text-lg text-[#000000a6]">The servant is dependent on his Lord</p>
                        <p className="py-4 border-l-[3px] border-dashed border-[#1fa45b] pl-2 font-bold cursor-pointer text-lg text-[#000000a6]">The servant is dependent on his Lord</p>
                        <p className="py-4 border-l-[3px] border-dashed border-[#1fa45b] pl-2 font-bold cursor-pointer text-lg text-[#000000a6]">The servant is dependent on his Lord</p>
                        <p className="py-4 border-l-[3px] border-dashed border-[#1fa45b] pl-2 font-bold cursor-pointer text-lg text-[#000000a6]">The servant is dependent on his Lord</p>
                    </div>
                </div>


                <div className="rounded">
                    <div onClick={() => setActiveCat(!activeCat)} className="hover:bg-[#e8f0f5] flex justify-between items-center px-2 cursor-pointer">
                        <div className="inline-flex gap-3 items-center justify-start">
                            <figure className="flex items-center">
                                <Image className="w-16 h-16" src={helping} alt="Icon" />
                            </figure>
                            <div>
                                <h4 className="font-semibold text-gray-900">Dua Acceptance</h4>
                                <p className="text-xs text-gray-900">Subcategory: 1</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center flex-col">
                            <strong className="text-center text-gray-900">14</strong>
                            <p className="text-center text-xs text-gray-900">Duas</p>
                        </div>
                    </div>
                    <div className={`${activeCat && "hidden"} flex flex-col items-center py-3`}>
                        <p className="py-4 border-l-[3px] border-dashed border-[#1fa45b] pl-2 font-bold cursor-pointer text-lg text-[#000000a6]">The servant is dependent on his Lord</p>
                        <p className="py-4 border-l-[3px] border-dashed border-[#1fa45b] pl-2 font-bold cursor-pointer text-lg text-[#000000a6]">The servant is dependent on his Lord</p>
                        <p className="py-4 border-l-[3px] border-dashed border-[#1fa45b] pl-2 font-bold cursor-pointer text-lg text-[#000000a6]">The servant is dependent on his Lord</p>
                        <p className="py-4 border-l-[3px] border-dashed border-[#1fa45b] pl-2 font-bold cursor-pointer text-lg text-[#000000a6]">The servant is dependent on his Lord</p>
                    </div>
                </div>

                <div className="rounded">
                    <div onClick={() => setActiveCat(!activeCat)} className="hover:bg-[#e8f0f5] flex justify-between items-center px-2 cursor-pointer">
                        <div className="inline-flex gap-3 items-center justify-start">
                            <figure className="flex items-center">
                                <Image className="w-16 h-16" src={helping} alt="Icon" />
                            </figure>
                            <div>
                                <h4 className="font-semibold text-gray-900">Dua Acceptance</h4>
                                <p className="text-xs text-gray-900">Subcategory: 1</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center flex-col">
                            <strong className="text-center text-gray-900">14</strong>
                            <p className="text-center text-xs text-gray-900">Duas</p>
                        </div>
                    </div>
                    <div className={`${activeCat && "hidden"} flex flex-col items-center py-3`}>
                        <p className="py-4 border-l-[3px] border-dashed border-[#1fa45b] pl-2 font-bold cursor-pointer text-lg text-[#000000a6]">The servant is dependent on his Lord</p>
                        <p className="py-4 border-l-[3px] border-dashed border-[#1fa45b] pl-2 font-bold cursor-pointer text-lg text-[#000000a6]">The servant is dependent on his Lord</p>
                        <p className="py-4 border-l-[3px] border-dashed border-[#1fa45b] pl-2 font-bold cursor-pointer text-lg text-[#000000a6]">The servant is dependent on his Lord</p>
                        <p className="py-4 border-l-[3px] border-dashed border-[#1fa45b] pl-2 font-bold cursor-pointer text-lg text-[#000000a6]">The servant is dependent on his Lord</p>
                    </div>
                </div>

                <div className="rounded">
                    <div onClick={() => setActiveCat(!activeCat)} className="bg-[#e8f0f5] flex justify-between items-center px-2 cursor-pointer">
                        <div className="inline-flex gap-3 items-center justify-start">
                            <figure className="flex items-center">
                                <Image className="w-16 h-16" src={helping} alt="Icon" />
                            </figure>
                            <div>
                                <h4 className="font-semibold text-gray-900">Dua Acceptance</h4>
                                <p className="text-xs text-gray-900">Subcategory: 1</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center flex-col">
                            <strong className="text-center text-gray-900">14</strong>
                            <p className="text-center text-xs text-gray-900">Duas</p>
                        </div>
                    </div>
                    <div className={`${activeCat && "hidden"} flex flex-col items-center py-3`}>
                        <p className="py-4 border-l-[3px] border-dashed border-[#1fa45b] pl-2 font-bold cursor-pointer text-lg text-[#000000a6]">The servant is dependent on his Lord</p>
                        <p className="py-4 border-l-[3px] border-dashed border-[#1fa45b] pl-2 font-bold cursor-pointer text-lg text-[#000000a6]">The servant is dependent on his Lord</p>
                        <p className="py-4 border-l-[3px] border-dashed border-[#1fa45b] pl-2 font-bold cursor-pointer text-lg text-[#000000a6]">The servant is dependent on his Lord</p>
                        <p className="py-4 border-l-[3px] border-dashed border-[#1fa45b] pl-2 font-bold cursor-pointer text-lg text-[#000000a6]">The servant is dependent on his Lord</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Categories;