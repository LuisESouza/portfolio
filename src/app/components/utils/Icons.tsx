import Link from "next/link";

interface IconsConfig {
    id: string;
    icon: string;
    size: string;
    link: string;
}

interface IconsProps {
  icons: IconsConfig[];
}


const Icons: React.FC<IconsProps> = ({icons}) => {
    return(
        <div className="flex flex-wrap gap-4">
            {icons.map((icon) => (
                <Link href={icon.link}
                key={icon.id}
                className="hover:text-[var(--bg-button)]"
                >
                    <i 
                    className={`bi bi-${icon.icon}`} 
                    style={{fontSize: `${icon.size}rem`}}
                    />
                </Link>))
            }
        </div>
    )
}

export default Icons;