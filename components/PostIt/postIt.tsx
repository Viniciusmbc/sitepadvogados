export default function PostIt({ texto }: { texto: string }) {
  return (
    <div className="postit">
      <div className=" bg-quintary h-12 w-4 -top-20 inset-x-1/2 absolute z-40"></div>
      <p>{texto}</p>
    </div>
  );
}
