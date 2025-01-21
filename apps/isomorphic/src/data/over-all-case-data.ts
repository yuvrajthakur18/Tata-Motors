import { avatarIds } from '@core/utils/get-avatar';
import { getRandomArrayElement } from '@core/utils/get-random-array-element';

export const overAllCaseTypes = {
  'Routine Checkup': 'Routine Checkup',
  'Pregnant Yoga': 'Pregnant Yoga',
  Consultant: 'Consultant',
  Training: 'Training',
};
export const overAllCaseStatuses = {
  Scheduled: 'Scheduled',
  Waiting: 'Waiting',
};

export type Type = keyof typeof overAllCaseTypes;
export type StatusType = keyof typeof overAllCaseStatuses;

export const overAllCaseData = [
        {
        id: '1',
        field: 'case Number',
        value	: 'CN-001',
        },
        {
        id: '2',
        field: 'case Status',
        value	: 'Resolved',
        },
        {
        id: '3',
        field: 'agent Performance',
        value	: 'Below Expectations',
        },
        {
        id: '4',
        field: 'agent Performance Score',
        value	: '2.6/5',
        },
        {
        id: '5',
        field: 'agent Qa Rating',
        value	: 'Needs Improvement',
        },
        {
        id: '6',
        field: 'agent Qa Score',
        value	: '33/50 (66%)',
        },
        {
        id: '7',
        field: 'agent Action',
        value	: 'The agent\'s performance needs significant improvement, particularly in proactive communication, taking ownership, and managing the case resolution effectively. The lack of follow-up and timely updates impacted customer satisfaction.',
        },
        {
        id: '8',
        field: 'case Type',
        value	: 'Support',
        },
        {
        id: '9',
        field: 'severity',
        value	: 'High',
        },
        {
        id: '10',
        field: 'summary', 
        value	: 'The customer reported a vehicle breakdown due to high temperature, followed by coordination for assistance and a final inquiry about the repair status. The customer expressed dissatisfaction and confusion during the calls, but the issue was ultimately resolved.',
        },
        {
        id: '11',
        field: 'issue Bucket',
        value	: 'Vehicle Breakdown',
        },
        {
        id: '12',
        field: 'issue Cause',
        value	: 'Due to high temperature',
        },
        {
        id: '13',
        field: 'brand Perception',
        value	: 'Negative',
        },
        {
        id: '14',
        field: 'brand Loyalty',
        value	: 'Immediate negative impact due to poor service experience.',
        },
        {
        id: '15',
        field: 'brand Trust',
        value	: '1- Diminished trust in the brand. 2- Decreased future purchases or service requests.',
        },
        {
        id: '16',
        field: 'brand Mentions Customer',
        value	: 'No',
        },
        {
        id: '17',
        field: 'brand Mentions Agent',
        value	: '1- Can the vehicle go to a Tata Motors workshop? 2- Is it a Tata vehicle 3- Is the vehicle able to go to a Tata Motors workshop?',
        },
        {
        id: '18',
        field: 'competitor Mentions',
        value	: 'No',
        },
        {
        id: '19',
        field: 'anticipated Sentiment',
        value	: '1- Frustration leading to negative word-of-mouth. 2- Reduced brand loyalty.',
        },
        {
        id: '20',
        field: 'issues Affecting Sentiment',
        value	: '1- Recurring overheating issue, unresolved after previous repairs. 2- Replaced parts did not resolve the problem, indicating poor diagnostic or repair quality. 3- Perceived lack of actionable support or knowledgeable assistance from staff. 4- Repeatedly asking for details (location), lack of follow-up, and ineffective communication.',
        },
        {
        id: '21',
        field: 'customer Action',
        value	: '1- Likely negative word-of-mouth. 2- Possible avoidance of Tata Motors for future purchases or services.',
        },
        {
        id: '22',
        field: 'customer Nps Score',
        value	: '-',
        },
        {
        id: '23',
        field: 'vehicle Number',
        value	: 'MH 15 HH 2803',
        },
        {
        id: '24',
        field: 'vehicle Make',
        value	: 'Tata Motors',
        },
        {
        id: '25',
        field: 'vehicle Model',
        value	: 'Tigor',
        },
        {
        id: '26',
        field: 'breakdown Location',
        value	: 'Deshmanega, near Aurangabad Nasik Highway',
        },
        {
        id: '27',
        field: 'customer Name',
        value	: 'Sagar Ramesh Boradesh',
        },
        {
        id: '28',
        field: 'agents Involved',

        value	: '1 - Bharati (Support) 2 - Deepak (Feedback)',
        },    
        {
        id: '29',
        field: 'technicians Involved',
        value: '1 - Shubham',
    },
    {
        id: '30',
        field: 'total Case Duration',
        value: '19 min 7 sec',
    },
    {
        id: '31',
        field: 'total Hold Time',
        value: '6 min 13 sec',
    },
    {
        id: '32',
        field: 'emotional Trend',
        value: 'Start - Frustrated, Mid - Disappointed, End - Neutral',
    },
    {
        id: '33',
        field: 'total Calls',
        value: '3',
    },
    {
        id: '34',
        field: 'emotional Analysis',
        value: 'see: R42, S42',
    },
    {
        id: '35',
        field: 'direction',
        value: 'Inbound / Outbound',
    },
    {
        id: '36',
        field: 'transcription',
        value: 'Details of the conversation between the agent and the customer (not provided in the dataset).',
    },
    {
        id: '37',
        field: 'participants Count',
        value: '3 (Customer, Agent, Technician)',
    },
    {
        id: '38',
        field: 'call Duration',
        value: '15 min',
    },
    {
        id: '39',
        field: 'call Hold Time',
        value: '4 min',
    },
    {
        id: '40',
        field: 'talk To Listen Ratio',
        value: '23:37 (In a minute, agent is speaking 23 words and listening to 37 words)',
    },
    {
        id: '41',
        field: 'customer Emotional Tone',
        value: 'Frustrated, Confused, Neutral',
    },
    {
        id: '42',
        field: 'empathy Detection',
        value: 'The agent empathized by acknowledging the customer’s frustration, apologizing for the inconvenience, and assuring follow-up actions.',
    },
    {
        id: '43',
        field: 'Agent\'s Question',
        value: 'Can you share the exact location of the breakdown?',
    },
    {
        id: '44',
        field: 'Customer\'s Response',
        value: 'Deshmanega, near Aurangabad Nasik Highway.',
    },
    {
        id: '45',
        field: 'Score Criteria',
        value: '1-5 scale based on problem resolution and communication.',
    },
    {
        id: '46',
        field: 'Score (1-5)',
        value: '3',
    },
    {
        id: '47',
        field: 'Comments',
        value: 'Agent needs improvement in communication and proactive handling of the case.',
    }
    
];
