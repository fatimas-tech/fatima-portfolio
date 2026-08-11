export default function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{
        background:
          "linear-gradient(150deg, #fbe2f0 0%, #f4d9f0 30%, #e9d3f4 60%, #ddc9ef 100%)",
      }}
    >
      {/* noticeable lavender/purple glow behind the hero — no mouse needed */}
      <div
        className="absolute left-1/2 top-[-14%] h-[46rem] w-[58rem] -translate-x-1/2 rounded-full blur-[150px]"
        style={{
          background:
            "radial-gradient(ellipse 55% 55% at 50% 45%, rgba(150,105,205,0.48) 0%, rgba(150,105,205,0.22) 45%, transparent 75%)",
        }}
      />

      {/* soft pastel pink glow, lower on the page for a second point of interest */}
      <div
        className="absolute -right-16 bottom-[-8%] h-[38rem] w-[42rem] rounded-full blur-[150px]"
        style={{
          background:
            "radial-gradient(ellipse 55% 55% at 55% 55%, rgba(240,140,195,0.4) 0%, rgba(240,140,195,0.16) 45%, transparent 75%)",
        }}
      />

      {/* a few slow, soft accents for gentle depth — subtle, not the main effect */}
      <div className="absolute -left-24 top-[18%] h-80 w-80 rounded-full bg-lavender/25 blur-[120px] animate-float-slow" />
      <div className="absolute left-[10%] bottom-[8%] h-72 w-72 rounded-full bg-blue/16 blur-[120px] animate-float-slower" />
      <div className="absolute right-[18%] top-[8%] h-64 w-64 rounded-full bg-rose/20 blur-[110px] animate-float-slower" />

      {/* faint diagonal sheen for extra depth, not another blob */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "linear-gradient(115deg, rgba(255,255,255,0.3) 0%, transparent 32%, transparent 68%, rgba(255,255,255,0.2) 100%)",
        }}
      />

      {/* very light edge vignette only — kept faint so it never erases the colour */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 75% at 50% 20%, rgba(221,201,239,0), rgba(221,201,239,0.28) 78%, rgba(221,201,239,0.42) 100%)",
        }}
      />
    </div>
  );
}