import { avatarIds } from '@core/utils/get-avatar';
import { getRandomArrayElement } from '@core/utils/get-random-array-element';

export const suggestedCoachingTypes = {
  'Routine Checkup': 'Routine Checkup',
  'Pregnant Yoga': 'Pregnant Yoga',
  Consultant: 'Consultant',
  Training: 'Training',
};
export const suggestedCoachingStatuses = {
  Scheduled: 'Scheduled',
  Waiting: 'Waiting',
};

export type Type = keyof typeof suggestedCoachingTypes;
export type StatusType = keyof typeof suggestedCoachingStatuses;


export const suggestedCoachingData = [
    {
    id: '3430',
    focusArea: 'focus Area',
    rowItems: 'Effective Communication',
    },
    // create new unique entries
    {
    id: '3431',
    focusArea: 'effective Communication',
    rowItems: 'Agent should ensure clearer explanations of next steps.',
    },
    {
    id: '3432',
    focusArea: 'empathy',
    rowItems: 'Acknowledged customer frustration effectively.',
    },
    {
    id: '3433',
    focusArea: 'ownership',
    rowItems: 'Take proactive ownership of customer issues.',
    },
    {
    id: '3434',
    focusArea: 'time Management Hold Time',
    rowItems: 'Minimize hold times during calls.',
    },
    {
    id: '3435',
    focusArea: 'proactive Communication',
    rowItems: 'Provide timely updates on service status.',
    },
    {
    id: '3436',
    focusArea: 'expertise Resolution Closure',
    rowItems: 'Enhance technical knowledge for faster resolutions.',
    },
    {
    id: '3437',
    focusArea: 'key Issue',
    rowItems: 'Engine performance issue not detected earlier.',
    },
    {
    id: '3438',
    focusArea: 'coaching Points',
    rowItems: 'Regularly monitor service intervals to avoid escalation.',
    },
    {
    id: '3439',
    focusArea: 'feedback For Agent',
    rowItems: 'Agent performed well but should improve on technical knowledge.',
    } 
    
  
];
