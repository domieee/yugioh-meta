import { Stack } from "@mui/material"
import PieChart from "./components/PieChart"
import TableMUI from "./components/TabelMUI"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TablePie from "./components/TablePie";
import './statistics.scss'
import TablePieBox from "./components/TablePieBox";

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
        <TablePieBox winnerJson={winnerJson} topCutJson={topCutJson} />
    )
}