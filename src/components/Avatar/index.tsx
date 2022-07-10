interface AvatarProps {
    url: string;
    alternativeText: string;
    primary?: boolean;
}

export function Avatar({ url, alternativeText, primary }: AvatarProps) {
    return primary ? (
        <img
            src={url}
            alt={alternativeText}
            className="rounded-full object-contain w-full h-full relative max-w-avatar max-h-avatar"
        />
    ) : (
        <img
            src={url}
            alt={alternativeText}
            className="rounded-full object-contain w-auto h-full max-h-32 border-4 border-brand"
        />
    );
}
