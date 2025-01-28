import { Box } from 'rizzui/box';
import CRMStats from './crm-stats';
import TeamActivity from './team-activity';
import CustomerList from './customer-list';
import RevenueGrowth from './revenue-growth';
import SalesAnalytics from './sales-analytics';
import RatingAnalytics from './rating-analytics';
import ReportAnalytics from './report-analytics';
import SalesPerformance from './sales-performance';
import CustomerByCountries from './customer-by-countries';
import CustomerGrowthSummary from './customer-growth-summary';
import CustomerAreaByPlatform from './customer-area-by-platform';
import CallTypes from './call-types';
import EmotionalTone from './emotional-tone';
import BrandSentiment from './brand-sentiment';
import SentimentTrend from './sentiment-trend';
import Duration from './duration';
import AgentCoaching from './agent-coaching';
import AgentPersonality from './agent-personalities';
import CaseWiseTable from './tables/case-wise-table';
import CallWiseTable from './tables/call-wise-table';
import IndividualAgentData from './tables/individual-agent-data';
import IndividualCustomerData from './tables/individual-cust-data';
import Technician from './tables/technician-table';
import CustomerSentiment from './tables/customer-sentiment';
import AgentToneAnalysis from './tables/agent-tone-analysis';
import CustomerTrends from './tables/customer-trends';
import EmpathyDetection from './tables/empathy-detection';
import ProbingQuestions from './tables/probing-questions-2';
import BrandSentimentAnalysis from './tables/brand-sentiment-analysis';
import AgentThreshold from './tables/agent-threshold';
import AgentPerformanceAnalysis from './tables/agent-performance-analysis';
import FeedbackSuggestion from './tables/feedback-suggestions';
import PlanOfAction from './tables/plan-of-action';

export default function CrmDashboard() {
  return (
    <Box className="@container/crm">
      <Box className="grid grid-cols-1 gap-6 @3xl/crm:grid-cols-12 @7xl/crm:gap-7 3xl:gap-8">
        <CRMStats className="@3xl/crm:col-span-full" />
        <CustomerGrowthSummary className="@3xl/crm:col-span-6 @7xl/crm:col-span-8 dark:bg-[#181818]" />
        <SalesPerformance className="@3xl/crm:col-span-6 @7xl/crm:col-span-4 dark:bg-[#181818]" />
        <SalesAnalytics className="@3xl/crm:col-span-6 @7xl/crm:col-span-4 dark:bg-[#181818]" />
        <CustomerAreaByPlatform className="@3xl/crm:col-span-6 @7xl/crm:col-span-4 dark:bg-[#181818]" />
        {/* <CustomerList className="@3xl/crm:col-span-full @7xl/crm:col-span-8 dark:bg-[#181818]" /> */}
        {/* <CustomerByCountries className="@3xl/crm:col-span-full @7xl/crm:col-span-8 dark:bg-[#181818]" /> */}
        <BrandSentiment className="@3xl/crm:col-span-6 @7xl/crm:col-span-4 dark:bg-[#181818]" />
        <TeamActivity className="@3xl/crm:col-span-6 @7xl/crm:col-span-4 dark:bg-[#181818]" />
        {/* <CallTypes className="@3xl/crm:col-span-6 @7xl/crm:col-span-4 dark:bg-[#181818]" />
        <EmotionalTone className="@3xl/crm:col-span-6 @7xl/crm:col-span-4 dark:bg-[#181818]" /> */}
        {/* <Duration className="@3xl/crm:col-span-6 @7xl/crm:col-span-4 dark:bg-[#181818]" /> */}
        <AgentCoaching className="@3xl/crm:col-span-6 @7xl/crm:col-span-4 dark:bg-[#181818]" />
        <AgentPersonality className="@3xl/crm:col-span-6 @7xl/crm:col-span-4 dark:bg-[#181818]" />
        {/* <RevenueGrowth className="@3xl/crm:col-span-full @7xl/crm:col-span-8 dark:bg-[#181818]" /> */}
        {/* <SentimentTrend className="@3xl/crm:col-span-full @7xl/crm:col-span-8 dark:bg-[#181818]" /> */}
        {/* <ReportAnalytics className="@3xl/crm:col-span-full @7xl/crm:col-span-8 dark:bg-[#181818]" /> */}
        {/* <RatingAnalytics className="@3xl/crm:col-span-full @5xl/crm:col-span-4 dark:bg-[#181818]" /> */}
        {/* Tables section */}
        <CaseWiseTable className="@3xl/crm:col-span-full @7xl/crm:col-span-8 dark:bg-[#181818]" />
        <CallWiseTable className="@3xl/crm:col-span-full @7xl/crm:col-span-8 dark:bg-[#181818]" />
        <IndividualAgentData className="@3xl/crm:col-span-full @7xl/crm:col-span-8 dark:bg-[#181818]" />
        {/* <IndividualCustomerData className="@3xl/crm:col-span-full @7xl/crm:col-span-8 dark:bg-[#181818]" /> */}
        {/* <Technician className="@3xl/crm:col-span-full @7xl/crm:col-span-8 dark:bg-[#181818]" /> */}
        <CustomerSentiment className="@3xl/crm:col-span-full @7xl/crm:col-span-8 dark:bg-[#181818]" />
        {/* <AgentToneAnalysis className="@3xl/crm:col-span-full @7xl/crm:col-span-8 dark:bg-[#181818]" /> */}
        <CustomerTrends className="@3xl/crm:col-span-full @7xl/crm:col-span-8 dark:bg-[#181818]" />
        <EmpathyDetection className="@3xl/crm:col-span-full @7xl/crm:col-span-8 dark:bg-[#181818]" />
        <ProbingQuestions className="@3xl/crm:col-span-full @7xl/crm:col-span-8 dark:bg-[#181818]" />
        {/* <BrandSentimentAnalysis className="@3xl/crm:col-span-full @7xl/crm:col-span-8 dark:bg-[#181818]" /> */}
        <AgentPerformanceAnalysis className="@3xl/crm:col-span-full @7xl/crm:col-span-8 dark:bg-[#181818]" />
        {/* <AgentThreshold className="@3xl/crm:col-span-full @7xl/crm:col-span-8 dark:bg-[#181818]" /> */}
        <FeedbackSuggestion className="@3xl/crm:col-span-full @7xl/crm:col-span-8 dark:bg-[#181818]" />
        <PlanOfAction className="@3xl/crm:col-span-full @7xl/crm:col-span-8 dark:bg-[#181818]" />
      </Box>
    </Box>
  );
}
