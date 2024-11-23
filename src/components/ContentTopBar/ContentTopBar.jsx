import Image from 'next/image';
import search from '@/assets/images/icons/search.svg';
import Profile from './Profile';

const ContentTopBar = () => {
    return (
        <div className="p-5 flex justify-between items-center">
            <div className='w-10/12 flex justify-between items-center'>
                <h2 className="text-2xl text-dark-text">Duas Page</h2>
                <div className="lg:flex hidden ">
                    <input className="placeholder:text-mute-grey  px-5 py-2 bg-white shadow-sm border focus:border-[#1fa45b] outline-none rounded" type="text" placeholder="Search by Dua Name" />
                    <button className="-ml-9">
                        <figure>
                            <Image className="h-6 w-6" src={search} alt="Search" />
                        </figure>
                    </button>
                </div>
            </div>
            <div className='w-2/12 flex justify-end items-center pr-5'>
                <Profile />
            </div>
        </div>
    );
};

export default ContentTopBar;