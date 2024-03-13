import Alert from "../components/Alert";
import AccordionList from "../components/ui/accordion";

export default function About() {
  return (
    <div>
      <h1>Growth Curves</h1>
      <h2>What is a growth curve?</h2>
      <p>Every individual grows muscle, but growth is not infinite.In fact, growth has a certain curve over time that looks very similiar for everyone:</p>
      <img src="https://www.researchgate.net/publication/232273364/figure/fig3/AS:300364449501186@1448623873268/Muscle-growth-curves-of-two-MHS-genotypes-NN-and-Nn-of-the-pigs-kept-on-the-intensive.png" alt="muscle growth curve"></img>
      <AccordionList />
      <Alert>
        Hello you lousy bitch
      </Alert>
    </div>
  );
}

