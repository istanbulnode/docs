---
home: true
pageClass: homepage
heroImage: /img/framework-logo.png
heroText: null
title: IstanbulJS - İlerici, Esnek ve Kullanıcı Dostu Tam Yığın NodeJS Çerçevesi
actions:
  - text: Dokümantasyon
    link: /tr/introduction/
    type: primary
  - text: Kaynak Kodu
    link: https://github.com/istanbulnode
    type: secondary
features:
  - title: İlerici
    details: İstanbul sizi rahatsız etmeyecek şekilde yenilikçi. NodeJS'in kararlı hale getirdiği tüm paketler geliştirme hedefimizdir!
  - title: Esnek
    details: İstanbul istediğiniz kadardır. İstanbul, en küçükten en büyük ölçeğe kadar tüm ölçeklere uygun altyapı sunmaktadır.
  - title: Kullanıcı Dostu
    details: İstanbul uzaylılar tarafından değil, geliştiriciler tarafından geliştirildi. Bu nedenlei ihtiyacınız olabilecek her şeye ulaşmak daha kolay ve zahmetsiz.
footer: <p class="license"><a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a> altında yayınlandı.</p><p class="copyright">Tüm hakları saklıdır. © 2022 Sami Salih İbrahimbaş</p>
footerHtml: true
---

Hayat her şeyi düşünmek için çok kısa. Bir zamanlar sizin için düşündük, şimdi gerisi aşağıdaki kodlar kadar zahmetsiz!


<CodeGroup>
  <CodeGroupItem title="HTTP" active>

```typescript:
import { createApp } from "@istanbul/app"
import { createHttpServer, createRouter } from "@istanbul/http"

const app = createApp()
app.register(createHttpServer())

const router = createRouter()
router.get("view", (req, res, next) => {
    res.success("Welcome to IstanbulJS!")
})

app.start()
```

  </CodeGroupItem>

  <CodeGroupItem title="WEBSOCKET">
  
```typescript:
import { createApp } from "@istanbul/app"
import { createWsApp } from "@istanbul/ws"

const app = createApp()
const ws = createWsApp()
app.register(ws)

ws.listen("view", (socket, req, res) => {
    res.reply("Welcome to IstanbulJS!")
})

app.start()
```

  </CodeGroupItem>
</CodeGroup>

Kodlar kısa olsa da yapabileceğimiz birçok şey var. <a href="/introduction/getting-started">Şimdi</a> başlayın.

<h3 class="text-center">Sponsorlar</h3>

<div class="sponsor-container">
<div class="sponsor-item sponsor-empty" v-for="i in 4" :key="i">
  <span class="question-mark">?</span>
</div>
<div class="sponsor-item sponsor-marketing">
  <span class="marketing-text">Sponsor olduğunuzda logonuz burada görüntülenecektir.</span>
</div>
<div class="sponsor-item sponsor-empty" v-for="i in 4" :key="i">
  <span class="question-mark">?</span>
</div>
</div>