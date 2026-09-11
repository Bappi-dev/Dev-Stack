import Imag from '../assets/logo-text.png'
const Navbar = () => {
    return (
        <div className='sticky top-0 z-50 border-b border-gray-200 bg-white'>
            <div className='flex justify-between gap-4 items-center py-5 container mx-auto'>
                <img src={Imag} alt="" />
                <ul className='flex gap-6'>
                    <li className='text-red-400'><a href="">Home</a></li>
                    <li><a href="">Technologies</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                <div>
                    <button className='mr-4 items-center'>Sing in</button>
                    <button className='btn rounded-full bg-[#D91B7E] text-white'>Sing Up</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;