import PieChart from "./components/PieChart"

async function fetchStatisticData() {
    const statisticResponse = await fetch(`${process.env.BACKEND_URL}/winner-breakdown`, {
        validate: {
            next: 20
        }
    })

    console.log('fetching statistic data')

    return statisticResponse
}

export default async function Statistics() {

    const statistics = await fetchStatisticData()
    console.log(statistics)
    const json = await statistics.json()


    return (
        <>
            <h1>Statistics</h1>
            <PieChart data={json} />
        </>
    )
}