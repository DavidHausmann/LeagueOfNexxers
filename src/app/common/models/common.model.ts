export interface IToken {
    token: string;
}

export interface IRegisterPayload {
    name: string;
    birthDate: string;
    username: string;
    password: string;
}

export interface IChampionInfo {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  }
  
  export interface IChampionImage {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  }
  
  export interface IChampionStats {
    hp: number;
    hpperlevel: number;
    mp: number;
    mpperlevel: number;
    movespeed: number;
    armor: number;
    armorperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
    attackrange: number;
    hpregen: number;
    hpregenperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    crit: number;
    critperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackspeedperlevel: number;
    attackspeed: number;
  }
  
  export interface IChampionImages {
    splash: string;
    icon: string;
    loading: string;
  }
  
  export interface Champion {
    version: string;
    id: string;
    key: string;
    name: string;
    title: string;
    blurb: string;
    info: IChampionInfo;
    image: IChampionImage;
    tags: string[];
    partype: string;
    stats: IChampionStats;
    images: IChampionImages;
  }
  