import { items } from "@/components/Projects"

export default function detailWebProdi() {
    const item = items[0];
    return(
        <div className="flex flex-col lg:flex-row gap-12 h-[calc(100vh-108px)]">
            <div className="flex-1 flex flex-col gap-2 my-8 fadeRight">
                <h1 className="text-3xl font-semibold mb-4">{item.title}</h1>
                <div className="mb-4 h-50 w-full rounded-lg bg-white">Image</div>
                <div className="flex justify-between mb-2">
                    <div className="flex flex-row gap-2">
                        <div className="p-2 bg-[#c9a96e]/20 rounded-lg size-fit">
                            <p className="text-sm text-[#c9a96e] font-semibold">{item.type}</p>
                        </div>
                        <div className="p-2 bg-[#c9a96e]/20 rounded-lg size-fit">
                            <p className="text-sm text-[#c9a96e] font-semibold">{item.year}</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2">
                    {item.icon.map((icon, index) => (
                        <div key={index} className="border flex flex-row gap-1 items-center text-sm p-1 rounded-lg bg-[#1a1a1a] border-[#333333]">
                            <span>{icon.icon}</span>
                            <p className="text-[#aaaaaa]">{icon.name}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            <div className="w-0.5 h-full bg-[#202020]"></div>
            <div className="flex-1 my-8 text-lg flex flex-col gap-6 fadeLeft">
                <p>{item.desc[0]}</p>
                <p>{item.desc[1]}</p>
                <p>{item.desc[2]}</p>
            </div>
        </div>
    )
}