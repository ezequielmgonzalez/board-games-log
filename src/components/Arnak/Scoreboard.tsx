// components/ArnakScoreboard.tsx
"use client";
import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";

// Definir tipos para los datos del formulario
interface ScoreFormData {
	players: {
		name: string;
		character?: string;
		scores: Record<string, number>;
	}[];
}

// Definir los puntos por categoría
const categories = [
	"Investigacion",
	"Losetas",
	"Idolos",
	"Guardianes",
	"Cartas",
	"Miedo",
	"Total",
];

export default function ArnakScoreboard() {
	const { register, control, handleSubmit, watch } = useForm<ScoreFormData>({
		defaultValues: {
			players: [{ name: "", character: "", scores: {} }],
		},
	});

	const { fields, append } = useFieldArray({
		control,
		name: "players",
	});

	// Calcula la suma total para cada jugador, restando los puntos de 'Miedo'
	const calculateTotal = (scores: Record<string, any>): number => {
		const total = categories.slice(0, -1).reduce((sum, category) => {
			const value = parseFloat(scores[category] || "0"); // Convierte el valor a número
			if (category === "Miedo") {
				return sum - value; // Resta los puntos de 'Miedo'
			}
			return sum + value; // Suma los puntos de otras categorías
		}, 0);
		return total;
	};

	const onSubmit: SubmitHandler<ScoreFormData> = (data) => {
		console.log("Form Data:", data);
	};

	return (
		<div className="border border-red-500 rounded-lg">
			<form onSubmit={handleSubmit(onSubmit)}>
				<table className="w-full">
					<thead>
						<tr>
							<th></th>
							{/* Espacio para la columna de categorías */}
							{fields.map((field, index) => (
								<th key={field.id}>
									<input
										type="text"
										{...register(
											`players.${index}.name` as const
										)}
										placeholder="Player Name"
									/>
									<input
										type="text"
										{...register(
											`players.${index}.character` as const
										)}
										placeholder="Character"
									/>
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{categories.slice(0, -1).map((category) => (
							<tr key={category}>
								<td>{category}</td>
								{fields.map((field, index) => (
									<td key={field.id}>
										<input
											type="number"
											{...register(
												`players.${index}.scores.${category}` as const
											)}
											placeholder={category}
											step="any"
										/>
									</td>
								))}
							</tr>
						))}
						<tr>
							<td>Total</td>
							{fields.map((field, index) => (
								<td key={field.id}>
									{calculateTotal(
										watch(`players.${index}.scores`)
									)}
								</td>
							))}
						</tr>
					</tbody>
				</table>
				<button
					type="button"
					onClick={() =>
						append({ name: "", character: "", scores: {} })
					}
				>
					Add Player
				</button>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}
