<template>
    <div class="maindiv">
        <form>
            <input type="text" placeholder="Find leaderboard..." />
            <button type="submit"></button>
        </form>
        <section class="grid">
            <article class="grid-item">
                <div class="info">
                    <h2>SpaceJumper</h2>
                    <div class="info-text">
                        <p>Leaderboard and statistic of SpaceJumper game.</p>
                    </div>
                    <div class="button-wrap">
                        <a class="atuin-btn" href="/leaderboard/SpaceJumper"
                            >VIEW MORE</a
                        >
                    </div>
                </div>
            </article>

            <!-- Еще блоки -->

            <article class="grid-item">
                <div class="info">
                    <h2>Playback platformer</h2>
                    <div class="info-text">
                        <p>
                            Leaderboard and statistic of Playback platformer
                            game.
                        </p>
                    </div>
                    <div class="button-wrap">
                        <a class="atuin-btn" href="/leaderboard-staticue"
                            >VIEW MORE</a
                        >
                    </div>
                </div>
            </article>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Leaderboards',
};
</script>

<style>
body {
    background: #0d1533;
}

* {
    box-sizing: border-box;
}
form {
    position: relative;
    width: 300px;
    margin: 0 auto;
}
input,
button {
    outline: none;
    background: transparent;
}
input {
    width: 100%;
    height: 42px;
    padding-left: 15px;
    border: 3px solid #f9f0da;
    color: white;
}
button {
    border: none;
    height: 42px;
    width: 42px;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
}
button:before {
    content: '\f002';
    font-family: FontAwesome;
    font-size: 16px;
    color: #f9f0da;
}
input:focus {
    border-color: #311c24;
}

.grid * {
    box-sizing: border-box;
}
.grid {
    /*display: grid;*/
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 30px;
    row-gap: 30px;
    padding: 20px 0;
    background: #9152f8;
}
/* Кол-во блоков на разных экранах */
@media only screen and (max-width: 1200px) {
    .grid {
        grid-template-columns: 1fr 1fr 1fr;
    }
}
@media only screen and (max-width: 900px) {
    .grid {
        grid-template-columns: 1fr 1fr;
    }
}
@media only screen and (max-width: 600px) {
    .grid {
        grid-template-columns: 1fr;
    }
}
.grid-item {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s;
    width: 100%;
    height: 100%;
}
.grid-item .image {
    height: 200px;
    overflow: hidden;
}
.grid-item .info {
    position: relative;
    height: calc(100% - 200px);
    padding: 16px 14px 80px 14px;
}
.grid-item:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);
}
.grid-item .image img {
    transition: transform 280ms ease-in-out;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.grid-item:hover .image img {
    transform: scale(1.1);
}
.info h2 {
    font-family: 'Roboto Condensed', Тahoma, sans-serif;
    color: white;
    font-size: 24px;
    font-weight: normal;
    margin: 0;
    text-align: center;
}
.info-text p {
    font-size: 15px;
    line-height: 20px;
    font-family: Verdana, sans-serif;
    margin-bottom: 10px;
    text-align: center;
}
.info-text p:last-child {
    margin-bottom: 0;
}
.grid-item .button-wrap {
    display: block;
    width: 100%;
    position: absolute;
    bottom: 14px;
    left: 0;
    text-align: center;
}
/* Кнопка подробнее */
.atuin-btn {
    display: inline-flex;
    text-decoration: none;
    position: relative;
    font-size: 20px;
    line-height: 20px;
    padding: 12px 30px;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    font-family: 'Roboto Condensed', Тahoma, sans-serif;
    background: #337ab7;
    cursor: pointer;
    border: 2px solid #bfe2ff;
}
.atuin-btn:hover,
.atuin-btn:active,
.atuin-btn:focus {
    color: #fff;
}
.atuin-btn:after,
.atuin-btn:before {
    position: absolute;
    height: 4px;
    left: 50%;
    background: #337ab7;
    bottom: -6px;
    content: '';
    transition: all 280ms ease-in-out;
    width: 0;
}
.atuin-btn:before {
    top: -6px;
}
.atuin-btn:hover:after,
.atuin-btn:hover:before,
.atuin-btn:active:after,
.atuin-btn:active:before,
.atuin-btn:focus:after,
.atuin-btn:focus:before {
    width: 100%;
    left: 0;
}
</style>
