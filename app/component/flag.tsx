export interface FlagProps {
    id: string;
    src: string;
    name: string;
    onClick: (arg: any) => void;
}

export const Flag = ({ src, name, onClick, id }: FlagProps) => {
    const parsedName = name.split('(')[0];
    return (
        <div id={'flag-wrapper'} key={`id-${name}`} onClick={onClick}>
            <img key={`id-${name}`} id={"country_img"} src={src} />
            { parsedName }
        </div>
    )
}