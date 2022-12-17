export default function CardsSteps({
  step,
  text,
}: {
  step: string;
  text: string;
}) {
  return (
    <div className=" w-60 h-60 px-8 py-6 text-center rounded-full shadow-xl ">
      <span> {step} </span> <br></br> {text}
    </div>
  );
}
