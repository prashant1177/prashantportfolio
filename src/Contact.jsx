
import turtle from "./assets/turtle.gif";
export default function Contact() {
  return (
    <div className="py-24 flex flex-col items-center justify-center">
    
      <div className="my-4 w-4/6 p-8 px-16 flex justify-between items-center gap-2 bg-secondary  rounded-4xl relative  overflow-hidden animate-[glow_2s_ease-in-out_infinite]">
          <img src={turtle} className='moveTurtle absolute w-24 h-24'/>
        <h1 className="text-5xl text-center font-extrabold text-background ">
       Connect with me
      </h1> 
       
      <div className="flex justify-center items-center gap-8 z-10">
      <div className="w-16 h-16 bg-background rounded-2xl"></div>
      <div className="w-16 h-16 bg-background rounded-2xl"></div>
      <div className="w-16 h-16 bg-background rounded-2xl"></div>
      <div className="w-16 h-16 bg-background rounded-2xl"></div></div></div>

    </div>
  );
}
