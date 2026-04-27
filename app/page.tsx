"use client"

import dynamic from "next/dynamic"

const Editor = dynamic(() => import("./components/Editor"), { ssr: false })

export default function Home() {
	return (
		<main className="mx-auto max-w-3xl py-16 px-6">
			<Editor
				initialContent={[
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
				]}
			/>
		</main>
	)
}