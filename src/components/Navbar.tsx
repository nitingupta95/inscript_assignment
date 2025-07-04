import React from "react"
import { ChevronRight,Search, Bell } from 'react-feather';
import IconBox from './iconbox';


const Navbar = () => {
  const handleCLick=()=>{
    console.log("clicked");
  }

  return (
    <div className="w-full h-14 flex items-center justify-between border-b border-[#EEEEEE] top-[8px] right-4 bottom-2 left-4  ">
       
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-md">
          <IconBox   onClick={handleCLick} />  
        </button>
        <div className="flex items-center gap-4 ffont-sans font-medium text-sm leading-5 tracking-normal text-[#AFAFAF]">
          <span className="ffont-sans font-medium text-sm leading-5 tracking-normal text-[#AFAFAF]">Workspace</span>
          <span ><ChevronRight className='w-[12px] h-[12px]'/></span>
          <span>Folder 2</span>
          <ChevronRight className='w-[12px] h-[12px] '/>
          <span ></span>
         <div className="flex items-center gap-2">
          <span className="text-[#121212]">Spreadsheet 3</span>
          <span className="w-6 h-6 flex items-center justify-center  rounded">
            <span className="relative w-[20px] h-[20px]">
              <span className="relative w-[12.92px] h-[2.92px] -top-[4px] left-[3.54px]">...</span>
            </span>
          </span>
        </div>
                
        </div>

      </div>
 
      <div className="flex items-center gap-3">
   
        <div className="relative w-[165px] h-[40px] rounded-[6px] bg-[#F6F6F6] p-[12px]  flex gap-2">
        <div className="absolute inset-0 flex items-center  gap-3  ">
          <div className="h-4 w-4 flex items-center relative p-[12px]">
            <Search className=" w-[13.335px] h-[13.335px] top-[1.33px] left-[1.33px] text-[#AFAFAF] flex-shrink-0" />
          </div>
          
          <input
            className="w-[117px] h-4 bg-transparent font-normal text-[12px] leading-[16px] tracking-[0] text-[#757575] placeholder-[#AFAFAF]   "
            placeholder="Search within sheet"
          />
        </div>
      </div>

  {/* Notification Bell */}
      <div className="relative w-10 h-10 rounded-[8px] bg-white flex items-center justify-center">
        <Bell className="w-6 h-6 text-[#121212]" />
        <div className="absolute top-0 left-5 w-4 h-4 bg-[#4B6A4F] rounded-full flex items-center justify-center">
          <span className="text-[10px] font-medium text-white">2</span>
        </div>
      </div>

  {/* User Profile Button */}
        <button className="h-[40px] pl-2 pr-3 rounded-lg bg-white flex items-center gap-2 hover:bg-gray-50 transition-colors">
          <img 
            src="https://res.cloudinary.com/dugygdmtz/image/upload/v1751390520/756f38a6ef8725586111b428053d87fea711b57d_1_ncpea6.png"
            alt="User profile"
            className="w-7 h-7 rounded-full object-cover"
          />
          <div className="w-[56px] h-[26px] max-w-[120px] flex flex-col overflow-hidden">
            <div className="text-xs font-medium truncate">John Doe</div>
            <div className="text-[10px] text-gray-500 truncate">john.doe@company.com</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;