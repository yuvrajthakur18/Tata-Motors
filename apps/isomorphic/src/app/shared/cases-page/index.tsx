'use client';

import { Box } from 'rizzui/box';
import CRMStats from '../crm/dashboard/crm-stats';
import CaseWiseTable from '../crm/dashboard/tables/case-wise-table';

export default function CasesDashboard() {
  return (
    <Box className="@container/crm">
      <Box className="grid grid-cols-1 gap-6 @3xl/crm:grid-cols-12 @7xl/crm:gap-7 3xl:gap-8">
        {/* CRMStats Cards */}
        <CRMStats className="@3xl/crm:col-span-full" stats="case" />

        {/* Case Wise Table */}
        <CaseWiseTable className="col-span-full dark:bg-[#181818]" />
      </Box>
    </Box>
  );
}
