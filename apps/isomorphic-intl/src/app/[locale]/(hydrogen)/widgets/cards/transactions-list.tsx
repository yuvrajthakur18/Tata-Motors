import { Button } from "rizzui/button";
import { Title, Text } from "rizzui/typography";
import cn from "@core/utils/class-names";
import WidgetCard from "@core/components/cards/widget-card";
import { transactions } from "@/data/transactions-data";
import { useTranslations } from "next-intl";

export default function TransactionsList() {
  const t = useTranslations("common");

  return (
    <WidgetCard
      title={t("text-transactions")}
      titleClassName="leading-none"
      headerClassName="mb-3 lg:mb-4"
      action={
        <Button
          variant="outline"
          size="sm"
          className="text-sm"
        >
          {t("text-view-all")}
        </Button>
      }
    >
      <div className="grid grid-cols-1 gap-5">
        {transactions.map((item) => (
          <div
            key={item.name}
            className="flex items-center"
          >
            <div
              className={cn(
                "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded",
                item.fill,
                item.color
              )}
            >
              {item.icon}
            </div>
            <div className="flex w-[calc(100%-44px)] items-center justify-between gap-2 ps-3.5">
              <div className="">
                <Title
                  as="h4"
                  className="mb-1 text-sm font-semibold"
                >
                  {item.name}
                </Title>
                <Text className="text-gray-500">{item.transactions} transactions</Text>
              </div>
              <Text
                as="span"
                className="font-lexend text-gray-900 dark:text-gray-700"
              >
                {item.price}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </WidgetCard>
  );
}
