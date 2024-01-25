import InfoCard from "@/components/info-card";

let cardsInfo = [
  {
    description: "Total Balance",
    title: "12,589.00",
  },
  {
    description: "Income",
    title: "8,450.00",
  },
  {
    description: "Total Balance",
    title: "4,200.00",
  },
  {
    description: "Total Balance",
    title: "$3,939.00",
  },
];

export default function page() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4  gap-6">
      {cardsInfo.map((card) => (
        <InfoCard
          key={`cardinfo-${card.title}`}
          description={card.description}
          title={card.title}
        />
      ))}
    </div>
  );
}
