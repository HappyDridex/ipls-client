export type TBreadcrumb = {
  label: string;
  name: string;
  params?: Record<string, string>;
};

export type TBreadcrumbs = TBreadcrumb[];
