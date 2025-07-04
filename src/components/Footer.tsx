import { Plus } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className="absolute w-[1440px] h-[48px] pt-[4px] pr-4 pl-8 flex gap-6 bf-[#FFFFFF] border border-t  border-[#EEEEEE] bg-[#FFFFFF]">
        <div className="w-[437px] h-[44px] flex">
            <div className="w-[111px] h-[44px] gap-2 border border-t-2 border-[#4B6A4F] pt-[10px] pr-[16px] pb-[10px] pl-[16px] opacity-100 rotate-0 bg-[#E8F0E9]">
                <div className="text-[#3E5741] font-body font-semibold text-[16px] leading-[24px] tracking-[0] not-italic">
                    All Orders
                </div>

            </div>

            <div className="w-[94px] h-[44px] pt-[10px] pr-4 pb-[10px] pl-4 gap-2">
                <div className="h-6 w-[62px] text-[#757575] font-body font-medium text-[16px] leading-[24px] tracking-[0] not-italic">
                    Pending
                </div>

            </div>

            <div className="w-[107px] h-[44px] pt-[10px] pr-4 pb-[10px] pl-4 gap-2">
                <div className="h-6 w-[75px] text-[#757575] font-body font-medium text-[16px] leading-[24px] tracking-[0] not-italic">
                    Reviewed
                </div>

            </div>

            <div className="w-[89px] h-[44px] pt-[10px] pr-4 pb-[10px] pl-4 gap-2">
                <div className="h-6 w-[57px] text-[#757575] font-body font-medium text-[16px] leading-[24px] tracking-[0] not-italic">
                    Arrived
                </div>

            </div>

            <div className="w-[36px] h-[44px] flex items-center justify-center p-[4px]">
            <div className="w-[28px] h-[28px] bg-white rounded-[4px] p-[4px] flex items-center justify-center">
                <Plus className="w-[15px] h-[15px] text-[#757575]" />
            </div>
            </div>


        </div>
    </div>
  )
}

export default Footer