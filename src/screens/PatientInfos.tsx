import { MagnifyingGlass } from "phosphor-react"
import SideBar from "../components/SideBar"
import { useEffect, useState } from "react"
import PatientInfoField from "../components/PatientInfoField"

interface PatientInfo {
	type: string
	value: string
}

function PatientInfos() {
	const [patientInfos, setPatientInfos] = useState<PatientInfo[]>([
		{
			type: "",
			value: "",
		},
	])

	useEffect(() => {
		setPatientInfos([
			{
				type: "Nome",
				value: "João Gabriel Pinho da Cruz",
			},
			{
				type: "CPF",
				value: "123.456.789-10",
			},
			{
				type: "RG",
				value: "123456789",
			},
			{
				type: "Data de Nascimento",
				value: "01/01/2000",
			},
			{
				type: "Sexo",
				value: "Masculino",
			},
			{
				type: "Endereço",
				value: "Rua dos Bobos, 0",
			},
			{
				type: "Telefone",
				value: "(00) 00000-0000",
			},
			{
				type: "E-mail",
				value: "email@email.com",
			},
		])
	})

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
						patientInfos.length === 0 ? "justify-center" : ""
					} mb-20 h-[60vh] bg-gray-100 rounded-md px-2 py-2 w-[60vw] overflow-y-scroll`}
				>
					{patientInfos.length === 0 ? (
						<p className="text-center">Os dados do paciente aparecerão aqui!</p>
					) : (
						<div className="flex flex-col gap-3">
							{patientInfos.map((patientInfo) => (
								<PatientInfoField
									type={patientInfo.type}
									value={patientInfo.value}
								/>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default PatientInfos
