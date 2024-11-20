
import errorImage from "@/assets/images/404.svg"
import Image from "next/image";
import Link from "next/link";

const ErrorPage = () => {
    return (
        <div className="flex justify-center w-full h-screen">
            <div className="w-10/12 mx-auto flex flex-col justify-center items-center h-full">
                <div>
                    <figure>
                        <Image src={errorImage} alt="Error Image" />
                    </figure>
                    <h1 className="text-[#1fa45b] font-semibold text-7xl text-center -mt-60">Subhan Allah</h1>
                    <h2 className="text-gray-900 font-semibold text-4xl text-center">Page Not Found</h2>
                    <p className="text-gray-800 text-center max-w-96 mx-auto">We’re sorry, the page you requested could not be found. Please go back to the Homepage</p>
                    <Link href="/" >Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;