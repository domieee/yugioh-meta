import { Stack } from "@mui/material"
import PieChart from "./components/PieChart"
import TableMUI from "./components/TabelMUI"
import './statistics.scss'

async function fetchStatisticData() {
    const winnerStatisticResponse = await fetch(`${process.env.BACKEND_URL}/winner-breakdown`, {
        validate: {
            next: 20
        }
    })
    return winnerStatisticResponse
}
async function fetchTopCutStatisticData() {
    const topCutStatisticResponse = await fetch(`${process.env.BACKEND_URL}/overall-breakdown`, {
        validate: {
            next: 20
        }
    })
    return topCutStatisticResponse
}

export default async function Statistics() {

    const winnerStatistics = await fetchStatisticData()
    const winnerJson = await winnerStatistics.json()

    const topCutStatistics = await fetchTopCutStatisticData()
    const topCutJson = await topCutStatistics.json()


    return (
        <section className="statisticPage">

            <h1>Statistics</h1>
            <h2>Winner Breakdown</h2>
            <article className="statisticStack">
                <div className="canvasContainer">
                    <PieChart data={winnerJson} />
                </div>
                <div className="tableContainer">
                    <TableMUI
                        table='winner-breakdown'
                        data={winnerJson} />
                </div>
            </article>
            <h2>Overall Top Cut Breakdown</h2>
            <article className="statisticStack">
                <div className="canvasContainer">
                    <PieChart data={topCutJson} />
                </div>
                <div className="tableContainer">
                    <TableMUI data={topCutJson} />
                </div>
            </article>
        </section >
    )
}