export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="relative">
        {/* Animated Logo/Loader */}
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 animate-pulse rounded-full bg-primary" />
          <div
            className="h-3 w-3 animate-pulse rounded-full bg-primary"
            style={{ animationDelay: '150ms' }}
          />
          <div
            className="h-3 w-3 animate-pulse rounded-full bg-primary"
            style={{ animationDelay: '300ms' }}
          />
        </div>
        <span className="mt-4 block font-mono text-xs uppercase tracking-widest text-text-subtle">
          Loading
        </span>
      </div>
    </div>
  );
}
