export function objectToQueryString(params: Record<string, any>): string {
  const query: string[] = [];

  Object.entries(params).forEach(([key, value]) => {
    if (
      value !== undefined &&
      value !== null &&
      value !== "" &&
      !(Array.isArray(value) && value.length === 0)
    ) {
      if (Array.isArray(value)) {
        value.forEach((v) => {
          query.push(`${encodeURIComponent(key)}=${encodeURIComponent(v)}`);
        });
      } else {
        query.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
      }
    }
  });

  return query.length ? `?${query.join("&")}` : "";
}
