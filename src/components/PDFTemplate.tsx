import { forwardRef } from "react"

interface PDFGeneratedProps {
	description: string
	ref: any
}

const PDFTemplate = forwardRef(function (props: PDFGeneratedProps, ref: any) {
	return (
		<div ref={ref} className="py-6 flex items-center justify-center">
			{props.description}
		</div>
	)
})

export default PDFTemplate
