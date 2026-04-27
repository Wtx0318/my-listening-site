"use client"

import "@blocknote/core/fonts/inter.css"
import "@blocknote/mantine/style.css"
import { BlockNoteView } from "@blocknote/mantine"
import { useCreateBlockNote } from "@blocknote/react"
import type { PartialBlock } from "@blocknote/core"

export default function Editor({
	initialContent,
}: {
	initialContent?: PartialBlock[]
}) {
	const editor = useCreateBlockNote({ initialContent })
	return <BlockNoteView editor={editor} />
}