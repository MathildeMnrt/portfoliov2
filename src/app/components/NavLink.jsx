import Link from "next/link";

const NavLink = ({ href, title, newtab }) => {
  const isExternalLink = href.startsWith('http');

  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
      target={isExternalLink ? '_blank' : undefined}
      rel={isExternalLink ? 'noopener noreferrer' : undefined}
    >
      {title}
    </Link>
  );
};

export default NavLink;
