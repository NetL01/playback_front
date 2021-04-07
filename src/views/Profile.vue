<template>
    <div class="as">
        <header>
            <div class="logo-menu">
                <h1 class="logo"><a href="#">PLAYBACK</a></h1>
                <ul class="menu">
                    <li><a href="#"> Leaderboard</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
            </div>
        </header>

        <div class="main inline">
            <div class="left-block"></div>
            <div class="content">
                <h1 class="hello_title">Hello, NetL01!</h1>
                <div _ngcontent-gosu-app-c125="" class="section">
                    <div _ngcontent-gosu-app-c126="" class="account-uuid">
                        <header
                            _ngcontent-gosu-app-c126=""
                            class="account-uuid__header"
                        >
                            <h1
                                style="color:#f0f0f0"
                                _ngcontent-gosu-app-c126=""
                                class="account-uuid__title"
                            >
                                Your uuid:
                                <span class="span-uuid"
                                    >742d33f8-e6a1-4391-9fb2-57f7de2b0422</span
                                >
                            </h1>
                        </header>
                        <p
                            style="color:#f0f0f0"
                            _ngcontent-gosu-app-c126=""
                            class="account-uuid__text"
                        >
                            This ID is used to recognize the user
                        </p>
                    </div>
                </div>

                <div _ngcontent-gosu-app-c125="" class="section">
                    <div _ngcontent-gosu-app-c126="" class="account-uuid">
                        <div>
                            <h1
                                style="color:#f0f0f0"
                                _ngcontent-gosu-app-c126=""
                                class="account-uuid__title"
                            >
                                Password
                            </h1>

                            <p
                                _ngcontent-gosu-app-c127=""
                                class="password__advice"
                            >
                                I recommend you to periodically update the
                                password to increase the security of your
                                account.
                            </p>
                        </div>
                        <button
                            _ngcontent-gosu-app-c128=""
                            class="email__button ng-star-inserted"
                        >
                            Reset
                        </button>
                    </div>
                </div>

                <div _ngcontent-gosu-app-c125="" class="section">
                    <div _ngcontent-gosu-app-c126="" class="account-uuid">
                        <div>
                            <h1
                                style="color:#f0f0f0"
                                _ngcontent-gosu-app-c126=""
                                class="account-uuid__title"
                            >
                                Email
                            </h1>

                            <p
                                style="color:#f0f0f0"
                                _ngcontent-gosu-app-c126=""
                                class="account-uuid__text"
                            >
                                rkraud@bk.ru
                            </p>
                        </div>
                    </div>
                </div>

                <div _ngcontent-gosu-app-c125="" class="section">
                    <div _ngcontent-gosu-app-c126="" class="account-uuid">
                        <div>
                            <h1
                                style="color:#f0f0f0"
                                _ngcontent-gosu-app-c126=""
                                class="account-uuid__title"
                            >
                                Opportunities
                            </h1>

                            <p
                                style="color:#f0f0f0"
                                _ngcontent-gosu-app-c126=""
                                class="account-uuid__text"
                            >
                                Your degree of responsibility:
                                <span class="span-responsibility"
                                    >PARTISIPANT</span
                                >
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right-block"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Dashboard',
};
</script>

<style>
html,
body {
    margin: 0;
    padding: 0;
}
.main {
    margin: 0 auto; /* Центрируем блоки */
    width: 100%; /* Задаем ширину 100%, чтобы сделать ее резиновой */
    /* Устанавливаем максимальную ширину */
}
.inline div {
    display: inline-block; /* Делаем блоки по горизонтали */
    display: -moz-inline-stack; /* Для FireFox 2, тот же самый, что и inline-block */
    vertical-align: top; /* Выравниваем их сверху */
    font-size: 16px; /* Ставим дочкам размер шрифта, иначе примет значение родителя */
    /* Для IE 6 и IE 7, чтобы блоки были по горизонтали
  zoom: 1;
  *display: inline;
  */
}
div.inline {
    font-size: 0;
} /* Ставим родителю значение 0, чтобы убрать отступы у блоков*/
.left-block {
    background: #0e1532;
    width: 20%; /*Задаем ширину в процентах чтобы сделать ее резиновой*/
    height: 300px; /* Высота блока */
}
.content {
    background: #0e1532;
    width: 60%;
    height: 300px;
}
.right-block {
    background: #0e1532;
    width: 20%;
    height: 300px;
}
/* Простой пример @media запроса*/
@media (max-width: 600px) {
    .inline div {
        display: block; /* Делаем блоки “Блочными”, т.е. друг под другом */
        width: 100%; /* Задаем на всю ширину экрана */
        height: 100px;
    }

    .account-uuid[_ngcontent-gosu-app-c126] {
        padding: 20px 32px 40px;
    }
    .section[_ngcontent-gosu-app-c125] {
        background: #0b1129;
        border-radius: 20px;
        margin: 0 auto 30px;
    }

    .hello_title {
        color: #f0f0f0;
        margin-left: 200px;
        /*font-size: 50;*/
    }

    .span-responsibility {
        color: green;
    }

    .span-uuid {
        color: green;
    }
}
</style>
