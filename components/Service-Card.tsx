import { FiTerminal, FiSmartphone, FiDatabase, FiLink } from "react-icons/fi";
import { BsCpu, BsRocket } from "react-icons/bs";

interface ServiceCardProps {
  title: string;
  description: string;
}

const iconMap: Record<string, React.ReactNode> = {
  "Web Development": <FiTerminal />,
  "Mobile App Development": <FiSmartphone />,
  "AI & Machine Learning": <BsCpu />,
  "Database Design": <FiDatabase />,
  "API Development": <FiLink />,
  "DevOps & Deployment": <BsRocket />,
};

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div
      className="glass-card p-6 group relative overflow-hidden"
      style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}
    >
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <span className="text-xl text-red-600 group-hover:text-white transition-colors duration-200">
        {iconMap[title] || <FiTerminal />}
      </span>
      <h3 className="font-bebas mt-4 text-xl text-white uppercase tracking-wider text-hierarchy-high">{title}</h3>
      <p className="mt-2 text-sm text-gray-400 text-hierarchy-medium">{description}</p>
    </div>
  );
}
