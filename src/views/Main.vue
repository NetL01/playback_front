<template>
    <div class="maindiv">
        <header>
            <div class="logo-menu">
                <h1 class="logo">PLAYBACK</h1>
                <ul class="menu">
                    <li><a href="/leaderboards">Leaderboard</a></li>
                    <li><a href="/Support">Support</a></li>
                </ul>
            </div>

            <nav>
                <ul class="topmenu">
                    <li>
                        <a href="" class="down">Login</a>
                        <ul class="submenu">
                            <li><router-link to="/">Home</router-link></li>
                            <li>
                                <router-link to="/register"
                                    >Sign Up</router-link
                                >
                            </li>
                            <li>
                                <router-link to="/login">Sign In</router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <h2 class="promo">
                LEADERBOARD<br />
                WITCH HELP DEVELOPERS<br />
                FOLLOW THE PROGRESS OF THE GAME
            </h2>
        </main>
        <footer>
            <h2>JOIN OUR COMUNITY</h2>
            <ul>
                <li>
                    <div class="c" style="margin-left: -75px">
                        <div class="t">Facebook</div>
                        <div class="i">
                            <img src="../assets/fb_dd59401afa8bd0d9e901.png" />
                        </div>
                    </div>
                </li>
                <li>
                    <div class="c">
                        <div class="t">Instagram</div>
                        <div class="i">
                            <img
                                src="../assets/inst_7b9a57944a81756b4ef4.png"
                            />
                        </div>
                    </div>
                </li>
                <li>
                    <div class="c">
                        <div class="t">
                            Twitter
                        </div>
                        <div class="i">
                            <img src="../assets/tw_c116e3798629b79d6af5.png" />
                        </div>
                    </div>
                </li>
            </ul>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'Main',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');

.maindiv {
    background-image: url(../assets/t3XjN5hV.jpg);
    height: 100vh;
    color: white;
    font-family: 'Roboto', sans-serif;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    overflow: hidden;
}

li {
    list-style-type: none;
}

header {
    display: flex;
    justify-content: space-between;
}

.logo-menu {
    margin-left: 20px;
}

.logo {
    margin-bottom: 5px;
}

.menu {
    padding: 0px;
    margin: 5px;
    margin-left: 0;
    display: flex;
}

.menu a {
    text-decoration: none;
    color: #f0f0f0;
}

.menu li {
    margin-right: 10px;
}

/* <a class="login" href="/login">LOGIN</a> */
.login {
    padding-top: 20px;
    color: white;
    text-decoration: none;
    display: block;
    height: 38px;
    width: 150px;
    text-align: center;
    border: 1px solid white;
    border-radius: 7px;
    margin-top: 20px;
    margin-right: 20px;
}

main {
    text-align: center;
    min-height: calc(100vh - 270px);
}

.promo {
    padding-top: 10%;
    font-size: 40px;
}

footer {
    text-align: center;
    height: 50px;
}

footer ul {
    display: flex;
    justify-content: space-between;
    width: 300px;
    padding: 0px;
    margin: 0 auto;
}

/* for button login */

nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
nav a {
    text-decoration: none;
    display: block;
    color: #222;
}
.topmenu > li {
    display: inline-block;
    position: relative;
}
.topmenu > li > a {
    position: relative;
    padding: 10px 15px;
    font-size: 1.5em;
    line-height: 1;
    letter-spacing: 3px;
}
.topmenu > li > a:before {
    content: '';
    position: absolute;
    z-index: 5;
    left: 50%;
    top: 100%;
    width: 10px;
    height: 10px;
    background: #0e1532;
    border-radius: 50%;
    transform: translate(-50%, 20px);
    opacity: 0;
    transition: 0.3s;
}
.topmenu li:hover a:before {
    transform: translate(-50%, 0);
    opacity: 1;
}
.submenu {
    position: absolute;
    z-index: 4;
    left: 30%;
    top: 100%;
    width: 150px;
    padding: 15px 0 15px;
    margin-top: 5px;
    background: #0e1532;
    border-radius: 5px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    visibility: hidden;
    opacity: 0;
    transform: translate(-50%, 20px);
    transition: 0.3s;
    margin-left: -40px;
}
.topmenu > li:hover .submenu {
    visibility: visible;
    opacity: 1;
    transform: translate(-50%, 0);
}
.submenu a {
    font-size: 11px;
    letter-spacing: 1px;
    padding: 5px 10px;
    transition: 0.3s linear;
}
.submenu a:hover {
    background: #0e1532;
}

/*for_login_button*/
nav {
    text-align: center;
    padding: 40px 0 0;
}
nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
nav a {
    text-decoration: none;
    display: block;
    color: #222;
}
.topmenu > li {
    display: inline-block;
    position: relative;
}
.topmenu > li > a {
    position: relative;
    padding: 10px 15px;
    font-size: 1.5em;
    line-height: 1;
    letter-spacing: 3px;
    color: #ffffff;
}
.topmenu > li > a:before {
    content: '';
    position: absolute;
    z-index: 5;
    left: 50%;
    top: 100%;
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 50%;
    transform: translate(-50%, 20px);
    opacity: 0;
    transition: 0.3s;
}
.topmenu li:hover a:before {
    transform: translate(-50%, 0);
    opacity: 1;
}
.submenu {
    position: absolute;
    z-index: 4;
    left: 50%;
    top: 100%;
    width: 150px;
    padding: 15px 0 15px;
    margin-top: 5px;
    background: #0d1533;
    border-radius: 5px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    visibility: hidden;
    opacity: 0;
    transform: translate(-50%, 20px);
    transition: 0.3s;
}
.topmenu > li:hover .submenu {
    visibility: visible;
    opacity: 1;
    transform: translate(-50%, 0);
    background: white;
}
.submenu a {
    font-size: 11px;
    letter-spacing: 1px;
    padding: 5px 10px;
    transition: 0.2s linear;
}
.submenu a:hover {
    background: #e8e8e8;
}

/*join us buttons*/
.button-join-us {
    margin: 35px 20px;
    padding: 0 15px 0 30px;
    width: 160px;
    height: 44px;
    background-repeat: no-repeat;
    background-position: 10px center;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    font-size: 1em;
    font-family: arial black, sans-serif;
    text-align: center;
    text-transform: uppercase;
}

.email__button[_ngcontent-gosu-app-c128] {
    width: 120px;
    font-size: 13px;
    line-height: 32px;
    border: 1px solid #0062ff;
    color: #0062ff;
    background: transparent;
    border-radius: 20px;
    cursor: pointer;
    outline: none;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.c {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: flex-end;
    padding: 15px;
}
.i {
    width: 50px;
}
.t {
    color: #fff;
    cursor: pointer;
}
.t:hover {
    color: #cf6;
}
.t:hover ~ .i {
    opacity: 0.6;
}

ul {
    margin-left: -30px;
}
</style>
