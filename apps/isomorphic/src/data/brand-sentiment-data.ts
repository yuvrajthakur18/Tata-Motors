import { avatarIds } from '@core/utils/get-avatar';
import { getRandomArrayElement } from '@core/utils/get-random-array-element';

export const brandSentimentTypes = {
  'Routine Checkup': 'Routine Checkup',
  'Pregnant Yoga': 'Pregnant Yoga',
  Consultant: 'Consultant',
  Training: 'Training',
};
export const brandSentimentStatuses = {
  Scheduled: 'Scheduled',
  Waiting: 'Waiting',
};

export type Type = keyof typeof brandSentimentTypes;
export type StatusType = keyof typeof brandSentimentStatuses;

// Category	Row Items
// Product	Smartphone XYZ
// Workshop	N/A
// People	N/A
// Process	N/A
// Indicator	Contains both Negative and Positive
// Contains both Negative and Positive	Yes
// Frequency of Frustration	Moderate
// Number on Negative	12
// Number on Positive	18
// Analysis	Praised for its sleek design but criticized for short battery life.
// Analysis Given Only on Negative Text	Customers often mentioned dissatisfaction with battery performance.

// Agent's Question	Customer's Response	Score Criteria	Score (1-5)	Comments
export const brandSentimentData = [
    {
    id: '3430',
    category: 'Product',
    rowItems: 'Smartphone XYZ',
    },
    {
    id: '3431',
    category: 'Workshop',
    rowItems: 'N/A',
    },
    {
    id: '3432',
    category: 'People',
    rowItems: 'N/A',
    },
    {
    id: '3433',
    category: 'Process',
    rowItems: 'N/A',
    },
    {
    id: '3434',
    category: 'Indicator',
    rowItems: 'Contains both Negative and Positive.',
    },
    {
    id: '3435',
    category: 'Contains both Negative and Positive',
    rowItems: 'Yes',
    },
    {
    id: '3436',
    category: 'Frequency of Frustration',
    rowItems: 'Moderate',
    },
    {
    id: '3437',
    category: 'Number on Negative',
    rowItems: '12',
    },
    {
    id: '3438',
    category: 'Number on Positive',
    rowItems: '18',
    },
    {
    id: '3439',
    category: 'Analysis',
    rowItems: 'Praised for its sleek design but criticized for short battery life',
    },
    {
    id: '3440',
    category: 'Analysis Given Only on Negative Text',
    rowItems: 'Customers often mentioned dissatisfaction with battery performance',
    },

];
