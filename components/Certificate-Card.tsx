import Image from "next/image";

interface CertificateCardProps {
  image: string;
  title: string;
  onClick?: () => void;
}

export default function CertificateCard({ image, title, onClick }: CertificateCardProps) {
  return (
    <div
      className="glass-card group overflow-hidden cursor-pointer"
      onClick={onClick}
      style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}
    >
      <div className="relative overflow-hidden bg-black/50 p-2">
        <div className="relative w-full" style={{ paddingBottom: "85%" }}>
          <Image
            src={`/images/${image}`}
            alt={title}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
      </div>
      <div className="p-4">
        <p className="font-bebas text-base text-white uppercase tracking-wider text-hierarchy-high">{title}</p>
        <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mt-1 text-hierarchy-low">Click to enlarge</p>
      </div>
    </div>
  );
}
