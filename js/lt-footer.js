function addFooter(){document.querySelector("body").insertAdjacentHTML("beforeend",'<footer class="bel-footer-block"> <div class="bel-container"> <div class="footer-block-left"> <h2 class="footer-left-title"> Informacija pirkėjui </h2> <div class="footer-left-info"> Paspaudę nuorodą ir užsisakę prekę, sutinkate su šios prekės pirkimo-pardavimo sutartimi. Mūsų svetainėje paliktas užsakymas naudojamas jūsų užsakymo užklausai patvirtinti. Jūs turite teisę įstatymų nustatyta tvarka anuliuoti sutartį, atšaukti užsakytą prekę ir grąžinti prekę. Pardavėjas įsipareigoja priimti ir nagrinėti visas Jūsų pateiktas pretenzijas, susijusias su preke ir jos pristatymu. Daugiau apie tai galite sužinoti iš mūsų konsultantų</div></div></div></footer>'),document.querySelector("head").insertAdjacentHTML("beforeend","<style>.bel-footer-block{background-color:#2f3543;padding:0;padding-top:50px;padding-bottom:50px;font-size:16px;font-family:Arial,sans-serif!important;box-sizing:border-box;margin:0;outline:1px solid #2f3543}.bel-footer-block *{font-family:Arial,sans-serif!important;box-sizing:border-box;margin:0;padding:0;text-transform: none;}.bel-container{display:flex;position:relative}.footer-block-left{width:100%;display:flex;flex-wrap:wrap;margin-right:auto}.footer-left-info{width:100%;font-size:16px;line-height:1.15;color:#666c84;text-align:left}.bel-footer-block a{color:#fff;text-decoration:none;transition:.3s}.bel-footer-block a:hover{color:#f8de66;transition:.3s}.footer-left-title{width:100%;color:#fff;font-size:22px;font-weight:700;margin:0;margin-bottom:10px;line-height:1;text-align:left}.footer-left-seller{width:100%;font-size:16px;display:block;margin-left:0;margin-bottom:10px;font-weight:400;color:#fff;line-height:1;text-align:left}@media (max-width:991.98px){.footer-left-title{font-size:18px}}@media (max-width:767px){.bel-footer-block{padding-top:20px;padding-bottom:20px}.bel-container{flex-wrap:wrap}.footer-block-left{width:100%}.footer-left-info{font-size:16px}}@media (max-width:479px){.footer-left-info{font-size: 14px;}}.bel-container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.bel-container{max-width:540px}}@media (min-width:768px){.bel-container{max-width:720px}}@media (min-width:992px){.bel-container{max-width:960px}}@media (min-width:1200px){.bel-container{max-width:1140px}}</style>"),console.log("hungary footer function completed")}let flag;flag=null!=document.querySelector(".bel-footer-block")?1:0,flag?console.log("hungary footer already added"):setTimeout(addFooter(),1e3);