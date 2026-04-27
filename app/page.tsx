"use client"

import "@blocknote/core/fonts/inter.css"
import "@blocknote/mantine/style.css"
import { BlockNoteView } from "@blocknote/mantine"
import { useCreateBlockNote } from "@blocknote/react"

export default function Home() {
	const editor = useCreateBlockNote({
		initialContent: [
			{
				type: "heading",
				props: { level: 1 },
				content: "我的第一篇听力笔记 🎧",
			},
			{
				type: "paragraph",
				content: "在这里写下你听到的内容…试试敲 / 看看会出现什么菜单？",
			},
			{
				type: "paragraph",
				content: "选中这段文字试试加粗、斜体、改颜色！",
			},
		],
	})

	return (
		<main className="mx-auto max-w-3xl py-16 px-6">
			<BlockNoteView editor={editor} />
		</main>
	)
}