import { avatarIds } from '@core/utils/get-avatar';
import { getRandomArrayElement } from '@core/utils/get-random-array-element';

export const empathyAnalysisTypes = {
  'Routine Checkup': 'Routine Checkup',
  'Pregnant Yoga': 'Pregnant Yoga',
  Consultant: 'Consultant',
  Training: 'Training',
};
export const empathyAnalysisStatuses = {
  Scheduled: 'Scheduled',
  Waiting: 'Waiting',
};

export type Type = keyof typeof empathyAnalysisTypes;
export type StatusType = keyof typeof empathyAnalysisStatuses;
// Parameter	Description	Score (1-5)	Comments

export const agentPerformanceAnalysisData = [  
    {
    id: '3432',
    parameter: 'Communication Effectiveness',
    description: 'Clear and concise communication during the call.',
    score:'5',
    comments: 'Handled the conversation professionally.',
    },
];
