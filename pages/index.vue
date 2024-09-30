<template>
    <main>
        <section class="hero">
            <div class="hero-content">
                <h1>Writer Society</h1>
                <p>Write your story and share it with the world</p>
                <button id="btn-get-started" type="button" @click="showDialog = true">Get Started</button>
            </div>
        </section>

        <section>
            <header>
                <h2 class="ml-2 mt-2 mb-0">Most popular stories</h2>
                <div class="divider"></div>
            </header>
            
            <section class="cards-section">
                <article class="card">
                    <div class="card-content">
                        <h3>La historia de Mariel y el capitán</h3>
                        <p>Esta historia se trata sobre la vida de Mariel y el capitán, los de la famosa canción de Sui Generis. Aquella canción que tanto le gusta a mis padres desde que eran jóvenes.</p>
                        <button>Read</button>
                    </div>
                </article>

                <article class="card">
                    <div class="card-content">
                        <h3>La historia de Mariel y el capitán</h3>
                        <p>Esta historia se trata sobre la vida de Mariel y el capitán, los de la famosa canción de Sui Generis. Aquella canción que tanto le gusta a mis padres desde que eran jóvenes.</p>
                        <button>Read</button>
                    </div>
                </article>

                <article class="card">
                    <div class="card-content">
                        <h3>La historia de Mariel y el capitán</h3>
                        <p>Esta historia se trata sobre la vida de Mariel y el capitán, los de la famosa canción de Sui Generis. Aquella canción que tanto le gusta a mis padres desde que eran jóvenes.</p>
                        <button>Read</button>
                    </div>
                </article>

                <article class="card">
                    <div class="card-content">
                        <h3>La historia de Mariel y el capitán</h3>
                        <p>Esta historia se trata sobre la vida de Mariel y el capitán, los de la famosa canción de Sui Generis. Aquella canción que tanto le gusta a mis padres desde que eran jóvenes.</p>
                        <button>Read</button>
                    </div>
                </article>

                <article class="card">
                    <div class="card-content">
                        <h3>La historia de Mariel y el capitán</h3>
                        <p>Esta historia se trata sobre la vida de Mariel y el capitán, los de la famosa canción de Sui Generis. Aquella canción que tanto le gusta a mis padres desde que eran jóvenes.</p>
                        <button>Read</button>
                    </div>
                </article>

                <article class="card">
                    <div class="card-content">
                        <h3>La historia de Mariel y el capitán</h3>
                        <p>Esta historia se trata sobre la vida de Mariel y el capitán, los de la famosa canción de Sui Generis. Aquella canción que tanto le gusta a mis padres desde que eran jóvenes.</p>
                        <button>Read</button>
                    </div>
                </article>

                <article class="card">
                    <div class="card-content">
                        <h3>La historia de Mariel y el capitán</h3>
                        <p>Esta historia se trata sobre la vida de Mariel y el capitán, los de la famosa canción de Sui Generis. Aquella canción que tanto le gusta a mis padres desde que eran jóvenes.</p>
                        <button>Read</button>
                    </div>
                </article>

                <article class="card">
                    <div class="card-content">
                        <h3>La historia de Mariel y el capitán</h3>
                        <p>Esta historia se trata sobre la vida de Mariel y el capitán, los de la famosa canción de Sui Generis. Aquella canción que tanto le gusta a mis padres desde que eran jóvenes.</p>
                        <button>Read</button>
                    </div>
                </article>
            </section>
        </section>

        <DialogSignUp v-model="showDialog" />
    </main>
</template>

<script setup lang="ts">
const showDialog = ref(false)
</script>