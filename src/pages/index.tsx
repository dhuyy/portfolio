export default function Home() {
  return (
    <>
      <div className="h-dvh grid
        grid-rows-[100px_1fr_100px]
        grid-cols-1
        md:grid-rows-[100px_1fr]
        md:grid-cols-[1fr_1fr]
        lg:grid-rows-[100px_1fr]
        lg:grid-cols-[100px_1fr_1fr]"
      >
        <div className="bg-violet-900 md:col-span-2 lg:col-span-3">Header</div>
        <div className="bg-violet-800 hidden lg:flex lg:row-span-2">Social</div>
        <div className="bg-violet-700">Contact</div>
        <div className="bg-violet-600 hidden md:flex">Skills</div>
        <div className="bg-violet-500 md:hidden">Mobile Footer</div>
      </div>
    </>
  );
}
