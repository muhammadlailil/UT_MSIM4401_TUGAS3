<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-title>Sosial Sharing Plugins</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <div id="container">
                <h3><strong>Muhammad Lailil Mahfud</strong></h3>
                <ul>
                    <li>NIM : 042096383</li>
                    <li>Nama : Muhammad Lailil Mahfud</li>
                    <li>UPBJJ : Semarang</li>
                </ul>
                <img
                    :src="share.image"
                    alt="Universitas Terbuka"
                    style="width: 100%; margin-top: 15px"
                />
                <p>@tugas3</p>
                <ion-row class="ion-align-items-center">
                    <ion-col size="3">
                        <ion-button
                            expand="full"
                            shape="round"
                            @click="sosialShare('twitter')"
                        >
                            <ion-icon :icon="logoTwitter"></ion-icon>
                        </ion-button>
                    </ion-col>
                    <ion-col size="3">
                        <ion-button
                            expand="full"
                            shape="round"
                            color="success"
                            @click="sosialShare('whatsapp')"
                        >
                            <ion-icon :icon="logoWhatsapp"></ion-icon>
                        </ion-button>
                    </ion-col>
                    <ion-col size="3">
                        <ion-button
                            expand="full"
                            shape="round"
                            color="secondary"
                            @click="sosialShare('facebook')"
                        >
                            <ion-icon :icon="logoFacebook"></ion-icon>
                        </ion-button>
                    </ion-col>
                </ion-row>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonButton,
} from "@ionic/vue";
import {SocialSharing} from "@ionic-native/social-sharing";

import { logoTwitter, logoFacebook, logoWhatsapp } from "ionicons/icons";
export default defineComponent({
    name: "SharingAppPage",
    components: {
        IonContent,
        IonHeader,
        IonPage,
        IonToolbar,
        IonButton,
    },
    data() {
        return {
            logoTwitter,
            logoFacebook,
            logoWhatsapp,
            share : {
                image : 'https://www.ut.ac.id/sites/all/files/Logo-UT_03.png',
                url : 'https://ut.ac.id/',
                text : `Muhammad Lailil Mahfud
                NIM : 042096383
                UPBJJ : Semarang`
            }
        };
    },
    methods: {
        sosialShare(via: string) {
            switch (via) {
                case "twitter":
                    SocialSharing.shareViaTwitter(
                        this.share.text,
                        this.share.image,
                        this.share.url
                    )
                    break;
                case "whatsapp":
                    SocialSharing.shareViaWhatsApp(
                        this.share.text,
                        this.share.image,
                        this.share.url
                    )
                    break;
                case "facebook":
                    SocialSharing.shareViaFacebook(
                        this.share.text,
                        this.share.image,
                        this.share.url
                    )
                    break;
            }
        },
    },
});
</script>
<style>
:root {
    --ion-background-color: #fff;
}
</style>
<style scoped>
#container {
    padding: 15px;
}
h3 {
    margin: 0px;
}
ul {
    list-style: none;
    padding-left: 0px;
}
.ion-align-items-center {
    justify-content: center;
}
</style>