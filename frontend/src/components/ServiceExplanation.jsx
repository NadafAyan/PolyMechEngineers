import { FaStopwatch, FaCube, FaUsers, FaWallet, FaAward, FaCheckCircle } from "react-icons/fa";

const features = [
  {
    icon: <FaStopwatch className="text-yellow-500 text-4xl" />,
    title: "Fast service",
    description: "Rapid mold and die services: quick production without compromising precision and quality."
  },
  {
    icon: <FaCube className="text-yellow-500 text-4xl" />,
    title: "Latest Product Techniques",
    description: "Safe transactions for molds and dies: ensuring secure payment processes for customers."
  },
  {
    icon: <FaUsers className="text-yellow-500 text-4xl" />,
    title: "Expert team",
    description: "An accomplished team of professionals, proficient in delivering exceptional outcomes. Their expertise ensures successful results."
  },
  {
    icon: <FaWallet className="text-yellow-500 text-4xl" />,
    title: "Affordable services",
    description: "Budget-friendly solutions with competitive pricing, maintaining quality and customer satisfaction."
  },
  {
    icon: <FaCheckCircle className="text-yellow-500 text-4xl" />,
    title: "Best Quality Product",
    description: "The best quality product excels in functionality, durability, design, materials, safety, and customer support."
  },
  {
    icon: <FaAward className="text-yellow-500 text-4xl" />,
    title: "Award winning",
    description: "Award-winning recognition, a testament to excellence and innovation in its field. A product or service celebrated for its outstanding achievements."
  }
];

export default function FeatureCards() {
  return (
    <div className="p-6 md:p-10 bg-[#EEF6FA] mt-">
      
        <h1 className="text-6xl font-bold text-center pt-6 mb-10">
          Why{" "}
          <span className="bg-yellow-400 px-2 pr-14 rounded-r-3xl">
            US?
          </span>
        </h1>
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow bg-white"
          >
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
