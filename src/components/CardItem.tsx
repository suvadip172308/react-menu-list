import { CardType, type StaticCardProps } from "../model/card.model";
import { CardItemNavigable } from "./CardItemNavigable";

export interface CardItemProps {
  cardType: CardType;
  className?: string;
  cardSpecificProps: StaticCardProps;
}

/* 
  NOTE: 
  I made it as generic component, but if you want you can make specific compoent at this level
  Also you can creat other compoent like 'CardItem' and use it instead of 'CardItem', we have that much
  flexibility here
 */
export const CardItem = ({
  className,
  cardType,
  cardSpecificProps,
}: CardItemProps) => {
  const renderCard = () => {
    switch (cardType) {
      case CardType.NAVIGABLE:
        return <CardItemNavigable {...cardSpecificProps} />;
      case CardType.SWITCHABLE:
        return <></>;
      case CardType.CALANDER_BASED:
        return <></>;
      case CardType.STATIC:
        return <></>;
      default:
        return;
    }
  };

  return (
    <div
      className={`flex w-full h-20 px-8 bg-gray-100 border-b border-gray-300 hover:bg-gray-300 ${className}`}
    >
      {renderCard()}
    </div>
  );
};
