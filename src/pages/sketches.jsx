import { FaHeart } from "react-icons/fa6";
import { Layout } from "../components";
import { useState } from "react";
import Sketches from "../sketches";

function SketchesPage() {
  const [sketchId, setSketchId] = useState(0);
  const Sketch = Sketches[sketchId].sketch;
  console.log(Sketch);

  return (
    <Layout>
      <h1 className="text-6xl tracking-widest">
        P5.JS Sketches that I <FaHeart className=" inline-block text-red-600" />
      </h1>
      <p className="text-lg font-[prompt]">
        Made in spare time, completely open source
      </p>

      <div className="grid grid-cols-4 pt-10 gap-5">
        {Sketches.map((_) => (
          <div key={_.id}>
            <div className="h-[200px] w-full bg-slate-400 relative">
              <h1 className="absolute bottom-4 left-4">{_.title}</h1>
            </div>
            <p className="text-md font-medium font-[prompt] pt-4">
              {_.description}
            </p>
          </div>
        ))}
      </div>

      <div className="py-20">
        <Sketch />
      </div>
    </Layout>
  );
}

export default SketchesPage;
