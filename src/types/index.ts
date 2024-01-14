export type LinkType = {
    title: string;
    path: string;
};

export interface NavProps extends React.HTMLAttributes<HTMLDivElement> {
    links: LinkType[];
}
