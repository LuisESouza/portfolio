import Link from "next/link";

interface IconsConfig {
    id: string;
    icon: string;
    size: string;
}

interface IconsProps {
  icons: IconsConfig[];
  link: string;
}


const Icons: React.FC<IconsProps> = ({icons, link}) => {
    return(
        <div className="flex flex-wrap gap-4">
            {icons.map((icon) => (
                <Link href={''}
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