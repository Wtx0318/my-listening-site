import type { Metadata } from "next"
import Sidebar from "./components/Sidebar"
import "./globals.css"

export const metadata: Metadata = {
	title: "我的听力笔记",
	description: "新闻英语听力学习",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="zh">
			<body className="flex">
				<Sidebar />
				<div className="flex-1 overflow-y-auto h-screen">{children}</div>
			</body>
		</html>
	)
}