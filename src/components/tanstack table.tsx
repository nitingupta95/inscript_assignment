 import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";

const columnHelper = createColumnHelper();

const sampleData = [
  {
    jobRequest: "Launch social media campaign for pro...",
    submitted: "15-11-2024",
    status: "In-process",
    submitter: "Aisha Patel",
    url: "www.aishapatel...",
    assigned: "Sophie Choudhury",
    priority: "Medium",
    dueDate: "20-11-2024",
    estValue: "6,200,000",
  },
  {
    jobRequest: "Update press kit for company redesign",
    submitted: "28-10-2024",
    status: "Need to start",
    submitter: "Irfan Khan",
    url: "www.irfankhan...",
    assigned: "Tejas Pandey",
    priority: "High",
    dueDate: "30-10-2024",
    estValue: "3,500,000",
  },
  {
    jobRequest: "Finalize user testing feedback for app...",
    submitted: "05-12-2024",
    status: "In-process",
    submitter: "Mark Johnson",
    url: "www.markjohns...",
    assigned: "Rachel Lee",
    priority: "Medium",
    dueDate: "10-12-2024",
    estValue: "4,750,000",
  },
  {
    jobRequest: "Design new features for the website",
    submitted: "10-01-2025",
    status: "Complete",
    submitter: "Emily Green",
    url: "www.emilygreen...",
    assigned: "Tom Wright",
    priority: "Low",
    dueDate: "15-01-2025",
    estValue: "5,900,000",
  },
  {
    jobRequest: "Prepare financial report for Q4",
    submitted: "25-01-2025",
    status: "Blocked",
    submitter: "Jessica Brown",
    url: "www.jessicabro...",
    assigned: "Kevin Smith",
    priority: "Low",
    dueDate: "30-01-2025",
    estValue: "2,800,000",
  },
];

const columns = [
  columnHelper.accessor((_row, index) => index + 1, {
    id: "index",
    header: "#",
    cell: (info) => info.getValue(),
  }),

  // Financial Job Overview
  columnHelper.accessor("jobRequest", { id: "jobRequest", header: "Job Request" }),
  columnHelper.accessor("submitted", { id: "submitted", header: "Submitted" }),
  columnHelper.accessor("status", {
    id: "status",
    header: "Status",
    cell: (info) => {
      const status = info.getValue();
      let color = "bg-gray-200 text-gray-800";
      if (status === "In-process") color = "bg-yellow-100 text-yellow-700";
      if (status === "Need to start") color = "bg-blue-100 text-blue-700";
      if (status === "Complete") color = "bg-green-100 text-green-700";
      if (status === "Blocked") color = "bg-red-100 text-red-700";
      return (
        <span className={`px-2 py-1 rounded text-xs font-medium ${color}`}>
          {status}
        </span>
      );
    },
  }),
  columnHelper.accessor("submitter", { id: "submitter", header: "Submitter" }),

  // URL
  columnHelper.accessor("url", {
    id: "url",
    header: "URL",
    cell: (info) => (
      <a
        href={`https://${info.getValue()}`}
        className="text-blue-600 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {info.getValue()}
      </a>
    ),
  }),

  // ABC
  columnHelper.accessor("assigned", { id: "assigned", header: "Assigned" }),

  // Answer a Question
  columnHelper.accessor("priority", {
    id: "priority",
    header: "Priority",
    cell: (info) => {
      const val = info.getValue();
      const color =
        val === "High"
          ? "text-red-600"
          : val === "Medium"
          ? "text-yellow-600"
          : "text-blue-600";
      return <span className={`font-medium ${color}`}>{val}</span>;
    },
  }),
  columnHelper.accessor("dueDate", { id: "dueDate", header: "Due Date" }),

  // Extract
  columnHelper.accessor("estValue", { id: "estValue", header: "Est. Value" }),
];

const headerGroups = [
  {
    label: "Financial Job Overview",
    span: 4,
  },
  {
    label: "URL",
    span: 1,
  },
  {
    label: "ABC",
    span: 1,
  },
  {
    label: "Answer a Question",
    span: 2,
  },
  {
    label: "Extract",
    span: 1,
  },
];

export default function TableCom() {
  const table = useReactTable({
    data: sampleData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-[1440px] overflow-auto border border-[#EEEEEE] rounded-lg">
      <table className="min-w-full text-sm border-collapse">
        <thead className="bg-[#F9F9F9]">
          <tr>
            <th className="border-b border-[#EAEAEA] px-3 py-2 text-left text-[#444]">#</th>
            {headerGroups.map((group, idx) => (
              <th
                key={idx}
                colSpan={group.span}
                className="px-3 py-2 text-left font-semibold text-[#444] border-b border-[#EAEAEA]"
              >
                {group.label}
              </th>
            ))}
          </tr>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-3 py-2 text-left font-medium text-[#444] border-b border-[#EAEAEA]"
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-[#FAFAFA]">
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="px-3 py-2 border-b border-[#F0F0F0] text-[#333] h-[32px] align-middle"
                  style={{ height: "32px" }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
         
      </table>
      <div className="pt-4 px-4 ">
  <div className="flex gap-4 items-center justify-start">
    {["All Orders", "Pending", "Reviewed", "Arrived"].map((label, i) => (
      <button
        key={label}
        className={`px-4 py-2 rounded-md font-medium ${
          i === 0
            ? "bg-[#4B6A4F] text-white"
            : "bg-[#F0F0F0] text-[#666]"
        }`}
      >
        {label}
      </button>
    ))}
    <button className="ml-2 text-[#AFAFAF] font-medium text-sm text-xl">+</button>
  </div>
    </div>
    </div>
  );
}
