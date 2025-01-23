import { avatarIds } from '@core/utils/get-avatar';
import { getRandomArrayElement } from '@core/utils/get-random-array-element';
import dummyData from '@/app/shared/crm/dashboard/tables/data/dummy-data.json';
import { notFound } from 'next/navigation';

export const qaScoringTypes = {
  'Routine Checkup': 'Routine Checkup',
  'Pregnant Yoga': 'Pregnant Yoga',
  Consultant: 'Consultant',
  Training: 'Training',
};
export const qaScoringStatuses = {
  Scheduled: 'Scheduled',
  Waiting: 'Waiting',
};

export type Type = keyof typeof qaScoringTypes;
export type StatusType = keyof typeof qaScoringStatuses;


// export default async function CaseDetailsPage({ params }: any) {
//   const { caseId } = params as { caseId: string };

//   // Extract data for the given caseNumber
//   const caseData = dummyData.find(
//     (caseItem) => caseItem.case_overview.case_id === caseId
//   );

//   // Handle case not found
//   if (!caseData) {
//     console.error(`Case with ID ${caseId} not found.`);
//     notFound();
//   }

// Agent's Question	Customer's Response	Score Criteria	Score (1-5)	Comments
export const qaScoringData = [
    {
    id: '3430',
    agentsQuestion: 'What is your main concern?',
    customerResponse	: 'The product stopped working after two days.',
    scoreCriteria: 'Clarity of response',
    score: '4',
    comments: 'Response was clear and concise.',
    },
    {
    id: '3431',
    agentsQuestion: 'What is your main concern?',
    customerResponse	: 'The product is damaged.',
    scoreCriteria: 'Clarity of response',
    score: '1',
    comments: 'Response was not clear.',
    },
];
