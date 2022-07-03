interface AvatarProps {
    url: string;
    alternativeText: string;
}

export function Avatar({ url, alternativeText }: AvatarProps) {
    return (
        <img
            src={url}
            alt={alternativeText}
            className="rounded-full object-contain w-full h-full relative max-w-avatar max-h-avatar"
        />
    );
}
