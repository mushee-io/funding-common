export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-ink-950/40">
      <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-white/55 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="font-medium text-white/80">Mushee</span>{" "}
            <span className="text-white/35">•</span> Funding Hub & Commons
          </div>
          <div className="text-white/40">
            UK incorporated • designed for YC-grade clarity • ship fast
          </div>
        </div>
      </div>
    </footer>
  );
}
