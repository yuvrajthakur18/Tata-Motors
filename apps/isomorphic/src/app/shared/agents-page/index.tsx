'use client';

import { Box } from 'rizzui/box';
import CRMStats from '../crm/dashboard/crm-stats';
import IndividualAgentData from '../crm/dashboard/tables/individual-agent-data';
import AgentPerformance from '../crm/dashboard/agent-performance';

export default function AgentsDashboard() {

  const agentData = [
    {
      name: 'Agent A',
      totalCases: 50,
      callsHandled: 45,
      casesSolved: 40,
      duration: '10h',
      holdTime: '2m',
      talkToListen: '3:1',
      interruptions: 5,
      efficiency: '90%',
      brandMentions: 10,
      overallPerformance: 'Excellent'
    },
    {
      name: 'Agent B',
      totalCases: 60,
      callsHandled: 55,
      casesSolved: 50,
      duration: '8h',
      holdTime: '3m',
      talkToListen: '2:1',
      interruptions: 3,
      efficiency: '85%',
      brandMentions: 15,
      overallPerformance: 'Good'
    },
    {
      name: 'Agent C',
      totalCases: 40,
      callsHandled: 35,
      casesSolved: 30,
      duration: '9h',
      holdTime: '1m',
      talkToListen: '4:1',
      interruptions: 8,
      efficiency: '75%',
      brandMentions: 7,
      overallPerformance: 'Average'
    },
    {
      name: 'Agent D',
      totalCases: 70,
      callsHandled: 68,
      casesSolved: 65,
      duration: '11h',
      holdTime: '4m',
      talkToListen: '1:1',
      interruptions: 2,
      efficiency: '95%',
      brandMentions: 20,
      overallPerformance: 'Excellent'
    },
    {
      name: 'Agent E',
      totalCases: 55,
      callsHandled: 50,
      casesSolved: 48,
      duration: '7h',
      holdTime: '5m',
      talkToListen: '3:2',
      interruptions: 4,
      efficiency: '88%',
      brandMentions: 12,
      overallPerformance: 'Good'
    },
    {
      name: 'Agent F',
      totalCases: 30,
      callsHandled: 28,
      casesSolved: 25,
      duration: '6h',
      holdTime: '2m',
      talkToListen: '2:1',
      interruptions: 6,
      efficiency: '82%',
      brandMentions: 5,
      overallPerformance: 'Average'
    },
    {
      name: 'Agent G',
      totalCases: 80,
      callsHandled: 78,
      casesSolved: 75,
      duration: '12h',
      holdTime: '6m',
      talkToListen: '5:1',
      interruptions: 1,
      efficiency: '98%',
      brandMentions: 25,
      overallPerformance: 'Excellent'
    },
    {
      name: 'Agent H',
      totalCases: 45,
      callsHandled: 40,
      casesSolved: 35,
      duration: '8h',
      holdTime: '3m',
      talkToListen: '4:3',
      interruptions: 7,
      efficiency: '80%',
      brandMentions: 10,
      overallPerformance: 'Good'
    },
    {
      name: 'Agent I',
      totalCases: 25,
      callsHandled: 20,
      casesSolved: 18,
      duration: '5h',
      holdTime: '1m',
      talkToListen: '1:1',
      interruptions: 10,
      efficiency: '72%',
      brandMentions: 2,
      overallPerformance: 'Below Average'
    },
    {
      name: 'Agent J',
      totalCases: 100,
      callsHandled: 95,
      casesSolved: 92,
      duration: '14h',
      holdTime: '7m',
      talkToListen: '3:2',
      interruptions: 0,
      efficiency: '99%',
      brandMentions: 30,
      overallPerformance: 'Outstanding'
    },
    {
      name: 'Agent K',
      totalCases: 65,
      callsHandled: 60,
      casesSolved: 58,
      duration: '9h',
      holdTime: '2m',
      talkToListen: '2:3',
      interruptions: 3,
      efficiency: '87%',
      brandMentions: 18,
      overallPerformance: 'Good'
    },
    {
      name: 'Agent L',
      totalCases: 20,
      callsHandled: 18,
      casesSolved: 15,
      duration: '4h',
      holdTime: '1m',
      talkToListen: '1:2',
      interruptions: 12,
      efficiency: '65%',
      brandMentions: 4,
      overallPerformance: 'Below Average'
    },
    {
      name: 'Agent M',
      totalCases: 75,
      callsHandled: 70,
      casesSolved: 68,
      duration: '13h',
      holdTime: '3m',
      talkToListen: '4:1',
      interruptions: 2,
      efficiency: '93%',
      brandMentions: 22,
      overallPerformance: 'Excellent'
    },
    {
      name: 'Agent N',
      totalCases: 35,
      callsHandled: 30,
      casesSolved: 28,
      duration: '6h',
      holdTime: '2m',
      talkToListen: '3:2',
      interruptions: 9,
      efficiency: '78%',
      brandMentions: 8,
      overallPerformance: 'Average'
    },
    {
      name: 'Agent O',
      totalCases: 55,
      callsHandled: 50,
      casesSolved: 48,
      duration: '8h',
      holdTime: '4m',
      talkToListen: '5:3',
      interruptions: 6,
      efficiency: '86%',
      brandMentions: 14,
      overallPerformance: 'Good'
    }
  ];
  

  return (
    <Box className="@container/crm">
      <Box className="grid grid-cols-1 gap-6 @3xl/crm:grid-cols-12 @7xl/crm:gap-7 3xl:gap-8">
        {/* CRMStats Cards */}
        <CRMStats className="@3xl/crm:col-span-full" />

        

        {/* Case Wise Table */}
        <IndividualAgentData className="col-span-full dark:bg-[#181818]" />
        
        <AgentPerformance data={agentData} />
      </Box>
    </Box>
  );
}
