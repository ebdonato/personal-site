<template>
    <q-page class="flex flex-center row bg-accent text-primary">
        <div class="row wrap items-center align-center justify-center">
            <div class="row col items-center align-center q-py-sm">
                <img alt="Eduardo Donato" src="~assets/logo.png" style="width: 200px; height: 200px" />

                <div class="q-ml-md text-left">
                    <div class="text-h6">Eduardo Donato</div>
                    <div class="text-subtitle2">Portefólio</div>
                </div>
            </div>

            <q-card class="col bg-primary text-accent flat">
                <q-card-section class="q-pt-none">
                    <div
                        v-for="(app, index) in apps"
                        :key="index"
                        class="row no-wrap items-center align-center q-py-sm"
                    >
                        <div class="bg-primary rounded-borders q-pa-sm">
                            <img :src="`app-logos/${app.icon}.png`" style="width: 100px; height: 100px" />
                        </div>

                        <div class="q-ml-md text-left">
                            <div>{{ app.title }}</div>
                            <div>{{ app.caption }}</div>
                        </div>
                    </div>
                </q-card-section>
            </q-card>
        </div>
    </q-page>
</template>

<script setup>
const apps = [
    {
        title: "Orçamentos do Rainério",
        caption: "Orçamentos e Recibos com visualização para impressão",
        icon: "rai-invoices",
        url: "https://calculadora-simples-ebdonato.vercel.app/",
    },
    {
        title: "Calculadora Simples",
        caption: "Uma calculadora super simples, estilo R$1,99, implementada com Framework Quasar",
        icon: "calculadora-simples",
        url: "https://calculadora-simples-ebdonato.vercel.app/",
    },
    {
        title: "PDF da Sarah",
        caption: "Ferramenta para a Sarah agrupar PDFs",
        icon: "pdf-sarah",
        url: "https://pdf-sarah.vercel.app/",
    },
    {
        title: "Treinos da Catharine",
        caption: "Catharine Pacheco Training - Consultoria de Treino Online",
        icon: "cp-training",
        url: "https://catharine.web.app/",
    },
]
</script>
