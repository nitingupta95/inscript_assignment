import { useState, useMemo, useEffect, useCallback } from "react";
import type { SortingState, ColumnFiltersState } from "@tanstack/react-table";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table"; 
import {
  ChevronDown,
  Filter,
  Download,
  Upload,
  Share2,
  Plus,
  Search,
  Eye,
  MoreHorizontal,
  ArrowUpDown,
  Bell,
} from "lucide-react";

interface SpreadsheetCell {
  id: number; 
  [key: string]: string | number; 
}

const createInitialData = (): SpreadsheetCell[] => {
  const columns = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
  ];
  const data: SpreadsheetCell[] = [];

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


  sampleData.forEach((row, index) => {
    const typedRow = row as Record<string, string | number>;
    const dataRow: SpreadsheetCell = { id: index + 1 };
    columns.forEach((col) => {
      dataRow[col] = typedRow[col] || "";
    });
    data.push(dataRow);
  });

  for (let i = 5; i < 100; i++) {
    const emptyRow: SpreadsheetCell = { id: i + 1 };
    columns.forEach((col) => {
      emptyRow[col] = "";
    });
    data.push(emptyRow);
  }

  return data;
};


const getStatusBadge = (status: string) => {
  const statusLower = status.toLowerCase();

  if (statusLower === "in-process") {
    return "bg-yellow-100 text-yellow-800 border border-yellow-200";
  } else if (statusLower === "need to start") {
    return "bg-blue-100 text-blue-800 border border-blue-200";
  } else if (statusLower === "complete") {
    return "bg-green-100 text-green-800 border border-green-200";
  } else if (statusLower === "blocked") {
    return "bg-red-100 text-red-800 border border-red-200";
  }

  return "bg-gray-100 text-gray-800 border border-gray-200";
};

const getPriorityBadge = (priority: string) => {
  const priorityLower = priority.toLowerCase();

  if (priorityLower === "high") {
    return "bg-red-100 text-red-800 border border-red-200";
  } else if (priorityLower === "medium") {
    return "bg-yellow-100 text-yellow-800 border border-yellow-200";
  } else if (priorityLower === "low") {
    return "bg-blue-100 text-blue-800 border border-blue-200";
  }

  return "bg-gray-100 text-gray-800 border border-gray-200";
};

const Spreadsheet = () => {
  const [data, setData] = useState(createInitialData());
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [selectedCell, setSelectedCell] = useState<{
    rowIndex: number;
    columnId: string;
  } | null>(null);
  const [editingCell, setEditingCell] = useState<{
    rowIndex: number;
    columnId: string;
  } | null>(null);


  const columnHelper = createColumnHelper<SpreadsheetCell>();

  
  const columnHeaders = [
    "", 
    "Job Request",
    "Submitted",
    "Status",
    "Submitter",
    "URL",
    "Assigned",
    "Priority",
    "Due Date",
    "Est. Value",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
  ];

 
  const updateCellValue = useCallback(
    (
      rowIndex: number,
      columnId: string,
      value: string | number 
    ) => {
      setData((prev) => {
        const newData = [...prev];
        newData[rowIndex] = { ...newData[rowIndex], [columnId]: value };
        return newData;
      });
      console.log(
        `Updated cell: Row ${rowIndex + 1}, Column ${columnId}, Value: ${value}`
      );
    },
    [] 
  );

  
  const columns = useMemo(() => {
    const cols = [
     
      columnHelper.accessor("id", {
        header: "",
        cell: (info) => (
          <div className="text-center text-sm text-gray-500 font-medium">
            {info.getValue()}
          </div>
        ),
        size: 50,
        enableSorting: false,
        enableResizing: false,
      }),
   
      ...(
        [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
        ] as string[]
      ).map((col: string, index) =>
        columnHelper.accessor(col, {
          header: columnHeaders[index + 1] || col, 
          cell: (info) => {
            const rowIndex = info.row.index;
            const columnId = info.column.id;
            const value = info.getValue() as string; 
            const isEditing =
              editingCell?.rowIndex === rowIndex &&
              editingCell?.columnId === columnId;

            if (isEditing) {
              return (
                <input
                  type="text"
                  value={value}
                  onChange={(e) =>
                    updateCellValue(rowIndex, columnId, e.target.value)
                  }
                  onBlur={() => setEditingCell(null)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      setEditingCell(null);
                    }
                  }}
                  className="w-full border-none outline-none bg-transparent"
                  autoFocus
                />
              );
            }

           
            if (columnId === "C" && value) {
              return (
                <div className="w-full h-full min-h-[20px] text-sm flex items-center">
                  <span
                    className={`inline-block px-2 py-1 rounded-md text-xs font-medium ${getStatusBadge(
                      value
                    )}`}
                  >
                    {value}
                  </span>
                </div>
              );
            }

          
            if (columnId === "G" && value) {
              return (
                <div className="w-full h-full min-h-[20px] text-sm flex items-center">
                  <span
                    className={`inline-block px-2 py-1 rounded-md text-xs font-medium ${getPriorityBadge(
                      value
                    )}`}
                  >
                    {value}
                  </span>
                </div>
              );
            }

            return (
              <div className="w-full h-full min-h-[20px] text-sm flex items-center">
                {value}
              </div>
            );
          },
      
          size:
            index === 0 
              ? 500
              : index === 1 
                ? 120
                : index === 2 
                  ? 130
                  : index === 3 
                    ? 150
                    : index === 4 
                      ? 180
                      : index === 5 
                        ? 150
                        : index === 6 
                          ? 100
                          : index === 7 
                            ? 120 
                            : index === 8 
                              ? 120
                              : 100, 
        })
      ),
    ];
    return cols;
  }, [editingCell, columnHeaders, updateCellValue, columnHelper]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      globalFilter,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    enableColumnResizing: true,
    columnResizeMode: "onChange",
  });


  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedCell) return;
      if (editingCell) return; 

      const tableElement = document.querySelector("table");
      if (!tableElement) return;

      const rows = Array.from(tableElement.querySelectorAll("tbody tr"));
      const currentRow = rows[selectedCell.rowIndex];
      if (!currentRow) return;

      const columnIdsInOrder = table
        .getAllColumns()
        .filter((col) => col.id !== "id")
        .map((col) => col.id);
      const currentColumnGlobalIndex = columnIdsInOrder.indexOf(
        selectedCell.columnId
      );

      let newRowIndex = selectedCell.rowIndex;
      let newColumnId = selectedCell.columnId;

      switch (e.key) {
        case "ArrowUp":
          e.preventDefault();
          newRowIndex = Math.max(0, selectedCell.rowIndex - 1);
          console.log(`Navigating up to row ${newRowIndex + 1}`);
          break;
        case "ArrowDown":
          e.preventDefault();
          newRowIndex = Math.min(rows.length - 1, selectedCell.rowIndex + 1);
          console.log(`Navigating down to row ${newRowIndex + 1}`);
          break;
        case "ArrowLeft":
          e.preventDefault();
          if (currentColumnGlobalIndex > 0) {
            newColumnId = columnIdsInOrder[currentColumnGlobalIndex - 1];
          }
          console.log(`Navigating left to column ${newColumnId}`);
          break;
        case "ArrowRight":
          e.preventDefault();
          if (currentColumnGlobalIndex < columnIdsInOrder.length - 1) {
            newColumnId = columnIdsInOrder[currentColumnGlobalIndex + 1];
          }
          console.log(`Navigating right to column ${newColumnId}`);
          break;
        case "Enter":
          e.preventDefault();
         
          if (selectedCell.columnId !== "id") {
            setEditingCell(selectedCell);
            console.log(
              `Editing cell: Row ${selectedCell.rowIndex + 1}, Column ${
                selectedCell.columnId
              }`
            );
          }
          break;
        case "Escape":
          e.preventDefault();
          setEditingCell(null);
          console.log("Stopped editing cell");
          break;
        default:
          return;
      }

      if (
        newRowIndex !== selectedCell.rowIndex ||
        newColumnId !== selectedCell.columnId
      ) {
        setSelectedCell({ rowIndex: newRowIndex, columnId: newColumnId });
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedCell, editingCell, table]);

  const handleToolbarAction = (action: string) => {
    console.log(`${action} clicked`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pb-16">

    
      <div className="bg-white border-b border-gray-200 px-4">
        <div className="flex items-center justify-between">
          <div className="flex space-x-6">
            <button
              onClick={() => handleToolbarAction("Q3 Financial Overview")}
              className="flex items-center space-x-2 px-3 py-3 border-b-2 border-blue-500 text-sm font-medium text-blue-600"
            >
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              Q3 Financial Overview
            </button>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={() => handleToolbarAction("ABC")}
              className="px-3 py-3 text-sm text-gray-600 hover:text-gray-900 bg-green-50 rounded-t"
            >
              ABC
            </button>
            <button
              onClick={() => handleToolbarAction("Answer a question")}
              className="px-3 py-3 text-sm text-gray-600 hover:text-gray-900 bg-purple-50 rounded-t"
            >
              Answer a question
            </button>
            <button
              onClick={() => handleToolbarAction("Extract")}
              className="px-3 py-3 text-sm text-gray-600 hover:text-gray-900 bg-orange-50 rounded-t"
            >
              Extract
            </button>
            <button
              onClick={() => handleToolbarAction("Add tab")}
              className="px-3 py-3 text-gray-400 hover:text-gray-600"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

    
      <div className="bg-white flex-1 flex flex-col">
        <div className="overflow-auto flex-1">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 sticky top-0">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200 cursor-pointer hover:bg-gray-100 relative"
                      style={{ width: header.getSize() }}
                      onClick={() => {
                        if (header.column.getCanSort()) {
                          header.column.toggleSorting();
                          console.log(`Sorting column: ${header.id}`);
                        }
                      }}
                    >
                      <div className="flex items-center justify-center">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </div>
                      {header.column.getCanResize() && (
                        <div
                          onMouseDown={header.getResizeHandler()}
                          onTouchStart={header.getResizeHandler()} // Add touch support
                          className="absolute right-0 top-0 h-full w-1 bg-transparent hover:bg-blue-300 cursor-col-resize"
                        />
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {table.getRowModel().rows.map((row, index) => (
                <tr key={row.id} className="hover:bg-gray-50">
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      data-column-id={cell.column.id}
                      className={`px-2 py-1 border-r border-gray-200 text-sm cursor-pointer ${
                        selectedCell?.rowIndex === index &&
                        selectedCell?.columnId === cell.column.id
                          ? "bg-blue-100 ring-1 ring-blue-500"
                          : ""
                      } ${
                        cell.column.id === "id" ? "bg-gray-50 text-center" : ""
                      }`}
                      style={{ width: cell.column.getSize() }}
                      onClick={() => {
                        setSelectedCell({
                          rowIndex: index,
                          columnId: cell.column.id,
                        });
                        console.log(
                          `Cell selected: Row ${index + 1}, Column ${
                            cell.column.id
                          }`
                        );
                      }}
                      onDoubleClick={() => {
                        if (cell.column.id !== "id") {
                          setEditingCell({
                            rowIndex: index,
                            columnId: cell.column.id,
                          });
                          console.log(
                            `Editing cell: Row ${index + 1}, Column ${
                              cell.column.id
                            }`
                          );
                        }
                      }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-gray-50 px-4 py-3 z-10">
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center">
              <span className="font-semibold text-green-700 bg-green-200 px-3 py-2 rounded-md border-t-4 border-green-500">
                All Orders
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-600">Pending</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-600">Review</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-600">Arrived</span>
            </div>
            <button className="px-3 py-3 text-gray-400 hover:text-gray-600">
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spreadsheet;