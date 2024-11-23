"use client"
import errorImage from "@/assets/images/404.svg"
import Image from "next/image";
import Link from "next/link";
import { HiArrowLongLeft } from "react-icons/hi2";

const ErrorPage = () => {
    return (
        <div className="flex justify-center w-full h-screen">
            <div className="w-10/12 mx-auto flex flex-col justify-center items-center h-full">
                <div className="flex flex-col gap-2">
                    <figure>
                        <Image src={errorImage} alt="Error Image" />
                    </figure>
                    <h1 className="text-[#1fa45b] font-semibold text-7xl text-center -mt-60">Subhan Allah</h1>
                    <h2 className="text-gray-900 font-semibold text-4xl text-center">Page Not Found</h2>
                    <p className="text-gray-800 text-center max-w-96 mx-auto">We’re sorry, the page you requested could not be found. Please go back to the Homepage</p>
                    <div className="flex justify-center">
                        <Link href="/" className="px-4 py-1 bg-[#1fa45b] rounded-lg text-gray-100 inline-flex items-center gap-2 text-center"> <HiArrowLongLeft /> Back to Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;