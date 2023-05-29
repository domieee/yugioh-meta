import PieChart from "./components/PieChart"

async function fetchStatisticData() {
    const statisticResponse = await fetch('http://localhost:4200/winner-breakdown', {
        validate: {
            next: 20
        }
    })

    console.log('fetching statistic data')

    return statisticResponse
}

export default async function Statistics() {

    const statistics = await fetchStatisticData()
    const json = await statistics.json()


    return (
        <>
            <h1>Statistics</h1>
            <PieChart data={json} />
        </>
    )
}