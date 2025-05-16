import Link from "next/link";

interface CardProps {
  title: string;
  desc: string;
  img: string;
  link?: string;
}

const Card = ({ title, desc, img, link }: CardProps) => {
  return (
    <div className="group flex-shrink-0 min-w-[250px] max-w-[250px] flex flex-col items-center border border-transparent hover:border-[var(--bg-button)] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-[var(--foreground)] text-[var(--color-text)]">
      
      <div className="w-full h-48 overflow-hidden">
        <img
          src={img}
          alt={`Imagem do projeto ${title}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="p-5 text-center flex flex-col gap-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-gray-400">{desc}</p>

        {link && (
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-center gap-2 px-4 py-2 bg-[var(--bg-button)] text-white rounded-md font-medium transition hover:brightness-110"
          >
            View project
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
