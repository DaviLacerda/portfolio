interface ConsoleCircleProps {
    color: string;
}

export function ConsoleCircle({ color }: ConsoleCircleProps) {
    return (
        <div className={`hidden md:block w-6 h-6 ${color} rounded-full`} />
    )
}