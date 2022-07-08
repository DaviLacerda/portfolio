import Link from 'next/link'

interface LinkWithIconProps{
    url: string;
    icon: React.ReactNode;
    children: React.ReactNode;
}

export function LinkWithIcon({ url, icon, children }: LinkWithIconProps) {
    return (
        <Link href={url} passHref>
            <a className="flex flex-row gap-1 items-center justify-center hover:underline" target="_blank" rel="noreferrer">
                {icon}
                {children}
            </a>
        </Link>
    )
}