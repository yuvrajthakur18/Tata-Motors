'use client';

import { Box } from 'rizzui/box';
import CRMStats from '../crm/dashboard/crm-stats';
import CallWiseTable from '../crm/dashboard/tables/call-wise-table';
import CallNatureType from '../crm/dashboard/nature-of-call';
import CallsResolved from '../crm/dashboard/calls-resolved';
import CallType from '../crm/dashboard/call-type';
import TeamActivity from '../crm/dashboard/team-activity';

export default function CallsDashboard() {
  return (
    <Box className="@container/crm">
      <Box className="grid grid-cols-1 gap-6 @3xl/crm:grid-cols-12 @7xl/crm:gap-7 3xl:gap-8">
        {/* CRMStats Cards */}
        <CRMStats className="@3xl/crm:col-span-full" stats="call" />
        <CallType className="@3xl/crm:col-span-6 @7xl/crm:col-span-8 dark:bg-[#181818]" />
        <CallsResolved className="@3xl/crm:col-span-6 @7xl/crm:col-span-8 dark:bg-[#181818]" />
        <TeamActivity className="@3xl/crm:col-span-6 @7xl/crm:col-span-8 dark:bg-[#181818]" />
        <CallNatureType className="@3xl/crm:col-span-6 @7xl/crm:col-span-8 dark:bg-[#181818]" />

        {/* Case Wise Table */}
        <CallWiseTable className="col-span-full dark:bg-[#181818]" />
      </Box>
    </Box>
  );
}
