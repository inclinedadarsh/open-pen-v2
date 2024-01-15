export type LinkType = {
    title: string;
    path: string;
};

export interface NavProps extends React.HTMLAttributes<HTMLDivElement> {
    links: LinkType[];
}

export interface BlogCardProps extends React.HTMLAttributes<HTMLAnchorElement> {
    title: string;
    description: string;
    imagePath: string;
    blogPath: string;
}
