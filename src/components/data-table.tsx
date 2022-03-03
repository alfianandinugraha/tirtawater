import { Box, HStack } from "@chakra-ui/layout";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table";
import { Column, useSortBy, useTable } from "react-table";
import { HiArrowDown, HiArrowUp } from "react-icons/hi";

type DataTableProps<T extends object> = {
  data: T[];
  columns: ReadonlyArray<Column<T>>;
};

function DataTable<T extends object>(props: DataTableProps<T>) {
  const { getTableProps, headerGroups, getTableBodyProps, rows, prepareRow } =
    useTable(
      {
        data: props.data,
        columns: props.columns,
      },
      useSortBy
    );

  return (
    <Box>
      <Table {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup) => {
            return (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => {
                  return (
                    <Th {...column.getHeaderProps()} w={column.width}>
                      <Box {...column.getSortByToggleProps()}>
                        <HStack display="flex" spacing="1">
                          <Box>{column.render("Header")}</Box>
                          {column.isSorted ? (
                            <>
                              {column.isSortedDesc ? (
                                <HiArrowDown />
                              ) : (
                                <HiArrowUp />
                              )}
                            </>
                          ) : null}
                        </HStack>
                      </Box>
                    </Th>
                  );
                })}
              </Tr>
            );
          })}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  const { value } = cell;
                  console.log(cell);
                  return (
                    <Td {...cell.getCellProps()} w={cell.column.width}>
                      {!isNaN(value)
                        ? Number.isInteger(value)
                          ? value
                          : value.toFixed(3)
                        : cell.render("Cell")}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
}

export default DataTable;
