export default function CardsSteps({
  step,
  text,
}: {
  step: string;
  text: string;
}) {
  return (
    <div className=" w-60 h-60 px-8 py-6 text-center border border-quaternary shadow-xl relative ">
      <div className=" w-60 h-10 bg-quaternary border-b-primary  shadow-md absolute inset-x-0 top-0">
        <div className=" flex gap-x-4 justify-end  h-10 items-center mr-2 ">
          <span className="  bg-white w-4 h-1"></span>
          <span className="  border-white  border-4 top-0 right-0  w-6 h-6"></span>
          <div className=" relative h-2 w-7">
            <span className="  bg-white absolute  top-0 left-0  w-7  h-2  rotate-45 "></span>
            <span className="  bg-white absolute  top-0 left-0  w-7  h-2  -rotate-45 "></span>
          </div>
        </div>
      </div>
      <p className=" h-full flex flex-col justify-center items-center">
        <b> {step} </b> <br></br> {text}
      </p>
    </div>
  );
}
