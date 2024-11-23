import Image from "next/image";
import Link from "next/link";
import alldua from '@/assets/images/icons/alldua.svg'
import bookmark from '@/assets/images/icons/bookmark.svg'
import books from '@/assets/images/icons/books.svg'
import duaInfo from '@/assets/images/icons/duaInfo.svg'
import duaLogo from '@/assets/images/icons/duaLogo.svg'
import home from '@/assets/images/icons/home.svg'
import memorize from '@/assets/images/icons/memorize.svg'
import helping from '@/assets/images/icons/helping.svg'
import ruqyah from '@/assets/images/icons/ruqyah.svg'


const LeftSidebar = () => {
    return (
        <div className="r">
            <div className="flex flex-col justify-between items-center gap-10 w-full rounded-3xl bg-white py-5 max-h-[1000px] overflow-y-auto">
                <Link href="/">
                    <figure>
                        <Image src={duaLogo} alt="Logo" />
                    </figure>
                </Link>
                <ul className="flex flex-col gap-10 justify-between">
                    <li className="cursor-pointer">
                        <figure>
                            <Image className="h-6 w-6" src={home} alt="Logo" />
                        </figure>
                    </li>
                    <li className="cursor-pointer">
                        <figure>
                            <Image className="h-6 w-6" src={alldua} alt="Logo" />
                        </figure>
                    </li>
                    <li className="cursor-pointer">
                        <figure>
                            <Image className="h-6 w-6" src={memorize} alt="Logo" />
                        </figure>
                    </li>
                    <li className="cursor-pointer">
                        <figure>
                            <Image className="h-6 w-6" src={bookmark} alt="Logo" />
                        </figure>
                    </li>
                    <li className="cursor-pointer">
                        <figure>
                            <Image className="h-6 w-6" src={ruqyah} alt="Logo" />
                        </figure>
                    </li>
                    <li className="cursor-pointer">
                        <figure>
                            <Image className="h-6 w-6" src={duaInfo} alt="Logo" />
                        </figure>
                    </li>
                    <li className="cursor-pointer">
                        <figure>
                            <Image className="h-6 w-6" src={books} alt="Logo" />
                        </figure>
                    </li>
                </ul>
                <Link href="/">
                    <figure>
                        <Image src={helping} alt="Logo" />
                    </figure>
                </Link>
            </div>
        </div>
    );
};

export default LeftSidebar;