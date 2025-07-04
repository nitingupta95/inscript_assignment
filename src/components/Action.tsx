import {ChevronsDown } from "lucide-react";
import { ArrowRightLeft } from "lucide-react";
import { ListFilter } from "lucide-react";
import { useState } from "react";
import { ArrowDownToLine } from "lucide-react";
import { ArrowUpToLine } from "lucide-react";


const Action = () => {
    const [open, setOpen] = useState(false);
  return (
    <div className="w-[1440px] h-12 gap-2 border-b border-[#EEEEEE] pt-[6px] pr-2 pb-[6px] pl-2 flex">
        <div className="flex items-center w-[91px] h-9 gap-1 rounded-1 p-2 bg-[#FFFFFF]">
            <div className="flex items-center w-[55px] h-[20px] font-normal text-[14px] leading-5 tracking-normal font-body text-[#121212]">
            Tool bar
            </div>
            <div className="flex items-center w-4 h-4 relative">
            <img src="https://res.cloudinary.com/dugygdmtz/image/upload/v1751443809/right-arrow_pyaixf.png" alt="photo" srcset="" className="w-[8.6px] h-[9.8px] top-[3.1px] left-[3.5px] text-[#121212] "/>
            </div>
        </div>
    <div className="w-[1px] h-[24px] text-[#EEEEEE] pt-1">|</div>
    <div className="w-[871px] h-9 flex gap-[4px]">
        <div className="w-[118px] h-9 rounded-[6px] pt-2 pr-3 pb-2 pl-2 flex gap-2 bg-[#FFFFFF]">
            <div className="w-4 h-4">
                <img src="https://img.icons8.com/?size=100&id=MXjc4q4Ix0cD&format=png&color=000000" alt="" srcset="" className="w-[16.67px] h-[16.67px] top-[1.67px] left-[1.67px] text-[#121212] flex items-center" />
            </div>
            <div className="w-[74px] flex items-center h-5 font-body font-normal text-sm leading-5 tracking-normal">
                Hide fields
            </div>
        </div>
        <div className="w-[73px] h-9 rounded-[6px] pt-2 pr-3 pb-2 pl-2 flex gap-2 bg-[#FFFFFF]">
            <div className="w-5 h-5 ">
                <ArrowRightLeft className="w-[17.5px] h-13.34px] top-[3.33px] left-[1.25px] text-[#121212] rotate-90"/>
            </div>
            <div className="w-[29px] h-5 font-body font-normal text-sm leading-5 tracking-normal text-[#121212]">
                Sort
            </div>
            
        </div>
        <div className="w-[80px] h-9 rounded-[6px] pt-2 pr-3 pb-2 pl-2 flex gap-2 bg-[#FFFFFF] ">
            <div className="w-5 h-5">
                <div className="pt-[5px] pl-[3.13px]">
                    <ListFilter className="w-[13.75px] h-[9.58px] text-[#121212]" />
                </div>
            </div>
            <div className="w-[36px] h-5 font-body font-normal text-sm leading-5 tracking-normal">
                Filter
            </div>
            
        </div>
        <div className="w-[105px] h-9 rounded-[6px] pt-2 pr-3 pb-2 pl-2 flex gap-2 bg-[#FFFFFF]">
            <div className="w-5 h-5">
                <div className="pt-[2.5px] pl-[3.33px]">
                    <img src="https://res.cloudinary.com/dugygdmtz/image/upload/v1751446861/arrow-autofit-height-svgrepo-com_diqv1a.svg" alt="" srcset="" className="w-[12.92px] h-[15px]"/>
                </div>
            </div>
            <div className="w-[61px] h-[20px] font-body font-normal text-sm leading-5 tracking-normal text-[#121212]">
                Cell view
            </div> 
        </div>

    </div>

    <div className="w-[437px] h-9  flex gap-2">
        <div className="w-[90px] h-9 flex items-center gap-1 rounded-md pt-2 pr-3 pb-2 pl-2 border border-[#EEEEEE] transition-none duration-0" onClick={() => setOpen(!open)}>
            <div className="w-5 h-5">
                <div className="pt-[1.67px] pl-[3.75px] text-[#545454]">
                    <ArrowDownToLine  className="w-[12.08px] h-[16.67px]"/>
                </div>                
            </div>
            <div className="w-[46px] h-5 font-body font-normal text-sm leading-5 tracking-normal text-[#545454]">
                Import
            </div>
        </div>
        <div onClick={() => setOpen(!open)} className="w-[89px] h-9 flex items-center gap-1 pt-2 pr-3 pb-2 pl-2 rounded-md border border-[#EEEEEE] bg-[#FFFFFF] transition-none duration-0">
            <div className="w-5 h-5">
                <div className="pt-[1.67px] pl-[3.75px]">
                <ArrowUpToLine className="text-[#545454] w-[12.08px] h-[16.67px]"/>
                </div>
            </div>
            <div className="w-[45px] h-5 font-body font-normal text-sm leading-5 tracking-normal text-[#545454] ">
                Export
            </div>
        </div>
        <div onClick={() => setOpen(!open)} className="  w-[84px] h-9 flex items-center gap-1 pt-2 pr-3 pb-2 pl-2 rounded-md border border-[#EEEEEE] bg-white transition-none duration-0">
            <div className="w-5 h-5 flex items-center ">
                <div className="pt-[2.5px] pl-[2.5px]  items-center">
                    <img src="https://res.cloudinary.com/dugygdmtz/image/upload/v1751450626/forward_dwqtte.png" alt="" srcset="" className="flex items-center  w-[15.83px] h-[15px]"/>
                </div>
            </div>
            <div className="text-[#545454] w-[40px] h-5 font-body font-normal text-sm leading-5 tracking-normal">
                Share
            </div>
        </div>
        <div className="w-[150px] h-9 flex items-center gap-1 pt-2 pr-6 pb-2 pl-6
            rounded-md bg-[#4B6A4F] text-white">
             
            <div className="h-5 w-5">
                <div className="pt-[2.5px] pl-[2.5px]">
                    <img src="https://img.icons8.com/?size=100&id=v1IAZrvpynz8&format=png&color=ffffff" alt="" srcset="" className="rotate-180 w-[15px] h-[15px]" />
                </div>

            </div>
            <div className="w-[78px] h-5 font-body font-medium text-sm leading-5 tracking-normal text-[#FFFFFF]">
                New Action
            </div>
        </div>
    </div>

 
</div>


  )
}

export default Action