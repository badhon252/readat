// utils/revalidate.ts
export const revalidate = 60; // revalidate data every 60 seconds

export async function revalidateData(path: string) {
  try {
    await fetch(`/api/revalidate?path=${path}`, {
      method: "POST",
    });
  } catch (err) {
    console.error("Failed to revalidate:", err);
  }
}
