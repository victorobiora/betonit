import GrandCarousel from "./GrandCarousel";
import classes from "./GrandPrizeComponent.module.css";

const GrandPrizeComponent: React.FC = (props) => {
  const dummyCarouselData: { amount: number; phoneNumber: string }[] = [
    {
      amount: 45000.00,
      phoneNumber: "90******43",
    },
    {
      amount: 850000.00,
      phoneNumber: "80******14",
    },
    {
      amount: 4545098.11,
      phoneNumber: "81******92",
    },
    {
      amount: 78056.87,
      phoneNumber: "90******33",
    },
    {
      amount: 6350064.33,
      phoneNumber: "80******66",
    },
    {
      amount: 2300000.00,
      phoneNumber: "91******60",
    },
    {
      amount: 7000.55,
      phoneNumber: "81******44",
    },
    {
      amount: 89000.80,
      phoneNumber: "81******57",
    },
    {
      amount: 1930460.66,
      phoneNumber: "81******55",
    },
  ];

  return (
    <section className={classes.container}>
      <div className={classes.grand_div}>Grand Prize Winners</div>
      <GrandCarousel winnerData={dummyCarouselData} />
    </section>
  );
};

export default GrandPrizeComponent;
