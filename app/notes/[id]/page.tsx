"use client"

import "@blocknote/core/fonts/inter.css"
import "@blocknote/mantine/style.css"
import { BlockNoteView } from "@blocknote/mantine"
import { useCreateBlockNote } from "@blocknote/react"
import { use } from "react"

export default function NotePage({
	params,
}: {
	params: Promise<{ id: string }>
}) {
	const { id } = use(params)
	const editor = useCreateBlockNote({
		initialContent: [
			{
				type: "heading",
				props: { level: 1 },
				content: `听力笔记 #${id}`,
			},
			{
				type: "paragraph",
				content: "敲 / 添加音频、视频、列表… 在这里写笔记。",
			},
		],
	})

	return (
		<main className="mx-auto max-w-3xl py-12 px-6">
			<BlockNoteView editor={editor} />
		</main>
	)
}