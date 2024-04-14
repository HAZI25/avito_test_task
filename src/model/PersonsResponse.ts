import { Nullable } from './utilityTypes';

export interface PersonsResponse {
	docs: Person[];
	total: number;
	limit: number;
	page: number;
	pages: number;
}

export interface Person {
	id: number;
	name: Nullable<string>;
	enName: Nullable<string>;
	photo: Nullable<string>;
	sex: Nullable<string>;
	growth: Nullable<number>;
	birthday: Nullable<string>;
	death: Nullable<string>;
	age: Nullable<number>;
	birthPlace: Nullable<Place>;
	deadPlace: Nullable<Place>;
	spouses: Nullable<Spouses>;
	countAwards: Nullable<number>;
	profession: Nullable<Profession>;
	facts: Nullable<FactInPerson>;
	movies: Nullable<MovieInPerson>;
	updatedAt: string;
	createdAt: string;
}

interface Spouses {
	id: number;
	name: Nullable<string>;
	divorced: Nullable<boolean>;
	divorcedReason: Nullable<string>;
	sex: Nullable<string>;
	children: Nullable<number>;
	relation: Nullable<string>;
}

interface Place {
	value: Nullable<string>;
}

interface Profession {
	value: Nullable<string>;
}

interface FactInPerson {
	value: Nullable<string>;
}

interface MovieInPerson {
	id: number;
	name: Nullable<string>;
	alternativeName: Nullable<string>;
	rating: Nullable<number>;
	general: Nullable<boolean>;
	description: Nullable<string>;
	enProfession: Nullable<string>;
}
