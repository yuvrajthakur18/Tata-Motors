"use client";

import { Card } from "@/app/shared/file/manager/file-grid/grid";
import { Link } from "@/i18n/routing";
import FolderIcon from "@core/components/icons/folder-solid";
import { useTranslations } from "next-intl";
import { Title } from "rizzui";

const recentFiles = [
  {
    id: 1,
    file: {
      name: "Employee Sheets",
      image: <FolderIcon />,
    },
    size: "2.4 GB",
    totalFiles: "135",
  },
  {
    id: 2,
    file: {
      name: "Personal Assets",
      image: <FolderIcon />,
    },
    size: "1.8 GB",
    totalFiles: "40",
  },
  {
    id: 3,
    file: {
      name: "Data & Prints",
      image: <FolderIcon />,
    },
    size: "528 MB",
    totalFiles: "122",
  },
  {
    id: 4,
    file: {
      name: "Raw Images",
      image: <FolderIcon />,
    },
    size: "8 GB",
    totalFiles: "900",
  },
];

export default function RecentFiles({ className }: { className?: string }) {
  const t = useTranslations("common");

  return (
    <div className={className}>
      <div className="col-span-full mb-3 flex items-center justify-between 2xl:mb-5">
        <Title as="h3" className="text-lg font-semibold xl:text-xl">
          {t("text-recent-files")}
        </Title>
        <Link
          href="/file-manager?layout=grid"
          className="text-sm font-medium text-gray-900 hover:underline"
        >
          {t("text-view-all")}
        </Link>
      </div>

      <div className="custom-scrollbar overflow-x-auto scroll-smooth">
        <div className="grid grid-flow-col gap-5">
          {recentFiles.map((item) => (
            <Card
              key={item.id}
              item={item}
              onDeleteItem={() => null}
              className="min-w-[273px] hover:-translate-y-0 hover:shadow-none"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
