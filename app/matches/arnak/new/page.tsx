import ArnakScoreboard from "@/src/components/Arnak/Scoreboard";

export default function NewArnakMatch() {
	return (
		<section>
			{/* <form>
				<label>Mapa</label>
				<input type="text" />
				<label>Templo</label>
				<input type="text" />
				<label>Nombre</label>
				<input type="text" />

				<label>Personaje</label>
				<input type="text" />

				<label>Puntos de Investigación</label>
				<input type="number" />
				<label>Puntos de Losetas</label>
				<input type="number" />

				<label>Puntos de Ídolos</label>
				<input type="number" />

				<label>Puntos de Guardianes</label>
				<input type="number" />
				<label>Puntos de Cartas</label>
				<input type="number" />
				<label>Puntos de Miedo</label>
				<input type="number" />
			</form> */}

			<ArnakScoreboard />
		</section>
	);
}
