import {
	Button,
	FormControl,
	FormLabel,
	Heading,
	Input,
	InputGroup,
	InputRightElement,
} from "@chakra-ui/react"
import { useState } from "react"

import MedV from "../assets/medv.svg"

function Login() {
	const [show, setShow] = useState(false)
	const handleClick = () => setShow(!show)

	return (
		<div className="grid grid-cols-2 h-screen">
			<Heading
				size="2xl"
				className="absolute left-6 top-4 text-[#7161ef] italic"
				style={{
					fontFamily: "Gochi Hand",
				}}
			>
				UniSaúde
			</Heading>
			<div className="flex justify-center items-center">
				<img src={MedV} alt="MedV" className="w-2/3" />
			</div>
			<div className="flex items-center justify-center">
				<form action="" className="flex flex-col gap-6 w-2/3">
					<Heading size="lg" textAlign="center">
						Faça seu login!
					</Heading>
					<FormControl>
						<FormLabel>Email</FormLabel>
						<Input
							type="email"
							placeholder="email@email.com"
							focusBorderColor="#7161ef"
						></Input>
					</FormControl>
					<InputGroup size="md">
						<Input
							pr="4.5rem"
							type={show ? "text" : "password"}
							placeholder="Coloque sua senha"
							focusBorderColor="#7161ef"
						/>
						<InputRightElement width="4.5rem" marginRight="2">
							<Button h="1.75rem" size="sm" onClick={handleClick}>
								{show ? "Mostrar" : "Ocultar"}
							</Button>
						</InputRightElement>
					</InputGroup>
					<Button colorScheme="purple">Entrar</Button>
				</form>
			</div>
		</div>
	)
}

export default Login
