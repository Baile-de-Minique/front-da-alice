import { Heading } from "@chakra-ui/react"
import { QrCode } from "phosphor-react"
import { Link } from "react-router-dom"

function SideBar() {
	return (
		<div className="flex flex-col gap-12 h-screen py-8 px-2 bg-[#957fef] text-center">
			<Heading
				size="xl"
				className="text-white italic"
				style={{
					fontFamily: "Gochi Hand",
				}}
			>
				UniSaúde
			</Heading>
			<div className="flex flex-col gap-12 items-center">
				<div className="flex gap-2 items-center">
					<QrCode size={24} className="text-white" weight="fill" />
					<Link to="/qr-code" className="text-white">
						QR Code
					</Link>
				</div>
			</div>
		</div>
	)
}

export default SideBar
