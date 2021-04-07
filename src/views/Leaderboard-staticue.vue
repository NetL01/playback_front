<template>
    <div class="maindiv">
        <div class="container">
            <div class="logo-menu">
                <h1 class="logo"><a href="/">PLAYBACK</a></h1>
                <ul class="menu">
                    <li><a href="/leaderboards">Leaderboards</a></li>
                    <li><a href="/">Support</a></li>
                </ul>
            </div>
            <div class="block-container">
                <div class="statisticue">
                    <div class="row">
                        <div class="col-xl-4 d-none d-md-block col-md-4"></div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Position</th>
                                    <th>Game</th>
                                    <th>NickName</th>
                                    <th>Score</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Dota 2</td>
                                    <td>NetL01</td>
                                    <td>10285</td>
                                    <td>30/03/2021</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Dota 2</td>
                                    <td>EugeneNike</td>
                                    <td>8308</td>
                                    <td>28/03/2021</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Dota 2</td>
                                    <td>ybicanooobov</td>
                                    <td>7625</td>
                                    <td>29/03/2021</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Dota 2</td>
                                    <td>Havlong</td>
                                    <td>3750</td>
                                    <td>17/08/2020</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Dota 2</td>
                                    <td>deadinside_2_pos</td>
                                    <td>10</td>
                                    <td>30/03/2021</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Leaderboard-staticue',
};
</script>

<style>
body {
    background: #0d1533;
}
.block-container {
    /*width: 500px;*/
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    padding: 10px;

    background: #9152f8;
    background: -webkit-linear-gradient(top, #7579ff, #b224ef);
    background: -o-linear-gradient(top, #7579ff, #b224ef);
    background: -moz-linear-gradient(top, #7579ff, #b224ef);
    background: linear-gradient(top, #7579ff, #b224ef);
}

.statisticue {
    background-color: white;
    width: 100%;
    border-radius: 10px, 10px, 0px, 0px;
    overflow: hidden;
    padding: 10px;
    /* height: 20px;*/
}

.button1 {
    margin: 10px;
}

.statisticue-graph1 {
    padding: 10px;
    border-radius: 7px;
    background: #76d8b0;
    display: block;
    display: flex;
    color: white;
}
.statisticue-graph2 {
    padding: 10px;
    border-radius: 7px;
    background: #ff8fb0;
    display: block;
}
.statisticue-graph3 {
    padding: 10px;
    border-radius: 7px;
    background: #cea1ff;
    display: block;
}

.no_pad {
    padding-right: 0px;
}

.statisticue-graph1 img {
    display: inline-block;
}
.statisticue-graph2 img {
    display: inline-block;
}
.statisticue-graph3 img {
    display: inline-block;
}
.statisticue-graph1 p {
    display: inline-block;
}
.statisticue-graph2 p {
    display: inline-block;
}
.statisticue-graph3 p {
    display: inline-block;
}

.table {
    width: 100%;
    border: none;
    margin-bottom: 20px;
}
.table thead th {
    font-weight: bold;
    text-align: left;
    border: none;
    padding: 10px 15px;
    background: #d8d8d8;
    font-size: 14px;
}
.table thead tr th:first-child {
    border-radius: 8px 0 0 8px;
}
.table thead tr th:last-child {
    border-radius: 0 8px 8px 0;
}
.table tbody td {
    text-align: left;
    border: none;
    padding: 10px 15px;
    font-size: 14px;
    vertical-align: top;
}
.table tbody tr:nth-child(even) {
    background: #f3f3f3;
}
.table tbody tr td:first-child {
    border-radius: 8px 0 0 8px;
}
.table tbody tr td:last-child {
    border-radius: 0 8px 8px 0;
}

li {
    list-style-type: none;
    color: white;
    font-family: 'TT Norms Bold';
}

.logo {
    margin-bottom: 5px;
    color: white;
    font-family: 'TT Norms Bold';
}

.menu {
    padding: 0px;
    margin: 5px;
    margin-left: 0px;
    display: flex;
    font-family: 'TT Norms Bold';
    justify-content: center;
}

.menu li {
    margin-right: 10px;
    font-family: 'TT Norms Bold';
}
a {
    text-decoration: none;
    color: #f0f0f0;
}
</style>
