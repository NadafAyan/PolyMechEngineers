import { motion } from "framer-motion";
import { useEffect } from "react";

const GraphiteVsCopper = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <div
        className="flex flex-col justify-center items-start pl-6 gap-2 pt-18"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <h3 className="font-montserrat text-5xl font-semibold tracking-wider">
          ARE YOU STILL USING
        </h3>
        <span className="bg-[#feb602] text-white py-1 pl-1.5 pr-8 rounded-r-xl text-5xl font-semibold tracking-wider">
          COPPER ELECTRODES?
        </span>
      </div>

      <div className="mt-10 w-fit flex flex-col items-start text-4xl font-semibold bg-black text-white px-4 py-2 rounded-l-2xl pl-12 ml-auto">
        <p>WHY DON’T SAVE 50% OF ELECTRODE COSTS</p>
        <p>WITH GRAPHITE ELECTRODES!</p>
      </div>

      <div className="max-w-8xl bg-[#090909b9] mr-5 ml-5 p-6 rounded-xl shadow-lg mt-12">
        {/* <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            ARE YOU STILL USING{" "}
            <span className="text-orange-500">COPPER ELECTRODES?</span>
          </h2>
          <p className="mt-2 text-lg font-semibold bg-black text-white inline-block px-4 py-2 rounded-md">
            WHY DON’T SAVE 50% OF ELECTRODE COSTS WITH GRAPHITE ELECTRODES!
          </p>
        </div> */}

        <div className="grid grid-cols-3  gap-4 text-center mt-6 mb-8">
          <div className="bg-[#EEF6FA] text-black py-2 px-3 rounded-md font-semibold text-4xl flex justify-center items-center">
            Faster <br/>
            MRR
          </div>
          <div className="bg-[#feb602]  text-white py-2 px-3 rounded-md font-semibold text-4xl flex justify-center items-center">
            Better <br/> Surface Finish
          </div>
          <div className="bg-[#EEF6FA] text-black py-2 px-3 rounded-md font-semibold text-4xl flex justify-center items-center">
            Lower <br/> Wear
          </div>
          <div className="bg-[#feb602] mt-4 text-white py-2 px-3 rounded-md font-semibold col-span-2 sm:col-span-1 text-4xl flex justify-center items-center">
            Increase EDM <br /> Productivity
          </div>
          <div className="bg-[#EEF6FA] mt-4 border border-gray-300 text-black py-2 px-3 rounded-md font-semibold col-span-2 sm:col-span-1 text-4xl flex justify-center items-center">
            Reduce Hand <br /> Polishing
          </div>
          <div className="bg-[#feb602] mt-4  text-white py-2 px-3 rounded-md font-semibold col-span-2 sm:col-span-1 text-4xl flex justify-center items-center">
            Reduce Multiple <br /> Electrodes
          </div>
        </div>

        <div className="mt-8 bg-[#EEF6FA] ">
          {/* <h3 className="text-lg font-bold text-gray-700 mb-2">
            Graphite Grades Comparison
          </h3> */}
          <div className="overflow-x-auto ">
            
            <table className="min-w-full table-auto text-sm text-left border">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 border">GRADE</th>
                  <th className="px-4 py-2 border">FEATURE</th>
                  <th className="px-4 py-2 border">APPLICATION</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    grade: "PO - 7",
                    feature: "Rough Finishing / Semi-Finishing Grade",
                    application:
                      "Forging Dies, Diamond Tools, Gold & Silver Casting, Glass Application",
                  },
                  {
                    grade: "PO - 9",
                    feature: "Finishing Grade",
                    application:
                      "Al-pressure Die Casting Dies, Plastic Injection Mould",
                  },
                  {
                    grade: "PO - 8",
                    feature: "High Precision Finishing Grade",
                    application: "EDM Application",
                  },
                  {
                    grade: "PO - 12",
                    feature: "Regular Profile Grade",
                    application: "EDM Application",
                  },
                  {
                    grade: "GPO",
                    feature: "Heat Treatment & Casting",
                    application: "Vacuum Furnace, Aluminum Degassing",
                  },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="px-4 py-2 border font-semibold">
                      {row.grade}
                    </td>
                    <td className="px-4 py-2 border">{row.feature}</td>
                    <td className="px-4 py-2 border">{row.application}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GraphiteVsCopper;
