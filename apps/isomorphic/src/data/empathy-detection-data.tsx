export type EmpathyDetectionDataType = (typeof empathyDetectionData)[number];

export const empathyDetectionData = [
  {
    id: '1-195639166166',
    agentName: 'Konal Rata Mukherjee',
    customerName: 'Sajay Singh',
    empathyDetection: 'Detected',
    yes: 5,
    no: 1,
    empathyInstances: [
      { instance: 'Acknowledged Issue', count: 3 },
      { instance: 'Expressed Sympathy', count: 2 },
    ],
  },
  {
    id: '1-195639958052',
    agentName: 'Jayesh',
    customerName: 'Naseem Khan',
    empathyDetection: 'Detected',
    yes: 4,
    no: 1,
    empathyInstances: [
      { instance: 'Acknowledged Issue', count: 1 },
      { instance: 'Expressed Sympathy', count: 1 },
    ],
  },{
    id: '1-195640123456',
    agentName: 'Anjali Sharma',
    customerName: 'Rahul Verma',
    empathyDetection: 'Detected',
    yes: 6,
    no: 0,
    empathyInstances: [
      { instance: 'Acknowledged Issue', count: 4 },
      { instance: 'Expressed Sympathy', count: 2 }
    ]
  },
  {
    id: '1-195640987654',
    agentName: 'Suman Roy',
    customerName: 'Amit Kulkarni',
    empathyDetection: 'Not Detected',
    yes: 2,
    no: 3,
    empathyInstances: [
      { instance: 'Acknowledged Issue', count: 1 },
      { instance: 'Provided Reassurance', count: 1 }
    ]
  },
  {
    id: '1-195641111223',
    agentName: 'Priya Nair',
    customerName: 'Meena Gupta',
    empathyDetection: 'Detected',
    yes: 5,
    no: 2,
    empathyInstances: [
      { instance: 'Acknowledged Issue', count: 3 },
      { instance: 'Expressed Understanding', count: 2 }
    ]
  },
  
];
