export type FilmsEntity = {
    id: number;
	name: string;
	platform: string;
	gender: string;
	status: string;
	note: number;
    summary: string;
}

export type Films = Omit<FilmsEntity, "id">