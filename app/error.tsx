"use client"; // Error boundaries must be Client Components

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    // global-error must include html and body tags

    <div className="flex flex-col items-center justify-center min-h-screen text-xl">
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()} className="text-blue-500">
        Try again
      </button>
    </div>
  );
}
