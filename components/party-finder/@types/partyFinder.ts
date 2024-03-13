export type charDataType = {
    character: {
        "character": {
            "name": string;
            "sex": string;
            "title": string;
            "unlocked_titles": number;
            "vocation": "Elite Knight" | "Royal Paladin" | "Master Sorcerer" | "Elder Druid";
            "level": number;
            "achievement_points": number;
            "world": string;
            "former_worlds": string[],
            "residence": string;
            "guild": {
                "name": string;
                "rank": string;
            },
            "last_login": string;
            "account_status": string;
            "comment": string;
        },
        "achievements": [
            {
                "name": string;
                "grade": number;
                "secret": boolean;
            }
        ],
        "deaths": [
            {
                "time": string;
                "level": number;
                "killers": [
                    {
                        "name": string;
                        "player": boolean;
                        "traded": boolean;
                        "summon": string;
                    }
                ],
                "assists": [];
                "reason": string;
            }
        ],
        "account_information": {
            "created": string;
            "loyalty_title": string;
        },
        "other_characters": [
            {
                "name": string;
                "world": string;
                "status": string;
                "deleted": boolean;
                "main": boolean;
                "traded": boolean;
            }
        ]
    }
}

export type onlinePlayerType = { name: string; level: number; vocation: "Elite Knight" | "Royal Paladin" | "Master Sorcerer" | "Elder Druid" }
export type filteredOnlinePlayers = {
    ms: onlinePlayerType[];
    ed: onlinePlayerType[];
    ek: onlinePlayerType[];
    rp: onlinePlayerType[];
  }