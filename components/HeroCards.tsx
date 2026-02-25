import React from 'react';

interface CardData {
  title: string;
  description: string;
}

interface HeroCardsProps {
  cards: CardData[];
}

const HeroCards: React.FC<HeroCardsProps> = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-7xl mx-auto">
      {cards.map((card, index) => (
        <div key={index} className="bg-background p-8 rounded-[20px] border border-foreground/20 text-center">
          <h4 className="font-bold text-xl mb-2 text-foreground/80">{card.title}</h4>
          <p className="text-normal text-foreground/60">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HeroCards;
