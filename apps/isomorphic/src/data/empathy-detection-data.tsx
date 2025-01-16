export type EmpathyDetectionDataType = (typeof empathyDetectionData)[number];

export const empathyDetectionData = [
  {
    id: '401',
    agentName: 'Agent Smith',
    customerName: 'John Doe',
    empathyDetection: 'Detected',
    yes: 5,
    no: 1,
    empathyInstances: [
      { instance: 'Acknowledged Issue', count: 3 },
      { instance: 'Expressed Sympathy', count: 2 },
    ],
  },
  {
    id: '402',
    agentName: 'Agent Taylor',
    customerName: 'Jane Smith',
    empathyDetection: 'Not Detected',
    yes: 2,
    no: 3,
    empathyInstances: [
      { instance: 'Acknowledged Issue', count: 1 },
      { instance: 'Expressed Sympathy', count: 1 },
    ],
  },
  {
    id: '403',
    agentName: 'Agent Lee',
    customerName: 'Alice Johnson',
    empathyDetection: 'Detected',
    yes: 4,
    no: 0,
    empathyInstances: [
      { instance: 'Acknowledged Issue', count: 2 },
      { instance: 'Expressed Sympathy', count: 2 },
    ],
  },
  {
    id: '404',
    agentName: 'Agent Clark',
    customerName: 'Bob Brown',
    empathyDetection: 'Detected',
    yes: 6,
    no: 1,
    empathyInstances: [
      { instance: 'Acknowledged Issue', count: 4 },
      { instance: 'Expressed Sympathy', count: 2 },
    ],
  },
  {
    id: '405',
    agentName: 'Agent Miller',
    customerName: 'Chris Green',
    empathyDetection: 'Not Detected',
    yes: 1,
    no: 4,
    empathyInstances: [
      { instance: 'Acknowledged Issue', count: 1 },
      { instance: 'Expressed Sympathy', count: 0 },
    ],
  },
];
