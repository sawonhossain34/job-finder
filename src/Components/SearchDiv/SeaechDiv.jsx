import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai';
import { BsHouse } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';

const SeaechDiv = () => {
    return (
        <div className="searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]">
            <form action="">
                <div className="fristDiv flex justify-between items-center  rounded-[8px] gap-10 bg-white p-5 shadow-lg shadow-greyIsh-700">

                    <div className="flex gap-2 items-center">
                        <AiOutlineSearch className='text-[25px] icon' />
                        <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-100%' placeholder="Search Job Here....." />
                        <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />
                    </div>
                    <div className="flex gap-2 items-center">
                        <BsHouse className='text-[25px] icon' />
                        <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-100%' placeholder="Search by Company....." />
                        <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />
                    </div>
                    <div className="flex gap-2 items-center">
                        <CiLocationOn className='text-[25px] icon' />
                        <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-100%' placeholder="Search by Location....." />
                        <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />
                    </div>
                    <button className='bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-400'>Search</button>


                </div>
            </form>

            <div className='secDiv flex items-center gap-10 justify-center'>

                <div className='singleSearch flex items-center gap-2'>
                    <label htmlFor="relevance" className='text-[#808080] font-semibold '>Sort by:</label>
                    <select name="" id="relevance" className='bg-white outline-none rounded-[3px] px-4 py-1'>
                        <option value="">Relevence</option>
                        <option value="">Inclusive</option>
                        <option value="">Stars with</option>
                        <option value="">Contain</option>
                    </select>

                </div>
                <div className='singleSearch flex items-center gap-2'>
                    <label htmlFor="type" className='text-[#808080] font-semibold '>type:</label>
                    <select name="" id="type" className='bg-white outline-none rounded-[3px] px-4 py-1'>
                        <option value="">Full-time </option>
                        <option value="">Remote</option>
                        <option value="">Contract</option>
                        <option value="">Part-time</option>
                    </select>

                </div>
                <div className='singleSearch flex items-center gap-2'>
                    <label htmlFor="lebel" className='text-[#808080] font-semibold '>Lebel:</label>
                    <select name="" id="lebel" className='bg-white outline-none rounded-[3px] px-4 py-1'>
                        <option value="">Senior</option>
                        <option value="">Biginner</option>
                        <option value="">Intermediate</option>
                        <option value="">Avocate</option>
                    </select>

                </div>
                <span className='text-[#alalal]'>clear all</span>

            </div>
        </div>
    );
};

export default SeaechDiv;