import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const Navbar = () => {
    return (
        //main parent for the menu, position should be relative
        <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">

            {/* MOBILE */}
            <div className="h-full flex items-center justify-between md:hidden">
                <Link href="/">
                    <div className="text-2xl tracking-wide">Lumière</div>
                </Link>
                <Menu/>
            </div>
            
            {/* md screen */}
            <div className="hidden md:flex items-center justify-between gap-8 h-full">
                {/* LEFT */}
                <div className="w-1/3 xl:w/12 flex items-center gap-12">
                    <Link href="/" className="flex items-center gap-3">
                        <Image src="/logo.png" alt="Logo" width={24} height={24}/>
                        <div className="text-2xl tracking-wide">Lumière</div>
                    </Link>
                    <div className="hidden xl:flex gap-4">
                    <Link href="/">Home</Link>
                            <Link href="/shop">Catalogo</Link>
                            <Link href="/contact">Carrito</Link>
                            <Link href="/">Ofertas</Link>
                    </div>
                </div>
                {/* RIGTH */}
                <div className="w-2/3 xl:w/12 flex items-center justify-end gap-8">
                    <SearchBar/>
                    <NavIcons/>
                </div>
            </div>
        </div>
    );
};
export default Navbar;