export interface FlagProps {
    src: string;
    name: string;
    onClick: (any) => void;
}

export const Flag = ({ src, name, onClick }: FlagProps) => {
    const parsedName = name.split('(')[0];
    return (
        <div id={'flag-wrapper'} key={`id-${name}`} onClick={onClick}>
            <img key={`id-${name}`} id={"country_img"} src={src} />
            { parsedName }
        </div>
    )
}