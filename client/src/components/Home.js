import Card from "./Card";
import image from "../assets/bank.png";

function Home() {
  return (
    <Card
      txtcolor="white"
      bgcolor="success"
      header="BadBank APP"
      title="Welcome to my Bank"
      text="You can move around using the navigation bar."
      body={<img src={image} className="img-fluid" alt="Responsive image" />}
    />
  );
}

export default Home;
