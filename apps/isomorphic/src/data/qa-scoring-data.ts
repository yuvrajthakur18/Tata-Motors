import { avatarIds } from '@core/utils/get-avatar';
import { getRandomArrayElement } from '@core/utils/get-random-array-element';

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
