export function createBookmarklet(source: string): string {
  const wrappedSource = `void function () {\n${source.trim()}\n}();`;

  return `javascript:${encodeURIComponent(wrappedSource)}`;
}
