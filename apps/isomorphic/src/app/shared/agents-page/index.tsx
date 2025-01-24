'use client';

import { Box } from 'rizzui/box';
import CRMStats from '../crm/dashboard/crm-stats';
import IndividualAgentData from '../crm/dashboard/tables/individual-agent-data';
import AgentPerformance from '../crm/dashboard/agent-performance';
import SalesPerformance from '../crm/dashboard/sales-performance';
import dummydata from '@/app/shared/crm/dashboard/tables/data/agent_performance.json';
import NPS from '../crm/dashboard/nps';

export default function AgentsDashboard() {
  // const agentData = [
  //   {
  //     agent: 'Anshali Bhaskar',
  //     performance: 4.05,
  //     percent: 97.6,
  //     rating: 'Excellent',
  //   },
  //   {
  //     agent: 'Anshali Bhaskar',
  //     performance: 4.05,
  //     percent: 92.8,
  //     rating: 'Excellent',
  //   },
  //   { agent: 'Parveen', performance: 4.05, percent: 87.2, rating: 'Good' },
  //   {
  //     agent: 'Kapil',
  //     performance: 4.05,
  //     percent: 72.0,
  //     rating: 'Needs Improvement',
  //   },
  //   {
  //     agent: 'Priya Bhaskar',
  //     performance: 4.05,
  //     percent: 85.6,
  //     rating: 'Good',
  //   },
  //   {
  //     agent: 'Bachchu Digels',
  //     performance: 4.05,
  //     percent: 94.4,
  //     rating: 'Excellent',
  //   },
  //   { agent: 'name1', performance: 4.05, percent: 84.0, rating: 'Good' },
  //   { agent: 'jayesh', performance: 4.0, percent: 91.2, rating: 'Excellent' },
  //   { agent: 'Bharti', performance: 4.05, percent: 87.2, rating: 'Good' },
  //   { agent: 'Bharti', performance: 4.05, percent: 96.0, rating: 'Excellent' },
  //   { agent: 'jayesh', performance: 4.05, percent: 80.0, rating: 'Good' },
  //   { agent: 'Mr. Neela', performance: 4.05, percent: 89.6, rating: 'Good' },
  //   { agent: 'Rada', performance: 4.05, percent: 88.8, rating: 'Good' },
  //   { agent: 'Tata Muthus', performance: 4.05, percent: 82.4, rating: 'Good' },
  //   {
  //     agent: 'Rajesh Lokhande',
  //     performance: 3.9,
  //     percent: 67.2,
  //     rating: 'Needs Improvement',
  //   },
  //   { agent: 'Rada', performance: 4.05, percent: 80.8, rating: 'Good' },
  //   { agent: 'Neelim', performance: 3.75, percent: 83.2, rating: 'Good' },
  //   {
  //     agent: 'Rajesh Lokhande',
  //     performance: 4.05,
  //     percent: 55.2,
  //     rating: 'Poor',
  //   },
  //   { agent: 'jayesh', performance: 4.05, percent: 80.8, rating: 'Good' },
  //   {
  //     agent: 'Santosh Singh',
  //     performance: 4.05,
  //     percent: 92.0,
  //     rating: 'Excellent',
  //   },
  //   {
  //     agent: 'Maruti Parashyambur',
  //     performance: 4.05,
  //     percent: 76.8,
  //     rating: 'Good',
  //   },
  //   { agent: 'Shweta Radha', performance: 4.25, percent: 84.0, rating: 'Good' },
  //   { agent: 'Shweta', performance: 4.05, percent: 77.6, rating: 'Good' },
  //   { agent: 'Shweta', performance: 4.05, percent: 52.8, rating: 'Poor' },
  //   { agent: 'Shweta', performance: 3.9, percent: 90.4, rating: 'Excellent' },
  //   {
  //     agent: 'Norman Nirmal',
  //     performance: 4.05,
  //     percent: 76.0,
  //     rating: 'Good',
  //   },
  //   { agent: 'Harsha', performance: 4.05, percent: 84.0, rating: 'Good' },
  //   { agent: 'Pintu', performance: 4.05, percent: 83.2, rating: 'Good' },
  //   { agent: 'jayesh', performance: 4.0, percent: 91.2, rating: 'Excellent' },
  //   { agent: 'Bharti', performance: 4.05, percent: 87.2, rating: 'Good' },
  //   { agent: 'Bharti', performance: 4.05, percent: 96.0, rating: 'Excellent' },
  //   { agent: 'jayesh', performance: 4.05, percent: 80.0, rating: 'Good' },
  //   { agent: 'Mr. Neela', performance: 4.05, percent: 89.6, rating: 'Good' },
  //   { agent: 'Rada', performance: 4.05, percent: 88.8, rating: 'Good' },
  //   { agent: 'Tata Muthus', performance: 4.05, percent: 82.4, rating: 'Good' },
  //   {
  //     agent: 'Rajesh Lokhande',
  //     performance: 3.9,
  //     percent: 67.2,
  //     rating: 'Needs Improvement',
  //   },
  //   { agent: 'Rada', performance: 4.05, percent: 80.8, rating: 'Good' },
  //   { agent: 'Neelim', performance: 3.75, percent: 83.2, rating: 'Good' },
  //   {
  //     agent: 'Rajesh Lokhande',
  //     performance: 4.05,
  //     percent: 55.2,
  //     rating: 'Poor',
  //   },
  //   { agent: 'jayesh', performance: 4.05, percent: 80.8, rating: 'Good' },
  //   {
  //     agent: 'Santosh Singh',
  //     performance: 4.05,
  //     percent: 92.0,
  //     rating: 'Excellent',
  //   },
  //   {
  //     agent: 'Maruti Parashyambur',
  //     performance: 4.05,
  //     percent: 76.8,
  //     rating: 'Good',
  //   },
  //   { agent: 'Shweta Radha', performance: 4.25, percent: 84.0, rating: 'Good' },
  //   { agent: 'Shweta', performance: 4.05, percent: 77.6, rating: 'Good' },
  //   { agent: 'Shweta', performance: 4.05, percent: 52.8, rating: 'Poor' },
  //   { agent: 'Shweta', performance: 3.9, percent: 90.4, rating: 'Excellent' },
  //   {
  //     agent: 'Norman Nirmal',
  //     performance: 4.05,
  //     percent: 76.0,
  //     rating: 'Good',
  //   },
  //   { agent: 'Harsha', performance: 4.05, percent: 84.0, rating: 'Good' },
  //   { agent: 'Pintu', performance: 4.05, percent: 83.2, rating: 'Good' },
  //   { agent: 'Priya', performance: 4.05, percent: 78.4, rating: 'Good' },
  //   {
  //     agent: 'Shruthi Radha',
  //     performance: 4.05,
  //     percent: 82.4,
  //     rating: 'Good',
  //   },
  //   {
  //     agent: 'Rajesh Lokhande',
  //     performance: 4.05,
  //     percent: 91.2,
  //     rating: 'Excellent',
  //   },
  //   { agent: 'Rada', performance: 3.45, percent: 58.4, rating: 'Poor' },
  //   {
  //     agent: 'Tata Mota',
  //     performance: 4.05,
  //     percent: 91.2,
  //     rating: 'Excellent',
  //   },
  //   {
  //     agent: 'Rajesh Lokhande',
  //     performance: 4.55,
  //     percent: 60.0,
  //     rating: 'Needs Improvement',
  //   },
  //   { agent: 'Rada', performance: 4.05, percent: 84.0, rating: 'Good' },
  //   {
  //     agent: 'jayesh',
  //     performance: 4.05,
  //     percent: 66.4,
  //     rating: 'Needs Improvement',
  //   },
  //   {
  //     agent: 'Rajesh Lokhande',
  //     performance: 3.75,
  //     percent: 66.4,
  //     rating: 'Needs Improvement',
  //   },
  //   { agent: 'jayesh', performance: 3.55, percent: 80.0, rating: 'Good' },
  // ];

  // agentData
  // map agent data from import dummyData from '@/app/shared/crm/dashboard/tables/data/agent_performance.json';
  // agentData =
  const transformData = (data: typeof dummydata) => {
    return data.map((item) => {
      const agent = item.agent_name; // Assuming you want the first call details
      const percent = item.agent_qa_score_percentage; // Assuming you want the first call details
      const rating = item.agent_qa_rating; // Assuming you want the first call details
      const performance = item.overall_performance_score;

      return {
        agent: agent || 'N/A',
        percent: percent || 'N/A',
        performance: performance || 'N/A',
        rating: rating || 'N/A',
      };
    });
  };
  const agentData = transformData(dummydata);

  return (
    <Box className="@container/crm">
      <Box className="grid grid-cols-1 gap-6 @3xl/crm:grid-cols-12 @7xl/crm:gap-7 3xl:gap-8">
        {/* CRMStats Cards */}
        <CRMStats className="@3xl/crm:col-span-full" />

        <AgentPerformance data={agentData} />

        {/* Case Wise Table */}
        <IndividualAgentData className="col-span-full dark:bg-[#181818]" />

        <SalesPerformance className="@3xl/crm:col-span-full @7xl/crm:col-span-4 dark:bg-[#181818]" />
        <NPS className="@3xl/crm:col-span-6 @7xl/crm:col-span-8 dark:bg-[#181818]" />
      </Box>
    </Box>
  );
}
