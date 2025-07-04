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
    A: "Launch social media campaign for pro...",
    B: "15-11-2024",
    C: "In-process",
    D: "Aisha Patel",
    E: "www.aishapatel...",
    F: "Sophie Choudhury",
    G: "Medium",
    H: "20-11-2024",
    I: "6,200,000",
  },
  {
    A: "Update press kit for company redesign",
    B: "28-10-2024",
    C: "Need to start",
    D: "Irfan Khan",
    E: "www.irfankhan...",
    F: "Tejas Pandey",
    G: "High",
    H: "30-10-2024",
    I: "3,500,000",
  },
  {
    A: "Finalize user testing feedback for app...",
    B: "05-12-2024",
    C: "In-process",
    D: "Mark Johnson",
    E: "www.markjohns...",
    F: "Rachel Lee",
    G: "Medium",
    H: "10-12-2024",
    I: "4,750,000",
  },
  {
    A: "Design new features for the website",
    B: "10-01-2025",
    C: "Complete",
    D: "Emily Green",
    E: "www.emilygreen...",
    F: "Tom Wright",
    G: "Low",
    H: "15-01-2025",
    I: "5,900,000",
  },
  {
    A: "Prepare financial report for Q4",
    B: "25-01-2025",
    C: "Blocked",
    D: "Jessica Brown",
    E: "www.jessicabro...",
    F: "Kevin Smith",
    G: "Low",
    H: "30-01-2025",
    I: "2,800,000",
  },
];

const columns = [
  columnHelper.accessor((row, index) => index + 1, {
    id: "no",
    header: "#",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("A", { header: "Job Request" }),
  columnHelper.accessor("B", { header: "Submitted" }),
  columnHelper.accessor("C", {
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
  columnHelper.accessor("D", { header: "Submitter" }),
  columnHelper.accessor("E", {
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
  columnHelper.accessor("F", { header: "Assigned" }),
  columnHelper.accessor("G", {
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
  columnHelper.accessor("H", { header: "Due Date" }),
  columnHelper.accessor("I", { header: "Est. Value" }),
];

export default function TableCom() {
  const table = useReactTable({
    data: sampleData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-[1440px] overflow-auto border-t border-[#EEEEEE]">
      <div className="text-sm border-b border-gray-200 flex">
        {['All Orders', 'Pending', 'Reviewed', 'Arrived'].map((tab, i) => (
          <button
            key={tab}
            className={`px-4 py-2 border-b-2 ${
              i === 0 ? 'border-[#4B6A4F] text-[#4B6A4F]' : 'border-transparent text-[#888]'
            } font-medium`}
          >
            {tab}
          </button>
        ))}
        <button className="ml-2 text-[#AFAFAF] font-medium text-sm">+</button>
      </div>

      <table className="min-w-full text-sm">
        <thead className="bg-[#F9F9F9]">
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
                  className="px-3 py-2 border-b border-[#F0F0F0] text-[#333]"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
