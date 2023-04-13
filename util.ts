export const fieldMask = <T extends {}, K extends keyof T>(
  obj: T,
  mask: K[]
): Pick<T, K> => {
  const result = {} as Pick<T, K>;
  for (const key of mask) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
};
