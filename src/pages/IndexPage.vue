<template>
    <q-page class="column justify-between text-primary gradient-bg">
        <div class="text-center q-gutter-xs">
            <q-btn
                flat
                size="md"
                v-for="(link, index) in links"
                :key="index"
                color="primary"
                :icon="link.icon"
                :aria-label="link.caption"
                type="a"
                :href="link.url"
                target="_blank"
            >
                <q-tooltip :delay="1000"> {{ link.caption }} </q-tooltip>
            </q-btn>
        </div>

        <div class="row wrap items-center justify-center">
            <!-- the brand -->
            <div class="column col-12 col-md-4 items-center align-center q-py-sm">
                <img alt="Eduardo Donato" src="~assets/logo-transparent.png" style="width: 200px; height: 200px" />

                <div class="text-center">
                    <div class="text-h6">Eduardo Donato</div>
                    <div class="text-subtitle2">Portefólio</div>
                </div>
            </div>

            <!-- the apps -->
            <div class="column col-12 col-md-4 q-gutter-xs q-pa-sm items-center">
                <q-card
                    v-for="(app, index) in apps"
                    :key="index"
                    class="bg-primary text-accent"
                    flat
                    bordered
                    style="width: 100%; max-width: 400px"
                >
                    <q-card-section horizontal>
                        <div class="bg-primary rounded-borders q-pa-sm column justify-center">
                            <div>
                                <a :href="app.url">
                                    <img :src="`app-logos/${app.icon}.png`" style="width: 100px; height: 100px" />
                                </a>
                            </div>
                        </div>

                        <q-card-section class="column justify-between">
                            <div class="text-center q-mb-sm text-bold">{{ app.title }}</div>
                            <div>{{ app.caption }}</div>
                            <div class="text-right">
                                <q-btn
                                    icon="fa-solid fa-up-right-from-square"
                                    size="xs"
                                    dense
                                    flat
                                    type="a"
                                    :href="app.url"
                                    target="_blank"
                                />
                            </div>
                        </q-card-section>
                    </q-card-section>
                </q-card>
            </div>
        </div>

        <div></div>
    </q-page>
</template>

<script setup>
import apps from "assets/apps.js"
import links from "assets/links.js"

document.title = "Eduardo Donato | Portefólio"
</script>
