import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6 text-center text-primary">
      <p className="section-eyebrow">404</p>
      <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        This page doesn't exist.
      </h1>
      <p className="max-w-sm text-sm text-secondary">
        The page you're looking for may have been moved or removed.
      </p>
      <Link
        href="/"
        className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
      >
        Back to home
      </Link>
    </main>
  );
}
