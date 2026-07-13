export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <span className="text-red-600 font-black text-2xl tracking-[0.3em] uppercase">Jey Dom</span>
        <div className="flex gap-1.5">
          <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" />
          <span className="w-1.5 h-1.5 bg-red-600/60 rounded-full animate-pulse delay-200" />
          <span className="w-1.5 h-1.5 bg-red-600/30 rounded-full animate-pulse delay-400" />
        </div>
      </div>
    </div>
  );
}
