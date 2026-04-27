"use client"

import dynamic from "next/dynamic"
import { use } from "react"

const Editor = dynamic(() => import("../../components/Editor"), { ssr: false })

export default function NotePage({
	params,
}: {
	params: Promise<{ id: string }>
}) {
	const { id } = use(params)

	return (
		<main className="mx-auto max-w-3xl py-12 px-6">
			<Editor
				initialContent={[
					{
						type: "heading",
						props: { level: 1 },
						content: `听力笔记 #${id}`,
					},
					{
						type: "paragraph",
						content: "敲 / 添加音频、视频、列表… 在这里写笔记。",
					},
				]}
			/>
		</main>
	)
}