'use client';

import { Box, Table } from 'rizzui';

const AgentPerformance = ({ data }: { data: any[] }) => {
  // Filter logic
  const totalAgents = data.length;
  const topAgents = data.slice(0, Math.ceil(totalAgents * 0.25));
  const bottomAgents = data.slice(
    Math.floor(totalAgents * 0.75),
    totalAgents
  );
  const mediocreAgents = data.slice(
    Math.ceil(totalAgents * 0.25),
    Math.floor(totalAgents * 0.75)
  );

  // Render card function
  const renderCard = (title: string, agents: any[], borderColor: string) => (
    <Box
      className={`flex-1 rounded-lg shadow-md p-4`}
      style={{
        minWidth: '350px',
        maxWidth: '33%',
        border: `2px solid ${borderColor}`,
        color: '#333',
        backgroundColor: '#fff',
      }}
    >
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div
        className="overflow-auto max-h-96"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: `${borderColor} #f8f9fa`,
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            width: 1px;
          }
          div::-webkit-scrollbar-thumb {
            background-color: ${borderColor};
            border-radius: 1px;
          }
          div::-webkit-scrollbar-track {
            background-color:rgb(250, 250, 248);
          }
        `}</style>
        <Table className="min-w-[900px]">
          <thead>
            <tr>
              <th className="px-2 py-2 font-medium text-left">Agent Name</th>
              <th className="px-2 py-2 font-medium text-left">Total Cases Allotted</th>
              <th className="px-2 py-2 font-medium text-left">Calls Handled</th>
              <th className="px-2 py-2 font-medium text-left">Cases Solved</th>
              <th className="px-2 py-2 font-medium text-left">Duration</th>
              <th className="px-2 py-2 font-medium text-left">Hold Time</th>
              <th className="px-2 py-2 font-medium text-left">Talk to Listen Ratio</th>
              <th className="px-2 py-2 font-medium text-left">Interruptions Count</th>
              <th className="px-2 py-2 font-medium text-left">Agent Efficiency</th>
              <th className="px-2 py-2 font-medium text-left">Brand Mentions</th>
              <th className="px-2 py-2 font-medium text-left">Agent Overall Performance</th>
            </tr>
          </thead>
          <tbody>
            {agents.map((agent, index) => (
              <tr key={index}>
                <td className="px-2 py-1">{agent.name}</td>
                <td className="px-2 py-1">{agent.totalCases}</td>
                <td className="px-2 py-1">{agent.callsHandled}</td>
                <td className="px-2 py-1">{agent.casesSolved}</td>
                <td className="px-2 py-1">{agent.duration}</td>
                <td className="px-2 py-1">{agent.holdTime}</td>
                <td className="px-2 py-1">{agent.talkToListen}</td>
                <td className="px-2 py-1">{agent.interruptions}</td>
                <td className="px-2 py-1">{agent.efficiency}</td>
                <td className="px-2 py-1">{agent.brandMentions}</td>
                <td className="px-2 py-1">{agent.overallPerformance}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Box>
  );

  return (
    <Box className="p-4">
      <div className="flex gap-4">
        {renderCard('Top 25% Agents', topAgents, '#d9e6ce')} {/* Green */}
        {renderCard(
          'Mediocre Performance Agents',
          mediocreAgents,
          '#fbf1d3'
        )} {/* Orange */}
        {renderCard('Bottom 25% Agents', bottomAgents, '#eed4d4')} {/* Red */}
      </div>
    </Box>
  );
};

export default AgentPerformance;
