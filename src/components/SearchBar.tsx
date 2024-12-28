"use client"

import Image from 'next/image';
import { useRouter } from 'next/navigation';
//next navigation (Next13) is compatible with RSC while next/router wont work with RSC
const SearchBar = () => {
    //next router to handle search
    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;

        if(name){
            router.push(`/list?name=${name}`);           
        }
    };
    return (
        <form 
            className="flex ic justify-between bg-gray-100 gap-4 p-2 rounded-md flex-1"
            onSubmit={handleSearch}>
                <input type="text" placeholder="Search" name='name' className="flex-1 bg-transparent outline-none"/>
                <button className="cursor-pointer">
                    <Image src="/search.png" alt="Search" width={16} height={16}/>
            </button>
        </form>
            
    );
}

export default SearchBar;