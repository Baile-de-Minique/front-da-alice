import { MagnifyingGlass } from "phosphor-react"
import SideBar from "../components/SideBar"
import { useState } from "react"

function PatientInfos() {
	const [pacientInfos, setPacientInfos] = useState([])

	return (
		<div className="flex">
			<div className="w-[20vw]">
				<SideBar />
			</div>
			<div className="flex flex-1 px-12 py-6 flex-col justify-between">
				<div className="flex gap-6 items-center">
					<input className="px-2 py-1 border-2 border-slate-400 rounded-md w-1/2 focus:border-[#7161ef] outline-none" />
					<MagnifyingGlass
						size={32}
						className="cursor-pointer text-[#7161ef]"
						weight="fill"
					/>
				</div>
				<div
					className={`flex flex-col ${
						pacientInfos.length === 0 ? "justify-center" : ""
					} mb-20 h-[60vh] bg-gray-100 rounded-md px-2 py-2 w-[60vw] overflow-y-scroll`}
				>
					{pacientInfos.length === 0 ? (
						<p className="text-center">Os dados do paciente aparecerão aqui!</p>
					) : (
						<div>infos</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default PatientInfos
