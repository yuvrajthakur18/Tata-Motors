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



export const empathyAnalysisData = [
    {
    id: '3430',
    customerStatement: 'I am really frustrated with this delay in service.',
    agentEmpatheticResponse: 'I completely understand your frustration, and I apologize for the inconvenience caused.',
    },
    {
    id: '3431',
    customerStatement: 'Where is my order? I have been waiting for so long.',
    agentEmpatheticResponse: 'I understand your concern, and I will check the status of your order right away.',
    },
    
];
