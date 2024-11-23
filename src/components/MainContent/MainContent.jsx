

import Image from 'next/image';
import duacard from '@/assets/images/icons/duacard.svg';
import bookmark from "@/assets/images/icons/bookmark.svg";
import audiobtn from "@/assets/images/icons/audiobtn.svg";
import memorize from "@/assets/images/icons/memorize.svg";
import copy from "@/assets/images/icons/copy.svg";
import share from "@/assets/images/icons/share.svg";
import report from "@/assets/images/icons/report.svg";


const MainContent = () => {
    return (
        <div>
            <div className='flex items-center w-full rounded-lg p-5 bg-white'>
                <p className='font-semibold'><span className='text-[#1fa45b]'>Section:</span> <span>The servant is dependent on his Lord</span> </p>
            </div>
            <div className='w-full flex flex-col gap-5 py-5'>

                <div className='w-full rounded-lg p-5 bg-white'>
                    <div className='w-full flex gap-5 items-center'>
                        <figure>
                            <Image className='w-10 h-10' src={duacard} alt="logo" />
                        </figure>
                        <p className='font-semibold text-[#1fa45b]'><span className='text-[#1fa45b]'>1. </span><span> The servant is dependent on his Lord</span> </p>
                    </div>
                    <div className='pt-5 flex flex-col gap-3'>
                        <p className='font-semibold p-2 text-lg w-full'>Say the following statement 10 times -</p>
                        <p className='font-semibold p-2 py-5 text-2xl text-right w-full '>لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ، وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ</p>
                        <p className='italic text-lg p-2 w-full'>
                            <span className='font-semibold'>Transliteration:</span> <span>Laa ilahaa illAllahu wahdahu laa sharika lahu, lahul-mulku wa lahul-hamdu wa huwa &apos;alaa kulli shay&apos;in qadir</span>
                        </p>
                        <p className='italic text-lg p-2 w-full'>
                            <span className='font-semibold'>Translation:</span> <span>Laa ilahaa illAllahu wahdahu laa sharika lahu, lahul-mulku wa lahul-hamdu wa huwa &apos;alaa kulli shay&apos;in qadir</span>
                        </p>
                        <p className='font-semibold p-2 text-lg w-full'>The Prophet (ﷺ) said: The person who says the above statement 10 times It would be as if he had freed four of Ishmael&apos;s (As) children from slavery.</p>
                        <p className='text-[#1fa45b] px-2'>Reference:</p>
                        <p className='font-semibold px-2 text-lg w-full'>Bukhari: 6404</p>
                        <div className='w-full flex justify-between items-center p-2 pt-8'>
                            <div className='cursor-pointer'>
                                <figure>
                                    <Image src={audiobtn} alt='Audio' />
                                </figure>
                            </div>
                            <div className='flex gap-5 items-center'>
                                <div className='cursor-pointer'>
                                    <figure>
                                        <Image src={copy} alt='Copy' />
                                    </figure>
                                </div>
                                <div className='cursor-pointer'>
                                    <figure>
                                        <Image src={bookmark} alt='Bookmark' />
                                    </figure>
                                </div>
                                <div className='cursor-pointer'>
                                    <figure>
                                        <Image src={memorize} alt='Memorize' />
                                    </figure>
                                </div>
                                <div className='cursor-pointer'>
                                    <figure>
                                        <Image src={share} alt='Share' />
                                    </figure>
                                </div>
                                <div className='cursor-pointer'>
                                    <figure>
                                        <Image src={report} alt='Report' />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default MainContent;