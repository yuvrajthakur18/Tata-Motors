"use client";

import { useMemo, useState } from "react";
import { Link } from "@/i18n/routing";
import { useTable } from "@core/hooks/use-table";
import { useColumn } from "@core/hooks/use-column";
import { getColumns } from "@/app/shared/file/dashboard/file-list/columns";
import { Title } from "rizzui";
import { routes } from "@/config/routes";
import { allFilesData } from "@/data/all-files";
import ControlledTable from "@/app/shared/controlled-table";
import { useTranslations } from "next-intl";

export default function FileListTable({ className }: { className?: string }) {
  const [pageSize, setPageSize] = useState(5);
  const t = useTranslations("common");
  const onHeaderCellClick = (value: string) => ({
    onClick: () => {
      handleSort(value);
    },
  });

  const onDeleteItem = (id: string) => {
    handleDelete(id);
  };

  const {
    isLoading,
    tableData,
    currentPage,
    totalItems,
    handlePaginate,
    sortConfig,
    handleSort,
    handleDelete,
  } = useTable(allFilesData, pageSize);

  const columns = useMemo(
    () => getColumns({ sortConfig, onHeaderCellClick, onDeleteItem, t }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onHeaderCellClick, sortConfig.key, sortConfig.direction, onDeleteItem]
  );

  const { visibleColumns } = useColumn(columns);

  return (
    <div className={className}>
      <div className="mb-3 flex items-center justify-between 2xl:mb-5">
        <Title
          as="h3"
          className="text-lg font-semibold text-gray-900 xl:text-xl"
        >
          {t("text-all-files")}
        </Title>
        <Link
          href={routes.file.manager}
          className="text-sm font-medium text-gray-900 hover:underline"
        >
          {t("text-view-all")}
        </Link>
      </div>
      <ControlledTable
        isLoading={isLoading}
        data={tableData}
        // @ts-ignore
        columns={visibleColumns}
        scroll={{ x: 1300 }}
        variant="modern"
        tableLayout="fixed"
        rowKey={(record) => record.id}
        className="overflow-hidden rounded-lg border border-muted text-sm"
        paginatorOptions={{
          pageSize,
          setPageSize,
          total: totalItems,
          current: currentPage,
          onChange: (page: number) => handlePaginate(page),
        }}
      />
    </div>
  );
}
