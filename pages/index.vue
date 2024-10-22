<script setup lang="ts">
definePageMeta({
  name: 'home',
  path: '/',
})

// GÖREV 'istediğin zaman yapabilirsin'
// bu sayfa için görevin kendini burda başarılı bir şekilde tanıtman
// değerlendireceğim şey tasarım ve doğru component kullanımı olacak
</script>

<template>
  <NuxtLayout>
    <div class="w-full h-full justify-center items-center gap-6 block p-10">
      <div>
        <h3>Ben Kimim?</h3>
        <p>Merhabalar, ilk olarak sayfamı ziyaret ettiğiniz için teşekkür ederim.</p>
        <p>
          Ben Sevil Öztürk. Bursa Uludağ Üniversitesi Bilgisayar Programcılığı Bölümü’nden 2024 yılında mezun oldum.
          Üniversite eğitimim boyunca Yazılım ve Bilişim alanında birdençok etkinliğe katılım sağladım, web tasarlama alanında stajımı tamamladım. tmdb ile film sitesi , html ,css ,javascript ile web adlı web uygulamaların ve c# ile diş klinik projesi gibi birden çok projede görev yaptım.
          İlgi alanlarım arasında siber güvenlik ile web site tasarımı yer almakta. Bu alanlarda üniversite eğitimime ek olarak Bursa Uludağ Üniversitesi'nden gençler için dijital güvenlik programı ve  Web Tasarım ve Kodlama Eğitimi aldım. orta seviyede İngilizce ve başlangıç düzeyinde Almanca bilgisine sahibim.
          Staj sürecimde ulusal ve uluslararası alanda faaliyet gösteren Mert Yazılım adlı firmada çalışmaya başladım. Mert Yazılım firmasının yazılım ekibinde web uygulaması alanında kendimi geliştirdim. Bu süreç bana ne istediğim konusunda çok yardımcı oldu ve alanımı web geliştirme olarak ilerletmeye karar verdim.
          Kariyerimi web tasarımı alanında geliştirmeyi hedeflemekteyim. Bu amaçla yazılım alanındaki gelişmeleri takip etmekte ve sertifika programlarına katılmaktayım.
        </p>
        <br>
        <p>Şu an neredeyim?</p>
        <p>
          Şu anda benim ana sayfamdasınız ve sizlere birkaç örnek proje ile kendimi tanıtmak istedim. Hadi birlikte projelerime göz atalım! -.^
        </p>
      </div>
      <div class="flex justify-center items-center gap-6 block p-10">
        <ButtonGiant label="Todo List" @click="navigateTo({ name: 'todo' })" />
        <ButtonGiant label="Pokemon List" @click="navigateTo({ name: 'pokemon' })" />
      </div>
    </div>
  </NuxtLayout>
</template>
