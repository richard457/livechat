export type Config = {
  token: string;
  name: string;
};

export const isChecklistItemType = (value: any): value is Config => {
  return (
    typeof value.token === "string" &&
    typeof value.name === "string"
  );
};
