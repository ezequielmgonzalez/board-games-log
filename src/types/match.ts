interface MatchScore {
	id: string;
	match: Match;
	details: string;
}

interface Match {
	id: string;
	userId: string;
	gameId: string;
	date?: Date;
	comments: string;
}

interface ArnakPoints {
	investigation: number;
	tiles: number;
	idols: number;
	guardians: number;
	cards: number;
	fear: number;
}

export interface ArnakCharacter {
	id: string;
	name: string;
	img: string;
}

export interface ArnakMatch extends Match {
	id: string;
	matchScoreId: string;
	userId: string;
	points: ArnakPoints;
	characterId: string;
}

export interface User {
	id: string;
	name: string;
	email: string;
	img?: string;
}

export interface PlayerScoreArnak {
	user: User;
	points: ArnakPoints;
	character?: ArnakCharacter;
}

export interface Podium {
	position: number;
	users: User[];
}

export interface ArnakScoreboard {
	playerScores: PlayerScoreArnak[];
	date?: Date;
	podium?: Podium;
}
