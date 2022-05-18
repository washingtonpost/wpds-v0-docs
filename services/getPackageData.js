// credit to radix-ui
// https://github.com/radix-ui/website/blob/main/lib/bundlephobia.ts

export function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

export async function getPackageData(name) {
  try {
    const response = await fetch(
      `https://bundlephobia.com/api/size?package=@washingtonpost/wpds-${name}@latest`
    );
    const data = await response.json();

    if (data.error) {
      return false;
    }

    return data?.size && formatBytes(data?.size);
  } catch (e) {
    return false;
  }
}
