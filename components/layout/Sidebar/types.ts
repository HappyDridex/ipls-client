export type TSidebarLink = {
  text: string;
  iconName: string;
  name?: string;
  routeName?: string;
  callback?: () => void;
};
