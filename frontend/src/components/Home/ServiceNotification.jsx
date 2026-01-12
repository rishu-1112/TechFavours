export default function ServiceNotification({ icon, title, time, color }) {
  return (
    <div
      className="
        w-[420px] md:w-[520px]
        flex items-center gap-5
        px-6 py-5
        rounded-2xl
        bg-white/15 backdrop-blur-2xl
        border border-white/30
        shadow-[0_20px_50px_rgba(0,0,0,0.45)]
      "
    >
      {/* Icon */}
      <div
        className="
          w-14 h-14 rounded-full
          flex items-center justify-center
          text-xl text-white
          shadow-[0_0_20px_rgba(255,255,255,0.35)]
        "
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>

      {/* Text */}
      <div>
        <p className="text-base text-white font-semibold">
          {title}
          <span className="text-sm text-white/60"> · {time}</span>
        </p>
        <p className="text-sm text-white/60 mt-0.5">
          TechFavours
        </p>
      </div>
    </div>
  );
}
