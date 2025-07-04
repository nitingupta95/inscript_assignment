// SpreadsheetTable.tsx
import React from "react";
import { Link2 } from "lucide-react";
import {RefreshCcw} from "lucide-react"
import { Plus } from "lucide-react";
import { ChevronDown } from "lucide-react"; 
import { Smile } from "lucide-react";


const data = [
  {
    job: "Launch social media campaign for product",
    submitted: "15-11-2024",
    status: "In-process",
    submitter: "Aisha Patel",
    url: "www.aishapatel.com",
    assigned: "Sophie Choudhury",
    priority: "Medium",
    due: "20-11-2024",
    value:"6,200,000"
  },
  {
    job: "Update press kit for company redesign",
    submitted: "28-10-2024",
    status: "Need to start",
    submitter: "Irfan Khan",
    url: "www.irfankhanpresskit.com",
    assigned: "Tejas Pandey",
    priority: "High",
    due: "30-10-2024",
    value:"3,500,000"

  },
  {
    job: "Finalize user testing feedback for app",
    submitted: "05-12-2024",
    status: "In-process",
    submitter: "Mark Johnson",
    url: "www.markjohnson.dev",
    assigned: "Rachel Lee",
    priority: "Medium",
    due: "10-12-2024",
    value:"4,750,000"
  },
  {
    job: "Design new features for the website",
    submitted: "10-01-2025",
    status: "Complete",
    submitter: "Emily Green",
    url: "www.emilygreenui.com",
    assigned: "Tom Wright",
    priority: "Low",
    due: "15-01-2025",
    value:"5,900,000"
  },
  {
    job: "Prepare financial report for Q4",
    submitted: "25-01-2025",
    status: "Blocked",
    submitter: "Jessica Brown",
    url: "www.jessicabrownfinance.com",
    assigned: "Kevin Smith",
    priority: "Low",
    due: "30-01-2025",
    value:"2,800,000"
  },
  {
    job: "",
    submitted: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    due: "",
  },
  {
    job: "",
    submitted: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    due: "",
  },
  {
    job: "",
    submitted: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    due: "",
  },
  {
    job: "",
    submitted: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    due: "",
  },
  {
    job: "",
    submitted: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    due: "",
  },
  {
    job: "",
    submitted: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    due: "",
  },
  {
    job: "",
    submitted: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    due: "",
  },
  {
    job: "",
    submitted: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    due: "",
  },
  {
    job: "",
    submitted: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    due: "",
  },
  {
    job: "",
    submitted: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    due: "",
  },
  {
    job: "",
    submitted: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    due: "",
  },
  {
    job: "",
    submitted: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    due: "",
  },
  {
    job: "",
    submitted: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    due: "",
  },
  {
    job: "",
    submitted: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    due: "",
  },
  {
    job: "",
    submitted: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    due: "",
  },
  {
    job: "",
    submitted: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    due: "",
  },
  {
    job: "",
    submitted: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    due: "",
  },
  {
    job: "",
    submitted: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    due: "",
  },
  {
    job: "",
    submitted: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    due: "",
  },
  {
    job: "",
    submitted: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    due: "",
  },
  {
    job: "",
    submitted: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    due: "",
  },
   
  
];
 

const getStatusStyle = (status: string) => {
  const base = "text-xs font-medium px-2 py-1 rounded-full w-fit";
  switch (status) {
    case "In-process":
      return `${base} bg-yellow-100 text-yellow-800 w-[80px] h-[24px] rounded-[100px] pt-[4px] pr-2 pb-[4px] pl-2 flex gap-2 `;
    case "Need to start":
      return `${base} bg-gray-200 text-gray-700`;
    case "Complete":
      return `${base} bg-green-100 text-green-700`;
    case "Blocked":
      return `${base} bg-red-100 text-red-700`;
    default:
      return base;
  }
};

const getPriorityStyle = (priority: string) => {
  const base = "text-xs font-semibold";
  switch (priority) {
    case "High":
      return `${base} text-red-600`;
    case "Medium":
      return `${base} text-yellow-700`;
    case "Low":
      return `${base} text-blue-600`;
    default:
      return base;
  }
};

export default function TableComponent() { 
  return (
    <div className="w-full h-[872px] flex gap-[1px]">
      <table className=" border-collapse  text-sm border-separate border-spacing-0  ">
        <thead>

          <tr className="h-[32px]">
            <th className="w-[32px] h-[32px] border border-t-[#EEEEEE] border-gray-200 bg-white"></th>

            <th colSpan={4} className="w-[631px] h-[32px] px-2 bg-[#E2E2E2]">
              <div className="flex items-center h-full gap-2">
                <div className="w-[158px] h-[24px] rounded-[4px] px-1 flex items-center gap-[4px] bg-[#EEEEEE]">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <Link2 className="w-[13.33px] h-[13.33px] text-[#1A8CFF]" />
                  </div>
                  <div className="text-[12px] leading-4 text-[#000000] font-normal w-[130px]">
                    Q3 Financial Overview
                  </div>
                </div>
                <div className="w-4 h-4 flex items-center justify-center">
                  <RefreshCcw className="w-[11.67px] h-[14.33px] text-[#FA6736] rotate-120 scale-x-[-1]" />
                </div>
              </div>
            </th>

            <th className="w-[124px] h-[32px] p-2 bg-white flex items-center gap-2"></th>

            <th className="w-[124px] h-[32px] px-4 bg-[#D2E0D4]">
              <div className="flex items-center gap-2 h-full">
                <div className="flex items-center gap-2 h-[24px] px-1 rounded-[4px]">
                  <img
                    src="https://img.icons8.com/?size=100&id=v1IAZrvpynz8&format=png&color=A3ACA3"
                    className="rotate-180 w-[12px] h-[12px]"
                    alt=""
                  />
                  <div className="text-[14px] font-medium leading-5 text-[#505450]">ABC</div>
                  <div className="w-5 h-5 rounded-[4px] flex items-center justify-center">
                    <div className="w-[10px] h-[2px] flex items-center justify-center text-[#AFAFAF] pb-2">
                      ...
                    </div>
                  </div>
                </div>
              </div>
            </th>


            <th colSpan={2} className="w-[251px] h-[32px] px-4 bg-[#DCCFFC]">
              <div className="flex items-center gap-2 h-full">
                <div className="flex items-center gap-[4px] h-[24px] px-1 rounded-[4px]">
                  <img
                    src="https://img.icons8.com/?size=100&id=v1IAZrvpynz8&format=png&color=ffffff"
                    className="rotate-180 w-[12px] h-[12px]"
                    alt=""
                  />
                  <div className="text-[14px] font-medium leading-5 text-[#463E59]">Answer a question</div>
                  <div className="w-5 h-5 rounded-[4px] flex items-center justify-center">
                    <div className="w-[10px] h-[2px] flex items-center justify-center text-[#AFAFAF] pb-2">
                      ...
                    </div>
                  </div>
                </div>
              </div>
            </th>

            <th className="w-[124px] h-[32px] px-4 bg-[#FAC2AF]">
              <div className="flex items-center gap-2 h-full">
                <div className="flex items-center gap-[4px] h-[24px] px-1 rounded-[4px]">
                  <img
                    src="https://img.icons8.com/?size=100&id=v1IAZrvpynz8&format=png&color=ffffff"
                    className="rotate-180 w-[12px] h-[12px]"
                    alt=""
                  />
                  <div className="text-[14px] font-medium leading-5 text-[#695149]">Extract</div>
                  <div className="w-5 h-5 rounded-[4px] flex items-center justify-center">
                    <div className="w-[10px] h-[2px] flex items-center justify-center text-[#AFAFAF] pb-2">
                      ...
                    </div>
                  </div>
                </div>
              </div>
            </th>

            <th
              className="w-[124px] h-[32px] px-4 bg-[#EEEEEE] opacity-100 border-l border-r border-t border-b border-l-[#CBCBCB] border-r-[#CBCBCB] border-t-[#EEEEEE] border-b-[#EEEEEE]"
              style={{
                borderStyle: 'solid dashed solid dashed',
              }}
            >
              <div className="flex justify-center items-center gap-2 h-full">
                <div className="w-5 h-5 flex items-center justify-center">
                  <Plus className="w-[14.59px] h-[14.58px] text-[#04071E]" />
                </div>
              </div>
            </th>
          </tr>



          <tr className="h-[32px]">
            <th className=" border-t border-t-[#EEEEEE]  bg-[#EEEEEE] w-[32px] h-[32px] px-[8px]">
                <div className="flex items-center justify-center h-full">
                  <div className="w-4 h-4 flex items-center justify-center text-[#AFAFAF] text-sm leading-none">
                    #
                  </div>
                </div>
            </th>


            <th className=" w-[256px] h-[32px] pr-[4px] pl-[8px] bg-[#EEEEEE] border border-[1px] border-[#ffffff] ">
              <div className="flex gap-2 ">
                <div className="w-[220px] h-4 flex gap-[4px]">
                  <div className="w-4 h-4">
                    <img src="https://img.icons8.com/?size=100&id=ltnGW6hH3LJQ&format=png&color=AFAFAF" alt="" srcset=""  className="w-[12px] h-[12px] pt-[1.33px] pl-[2px]"/>
                  </div>
                  <div className="w-[200px] h-[16px] font-semibold text-[12px] leading-[16px] tracking-[0] text-[#757575] flex align-left items-center">Job Request</div>
                </div>

                <div
                  className="w-5 h-5 rounded-[4px] flex items-center justify-center "
                   
                >
                  <ChevronDown
                    className="w-[12px] h-[12px] text-[#AFAFAF]"
                    style={{ animationDuration: '0ms' }}
                  />
                </div>


                
              </div>
              
            </th>


            <th className="border h-[32px] border-[1px] border-[#ffffff] w-[124px] h-[32px] pr-[4px] pl-[8px] bg-[#EEEEEE]">
              <div className="flex gap-[4px]">
                <div className="w-[88px] h-[16px] flex gap-[4px]">
                  <div className="w-4 h-4 pt-[2px] pl-[2px]">
                    <img src="https://img.icons8.com/?size=100&id=r4Sh2dXADe6G&format=png&color=AFAFAF" alt="" srcset="" className="w-[12px] h-[12px] "/>
                  </div>
                  <div className="w-[68px] h-[16px] font-semibold text-[12px] leading-[16px] tracking-[0] text-[#757575]">
                    Submitted
                  </div>
                </div>
                <div>
                  <div
                  className="w-5 h-5 rounded-[4px] flex items-center justify-center "
                  
                >
                  <ChevronDown
                    className="w-[12px] h-[12px] text-[#AFAFAF]"
                    style={{ animationDuration: '0ms' }}
                  />
                </div>
                </div>
              </div>
              
            </th>


            <th className="border h-[32px] border-[1px] border-[#ffffff] w-[124px] h-[32px] pr-[4px] pl-[8px] bg-[#EEEEEE]">
              <div className="flex gap-[4px]">
                <div className="w-[88px] h-[16px] flex gap-[4px] ">
                  <div className="h-4 w-4 flex items-center">
                    <ChevronDown className="bg-[#AFAFAF] rounded-full text-white w-[13.33px] h-[13.33px]  "/>
                  </div>
                  <div className="w-[68px] h-[16px] text-[#757575] font-semibold text-[12px] leading-[16px] tracking-[0]">Status </div>
                </div>
                <div
                  className="w-5 h-5 rounded-[4px] flex items-center justify-center "
                   
                >
                  <ChevronDown
                    className="w-[12px] h-[12px] text-[#AFAFAF]"
                    style={{ animationDuration: '0ms' }}
                  />
                </div>
              </div> 
            </th>



            <th className="border h-[32px] border-[1px] border-[#ffffff] w-[124px] h-[32px] pr-[4px] pl-[8px] bg-[#EEEEEE]">
              <div className="flex gap-[4px]">
                <div className="w-[88px] h-[16px] flex gap-[4px] ">
                  <div className="h-4 w-4 flex items-center pt-[] pl-[]">
                    <img src="https://img.icons8.com/?size=100&id=pETkiIKt6qBf&format=png&color=AFAFAF" alt="" srcset="" className="w-[10.67px] "/>
                  </div>
                  <div className="w-[68px] h-[16px] text-[#757575] font-semibold text-[12px] leading-[16px] tracking-[0]"> Submitter</div>
                </div>
                <div
                  className="w-5 h-5 rounded-[4px] flex items-center justify-center "
                   
                >
                  <ChevronDown
                    className="w-[12px] h-[12px] text-[#AFAFAF]"
                    style={{ animationDuration: '0ms' }}
                  />
                </div>
              </div> 
            </th>



             <th className="h-[32px] border border-[1px] border-[#ffffff] w-[124px] h-[32px] pr-[4px] pl-[8px] bg-[#EEEEEE]">
              <div className="flex gap-[4px]">
                <div className="w-[88px] h-[16px] flex gap-[4px] ">
                  <div className="h-4 w-4 flex items-center pt-[1.33px] pl-[1.33px]">
                    <img src="https://img.icons8.com/?size=100&id=5561&format=png&color=AFAFAF" alt="" srcset="" className="w-[13.34px] h-[13.33px]" />
                  </div>
                  <div className="w-[68px] h-[16px] text-[#757575] font-semibold text-[12px] leading-[16px] tracking-[0] flex items-left">URL </div>
                </div>
                <div
                  className="w-5 h-5 rounded-[4px] flex items-center justify-center "
                  
                >
                  <ChevronDown
                    className="w-[12px] h-[12px] text-[#AFAFAF]"
                    style={{ animationDuration: '0ms' }}
                  />
                </div>
              </div> 
            </th>



             <th className="h-[32px] border border-[1px] border-[#ffffff] w-[124px] h-[32px] pr-[4px] pl-[8px] bg-[#E8F0E9]">
              <div className="flex gap-[4px]">
                <div className="w-[112px] h-[16px] flex gap-[4px] ">
                  <div className="h-4 w-4 flex items-center pt-[0.67px] pl-[1.67px]">
                    <Smile className="w-[13.34px] h-[13.33px] text-[#83A588]" />
                  </div>
                  <div className="w-[92px] h-[16px] text-[#666C66] font-semibold text-[12px] leading-[16px] tracking-[0] flex items-left">Assigned </div>
                </div> 
              </div> 
            </th>


            <th className="h-[32px] border border-[1px] border-[#ffffff] w-[125px] h-[32px] pr-[4px] pl-[8px] bg-[#EAE3FC]">
              <div className="flex gap-[4px]">
                <div className="w-[113px] h-[16px] flex gap-[4px] ">
                  <div className="w-[113px] h-[16px] text-[#655C80] font-semibold text-[12px] leading-[16px] tracking-[0] flex items-left">Priority </div>
                </div> 
              </div> 
            </th>


            <th className="border border-[1px] border-[#ffffff] w-[125px] h-[32px] pr-[4px] pl-[8px] bg-[#EAE3FC]">
              <div className="flex gap-[4px]">
                <div className="w-[113px] h-[16px] flex gap-[4px] ">
                  <div className="w-[113px] h-[16px] text-[#655C80] font-semibold text-[12px] leading-[16px] tracking-[0] flex items-left">Due Date </div>
                </div> 
              </div> 
            </th>

            <th className="border border-[1px] border-[#ffffff] w-[124px] h-[32px] pr-[4px] pl-[8px] bg-[#FFE9E0]">
              <div className="flex gap-[4px]">
                <div className="w-[112px] h-[16px] flex gap-[4px] ">
                  <div className="w-[113px] h-[16px] text-[#8C6C62] font-semibold text-[12px] leading-[16px] tracking-[0] flex items-left">Est. Value</div>
                </div> 
              </div> 
            </th>
            <th className="opacity-100 border-l border-r border-t border-b border-l-[#CBCBCB] border-r-[#CBCBCB] border-t-[#EEEEEE] border-b-[#EEEEEE] w-[124px] h-[32px] pr-[4px] pl-[8px] bg-[#ffffff]"   style={{
    borderStyle: 'solid dashed solid dashed',
  }}
>
              <div className="flex gap-[4px]">
                </div>
            </th>
            
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="h-[32px]">
              <td className="border-t border-t-[#EEEEEE] bg-[#ffffff] w-[32px] h-[32px]">
                <div className="w-full h-full flex items-center justify-center text-[14px] leading-[20px] font-normal text-[#757575]">
                  {index + 1}
                </div>
              </td>


              <td className="w-[256px] h-[32px]  border-collapse border border-[#EEEEEE] bg-white px-2">
                <div className="w-full h-full flex items-center text-[#121212] text-[12px] leading-[16px] font-normal">
                  {row.job}
                </div>
              </td>


              <td className="border-collapse border border-[#EEEEEE] w-[124px] h-[32px] pr-2 pl-2 bg-[#ffffff]">
                <div className="flex gap-2 ">
                  <div className="w-[108px] h-[16px] font-normal text-[12px] leading-[16px] text-right text-[#121212]">
                    {row.submitted}
                  </div>
                </div>
                </td>



              <td className="border-collapse border border-[#EEEEEE] w-[124px] h-[32px] pr-2 pl-2 bg-[#ffffff]">
                <div className="flex gap-2 items-center justify-center">
                  <span className={getStatusStyle(row.status)}>{row.status}</span>
                </div>
              </td>


              <td className="border-collapse border border-[#EEEEEE] w-[124px] h-[32px] pr-2 pl-2 bg-[#ffffff]">
                <div className="flex gap-2 ">
                  <div className="font-normal text-[12px] leading-[16px]">
                    {row.submitter}
                  </div>
                </div> 
              </td>

              <td className="border-collapse border border-[#EEEEEE] w-[124px] h-[32px] pr-2 pl-2 bg-[#ffffff] flex items-center">
                <div
                  className="font-normal text-[12px] leading-[16px] underline decoration-solid truncate w-full whitespace-nowrap"
                  style={{ textDecorationThickness: '1.5px', textUnderlineOffset: '2px', textDecorationSkipInk: 'none' }}
                >
                  {row.url
                    ? `${row.url.split(".")[0] || ''}.${row.url.split(".")[1] || ''}.${row.url.split(".")[2] || ''}`
                    : ""}
                </div>
              </td>




              <td className="border-collapse border border-[#EEEEEE] w-[124px] h-[32px] pr-2 pl-2 bg-[#ffffff]">
                <div className="flex gap-2 ">
                  <div className="font-body font-normal text-[12px] leading-[16px] tracking-normal not-italic">
                {row.assigned}
                  </div>
                </div>
              </td>


              <td className="border-collapse border border-[#EEEEEE] w-[125px] h-[32px] pr-2 pl-2 bg-[#ffffff]">
                <div className="flex gap-2 ">
                  <div className="font-body font-semibold not-italic text-[12px] leading-[16px] tracking-normal text-center">
               <span className={getPriorityStyle(row.priority)}>{row.priority}</span>
                  </div>
                </div>
              </td>
                
              

              <td className="border-collapse border border-[#EEEEEE] w-[125px] h-[32px] px-2 bg-[#ffffff]">
                <div className="w-full h-full flex items-center">
                  <div className="w-full text-right font-body font-normal not-italic text-[12px] leading-[16px] tracking-normal text-[#121212]">
                    {row.due }
                  </div>
                </div>
              </td>
              <td className="border-collapse border border-[#EEEEEE] w-[124px] h-[32px] px-2 bg-[#ffffff]">
                <div className="w-full h-full flex items-center justify-end">
                  <span className="font-body font-normal not-italic text-[12px] leading-[16px] tracking-normal text-[#121212]">
                    {row.value}
                  </span>
                  {row.value ? (
                    <span className="ml-[2px] font-body font-medium not-italic text-[12px] leading-[16px] tracking-normal text-[#121212]">
                      ₹
                    </span>
                  ) : null}
                </div>
              </td>

<td
  className="opacity-100 border-l border-r border-t border-b border-l-[#CBCBCB] border-r-[#CBCBCB] border-t-[#EEEEEE] border-b-[#EEEEEE] w-[124px] h-[32px] pr-2 pl-2 bg-[#ffffff]"
  style={{
    borderStyle: 'solid dashed solid dashed',
  }}
>
  <div className="flex gap-2">
    <div className="font-body font-normal not-italic text-[12px] leading-[16px] tracking-normal text-right text-[#121212]">
      {/* Content */}
    </div>
  </div>
</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
