import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  ColumnDef,
  flexRender,
  SortingState,
  ColumnFiltersState,
} from "@tanstack/react-table"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ChevronDown, 
  ChevronUp, 
  ChevronLeft, 
  ChevronRight, 
  Search,
  TrendingUp,
  TrendingDown
} from "lucide-react"

interface Transaction {
  id: string
  date: string
  customer: string
  amount: number
  status: 'completed' | 'pending' | 'failed'
  channel: string
  country: string
}

const sampleData: Transaction[] = [
  {
    id: "TXN-001",
    date: "2024-01-15",
    customer: "John Doe",
    amount: 2499.99,
    status: "completed",
    channel: "Online",
    country: "United States"
  },
  {
    id: "TXN-002",
    date: "2024-01-14",
    customer: "Jane Smith",
    amount: 1299.50,
    status: "pending",
    channel: "Mobile",
    country: "Canada"
  },
  {
    id: "TXN-003",
    date: "2024-01-14",
    customer: "Bob Johnson",
    amount: 599.99,
    status: "failed",
    channel: "Online",
    country: "United Kingdom"
  },
  {
    id: "TXN-004",
    date: "2024-01-13",
    customer: "Alice Brown",
    amount: 3299.00,
    status: "completed",
    channel: "Store",
    country: "Australia"
  },
  {
    id: "TXN-005",
    date: "2024-01-13",
    customer: "Charlie Wilson",
    amount: 899.75,
    status: "completed",
    channel: "Mobile",
    country: "Germany"
  },
  {
    id: "TXN-006",
    date: "2024-01-12",
    customer: "Diana Davis",
    amount: 1599.99,
    status: "pending",
    channel: "Online",
    country: "France"
  },
  {
    id: "TXN-007",
    date: "2024-01-12",
    customer: "Edward Miller",
    amount: 799.50,
    status: "completed",
    channel: "Store",
    country: "Japan"
  },
  {
    id: "TXN-008",
    date: "2024-01-11",
    customer: "Fiona Garcia",
    amount: 2199.99,
    status: "failed",
    channel: "Mobile",
    country: "Spain"
  }
]

export function DataTable() {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [globalFilter, setGlobalFilter] = useState("")

  const columns: ColumnDef<Transaction>[] = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "Transaction ID",
        cell: ({ row }) => (
          <div className="font-mono text-sm">{row.getValue("id")}</div>
        ),
      },
      {
        accessorKey: "date",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="hover:bg-transparent p-0 font-semibold"
            >
              Date
              {column.getIsSorted() === "asc" ? (
                <ChevronUp className="ml-2 h-4 w-4" />
              ) : column.getIsSorted() === "desc" ? (
                <ChevronDown className="ml-2 h-4 w-4" />
              ) : (
                <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
              )}
            </Button>
          )
        },
        cell: ({ row }) => (
          <div className="text-sm">
            {new Date(row.getValue("date")).toLocaleDateString()}
          </div>
        ),
      },
      {
        accessorKey: "customer",
        header: "Customer",
        cell: ({ row }) => (
          <div className="font-medium">{row.getValue("customer")}</div>
        ),
      },
      {
        accessorKey: "amount",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="hover:bg-transparent p-0 font-semibold"
            >
              Amount
              {column.getIsSorted() === "asc" ? (
                <TrendingUp className="ml-2 h-4 w-4" />
              ) : column.getIsSorted() === "desc" ? (
                <TrendingDown className="ml-2 h-4 w-4" />
              ) : (
                <TrendingUp className="ml-2 h-4 w-4 opacity-50" />
              )}
            </Button>
          )
        },
        cell: ({ row }) => {
          const amount = parseFloat(row.getValue("amount"))
          const formatted = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(amount)
          return <div className="font-semibold gradient-text">{formatted}</div>
        },
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
          const status = row.getValue("status") as string
          return (
            <Badge
              variant={
                status === "completed"
                  ? "default"
                  : status === "pending"
                  ? "secondary"
                  : "destructive"
              }
              className="capitalize"
            >
              {status}
            </Badge>
          )
        },
      },
      {
        accessorKey: "channel",
        header: "Channel",
        cell: ({ row }) => (
          <div className="text-sm">{row.getValue("channel")}</div>
        ),
      },
      {
        accessorKey: "country",
        header: "Country",
        cell: ({ row }) => (
          <div className="text-sm">{row.getValue("country")}</div>
        ),
      },
    ],
    []
  )

  const table = useReactTable({
    data: sampleData,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
      globalFilter,
    },
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="glass-card-elevated p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Recent Transactions</h3>
            <p className="text-muted-foreground">
              Track and analyze your latest transactions
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search transactions..."
                value={globalFilter ?? ""}
                onChange={(event) => setGlobalFilter(event.target.value)}
                className="pl-10 w-[250px] btn-glass"
              />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-glass-border overflow-hidden">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} className="border-glass-border">
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id} className="font-semibold">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row, index) => (
                  <motion.tr
                    key={row.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="border-glass-border hover:bg-glass-primary transition-colors"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </motion.tr>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between space-x-2 py-4">
          <div className="text-sm text-muted-foreground">
            Showing {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1} to{" "}
            {Math.min(
              (table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize,
              table.getFilteredRowModel().rows.length
            )}{" "}
            of {table.getFilteredRowModel().rows.length} entries
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="btn-glass"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="btn-glass"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}