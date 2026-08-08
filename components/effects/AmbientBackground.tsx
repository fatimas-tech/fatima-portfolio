export default function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden bg-ivory"
    >
      <div className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-lavender/30 blur-[110px] animate-float-slow" />
      <div className="absolute top-1/3 -right-32 h-[32rem] w-[32rem] rounded-full bg-rose/25 blur-[120px] animate-float-slower" />
      <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-blue/25 blur-[110px] animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/3 h-64 w-64 rounded-full bg-sage/20 blur-[100px] animate-float-slower" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(251,247,241,0), rgba(251,247,241,0.6) 70%, rgba(251,247,241,1) 100%)",
        }}
      />
    </div>
  );
}
