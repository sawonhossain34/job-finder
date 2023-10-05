import simply from "../../assets/react.svg"

const ValueDiv = () => {
    return (
        <div className="mb-[4rem] mt-[6rem]">
            <h1 className="text-textColor text-[25px] py-[23rem] pb-[3rem] font-bold w-[400px] block">The value thats holds us true and to account
            </h1>
            <div className=" grid grid-cols-3 gap-[10rem] items-center">
                <div className="singleGrid rounded-[10px] hover:bg-[#fcfae3] p-[1.5rem]">
                    <div className="flex items-center gap-3">
                        <div className="imgDiv p-[4px] rounded-[.8rem] h-[40px] w-[40px] flex items-center justify-center bg-[#f3f2ad]">
                            <img src={simply} alt="" />
                        </div>
                        <span className="font-semibold text-textColor text-[18px]">Simplicity</span>
                    </div>
                    <p className="text-[15px] text-textColor opacity-[.7] font-semibold py-[1rem]">
                        Thinks inf made beautiful simple are at the heart of everything we do.
                    </p>

                </div>
                <div className="singleGrid rounded-[10px] hover:bg-[#fcfae3] p-[1.5rem]">
                    <div className="flex items-center gap-3">
                        <div className="imgDiv p-[4px] rounded-[.8rem] h-[40px] w-[40px] flex items-center justify-center bg-[#f3f2ad]">
                            <img src={simply} alt="" />
                        </div>
                        <span className="font-semibold text-textColor text-[18px]">Simplicity</span>
                    </div>
                    <p className="text-[15px] text-textColor opacity-[.7] font-semibold py-[1rem]">
                        We believe in maketing better for everyone,even if just by a little bit. 
                    </p>

                </div>
                <div className="singleGrid rounded-[10px] hover:bg-[#fcfae3] p-[1.5rem]">
                    <div className="flex items-center gap-3">
                        <div className="imgDiv p-[4px] rounded-[.8rem] h-[40px] w-[40px] flex items-center justify-center bg-[#f3f2ad]">
                            <img src={simply} alt="" />
                        </div>
                        <span className="font-semibold text-textColor text-[18px]">Simplicity</span>
                    </div>
                    <p className="text-[15px] text-textColor opacity-[.7] font-semibold py-[1rem]">
                        Thinks inf made beautiful simple are at the heart of everything we do.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default ValueDiv;