import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
    return (
        <section className="py-3 px-5">
            <section className="">
                <div className="flex items-center">
                    <Link href="/" className="w-16">
                        <Image
                            width={84}
                            height={100}
                            src="/Logo.png"
                            alt="Mazra Logo"
                        />
                    </Link>
                    <h2 className="ml-2 font-bold text-[#4165b0] text-[24px]">Delete Your Account</h2>
                </div>
            </section>
        </section>
    );
}
