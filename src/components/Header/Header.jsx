
import profile from '../../assets/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between container mx-auto py-5 border-b-2'>
           <h1 className='text-3xl'>Knowledge Cafe</h1>
           <img className='w-[50px]' src={profile} alt="" />
           
           
        </header>
    );
};

export default Header;