'use client';

import { Box, Table } from 'rizzui';

const AgentPerformance = ({ data }: { data: any[] }) => {
  // Filter logic based on `percent`
  const totalAgents = data.length;
  const sortedData = [...data].sort((a, b) => b.percent - a.percent); // Sort by performance percent descending
  const topAgents = sortedData.slice(0, Math.ceil(totalAgents * 0.25));
  const bottomAgents = sortedData.slice(Math.floor(totalAgents * 0.75), totalAgents);
  const mediocreAgents = sortedData.slice(
    Math.ceil(totalAgents * 0.25),
    Math.floor(totalAgents * 0.75)
  );

  // Render card function
  const renderCard = (title: string, agents: any[], borderColor: string) => (
    <Box
      className={`flex-1 rounded-lg p-4 shadow-md`}
      style={{
        minWidth: '350px',
        maxWidth: '33%',
        border: `2px solid ${borderColor}`,
        color: '#333',
        backgroundColor: '#fff',
      }}
    >
      <h3 className="mb-4 text-lg font-semibold">{title}</h3>
      <div
        className="max-h-96 overflow-auto"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: `${borderColor} #f8f9fa`,
        }}
      >
        <style>{`
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
        <Table className="min-w-[600px]">
          <thead>
            <tr>
              <th className="px-2 py-2 text-left font-medium">Agent Name</th>
              <th className="px-2 py-2 text-left font-medium">Percent</th>
              <th className="px-2 py-2 text-left font-medium">Performance Score</th>
              <th className="px-2 py-2 text-left font-medium">Rating</th>
            </tr>
          </thead>
          <tbody>
            {agents.map((agent, index) => (
              <tr key={index}>
                <td className="px-2 py-1">{agent.agent}</td>
                <td className="px-2 py-1">{agent.percent}%</td>
                <td className="px-2 py-1">{agent.performance}</td>
                <td className="px-2 py-1">{agent.rating}</td>
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
        )}{' '}
        {/* Orange */}
        {renderCard('Bottom 25% Agents', bottomAgents, '#eed4d4')} {/* Red */}
      </div>
    </Box>
  );
};

export default AgentPerformance;
