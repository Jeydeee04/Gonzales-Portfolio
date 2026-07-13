interface ToolCardProps {
  title: string;
  icon: React.ReactNode;
}

export default function ToolCard({ title, icon }: ToolCardProps) {
  return (
    <div className="glass-card flex flex-col items-center gap-3 p-6 group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-red-600/0 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <span className="text-2xl text-gray-500 group-hover:text-red-600 transition-colors duration-200 relative z-10">{icon}</span>
      <span className="font-bebas text-sm text-gray-400 group-hover:text-white uppercase tracking-wider transition-colors duration-200 relative z-10">{title}</span>
    </div>
  );
}
