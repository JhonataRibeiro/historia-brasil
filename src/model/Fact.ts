enum revoltas {
	'Revolta Nativista',
	'Revolta Nacionalista'
};

export class Fact {
	private title: string;
	private mainDescription: string;
	private historicalContext: string;
	private startYear: string;
	private endYear: string;
	private startDate: Date;
	private endDate: Date;
	private tags: revoltas;
	private leaders: Array<string>;
	private consequences: Array<string>;
	private medidas: Array<string>;

	constructor(
		title?:string,
		mainDescription?: string,
		historicalContext?: string,
		startYear?: string,
		endYear?: string,
		startDate?: Date,
		endDate?: Date,
		tags?: revoltas,
		leaders?: Array<string>,
		consequences?: Array<string>,
		medidas?: Array<string>
		) {
		
	}

	public getitle(): string {
		return this.title;
	}

	public settitle(value: string) {
		this.title = value;
	}


	public getmainDescription(): string {
		return this.mainDescription;
	}

	public setmainDescription(value: string) {
		this.mainDescription = value;
	}

	public gethistoricalContext(): string {
		return this.historicalContext;
	}

	public sethistoricalContext(value: string) {
		this.historicalContext = value;
	}

	public getstartYear(): string {
		return this.startYear;
	}

	public setstartYear(value: string) {
		this.startYear = value;
	}

	public getendYear(): string {
		return this.endYear;
	}

	public setendYear(value: string) {
		this.endYear = value;
	}

	public getstartDate(): Date {
		return this.startDate;
	}

	public setstartDate(value: Date) {
		this.startDate = value;
	}

	public getendDate(): Date {
		return this.endDate;
	}

	public setendDate(value: Date) {
		this.endDate = value;
	}

	public gettags(): revoltas {
		return this.tags;
	}

	public settags(value: revoltas) {
		this.tags = value;
	}

	public getleaders(): Array<string> {
		return this.leaders;
	}

	public setleaders(value: Array<string>) {
		this.leaders = value;
	}

	public getconsequences(): Array<string> {
		return this.consequences;
	}

	public setconsequences(value: Array<string>) {
		this.consequences = value;
	}

	public getmedias(): Array<string> {
		return this.medidas;
	}

	public setmedias(value: Array<string>) {
		this.medidas = value;
	}

	static factEntries(arrayFacts: Array<Object>) {
		return arrayFacts.map((obj) => { })
	}

	static factEntry(fact: Object) {
		//return new Fact(fact["title"]);
	}



}
