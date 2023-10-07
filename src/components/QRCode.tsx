import QRCode from "react-qr-code"

interface QRCodeProps {
	value: string
}

function QRCodeComponent({ value }: QRCodeProps) {
	return (
		<div>
			<QRCode size={256} value={value} id="qr-code-gen" />
		</div>
	)
}

export default QRCodeComponent
