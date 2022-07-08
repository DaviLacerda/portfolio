interface ConsoleCircleProps {
    color: string;
}

export function ConsoleCircle({ color }: ConsoleCircleProps) {
    return (
        <div className={`h-3 w-3 md:w-6 md:h-6 ${color} rounded-full`} />
    )
}