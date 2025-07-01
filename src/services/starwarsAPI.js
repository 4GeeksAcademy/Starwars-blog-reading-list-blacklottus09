const urlBase = "https://www.swapi.tech/api/"

export const getAllCharacters = async () => {
    try {
        const response = await fetch(`${urlBase}/people/`)
        const data = await response.json()

        const arrAux = await Promise.all(
            data.results.map(async (item) => {
                const res = await fetch(item.url)
                const detail = await res.json()
                return detail.result
            })
        )
        console.log(arrAux)
        return arrAux
    }
    catch (error) {
        console.log("error" + error)
    }
}

export const getAllPlanets = async () => {
    try {
        const response = await fetch(`${urlBase}/planets/`)
        const data = await response.json()

        const arrAux = await Promise.all(
            data.results.map(async (item) => {
                const res = await fetch(item.url)
                const detail = await res.json()
                return detail.result
            })
        )
        console.log(arrAux)
        return arrAux
    }
    catch (error) {
        console.log("error" + error)
    }
}
