import Link from "next/link"

const notes = [
	{ id: "1", title: "🎙️ BBC: AI 改变工作方式", date: "04-25" },
	{ id: "2", title: "🎙️ TED: 如何成为更好的听众", date: "04-26" },
	{ id: "3", title: "🎙️ 6 Min: Diet Drinks", date: "04-27" },
]

export default function Sidebar() {
	return (
		<aside className="w-64 bg-gray-50 border-r h-screen p-4 overflow-y-auto sticky top-0">
			<Link href="/" className="font-bold text-lg block mb-4">
				🎧 听力笔记
			</Link>
			<input
				placeholder="搜索…"
				className="w-full px-2 py-1 mb-4 text-sm border rounded"
			/>
			<nav className="space-y-1">
				{notes.map((n) => (
					<Link
						key={n.id}
						href={`/notes/${n.id}`}
						className="flex justify-between px-2 py-1.5 text-sm rounded hover:bg-gray-200"
					>
						<span className="truncate">{n.title}</span>
						<span className="text-xs text-gray-400 ml-2 shrink-0">
							{n.date}
						</span>
					</Link>
				))}
			</nav>
		</aside>
	)
}