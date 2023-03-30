import { IplayersData, IplayerBalance, Ipayments, topsType, IgetPayments } from './@types/loot-spliter'

export function getPayments(partyData: string): IgetPayments {

    const withoutFirstSection = removeFirstSection(partyData)

    const players = findPlayers(withoutFirstSection)

    const huntData = getHuntData(players, withoutFirstSection)

    const paymentsResult = findPayments(huntData.map(player => { return { name: player.name, balance: player.balance } }))



    return {
        error: false,
        tops: getPerformanceData(huntData),
        numberOfPlayers: players.length,
        individualProfit: Number(paymentsResult.individualProfit.toFixed()),
        payments: paymentsResult.payments
    }
}

function getPerformanceData(huntData: IplayersData[]) {
    const tops: topsType = {
        //loot: [],
        //supplies: [],
        //balance: [], 
        damage: [],
        healing: [],
    }

    Object.keys(tops).map((value) => {
        tops[value as keyof typeof tops] = huntData.map(data => {
            return {
                name: data.name,
                total: data[value as keyof typeof tops]
            }
        }).sort((a, b) => b.total - a.total)
    })

    return tops
}

function getHuntData(players: string[], partyData: string) {
    let tempPartyData = partyData
    const completedData = players.reduce<IplayersData[]>((acc, cur, i) => {
        const lootIndex = tempPartyData.indexOf("Loot:")
        const suppliesIndex = tempPartyData.indexOf("Supplies:")
        const balanceIndex = tempPartyData.indexOf("Balance:")
        const damageIndex = tempPartyData.indexOf("Damage:")
        const healingIndex = tempPartyData.indexOf("Healing:")

        const tempObj = {
            name: cur,
            loot: Number(tempPartyData.substring(lootIndex + "Loot:".length, suppliesIndex).replaceAll(",", "")),
            supplies: Number(tempPartyData.substring(suppliesIndex + "Supplies:".length, balanceIndex).replaceAll(",", "")),
            balance: Number(tempPartyData.substring(balanceIndex + "Balance:".length, damageIndex).replaceAll(",", "")),
            damage: Number(tempPartyData.substring(damageIndex + "Damage:".length, healingIndex).replaceAll(",", "")),
            healing: Number(tempPartyData.substring(healingIndex + "Healing:".length, players[i + 1] ? tempPartyData.indexOf(players[i + 1]) : tempPartyData.length).replaceAll(",", "")),

        }

        acc.push(tempObj)

        if (players.length > i + 1) {
            tempPartyData = tempPartyData.substring(tempPartyData.indexOf(players[i + 1]), tempPartyData.length)
        }
        return acc
    }, [])

    return completedData
}



function removeFirstSection(partyData: string) {
    let tempData = partyData
    const balanceIndex = partyData.indexOf("Balance:") + 8
    // remove leader world to get a cleaner data
    tempData = tempData.replace("(Leader)", "")

    // remove first section that we don't need
    tempData = tempData.substring(balanceIndex, partyData.length)

    return tempData

}


function findPlayers(partyData: string) {
    let temp = partyData
    const names = []
    for (let i = 0; i < getNumberOfPlayers(partyData); i++) {
        if (temp.indexOf("Loot:") > -1) {
            const name = temp.substring(0, temp.indexOf("Loot:"))
            names.push(
                name
                    .replace(/[0-9]/g, '')
                    .replaceAll(",", "")
                    .replace(/(\r\n|\n|\r)/gm, "")
                    .replaceAll("-", "")
                    .trim()
            )
            temp = temp.slice(temp.indexOf("Healing:") + "Healing:".length)
        }
    }

    return names
}


function findPayments(playersAndBalances: IplayerBalance[]) {
    const numberOfPlayers = playersAndBalances.length
    const totalProfit = playersAndBalances.reduce((acc, cur) => { acc += cur.balance; return acc }, 0)
    const individualProfit = totalProfit / numberOfPlayers

    const correctedBalance: IplayerBalance[] = [];
    const payments: Ipayments[] = [];

    playersAndBalances.forEach(playerAndBalance => {
        const name = playerAndBalance.name
        const balance = individualProfit - playerAndBalance.balance

        correctedBalance.push({ name, balance });
    })

    playersAndBalances.forEach((playerAndBalance, i) => {

        if (correctedBalance[i]["balance"] < 0) {
            while (Math.abs(correctedBalance[i]["balance"]) > 5) {
                for (let j = 0; j < numberOfPlayers; j++) {

                    if (correctedBalance[j]["balance"] > 0) {
                        if (correctedBalance[j]["balance"] > Math.abs(correctedBalance[i]["balance"])) {

                            correctedBalance[j]["balance"] = correctedBalance[j]["balance"] + correctedBalance[i]["balance"];

                            payments.push({
                                name: correctedBalance[i]["name"],
                                amount: Number(Math.abs(correctedBalance[i]["balance"]).toFixed()),
                                payTo: correctedBalance[j]["name"],
                            });

                            correctedBalance[i]["balance"] = 0;

                        } else {
                            correctedBalance[i]["balance"] = correctedBalance[i]["balance"] + correctedBalance[j]["balance"];
                            correctedBalance[j]["balance"] = Math.round(correctedBalance[j]["balance"]);

                            payments.push({
                                name: correctedBalance[i]["name"],
                                amount: Number(Math.abs(correctedBalance[j]["balance"]).toFixed()),
                                payTo: correctedBalance[j]["name"],
                            });

                            correctedBalance[j]["balance"] = 0;
                        }
                    }
                }
            }
        }
    })


    return { payments: payments.filter(payment => payment.amount !== 0), individualProfit }
}

function getNumberOfPlayers(partyDataWithoutFirstSection: string) {
    return (partyDataWithoutFirstSection.match(/Damage:/g) || []).length
}


export function validatePartyData(partyData: string) {
    if (!partyData ||
        !partyData.includes("Balance") ||
        !partyData.includes("Supplies") ||
        !partyData.includes("Loot") ||
        !partyData.includes("Session data") ||
        !partyData.includes("Loot Type") ||
        partyData.length < 50) {
        return false
    }
    return true
}


export function toK(value: number) {
    return `${Math.round(value / 1000)}k`

}