import GeneratePDF from "../components/GeneratePDF"
import QRCode from "../components/QRCode"
import SideBar from "../components/SideBar"

function GenerateQRCode() {
	return (
		<div className="flex">
			<div className="w-[20vw]">
				<SideBar />
			</div>
			<div className="flex flex-col gap-12 items-center justify-center flex-1">
				<QRCode value="alice" />
				<GeneratePDF />
			</div>
		</div>
	)
}

export default GenerateQRCode
