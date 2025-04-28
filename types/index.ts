export type CSSClasses = Record<string, boolean>

export interface ImageInfo {
  url: string;
  width: number | string;
  height: number | string;
}

export interface CardInfo {
  image: ImageInfo,
  title: string,
  description: string,
  pageLink?: string,
}

export interface ListItem {
  key: string;
}

export interface NavigationItem extends ListItem {
  link: string;
  title: string;
}

export interface NavigationBlock extends ListItem {
  links: NavigationItem[];
  title: string;
}
