export interface IDefinition {
    word: string;
    phonetic?: string;
    phonetics?: IPhonetics[];
    meanings?: IMeanings[];
    license?: ILicence;
    sourceUrls?: string[];
}

interface IPhonetics {
    text?: string;
    audio?: string;
    sourceUrl?: string;
    license?: ILicence;
}

interface ILicence {
    name?: string;
    url?: string;
}

export interface IMeanings {
    partOfSpeech?: string;
    definitions?: IDefinitions[];
    synonyms?: string[];
    antonyms?: string[];
}

export interface IDefinitions {
    definition?: string;
    synonyms?: string[];
    antonyms?: string[];
    examplew: string;
}

export interface ITabButton {
    active: boolean;
}