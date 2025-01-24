'use client';

import { Box } from 'rizzui/box';
import CRMStats from '../crm/dashboard/crm-stats';
import CaseWiseTable from '../crm/dashboard/tables/case-wise-table';
import CaseSeverity from '../crm/dashboard/case-severity';
import CasesHoldTime from '../crm/dashboard/cases-hold-time';
import CaseWiseCalls from '../crm/dashboard/case-wise-calls';

export default function CasesDashboard() {
  return (
    <Box className="@container/crm">
      <Box className="grid grid-cols-1 gap-6 @3xl/crm:grid-cols-12 @7xl/crm:gap-7 3xl:gap-8">
        {/* CRMStats Cards */}
        <CRMStats className="@3xl/crm:col-span-full" stats="case" />
        <CaseSeverity className="@3xl/crm:col-span-6 @7xl/crm:col-span-4 dark:bg-[#181818]" />
        <CasesHoldTime className="@3xl/crm:col-span-6 @7xl/crm:col-span-4 dark:bg-[#181818]" />
        <CaseWiseCalls className="@3xl/crm:col-span-6 @7xl/crm:col-span-4 dark:bg-[#181818]" />

        {/* Case Wise Table */}
        <CaseWiseTable className="col-span-full dark:bg-[#181818]" />
      </Box>
    </Box>
  );
}
