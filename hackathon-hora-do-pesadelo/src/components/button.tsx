interface ButtonProps {
    type: string
    title: string
}

function Button({ type, title }: ButtonProps) {
    return (
        <button className={`flex flex-row py-2  ${type == 'orange' ? 'bg-orange-500 text-slate-50 px-8' : 'border border-zinc-300 px-12'} rounded-3xl`}>
            {title}
        </button>
    );
}

export default Button;