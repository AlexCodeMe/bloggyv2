import Link from "next/link";

export default function NavItem({
    href,
    icon: Icon,
    children,
  }: {
    href: string;
    icon: React.ElementType;
    children: React.ReactNode;
  }) {
    return (
      <Link
        href={href}
        className="flex justify-center items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <Icon className="w-4 h-4" />
        <span>{children}</span>
      </Link>
    );
  }