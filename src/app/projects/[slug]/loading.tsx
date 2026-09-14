export default function LoadingProject() {
  return (
    <main className="min-h-screen bg-ivory px-5 py-6 text-ink dark:bg-ink dark:text-ivory sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="h-12 border-b border-ink/15 dark:border-ivory/15" />
        <section className="grid gap-10 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:py-24">
          <div className="space-y-4">
            <div className="h-4 w-48 animate-pulse bg-ink/15 dark:bg-ivory/15" />
            <div className="h-9 w-28 animate-pulse rounded-full bg-ink/10 dark:bg-ivory/10" />
          </div>
          <div className="space-y-6">
            <div className="h-20 max-w-2xl animate-pulse bg-ink/12 dark:bg-ivory/12" />
            <div className="h-8 max-w-xl animate-pulse bg-ink/10 dark:bg-ivory/10" />
            <div className="h-28 max-w-3xl animate-pulse bg-ink/10 dark:bg-ivory/10" />
          </div>
        </section>
      </div>
    </main>
  );
}
