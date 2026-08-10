#!/usr/bin/env node
/**
 * Notify IndexNow-participating engines (Bing, Yandex, Naver, Seznam) that URLs changed.
 * Google does not participate — use Search Console for Google.
 *
 *   node scripts/indexnow.mjs                      submit every URL in the sitemap
 *   node scripts/indexnow.mjs /about /faq          submit specific paths only
 *   node scripts/indexnow.mjs --dry-run            show what would be sent
 *
 * The key is public by design: engines fetch https://<host>/<key>.txt to confirm
 * the submitter controls the domain.
 */

const KEY = process.env.INDEXNOW_KEY || "8f4c1d7ae95b42639c0a2e8d5b17f3c6";
const SITE = (process.env.SITE_URL || "https://microwear.info").replace(/\/$/, "");
const ENDPOINT = "https://api.indexnow.org/IndexNow";
const MAX_URLS = 10000;

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const paths = args.filter((a) => !a.startsWith("--"));

async function urlsFromSitemap() {
  const res = await fetch(`${SITE}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap.xml returned ${res.status}`);
  const xml = await res.text();
  const locs = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);
  if (!locs.length) throw new Error("no <loc> entries found in sitemap.xml");
  return locs;
}

async function verifyKeyFile() {
  const keyUrl = `${SITE}/${KEY}.txt`;
  const res = await fetch(keyUrl);
  if (!res.ok) {
    throw new Error(`key file not reachable at ${keyUrl} (HTTP ${res.status}) — deploy it before submitting`);
  }
  const body = (await res.text()).trim();
  if (body !== KEY) {
    throw new Error(`key file at ${keyUrl} contains "${body}", expected "${KEY}"`);
  }
  return keyUrl;
}

async function main() {
  const urlList = paths.length
    ? paths.map((p) => `${SITE}${p.startsWith("/") ? p : `/${p}`}`)
    : await urlsFromSitemap();

  if (urlList.length > MAX_URLS) {
    throw new Error(`${urlList.length} URLs exceeds the ${MAX_URLS} per-request limit`);
  }

  console.log(`Host: ${new URL(SITE).host}`);
  console.log(`URLs: ${urlList.length}`);
  urlList.slice(0, 5).forEach((u) => console.log(`  ${u}`));
  if (urlList.length > 5) console.log(`  ... and ${urlList.length - 5} more`);

  if (dryRun) {
    console.log("\nDry run — nothing submitted.");
    return;
  }

  const keyLocation = await verifyKeyFile();
  console.log(`Key file verified: ${keyLocation}`);

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: new URL(SITE).host,
      key: KEY,
      keyLocation,
      urlList,
    }),
  });

  const text = await res.text();
  // IndexNow answers 200/202 on success and returns no body
  if (res.ok) {
    console.log(`\nSubmitted — HTTP ${res.status} ${res.statusText}`);
  } else {
    console.error(`\nRejected — HTTP ${res.status} ${res.statusText}`);
    if (text) console.error(text);
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error(`indexnow: ${err.message}`);
  process.exitCode = 1;
});
